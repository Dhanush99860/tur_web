"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/types";
import { createInquiryHref } from "@/content/site/site-config";
import { ArrowUpRightIcon, CloseIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

const CATEGORY_ACCENT: Record<string, string> = {
  "American Standard":    "#4e8ae6",
  "European Ironmongery": "#b09a6a",
  "Glass Hardware":       "#64aa8c",
  "Access Control":       "#86a2e6",
  "Sealing Systems":      "#8fa8b6",
  "Automatic Operators":  "#c47c54",
};

function getAccent(product: Product) {
  return CATEGORY_ACCENT[product.category] ?? "#86a2e6";
}

// ── Inline inquiry form ──
type FormState = { name: string; email: string; message: string };

function InlineInquiryForm({ product }: { product: Product }) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [attempted, setAttempted] = useState(false);

  function validate(f: FormState) {
    return {
      name: f.name.trim().length < 2 ? "Please enter your name." : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()) ? "Enter a valid email." : "",
      message: f.message.trim().length < 10 ? "Please add a brief message." : "",
    };
  }

  const errors = useMemo(() => validate(form), [form]);

  function showError(field: keyof FormState) {
    return Boolean((touched[field] || attempted) && errors[field]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttempted(true);
    if (Object.values(errors).some(Boolean)) return;

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      "Message:",
      form.message.trim(),
      "",
      `Product: ${product.title}`,
      `Family: ${product.familyTitle}`,
    ].join("\n");

    window.location.href = `${createInquiryHref(product.inquirySubject)}&body=${encodeURIComponent(body)}`;
  }

  const inputBase =
    "w-full rounded-[0.7rem] border bg-[var(--panel)] px-3.5 py-2.5 text-[13px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, name: true }))}
            aria-invalid={showError("name")}
            className={cn(
              inputBase,
              showError("name")
                ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                : "border-[var(--border)] focus:border-[var(--accent)]",
            )}
          />
          {showError("name") ? (
            <p className="mt-1 text-[11px] text-[color:#c55b5b]">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            aria-invalid={showError("email")}
            className={cn(
              inputBase,
              showError("email")
                ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                : "border-[var(--border)] focus:border-[var(--accent)]",
            )}
          />
          {showError("email") ? (
            <p className="mt-1 text-[11px] text-[color:#c55b5b]">{errors.email}</p>
          ) : null}
        </div>
      </div>
      <div>
        <textarea
          placeholder="Brief project note or question…"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          onBlur={() => setTouched((p) => ({ ...p, message: true }))}
          aria-invalid={showError("message")}
          className={cn(
            inputBase,
            "resize-none",
            showError("message")
              ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
              : "border-[var(--border)] focus:border-[var(--accent)]",
          )}
        />
        {showError("message") ? (
          <p className="mt-1 text-[11px] text-[color:#c55b5b]">{errors.message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="inline-flex h-10 w-full items-center justify-center rounded-[0.75rem] border border-[var(--accent)] bg-[var(--accent)] text-[10.5px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
      >
        Send Inquiry
      </button>
      <p className="text-center text-[11px] text-[var(--muted-foreground)]">
        Your details are only used to respond to this inquiry.
      </p>
    </form>
  );
}

// ── Main modal ──
type ProductQuickViewProps = {
  product: Product;
  onClose: () => void;
};

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [activeImg, setActiveImg] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const accent = getAccent(product);

  const gallery = useMemo(
    () => (product.gallery.length > 0 ? product.gallery : [product.image]),
    [product],
  );

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(4,6,8,0.60)] backdrop-blur-sm sm:items-center sm:p-4"
    >
      <div className="relative flex max-h-[92dvh] w-full max-w-[62rem] flex-col overflow-hidden rounded-t-[1.5rem] bg-[var(--background)] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.38)] sm:max-h-[88dvh] sm:rounded-[1.5rem]">

        {/* ── Close button ── */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* ── Scrollable content ── */}
        <div className="overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left: gallery */}
            <div className="flex flex-col gap-3 border-b border-[var(--border)] p-5 lg:border-b-0 lg:border-r lg:p-6">
              {/* Main image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] bg-[var(--panel)]">
                <Image
                  key={gallery[activeImg]}
                  src={gallery[activeImg]}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 ? (
                <div className="flex gap-2">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImg(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "relative h-16 w-16 shrink-0 overflow-hidden rounded-[0.6rem] border-2 transition-[border-color] duration-150",
                        i === activeImg
                          ? "border-[var(--accent)]"
                          : "border-[var(--border)] hover:border-[var(--accent)]",
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Right: details + form */}
            <div className="flex flex-col gap-5 p-5 lg:p-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span
                  className="h-px w-4"
                  style={{ background: accent }}
                />
                <span
                  className="text-[9.5px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: accent }}
                >
                  {product.familyTitle}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="font-display text-[clamp(1.2rem,2vw,1.55rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
                  {product.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.76] text-[var(--muted-foreground)]">
                  {product.shortDescription}
                </p>
              </div>

              {/* Features */}
              {product.features.length > 0 ? (
                <ul className="flex flex-col gap-2">
                  {product.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: accent }}
                      />
                      <span className="text-[12.5px] leading-[1.7] text-[var(--foreground)]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Finish tags */}
              {product.finishOptions.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {product.finishOptions.map((finish) => (
                    <span
                      key={finish}
                      className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Divider */}
              <div className="border-t border-[var(--border)]" />

              {/* Inline inquiry form */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                  Request Information
                </p>
                <InlineInquiryForm product={product} />
              </div>

              {/* View Details CTA */}
              <SmartLink
                href={`/products/${product.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[0.8rem] border border-[var(--border)] py-3 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] transition-[background-color,border-color,color] duration-200 hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] hover:text-[var(--accent)]"
              >
                View Details
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
