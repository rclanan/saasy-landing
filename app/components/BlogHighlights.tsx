const BLOG_POSTS = [
  {
    title: "The Complete Guide to LLC Formation in 2026",
    description:
      "Everything you need to know about registering your business entity, from state selection to EIN filing.",
    href: "https://saasysolutionsllc.com/blog/complete-guide-llc-formation-2026",
  },
  {
    title: "5 Compliance Mistakes That Cost New Businesses Thousands",
    description:
      "The permits, licenses, and filings most first-time founders miss — and how to stay ahead.",
    href: "https://saasysolutionsllc.com/blog/compliance-mistakes-new-businesses",
  },
  {
    title: "How AI Is Changing the Way Entrepreneurs Launch Businesses",
    description:
      "From automated compliance to intelligent CRM, the tools reshaping business formation.",
    href: "https://saasysolutionsllc.com/blog/ai-changing-how-entrepreneurs-launch",
  },
];

export function BlogHighlights(): React.ReactElement {
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
