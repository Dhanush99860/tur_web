"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/shared/icons";

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

export function TestimonialsCarousel({ entries }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!entries.length) return null;

  const active = entries[activeIndex] ?? entries[0];
  const total = entries.length;
  const canNav = total > 1;
  const initials = active.author
    .trim()
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function prev() {
    setActiveIndex((i) => (i - 1 + total) % total);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % total);
  }

  return (
    <section className="home-section-shell py-16 sm:py-20">
      <PageContainer>
        <div className="grid overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--background)] lg:grid-cols-2">
          <div className="flex flex-col justify-between border-b border-[var(--border)] p-9 sm:p-12 lg:border-b-0 lg:border-r">
            <div>
              <div className="mb-7 flex items-center gap-2.5">
                <span className="h-px w-5 bg-[var(--border)]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  Project Support
                </p>
              </div>

              <p
                aria-hidden="true"
                className="mb-2 select-none font-display text-[5rem] leading-[0.7] text-[var(--border)]"
              >
                &ldquo;
              </p>

              <blockquote
                key={active.quote}
                className="font-display text-[clamp(1.55rem,2.4vw,2.35rem)] font-light leading-[1.35] tracking-[-0.02em] text-[var(--foreground)]"
              >
                {active.quote}
              </blockquote>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[13px] font-medium text-[var(--foreground)]">
                  {initials}
                </span>
                <div>
                  <p className="text-[14px] font-medium leading-snug tracking-[-0.01em] text-[var(--foreground)]">
                    {active.author}
                  </p>
                  <p className="mt-0.5 text-[12px] font-light text-[var(--muted-foreground)]">
                    {active.role}
                  </p>
                </div>
              </div>

              {canNav && (
                <div className="mt-6 flex items-center gap-2">
                  {entries.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show proof statement ${i + 1}`}
                      aria-pressed={i === activeIndex}
                      onClick={() => setActiveIndex(i)}
                      className={[
                        "h-[3px] rounded-full border-none p-0 transition-all duration-300",
                        i === activeIndex
                          ? "w-7 bg-[var(--foreground)]"
                          : "w-2 bg-[var(--border)] hover:bg-[var(--muted-foreground)]",
                      ].join(" ")}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <SmartLink
              href={`/products/${active.product.slug}`}
              className="group flex min-h-[320px] flex-1 flex-col bg-[var(--panel)] transition-colors duration-200 hover:bg-[var(--background)] sm:min-h-[360px]"
            >
              <div className="relative aspect-[2.2/1] w-full overflow-hidden border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_90%,var(--panel))] sm:aspect-[3/1]">
                <Image
                  src={active.product.image}
                  alt={active.product.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 34vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                    {active.product.familyTitle}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.45rem,2vw,2.05rem)] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--foreground)]">
                    {active.product.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-light text-[var(--muted-foreground)]">
                    {active.product.category}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <span className="text-[10px] font-light uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                    Detailed Product View
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    View product
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </SmartLink>

            {canNav && (
              <div className="flex items-center justify-between border-t border-[var(--border)] px-7 py-5">
                <p className="text-[11px] font-light uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  {activeIndex + 1} of {total}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous proof statement"
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[color-mix(in_srgb,var(--border)_140%,transparent)] hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
                  >
                    <ArrowRightIcon className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next proof statement"
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[color-mix(in_srgb,var(--border)_140%,transparent)] hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
