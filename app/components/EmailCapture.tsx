"use client";

import { useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function EmailCapture(): React.ReactElement {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      setStatus("success");
    } catch {
      // MVP: treat as success since backend isn't wired yet
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <section className="border-t border-saasy-border py-20">
        <div
          className="mx-auto max-w-2xl rounded-2xl
            border border-saasy-border bg-saasy-card/60
            px-6 py-12 text-center sm:px-12"
        >
          <div
            className="mx-auto mb-4 flex h-14 w-14
              items-center justify-center rounded-full
              bg-saasy-teal/20"
          >
            <svg
              className="h-7 w-7 text-saasy-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3
            className="font-[family-name:var(--font-sora)]
              text-2xl font-bold text-white"
          >
            You&apos;re in!
          </h3>
          <p
            className="mt-2
              font-[family-name:var(--font-dm-sans)]
              text-saasy-muted"
          >
            Check your inbox for a welcome email. We&apos;ll
            send you weekly insights on retention, growth, and
            running smarter SaaS.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="border-t border-saasy-border py-20"
      aria-labelledby="newsletter-heading"
    >
      <div
        className="mx-auto max-w-2xl rounded-2xl
          border border-saasy-border bg-saasy-card/60
          px-6 py-12 text-center sm:px-12"
      >
        <h2
          id="newsletter-heading"
          className="font-[family-name:var(--font-sora)]
            text-2xl font-bold text-white sm:text-3xl"
        >
          Get product updates
        </h2>
        <p
          className="mx-auto mt-3 max-w-lg
            font-[family-name:var(--font-dm-sans)]
            text-saasy-muted"
        >
          Join 2,400+ founders getting weekly insights on
          retention, growth, and running smarter SaaS.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col
            gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
            }}
            aria-describedby={
              errorMsg ? "newsletter-error" : undefined
            }
            aria-invalid={errorMsg ? true : undefined}
            className="flex-1 rounded-lg border border-saasy-border
              bg-saasy-dark px-4 py-3
              font-[family-name:var(--font-dm-sans)] text-sm
              text-white placeholder-saasy-muted/60
              transition-colors
              focus:border-saasy-teal focus:outline-none
              focus:ring-1 focus:ring-saasy-teal"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-saasy-teal px-6 py-3
              font-[family-name:var(--font-sora)] text-sm
              font-semibold text-saasy-dark
              transition-colors hover:bg-saasy-teal-dim
              disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {errorMsg && (
          <p
            id="newsletter-error"
            role="alert"
            className="mt-2 text-sm text-red-400
              font-[family-name:var(--font-dm-sans)]"
          >
            {errorMsg}
          </p>
        )}

        <p
          className="mt-4 text-xs text-saasy-muted/70
            font-[family-name:var(--font-dm-sans)]"
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/** Compact version for use in the footer. */
export function FooterEmailCapture(): React.ReactElement {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      setStatus("success");
    } catch {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="col-span-2 md:col-span-4">
        <div
          className="flex items-center gap-3 rounded-lg
            border border-saasy-border bg-saasy-card/40
            px-4 py-3"
        >
          <svg
            className="h-5 w-5 shrink-0 text-saasy-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p
            className="text-sm text-saasy-muted
              font-[family-name:var(--font-dm-sans)]"
          >
            You&apos;re subscribed! Watch your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="col-span-2 md:col-span-4"
      aria-labelledby="footer-newsletter-heading"
    >
      <div
        className="rounded-lg border border-saasy-border
          bg-saasy-card/40 px-4 py-5 sm:px-6"
      >
        <h4
          id="footer-newsletter-heading"
          className="text-white
            font-[family-name:var(--font-sora)]
            text-sm font-semibold"
        >
          Stay in the loop
        </h4>
        <p
          className="mt-1 text-xs text-saasy-muted
            font-[family-name:var(--font-dm-sans)]"
        >
          Weekly insights on retention, growth, and SaaS.
          No spam.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-2 sm:flex-row"
          noValidate
        >
          <label
            htmlFor="footer-newsletter-email"
            className="sr-only"
          >
            Email address
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
            }}
            aria-describedby={
              errorMsg ? "footer-newsletter-error" : undefined
            }
            aria-invalid={errorMsg ? true : undefined}
            className="flex-1 rounded-md border border-saasy-border
              bg-saasy-dark px-3 py-2
              font-[family-name:var(--font-dm-sans)] text-sm
              text-white placeholder-saasy-muted/60
              transition-colors
              focus:border-saasy-teal focus:outline-none
              focus:ring-1 focus:ring-saasy-teal"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-saasy-teal px-4 py-2
              font-[family-name:var(--font-sora)] text-sm
              font-semibold text-saasy-dark
              transition-colors hover:bg-saasy-teal-dim
              disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {errorMsg && (
          <p
            id="footer-newsletter-error"
            role="alert"
            className="mt-1 text-xs text-red-400
              font-[family-name:var(--font-dm-sans)]"
          >
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  );
}
