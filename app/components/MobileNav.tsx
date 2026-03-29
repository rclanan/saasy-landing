"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const close = (): void => setOpen(false);

  return (
    <>
      {/* Hamburger button — visible only below md */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex h-9 w-9 items-center justify-center
          rounded-lg border border-saasy-border text-saasy-muted
          transition-colors hover:border-saasy-teal/40 hover:text-white"
      >
        {open ? (
          /* X icon */
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
            md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Slide-in drawer from right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72
          border-l border-saasy-border bg-saasy-darker
          shadow-2xl transition-transform duration-300 ease-in-out
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between
            border-b border-saasy-border px-6 py-4"
        >
          <span
            className="font-[family-name:var(--font-sora)]
              text-lg font-bold gradient-text"
          >
            SaaSy
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center
              rounded-lg text-saasy-muted transition-colors
              hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col px-6 py-6 gap-1">
          <Link
            href="#features"
            onClick={close}
            className="font-[family-name:var(--font-dm-sans)]
              rounded-lg px-3 py-3 text-base text-saasy-muted
              transition-colors hover:bg-saasy-border/30 hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={close}
            className="font-[family-name:var(--font-dm-sans)]
              rounded-lg px-3 py-3 text-base text-saasy-muted
              transition-colors hover:bg-saasy-border/30 hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        {/* Drawer CTAs */}
        <div
          className="flex flex-col gap-3 border-t border-saasy-border
            px-6 py-6"
        >
          <Link
            href="https://app.hellosaasy.ai/auth/register"
            onClick={close}
            className="w-full rounded-lg border border-saasy-border
              px-4 py-3 text-center
              font-[family-name:var(--font-sora)] text-sm font-semibold
              text-saasy-muted transition-colors
              hover:border-saasy-teal/40 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="https://app.hellosaasy.ai/auth/register"
            onClick={close}
            className="w-full rounded-lg bg-saasy-teal px-4 py-3
              text-center font-[family-name:var(--font-sora)]
              text-sm font-semibold text-saasy-dark
              transition-colors hover:bg-saasy-teal-dim"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </>
  );
}
