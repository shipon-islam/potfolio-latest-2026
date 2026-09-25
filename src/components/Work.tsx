import { projects } from "@/lib/site";
import ProjectShot from "./ProjectShot";
import SectionHead from "./SectionHead";
import TechIcon from "./TechIcon";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section border-t border-line"
    >
      <div className="wrap">
        <SectionHead
          id="work-title"
          title="Selected work."
          lede="E-commerce, marketplaces, business and community sites, plus personal builds. Open a project to see what I did on it."
        />
        <div className="border-t border-line">
          {projects.map((project, i) => (
            <details
              key={project.name}
              className="spot group border-b border-line"
            >
              {/* Each row leads with a generated mock-up of the project, so the
                  list reads as a shelf of sites instead of a list of names. The
                  thumbnail spans two rows on a phone and one from `md` up. */}
              <summary className="grid cursor-pointer grid-cols-[104px_1fr_28px] items-center gap-4 px-1 py-[22px] transition-[padding] duration-200 hover:pl-3.5 sm:grid-cols-[144px_1fr_28px] sm:gap-5 md:grid-cols-[184px_1.05fr_1fr_28px] md:gap-6">
                <span className="row-span-2 aspect-[18/11] w-full overflow-hidden rounded-xl border border-line bg-panel2 md:row-span-1">
                  <ProjectShot
                    type={project.type}
                    index={i}
                    className="transition duration-300 group-hover:scale-[1.05]"
                  />
                </span>
                <span className="col-start-2 row-start-1 font-display text-[clamp(1.05rem,2.2vw,1.5rem)] font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {project.name}
                </span>
                <span className="col-start-2 row-start-2 flex flex-wrap items-center gap-2 text-[0.95rem] text-muted md:col-start-3 md:row-start-1">
                  <span className="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-accent">
                    {project.type}
                  </span>
                  {project.meta}
                </span>
                <span
                  className="plus col-start-3 row-start-1 md:col-start-4"
                  aria-hidden="true"
                />
              </summary>
              <div className="grid gap-5 px-1 pb-7 md:grid-cols-[minmax(0,1fr)_300px] md:items-start md:gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <p className="max-w-[58ch]">{project.body}</p>
                  <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex items-center gap-2 rounded-full border border-line bg-panel py-1 pl-1 pr-3 text-[0.82rem] font-semibold text-muted"
                      >
                        <TechIcon name={tag} size="sm" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-bold text-accent hover:underline"
                    >
                      Visit live site
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  )}
                </div>
                {/* The same mock-up again, at a size you can actually read. */}
                <span className="hidden aspect-[18/11] w-full overflow-hidden rounded-xl border border-line bg-panel2 md:block">
                  <ProjectShot type={project.type} index={i} variant="panel" />
                </span>
              </div>
            </details>
          ))}
        </div>
        <div
          data-reveal
          className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6"
        >
          <p className="text-[0.95rem] text-muted">
            From concept to deployment, built for real-world use
          </p>
          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-[0.88rem] font-bold text-accent transition duration-200 hover:border-accent hover:bg-accent/10"
          >
            View More Projects
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
