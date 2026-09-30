import { services } from "@/data/services";
import Link from "next/link";
import type { CSSProperties } from "react";
import Icon from "./Icon";
import SectionHead from "./SectionHead";

export default function Services() {
  const automation = services.slice(services.length - 1, services.length)[0];
  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="wrap">
        <div className="relative">
          <SectionHead
            id="services-title"
            eyebrow="Services"
            title="What I can build for you."
            lede="From a single landing page to a full-stack application with accounts and payments."
            highlight="build"
            divider
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 hidden w-[250px] -rotate-[5deg] text-right lg:block"
          >
            <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
              How I Help.
              <br />
              Turning needs into solutions.
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
        <div className="grid gap-4 md:grid-cols-6">
          {services.slice(0, services.length - 1).map((service, i) => (
            <article
              key={service.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className={`spot group relative overflow-hidden ${service.span} flex min-h-[210px] flex-col gap-3 rounded-[20px] border border-line bg-panel p-7 transition duration-200 hover:-translate-y-1 hover:border-accent`}
            >
              {/* A colour wash that only exists on hover, plus the card's
                  number, so the grid has a shape even before you read it. */}
              <span
                className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute right-6 top-6 font-display text-[0.78rem] font-bold tracking-widest text-muted/40"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-halo/5 text-accent ring-1 ring-inset ring-accent/25 transition duration-200 group-hover:scale-105"
                aria-hidden="true"
              >
                <Icon d={service.icon} />
              </span>
              <h3 className="text-[1.1rem] tracking-tight">{service.title}</h3>
              <p className="text-[0.98rem] text-muted">{service.description}</p>
              <span className="mt-auto text-[0.88rem] font-bold text-accent">
                {service.technologies.join(", ")}
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="relative mt-8 flex items-center gap-2 text-sm font-bold text-accent"
              >
                Explore service
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}

          <article
            data-reveal
            className="spot relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-line bg-gradient-to-br from-panel2 to-panel p-7 transition duration-200 hover:border-accent md:col-span-6 md:flex-row md:items-center md:gap-7"
          >
            {/* A wiring diagram behind the automation strip: dashed lines that
                travel, joined by three nodes. */}
            <svg
              viewBox="0 0 360 140"
              className="pointer-events-none absolute right-0 top-1/2 hidden h-[140px] w-[360px] -translate-y-1/2 opacity-[0.18] lg:block"
              fill="none"
              strokeWidth="1.6"
              strokeDasharray="6 8"
              aria-hidden="true"
              style={{ stroke: "rgb(var(--accent))" }}
            >
              <path
                className="animate-flow-b"
                d="M0 40h120M0 100h120M240 70h120M120 40a40 40 0 0 1 120 30M120 100a40 40 0 0 0 120-30"
              />
              <circle cx="120" cy="40" r="8" />
              <circle cx="120" cy="100" r="8" />
              <circle cx="240" cy="70" r="8" />
            </svg>

            <span
              className="relative grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-halo/10 text-accent ring-1 ring-inset ring-accent/30"
              aria-hidden="true"
            >
              <Icon d={automation.icon} />
            </span>
            <div className="relative grid gap-2">
              <h3 className="text-[1.1rem] tracking-tight">
                {automation.title}
              </h3>
              <p className="max-w-[70ch] text-[0.98rem] text-muted">
                {automation.description}
              </p>
            </div>
            <div>
              <span className="relative text-[0.88rem] font-bold text-accent md:ml-auto md:whitespace-nowrap">
                {automation.technologies.join(", ")}
              </span>
              <Link
                href={`/services/${automation.slug}`}
                className="relative mt-8 md:mt-1 md:top-2 flex md:justify-end items-center gap-2 text-sm font-bold text-accent"
              >
                Explore service
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
