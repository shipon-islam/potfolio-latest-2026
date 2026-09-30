import { blogPosts } from "@/data/blog";
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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Shipon Islam`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);

  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-grid opacity-50" />

      {/* Hero */}
      <section className="section pb-10">
        <div className="wrap">
          <div className="mx-auto max-w-4xl">
            <div data-reveal className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  {post.category}
                </span>

                <span className="text-sm text-muted">{post.date}</span>

                <span className="text-sm text-muted">{post.readTime}</span>
              </div>

              <h1 className="mt-7 text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                {post.excerpt}
              </p>
            </div>

            {/* Featured image */}
            <div
              data-reveal
              className="relative mt-12 overflow-hidden rounded-[2rem] border border-line bg-panel p-3 shadow-[0_30px_80px_-40px_rgb(11_23_48/0.55)]"
            >
              <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section pt-8">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Content */}
            <article className="mx-auto w-full max-w-3xl">
              {post.content.map((section, index) => (
                <div
                  key={`${section.heading}-${index}`}
                  data-reveal
                  className="mb-12"
                >
                  {section.heading && (
                    <h2 className="mb-5 text-2xl sm:text-3xl">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-5 text-lg leading-8 text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="my-6 space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-lg leading-8 text-muted"
                        >
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.code && (
                    <pre className="mt-6 overflow-x-auto rounded-2xl border border-line bg-[rgb(var(--panel-2))] p-6 text-sm leading-7">
                      <code>{section.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="spot rounded-2xl border border-line bg-panel p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Tags
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-line bg-panel-2 px-3 py-2 text-xs font-semibold text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <Link href="/blog" className="btn w-full justify-center">
                  ← All Articles
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Previous / Next */}
      <section className="section bg-panel/40">
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="spot group rounded-2xl border border-line bg-panel p-7 transition hover:border-accent/50"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Previous article
                </p>

                <h3 className="mt-4 text-xl transition group-hover:text-accent">
                  {previousPost.title}
                </h3>

                <span className="mt-5 inline-block text-sm text-muted">
                  ← Read article
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="spot group rounded-2xl border border-line bg-panel p-7 text-left transition hover:border-accent/50 sm:text-right"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Next article
                </p>

                <h3 className="mt-4 text-xl transition group-hover:text-accent">
                  {nextPost.title}
                </h3>

                <span className="mt-5 inline-block text-sm text-muted">
                  Read article →
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center sm:p-16"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Need development help?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
                Have an idea for your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
                I build modern websites, web applications, APIs, and automation
                systems.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                  <span>→</span>
                </Link>

                <Link href="/projects" className="btn">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
