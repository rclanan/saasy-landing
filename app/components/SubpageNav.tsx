import Link from "next/link";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/customers", label: "Customers" },
  { href: "/changelog", label: "Changelog" },
];

/** Navigation header for subpages (blog, customers, changelog). */
export function SubpageNav() {
  return (
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
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden font-[family-name:var(--font-dm-sans)]
                text-sm text-saasy-muted transition-colors
                hover:text-white md:block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.hellosaasy.ai/signup"
            className="rounded-lg bg-saasy-teal px-4 py-2
              font-[family-name:var(--font-sora)] text-sm
              font-semibold text-saasy-dark transition-colors
              hover:bg-saasy-teal-dim"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </nav>
  );
}
