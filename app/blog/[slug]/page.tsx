import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "../../components/SiteNav";
import { MarketingFooter } from "../../components/MarketingFooter";
import { POSTS } from "../content";

export function generateStaticParams(): {
  slug: string;
}[] {
  return POSTS.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find(p => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found — SaaSy" };
  }
  return {
    title: `${post.title} — SaaSy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = POSTS.findIndex(
    p => p.slug === slug,
  );
  if (postIndex === -1) {
    notFound();
  }

  const post = POSTS[postIndex];
  const prevPost =
    postIndex > 0 ? POSTS[postIndex - 1] : null;
  const nextPost =
    postIndex < POSTS.length - 1
      ? POSTS[postIndex + 1]
      : null;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <Link
          href="/blog"
          className="font-[family-name:var(--font-dm-sans)]
            text-sm font-medium text-saasy-teal
            hover:text-saasy-teal-dim transition-colors"
        >
          &larr; Back to blog
        </Link>
        <article className="mt-8">
          <h1
            className="font-[family-name:var(--font-sora)]
              text-3xl font-bold tracking-tight text-white"
          >
            {post.title}
          </h1>
          <div
            className="mt-4 flex items-center gap-3
              font-[family-name:var(--font-dm-sans)]
              text-sm text-saasy-muted"
          >
            <span>{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </time>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <div
            className="mt-10
              font-[family-name:var(--font-dm-sans)]
              text-saasy-text leading-relaxed"
          >
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2
                  className="font-[family-name:var(--font-sora)]
                    text-2xl font-bold text-white mb-4"
                >
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body
                    .split("\n\n")
                    .map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                </div>
              </section>
            ))}
          </div>

          {post.cta && (
            <div
              className="mt-12 rounded-xl border
                border-saasy-teal/20 bg-saasy-card p-8
                text-center"
            >
              <p
                className="font-[family-name:var(--font-dm-sans)]
                  text-lg text-saasy-text mb-6"
              >
                {post.cta}
              </p>
              <Link
                href="https://app.hellosaasy.ai/signup"
                className="inline-block rounded-lg
                  bg-saasy-teal px-6 py-3
                  font-[family-name:var(--font-dm-sans)]
                  text-sm font-semibold text-black
                  hover:bg-saasy-teal-dim
                  transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          )}
        </article>

        <nav
          className="mt-12 flex items-center
            justify-between border-t border-saasy-border
            pt-8"
        >
          <div>
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="font-[family-name:var(--font-dm-sans)]
                  text-sm text-saasy-teal
                  hover:text-saasy-teal-dim
                  transition-colors"
              >
                &larr; {prevPost.title}
              </Link>
            )}
          </div>
          <div>
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="font-[family-name:var(--font-dm-sans)]
                  text-sm text-saasy-teal
                  hover:text-saasy-teal-dim
                  transition-colors text-right"
              >
                {nextPost.title} &rarr;
              </Link>
            )}
          </div>
        </nav>
      </div>
      <MarketingFooter />
    </div>
  );
}
