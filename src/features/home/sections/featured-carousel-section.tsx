"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/shared/icons";
import { buttonClassName } from "@/components/ui/button";

type FeaturedCarouselSectionProps = {
  products: Product[];
};

const CAROUSEL_GAP = 12;

function getSectionLabel(product: Product) {
  return product.section === "door-hardware" ? "Door Hardware" : "Automatic Operators";
}

function getCardsPerView(width: number) {
  if (width >= 1440) {
    return 4;
  }

  if (width >= 1024) {
    return 3;
  }

  if (width >= 640) {
    return 2;
  }

  return 1;
}

function FeaturedCarouselProductCard({ product }: { product: Product }) {
  return (
    <SmartLink
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[0.85rem] border border-[rgba(38,38,38,0.04)] bg-[color-mix(in_srgb,var(--panel)_56%,white)] p-4 sm:p-5"
    >
      {product.badge ? (
        <span className="absolute left-4 top-4 z-20 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,white)] bg-[color-mix(in_srgb,var(--accent)_10%,white)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
          {product.badge}
        </span>
      ) : null}

      <div className="relative flex min-h-[18rem] items-start justify-center overflow-visible rounded-[0.55rem] bg-transparent pt-4 sm:min-h-[19rem]">
        <div className="pointer-events-none absolute inset-x-[14%] bottom-6 h-8 rounded-full bg-[rgba(18,20,20,0.16)] blur-2xl transition-opacity duration-300 group-hover:opacity-90" />

        <div className="relative w-[92%] max-w-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
          <div className="relative bg-white p-2 shadow-[0_24px_34px_-24px_rgba(0,0,0,0.24)]">
            <div className="relative aspect-[0.9/1] overflow-hidden bg-[color-mix(in_srgb,var(--surface)_70%,white)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%,rgba(12,15,20,0.06)_100%)]" />
              <div className="absolute inset-y-0 left-[-34%] z-10 w-[60%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[54%] group-hover:opacity-100" />
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 639px) 80vw, (max-width: 1439px) 33vw, 23vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.08]"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-0.7rem] z-20 translate-y-2 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-y-0 group-hover:opacity-100">
          <div className="border border-[color-mix(in_srgb,var(--border)_88%,white)] bg-white px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] shadow-[0_12px_24px_-18px_rgba(0,0,0,0.18)]">
            Explore Product
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          {product.familyTitle}
        </p>

        <h3 className="mt-4 max-w-[30ch] text-[1.28rem] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-[1.34rem]">
          {product.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="min-w-0 flex-1 text-[0.96rem] leading-6 text-[var(--muted-foreground)]">
            {getSectionLabel(product)}
          </p>

          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_64%,white)] bg-transparent text-[var(--accent)] transition duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRightIcon className="h-4.5 w-4.5" />
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

    if (!viewport) {
      return;
    }

    const measure = () => {
      const nextWidth = viewport.clientWidth;
      setViewportWidth(nextWidth);
      setCardsPerView(getCardsPerView(nextWidth));
    };

    const queueMeasure = () => {
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current);
      }

      resizeFrameRef.current = window.requestAnimationFrame(() => {
        resizeFrameRef.current = null;
        measure();
      });
    };

    queueMeasure();
    const resizeObserver = new ResizeObserver(queueMeasure);

    resizeObserver.observe(viewport);

    return () => {
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeIndex <= maxIndex) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setActiveIndex(maxIndex);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [activeIndex, maxIndex]);

  function moveCarousel(direction: "prev" | "next") {
    setActiveIndex((current) => {
      const baseIndex = Math.min(current, maxIndex);
      return direction === "next"
        ? Math.min(baseIndex + 1, maxIndex)
        : Math.max(baseIndex - 1, 0);
    });
  }

  return (
    <section className="home-section-shell">
      <PageContainer>
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${CAROUSEL_GAP}px`,
              transform: `translate3d(-${translateX}px, 0, 0)`,
              transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <article
              className="flex min-h-[31.5rem] shrink-0 flex-col rounded-[0.85rem] border border-[rgba(38,38,38,0.04)] bg-[color-mix(in_srgb,var(--panel)_56%,white)] px-6 py-7 sm:px-7 xl:px-8 xl:py-8"
              style={{ width: itemWidth || undefined }}
            >
              <HomeSectionHeading
                eyebrow="Core Ranges"
                title={<>Explore core entry systems.</>}
                className="max-w-[18rem]"
                titleClassName="max-w-[7ch]"
              />

              <div className="mt-6 max-w-[24ch]">
                <p className="text-[15px] leading-8 text-[color-mix(in_srgb,var(--foreground)_84%,transparent)] sm:text-[16px]">
                  Move quickly from door function to product family across hardware, access, glass and automation.
                </p>
                <SmartLink
                  href="/door-hardware"
                  className={buttonClassName(
                    "primary",
                    "mt-6 min-w-[13.25rem] rounded-[0.7rem] px-7 text-white",
                  )}
                >
                  Browse Categories
                </SmartLink>
              </div>
            </article>

            {products.map((product) => (
              <div
                key={product.slug}
                className="shrink-0"
                style={{ width: itemWidth || undefined }}
              >
                <FeaturedCarouselProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-5 sm:gap-7">
          <div className="relative h-px flex-1 bg-[color-mix(in_srgb,var(--border)_90%,transparent)]">
            <span
              aria-hidden="true"
              className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-[var(--accent)] transition-[left,width] duration-500"
              style={{
                left: `${progressOffset}%`,
                width: `${visiblePercent}%`,
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Scroll featured products backward"
              onClick={() => moveCarousel("prev")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-[var(--accent)] transition duration-300 hover:border-[var(--border)] hover:bg-white"
            >
              <ArrowRightIcon className="h-8 w-8 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Scroll featured products forward"
              onClick={() => moveCarousel("next")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-[var(--accent)] transition duration-300 hover:border-[var(--border)] hover:bg-white"
            >
              <ArrowRightIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
