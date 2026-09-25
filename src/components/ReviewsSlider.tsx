"use client";

import { reviews, type Review } from "@/lib/site";
import Image from "next/image";
import Icon from "./Icon";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, TouchEvent } from "react";

// Client review slider, used by components/Reviews.tsx.
//
// CSS owns the layout: globals.css sets `--per-view` (1 card on mobile, 2 from
// `md`, 3 from `lg`) and slides the track by `--reviews-index` steps of that
// size. This component keeps the index, reads `--per-view` back for the dots and
// the autoplay limit, and writes only the index — so the first paint is right at
// every width and moving the slider never measures anything.
//
// Autoplay runs every AUTOPLAY_MS and wraps at the end. It takes a break while
// the pointer or keyboard focus is inside the slider, and stops for good once
// the visitor drives it themselves (arrows, dots or a swipe) — that is the
// "pause on interaction" behaviour, and it means the slider never fights the
// reader. It also never runs for `prefers-reduced-motion: reduce` or in a hidden
// tab.
const AUTOPLAY_MS = 5500;
const SWIPE_MIN_PX = 40;

const chevronLeft = "M15 6l-6 6 6 6";
const chevronRight = "M9 6l6 6-6 6";
const externalIcon = "M7 17 17 7M9 7h8v8";

// "John Doe" -> "JD", "Aeon Systems Inc." -> "AS": the avatar fallback.
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function ReviewsSlider() {
  const total = reviews.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // 0 until the track has been measured, so `view` stays sane on the server.
  const [perView, setPerView] = useState(0);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [held, setHeld] = useState(false);

  const view = perView || 1;
  const last = Math.max(0, total - view); // last reachable step

  // Read the card count back out of CSS, and re-read it when the window changes
  // size (the breakpoints live in globals.css).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sync = () => {
      const next = Number.parseInt(
        window.getComputedStyle(track).getPropertyValue("--per-view"),
        10
      );
      if (!Number.isFinite(next) || next < 1) return;
      // Compare first: a resize should not re-render on every event.
      setPerView((current) => (current === next ? current : next));
    };

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  // Fewer cards on screen means fewer steps: pull the index back into range.
  useEffect(() => {
    setIndex((current) => (current > last ? last : current));
  }, [last]);

  useEffect(() => {
    if (!autoplay || held || last === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      // A background tab should not come back to a carousel that moved on.
      if (document.hidden) return;
      setIndex((current) => (current >= last ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [autoplay, held, last]);

  const step = (delta: number) => {
    setAutoplay(false); // the visitor took over: stop moving on its own
    setIndex((current) => Math.min(Math.max(current + delta, 0), last));
  };

  const jump = (target: number) => {
    setAutoplay(false);
    setIndex(Math.min(Math.max(target, 0), last));
  };

  // Arrow keys work whenever focus is inside the slider (standard carousel
  // behaviour): the keyboard equivalent of the arrow buttons.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  // A short sideways drag moves one card; a vertical drag stays a page scroll.
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    const touch = event.changedTouches[0];
    if (!start || !touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  };

  const arrow =
    "spot grid h-10 w-10 flex-none place-items-center rounded-full border border-line bg-bg text-fg transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-35";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onKeyDown={onKeyDown}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* `-mx-2` cancels the slides' `px-2`, so the outer cards line up with the
          section heading while still keeping a gap between cards. */}
      <div className="-mx-2 overflow-hidden">
        <div
          ref={trackRef}
          className="reviews-track"
          style={{ "--reviews-index": String(index) } as CSSProperties}
        >
          {reviews.map((review, position) => (
            <div
              key={review.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${position + 1} of ${total}`}
              className="reviews-slide flex px-2"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: last + 1 }, (_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => jump(dot)}
              aria-label={`Show review ${dot + 1} of ${last + 1}`}
              aria-current={dot === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dot === index ? "w-7 bg-accent" : "w-2.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={index === 0}
            aria-label="Previous reviews"
            className={arrow}
          >
            <Icon d={chevronLeft} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={index >= last}
            aria-label="Next reviews"
            className={arrow}
          >
            <Icon d={chevronRight} className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// One review card. `flex-1` inside the flex slide fills the slide's width and,
// through the track's default stretch alignment, the tallest card's height, so
// every card in a row is the same size.
function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="spot relative m-0 flex flex-1 flex-col gap-[18px] overflow-hidden rounded-[20px] border border-line bg-bg p-[26px]">
      {/* Big quotation mark watermark in the corner */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1 select-none font-display text-[4.5rem] font-black leading-none text-accent/10"
      >
        &ldquo;
      </span>
      <span
        className="flex items-center gap-1"
        aria-label={`Rated ${review.rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={i < review.rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={i < review.rating ? "text-[#f5a623]" : "text-muted/35"}
          >
            <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.9z" />
          </svg>
        ))}
      </span>

      <blockquote className="m-0">{review.quote}</blockquote>

      <figcaption className="mt-auto flex items-center gap-3">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 flex-none rounded-full border border-line object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-12 w-12 flex-none place-items-center rounded-full border border-line bg-panel font-display text-[0.95rem] font-semibold text-accent"
          >
            {initials(review.name)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-bold">{review.name}</span>
          <span className="block text-[0.92rem] font-medium text-muted">
            {review.role}
          </span>
        </span>
      </figcaption>

      {review.source && (
        <a
          href={review.source.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 text-[0.9rem] font-bold text-accent hover:underline"
        >
          {review.source.label}
          <Icon d={externalIcon} className="h-4 w-4" />
        </a>
      )}
    </figure>
  );
}

