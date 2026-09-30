import { heroHighlights, heroSocials, heroStats, site } from "@/data/site";
import Image from "next/image";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";
import { WorldwideIcon } from "./SvgIcon";
import TechIcon from "./TechIcon";
// The logos that float around the portrait, one per side so the ring never
// crowds the face. Hidden below `md` (the hero chip row already shows the same
// logos there).
const orbit = [
  { name: "React.js", className: "left-[13%] top-[-9%] animate-float-a" },
  { name: "Docker", className: "left-[58%] top-[-15%] animate-float-c" },
  { name: "Next.js", className: "right-[-10%] top-[14%] animate-float-b" },
  { name: "Javascript", className: "left-[-16%] bottom-[36%] animate-float-b" },
  {
    name: "TypeScript",
    className: "right-[-14%] bottom-[24%] animate-float-c",
  },
  { name: "n8n", className: "right-[13%] bottom-[-11%] animate-float-a" },
  { name: "Python", className: "right-[60%] bottom-[-16%] animate-float-a" },
];

// The hero arrives in order rather than all at once: `animate-rise-in` is a
// keyframe with `both` fill, so the delay only holds it back until its turn.
const enter = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[min(88vh,760px)] items-center overflow-hidden border-b border-line py-[clamp(48px,8vw,96px)]"
    >
      {/* Animated background strokes */}
      <svg
        className="strokes pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          className="dash opacity-55 animate-flow-a"
          d="M-40 560 C 180 470, 300 640, 520 560 S 820 300, 1040 400 S 1300 620, 1500 470"
        />
        <path
          className="dash opacity-40 animate-flow-b"
          d="M-40 300 C 200 180, 380 380, 620 290 S 960 90, 1180 200 S 1380 320, 1500 220"
        />
        <path
          className="dash-fine opacity-35 animate-flow-c"
          d="M-40 700 C 240 620, 420 740, 700 660 S 1100 540, 1500 690"
        />
        <path
          className="dash opacity-30 animate-flow-d"
          d="M300 -40 C 420 160, 700 120, 860 330 S 1120 600, 1500 560"
        />
        <path
          className="streak opacity-90 animate-glide"
          pathLength={1000}
          d="M-40 560 C 180 470, 300 640, 520 560 S 820 300, 1040 400 S 1300 620, 1500 470"
        />
        <path
          className="streak opacity-90 animate-glide-slow"
          pathLength={1000}
          d="M-40 300 C 200 180, 380 380, 620 290 S 960 90, 1180 200 S 1380 320, 1500 220"
        />
      </svg>

      <div className="wrap relative z-10 grid items-center gap-[clamp(2rem,6vw,4.5rem)] md:grid-cols-[1.2fr_1fr]">
        <div>
          <p
            className="animate-rise-in mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-[0.88rem] font-semibold text-btn backdrop-blur-sm [[data-theme=dark]_&]:text-accent"
            style={enter(60)}
          >
            <span
              className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-[#16a34a]"
              aria-hidden="true"
            />
            Hello, I am
          </p>
          <h1
            id="hero-title"
            className="animate-rise-in text-[clamp(2.4rem,5.6vw,4rem)] leading-[1.08]"
            style={enter(140)}
          >
            {/* The gradient and its slow sweep live on the span: the h1 above
                already owns the entrance animation. */}
            <span className="grad-text animate-pan">{site.name}</span>
          </h1>
          <p
            className="animate-rise-in mt-3.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[clamp(1.15rem,2vw,1.5rem)] font-bold"
            style={enter(220)}
          >
            I&apos;m a {site.role}
            <span
              className="h-[10px] w-[74px] rounded-full bg-gradient-to-r from-accent to-halo sm:h-[12px] sm:w-[104px]"
              aria-hidden="true"
            />
          </p>
          <p
            className="animate-rise-in mt-[18px] max-w-[54ch] text-[1.1rem] text-muted"
            style={enter(300)}
          >
            {site.experience} of building fast, reliable websites and web apps.
            I cover the whole stack: React, Next.js, TypeScript and Tailwind CSS
            on the front end, Node.js, Express and Python behind it, Docker for
            shipping, and n8n when a job should run itself.
          </p>
          {/* The numbers strip: experience, projects, reviews, reach. Two columns
              on small screens, one row of four with hairline dividers from `lg`
              (the left column is too narrow for four in a row before that).
              The value is capitalised, so "4+ years" in site.ts reads "4+ Years". */}
          <ul
            className="animate-rise-in mt-6 flex list-none flex-wrap gap-2.5 p-0"
            style={enter(360)}
          >
            {heroHighlights.map((item) => (
              <li
                key={item.label}
                className="spot flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3.5 py-2 text-[0.9rem] font-semibold text-fg backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-accent hover:text-accent"
              >
                <Icon
                  d={item.icon}
                  className="h-[18px] w-[18px] flex-none text-accent"
                />
                {item.label}
              </li>
            ))}
          </ul>
          <ul
            className="hidden animate-rise-in mt-9 sm:grid list-none grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 p-0 lg:gap-x-0"
            style={enter(480)}
          >
            {heroStats.map((stat) => (
              <li
                key={stat.value}
                className="flex items-center gap-2.5 border-line lg:border-l lg:pl-4 lg:first:border-l-0 lg:first:pl-0"
              >
                <span
                  className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-halo/5 text-accent ring-1 ring-inset ring-accent/25 lg:h-8 lg:w-8"
                  aria-hidden="true"
                >
                  <Icon
                    d={stat.icon}
                    className="h-[18px] w-[18px] lg:h-4 lg:w-4"
                  />
                </span>
                <span className="leading-tight">
                  <strong className="block font-display text-[1rem] capitalize text-fg lg:text-[0.95rem]">
                    {stat.value}
                  </strong>
                  <span className="text-[0.82rem] text-muted lg:text-[0.78rem]">
                    {stat.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div
            className="animate-rise-in mt-[34px] flex flex-wrap gap-3"
            style={enter(360)}
          >
            <a
              href="#contact"
              className="btn btn-primary group relative overflow-hidden "
            >
              {/* A light streak that crosses the button on hover. The keyframe
                  ends at opacity 0, so nothing is left behind. */}
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 group-hover:animate-sheen"
                aria-hidden="true"
              />
              Contact me
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#work" className="btn spot group  sm:inline-flex">
              See <span className="hidden sm:inline-block">my</span>work
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>

          {/* <ul className="mt-7 flex list-none flex-wrap gap-2 p-0">
            {heroSkills.map((skill, i) => (
              <li
                key={skill}
                className="spot animate-rise-in flex items-center gap-2 rounded-full border border-line bg-panel/70 py-1.5 pl-1.5 pr-3.5 text-[0.85rem] font-semibold text-muted backdrop-blur-sm"
                style={enter(420 + i * 45)}
              >
                <TechIcon name={skill} size="sm" />
                {skill}
              </li>
            ))}
          </ul> */}
          {/* Same skills as the Stack section, but with their logos, so the
              first screen says what the stack is without any reading. */}
          <div
            className="animate-rise-in mt-12 sm:mt-32 flex flex-wrap items-center gap-x-4 gap-y-3"
            style={enter(540)}
          >
            <span className="text-[0.95rem] font-semibold text-muted">
              Find me on
            </span>
            <ul className="m-0 flex list-none flex-wrap items-center gap-2.5 p-0">
              {heroSocials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="spot flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[0.88rem] font-semibold text-muted transition duration-200 hover:-translate-y-px hover:border-accent hover:text-accent"
                  >
                    <SocialIcon
                      name={social.icon}
                      className={`${social.icon === "fiverr" ? "h-[1.3rem] w-[1.3rem]" : "h-4 w-4"}`}
                    />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="animate-rise-in relative mx-auto aspect-square w-[min(440px,88%)]"
          style={enter(240)}
        >
          <div
            className="dot-field absolute -inset-[14%] rounded-full opacity-45"
            aria-hidden="true"
          />
          {/* Two counter-rotating rings of dashes. The photo itself never moves, but
              the frame around it does, so the portrait reads as a live object. */}
          <svg
            className="pointer-events-none absolute -inset-[9%] animate-spin-slow"
            viewBox="0 0 100 100"
            aria-hidden="true"
            style={{ stroke: "rgb(var(--stroke))" }}
          >
            <circle
              cx="50"
              cy="50"
              r="48.5"
              fill="none"
              strokeWidth="0.7"
              strokeDasharray="2 5"
              opacity="0.7"
            />
          </svg>
          <svg
            className="pointer-events-none absolute -inset-[2%] animate-spin-slower"
            viewBox="0 0 100 100"
            aria-hidden="true"
            style={{ stroke: "rgb(var(--stroke))" }}
          >
            <circle
              cx="50"
              cy="50"
              r="48.5"
              fill="none"
              strokeWidth="0.5"
              strokeDasharray="16 11"
              opacity="0.5"
            />
          </svg>
          {/* A colour field that breathes behind the portrait. */}
          <div
            className="absolute inset-[-4%] animate-drift-b rounded-full bg-halo/40 blur-[42px]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 rounded-full bg-halo shadow-[0_0_80px_rgb(var(--btn)/0.35)]"
            aria-hidden="true"
          />

          {/* The floating stack: the same logos as the chip row, launched off the
              portrait. `md` and up only, because on a phone the tiles would land
              on the face. Each one keeps its own animation delay. */}
          <div className="absolute inset-0 hidden md:block">
            {orbit.map((item) => (
              <span
                key={item.name}
                className={`pointer-events-auto absolute drop-shadow-[0_12px_22px_rgb(2_6_23/0.35)] ${item.className}`}
              >
                <TechIcon name={item.name} size="lg" title={item.name} />
              </span>
            ))}
          </div>

          <span
            style={{
              clipPath: site.clipPathShape,
            }}
            className="absolute z-[5] rounded-full bg-[#0EA5E9]/50 hover:bg-transparent transition-colors duration-300  inset-[1%] h-[95%] w-[95%] scale-x-[-1]"
          />
          <Image
            style={{
              clipPath: site.clipPathShape,
            }}
            src="/portrait.PNG"
            alt={`Portrait of ${site.name}`}
            width={520}
            height={642}
            priority
            className="absolute inset-[5%] h-[95%] w-[95%] rounded-full object-cover object-[50%_30%] scale-x-[-1]"
          />

          <div className="absolute z-10 left-[-10%] top-[12%] flex animate-bob-a items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[0.85rem] font-bold leading-snug text-[#14103a] shadow-[0_18px_40px_-12px_rgba(5,3,30,0.55)]">
            <span
              className="h-[30px] w-[30px] flex-none rounded-full bg-halo"
              aria-hidden="true"
            />
            <span>
              {site.name}
              <small className="block text-[0.76rem] font-semibold text-[#5d5a80]">
                <span
                  className="text-[0.8rem] tracking-[1px] text-[#f5a623]"
                  aria-hidden="true"
                >
                  ★★★★★
                </span>{" "}
                Level 1 Seller on Fiverr
              </small>
            </span>
            <span
              className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-halo text-white"
              aria-hidden="true"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>

          <div className="absolute bottom-[6%] z-10 left-[-4%] animate-bob-b rounded-2xl bg-white px-4 py-3 text-[0.85rem] font-bold leading-snug text-[#14103a] shadow-[0_18px_40px_-12px_rgba(5,3,30,0.55)]">
            <span className="inline-flex items-center gap-2">
              <span
                className="h-[9px] w-[9px] animate-pulse-ring rounded-full bg-[#16a34a]"
                aria-hidden="true"
              />
              Available for new projects
            </span>
            <small className="text-[0.76rem] font-semibold text-[#5d5a80] flex gap-1">
              <WorldwideIcon className="h-3.5 w-3.5 text-halo" />
              <span>Remote . Worldwide</span>
            </small>
          </div>
        </div>
      </div>
      {/* Scroll cue: a hint, nothing more, so it is hidden on short viewports and
          its dot stops for `prefers-reduced-motion` (globals.css). */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted transition hover:text-accent lg:flex"
      >
        Scroll
        <span
          className="relative h-9 w-[22px] rounded-full border border-line"
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 animate-cue rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
