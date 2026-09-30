import { experience } from "@/data/experience";
import type { CSSProperties } from "react";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import TechIcon from "./TechIcon";

// One badge per role: the company job, the servers, then freelance work. Same
// 24x24 grid as the rest of the site.
const jobIcons = [
  "M4 8h16v11H4zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16",
  "M4 5h16v5H4zM4 14h16v5H4zM7.5 7.5h.01M7.5 16.5h.01",
  "M12 4l2.4 5.1 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z",
  "M12 4l2.4 5.1 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section border-t border-line"
    >
      <div className="wrap">
        <div className="relative">
          <SectionHead
            eyebrow="Experience"
            id="experience-title"
            title="Where I've been building."
            lede="Four years of shipping websites and web apps: a software company in Bangladesh, freelance clients on Fiverr, plus the VPS servers, Cloudflare and shared hosting my own projects and client sites run on."
            highlight="building"
            divider
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 hidden w-[200px] -rotate-[5deg] text-right lg:block"
          >
            <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
              4+ Years.
              <br />
              Building real products.
            </span>
            <svg
              viewBox="0 0 60 44"
              className="ml-auto mt-1 h-[44px] w-[60px] text-muted/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* A curve that leads the eye from the note down to the rule. */}
              <path d="M52 6Q48 20 34 33" />
              <path d="M43 32 34 33l1-9" />
            </svg>
          </span>
        </div>
        <ol className="relative m-0 list-none p-0">
          {/* The spine: full height by default, drawn from the top the moment the
              list is revealed (see .timeline-line in globals.css). */}
          <span
            className="timeline-line absolute bottom-3 left-[15px] top-3 w-[2px] rounded-full bg-gradient-to-b from-accent via-halo to-accent/20 sm:left-[19px]"
            aria-hidden="true"
          />
          {experience.map((job, i) => (
            <li
              key={`${job.role}-${job.org}`}
              data-reveal="left"
              style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
              className="relative pb-6 pl-12 last:pb-0 sm:pl-16 before:absolute before:left-[15px] before:top-0 before:h-full before:w-[2px] before:rounded-full  before:bg-halo  sm:before:left-[19px]"
            >
              <span
                className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-line bg-panel text-accent shadow-[0_8px_20px_-8px_rgb(2_6_23/0.5)] sm:h-10 sm:w-10 "
                aria-hidden="true"
              >
                <Icon
                  d={jobIcons[i]}
                  className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                />
              </span>
              <div className="spot rounded-2xl border border-line bg-panel p-5 transition duration-200 hover:border-accent sm:p-6">
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-accent">
                  {job.period}
                </p>
                <h3 className="mt-1.5 text-[clamp(1.05rem,2vw,1.3rem)] leading-snug">
                  {job.role}
                </h3>
                <p className="text-[0.95rem] font-semibold text-muted">
                  {job.org}
                  {job.place ? ` · ${job.place}` : ""}
                </p>
                <ul className="mt-3.5 grid gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative max-w-[68ch] pl-5 text-[0.98rem] text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 rounded-full border border-line bg-panel2 py-1 pl-1 pr-3 text-[0.82rem] font-semibold text-muted"
                    >
                      <TechIcon name={tech} size="sm" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
