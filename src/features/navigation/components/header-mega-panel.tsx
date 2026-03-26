"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  getDefaultHeaderNavigationLeafItem,
  getHeaderNavigationLeafItemByKey,
  type HeaderNavigationItem,
} from "@/content/site/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

type HeaderMegaPanelProps = {
  item: HeaderNavigationItem;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function HeaderMegaPanel({
  item,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: HeaderMegaPanelProps) {
  const panel = item.panel;

  const defaultPreviewItem = useMemo(
    () => (panel ? getDefaultHeaderNavigationLeafItem(panel) : null),
    [panel],
  );

  const previewImages = useMemo(() => {
    if (!panel) {
      return [];
    }

    return Array.from(
      new Set(panel.groups.flatMap((group) => group.items.map((leaf) => leaf.preview.image))),
    );
  }, [panel]);

  const [activePreviewKey, setActivePreviewKey] = useState<string | null>(
    defaultPreviewItem?.key ?? null,
  );
  const [failedPreviewImages, setFailedPreviewImages] = useState<Record<string, true>>(
    {},
  );

  useEffect(() => {
    previewImages.forEach((src) => {
      const preloadImage = new window.Image();
      preloadImage.src = src;
    });
  }, [previewImages]);

  const activePreviewItem = useMemo(() => {
    if (!panel) {
      return null;
    }

    if (!activePreviewKey) {
      return defaultPreviewItem;
    }

    return (
      getHeaderNavigationLeafItemByKey(panel, activePreviewKey) ?? defaultPreviewItem
    );
  }, [activePreviewKey, defaultPreviewItem, panel]);

  if (!panel || !activePreviewItem || !defaultPreviewItem) {
    return null;
  }

  const activePreview = activePreviewItem.preview;
  const defaultPreview = defaultPreviewItem.preview;
  const fallbackPreviewImage = defaultPreview.image;
  const resolvedPreviewSrc = failedPreviewImages[activePreview.image]
    ? fallbackPreviewImage
    : activePreview.image;
  const resolvedPreviewAlt =
    resolvedPreviewSrc === activePreview.image
      ? activePreview.imageAlt
      : defaultPreview.imageAlt;

  const totalItems = panel.groups.reduce((count, group) => count + group.items.length, 0);
  const groupsPerColumn = Math.ceil(panel.groups.length / 3);
  const groupColumns = [
    panel.groups.slice(0, groupsPerColumn),
    panel.groups.slice(groupsPerColumn, groupsPerColumn * 2),
    panel.groups.slice(groupsPerColumn * 2),
  ].filter((column) => column.length > 0);

  return (
    <div
      className="nav-panel-reveal absolute inset-x-0 top-full border-t border-[var(--nav-line)] bg-[var(--background)] shadow-[var(--nav-shadow)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="border-b border-[var(--nav-line)] bg-[var(--nav-soft)]">
        <PageContainer className="flex flex-wrap items-center justify-between gap-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[var(--border)]" />
            <span className="text-[9px] font-medium uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
              {item.label}
            </span>
            <span className="mx-1 h-3 w-px shrink-0 bg-[var(--nav-line)]" />
            <span className="truncate text-[11px] font-light text-[var(--muted-foreground)] opacity-70">
              {panel.description}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-5">
            <SmartLink
              href="/resources"
              onClick={onNavigate}
              className="text-[10px] font-normal uppercase tracking-[0.12em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Technical Specs
            </SmartLink>
            <SmartLink
              href="/downloads"
              onClick={onNavigate}
              className="text-[10px] font-normal uppercase tracking-[0.12em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Downloads
            </SmartLink>
            {panel.overviewHref ? (
              <SmartLink
                href={panel.overviewHref}
                onClick={onNavigate}
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                View All Products →
              </SmartLink>
            ) : null}
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="grid min-h-[21rem] xl:grid-cols-[minmax(0,1fr)_18.25rem] 2xl:grid-cols-[minmax(0,1fr)_19.5rem]">
          <div className="border-r border-[var(--nav-line)]">
            <div
              className="grid min-h-[21rem]"
              style={{
                gridTemplateColumns: `repeat(${groupColumns.length}, minmax(0, 1fr))`,
              }}
            >
              {groupColumns.map((groups, columnIndex) => (
                <div
                  key={columnIndex}
                  className={cn(
                    "flex min-h-0 flex-col overflow-hidden",
                    columnIndex > 0 && "border-l border-[var(--nav-line)]",
                  )}
                >
                  {groups.map((group, groupIndex) => (
                    <div
                      key={group.label}
                      className={cn(
                        "flex min-h-0 flex-1 flex-col overflow-hidden",
                        groupIndex > 0 && "border-t border-[var(--nav-line)]",
                      )}
                    >
                      <div className="group/gh flex shrink-0 items-start justify-between gap-3 border-b border-[var(--nav-line)] px-4 py-2.5 bg-[color-mix(in_srgb,var(--nav-soft)_88%,white)]">
                        <div className="min-w-0">
                          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)] opacity-75">
                            {group.label}
                          </span>
                          {group.description ? (
                            <p className="mt-1 text-[11px] font-normal leading-[1.45] text-[var(--muted-foreground)] opacity-80">
                              {group.description}
                            </p>
                          ) : null}
                        </div>

                        {group.href ? (
                          <SmartLink
                            href={group.href}
                            onClick={onNavigate}
                            className="ml-3 shrink-0 text-[9px] font-medium uppercase tracking-[0.1em] text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover/gh:opacity-70 hover:opacity-100"
                          >
                            All →
                          </SmartLink>
                        ) : null}
                      </div>

                      <ul className="flex-1 overflow-y-auto p-1.5 [scrollbar-width:thin]">
                        {group.items.map((leaf) => {
                          const isActive = activePreviewItem.key === leaf.key;

                          return (
                            <li key={leaf.key}>
                              <SmartLink
                                href={leaf.href}
                                onClick={onNavigate}
                                onMouseEnter={() => setActivePreviewKey(leaf.key)}
                                onFocus={() => setActivePreviewKey(leaf.key)}
                                className={cn(
                                  "group/lf flex min-h-[1.95rem] items-center justify-between rounded-[7px] border px-2.5 py-1.5 transition-all duration-150",
                                  isActive
                                    ? "border-[var(--nav-line)] bg-[var(--nav-soft)]"
                                    : "border-transparent hover:border-[var(--nav-line)] hover:bg-[var(--nav-soft)]",
                                )}
                              >
                                <span
                                  className={cn(
                                    "text-[12px] font-medium leading-snug tracking-[-0.012em] transition-colors duration-150",
                                    isActive
                                      ? "text-[var(--foreground)]"
                                      : "text-[var(--muted-foreground)] group-hover/lf:text-[var(--foreground)]",
                                  )}
                                >
                                  {leaf.label}
                                </span>

                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    "ml-2 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-150",
                                    isActive
                                      ? "bg-[var(--accent)] opacity-100"
                                      : "bg-[var(--border)] opacity-0 group-hover/lf:opacity-50",
                                  )}
                                />
                              </SmartLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <SmartLink
            href={activePreview.href}
            onClick={onNavigate}
            className="group relative flex min-h-[21rem] flex-col justify-end overflow-hidden bg-[color-mix(in_srgb,var(--background)_92%,var(--nav-soft))]"
          >
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={resolvedPreviewSrc}
                  alt={resolvedPreviewAlt}
                  fill
                  sizes="(max-width: 1535px) 300px, 340px"
                  priority={resolvedPreviewSrc === fallbackPreviewImage}
                  className="object-cover object-center transition duration-200 ease-out group-hover:scale-[1.015]"
                  onError={() => {
                    if (activePreview.image !== fallbackPreviewImage) {
                      setFailedPreviewImages((current) =>
                        current[activePreview.image]
                          ? current
                          : { ...current, [activePreview.image]: true },
                      );
                    }
                  }}
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "160px",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_24%,rgba(15,18,24,0.06)_58%,rgba(15,18,24,0.2)_100%)]"
            />

            <span className="absolute right-3 top-3 z-10 rounded-full border border-white/35 bg-[color-mix(in_srgb,var(--background)_84%,transparent)] px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)] shadow-[0_8px_22px_rgba(15,18,24,0.12)]">
              {activePreview.eyebrow}
            </span>

            <div className="relative z-10 mt-auto p-3.5">
              <div className="rounded-[1rem] border border-white/45 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] p-3.5 shadow-[0_16px_38px_rgba(15,18,24,0.16)] backdrop-blur-[3px]">
                <h3 className="font-display text-[1.2rem] font-medium leading-[1.02] tracking-[-0.03em] text-[var(--foreground)]">
                  {activePreview.title}
                </h3>
                <p className="mt-2 max-w-[23ch] text-[11px] font-normal leading-[1.55] text-[var(--muted-foreground)]">
                  {activePreview.description}
                </p>
                <div className="my-3 h-px w-full bg-[color-mix(in_srgb,var(--border)_82%,transparent)]" />
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-normal tracking-[0.04em] text-[var(--muted-foreground)]">
                    EN 16005 · CE Marked
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[var(--foreground)] transition-colors duration-150 group-hover:text-[var(--accent)]">
                    {activePreview.ctaLabel}
                    <ArrowUpRightIcon className="h-2.5 w-2.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </SmartLink>
        </div>
      </PageContainer>

      <div className="border-t border-[var(--nav-line)] bg-[var(--nav-soft)]">
        <PageContainer className="flex flex-wrap items-center justify-between gap-3 py-1.5">
          <div className="flex flex-wrap gap-1.5">
            {panel.groups.map((group) => (
              <button
                key={group.label}
                type="button"
                onClick={() => {
                  const first = group.items[0];
                  if (first) {
                    setActivePreviewKey(first.key);
                  }
                }}
                className={cn(
                  "rounded-full border px-2.5 py-[5px] text-[8px] font-medium uppercase tracking-[0.12em] transition-all duration-150",
                  group.items.some((entry) => entry.key === activePreviewItem.key)
                    ? "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
                    : "border-transparent text-[var(--muted-foreground)] hover:border-[var(--nav-line)] hover:text-[var(--foreground)]",
                )}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[9px] font-normal text-[var(--muted-foreground)] opacity-48">
              {totalItems} products
            </span>
            <SmartLink
              href="/project-support"
              onClick={onNavigate}
              className="text-[9px] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Project Support
            </SmartLink>
            <SmartLink
              href="/downloads"
              onClick={onNavigate}
              className="text-[9px] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Downloads →
            </SmartLink>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
