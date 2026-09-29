import { stack } from "@/lib/site";
import type { CSSProperties } from "react";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import TechIcon from "./TechIcon";

// One card per layer, in a six-column grid from `lg`: the first two cards take
// half a row each, the last three a third, so the grid always closes. Cards are
// headed by the layer's glyph, the name and a count pill, then the tool chips
// and — where the content has one — a closing note pinned to the bottom of the
// card. The reveal delay walks down the list so the grid lands in order.
//
// Every card also carries a hue of its own: `layer.tone` is written onto the card
// as `--tone-light` / `--tone-dark` and the `.tone*` classes in globals.css paint
// the border, the header tile, the count pill, the closing note and the chip
// hover from it, so the five layers read as five groups instead of one colour
// repeated.
//
// The spans and the tones come from lib/site.ts with the rest of the content.
export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="section ">
      <div className="wrap">
        <div className="relative">
          <SectionHead
            id="stack-title"
            eyebrow="My toolkit"
            title="The tools I build with."
            highlight="build"
            lede="A modern JavaScript stack from the browser to the database, plus tooling that removes repetitive work."
            divider
          />
          {/* A hand-written aside in the top corner, the way a note would be
              pencilled onto a page. Decorative: hidden from assistive tech, and
              from the widths where there is no room beside the copy. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 hidden w-[250px] -rotate-[5deg] text-right lg:block"
          >
            <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
              Built With.
              <br />
              Modern tools. Clean code.
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {stack.map((row, i) => (
            <article
              key={row.layer}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className={`spot group relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-gradient-to-br from-panel2 to-bg p-6 transition duration-200 hover:-translate-y-1 hover:border-accent sm:p-7 ${row.span}`}
            >
              {/* The same colour wash the service cards get, so the panel lifts
                  before you have read it. */}
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div>
                <div className="relative flex items-center sm:items-start gap-2 sm:gap-4">
                  <span
                    className="grid h-14 w-14 flex-none place-items-center rounded-[18px] bg-gradient-to-br from-accent/25 to-halo/5 text-accent ring-1 ring-inset ring-accent/25 transition duration-200 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <Icon d={row.icon} className="h-7 w-7 text-accent" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-[1.1rem] sm:text-[1.28rem] tracking-tight">
                        {row.layer}
                      </h3>
                      <span className="ml-auto rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-accent">
                        {row.items.length} tools
                      </span>
                    </div>
                    <p className="hidden mt-2 text-[0.95rem] text-muted">
                      {row.blurb}
                    </p>
                  </div>
                </div>
                <p className="sm:hidden mt-2 text-[0.95rem] text-muted">
                  {row.blurb}
                </p>
              </div>

              <ul className="relative mt-6 flex list-none flex-wrap gap-2.5 p-0">
                {row.items.map((item) => (
                  <li key={item}>
                    <span className="flex items-center gap-2.5 rounded-full border border-line bg-panel py-1.5 pl-1.5 pr-4 text-[0.92rem] font-semibold text-muted transition hover:border-accent hover:text-accent">
                      <TechIcon name={item} size="sm" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* `flex-1` + `items-end` keeps the note on the card's baseline,
                  no matter how many chips the layer above it has. */}
              {row.note && (
                <div className="relative mt-6 flex flex-1 items-end">
                  <div className="flex w-full items-center gap-3.5 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4">
                    <Icon
                      d={row.note.icon}
                      className="h-[22px] w-[22px] flex-none text-accent"
                    />
                    <p className={`text-[0.95rem] leading-snug text-fg `}>
                      {row.note.text}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
