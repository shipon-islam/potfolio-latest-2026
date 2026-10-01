import CTA from "@/components/CTA";
import SectionHead from "@/components/SectionHead";
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
    <main>
      {/* Hero */}
      <section className="section pb-10" data-reveal>
        <div className="wrap">
          <div className="">
            <div data-reveal>
              <div className="relative">
                <SectionHead
                  id="blog-title"
                  eyebrow={post.category}
                  title={post.title}
                  lede={post.excerpt}
                  highlight={post.category}
                  divider
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 bottom-0 hidden w-[280px] -rotate-[5deg] text-right lg:block"
                >
                  <span className="block font-display text-[0.92rem] italic leading-snug text-muted">
                    Let’s dive in.
                    <br />
                    Exploring the ideas behind the story.
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
              <div className="flex flex-wrap items-center  gap-3 ">
                <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  {post.category}
                </span>

                <span className="text-sm text-muted">{post.date}</span>

                <span className="text-sm text-muted">{post.readTime}</span>
              </div>
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
      <section className="section pt-10" data-reveal>
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] ">
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
                <Link href="/blogs" className="btn w-full justify-center">
                  ← All Articles
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Previous / Next */}
      <section className="section bg-panel/40" data-reveal>
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
        <CTA
          topText="Need development help?"
          title="Have an idea for your next project?"
          subtitle="I build modern websites, web applications, APIs, and automation
                systems."
          outlineBtnText="View Blogs"
          outLineBtnLink="/blogs"
        />
      </section>
    </main>
  );
}
