"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import type { StoryCard } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils/cn";

type StorySectionProps = {
  stories: StoryCard[];
};

function clampIndex(index: number, total: number) {
  return (index + total) % total;
}

type Direction = "next" | "prev";

function getDirection(current: number, next: number, total: number): Direction {
  if (total <= 1) return "next";
  if (next === clampIndex(current + 1, total)) return "next";
  if (next === clampIndex(current - 1, total)) return "prev";
  return next > current ? "next" : "prev";
}

export function StorySection({ stories }: StorySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState<Direction>("next");

  const active = stories[activeIndex] ?? stories[0];
  const previewIndex = clampIndex(activeIndex + 1, stories.length);
  const preview = stories[previewIndex] ?? active;

  if (!active) return null;

  function showStory(nextIndex: number) {
    if (nextIndex === activeIndex) return;
    setDir(getDirection(activeIndex, nextIndex, stories.length));
    startTransition(() => setActiveIndex(nextIndex));
  }

  return (
    <section className="home-section-shell" aria-label="Why TUR">
      <PageContainer>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] shadow-[0_32px_64px_-40px_rgba(10,14,20,0.12)]">
          <div className="grid xl:grid-cols-[0.76fr_1.24fr]">

            {/* ── Left: text content ── */}
            <div className="flex flex-col gap-0 border-b border-[color-mix(in_srgb,var(--border)_70%,transparent)] p-8 sm:p-10 xl:border-b-0 xl:border-r xl:p-12">

              {/* Counter row */}
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-[10px] font-bold tracking-[0.28em]"
                  style={{ color: "var(--accent)" }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--border)_70%,transparent)]" />
                <span className="font-mono text-[10px] tracking-[0.28em] text-[var(--muted-foreground)] opacity-50">
                  {String(stories.length).padStart(2, "0")}
                </span>
              </div>

              {/* Content — grows to fill height */}
              <div
                key={`copy-${activeIndex}`}
                aria-live="polite"
                aria-atomic="true"
                className={cn(
                  "mt-8 flex flex-1 flex-col",
                  dir === "next" ? "story-copy-enter-next" : "story-copy-enter-prev",
                )}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                    {active.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.046em] text-[var(--foreground)]">
                  {active.title}
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-[34ch] text-[14.5px] leading-[1.85] text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                  {active.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show story ${i + 1}`}
                    aria-pressed={i === activeIndex}
                    onClick={() => showStory(i)}
                    className="relative h-1 overflow-hidden rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      width: i === activeIndex ? "2.5rem" : "1.125rem",
                      background: i === activeIndex
                        ? "var(--accent)"
                        : "color-mix(in srgb, var(--border) 100%, transparent)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: image ── */}
            <div className="relative min-h-[22rem] sm:min-h-[26rem] xl:min-h-[32rem]">

              {/* Main image — full bleed */}
              <div
                key={`media-${activeIndex}`}
                className={cn(
                  "absolute inset-0 overflow-hidden",
                  dir === "next" ? "story-media-enter-next" : "story-media-enter-prev",
                )}
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1279px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                {/* Left-edge blend into panel */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,var(--card),transparent)] opacity-60 xl:block hidden" />
                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(0,0,0,0.5),transparent)]" />
              </div>

              {/* Preview card — bottom-right overlay */}
              {stories.length > 1 && (
                <button
                  type="button"
                  aria-label={`Show next story: ${preview.title}`}
                  onClick={() => showStory(previewIndex)}
                  className="group absolute bottom-4 right-4 z-10 hidden w-[7.5rem] overflow-hidden rounded-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.03] xl:block"
                >
                  <div
                    key={`preview-${activeIndex}`}
                    className={cn(
                      "relative h-[8.5rem]",
                      dir === "next" ? "story-preview-enter-next" : "story-preview-enter-prev",
                    )}
                  >
                    <Image
                      src={preview.image}
                      alt={preview.imageAlt}
                      fill
                      sizes="120px"
                      className="object-cover brightness-[0.7] transition-all duration-500 group-hover:brightness-[0.85] group-hover:scale-[1.06]"
                    />
                    {/* Frosted label */}
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72)_0%,transparent_100%)] px-3 pb-3 pt-6">
                      <p className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-white/55">
                        Next
                      </p>
                      <p className="mt-0.5 text-[10.5px] font-semibold leading-tight text-white">
                        {preview.eyebrow}
                      </p>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
