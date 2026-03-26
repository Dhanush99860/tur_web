"use client";

import { useState } from "react";
import { createInquiryHref } from "@/content/site/site-config";

export function FooterNewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = newsletterEmail.trim();

    if (!trimmedEmail) {
      return;
    }

    const subject = "Newsletter Subscription";
    const body = `Please add this email to TUR newsletter updates:%0D%0A%0D%0A${encodeURIComponent(trimmedEmail)}`;
    window.location.href = `${createInquiryHref(subject)}&body=${body}`;
  }

  return (
    <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        value={newsletterEmail}
        onChange={(event) => setNewsletterEmail(event.target.value)}
        placeholder="Enter your email"
        autoComplete="email"
        className="h-12 min-w-0 flex-1 rounded-[16px] border border-[var(--border)] bg-[var(--card)] px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-[16px] border border-[var(--accent)] bg-[var(--accent)] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--foreground-inverse)] transition hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)]"
      >
        Subscribe
      </button>
    </form>
  );
}
