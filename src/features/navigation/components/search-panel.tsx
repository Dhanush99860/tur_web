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

export function SearchPanel({ onNavigate }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const results = useMemo(() => {
    if (!deferredQuery) {
      return [];
    }

    return searchEntries
      .filter((entry) =>
        `${entry.title} ${entry.description} ${entry.category}`
          .toLowerCase()
          .includes(deferredQuery),
      )
      .slice(0, 9);
  }, [deferredQuery]);

  return (
    <div className="nav-panel-reveal absolute inset-x-0 top-full border-t border-[var(--nav-line)] bg-[var(--background)] shadow-[var(--nav-shadow)]">
      <PageContainer className="py-10">
        <div className="max-w-5xl">
          <h2 className="text-[2rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Search
          </h2>

          <form
            className="mt-6 grid gap-4 lg:grid-cols-[1fr_12rem]"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="relative block">
              <span className="sr-only">Search products, families and support pages</span>
              <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                autoFocus
                type="search"
                enterKeyHint="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search door hardware, automatic operators or support routes"
                className="h-[3.9rem] w-full rounded-[0.45rem] border-2 border-[var(--accent)] bg-[var(--background)] pl-14 pr-5 text-[15px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-[3.9rem] items-center justify-center rounded-[0.45rem] bg-[var(--accent)] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[var(--accent-hover)]"
            >
              Search
            </button>
          </form>
        </div>

        {results.length ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((result) => (
              <SmartLink
                key={`${result.category}-${result.href}`}
                href={result.href}
                onClick={onNavigate}
                className="group rounded-[1.15rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] p-5 transition duration-300 hover:border-[var(--accent)]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  {result.category}
                </p>
                <h3 className="mt-3 text-[1.2rem] leading-7 tracking-[-0.02em] text-[var(--foreground)]">
                  {result.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {result.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  View route
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </SmartLink>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-10 xl:grid-cols-[0.9fr_1.05fr_0.95fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Popular Items
              </p>
              <div className="mt-6 grid gap-4">
                {headerSearchPanel.popularItems.map((item) => (
                  <SmartLink
                    key={item.title}
                    href={item.href}
                    onClick={onNavigate}
                    className="group flex items-center gap-4 rounded-[1.1rem] bg-[var(--nav-soft)] p-5 transition duration-300 hover:bg-[var(--nav-card)]"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[0.9rem] bg-[var(--background)]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 truncate text-[1.1rem] tracking-[-0.02em] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.meta}</p>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </SmartLink>
                ))}
              </div>
            </div>

            <SmartLink
              href={headerSearchPanel.featureCard.href}
              onClick={onNavigate}
              className="group relative min-h-[18rem] overflow-hidden rounded-[1.25rem] bg-[var(--nav-card)]"
            >
              <CoverImage
                src={headerSearchPanel.featureCard.image}
                alt={headerSearchPanel.featureCard.imageAlt}
                sizes="(max-width: 1279px) 100vw, 34vw"
                className="absolute inset-0"
                imageClassName="transition duration-700 group-hover:scale-105"
                overlayClassName="bg-[linear-gradient(180deg,rgba(18,24,26,0.02),rgba(18,24,26,0.46))]"
              />
              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/76">
                  {headerSearchPanel.featureCard.eyebrow}
                </p>
                <h3 className="mt-3 text-[2rem] font-medium tracking-[-0.04em]">
                  {headerSearchPanel.featureCard.title}
                </h3>
                <span className="mt-3 inline-flex text-sm font-medium text-white/86">
                  {headerSearchPanel.featureCard.ctaLabel}
                </span>
              </div>
            </SmartLink>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Project Support
              </p>
              <div className="mt-6 grid gap-5">
                {headerSearchPanel.supportItems.map((item) => (
                  <SmartLink
                    key={item.title}
                    href={item.href}
                    onClick={onNavigate}
                    className="grid grid-cols-[5.5rem_1fr] items-start gap-4 border-b border-[var(--nav-line)] pb-5 last:border-b-0 last:pb-0"
                  >
                    <div className="relative h-[4.25rem] overflow-hidden rounded-[0.75rem] bg-[var(--nav-soft)]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-[1.05rem] leading-7 tracking-[-0.02em] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                    </div>
                  </SmartLink>
                ))}
              </div>

              <SmartLink
                href={headerSearchPanel.supportCta.href}
                onClick={onNavigate}
                className="mt-9 inline-flex border-b border-current pb-1 text-sm font-medium text-[var(--foreground)]"
              >
                {headerSearchPanel.supportCta.label}
              </SmartLink>
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
