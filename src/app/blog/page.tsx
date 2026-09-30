import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Shipon Islam",
  description:
    "Articles about Next.js, React, Node.js, full-stack development, Docker, AI, automation, and modern web development.",
};

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-50" />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              My Blog
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Thoughts on <span className="grad-text">modern development.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Practical articles about web development, full-stack applications,
              Next.js, React, Node.js, DevOps, AI, and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as React.CSSProperties
                }
                className="spot group overflow-hidden rounded-[1.5rem] border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                {/* Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                      {post.category}
                    </span>

                    <span className="text-muted">{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="mt-5 text-2xl leading-tight transition hover:text-accent">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-4 line-clamp-3 leading-7 text-muted">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-muted">{post.date}</span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-bold text-accent"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Have a project?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
                Let&apos;s build something together.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
                Need help with a website, web application, backend, or
                automation project?
              </p>

              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
