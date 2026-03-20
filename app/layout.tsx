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
  title: "SaaSy — Customer Health Scoring & Churn Prediction",
  description:
    "AI-powered customer health scoring and churn prediction " +
    "for SaaS teams. Know which customers need attention " +
    "before they leave.",
  keywords: [
    "customer health scoring",
    "churn prediction",
    "SaaS",
    "customer success",
    "retention",
    "AI",
  ],
  openGraph: {
    title: "SaaSy — Stop Churn Before It Starts",
    description:
      "AI-powered customer health scoring and churn " +
      "prediction for SaaS teams.",
    url: "https://hellosaasy.ai",
    siteName: "SaaSy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSy — Stop Churn Before It Starts",
    description:
      "AI-powered customer health scoring and churn " +
      "prediction for SaaS teams.",
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
        {children}
      </body>
    </html>
  );
}
