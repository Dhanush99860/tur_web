import Image from "next/image";
import type { ResourceCard } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";

type ResourcesSectionProps = {
  resources: ResourceCard[];
};

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  return (
    <section className="home-section-shell">
      <PageContainer>
        {/* ── Header ── */}
        <div className="border-t border-[var(--border)] pt-8 sm:pt-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,40rem)_minmax(0,34rem)] lg:items-end lg:justify-between lg:gap-8">
            <HomeSectionHeading
              eyebrow="Resources"
              title={<>How to start work with TUR.</>}
              className="max-w-[50rem]"
              titleClassName="max-w-[50ch]"
            />
            <div className="max-w-[34rem] lg:justify-self-end lg:pb-1">
              <p className="text-[15px] leading-7 text-[color-mix(in_srgb,var(--foreground)_82%,transparent)] sm:text-[16px]">
                Profile information, company background and direct inquiry routes for the first project conversation.
              </p>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {resources.map((resource) => (
            <SmartLink
              key={resource.title}
              href={resource.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--border)_100%,transparent)] hover:shadow-[0_16px_48px_-20px_rgba(0,0,0,0.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
                <Image
                  src={resource.image}
                  alt={resource.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                {/* Bottom fade to card */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_srgb,var(--card)_70%,transparent)_100%)]" />
                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  {resource.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <h3 className="max-w-[22ch] text-[1.42rem] font-medium leading-[1.1] tracking-[-0.042em] text-[var(--foreground)] sm:text-[1.52rem]">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-[1.75] text-[var(--muted-foreground)]">
                  {resource.description}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] pt-5">
                  <span className="text-[13px] font-semibold text-[var(--foreground)]">
                    {resource.ctaLabel}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_55%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </SmartLink>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
