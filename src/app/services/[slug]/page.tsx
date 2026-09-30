import { services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} | Shipon Islam`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-50" />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div data-reveal="left">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-accent">
                  {service.number}
                </span>

                <span className="h-px w-10 bg-accent/50" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Service
                </span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                {service.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                  <span>→</span>
                </Link>

                <Link href="/projects" className="btn">
                  View Projects
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div data-reveal="right" className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-accent/15 blur-3xl" />

              <div className="spot relative overflow-hidden rounded-[2rem] border border-line bg-panel p-8 shadow-[0_30px_70px_-35px_rgb(11_23_48/0.5)]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent" />
                  <span className="h-3 w-3 rounded-full bg-halo" />
                  <span className="h-3 w-3 rounded-full bg-btn" />
                </div>

                <div className="mt-10">
                  <div className="h-2 w-24 rounded-full bg-accent/30" />
                  <div className="mt-4 h-3 w-full rounded-full bg-panel-2" />
                  <div className="mt-3 h-3 w-4/5 rounded-full bg-panel-2" />
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-xl bg-panel-2" />
                    <div className="h-24 rounded-xl bg-accent/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-panel/40">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div data-reveal="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Overview
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl">
                A solution designed around your project.
              </h2>
            </div>

            <div data-reveal="right">
              <p className="text-lg leading-8 text-muted">
                {service.longDescription}
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
              What I provide
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl">
              Everything you need to move forward.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as React.CSSProperties
                }
                className="spot rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section bg-panel/40">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-2">
            <div data-reveal="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Technology
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl">
                Built with modern tools.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-muted">
                The technology stack is selected based on the requirements of
                your project, performance goals, and long-term maintainability.
              </p>
            </div>

            <div
              data-reveal="right"
              className="flex flex-wrap content-start gap-3"
            >
              {service.technologies.map((technology) => (
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

      {/* Ideal for */}
      <section className="section">
        <div className="wrap">
          <div
            data-reveal
            className="rounded-[2rem] border border-line bg-panel p-8 shadow-[0_30px_70px_-45px_rgb(11_23_48/0.5)] sm:p-12"
          >
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Ideal for
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl">
                  Projects that need this service.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.idealFor.map((item) => (
                  <div
                    key={item}
                    className="spot rounded-xl border border-line bg-panel-2 p-5 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center sm:p-16"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-halo/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Let's work together
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
                Ready to build your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-muted">
                Let’s discuss your requirements and find the right technical
                solution for your project.
              </p>

              <Link href="/contact" className="btn btn-primary mt-8">
                Get in Touch
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
