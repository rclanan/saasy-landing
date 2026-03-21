import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integrations | SaaSy',
  description:
    'Connect SaaSy with the tools you already use. Stripe, HubSpot, Intercom, and more.',
};

interface Integration {
  name: string;
  category: string;
  description: string;
  status: 'Available' | 'Coming Soon';
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    category: 'Payment processing',
    description:
      'Automatically sync invoices, subscriptions, and revenue data. Track MRR and payment health in real time.',
    status: 'Available',
  },
  {
    name: 'HubSpot',
    category: 'CRM & Marketing',
    description:
      'Import contacts, track deals, and sync customer interactions. Keep your CRM in sync without manual entry.',
    status: 'Coming Soon',
  },
  {
    name: 'Intercom',
    category: 'Customer Messaging',
    description:
      'Pull in conversation history and support metrics. Understand customer engagement across channels.',
    status: 'Coming Soon',
  },
  {
    name: 'Salesforce',
    category: 'Enterprise CRM',
    description:
      'Full bidirectional sync with Salesforce objects. Contacts, opportunities, and custom fields.',
    status: 'Coming Soon',
  },
  {
    name: 'Jira',
    category: 'Project Management',
    description:
      'Track project progress and team velocity. Link business milestones to development work.',
    status: 'Coming Soon',
  },
  {
    name: 'Slack',
    category: 'Team Communication',
    description:
      'Get real-time alerts and daily briefings delivered to your Slack channels.',
    status: 'Available',
  },
];

export default function IntegrationsPage() {
  return (
    <div className="bg-saasy-dark min-h-screen">
      {/* Nav */}
      <nav className="border-b border-saasy-border/50 bg-saasy-dark/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-sora)] text-xl font-bold"
          >
            <span className="gradient-text">SaaSy</span>
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-dm-sans)] text-sm text-saasy-teal hover:text-saasy-teal-dim underline"
          >
            &larr; Back to home
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <header className="mb-14 text-center">
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white">
            Connect your favorite tools
          </h1>
          <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-saasy-muted text-lg max-w-2xl mx-auto">
            SaaSy integrates with the platforms you already use to give you a
            complete view of your business.
          </p>
        </header>

        {/* Integration cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-2xl border border-saasy-border bg-saasy-card/50 p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                    {integration.name}
                  </h2>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-saasy-muted mt-0.5">
                    {integration.category}
                  </p>
                </div>
                {integration.status === 'Available' ? (
                  <span className="shrink-0 rounded-full bg-saasy-teal/10 border border-saasy-teal/20 px-3 py-1 text-xs font-medium text-saasy-teal">
                    Available
                  </span>
                ) : (
                  <span className="shrink-0 rounded-full bg-saasy-muted/10 border border-saasy-border px-3 py-1 text-xs font-medium text-saasy-muted">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-saasy-muted leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 rounded-2xl border border-saasy-border bg-saasy-card/50 p-10 text-center">
          <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white">
            Need a custom integration?
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-saasy-muted max-w-lg mx-auto">
            Our API (Growth plan and above) lets you connect any tool.
          </p>
          <a
            href="https://app.hellosaasy.ai/signup"
            className="mt-6 inline-block rounded-xl bg-saasy-teal px-8 py-3 font-[family-name:var(--font-sora)] text-sm font-semibold text-saasy-dark hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-saasy-border pt-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-saasy-muted">
            &copy; 2026 SaaSy Solutions LLC. All rights reserved.
          </p>
          <div className="mt-3 flex gap-6">
            <Link
              href="/terms"
              className="font-[family-name:var(--font-dm-sans)] text-sm text-saasy-teal hover:text-saasy-teal-dim underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="font-[family-name:var(--font-dm-sans)] text-sm text-saasy-teal hover:text-saasy-teal-dim underline"
            >
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
