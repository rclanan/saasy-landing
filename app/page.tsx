"use client";

import { useState } from "react";
import Link from "next/link";

/* ───────────────────────────── Icons ───────────────────────────── */

function IconHealthScore() {
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

function IconChurn() {
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

function IconIntegrations() {
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
            Customer Health Dashboard
          </span>
        </div>

        {/* Mock health bars */}
        <div className="space-y-4">
          {[
            {
              name: "Acme Corp",
              score: 92,
              color: "bg-saasy-teal",
              width: "92%",
            },
            {
              name: "TechStart Inc",
              score: 78,
              color: "bg-saasy-cyan",
              width: "78%",
            },
            {
              name: "DataFlow Labs",
              score: 45,
              color: "bg-saasy-popular",
              width: "45%",
            },
            {
              name: "CloudNine SaaS",
              score: 23,
              color: "bg-red-500",
              width: "23%",
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
            2 customers need immediate attention
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

/* ───────────────────────── Pricing Card ────────────────────────── */

function PricingCard({
  name,
  price,
  popular,
  features,
}: {
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
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
            /mo
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

/* ───────────────────────── Social Proof ────────────────────────── */

function SocialProof() {
  const metrics = [
    { value: "2,400+", label: "Businesses monitored" },
    { value: "35%", label: "Average churn reduction" },
    { value: "< 5 min", label: "Setup time" },
  ];

  const testimonials = [
    {
      quote:
        "SaaSy caught a churn signal we completely missed. We saved a $48K account because of the early warning.",
      author: "Sarah K.",
      role: "VP of Customer Success",
    },
    {
      quote:
        "The health scoring dashboard replaced three tools we were stitching together. Simpler and more accurate.",
      author: "James T.",
      role: "Head of Revenue Ops",
    },
    {
      quote:
        "We reduced our churn rate by 40% in the first quarter. The ROI was immediate.",
      author: "Priya M.",
      role: "CEO",
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

/* ═══════════════════════════ PAGE ═══════════════════════════════ */

export default function Home() {
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
            Stop churn
            <br />
            <span className="gradient-text">before it starts</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl
              font-[family-name:var(--font-dm-sans)] text-lg
              leading-relaxed text-saasy-muted sm:text-xl"
          >
            AI-powered customer health scoring and churn prediction
            for SaaS teams. Know which customers need attention
            before they leave.
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
              Start your free trial
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
              Everything you need to{" "}
              <span className="gradient-text">
                retain customers
              </span>
            </h2>
            <p
              className="mt-4
                font-[family-name:var(--font-dm-sans)]
                text-lg text-saasy-muted"
            >
              From real-time health scoring to predictive
              analytics, SaaSy gives your team the tools to act
              before customers churn.
            </p>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <FeatureCard
              icon={<IconHealthScore />}
              title="Health Scoring"
              description="Real-time customer health scores powered by usage data, support interactions, and engagement signals."
            />
            <FeatureCard
              icon={<IconChurn />}
              title="Churn Prediction"
              description="ML-driven churn risk assessment identifies at-risk customers weeks before they cancel."
            />
            <FeatureCard
              icon={<IconAlerts />}
              title="Proactive Alerts"
              description="Automated alerts when customer health drops, so your team can intervene early."
            />
            <FeatureCard
              icon={<IconIntegrations />}
              title="Native Integrations"
              description="Connect Salesforce, HubSpot, Stripe, and Jira to build a complete customer picture."
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Pricing ─────────────────── */}
      <section
        id="pricing"
        className="border-t border-saasy-border py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
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

          <div
            className="mx-auto grid max-w-5xl gap-8
              lg:grid-cols-3"
          >
            <PricingCard
              name="Starter"
              price={49}
              features={[
                "Up to 100 customers",
                "1 integration",
                "3 team members",
                "Email alerts",
                "Health scoring dashboard",
              ]}
            />
            <PricingCard
              name="Growth"
              price={149}
              popular
              features={[
                "Up to 1,000 customers",
                "5 integrations",
                "10 team members",
                "Email + Slack alerts",
                "API access",
                "Advanced analytics",
              ]}
            />
            <PricingCard
              name="Scale"
              price={399}
              features={[
                "Unlimited customers",
                "Unlimited integrations",
                "50 team members",
                "Priority support",
                "Custom alert rules",
                "Dedicated CSM",
              ]}
            />
          </div>
        </div>
      </section>

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
            Ready to reduce churn?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl
              font-[family-name:var(--font-dm-sans)] text-lg
              text-saasy-muted"
          >
            Join SaaS teams using SaaSy to predict and prevent
            customer churn. Start your 14-day free trial today.
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
      <footer
        className="border-t border-saasy-border bg-saasy-darker"
      >
        <div
          className="mx-auto flex max-w-6xl flex-col items-center
            justify-between gap-6 px-6 py-10 sm:flex-row"
        >
          <div
            className="font-[family-name:var(--font-dm-sans)]
              text-sm text-saasy-muted"
          >
            &copy; 2026 SaaSy. A product by{" "}
            <Link
              href="https://saasysolutionsllc.com"
              className="text-saasy-text transition-colors
                hover:text-saasy-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              SaaSy Solutions LLC
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://app.hellosaasy.ai/terms"
              className="font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-muted transition-colors
                hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="https://app.hellosaasy.ai/privacy"
              className="font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-muted transition-colors
                hover:text-white"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
