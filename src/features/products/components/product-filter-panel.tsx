"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { ChevronDownIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils/cn";

const SECTION_COLORS: Record<string, string> = {
  "door-hardware":        "#4e8ae6",
  "automatic-operators":  "#c47c54",
};

const FAMILY_COLORS: Record<string, string> = {
  "american-standard":                      "#4e8ae6",
  "european-ironmongery":                   "#b09a6a",
  "glass-hardware":                         "#64aa8c",
  "access-control":                         "#86a2e6",
  "sealing-systems":                        "#8fa8b6",
  "swing-door-drives":                      "#c47c54",
  "all-glass-systems":                      "#d4906a",
  "sliding-doors":                          "#c47c54",
  "controlled-physical-access":             "#b87050",
  "revolving-doors":                        "#c49070",
  "automatic-pulse-generators-and-sensors": "#a06848",
};

type SectionMeta = {
  slug: string;
  label: string;
  families: FamilyMeta[];
};

type FamilyMeta = {
  slug: string;
  label: string;
};

const SECTIONS: SectionMeta[] = [
  {
    slug: "door-hardware",
    label: "Door Hardware",
    families: [
      { slug: "american-standard",   label: "American Standard" },
      { slug: "european-ironmongery", label: "European Ironmongery" },
      { slug: "glass-hardware",       label: "Glass Hardware" },
      { slug: "access-control",       label: "Access Control" },
      { slug: "sealing-systems",      label: "Sealing Systems" },
    ],
  },
  {
    slug: "automatic-operators",
    label: "Automatic Operators",
    families: [
      { slug: "swing-door-drives",                      label: "Swing Door Drives" },
      { slug: "all-glass-systems",                      label: "All Glass Systems" },
      { slug: "sliding-doors",                          label: "Sliding Doors" },
      { slug: "controlled-physical-access",             label: "Controlled Physical Access" },
      { slug: "revolving-doors",                        label: "Revolving Doors" },
      { slug: "automatic-pulse-generators-and-sensors", label: "Pulse Generators & Sensors" },
    ],
  },
];

type ProductFilterPanelProps = {
  products: Product[];
  activeSection: string | undefined;
  activeFamily: string | undefined;
  sectionCounts: Record<string, number>;
  familyCounts: Record<string, number>;
  onSectionChange: (section: string | undefined) => void;
  onFamilyChange: (family: string | undefined) => void;
};

export function ProductFilterPanel({
  activeSection,
  activeFamily,
  sectionCounts,
  familyCounts,
  onSectionChange,
  onFamilyChange,
}: ProductFilterPanelProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    activeSection ?? "door-hardware",
  );

  function toggleSection(slug: string) {
    setExpandedSection((prev) => (prev === slug ? null : slug));
  }

  function selectSection(slug: string | undefined) {
    if (slug) setExpandedSection(slug);
    onSectionChange(slug);
    onFamilyChange(undefined);
  }

  function selectFamily(familySlug: string) {
    onFamilyChange(activeFamily === familySlug ? undefined : familySlug);
  }

  const totalCount = Object.values(sectionCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]">

      {/* ── Header ── */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
            Filter
          </p>
          <p className="mt-0.5 text-[13.5px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            Categories
          </p>
        </div>
        {(activeSection || activeFamily) ? (
          <button
            type="button"
            onClick={() => selectSection(undefined)}
            className="rounded-[0.5rem] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--accent)] transition-colors hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
          >
            Clear
          </button>
        ) : null}
      </div>

      {/* ── All Products ── */}
      <div className="border-b border-[var(--border)] px-3 py-2">
        <button
          type="button"
          onClick={() => selectSection(undefined)}
          className={cn(
            "flex w-full items-center justify-between rounded-[0.7rem] px-3 py-2.5 text-left transition-colors duration-150",
            !activeSection
              ? "bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
              : "hover:bg-[var(--panel)]",
          )}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="inline-block h-2 w-2 shrink-0 rounded-full transition-opacity"
              style={{
                background: "var(--accent)",
                opacity: !activeSection ? 1 : 0.3,
              }}
            />
            <span
              className={cn(
                "text-[12.5px] font-semibold transition-colors",
                !activeSection ? "text-[var(--accent)]" : "text-[var(--foreground)]",
              )}
            >
              All Products
            </span>
          </div>
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[10px] font-bold tabular-nums transition-colors",
              !activeSection
                ? "bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--accent)]"
                : "bg-[var(--panel)] text-[var(--muted-foreground)]",
            )}
          >
            {totalCount}
          </span>
        </button>
      </div>

      {/* ── Sections ── */}
      <div className="divide-y divide-[var(--border)]">
        {SECTIONS.map((section) => {
          const isExpanded = expandedSection === section.slug;
          const isActive = activeSection === section.slug;
          const count = sectionCounts[section.slug] ?? 0;
          const sectionColor = SECTION_COLORS[section.slug] ?? "#86a2e6";
          const visibleFamilies = section.families.filter(
            (f) => (familyCounts[f.slug] ?? 0) > 0,
          );

          return (
            <div key={section.slug}>
              {/* Section row */}
              <div className="relative flex items-stretch">
                {/* Active left bar */}
                {isActive ? (
                  <span
                    className="absolute inset-y-2 left-0 w-[3px] rounded-r-full"
                    style={{ background: sectionColor }}
                  />
                ) : null}

                <button
                  type="button"
                  onClick={() => selectSection(isActive ? undefined : section.slug)}
                  className={cn(
                    "flex flex-1 items-center gap-3 py-3.5 pl-5 pr-3 text-left transition-colors duration-150",
                    isActive ? "bg-[color-mix(in_srgb,var(--panel)_70%,transparent)]" : "hover:bg-[var(--panel)]",
                  )}
                >
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full transition-opacity"
                    style={{ background: sectionColor, opacity: isActive ? 1 : 0.3 }}
                  />
                  <span
                    className="text-[13px] font-semibold leading-snug transition-colors"
                    style={{ color: isActive ? sectionColor : undefined }}
                  >
                    {section.label}
                  </span>
                  <span
                    className={cn(
                      "ml-auto shrink-0 text-[10.5px] font-bold tabular-nums",
                      isActive ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]",
                    )}
                  >
                    {count}
                  </span>
                </button>

                {/* Chevron */}
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleSection(section.slug)}
                  className="flex w-10 shrink-0 items-center justify-center text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  <ChevronDownIcon
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>
              </div>

              {/* Family list */}
              {isExpanded && visibleFamilies.length > 0 ? (
                <div className="border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--panel)_55%,transparent)] pb-2 pt-1">
                  {visibleFamilies.map((family) => {
                    const isActiveFamily = activeFamily === family.slug;
                    const fCount = familyCounts[family.slug] ?? 0;
                    const fc = FAMILY_COLORS[family.slug] ?? sectionColor;

                    return (
                      <button
                        key={family.slug}
                        type="button"
                        onClick={() => selectFamily(family.slug)}
                        className={cn(
                          "flex w-full items-center gap-2.5 px-5 py-2 text-left transition-colors duration-150",
                          isActiveFamily
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                        )}
                      >
                        {/* Checkbox */}
                        <span
                          className={cn(
                            "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border-[1.5px] transition-[background-color,border-color] duration-150",
                            isActiveFamily ? "border-transparent" : "border-[var(--border)] bg-transparent",
                          )}
                          style={isActiveFamily ? { background: fc } : {}}
                        >
                          {isActiveFamily ? (
                            <svg viewBox="0 0 10 8" fill="none" className="h-2 w-2">
                              <path
                                d="M1 4l2.5 2.5L9 1"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : null}
                        </span>

                        {/* Color dot */}
                        <span
                          className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: fc, opacity: isActiveFamily ? 1 : 0.45 }}
                        />

                        <span className="min-w-0 flex-1 truncate text-[12px] font-medium leading-snug">
                          {family.label}
                        </span>
                        <span
                          className={cn(
                            "shrink-0 text-[10px] font-bold tabular-nums",
                            isActiveFamily ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]",
                          )}
                        >
                          {fCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}

        {/* Master Key — coming soon */}
        <div className="flex cursor-not-allowed select-none items-center gap-3 px-5 py-3.5 opacity-35">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--muted-foreground)]" />
          <span className="text-[13px] font-semibold text-[var(--foreground)]">
            Master Key Systems
          </span>
          <span className="ml-auto rounded-full border border-[var(--border)] bg-[var(--panel)] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
            Soon
          </span>
        </div>
      </div>
    </div>
  );
}
