"use client";

import { useState } from "react";
import { createInquiryHref } from "@/content/site/site-config";

type FooterNewsletterFormProps = {
  inverted?: boolean;
};

export function FooterNewsletterForm({ inverted }: FooterNewsletterFormProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const body = `Please add this email to TUR newsletter updates:%0D%0A%0D%0A${encodeURIComponent(trimmed)}`;
    window.location.href = `${createInquiryHref("Newsletter Subscription")}&body=${body}`;
  }

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        autoComplete="email"
        className={
          inverted
            ? "h-12 min-w-0 flex-1 rounded-xl border border-white/14 bg-white/6 px-4 text-[13.5px] text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none"
            : "h-12 min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-[13.5px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none"
        }
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}
