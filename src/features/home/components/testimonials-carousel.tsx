"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils/cn";

export type ResolvedTestimonialEntry = {
  quote: string;
  author: string;
  role: string;
  productSlug: string;
  product: Product;
};

type TestimonialsCarouselProps = {
  entries: ResolvedTestimonialEntry[];
};

const PLATFORM_STATS = [
  { value: "30+", label: "Years regional delivery" },
  { value: "6", label: "Product categories" },
  { value: "3", label: "Global regions" },
] as const;

export function TestimonialsCarousel({ entries }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!entries.length) return null;

  const active = entries[activeIndex] ?? entries[0];
  const total = entries.length;
  const href = active.product.href ?? `/products/${active.product.slug}`;

  function prev() { setActiveIndex((i) => (i - 1 + total) % total); }
  function next() { setActiveIndex((i) => (i + 1) % total); }

  return (
    <section className="home-section-shell py-14 sm:py-16">
      <PageContainer>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_82%,transparent)] bg-[var(--card)] shadow-[0_24px_56px_-40px_rgba(10,14,20,0.10)]">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: platform statement ── */}
            <div className="flex flex-col border-b border-[color-mix(in_srgb,var(--border)_70%,transparent)] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Platform Approach
                </p>
              </div>

              {/* Statement */}
              <blockquote
                key={active.quote}
                className="mt-7 flex-1 text-[clamp(1.35rem,2.1vw,1.9rem)] font-semibold leading-[1.38] tracking-[-0.032em] text-[var(--foreground)]"
              >
                {active.quote}
              </blockquote>

              {/* Platform stats */}
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] pt-8">
                {PLATFORM_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[1.75rem] font-bold leading-none tracking-[-0.04em] text-[var(--foreground)]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium uppercase leading-[1.4] tracking-[0.14em] text-[var(--muted-foreground)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation pills */}
              {total > 1 && (
                <div className="mt-6 flex items-center gap-2">
                  {entries.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show statement ${i + 1}`}
                      aria-pressed={i === activeIndex}
                      onClick={() => setActiveIndex(i)}
                      className="h-[3px] rounded-full border-none p-0 transition-all duration-400"
                      style={{
                        width: i === activeIndex ? "2rem" : "0.75rem",
                        background: i === activeIndex
                          ? "var(--accent)"
                          : "color-mix(in srgb, var(--border) 100%, transparent)",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ── Right: product showcase ── */}
            <div className="flex flex-col">
              <SmartLink
                href={href}
                className="group relative flex flex-1 flex-col overflow-hidden"
              >
                {/* Product image — full-bleed */}
                <div
                  key={`img-${activeIndex}`}
                  className="hero-card-reveal relative min-h-[18rem] flex-1 overflow-hidden bg-[color-mix(in_srgb,var(--panel)_60%,white)] sm:min-h-[22rem]"
                >
                  <Image
                    src={active.product.image}
                    alt={active.product.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  {/* Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/36 px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {active.product.familyTitle}
                  </span>

                  {/* Product title — bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
                    <h3 className="text-[1.2rem] font-semibold leading-[1.08] tracking-[-0.036em] text-white sm:text-[1.3rem]">
                      {active.product.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                      {active.product.category}
                    </p>
                  </div>
                </div>

                {/* CTA bar */}
                <div className="flex items-center justify-between border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] px-6 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    View Product
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_50%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </SmartLink>

              {/* Prev / Next controls */}
              {total > 1 && (
                <div className="flex items-center justify-between border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] px-6 py-4">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[var(--muted-foreground)]">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <span className="mx-1.5 opacity-40">/</span>
                    {String(total).padStart(2, "0")}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Previous statement"
                      onClick={prev}
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200",
                        "border-[color-mix(in_srgb,var(--border)_90%,transparent)] text-[var(--foreground)]",
                        "hover:border-[var(--accent)] hover:text-[var(--accent)]",
                      )}
                    >
                      <ArrowRightIcon className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next statement"
                      onClick={next}
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200",
                        "border-[color-mix(in_srgb,var(--border)_90%,transparent)] text-[var(--foreground)]",
                        "hover:border-[var(--accent)] hover:text-[var(--accent)]",
                      )}
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
