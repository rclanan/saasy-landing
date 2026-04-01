import Link from "next/link";
import { SiteNav } from "../../components/SiteNav";
import { MarketingFooter } from "../../components/MarketingFooter";

const SLUGS = [
  "reduce-churn-with-health-scoring",
  "onboarding-checklist-for-smb-saas",
  "ai-powered-customer-success",
];

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

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
            {title}
          </h1>
          <div
            className="mt-4 flex items-center gap-3
              font-[family-name:var(--font-dm-sans)]
              text-sm text-saasy-muted"
          >
            <span>SaaSy Team</span>
            <span>&middot;</span>
            <span>5 min read</span>
          </div>
          <div
            className="mt-8 font-[family-name:var(--font-dm-sans)]
              text-saasy-text leading-relaxed space-y-4"
          >
            <p>
              This post is coming soon. Check back for
              insights on customer success and SaaS
              growth strategies.
            </p>
            <p>
              In the meantime,{" "}
              <Link
                href="https://app.hellosaasy.ai/signup"
                className="text-saasy-teal hover:text-saasy-teal-dim
                  transition-colors"
              >
                start your free trial
              </Link>{" "}
              to experience SaaSy firsthand.
            </p>
          </div>
        </article>
      </div>
      <MarketingFooter />
    </div>
  );
}
