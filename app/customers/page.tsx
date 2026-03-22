import Link from "next/link";
import type { Metadata } from "next";
import { SubpageNav } from "../components/SubpageNav";

export const metadata: Metadata = {
  title: "Customers — SaaSy",
  description:
    "See how SaaS teams use SaaSy to reduce churn " +
    "and grow revenue.",
};

interface CaseStudy {
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  authorTitle: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    company: "DataFlow",
    industry: "Data Analytics",
    metric: "30%",
    metricLabel: "churn reduction",
    quote:
      "SaaSy cut our churn rate by 30% in the first " +
      "quarter. The health scoring alone is worth " +
      "the investment.",
    author: "Sarah Chen",
    authorTitle: "VP of Customer Success",
  },
  {
    company: "ScaleUp",
    industry: "Operations Software",
    metric: "3x",
    metricLabel: "tools consolidated",
    quote:
      "We replaced three separate tools with SaaSy. " +
      "The AI guidance has been a game-changer for " +
      "our CS team.",
    author: "Marcus Rivera",
    authorTitle: "Head of Operations",
  },
  {
    company: "CloudMetrics",
    industry: "Cloud Monitoring",
    metric: "$180K",
    metricLabel: "ARR saved",
    quote:
      "The proactive alerts caught two at-risk " +
      "accounts we would have completely missed.",
    author: "Emily Park",
    authorTitle: "CEO",
  },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <SubpageNav />
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="text-center">
          <p
            className="font-[family-name:var(--font-dm-sans)]
              text-sm font-medium text-saasy-teal"
          >
            Trusted by 200+ SaaS teams
          </p>
          <h1
            className="mt-2 font-[family-name:var(--font-sora)]
              text-4xl font-bold tracking-tight text-white"
          >
            Customer Stories
          </h1>
          <p
            className="mt-4 font-[family-name:var(--font-dm-sans)]
              text-lg text-saasy-muted"
          >
            See how teams use SaaSy to reduce churn and
            grow revenue.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map(study => (
            <div
              key={study.company}
              className="glow-border flex flex-col rounded-xl
                bg-saasy-card p-8"
            >
              <div className="mb-6">
                <p
                  className="font-[family-name:var(--font-sora)]
                    text-4xl font-bold text-saasy-teal"
                >
                  {study.metric}
                </p>
                <p
                  className="mt-1 font-[family-name:var(--font-dm-sans)]
                    text-sm text-saasy-muted"
                >
                  {study.metricLabel}
                </p>
              </div>
              <p
                className="flex-1 font-[family-name:var(--font-dm-sans)]
                  text-sm leading-relaxed text-saasy-text"
              >
                &ldquo;{study.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-saasy-border pt-4">
                <p
                  className="font-[family-name:var(--font-sora)]
                    text-sm font-semibold text-white"
                >
                  {study.author}
                </p>
                <p
                  className="font-[family-name:var(--font-dm-sans)]
                    text-xs text-saasy-muted"
                >
                  {study.authorTitle}, {study.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2
            className="font-[family-name:var(--font-sora)]
              text-xl font-semibold text-white"
          >
            Ready to see results like these?
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="https://app.hellosaasy.ai/signup"
              className="rounded-lg bg-saasy-teal px-6 py-2.5
                font-[family-name:var(--font-sora)] text-sm
                font-semibold text-saasy-dark transition-colors
                hover:bg-saasy-teal-dim"
            >
              Start Free Trial
            </Link>
            <Link
              href="https://app.hellosaasy.ai/contact-sales"
              className="rounded-lg border border-saasy-border px-6
                py-2.5 font-[family-name:var(--font-sora)] text-sm
                font-semibold text-saasy-text transition-colors
                hover:border-saasy-muted hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
