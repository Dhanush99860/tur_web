import type { BreadcrumbItem, CatalogCard, LinkItem } from "@/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { CatalogCard as CatalogCardItem } from "@/features/catalog/components/catalog-card";
import { cn } from "@/lib/utils/cn";

type CatalogLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  cards: CatalogCard[];
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  supportTitle: string;
  supportBody: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function CatalogLandingPage({
  breadcrumbs,
  cards,
  description,
  eyebrow,
  image,
  imageAlt,
  intro,
  primaryCta,
  secondaryCta,
  supportBody,
  supportTitle,
  title,
}: CatalogLandingPageProps) {
  return (
    <>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <main id="main-content">
        <PageContainer className="section-shell">
          <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="display-hero mt-4 max-w-[12ch] text-[var(--foreground)]">{title}</h1>
              <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_88%,transparent)]">
                {description}
              </p>
              <p className="body-copy mt-5">{intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SmartLink href={primaryCta.href} className={buttonClassName()}>
                  {primaryCta.label}
                </SmartLink>
                <SmartLink href={secondaryCta.href} className={buttonClassName("secondary")}>
                  {secondaryCta.label}
                </SmartLink>
              </div>
            </div>

            <CoverImage
              src={image}
              alt={imageAlt}
              sizes="(max-width: 1279px) 100vw, 48vw"
              className="surface-panel min-h-[22rem]"
              overlayClassName="bg-[linear-gradient(180deg,var(--hero-overlay),var(--hero-overlay-strong))]"
            >
              <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-8 lg:p-10">
                <p className="eyebrow text-white/75">{eyebrow}</p>
                <p className="display-subtitle mt-3 text-white">{title}</p>
              </div>
            </CoverImage>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <SectionHeading
            eyebrow="Structured Landing Pages"
            title="Explore the families in this section"
            description="This foundation keeps the hierarchy clear: section first, family next, then product detail where a dedicated page already exists."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <CatalogCardItem key={`${card.title}-${card.href ?? card.note ?? "static"}`} card={card} />
            ))}
          </div>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Project Support"
              title={supportTitle}
              description={supportBody}
              action={
                <div className="flex flex-col gap-3 sm:flex-row">
                  <SmartLink href={primaryCta.href} className={cn(buttonClassName(), "w-full sm:w-auto")}>
                    {primaryCta.label}
                  </SmartLink>
                  <SmartLink href={secondaryCta.href} className={cn(buttonClassName("secondary"), "w-full sm:w-auto")}>
                    {secondaryCta.label}
                  </SmartLink>
                </div>
              }
            />
          </section>
        </PageContainer>
      </main>
    </>
  );
}
