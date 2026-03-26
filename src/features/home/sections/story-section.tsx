"use client";

import { startTransition, useState } from "react";
import type { StoryCard } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { CoverImage } from "@/components/shared/cover-image";
import { cn } from "@/lib/utils/cn";

type StorySectionProps = {
  stories: StoryCard[];
};

function clampStoryIndex(index: number, total: number) {
  if (total <= 0) {
    return 0;
  }

  return (index + total) % total;
}

type StoryMotionDirection = "next" | "prev";

function getStoryMotionDirection(currentIndex: number, nextIndex: number, total: number) {
  if (total <= 1) {
    return "next" as const;
  }

  if (nextIndex === clampStoryIndex(currentIndex + 1, total)) {
    return "next" as const;
  }

  if (nextIndex === clampStoryIndex(currentIndex - 1, total)) {
    return "prev" as const;
  }

  return nextIndex > currentIndex ? "next" : "prev";
}

export function StorySection({ stories }: StorySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motionDirection, setMotionDirection] = useState<StoryMotionDirection>("next");
  const activeStory = stories[activeIndex] ?? stories[0];
  const previewStory = stories[clampStoryIndex(activeIndex + 1, stories.length)] ?? activeStory;
  const canPreview = stories.length > 1;

  if (!activeStory) {
    return null;
  }

  function showStory(nextIndex: number) {
    if (nextIndex === activeIndex) {
      return;
    }

    setMotionDirection(getStoryMotionDirection(activeIndex, nextIndex, stories.length));

    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  }

  return (
    <section className="home-section-shell">
      <PageContainer>
        <div className="overflow-hidden rounded-[1.15rem] border border-[color-mix(in_srgb,var(--border)_82%,white)] bg-[color-mix(in_srgb,var(--surface)_76%,white)] px-5 py-10 shadow-[0_24px_58px_-40px_rgba(18,20,20,0.14)] sm:px-8 sm:py-12 lg:px-10 lg:py-[3.25rem] xl:px-12 xl:py-14">
          <div className="grid gap-9 xl:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] xl:items-center xl:gap-12 2xl:gap-14">
            <div
              key={`${activeStory.title}-${activeIndex}-copy`}
              className={cn(
                "max-w-[29rem] xl:pl-2",
                motionDirection === "next" ? "story-copy-enter-next" : "story-copy-enter-prev",
              )}
            >
              <HomeSectionHeading
                eyebrow={activeStory.eyebrow}
                title={<>{activeStory.title}</>}
                className="max-w-[29rem]"
                titleClassName="max-w-[16ch]"
              />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                Story {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 max-w-[33ch] text-[15px] leading-8 text-[color-mix(in_srgb,var(--foreground)_84%,transparent)] sm:text-[16px]">
                {activeStory.description}
              </p>
            </div>

            <div className="xl:pl-1">
              <div className="mx-auto max-w-[60rem]">
                <div className="grid gap-3 sm:gap-3.5 xl:grid-cols-[minmax(0,1fr)_9.25rem]">
                  <div
                    key={`${activeStory.title}-${activeIndex}-media`}
                    className={cn(
                      "overflow-hidden rounded-[0.85rem] border border-[color-mix(in_srgb,var(--border)_74%,white)] bg-[color-mix(in_srgb,var(--card)_88%,white)] p-2 shadow-[0_28px_54px_-36px_rgba(18,20,20,0.22)]",
                      motionDirection === "next" ? "story-media-enter-next" : "story-media-enter-prev",
                    )}
                  >
                    <CoverImage
                      src={activeStory.image}
                      alt={activeStory.imageAlt}
                      sizes="(max-width: 1279px) 100vw, 54vw"
                      className="min-h-[18rem] rounded-[0.65rem] sm:min-h-[21rem] lg:min-h-[23rem] xl:min-h-[25rem] 2xl:min-h-[27rem]"
                      imageClassName="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      overlayClassName="bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_38%,rgba(12,15,20,0.18)_100%)]"
                    />
                  </div>

                  {canPreview ? (
                    <button
                      type="button"
                      aria-label={`Show next story: ${previewStory.title}`}
                      onClick={() => showStory(clampStoryIndex(activeIndex + 1, stories.length))}
                      className="group relative hidden overflow-hidden rounded-[0.85rem] border border-[color-mix(in_srgb,var(--border)_78%,white)] bg-[color-mix(in_srgb,var(--card)_82%,white)] p-2 shadow-[0_24px_44px_-36px_rgba(18,20,20,0.18)] xl:block"
                    >
                      <div
                        key={`${previewStory.title}-${activeIndex}-preview`}
                        className={cn(
                          "relative h-full",
                          motionDirection === "next"
                            ? "story-preview-enter-next"
                            : "story-preview-enter-prev",
                        )}
                      >
                        <CoverImage
                          src={previewStory.image}
                          alt={previewStory.imageAlt}
                          sizes="148px"
                          className="h-full min-h-[25rem] rounded-[0.65rem] 2xl:min-h-[27rem]"
                          imageClassName="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                          overlayClassName="bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(18,20,20,0.24))]"
                        />
                        <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[0.55rem] border border-white/50 bg-white/78 px-3 py-3 backdrop-blur-sm">
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                            Next Story
                          </p>
                          <p className="mt-2 text-sm font-medium leading-5 text-[var(--foreground)]">
                            {previewStory.eyebrow}
                          </p>
                        </div>
                      </div>
                    </button>
                  ) : null}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2.5 xl:justify-end">
                  {stories.map((story, index) => (
                    <button
                      key={story.title}
                      type="button"
                      aria-label={`Show story ${index + 1}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => showStory(index)}
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-full border text-[11px] font-medium transition duration-300 sm:h-11 sm:w-11",
                        index === activeIndex
                          ? "border-[var(--accent)] bg-white text-[var(--accent)] shadow-[0_14px_30px_-24px_rgba(0,0,0,0.18)]"
                          : "border-[color-mix(in_srgb,var(--border)_88%,white)] bg-white text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                      )}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
