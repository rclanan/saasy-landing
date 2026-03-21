"use client";

import { useState } from "react";
import Link from "next/link";

/* ───────────────────────────── Icons ───────────────────────────── */

function IconCompliance() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        className="fill-saasy-teal/10 stroke-saasy-teal"
        strokeWidth="1.5"
      />
      <path
        d="M14 30l6-8 5 5 9-13"
        className="stroke-saasy-teal"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="35" cy="14" r="3" className="fill-saasy-teal" />
    </svg>
  );
}

function IconCRM() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        className="fill-saasy-cyan/10 stroke-saasy-cyan"
        strokeWidth="1.5"
      />
      <path
        d="M15 33V26M21 33V22M27 33V18M33 33V14"
        className="stroke-saasy-cyan"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M15 18l6-2 6-2 6-2"
        className="stroke-saasy-cyan/50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function IconAI() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        className="fill-saasy-purple/10 stroke-saasy-purple"
        strokeWidth="1.5"
      />
      <path
        d="M24 14v10l5 5"
        className="stroke-saasy-purple"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="24"
        cy="24"
        r="10"
        className="stroke-saasy-purple"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="34" cy="14" r="4" className="fill-saasy-popular" />
    </svg>
  );
}

function IconAlerts() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        className="fill-saasy-teal/10 stroke-saasy-teal"
        strokeWidth="1.5"
      />
      <circle
        cx="24"
        cy="24"
        r="4"
        className="fill-saasy-teal"
      />
      <circle
        cx="14"
        cy="14"
        r="3"
        className="stroke-saasy-cyan"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="34"
        cy="14"
        r="3"
        className="stroke-saasy-cyan"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="14"
        cy="34"
        r="3"
        className="stroke-saasy-cyan"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="34"
        cy="34"
        r="3"
        className="stroke-saasy-cyan"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="17"
        y1="17"
        x2="21"
        y2="21"
        className="stroke-saasy-teal/50"
        strokeWidth="1.5"
      />
      <line
        x1="31"
        y1="17"
        x2="27"
        y2="21"
        className="stroke-saasy-teal/50"
        strokeWidth="1.5"
      />
      <line
        x1="17"
        y1="31"
        x2="21"
        y2="27"
        className="stroke-saasy-teal/50"
        strokeWidth="1.5"
      />
      <line
        x1="31"
        y1="31"
        x2="27"
        y2="27"
        className="stroke-saasy-teal/50"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-saasy-teal"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ──────────────────── Abstract Dashboard Graphic ──────────────── */

function DashboardGraphic() {
  return (
    <div className="relative mx-auto mt-16 max-w-2xl">
      {/* Outer glow */}
      <div
        className="absolute inset-0 -m-4 rounded-2xl
          bg-gradient-to-br from-saasy-teal/5 to-saasy-cyan/5
          blur-xl"
      />
      {/* Card */}
      <div
        className="glow-border relative rounded-2xl
          bg-saasy-card/80 p-6 backdrop-blur-sm sm:p-8"
      >
        {/* Title bar dots */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <div className="h-3 w-3 rounded-full bg-green-500/60" />
          <span
            className="ml-3 font-[family-name:var(--font-dm-sans)]
              text-xs text-saasy-muted"
          >
            Business Command Center
          </span>
        </div>

        {/* Business status bars */}
        <div className="space-y-4">
          {[
            {
              name: "LLC Formation",
              score: "Complete",
              color: "bg-saasy-teal",
              width: "100%",
            },
            {
              name: "Business License",
              score: "In Progress",
              color: "bg-saasy-cyan",
              width: "75%",
            },
            {
              name: "Tax Registration",
              score: "Needs Attention",
              color: "bg-saasy-popular",
              width: "45%",
            },
            {
              name: "Insurance Setup",
              score: "Not Started",
              color: "bg-red-500",
              width: "15%",
            },
          ].map((item) => (
            <div key={item.name} className="group">
              <div
                className="mb-1.5 flex items-center
                  justify-between"
              >
                <span
                  className="font-[family-name:var(--font-dm-sans)]
                    text-sm text-saasy-text"
                >
                  {item.name}
                </span>
                <span
                  className="font-[family-name:var(--font-sora)]
                    text-sm font-semibold text-saasy-muted"
                >
                  {item.score}
                </span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full
                  bg-saasy-border"
              >
                <div
                  className={`health-bar h-full rounded-full
                    ${item.color}`}
                  style={
                    {
                      "--bar-width": item.width,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Alert badge */}
        <div
          className="mt-6 inline-flex items-center gap-2
            rounded-lg border border-red-500/20 bg-red-500/10
            px-3 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span
            className="font-[family-name:var(--font-dm-sans)]
              text-xs text-red-400"
          >
            2 compliance deadlines this week
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Feature Card ────────────────────────── */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="group relative rounded-2xl border
        border-saasy-border bg-saasy-card/50 p-8
        transition-all duration-300
        hover:border-saasy-teal/30 hover:bg-saasy-card-hover"
    >
      <div className="mb-5">{icon}</div>
      <h3
        className="mb-3 font-[family-name:var(--font-sora)]
          text-xl font-semibold text-white"
      >
        {title}
      </h3>
      <p
        className="font-[family-name:var(--font-dm-sans)]
          leading-relaxed text-saasy-muted"
      >
        {description}
      </p>
    </div>
  );
}

/* ───────────────────────── Who It's For ────────────────────────── */

function WhoItsFor() {
  const personas = [
    {
      title: "First-time Founders",
      description:
        "Launching your first business and overwhelmed by compliance, registration, and operations. SaaSy walks you through every step so nothing falls through the cracks.",
      benefit: "From idea to launch, stress-free",
    },
    {
      title: "Agency Owners",
      description:
        "Running multiple client businesses and juggling filings, renewals, and contacts across all of them. Manage up to 5 businesses from one dashboard with Growth.",
      benefit: "One dashboard for every business",
    },
    {
      title: "Serial Entrepreneurs",
      description:
        "Scaling a portfolio of businesses and need custom automations and priority support. Unlimited businesses, dedicated onboarding, and advanced analytics on Scale.",
      benefit: "Scale without the back-office chaos",
    },
  ];

  return (
    <section className="border-t border-saasy-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            className="font-[family-name:var(--font-sora)]
              text-3xl font-bold text-white sm:text-4xl"
          >
            Built for every entrepreneur who{" "}
            <span className="gradient-text">means business</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="rounded-2xl border border-saasy-border
                bg-saasy-card/50 p-8"
            >
              <h3
                className="mb-3 font-[family-name:var(--font-sora)]
                  text-xl font-semibold text-white"
              >
                {persona.title}
              </h3>
              <p
                className="font-[family-name:var(--font-dm-sans)]
                  leading-relaxed text-saasy-muted"
              >
                {persona.description}
              </p>
              <div
                className="mt-4 rounded-lg bg-saasy-teal/10
                  border border-saasy-teal/20 p-3 text-sm
                  font-medium text-saasy-teal
                  font-[family-name:var(--font-dm-sans)]"
              >
                {persona.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing Card ────────────────────────── */

function PricingCard({
  name,
  price,
  popular,
  features,
  billingLabel,
}: {
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
  billingLabel?: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8
        ${
          popular
            ? "popular-glow border-saasy-teal bg-saasy-card"
            : "border-saasy-border bg-saasy-card/50"
        }`}
    >
      {popular && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2
            rounded-full bg-saasy-teal px-4 py-1
            font-[family-name:var(--font-sora)] text-xs
            font-bold tracking-wider text-saasy-dark uppercase"
        >
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3
          className="mb-2 font-[family-name:var(--font-sora)]
            text-xl font-semibold text-white"
        >
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className="font-[family-name:var(--font-sora)]
              text-5xl font-bold text-white"
          >
            ${price}
          </span>
          <span
            className="font-[family-name:var(--font-dm-sans)]
              text-saasy-muted"
          >
            {billingLabel ?? "/mo"}
          </span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3
              font-[family-name:var(--font-dm-sans)]
              text-sm text-saasy-muted"
          >
            <IconCheck />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="https://app.hellosaasy.ai/auth/register"
        className={`block rounded-xl py-3.5 text-center
          font-[family-name:var(--font-sora)] text-sm
          font-semibold transition-all duration-200
          ${
            popular
              ? "bg-saasy-teal text-saasy-dark hover:bg-saasy-teal-dim"
              : "border border-saasy-border bg-saasy-card-hover text-white hover:border-saasy-teal/40"
          }`}
      >
        Start free trial
      </Link>
    </div>
  );
}

/* ─────────────────────── Pricing Toggle ────────────────────────── */

function PricingToggle({
  interval,
  onChange,
}: {
  interval: "monthly" | "annual";
  onChange: (v: "monthly" | "annual") => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div
        className="rounded-full bg-saasy-card border
          border-saasy-border p-1 inline-flex"
      >
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={`rounded-full px-5 py-2
            font-[family-name:var(--font-sora)] text-sm font-semibold
            transition-all duration-200
            ${
              interval === "monthly"
                ? "bg-saasy-teal text-saasy-dark"
                : "text-saasy-muted hover:text-white"
            }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onChange("annual")}
          className={`rounded-full px-5 py-2
            font-[family-name:var(--font-sora)] text-sm font-semibold
            transition-all duration-200
            ${
              interval === "annual"
                ? "bg-saasy-teal text-saasy-dark"
                : "text-saasy-muted hover:text-white"
            }`}
        >
          Annual
        </button>
      </div>
      {interval === "annual" && (
        <span
          className="rounded-full bg-saasy-teal/10
            border border-saasy-teal/20 px-2.5 py-0.5
            text-xs font-medium text-saasy-teal
            font-[family-name:var(--font-dm-sans)]"
        >
          Save 20%
        </span>
      )}
    </div>
  );
}

/* ───────────────────────── Social Proof ────────────────────────── */

function SocialProof() {
  const metrics = [
    { value: "2,400+", label: "Businesses launched" },
    { value: "< 2 min", label: "Average setup time" },
    { value: "98%", label: "Trial-to-paid rate" },
  ];

  const testimonials = [
    {
      quote:
        "SaaSy handled all the compliance paperwork I didn't even know I needed. Saved me weeks.",
      author: "Maria K.",
      role: "Founder, Bloom Studio",
    },
    {
      quote:
        "The daily briefing alone is worth the price. It's like having a COO in my pocket.",
      author: "James T.",
      role: "CEO, NorthPeak Consulting",
    },
    {
      quote:
        "We went from idea to first revenue in 3 weeks with SaaSy guiding every step.",
      author: "Priya S.",
      role: "Co-founder, DataLens",
    },
  ];

  return (
    <section className="border-t border-saasy-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Metrics bar */}
        <div
          className="mx-auto mb-16 grid max-w-3xl grid-cols-1
            gap-8 sm:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div
                className="font-[family-name:var(--font-sora)]
                  text-3xl font-bold text-white"
              >
                {metric.value}
              </div>
              <div
                className="mt-1 font-[family-name:var(--font-dm-sans)]
                  text-sm text-saasy-muted"
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-saasy-border
                bg-saasy-card/50 p-6"
            >
              <p
                className="font-[family-name:var(--font-dm-sans)]
                  leading-relaxed text-saasy-muted"
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <div
                  className="font-[family-name:var(--font-sora)]
                    text-sm font-semibold text-white"
                >
                  {t.author}
                </div>
                <div className="text-sm text-saasy-muted">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Trust Badge ────────────────────────── */

function TrustBadge({
  label,
  sublabel,
}: {
  label: string;
  sublabel: string;
}) {
  return (
    <div className="text-center">
      <div
        className="font-[family-name:var(--font-sora)]
          text-2xl font-bold text-white"
      >
        {label}
      </div>
      <div
        className="mt-1 font-[family-name:var(--font-dm-sans)]
          text-sm text-saasy-muted"
      >
        {sublabel}
      </div>
    </div>
  );
}

/* ───────────────────────────── FAQ ─────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "What happens after my trial ends?",
    answer:
      "Your 14-day trial includes full Growth plan access — no credit card required. When it ends, choose any plan to continue. Your data is preserved for 30 days if you need more time to decide.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. Upgrade or downgrade anytime from your dashboard. Changes take effect at the start of your next billing cycle, prorated automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption (AES-256 at rest, TLS 1.2+ in transit), SOC 2 compliance, and strict tenant isolation. Your business data is never shared across accounts.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "Salesforce, HubSpot, Stripe, and Jira out of the box. Our API (Growth plan and above) lets you connect any tool in your stack.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most entrepreneurs are up and running in under 2 minutes. Answer a few questions about your business, and SaaSy builds your personalized action plan immediately.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your billing settings with one click. No long-term contracts, no cancellation fees.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-saasy-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          className="mb-12 text-center
            font-[family-name:var(--font-sora)]
            text-3xl font-bold text-white sm:text-4xl"
        >
          Frequently asked questions
        </h2>

        <dl>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="text-left w-full flex items-center
                      justify-between py-4
                      border-b border-saasy-border"
                  >
                    <span
                      className="text-white
                        font-[family-name:var(--font-sora)]
                        text-base font-medium"
                    >
                      {item.question}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`ml-4 h-5 w-5 shrink-0
                        text-saasy-muted transition-transform
                        ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd>
                    <p
                      className="text-saasy-muted
                        font-[family-name:var(--font-dm-sans)]
                        text-sm pb-4 pt-3"
                    >
                      {item.answer}
                    </p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/* ═══════════════════════════ MOBILE NAV ═══════════════════════════ */

function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger button — visible only below md */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex h-9 w-9 items-center justify-center
          rounded-lg border border-saasy-border text-saasy-muted
          transition-colors hover:border-saasy-teal/40 hover:text-white"
      >
        {open ? (
          /* X icon */
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
            md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Slide-in drawer from right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72
          border-l border-saasy-border bg-saasy-darker
          shadow-2xl transition-transform duration-300 ease-in-out
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between
            border-b border-saasy-border px-6 py-4"
        >
          <span
            className="font-[family-name:var(--font-sora)]
              text-lg font-bold gradient-text"
          >
            SaaSy
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center
              rounded-lg text-saasy-muted transition-colors
              hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col px-6 py-6 gap-1">
          <Link
            href="#features"
            onClick={close}
            className="font-[family-name:var(--font-dm-sans)]
              rounded-lg px-3 py-3 text-base text-saasy-muted
              transition-colors hover:bg-saasy-border/30 hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={close}
            className="font-[family-name:var(--font-dm-sans)]
              rounded-lg px-3 py-3 text-base text-saasy-muted
              transition-colors hover:bg-saasy-border/30 hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        {/* Drawer CTAs */}
        <div
          className="flex flex-col gap-3 border-t border-saasy-border
            px-6 py-6"
        >
          <Link
            href="https://app.hellosaasy.ai/auth/register"
            onClick={close}
            className="w-full rounded-lg border border-saasy-border
              px-4 py-3 text-center
              font-[family-name:var(--font-sora)] text-sm font-semibold
              text-saasy-muted transition-colors
              hover:border-saasy-teal/40 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="https://app.hellosaasy.ai/auth/register"
            onClick={close}
            className="w-full rounded-lg bg-saasy-teal px-4 py-3
              text-center font-[family-name:var(--font-sora)]
              text-sm font-semibold text-saasy-dark
              transition-colors hover:bg-saasy-teal-dim"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────── Marketing Footer ──────────────────────── */

function MarketingFooter() {
  return (
    <footer className="border-t border-saasy-border bg-saasy-darker">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Product column */}
          <div>
            <h4
              className="text-white font-[family-name:var(--font-sora)]
                text-sm font-semibold mb-4"
            >
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://app.hellosaasy.ai/integrations"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              className="text-white font-[family-name:var(--font-sora)]
                text-sm font-semibold mb-4"
            >
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://saasysolutionsllc.com"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://saasysolutionsllc.com/blog"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4
              className="text-white font-[family-name:var(--font-sora)]
                text-sm font-semibold mb-4"
            >
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4
              className="text-white font-[family-name:var(--font-sora)]
                text-sm font-semibold mb-4"
            >
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@hellosaasy.ai"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  support@hellosaasy.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@hellosaasy.ai"
                  className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                    text-sm hover:text-white transition-colors"
                >
                  sales@hellosaasy.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-saasy-border mt-10 pt-6
            text-center text-saasy-muted text-sm
            font-[family-name:var(--font-dm-sans)]"
        >
          &copy; 2026 SaaSy. A product by{" "}
          <a
            href="https://saasysolutionsllc.com"
            className="hover:text-white transition-colors"
          >
            SaaSy Solutions LLC
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── Blog Highlights ───────────────────────── */

const BLOG_POSTS = [
  {
    title: "The Complete Guide to LLC Formation in 2026",
    description:
      "Everything you need to know about registering your business entity, from state selection to EIN filing.",
    href: "https://saasysolutionsllc.com/blog",
  },
  {
    title: "5 Compliance Mistakes That Cost New Businesses Thousands",
    description:
      "The permits, licenses, and filings most first-time founders miss — and how to stay ahead.",
    href: "https://saasysolutionsllc.com/blog",
  },
  {
    title: "How AI Is Changing the Way Entrepreneurs Launch Businesses",
    description:
      "From automated compliance to intelligent CRM, the tools reshaping business formation.",
    href: "https://saasysolutionsllc.com/blog",
  },
];

function BlogHighlights() {
  return (
    <section className="border-t border-saasy-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            className="font-[family-name:var(--font-sora)]
              text-3xl font-bold text-white sm:text-4xl"
          >
            From our blog
          </h2>
          <p
            className="mt-4 font-[family-name:var(--font-dm-sans)]
              text-lg text-saasy-muted"
          >
            Insights and guides for entrepreneurs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="rounded-2xl border border-saasy-border
                bg-saasy-card/50 p-6 hover:border-saasy-teal/30
                transition-all duration-300 group block"
            >
              <h3
                className="text-white font-[family-name:var(--font-sora)]
                  text-lg font-semibold group-hover:text-saasy-teal
                  transition-colors"
              >
                {post.title}
              </h3>
              <p
                className="text-saasy-muted font-[family-name:var(--font-dm-sans)]
                  text-sm mt-2"
              >
                {post.description}
              </p>
              <span
                className="text-saasy-teal text-sm font-medium
                  mt-4 inline-block"
              >
                Read more →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://saasysolutionsllc.com/blog"
            className="font-[family-name:var(--font-dm-sans)]
              text-saasy-teal text-sm font-medium
              hover:underline transition-colors"
          >
            View all posts →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ PAGE ═══════════════════════════════ */

export default function Home() {
  const [pricingInterval, setPricingInterval] = useState<
    "monthly" | "annual"
  >("monthly");

  const monthlyPrices = { starter: 49, growth: 149, scale: 399 };
  const annualPrices = { starter: 39, growth: 119, scale: 319 };
  const prices =
    pricingInterval === "annual" ? annualPrices : monthlyPrices;
  const billingLabel =
    pricingInterval === "annual" ? "/mo billed annually" : "/mo";

  return (
    <div className="min-h-screen">
      {/* ─────────────── Navigation ─────────────── */}
      <nav
        className="fixed top-0 right-0 left-0 z-50
          border-b border-saasy-border/50 bg-saasy-dark/80
          backdrop-blur-lg"
      >
        <div
          className="mx-auto flex max-w-6xl items-center
            justify-between px-6 py-4"
        >
          <Link
            href="/"
            className="font-[family-name:var(--font-sora)]
              text-xl font-bold text-white"
          >
            <span className="gradient-text">SaaSy</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="hidden font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-muted transition-colors
                hover:text-white md:block"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hidden font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-muted transition-colors
                hover:text-white md:block"
            >
              Pricing
            </Link>
            <Link
              href="https://app.hellosaasy.ai/auth/register"
              className="hidden rounded-lg bg-saasy-teal px-4 py-2
                font-[family-name:var(--font-sora)] text-sm
                font-semibold text-saasy-dark transition-colors
                hover:bg-saasy-teal-dim md:flex"
            >
              Start free trial
            </Link>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* ─────────────────── Hero ─────────────────── */}
      <section
        className="hero-gradient grid-pattern relative
          overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2
              rounded-full border border-saasy-teal/20
              bg-saasy-teal/5 px-4 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full bg-saasy-teal"
            />
            <span
              className="font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-teal"
            >
              Now in public beta
            </span>
          </div>

          <h1
            className="font-[family-name:var(--font-sora)]
              text-5xl leading-[1.1] font-extrabold tracking-tight
              text-white sm:text-7xl"
          >
            Your AI business
            <br />
            <span className="gradient-text">co-founder</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl
              font-[family-name:var(--font-dm-sans)] text-lg
              leading-relaxed text-saasy-muted sm:text-xl"
          >
            SaaSy guides you from first idea to thriving
            enterprise. Every stage of your business journey,
            managed by AI that works alongside you.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col items-center
              justify-center gap-4 sm:flex-row"
          >
            <Link
              href="https://app.hellosaasy.ai/auth/register"
              className="cta-pulse inline-flex rounded-xl
                bg-saasy-teal px-8 py-4
                font-[family-name:var(--font-sora)] text-base
                font-semibold text-saasy-dark transition-colors
                hover:bg-saasy-teal-dim"
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl
                border border-saasy-border px-8 py-4
                font-[family-name:var(--font-sora)] text-base
                font-semibold text-saasy-muted transition-colors
                hover:border-saasy-teal/30 hover:text-white"
            >
              See how it works
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>

          <p
            className="mt-4
              font-[family-name:var(--font-dm-sans)]
              text-sm text-saasy-muted"
          >
            14-day free trial on Growth plan. No credit card
            required.
          </p>

          {/* Abstract dashboard */}
          <DashboardGraphic />
        </div>
      </section>

      {/* ─────────────── Trust Bar ─────────────────── */}
      <section
        className="border-y border-saasy-border bg-saasy-card/30"
      >
        <div
          className="mx-auto grid max-w-4xl grid-cols-2
            gap-8 px-6 py-12 sm:grid-cols-4"
        >
          <TrustBadge label="99.9%" sublabel="Uptime SLA" />
          <TrustBadge label="SOC 2" sublabel="Compliant" />
          <TrustBadge label="256-bit" sublabel="Encryption" />
          <TrustBadge
            label="GDPR"
            sublabel="Ready"
          />
        </div>
      </section>

      {/* ─────────────── Social Proof ──────────────── */}
      <SocialProof />

      {/* ─────────────── Features ─────────────────── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2
              className="font-[family-name:var(--font-sora)]
                text-3xl font-bold text-white sm:text-4xl"
            >
              Everything your business needs to{" "}
              <span className="gradient-text">
                thrive
              </span>
            </h2>
            <p
              className="mt-4
                font-[family-name:var(--font-dm-sans)]
                text-lg text-saasy-muted"
            >
              From formation to scaling, SaaSy manages every
              stage of your business lifecycle with AI-powered
              guidance.
            </p>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <FeatureCard
              icon={<IconCompliance />}
              title="Compliance Tracker"
              description="Automated tracking of licenses, permits, and filings. Get reminders before deadlines, not after."
            />
            <FeatureCard
              icon={<IconCRM />}
              title="Built-in CRM"
              description="Manage contacts, deals, and customer relationships from day one. No separate tool needed."
            />
            <FeatureCard
              icon={<IconAI />}
              title="AI Guidance"
              description="Personalized recommendations for your business at every growth stage. Like having a mentor on call."
            />
            <FeatureCard
              icon={<IconAlerts />}
              title="Proactive Alerts"
              description="Timely notifications about deadlines, opportunities, and risks via email or Slack."
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Who It's For ─────────────── */}
      <WhoItsFor />

      {/* ─────────────── Pricing ─────────────────── */}
      <section
        id="pricing"
        className="border-t border-saasy-border py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2
              className="font-[family-name:var(--font-sora)]
                text-3xl font-bold text-white sm:text-4xl"
            >
              Simple, transparent pricing
            </h2>
            <p
              className="mt-4
                font-[family-name:var(--font-dm-sans)]
                text-lg text-saasy-muted"
            >
              14-day free trial on every plan. No credit card
              required.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <PricingToggle
              interval={pricingInterval}
              onChange={setPricingInterval}
            />
          </div>

          <div
            className="mx-auto grid max-w-5xl gap-8
              lg:grid-cols-3"
          >
            <PricingCard
              name="Starter"
              price={prices.starter}
              billingLabel={billingLabel}
              features={[
                "1 business",
                "Compliance tracker",
                "CRM (50 contacts)",
                "Daily briefing",
                "Email alerts",
              ]}
            />
            <PricingCard
              name="Growth"
              price={prices.growth}
              popular
              billingLabel={billingLabel}
              features={[
                "Up to 5 businesses",
                "All modules",
                "AI guidance",
                "Slack alerts",
                "API access",
                "Advanced analytics",
              ]}
            />
            <PricingCard
              name="Scale"
              price={prices.scale}
              billingLabel={billingLabel}
              features={[
                "Unlimited businesses",
                "Unlimited integrations",
                "Priority support",
                "Custom automations",
                "Dedicated onboarding",
                "Advanced analytics",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────────────── */}
      <FAQ />

      {/* ─────────────── Blog Highlights ─────────── */}
      <BlogHighlights />

      {/* ───────────── Final CTA ──────────────────── */}
      <section className="border-t border-saasy-border">
        <div
          className="hero-gradient mx-auto max-w-4xl px-6
            py-24 text-center sm:py-32"
        >
          <h2
            className="font-[family-name:var(--font-sora)]
              text-3xl font-bold text-white sm:text-5xl"
          >
            Ready to run your business smarter?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl
              font-[family-name:var(--font-dm-sans)] text-lg
              text-saasy-muted"
          >
            Join thousands of entrepreneurs using SaaSy to build
            and grow their businesses. Start your 14-day free
            trial today.
          </p>
          <Link
            href="https://app.hellosaasy.ai/auth/register"
            className="cta-pulse mt-8 inline-flex rounded-xl
              bg-saasy-teal px-8 py-4
              font-[family-name:var(--font-sora)] text-base
              font-semibold text-saasy-dark transition-colors
              hover:bg-saasy-teal-dim"
          >
            Start your free trial
          </Link>
        </div>
      </section>

      {/* ─────────────── Footer ─────────────────── */}
      <MarketingFooter />
    </div>
  );
}
