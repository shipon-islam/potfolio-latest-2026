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
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-60" />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm font-semibold text-accent shadow-sm">
              Selected Work
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl">
              Projects I’ve
              <span className="grad-text"> built.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted">
              A selection of websites, web applications, marketplaces, business
              platforms, and digital products I’ve worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2">
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
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                    {project.number}
                  </span>
                </div>
                {/* Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                        {project.category}
                      </p>

                      <h2 className="mt-3 text-2xl">{project.title}</h2>
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
                        className="btn btn-primary"
                      >
                        Live Preview
                        <span>↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
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

      {/* Bottom statement */}
      <section className="section">
        <div className="wrap">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center shadow-[0_30px_80px_-45px_rgb(11_23_48/0.45)] sm:p-16"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-halo/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                From concept to deployment
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
                Have an idea for the next project?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
                I can help turn your idea into a fast, responsive, and reliable
                web application.
              </p>

              <Link href="/contact" className="btn btn-primary mt-8">
                Start a Project
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
