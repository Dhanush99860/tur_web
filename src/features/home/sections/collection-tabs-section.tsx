"use client";

import { startTransition, useState } from "react";
import type { CollectionTab } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

type CollectionTabsSectionProps = {
  tabs: CollectionTab[];
};

export function CollectionTabsSection({ tabs }: CollectionTabsSectionProps) {
  const visibleTabs = tabs.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = visibleTabs[activeIndex] ?? visibleTabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="home-section-shell">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[1.05rem] border border-[color-mix(in_srgb,var(--border)_82%,white)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_74%,white),color-mix(in_srgb,var(--panel)_94%,white))] shadow-[0_24px_58px_-44px_rgba(18,20,20,0.16)]">
          <div className="absolute inset-y-0 left-0 w-[38%] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--warm)_60%,transparent),transparent_72%)] opacity-80" />
          <div className="absolute right-[-4%] top-[-10%] h-52 w-52 rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] blur-3xl" />

          <div className="relative grid xl:grid-cols-[minmax(18rem,0.76fr)_minmax(0,1.24fr)]">
            <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9 xl:px-10 xl:py-10">
              <div className="max-w-[26rem]">
                <HomeSectionHeading
                  eyebrow="Fast Routes"
                  title={<>Explore core categories.</>}
                  className="max-w-[26rem]"
                  titleClassName="max-w-[13ch]"
                />
                <p className="mt-4 max-w-[80ch] text-[15px] leading-7 text-[color-mix(in_srgb,var(--foreground)_84%,transparent)]">
                  Priority routes into automatic operators, access control and glass hardware for faster navigation.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                {visibleTabs.map((tab, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <SmartLink
                      key={tab.label}
                      href={tab.href}
                      onMouseEnter={() => {
                        startTransition(() => {
                          setActiveIndex(index);
                        });
                      }}
                      onFocus={() => {
                        startTransition(() => {
                          setActiveIndex(index);
                        });
                      }}
                      className={cn(
                        "group flex items-start justify-between gap-4 rounded-[0.9rem] border px-4 py-3.5 text-[var(--foreground)] transition duration-300 sm:px-4.5 sm:py-4",
                        isActive
                          ? "border-[color-mix(in_srgb,var(--accent)_20%,white)] bg-white shadow-[0_18px_42px_-34px_rgba(17,20,20,0.18)]"
                          : "border-[color-mix(in_srgb,var(--border)_84%,white)] bg-white/58 hover:border-[color-mix(in_srgb,var(--accent)_14%,white)] hover:bg-white/80",
                      )}
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold tracking-[0.14em] transition duration-300",
                            isActive
                              ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,white)] text-[var(--accent)]"
                              : "border-[color-mix(in_srgb,var(--border)_84%,white)] text-[var(--muted-foreground)]",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0">
                          <h3
                            className={cn(
                              "text-[1.08rem] font-medium leading-[1.05] tracking-[-0.04em] transition duration-300 sm:text-[1.16rem]",
                              isActive
                                ? "text-[var(--foreground)]"
                                : "text-[var(--foreground)] group-hover:text-[var(--accent)]",
                            )}
                          >
                            {tab.label}
                          </h3>
                          <p className="mt-2 max-w-[29ch] text-[13px] leading-5.5 text-[var(--muted-foreground)] sm:text-sm">
                            {tab.description}
                          </p>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300",
                          isActive
                            ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                            : "border-[color-mix(in_srgb,var(--accent)_64%,white)] bg-white text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:bg-[color-mix(in_srgb,var(--accent)_8%,white)]",
                        )}
                      >
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </span>
                    </SmartLink>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[color-mix(in_srgb,var(--border)_84%,white)] xl:border-l xl:border-t-0">
              <SmartLink href={activeTab.href} className="group block h-full p-4 sm:p-4 xl:p-4">
                <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[0.95rem] border border-[color-mix(in_srgb,var(--border)_80%,white)] bg-[color-mix(in_srgb,var(--card)_92%,white)] p-2 shadow-[0_24px_50px_-40px_rgba(17,20,20,0.2)] sm:min-h-[20rem] xl:min-h-[100%]">
                  <CoverImage
                    key={`${activeTab.label}-${activeIndex}`}
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    sizes="(max-width: 1279px) 100vw, 50vw"
                    className="hero-card-reveal h-full min-h-[17rem] rounded-[0.8rem] sm:min-h-[19rem] xl:min-h-[24rem]"
                    imageClassName="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    overlayClassName="bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%,rgba(10,12,12,0.26)_100%)]"
                  />
                  <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                    <p className="rounded-full border border-white/35 bg-[rgba(255,255,255,0.14)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      {activeTab.label}
                    </p>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-[rgba(255,255,255,0.92)] text-[var(--accent)] shadow-[0_12px_24px_-18px_rgba(0,0,0,0.28)] transition duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </SmartLink>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
