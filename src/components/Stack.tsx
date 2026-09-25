import { stack } from "@/lib/site";
import type { CSSProperties } from "react";
import SectionHead from "./SectionHead";
import TechIcon from "./TechIcon";

// Two columns of layer cards, each chip carrying the tool's own logo. The reveal
// delay walks down the list so the grid lands in order.
export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="section border-y border-line bg-panel">
      <div className="wrap">
        <SectionHead
          id="stack-title"
          title="The tools I build with."
          lede="A modern JavaScript stack from the browser to the database, plus tooling that removes repetitive work."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {stack.map((row, i) => (
            <div
              key={row.layer}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="spot rounded-2xl border border-line bg-bg p-[26px] transition duration-200 hover:border-accent"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base tracking-tight">{row.layer}</h3>
                <span className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent">
                  {row.items.length} tools
                </span>
              </div>
              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {row.items.map((item) => (
                  <li key={item}>
                    <span className="flex items-center gap-2 rounded-full border border-line bg-panel py-1 pl-1 pr-3 text-[0.9rem] font-semibold text-muted transition hover:border-accent hover:text-accent">
                      <TechIcon name={item} size="sm" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
