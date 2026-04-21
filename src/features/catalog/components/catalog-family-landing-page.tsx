import Image from "next/image";
import type { BreadcrumbItem, CatalogCard, CatalogFamily } from "@/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils/cn";

type CatalogFamilyLandingPageProps = {
  family: CatalogFamily;
  breadcrumbs?: BreadcrumbItem[];
};

function FamilyRouteCard({ card, index }: { card: CatalogCard; index: number }) {
  const isPrimary = card.priority !== "secondary";
  const mediaSizes = isPrimary
    ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 28vw"
    : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 20vw";

  const content = (
    <div
      className={cn(
        "h-full overflow-hidden rounded-[1.3rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] shadow-[0_18px_34px_-30px_rgba(17,20,20,0.22)] transition duration-300",
        isPrimary
          ? "hover:border-[var(--accent)] hover:shadow-[0_28px_58px_-36px_rgba(17,20,20,0.26)]"
          : "hover:border-[var(--accent)] hover:shadow-[0_24px_46px_-34px_rgba(17,20,20,0.22)]",
      )}
    >
      {card.image ? (
        <div
          className={cn(
            "relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]",
            isPrimary
              ? "min-h-[13.5rem] sm:min-h-[15rem] lg:min-h-[16rem] xl:min-h-[17rem]"
              : "min-h-[8.5rem] sm:min-h-[9.25rem] xl:min-h-[9.75rem]",
          )}
        >
          <Image
            src={card.image}
            alt={card.imageAlt ?? card.title}
            fill
            sizes={mediaSizes}
            className={cn(
              "object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
              card.imageClassName,
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0",
              isPrimary
                ? "bg-[linear-gradient(180deg,rgba(10,12,16,0.08)_0%,rgba(10,12,16,0.12)_30%,rgba(10,12,16,0.46)_100%)]"
                : "bg-[linear-gradient(180deg,rgba(10,12,16,0.05)_0%,rgba(10,12,16,0.08)_34%,rgba(10,12,16,0.36)_100%)]",
            )}
          />
          <div
            className={cn(
              "relative z-10 flex items-start justify-between gap-4",
              isPrimary ? "p-4 sm:p-5" : "p-3.5 sm:p-4",
            )}
          >
            <p className="eyebrow text-white/72">
              {card.eyebrow ?? (isPrimary ? "Primary Route" : "Route")}
            </p>
            <span className="rounded-full border border-white/16 bg-[rgba(15,18,24,0.24)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              0{index + 1}
            </span>
          </div>
        </div>
      ) : (
        <div className={cn("flex items-start justify-between gap-4", isPrimary ? "p-5 sm:p-6" : "p-4 sm:p-5")}>
          <p className="eyebrow">{card.eyebrow ?? (isPrimary ? "Primary Route" : "Route")}</p>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            0{index + 1}
          </span>
        </div>
      )}

      <div className={cn("flex flex-col", isPrimary ? "p-5 sm:p-6" : "p-4 sm:p-5")}>
        <h3
          className={cn(
            "font-display leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]",
            isPrimary ? "text-[1.5rem] sm:text-[1.7rem]" : "text-[1.22rem] sm:text-[1.34rem]",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mt-4 text-[color-mix(in_srgb,var(--foreground)_82%,transparent)]",
            isPrimary ? "text-[0.98rem] leading-7" : "text-[0.92rem] leading-6.5",
          )}
        >
          {card.description}
        </p>
        {card.scope ? (
          <div
            className={cn(
              "mt-4 rounded-[1rem] border border-[var(--border)] bg-[var(--panel)]",
              isPrimary ? "px-4 py-3.5" : "px-3.5 py-3",
            )}
          >
            <p className="text-[11px] leading-6 text-[var(--muted-foreground)]">{card.scope}</p>
          </div>
        ) : null}
        <div
          className={cn(
            "mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4 text-sm font-medium text-[var(--foreground)]",
            isPrimary && "mt-6",
          )}
        >
          <span>{card.ctaLabel ?? "Explore Route"}</span>
          {card.href ? <ArrowUpRightIcon className="h-4 w-4 shrink-0" /> : null}
        </div>
      </div>
    </div>
  );

  if (card.href) {
    return (
      <SmartLink href={card.href} className="group block h-full">
        {content}
      </SmartLink>
    );
  }

  return <article className="h-full">{content}</article>;
}

function DetailBridgeCard({ card }: { card: CatalogCard }) {
  if (card.image) {
    const content = (
      <CoverImage
        src={card.image}
        alt={card.imageAlt ?? card.title}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 24vw"
        className="h-full min-h-[15rem] sm:min-h-[16rem] rounded-[1.15rem] border border-[var(--border)]"
        imageClassName={cn(
          "object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
          card.imageClassName,
        )}
        overlayClassName="bg-[linear-gradient(180deg,rgba(10,12,16,0.08)_0%,rgba(10,12,16,0.22)_38%,rgba(10,12,16,0.8)_100%)]"
      >
        <div className="flex h-full flex-col justify-between p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow text-white/72">Detail Route</p>
            <ArrowUpRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/82" />
          </div>
          <div>
            <h3 className="text-[1.12rem] font-medium leading-[1.12] tracking-[-0.025em] text-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/82">{card.description}</p>
            <div className="mt-4 border-t border-white/14 pt-3.5 text-sm font-medium text-white">
              {card.ctaLabel ?? "Explore Route"}
            </div>
          </div>
        </div>
      </CoverImage>
    );

    if (card.href) {
      return (
        <SmartLink href={card.href} className="group block h-full">
          {content}
        </SmartLink>
      );
    }

    return <article className="h-full">{content}</article>;
  }

  const content = (
    <div className="h-full rounded-[1.15rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] p-4 sm:p-5 shadow-[0_18px_30px_-30px_rgba(17,20,20,0.2)] transition duration-300 hover:border-[var(--accent)]">
      <p className="eyebrow">Detail Route</p>
      <h3 className="mt-3 text-[1.08rem] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--foreground)]">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{card.description}</p>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-3.5 text-sm font-medium text-[var(--foreground)]">
        <span>{card.ctaLabel ?? "Explore Route"}</span>
        {card.href ? <ArrowUpRightIcon className="h-4 w-4 shrink-0" /> : null}
      </div>
    </div>
  );

  if (card.href) {
    return <SmartLink href={card.href}>{content}</SmartLink>;
  }

  return <article>{content}</article>;
}

export function CatalogFamilyLandingPage({
  breadcrumbs,
  family,
}: CatalogFamilyLandingPageProps) {
  const hub = family.familyHub;

  if (!hub) {
    return null;
  }

  const hasPrioritySplit = family.cards.some((card) => card.priority);
  const primaryCards = hasPrioritySplit
    ? family.cards.filter((card) => card.priority !== "secondary")
    : family.cards;
  const secondaryCards = hasPrioritySplit
    ? family.cards.filter((card) => card.priority === "secondary")
    : [];
  const routeLineItems = hub.hierarchy.routeLine
    ?.split("->")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <main id="main-content">
        <PageContainer className="section-shell pt-8 sm:pt-10 lg:pt-12">
          <section className="grid gap-5 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_68%,transparent),transparent_72%)]"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow">Door Hardware</p>
                  {hub.companionTag ? (
                    <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      {hub.companionTag}
                    </span>
                  ) : null}
                </div>
                <h1 className="mt-5 font-display text-[clamp(3rem,5.1vw,5rem)] leading-[0.92] tracking-[-0.06em] text-[var(--foreground)]">
                  {family.title}
                </h1>
                <p className="mt-5 max-w-[35ch] text-[clamp(1.04rem,1.45vw,1.24rem)] leading-[1.56] text-[color-mix(in_srgb,var(--foreground)_86%,transparent)]">
                  {family.description}
                </p>
                <p className="mt-5 max-w-[58ch] text-[1rem] leading-7 text-[color-mix(in_srgb,var(--foreground)_74%,transparent)]">
                  {family.intro}
                </p>
                {hub.organizationLine ? (
                  <div className="mt-6 max-w-[60ch] rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_95%,var(--panel))] px-4 py-3.5 shadow-[0_18px_34px_-32px_rgba(17,20,20,0.18)]">
                    <p className="eyebrow">Specified by Function</p>
                    <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_78%,transparent)]">
                      {hub.organizationLine}
                    </p>
                  </div>
                ) : null}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <SmartLink href={family.primaryCta.href} className={buttonClassName()}>
                    {family.primaryCta.label}
                  </SmartLink>
                  <SmartLink href={family.secondaryCta.href} className={buttonClassName("secondary")}>
                    {family.secondaryCta.label}
                  </SmartLink>
                </div>
              </div>
            </div>

            <CoverImage
              src={family.image}
              alt={family.imageAlt}
              sizes="(max-width: 1279px) 100vw, 50vw"
              priority
              className="surface-panel min-h-[22rem] overflow-hidden sm:min-h-[28rem] xl:min-h-full"
              imageClassName={cn("object-cover object-center", hub.heroImageClassName)}
              overlayClassName="bg-[linear-gradient(180deg,rgba(12,15,20,0.08)_0%,rgba(12,15,20,0.18)_42%,rgba(12,15,20,0.54)_100%)]"
            >
              <div className="flex h-full items-end justify-end p-4 sm:p-6">
                <div className="max-w-[22rem] rounded-[1.25rem] border border-white/18 bg-[rgba(15,18,24,0.34)] p-5 text-white shadow-[0_28px_64px_-40px_rgba(0,0,0,0.48)] backdrop-blur-md">
                  <p className="eyebrow text-white/72">Family Overview</p>
                  <h2 className="mt-3 font-display text-[clamp(1.55rem,2.4vw,2.2rem)] leading-[0.98] tracking-[-0.045em] text-white">
                    {family.cards.length} coordinated routes
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/82">
                    Move from family into the right child route before reviewing deeper detail pages.
                  </p>
                  <div className="mt-4 grid gap-2">
                    {family.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[0.95rem] border border-white/16 bg-white/8 px-3.5 py-3 text-sm leading-5.5 text-white/88"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CoverImage>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--warm)_38%,transparent),transparent)]"
            />
            <div className="relative">
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_8.25rem] xl:items-end">
                <div className="max-w-[54rem]">
                  <p className="eyebrow">{hub.routeGrid.eyebrow}</p>
                  <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.94] tracking-[-0.058em] text-[var(--foreground)]">
                    {hub.routeGrid.title}
                  </h2>
                  <p className="mt-4 max-w-[50ch] text-[1rem] leading-7 text-[color-mix(in_srgb,var(--foreground)_76%,transparent)]">
                    {hub.routeGrid.description}
                  </p>
                </div>

                <div className="xl:justify-self-end">
                  <div className="rounded-[1.05rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-right shadow-[var(--shadow-soft)]">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      Child Routes
                    </p>
                    <p className="mt-1 font-display text-[2rem] leading-none tracking-[-0.05em] text-[var(--foreground)]">
                      {family.cards.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                {primaryCards.map((card, index) => (
                  <FamilyRouteCard
                    key={`${card.title}-${card.href ?? card.note ?? "static"}`}
                    card={card}
                    index={index}
                  />
                ))}
              </div>

              {secondaryCards.length ? (
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {secondaryCards.map((card, index) => (
                    <FamilyRouteCard
                      key={`${card.title}-${card.href ?? card.note ?? "static"}`}
                      card={card}
                      index={index + primaryCards.length}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[28%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_58%,transparent),transparent_78%)]"
            />
            <div className="relative">
              <SectionHeading
                eyebrow={hub.functionMap.eyebrow}
                title={hub.functionMap.title}
                description={hub.functionMap.description}
                className="sm:flex-col sm:items-start sm:justify-start"
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {hub.functionMap.items.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[1.05rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] px-4 py-4 shadow-[0_16px_28px_-30px_rgba(17,20,20,0.2)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2.5 text-[1.02rem] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
              {hub.functionMap.note ? (
                <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                  {hub.functionMap.note}
                </p>
              ) : null}
            </div>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel relative overflow-hidden p-5 sm:p-6 lg:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[24%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_54%,transparent),transparent_78%)]"
            />
            <div className="relative grid gap-5 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-center">
              <div className="max-w-[32rem]">
                <p className="eyebrow">{hub.hierarchy.eyebrow}</p>
                <h2 className="mt-2.5 font-display text-[clamp(2rem,3.2vw,2.7rem)] leading-[0.98] tracking-[-0.05em] text-[var(--foreground)]">
                  {hub.hierarchy.title}
                </h2>
                <p className="mt-3 max-w-[42ch] text-[0.98rem] leading-7 text-[var(--muted-foreground)]">
                  {hub.hierarchy.description}
                </p>
                {routeLineItems?.length ? (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {routeLineItems.map((item, index) => (
                      <div key={`${item}-${index}`} className="flex items-center gap-2">
                        <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                          {item}
                        </span>
                        {index < routeLineItems.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
                          >
                            -&gt;
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {hub.hierarchy.steps.map((step, index) => (
                  <article
                    key={step.label}
                    className="relative rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] px-4 py-4 shadow-[0_16px_28px_-30px_rgba(17,20,20,0.22)]"
                  >
                    <span className="absolute right-4 top-3 font-display text-[1.3rem] leading-none tracking-[-0.05em] text-[color-mix(in_srgb,var(--border)_78%,transparent)]">
                      0{index + 1}
                    </span>
                    <p className="eyebrow">{step.label}</p>
                    <h3 className="mt-2.5 max-w-[13ch] text-[1.02rem] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--foreground)]">
                      {step.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel relative overflow-hidden p-5 sm:p-6 lg:p-7">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[26%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_58%,transparent),transparent_78%)]"
            />
            <div className="relative grid gap-5 xl:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] xl:items-start">
              <div className="max-w-[34rem]">
                <SectionHeading
                  eyebrow={hub.detailBridge.eyebrow}
                  title={hub.detailBridge.title}
                  description={hub.detailBridge.description}
                  className="sm:flex-col sm:items-start sm:justify-start"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {hub.detailBridge.items.map((item) => (
                  <DetailBridgeCard
                    key={`${item.title}-${item.href ?? item.note ?? "static"}`}
                    card={item}
                  />
                ))}
              </div>
            </div>
            {hub.detailBridge.note ? (
              <p className="relative mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                {hub.detailBridge.note}
              </p>
            ) : null}
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[34%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_66%,transparent),transparent_76%)]"
            />
            <div className="relative grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_22rem] xl:items-start">
              <div className="max-w-[46rem]">
                <SectionHeading
                  eyebrow="Project Support"
                  title={family.supportTitle}
                  description={family.supportBody}
                  className="sm:flex-col sm:items-start sm:justify-start"
                />
              </div>

              <div className="rounded-[1.3rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] p-5 sm:p-6 shadow-[0_24px_42px_-34px_rgba(17,20,20,0.24)]">
                <p className="eyebrow">{hub.supportPanel.title}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {hub.supportPanel.items.map((item, index) => (
                    <article
                      key={item}
                      className="rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_98%,var(--panel))] px-4 py-3.5 shadow-[0_16px_28px_-32px_rgba(17,20,20,0.2)]"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-[0.96rem] font-medium tracking-[-0.02em] text-[var(--foreground)]">
                        {item}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="mt-5 grid gap-3">
                  <SmartLink href={family.primaryCta.href} className={cn(buttonClassName(), "w-full")}>
                    {family.primaryCta.label}
                  </SmartLink>
                  <SmartLink
                    href={family.secondaryCta.href}
                    className={cn(buttonClassName("secondary"), "w-full")}
                  >
                    {family.secondaryCta.label}
                  </SmartLink>
                </div>
              </div>
            </div>
          </section>
        </PageContainer>
      </main>
    </>
  );
}
