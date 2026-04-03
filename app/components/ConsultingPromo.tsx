import Link from "next/link";

/**
 * Cross-promotion banner for SaaSy Solutions consulting services.
 * Placed between FAQ and the final CTA on the landing page.
 */
export function ConsultingPromo() {
  return (
    <section className="border-t border-saasy-border bg-saasy-dark/50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div
          className="relative overflow-hidden rounded-2xl
            border border-saasy-border bg-gradient-to-br
            from-[#1A2435] to-[#0f1520] p-8 sm:p-12"
        >
          {/* Decorative accent */}
          <div
            className="absolute -right-16 -top-16 h-64 w-64
              rounded-full bg-saasy-orange/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p
                className="font-[family-name:var(--font-poppins)]
                  text-sm font-semibold uppercase tracking-wider
                  text-saasy-orange"
              >
                SaaSy Solutions &middot; 25+ Years of Experience
              </p>
              <h2
                className="mt-2 font-[family-name:var(--font-poppins)]
                  text-2xl font-bold text-white sm:text-3xl"
              >
                Need systems built for you?
              </h2>
              <p
                className="mt-3 font-[family-name:var(--font-poppins)]
                  text-base text-saasy-muted sm:text-lg"
              >
                Our senior engineering team designs, builds, and manages
                custom automations, integrations, and workflow systems.
                One partner replaces multiple tools, contractors, and
                inefficiencies &mdash; live in weeks, not months.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="https://saasysolutionsllc.com/consultation"
                className="inline-flex items-center justify-center
                  rounded-full bg-saasy-orange px-6 py-3
                  font-[family-name:var(--font-poppins)] text-sm
                  font-semibold uppercase tracking-wider text-white
                  transition-colors hover:bg-[#c45f2e]"
              >
                Book a consultation
              </Link>
              <Link
                href="https://saasysolutionsllc.com/#services"
                className="inline-flex items-center justify-center
                  rounded-full border border-saasy-orange/40 px-6 py-3
                  font-[family-name:var(--font-poppins)] text-sm
                  font-semibold uppercase tracking-wider text-saasy-orange
                  transition-colors hover:bg-saasy-orange/10"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
