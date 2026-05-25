"use client";

import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import { headerSearchPanel, searchEntries } from "@/content/site/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon, SearchIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";

type SearchPanelProps = {
  onNavigate: () => void;
};

type SearchEntry = (typeof searchEntries)[number];

const CATEGORY_ORDER = [
  "Page",
  "Door Hardware Family",
  "Automatic Operator Family",
  "Product",
  "Support",
  "Office",
] as const;

function groupByCategory(entries: SearchEntry[]) {
  const map = new Map<string, SearchEntry[]>();
  for (const e of entries) {
    const bucket = map.get(e.category) ?? [];
    bucket.push(e);
    map.set(e.category, bucket);
  }
  return map;
}

export function SearchPanel({ onNavigate }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const results = useMemo(() => {
    if (!deferredQuery) return [];
    return searchEntries
      .filter((e) =>
        `${e.title} ${e.description} ${e.category}`.toLowerCase().includes(deferredQuery),
      )
      .slice(0, 15);
  }, [deferredQuery]);

  const grouped = useMemo(() => groupByCategory(results), [results]);
  const hasQuery = query.trim().length > 0;

  return (
    <div
      className="nav-panel-reveal absolute inset-x-0 top-full z-10 overflow-hidden rounded-b-2xl border-x border-b border-[var(--nav-line)] bg-[var(--background)] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.18)]"
    >
      {/* ── Search input row ──────────────────────────────────────────────── */}
      <div className="border-b border-[var(--nav-line)]">
        <PageContainer>
          <div className="flex items-center gap-3 py-4">
            <SearchIcon className="h-5 w-5 shrink-0 text-[var(--muted-foreground)]" />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, families, categories..."
              className="min-w-0 flex-1 bg-transparent text-[15px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
            />
            {hasQuery && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="shrink-0 rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              >
                Clear
              </button>
            )}
            <kbd className="hidden shrink-0 select-none rounded border border-[var(--border)] bg-[var(--card)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)] sm:inline">
              ESC
            </kbd>
          </div>
        </PageContainer>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-h-[calc(100svh-12rem)] overflow-y-auto">
        <PageContainer className="py-7">

          {/* ── Search results ── */}
          {hasQuery && results.length > 0 && (
            <div className="space-y-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query.trim()}&rdquo;
              </p>
              {CATEGORY_ORDER.filter((cat) => grouped.has(cat)).map((cat) => (
                <div key={cat}>
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                    {cat}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                    {(grouped.get(cat) ?? []).map((result) => (
                      <SmartLink
                        key={result.href}
                        href={result.href}
                        onClick={onNavigate}
                        className="group flex items-start gap-3 rounded-xl border border-[color-mix(in_srgb,var(--border)_65%,transparent)] bg-[var(--card)] p-4 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                      >
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-[13.5px] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
                            {result.title}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-[12px] leading-[1.6] text-[var(--muted-foreground)]">
                            {result.description}
                          </p>
                        </div>
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_45%,transparent)] text-[var(--accent)] transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:text-white">
                          <ArrowUpRightIcon className="h-3 w-3" />
                        </span>
                      </SmartLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── No results ── */}
          {hasQuery && results.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-[14.5px] text-[var(--muted-foreground)]">
                No results for{" "}
                <strong className="font-semibold text-[var(--foreground)]">
                  &ldquo;{query.trim()}&rdquo;
                </strong>
              </p>
              <p className="mt-1.5 text-[13px] text-[var(--muted-foreground)]">
                Try a product name, category, or family keyword.
              </p>
            </div>
          )}

          {/* ── Discovery (empty state) ── */}
          {!hasQuery && (
            <div className="grid gap-8 xl:grid-cols-[1fr_1.1fr_0.9fr]">

              {/* Popular items */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Popular
                </p>
                <div className="mt-4 space-y-2.5">
                  {headerSearchPanel.popularItems.map((item) => (
                    <SmartLink
                      key={item.title}
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-3.5 rounded-xl border border-[color-mix(in_srgb,var(--border)_65%,transparent)] bg-[var(--card)] p-3.5 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[var(--surface)]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-1 truncate text-[13.5px] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-[11.5px] text-[var(--muted-foreground)]">
                          {item.meta}
                        </p>
                      </div>
                      <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100" />
                    </SmartLink>
                  ))}
                </div>
              </div>

              {/* Featured card */}
              <SmartLink
                href={headerSearchPanel.featureCard.href}
                onClick={onNavigate}
                className="group relative min-h-[15rem] overflow-hidden rounded-2xl xl:min-h-0"
              >
                <CoverImage
                  src={headerSearchPanel.featureCard.image}
                  alt={headerSearchPanel.featureCard.imageAlt}
                  sizes="(max-width: 1279px) 100vw, 34vw"
                  className="absolute inset-0"
                  imageClassName="transition duration-700 group-hover:scale-[1.04]"
                  overlayClassName="bg-[linear-gradient(180deg,rgba(10,14,20,0.08),rgba(10,14,20,0.62))]"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
                    {headerSearchPanel.featureCard.eyebrow}
                  </p>
                  <h3 className="mt-2 text-[1.4rem] font-semibold leading-[1.1] tracking-[-0.038em]">
                    {headerSearchPanel.featureCard.title}
                  </h3>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/75">
                    {headerSearchPanel.featureCard.ctaLabel}
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </span>
                </div>
              </SmartLink>

              {/* Project support */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Project Support
                </p>
                <div className="mt-4 space-y-2.5">
                  {headerSearchPanel.supportItems.map((item) => (
                    <SmartLink
                      key={item.title}
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-3.5 rounded-xl border border-[color-mix(in_srgb,var(--border)_65%,transparent)] bg-[var(--card)] p-3.5 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]"
                    >
                      <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-lg bg-[var(--surface)]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-0.5 text-[13px] font-semibold leading-tight tracking-[-0.015em] text-[var(--foreground)]">
                          {item.title}
                        </h3>
                      </div>
                      <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100" />
                    </SmartLink>
                  ))}
                </div>
                <SmartLink
                  href={headerSearchPanel.supportCta.href}
                  onClick={onNavigate}
                  className="mt-5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--accent)] transition-opacity hover:opacity-70"
                >
                  {headerSearchPanel.supportCta.label}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </SmartLink>
              </div>

            </div>
          )}
        </PageContainer>
      </div>
    </div>
  );
}
