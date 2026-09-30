import CTA from "@/components/CTA";
import SectionHead from "@/components/SectionHead";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Shipon Islam",
  description:
    "Articles about Next.js, React, Node.js, full-stack development, Docker, AI, automation, and modern web development.",
};

export default function BlogsPage() {
  return (
    <main>
      {/* Posts */}
      <section className="section">
        <div className="wrap">
          <div className="relative">
            <SectionHead
              id="blog-title"
              eyebrow=" My Blog"
              title="Thoughts on modern development"
              lede="Practical articles about web development, full-stack applications,
              Next.js, React, Node.js, DevOps, AI, and automation."
              highlight="modern"
              divider
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-0 hidden w-[270px] -rotate-[5deg] text-right lg:block"
            >
              <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
                Notes from the journey.
                <br />
                Ideas, lessons & useful insights.
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
                  href={`/blogs/${post.slug}`}
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
                      href={`/blogs/${post.slug}`}
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
      <CTA
        topText=" Have a project?"
        title="Let's build something together."
        subtitle="Need help with a website, web application, backend, or automation project?"
        outlineBtnText="More Blogs"
        outLineBtnLink="/blog"
      />
    </main>
  );
}
