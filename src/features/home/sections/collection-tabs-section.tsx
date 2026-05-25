"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import type { CollectionTab } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

type CollectionTabsSectionProps = {
  tabs: CollectionTab[];
};

export function CollectionTabsSection({ tabs }: CollectionTabsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex] ?? tabs[0];

  if (!activeTab) return null;

  return (
    <section className="home-section-shell">
      <PageContainer>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_82%,transparent)] bg-[var(--card)] shadow-[0_24px_58px_-40px_rgba(10,14,20,0.10)]">
          <div className="grid xl:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]">

            {/* ── Left: heading + tab list ── */}
            <div className="flex flex-col border-b border-[color-mix(in_srgb,var(--border)_70%,transparent)] xl:border-b-0 xl:border-r">

              {/* Header */}
              <div className="px-7 pb-6 pt-8 sm:px-8 sm:pt-9 xl:px-10 xl:pt-10">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Fast Routes
                </p>
                <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold leading-[1.06] tracking-[-0.046em] text-[var(--foreground)]">
                  Explore core categories.
                </h2>
                <p className="mt-3 max-w-[30ch] text-[13.5px] leading-[1.8] text-[var(--muted-foreground)]">
                  Six routes across door hardware, automatic operators, glass, ironmongery, sealing and master key systems.
                </p>
              </div>

              {/* Divider */}
              <div className="mx-7 h-px bg-[color-mix(in_srgb,var(--border)_70%,transparent)] sm:mx-8 xl:mx-10" />

              {/* Tab list */}
              <nav className="flex flex-1 flex-col py-3 sm:py-4">
                {tabs.map((tab, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SmartLink
                      key={tab.label}
                      href={tab.href}
                      onMouseEnter={() => startTransition(() => setActiveIndex(index))}
                      onFocus={() => startTransition(() => setActiveIndex(index))}
                      className={cn(
                        "group relative flex items-center gap-4 px-7 py-3.5 transition-colors duration-200 sm:px-8 xl:px-10",
                        isActive
                          ? "bg-[color-mix(in_srgb,var(--accent)_5%,transparent)]"
                          : "hover:bg-[color-mix(in_srgb,var(--border)_30%,transparent)]",
                      )}
                    >
                      {/* Active left accent bar */}
                      <span
                        className={cn(
                          "absolute inset-y-0 left-0 w-[3px] rounded-r-full transition-all duration-300",
                          isActive ? "bg-[var(--accent)] opacity-100" : "opacity-0",
                        )}
                      />

                      {/* Number */}
                      <span
                        className={cn(
                          "shrink-0 font-mono text-[10px] font-bold tracking-[0.22em] transition-colors duration-200",
                          isActive ? "text-[var(--accent)]" : "text-[var(--muted-foreground)] opacity-50 group-hover:opacity-80",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Thin divider */}
                      <span className="h-3.5 w-px shrink-0 bg-[color-mix(in_srgb,var(--border)_80%,transparent)]" />

                      {/* Label */}
                      <span
                        className={cn(
                          "flex-1 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 sm:text-[14.5px]",
                          isActive ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]",
                        )}
                      >
                        {tab.label}
                      </span>

                      {/* Arrow */}
                      <span
                        className={cn(
                          "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                          isActive
                            ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                            : "border-[color-mix(in_srgb,var(--border)_90%,transparent)] text-[var(--muted-foreground)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]",
                        )}
                      >
                        <ArrowUpRightIcon className="h-3 w-3" />
                      </span>
                    </SmartLink>
                  );
                })}
              </nav>
            </div>

            {/* ── Right: full-bleed image ── */}
            <SmartLink
              href={activeTab.href}
              className="group relative block min-h-[22rem] overflow-hidden sm:min-h-[26rem] xl:min-h-0"
            >
              {/* Image — keyed to animate on tab change */}
              <div key={`img-${activeIndex}`} className="hero-card-reveal absolute inset-0">
                <Image
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  fill
                  sizes="(max-width: 1279px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

              {/* Top row: label + CTA button */}
              <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                <span className="rounded-full border border-white/25 bg-black/36 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  {activeTab.label}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[var(--accent)] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Bottom: description overlay */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-12 sm:px-7 sm:pb-7">
                <p
                  key={`desc-${activeIndex}`}
                  className="hero-card-reveal max-w-[38ch] text-[13px] leading-[1.75] text-white/80"
                >
                  {activeTab.description}
                </p>
              </div>
            </SmartLink>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
