import type { Metadata } from "next";
import { SubpageNav } from "../components/SubpageNav";

export const metadata: Metadata = {
  title: "Changelog — SaaSy",
  description:
    "See what\u2019s new in SaaSy \u2014 features, " +
    "improvements, and fixes.",
};

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  items: {
    type: "feature" | "improvement" | "fix";
    text: string;
  }[];
}

const CHANGELOG: ChangelogEntry[] = [
  {
    version: "1.4.0",
    date: "2026-03-20",
    title: "ROI Calculator & International Support",
    items: [
      {
        type: "feature",
        text: "ROI savings calculator on pricing page",
      },
      {
        type: "feature",
        text: "Country selector in onboarding with " +
          "US/Canada state/province support",
      },
      {
        type: "improvement",
        text: "Reduced signup form from 6 fields to 4",
      },
      {
        type: "improvement",
        text: "Organization ID remembered between " +
          "login sessions",
      },
      {
        type: "fix",
        text: "Added Content Security Policy headers",
      },
    ],
  },
  {
    version: "1.3.0",
    date: "2026-03-10",
    title: "Command Palette & Health Scoring",
    items: [
      {
        type: "feature",
        text: "Cmd+K command palette for quick navigation",
      },
      {
        type: "feature",
        text: "Customer health scoring with churn prediction",
      },
      {
        type: "improvement",
        text: "Dashboard daily briefing with AI " +
          "recommendations",
      },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-02-25",
    title: "Stripe Billing & Onboarding Wizard",
    items: [
      {
        type: "feature",
        text: "Stripe-powered billing with annual/" +
          "monthly toggle",
      },
      {
        type: "feature",
        text: "3-step onboarding wizard with stage detection",
      },
      {
        type: "improvement",
        text: "httpOnly cookie auth replacing " +
          "localStorage tokens",
      },
    ],
  },
];

const TYPE_STYLES: Record<
  string,
  { label: string; className: string }
> = {
  feature: {
    label: "New",
    className: "bg-saasy-teal/10 text-saasy-teal",
  },
  improvement: {
    label: "Improved",
    className: "bg-saasy-cyan/10 text-saasy-cyan",
  },
  fix: {
    label: "Fixed",
    className: "bg-saasy-muted/10 text-saasy-muted",
  },
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen">
      <SubpageNav />
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <h1
          className="font-[family-name:var(--font-sora)]
            text-4xl font-bold tracking-tight text-white"
        >
          Changelog
        </h1>
        <p
          className="mt-4 font-[family-name:var(--font-dm-sans)]
            text-lg text-saasy-muted"
        >
          New features, improvements, and fixes.
        </p>

        <div className="mt-10 space-y-12">
          {CHANGELOG.map(entry => (
            <div key={entry.version}>
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full bg-saasy-teal px-3 py-0.5
                    font-[family-name:var(--font-sora)] text-sm
                    font-semibold text-saasy-dark"
                >
                  v{entry.version}
                </span>
                <time
                  dateTime={entry.date}
                  className="font-[family-name:var(--font-dm-sans)]
                    text-sm text-saasy-muted"
                >
                  {new Date(entry.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </time>
              </div>
              <h2
                className="mt-3 font-[family-name:var(--font-sora)]
                  text-xl font-semibold text-white"
              >
                {entry.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {entry.items.map((item, i) => {
                  const style = TYPE_STYLES[item.type];
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-3
                        font-[family-name:var(--font-dm-sans)]
                        text-sm text-saasy-text"
                    >
                      <span
                        className={`mt-0.5 inline-block rounded px-2
                          py-0.5 text-xs font-medium ${style.className}`}
                      >
                        {style.label}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
