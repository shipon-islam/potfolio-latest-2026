import { facts, site } from "@/lib/site";
import type { CSSProperties, ReactNode } from "react";
import Icon from "./Icon";
import SectionHead from "./SectionHead";

// One glyph per entry in `facts` (see lib/site.ts), drawn on the same 24x24 grid
// as the rest of the site: elapsed time, current job, seller rating, containers
// and automation, then the servers.
const factIcons = [
  "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4.6l3 1.7",
  "M4 8h16v11H4zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16",
  "M12 4l2.4 5.1 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z",
  "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
  "M4 5h16v5H4zM4 14h16v5H4zM7.5 7.5h.01M7.5 16.5h.01",
  "M4.5 16.5c-1.5 1.5-2 3.5-2 3.5s2-.5 3.5-2m1.5-3.5 3 3m-5-6 3 3M14 3c3.5.5 6.5 3.5 7 7-1.5 4.5-5 8-9.5 9.5L4.5 12C6 7.5 9.5 4.5 14 3Zm-1 5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
];

// How full each card's bar reads. Decorative, not data: the numbers above the
// labels are the facts, this is just something for the eye to follow.
const factBars = ["72%", "46%", "58%", "84%", "66%"];

// A dark editor card: the one place on the site where the code is the
// illustration. It stays dark in both themes, the way an editor does, and the
// values come from lib/site.ts so it can never drift from the copy.
const code: ReactNode[] = [
  <span key="comment" className="text-[#6b7394]">
    {"// what hiring me looks like"}
  </span>,
  <span key="blank">&nbsp;</span>,
  <span key="open">
    <span className="text-[#c792ea]">const</span>{" "}
    <span className="text-[#82aaff]">developer</span> = {"{"}
  </span>,
  <span key="name">
    {"  "}name: <span className="text-[#c3e88d]">{`"${site.name}"`}</span>,
  </span>,
  <span key="role">
    {"  "}role: <span className="text-[#c3e88d]">{`"${site.role}"`}</span>,
  </span>,
  <span key="based">
    {"  "}based: <span className="text-[#c3e88d]">{`"${site.location}"`}</span>,
  </span>,
  <span key="stack">
    {"  "}stack: [<span className="text-[#c3e88d]">&quot;Next.js&quot;</span>,{" "}
    <span className="text-[#c3e88d]">&quot;Node.js&quot;</span>,{" "}
    <span className="text-[#c3e88d]">&quot;Docker&quot;</span>,{" "}
    <span className="text-[#c3e88d]">&quot;n8n&quot;</span>],
  </span>,
  <span key="ships">
    {"  "}ships:{" "}
    <span className="text-[#c3e88d]">
      &quot;a live preview before handover&quot;
    </span>
    ,
  </span>,
  <span key="replies">
    {"  "}replies:{" "}
    <span className="text-[#c3e88d]">{`"same day, ${site.availability.toLowerCase()}"`}</span>
    ,
  </span>,
  <span key="close">{"};"}</span>,
];

function CodeCard() {
  return (
    <div
      data-reveal="zoom"
      className="code-window mt-9 overflow-hidden rounded-2xl border border-[#26305a] bg-[#0b1020]"
    >
      <div className="flex items-center gap-2 border-b border-[#1d2547] bg-[#101733] px-4 py-3">
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
          aria-hidden="true"
        />
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"
          aria-hidden="true"
        />
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#28c840]"
          aria-hidden="true"
        />
        <span className="ml-2 font-display text-[0.7rem] font-semibold tracking-[0.08em] text-[#8a93b8]">
          about.ts
        </span>
        <span className="ml-auto rounded-full bg-[#1d2547] px-2.5 py-0.5 text-[0.66rem] font-bold uppercase tracking-[0.08em] text-[#9aa4c8]">
          TypeScript
        </span>
      </div>
      <div className="code-scroll p-5 font-mono text-[0.78rem] leading-[2] sm:text-[0.84rem]">
        {code.map((line, i) => (
          <div key={i} className="flex gap-4 whitespace-pre">
            <span className="w-4 flex-none select-none text-right text-[#3c4570]">
              {i + 1}
            </span>
            <span className="text-[#c8d3f5]">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="wrap">
        <div className="relative">
          <SectionHead
            eyebrow="About Me"
            id="about-title"
            title="One developer.
             End-to-end digital solutions."
            highlight="developer"
            divider
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 hidden w-[260px] -rotate-[5deg] text-right lg:block"
          >
            <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
              Build. Deploy. Grow.
              <br />
              From concept to reality.
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
        <div className=" grid items-start grid-cols-1 gap-[clamp(2rem,3vw,5rem)] md:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal>
            <p className=" mb-[18px] max-w-[62ch]">
              I'm a full-stack web developer with {site.experience} of
              experience, currently working at <strong>{site.company}</strong>,
              a software company in {site.location}. I build complete products
              from the interface and APIs to the database using React, Next.js,
              TypeScript, Tailwind CSS, Node.js, Express, Python, MongoDB, and
              Firebase.
            </p>
            <p className="max-w-[62ch] text-muted">
              I also freelance on Fiverr as a Level 1 seller with repeat
              clients. I use Docker for predictable deployments and build n8n
              workflows and AI agents to automate repetitive tasks. I focus on
              clean, readable code, clear requirements, live previews, and
              reliable deployment with Ubuntu VPS, Nginx, SSL, backups, and
              monitoring.
            </p>
            <CodeCard />
          </div>
          {/* The numbers, as cards rather than a list: each one gets a glyph, a bar
            that grows when the card arrives, and lifts under the pointer. The
            reveal delay staggers them so they land one after another. */}
          <ul className="m-0 grid list-none gap-3 p-0">
            {facts.map((fact, i) => (
              <li
                key={fact.value}
                data-reveal="right"
                style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                className="spot rounded-2xl border border-line bg-panel p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent sm:p-5"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-halo/5 text-accent ring-1 ring-inset ring-accent/25"
                    aria-hidden="true"
                  >
                    <Icon d={factIcons[i]} className="h-[22px] w-[22px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center gap-2 ">
                      <p className="hidden sm:block font-display text-[1.08rem] font-semibold leading-tight tracking-tight">
                        {fact.title}
                      </p>
                      <p className="sm:hidden font-display text-[1.08rem] font-semibold leading-tight tracking-tight">
                        {fact.mobileTitle}
                      </p>
                      <p className="font-sans text-xs font-semibold leading-tight tracking-tight border border-halo text-halo px-2 py-0.5 rounded-lg">
                        {fact.value}
                      </p>
                    </div>

                    <p className="text-[0.9rem] leading-snug text-muted mt-1">
                      {fact.label}
                    </p>
                  </div>
                </div>
                <span className="mt-4 block h-[3px] w-full overflow-hidden rounded-full bg-line/60">
                  <span
                    className="stat-bar block h-full rounded-full"
                    style={{ width: factBars[i] }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
