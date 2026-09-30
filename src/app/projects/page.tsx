import CTA from "@/components/CTA";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Shipon Islam",
  description:
    "Explore selected web development projects by Shipon Islam, including e-commerce platforms, marketplaces, business websites, real estate platforms, and community applications.",
};

export default function ProjectsPage() {
  return (
    <main className="">
      {/* Projects */}
      <section className="section">
        <div className="wrap">
          <div className="relative">
            <SectionHead
              id="projects-title"
              eyebrow="Projects"
              title="Selected Projects."
              lede="E-commerce, marketplaces, business and community sites, plus personal builds. Open a project to see what I did on it."
              highlight="work"
              divider
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-0 hidden w-[200px] -rotate-[5deg] text-right lg:block"
            >
              <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
                Project Showcase.
                <br />
                Real work. Real results.
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as React.CSSProperties
                }
                className="spot group relative overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_25px_60px_-40px_rgb(11_23_48/0.45)] transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                {/* Visual placeholder */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                    {project.id}
                  </span>
                </div>
                {/* Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                        {project.category}
                      </p>

                      <h2 className="mt-3 text-2xl lg:text-xl xl:text-2xl">
                        {project.title}
                      </h2>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition group-hover:border-accent group-hover:text-accent"
                    >
                      →
                    </Link>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-line bg-panel-2 px-3 py-1.5 text-xs font-medium text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-sm"
                      >
                        Live{" "}
                        <span className="lg:hidden xl:inline">Preview</span>
                        <span>↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-sm"
                      >
                        GitHub
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        topText="From concept to deployment"
        title="Have an idea for the next project?"
        subtitle="I can help turn your idea into a fast, responsive, and reliable
                web application."
      />
    </main>
  );
}
