import { site } from "@/lib/site";
import ReviewsSlider from "./ReviewsSlider";
import SectionHead from "./SectionHead";

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="section relative overflow-hidden border-y border-line bg-panel/60"
    >
      {/* Decorative radial glow centered behind the reviews track */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <SectionHead
          id="reviews-title"
          title="What clients say."
          lede="Feedback from freelance and company work over the last four years."
        />
        {/* The slider is the only interactive part, so only it is a client component. */}
        <ReviewsSlider />
        <div data-reveal className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
          <p className="text-[0.95rem] text-muted">
            100% 5-star feedback across all completed contracts.
          </p>
          <a
            href={site.links.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-[0.88rem] font-bold text-accent transition duration-200 hover:border-accent hover:bg-accent/10"
          >
            More reviews on Fiverr
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

