import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { MarketingFooter } from "../components/MarketingFooter";

export const metadata: Metadata = {
  title: "Customers — SaaSy",
  description:
    "See how founders use SaaSy to save time, cut costs, " +
    "and stay on top of every business they run.",
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
    industry: "E-commerce & Logistics",
    metric: "100%",
    metricLabel: "compliance deadlines met",
    quote:
      "Before SaaSy, I missed a state tax filing and " +
      "ate a $4K penalty. Now every deadline is tracked " +
      "automatically — I haven't missed one since.",
    author: "Sarah Chen",
    authorTitle: "Founder & CEO",
  },
  {
    company: "ScaleUp",
    industry: "Multi-brand Retail",
    metric: "15 hrs",
    metricLabel: "saved per week",
    quote:
      "I run three businesses. SaaSy replaced the " +
      "spreadsheets, the bookkeeper check-ins, and two " +
      "SaaS subscriptions. I got my weekends back.",
    author: "Marcus Rivera",
    authorTitle: "Serial Entrepreneur",
  },
  {
    company: "CloudMetrics",
    industry: "Professional Services",
    metric: "$48K",
    metricLabel: "operational costs cut annually",
    quote:
      "SaaSy flagged redundant software subscriptions " +
      "I forgot I was paying for. It paid for itself " +
      "in the first month.",
    author: "Emily Park",
    authorTitle: "Founder",
  },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="text-center">
          <p
            className="font-[family-name:var(--font-poppins)]
              text-sm font-medium text-saasy-pink"
          >
            Trusted by 200+ founders
          </p>
          <h1
            className="mt-2 font-[family-name:var(--font-poppins)]
              text-4xl font-bold tracking-tight text-white"
          >
            Customer Stories
          </h1>
          <p
            className="mt-4 font-[family-name:var(--font-poppins)]
              text-lg text-saasy-muted"
          >
            See how founders use SaaSy to save time, cut
            costs, and stay on top of every business they run.
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
                  className="font-[family-name:var(--font-poppins)]
                    text-4xl font-bold text-saasy-pink"
                >
                  {study.metric}
                </p>
                <p
                  className="mt-1 font-[family-name:var(--font-poppins)]
                    text-sm text-saasy-muted"
                >
                  {study.metricLabel}
                </p>
              </div>
              <p
                className="flex-1 font-[family-name:var(--font-poppins)]
                  text-sm leading-relaxed text-saasy-text"
              >
                &ldquo;{study.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-saasy-border pt-4">
                <p
                  className="font-[family-name:var(--font-poppins)]
                    text-sm font-semibold text-white"
                >
                  {study.author}
                </p>
                <p
                  className="font-[family-name:var(--font-poppins)]
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
            className="font-[family-name:var(--font-poppins)]
              text-xl font-semibold text-white"
          >
            Ready to see results like these?
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="https://app.hellosaasy.ai/signup"
              className="rounded-full bg-saasy-pink px-6 py-2.5
                font-[family-name:var(--font-poppins)] text-sm
                font-semibold uppercase tracking-wider text-white
                transition-colors hover:bg-saasy-rose"
            >
              Start Free Trial
            </Link>
            <Link
              href="https://app.hellosaasy.ai/contact-sales"
              className="rounded-full border border-saasy-border px-6
                py-2.5 font-[family-name:var(--font-poppins)] text-sm
                font-semibold text-saasy-text transition-colors
                hover:border-saasy-muted hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
      <MarketingFooter />
    </div>
  );
}
