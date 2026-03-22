import Link from "next/link";
import type { Metadata } from "next";
import { SubpageNav } from "../components/SubpageNav";

export const metadata: Metadata = {
  title: "Blog — SaaSy",
  description:
    "Insights on customer success, churn reduction, " +
    "and growing your SaaS business.",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const POSTS: BlogPost[] = [
  {
    slug: "reduce-churn-with-health-scoring",
    title:
      "How Health Scoring Reduced Our Churn by 30%",
    excerpt:
      "Learn how proactive health monitoring helps " +
      "you catch at-risk accounts before they leave.",
    date: "2026-03-15",
    readTime: "5 min read",
  },
  {
    slug: "onboarding-checklist-for-smb-saas",
    title:
      "The Ultimate Onboarding Checklist for SMB SaaS",
    excerpt:
      "A step-by-step guide to getting new customers " +
      "to their first aha moment faster.",
    date: "2026-03-08",
    readTime: "7 min read",
  },
  {
    slug: "ai-powered-customer-success",
    title:
      "AI-Powered Customer Success: What Actually Works",
    excerpt:
      "Cutting through the hype to find AI " +
      "applications that genuinely move the needle.",
    date: "2026-02-28",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <SubpageNav />
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <h1
          className="font-[family-name:var(--font-sora)]
            text-4xl font-bold tracking-tight text-white"
        >
          Blog
        </h1>
        <p
          className="mt-4 font-[family-name:var(--font-dm-sans)]
            text-lg text-saasy-muted"
        >
          Insights on customer success, churn reduction,
          and growing your SaaS business.
        </p>

        <div className="mt-10 space-y-6">
          {POSTS.map(post => (
            <article
              key={post.slug}
              className="glow-border rounded-xl bg-saasy-card p-6
                transition-colors hover:bg-saasy-card-hover"
            >
              <div
                className="flex items-center gap-3
                  font-[family-name:var(--font-dm-sans)]
                  text-sm text-saasy-muted"
              >
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
              <h2
                className="mt-2 font-[family-name:var(--font-sora)]
                  text-xl font-semibold text-white"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-saasy-teal transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p
                className="mt-2 font-[family-name:var(--font-dm-sans)]
                  text-saasy-muted"
              >
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block
                  font-[family-name:var(--font-dm-sans)]
                  text-sm font-medium text-saasy-teal
                  hover:text-saasy-teal-dim transition-colors"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
