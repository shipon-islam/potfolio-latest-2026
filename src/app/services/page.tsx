import { services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Shipon Islam",
  description:
    "Explore web development, Next.js, React, backend, DevOps, Python, and AI workflow automation services by Shipon Islam.",
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-60" />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm font-semibold text-accent shadow-sm">
              Services
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl">
              Building digital products
              <span className="grad-text"> that work.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted">
              From modern frontend experiences to full-stack applications,
              backend systems, infrastructure, and AI-powered automation.
            </p>
          </div>

          {/* Service cards */}
          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 80}ms`,
                  } as React.CSSProperties
                }
                className="spot group relative overflow-hidden rounded-3xl border border-line bg-panel p-7 shadow-[0_20px_50px_-35px_rgb(11_23_48/0.35)] transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition duration-500 group-hover:bg-accent/20" />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold text-accent">
                    {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition group-hover:border-accent group-hover:text-accent">
                    →
                  </span>
                </div>

                <h2 className="relative mt-12 text-2xl">{service.title}</h2>

                <p className="relative mt-4 text-sm leading-7 text-muted">
                  {service.description}
                </p>

                <div className="relative mt-7 flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-line bg-panel-2 px-3 py-1 text-xs font-medium text-muted transition group-hover:border-accent/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 flex items-center gap-2 text-sm font-bold text-accent">
                  Explore service
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center shadow-[0_30px_80px_-45px_rgb(11_23_48/0.45)] sm:p-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-halo/10" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Have a project?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
                Let's build something useful together.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-muted">
                Tell me what you are building and I’ll help turn your idea into
                a modern, scalable web solution.
              </p>

              <Link href="/contact" className="btn btn-primary mt-8">
                Start a Conversation
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
