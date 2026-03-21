import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SaaSy — Your AI Business Co-Founder",
  description:
    "AI-native business operating system that guides " +
    "entrepreneurs from idea to thriving enterprise. " +
    "Formation, compliance, CRM, and AI guidance — all in one.",
  keywords: [
    "entrepreneur",
    "business formation",
    "compliance",
    "CRM",
    "AI guidance",
    "business operating system",
  ],
  openGraph: {
    title: "SaaSy — Your AI Business Co-Founder",
    description:
      "AI-native business operating system that guides " +
      "entrepreneurs from idea to thriving enterprise.",
    url: "https://hellosaasy.ai",
    siteName: "SaaSy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSy — Your AI Business Co-Founder",
    description:
      "AI-native business operating system that guides " +
      "entrepreneurs from idea to thriving enterprise.",
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SaaSy',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI-native business operating system that guides ' +
    'entrepreneurs from idea to thriving enterprise.',
  url: 'https://hellosaasy.ai',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '49',
    highPrice: '399',
    priceCurrency: 'USD',
  },
  creator: {
    '@type': 'Organization',
    name: 'SaaSy Solutions LLC',
    url: 'https://saasysolutionsllc.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${dmSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
