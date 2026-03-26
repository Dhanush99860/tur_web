import type { ResourceCard } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";

type ResourcesSectionProps = {
  resources: ResourceCard[];
};

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  return (
    <section className="home-section-shell">
      <PageContainer>
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

        <div className="mt-8 grid gap-x-5 gap-y-10 lg:grid-cols-3 xl:gap-x-6">
          {resources.map((resource) => (
            <SmartLink
              key={resource.title}
              href={resource.href}
              className="group flex h-full flex-col"
            >
              <CoverImage
                src={resource.image}
                alt={resource.imageAlt}
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="h-[250px] rounded-[1rem] transition duration-500 group-hover:scale-[0.995]"
                imageClassName="transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col px-1 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                  {resource.category}
                </p>
                <h3 className="mt-4 max-w-[22ch] text-[1.65rem] font-medium leading-[1.06] tracking-[-0.05em] text-[var(--foreground)]">
                  {resource.title}
                </h3>
                <p className="mt-4 max-w-[80ch] text-sm leading-6 text-[var(--muted-foreground)] pb-4">
                  {resource.description}
                </p>
                <div className="mt-auto flex w-full items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--border)_84%,transparent)] pt-4 text-sm text-[var(--foreground)]">
                  <span className="font-medium">{resource.ctaLabel}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                    <ArrowUpRightIcon className="h-4 w-4" />
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
