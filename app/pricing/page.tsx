"use client";

import { useState } from "react";
import Link from "next/link";
import { PricingCard, PricingToggle } from "../components/Pricing";
import { SiteNav } from "../components/SiteNav";
import { MarketingFooter } from "../components/MarketingFooter";
import { FAQ } from "../components/FAQ";

export default function PricingPage(): React.ReactElement {
  const [interval, setInterval] = useState<"monthly" | "annual">("monthly");

  const monthly = { starter: 49, growth: 149, scale: 399 };
  const annual = { starter: 39, growth: 119, scale: 319 };
  const prices = interval === "annual" ? annual : monthly;
  const billingLabel =
    interval === "annual" ? "/mo billed annually" : "/mo";

  return (
    <div className="min-h-screen bg-saasy-dark">
      <SiteNav />

      <section className="border-b border-saasy-border py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h1
              className="font-[family-name:var(--font-poppins)]
                text-4xl font-bold text-white sm:text-5xl"
            >
              Simple, transparent pricing
            </h1>
            <p
              className="mt-4
                font-[family-name:var(--font-poppins)]
                text-lg text-saasy-muted"
            >
              14-day free trial on every plan. No credit card required.
              Switch or cancel anytime.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <PricingToggle interval={interval} onChange={setInterval} />
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
                "Smart guidance",
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

          <p
            className="mt-10 text-center
              font-[family-name:var(--font-poppins)] text-sm
              text-saasy-muted"
          >
            Need custom automations, integrations, or a dedicated
            engineering partner?{" "}
            <a
              href="https://saasysolutionsllc.com/consultation"
              className="font-medium text-saasy-orange
                transition-colors hover:text-white"
            >
              Talk to our consulting team &rarr;
            </a>
          </p>
        </div>
      </section>

      <section className="border-b border-saasy-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            className="mb-10 text-center
              font-[family-name:var(--font-poppins)]
              text-3xl font-bold text-white"
          >
            What's included
          </h2>
          <div
            className="grid gap-6 sm:grid-cols-2
              font-[family-name:var(--font-poppins)] text-saasy-muted"
          >
            <div>
              <h3 className="mb-2 font-semibold text-white">
                14-day free trial
              </h3>
              <p className="text-sm">
                Full access to every feature on your chosen plan. No
                credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                Cancel anytime
              </h3>
              <p className="text-sm">
                Month-to-month or annual billing — switch plans or
                cancel without penalty.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                Annual saves 20%
              </h3>
              <p className="text-sm">
                Pay yearly and save the equivalent of about two months
                versus monthly billing.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                US-based support
              </h3>
              <p className="text-sm">
                Email support on all plans. Priority Slack and phone
                support on Scale.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/#features"
              className="font-[family-name:var(--font-poppins)]
                text-sm text-saasy-pink hover:text-saasy-rose
                underline"
            >
              See full feature comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      <FAQ />

      <MarketingFooter />
    </div>
  );
}
