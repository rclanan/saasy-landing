export function WhoItsFor(): React.ReactElement {
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
