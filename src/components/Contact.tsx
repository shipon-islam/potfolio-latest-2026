import { site } from "@/lib/site";
import type { CSSProperties } from "react";
import ContactForm from "./ContactForm";
import ResumeButton from "./ResumeButton";
import SocialIcon from "./SocialIcon";

// One card per way to reach me, in the order they are shown. `icon` picks a
// brand mark from components/SocialIcon.tsx, except the envelope, which is drawn
// here because no brand sits behind it (see `envelope` below).
const links = [
  {
    label: "Fiverr",
    icon: "fiverr" as const,
    hint: "Level 1 seller · order directly",
    href: site.links.fiverr,
  },
  {
    label: "GitHub",
    icon: "github" as const,
    hint: "github.com/shipon1998",
    href: site.links.github,
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    hint: "Connect with me",
    href: site.links.linkedin,
  },
  {
    label: "Email",
    icon: "mail" as const,
    hint: site.email,
    href: `mailto:${site.email}`,
  },
];

// Feather-style glyphs on the same 24x24 grid as Icon.tsx: the envelope for the
// Email card, the two halves of the paper plane (lit wing + shaded wing), and
// the arrow that closes every card.
const envelope =
  "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6";
const plane = ["M22 2 11 13 2 9z", "M22 2 15 22 11 13z"];
const arrow = "M5 12h14M13 6l6 6-6 6";

// The heading doodle: three short slanted strokes, the same gesture the hero
// makes with its SVG strokes. Absolute, so it never pushes the text around.
function SpeedLines() {
  return (
    <svg
      viewBox="0 0 30 26"
      className="pointer-events-none absolute -right-11 top-1 hidden h-7 w-8 text-accent sm:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M22 3 9 13M27 12l-9 8M16 1 6 9" className="opacity-80" />
    </svg>
  );
}

// The plane that leaves the form: a dashed trail rising from the panel's corner
// up to a plane, drawn with the same shape as the "Send message" button.
function PlaneTrail() {
  return (
    <svg
      viewBox="0 0 200 140"
      className="pointer-events-none absolute -right-2 -top-[86px] z-10 hidden h-[118px] w-[196px] text-accent lg:block"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 132C58 120 104 98 142 64"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 9"
        className="opacity-55"
      />
      <g transform="translate(142 18) rotate(-6) scale(2.2)">
        <path d={plane[0]} fill="currentColor" />
        <path d={plane[1]} fill="currentColor" className="opacity-55" />
      </g>
    </svg>
  );
}

// Faint route map behind the "Based in ..." card: a graticule, a dashed route
// and a location pin. Drawn rather than shipped as a bitmap, so it costs nothing
// to download and follows the theme like everything else.
function RouteMap() {
  return (
    <svg
      viewBox="0 0 240 120"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-[52%] text-accent/45 sm:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      <g className="opacity-30">
        <path d="M0 30h240M0 60h240M0 90h240M40 0v120M100 0v120M160 0v120M220 0v120" />
      </g>
      <path
        d="M6 106C52 98 118 74 176 34"
        strokeDasharray="6 9"
        strokeWidth="1.8"
        className="opacity-70"
      />
      <path
        d="M176 10a11 11 0 0 0-11 11c0 8.5 11 21 11 21s11-12.5 11-21a11 11 0 0 0-11-11z"
        className="fill-accent/20"
        strokeWidth="2"
      />
      <circle cx="176" cy="21" r="3.6" strokeWidth="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section relative overflow-hidden"
    >
      <span
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="wrap">
        <div className="grid items-start gap-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[1fr_1.05fr]">
          <div data-reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 flex-none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={plane[0]} />
                  <path d={plane[1]} className="opacity-60" />
                </svg>
                Get in touch
              </span>
            </div>

            <h2
              id="contact-title"
              className="mt-5 text-[clamp(1.6rem,2.9vw,2.2rem)] leading-[1.16] tracking-tight"
            >
              <span className="relative inline-block">
                Let’s build something.
                <SpeedLines />
              </span>
              {/* Same gradient sweep as the hero name (globals.css). */}
              <span className="grad-text animate-pan block">
                From idea to launch
              </span>
            </h2>

            <p className="mt-4 max-w-[56ch] text-muted">
              Tell me about the project and I&apos;ll reply with questions, a
              rough plan and a timeline. Websites, web apps, APIs, Python
              scripts, Docker setups or n8n automations are all fine.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-[0.85rem] font-semibold text-fg backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
                </span>
                <span>
                  Available for freelance{" "}
                  <span className="hidden sm:inline">
                    work and full-time roles
                  </span>
                </span>
              </span>
              <ResumeButton className="text-sm px-4 py-1.5" />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {links.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="spot group flex items-center gap-3.5 rounded-2xl border border-line bg-panel/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-halo/5 text-accent ring-1 ring-inset ring-accent/25 transition duration-200 group-hover:from-accent/30 group-hover:to-halo/10">
                    {channel.icon === "mail" ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={envelope} />
                      </svg>
                    ) : (
                      <SocialIcon
                        name={channel.icon}
                        className={`${channel.icon === "fiverr" ? "h-[1.4rem] w-[1.4rem]" : "h-4 w-4"}`}
                      />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.95rem] font-semibold text-fg transition group-hover:text-accent">
                      {channel.label}
                    </span>
                    <span className="block truncate text-[0.82rem] text-muted">
                      {channel.hint}
                    </span>
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-muted transition duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path d={arrow} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="spot relative mt-3 flex items-center gap-3.5 overflow-hidden rounded-2xl border border-line bg-panel/70 p-4">
              <RouteMap />
              <span className="relative z-[1] grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-halo/5 text-accent ring-1 ring-inset ring-accent/25">
                <svg
                  viewBox="0 0 120 120"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="60" cy="60" r="48" />
                  <ellipse cx="60" cy="60" rx="22" ry="48" />
                  <path d="M12 60h96M22 34h76M22 86h76" />
                </svg>
                <span
                  className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#16a34a] ring-4 ring-emerald-500/20"
                  aria-hidden="true"
                />
              </span>
              <span className="relative z-[1] min-w-0">
                <span className="block font-display text-[0.95rem] font-semibold text-fg">
                  Based in {site.location}
                </span>
                <span className="block text-[0.85rem] text-muted">
                  GMT+6 · working with teams and clients worldwide
                </span>
              </span>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="relative"
          >
            <PlaneTrail />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
