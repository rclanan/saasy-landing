export function SocialProof(): React.ReactElement {
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
                className="font-[family-name:var(--font-poppins)]
                  text-3xl font-bold text-white"
              >
                {metric.value}
              </div>
              <div
                className="mt-1 font-[family-name:var(--font-poppins)]
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
                className="font-[family-name:var(--font-poppins)]
                  leading-relaxed text-saasy-muted"
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <div
                  className="font-[family-name:var(--font-poppins)]
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
