import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Shipon Islam`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-50" />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            {/* Content */}
            <div data-reveal="left">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-accent">
                  {project.number}
                </span>

                <span className="h-px w-10 bg-accent/50" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                {project.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
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

                <Link href="/projects" className="btn">
                  ← All Projects
                </Link>
              </div>
            </div>

            {/* Project image */}
            <div data-reveal="right" className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-accent/15 blur-3xl" />

              <div className="spot relative overflow-hidden rounded-[2rem] border border-line bg-panel p-3 shadow-[0_30px_80px_-40px_rgb(11_23_48/0.55)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-panel/40">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div data-reveal="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                About the project
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl">Project overview</h2>
            </div>

            <div data-reveal="right">
              <p className="text-lg leading-8 text-muted">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="wrap">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Features
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl">What was built.</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as React.CSSProperties
                }
                className="spot rounded-2xl border border-line bg-panel p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="section bg-panel/40">
          <div className="wrap">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div data-reveal="left">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Development
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl">
                  Challenges & considerations
                </h2>
              </div>

              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    data-reveal
                    className="spot flex gap-5 rounded-2xl border border-line bg-panel p-6"
                  >
                    <span className="shrink-0 font-bold text-accent">
                      0{index + 1}
                    </span>

                    <p className="leading-7 text-muted">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-2">
            <div data-reveal="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Technology
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl">Technologies used.</h2>

              <p className="mt-5 max-w-lg leading-7 text-muted">
                Modern technologies selected to build a reliable, responsive,
                and maintainable product.
              </p>
            </div>

            <div
              data-reveal="right"
              className="flex flex-wrap content-start gap-3"
            >
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="spot rounded-xl border border-line bg-panel px-5 py-3 text-sm font-semibold text-muted transition hover:border-accent/50 hover:text-accent"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center sm:p-16"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-halo/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Have a similar project?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
                Let's build something like this for you.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
                Have an idea or a project that needs development? Let’s talk
                about it.
              </p>

              <div className="mt-8 flex justify-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                  <span>→</span>
                </Link>

                <Link href="/projects" className="btn">
                  More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
