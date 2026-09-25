"use client";

import { useEffect } from "react";

// Scroll reveal, mounted once in app/layout.tsx.
//
// One IntersectionObserver serves the whole page, the same "one listener, no
// state" approach as Spotlight and ScrollToTop: any element carrying a
// `data-reveal` attribute starts shifted and faded (globals.css) and gets the
// `is-in` class the first time it comes into view. Sections stay server
// components — they only add the attribute.
//
//   <article data-reveal>…</article>            slides up
//   <div data-reveal="left">…</div>             slides in from the left
//   <div data-reveal="fade">…</div>             cross-fades only
//
// A row of cards can be staggered by giving each one its own delay:
//
//   <li data-reveal style={{ "--reveal-delay": `${i * 70}ms` }}>
//
// With `prefers-reduced-motion: reduce` everything is shown at once instead of
// observed, and globals.css forces the same state as a second safety net.
export default function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!nodes.length) return;

    const show = (node: HTMLElement) => node.classList.add("is-in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          // One way only: nothing fades back out when you scroll up again.
          observer.unobserve(entry.target);
        }
      },
      // A little inside the viewport, so the movement finishes as the element
      // settles rather than starting at the very edge of the screen.
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}