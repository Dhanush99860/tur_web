"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/shared/icons";

type FeaturedCarouselSectionProps = {
  products: Product[];
};

const CAROUSEL_GAP = 14;

const CATEGORY_TAGS = [
  "Door Hardware",
  "Automatic Operators",
  "Access Control",
  "Glass Hardware",
  "Sealing Systems",
];

function getSectionLabel(product: Product) {
  return product.section === "door-hardware" ? "Door Hardware" : "Automatic Operators";
}

function getCardsPerView(width: number) {
  if (width >= 1440) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function CarouselProductCard({ product }: { product: Product }) {
  const href = product.href ?? `/products/${product.slug}`;

  return (
    <SmartLink
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--border)_100%,transparent)] hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 639px) 85vw, (max-width: 1023px) 48vw, (max-width: 1439px) 34vw, 24vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
        />
        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.52)_100%)]" />

        {/* Category badge — top left */}
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/38 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {product.familyTitle}
        </span>

        {/* Badge — top right */}
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_15%,white)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            {product.badge}
          </span>
        )}

        {/* Hover: View Details pill */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/88 px-4 py-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-800">View Details</span>
            <ArrowUpRightIcon className="h-3 w-3 text-slate-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-[1.05rem] font-medium leading-[1.12] tracking-[-0.036em] text-[var(--foreground)] sm:text-[1.1rem]">
          {product.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[11.5px] font-medium text-[var(--muted-foreground)]">
            {getSectionLabel(product)}
          </span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_50%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRightIcon className="h-3 w-3" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

export function FeaturedCarouselSection({ products }: FeaturedCarouselSectionProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const resizeFrameRef = useRef<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = products.length + 1;
  const maxIndex = Math.max(0, totalItems - cardsPerView);
  const safeActiveIndex = Math.min(activeIndex, maxIndex);
  const itemWidth =
    viewportWidth > 0
      ? (viewportWidth - CAROUSEL_GAP * (cardsPerView - 1)) / cardsPerView
      : 0;
  const translateX = safeActiveIndex * (itemWidth + CAROUSEL_GAP);
  const visiblePercent = totalItems ? Math.min(100, (cardsPerView / totalItems) * 100) : 100;
  const progressOffset =
    maxIndex > 0 ? (safeActiveIndex / maxIndex) * (100 - visiblePercent) : 0;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const nextWidth = viewport.clientWidth;
      setViewportWidth(nextWidth);
      setCardsPerView(getCardsPerView(nextWidth));
    };

    const queueMeasure = () => {
      if (resizeFrameRef.current !== null) window.cancelAnimationFrame(resizeFrameRef.current);
      resizeFrameRef.current = window.requestAnimationFrame(() => {
        resizeFrameRef.current = null;
        measure();
      });
    };

    queueMeasure();
    const ro = new ResizeObserver(queueMeasure);
    ro.observe(viewport);

    return () => {
      if (resizeFrameRef.current !== null) window.cancelAnimationFrame(resizeFrameRef.current);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeIndex <= maxIndex) return;
    const id = window.requestAnimationFrame(() => setActiveIndex(maxIndex));
    return () => window.cancelAnimationFrame(id);
  }, [activeIndex, maxIndex]);

  function move(direction: "prev" | "next") {
    setActiveIndex((cur) => {
      const base = Math.min(cur, maxIndex);
      return direction === "next" ? Math.min(base + 1, maxIndex) : Math.max(base - 1, 0);
    });
  }

  return (
    <section className="home-section-shell">
      <PageContainer>
        {/* Carousel viewport */}
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${CAROUSEL_GAP}px`,
              transform: `translate3d(-${translateX}px, 0, 0)`,
              transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Intro card — dark panel, pinned left */}
            <article
              className="flex shrink-0 flex-col overflow-hidden rounded-2xl bg-[var(--foreground)] px-7 py-8 sm:px-8 sm:py-9"
              style={{ width: itemWidth || undefined }}
            >
              {/* Eyebrow */}
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-white/40">
                Core Ranges
              </p>

              {/* Title */}
              <h2 className="mt-5 text-[clamp(1.7rem,2.6vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.048em] text-white">
                Explore core entry systems.
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[20ch] text-[13.5px] leading-[1.8] text-white/55">
                Hardware, access, glass and automation — all categories in one scroll.
              </p>

              {/* Category tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {CATEGORY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <SmartLink
                href="/door-hardware"
                className="mt-auto inline-flex items-center gap-2.5 pt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 transition-colors duration-200 hover:text-white"
              >
                Browse All Categories
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </SmartLink>
            </article>

            {/* Product cards */}
            {products.map((product) => (
              <div key={product.slug} className="shrink-0" style={{ width: itemWidth || undefined }}>
                <CarouselProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls row */}
        <div className="mt-5 flex items-center gap-5 sm:gap-6">
          {/* Progress track */}
          <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--border)_80%,transparent)]">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 rounded-full bg-[var(--accent)] transition-[left,width] duration-500"
              style={{ left: `${progressOffset}%`, width: `${visiblePercent}%` }}
            />
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => move("prev")}
              disabled={safeActiveIndex === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--border)_90%,transparent)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => move("next")}
              disabled={safeActiveIndex === maxIndex}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--border)_90%,transparent)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
