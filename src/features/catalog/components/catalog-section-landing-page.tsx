import Image from "next/image";
import type { BreadcrumbItem, CatalogCard, CatalogSection } from "@/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils/cn";

type CatalogSectionLandingPageProps = {
  section: CatalogSection;
  familyCards: CatalogCard[];
  breadcrumbs?: BreadcrumbItem[];
};

type RouteCardVariant = "feature" | "compact";

function HeroMetaList({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="mt-7 border-t border-[var(--border)] pt-5">
      <p className="eyebrow">{label}</p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[0.95rem] border border-[color-mix(in_srgb,var(--border)_82%,white)] bg-[color-mix(in_srgb,var(--card)_92%,var(--panel))] px-4 py-3 text-[0.94rem] font-medium leading-6 tracking-[-0.015em] text-[var(--foreground)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteCard({
  card,
  index,
  variant = "feature",
  sectionSlug,
}: {
  card: CatalogCard;
  index: number;
  variant?: RouteCardVariant;
  sectionSlug?: CatalogSection["slug"];
}) {
  const isCompact = variant === "compact";
  const isAutomaticOperators = sectionSlug === "automatic-operators";

  const content = (
    <>
      <div
        className={cn(
          "relative overflow-hidden bg-[var(--surface)]",
          isCompact
            ? isAutomaticOperators
              ? "min-h-[10.5rem] sm:min-h-full"
              : "aspect-[1.16]"
            : isAutomaticOperators
              ? "min-h-[11.25rem] sm:min-h-full"
              : "min-h-[14rem] sm:min-h-full",
        )}
      >
        <Image
          src={card.image ?? "/tur/meta-default.jpg"}
          alt={card.imageAlt ?? card.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 42vw, 28vw"
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.1)_0%,rgba(10,12,16,0.04)_38%,rgba(10,12,16,0.38)_100%)]"
        />
        <span
          className={cn(
            "absolute rounded-full border border-white/24 bg-[rgba(15,18,24,0.22)] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm",
            isCompact ? "right-3 top-3" : "right-4 top-4",
          )}
        >
          0{index + 1}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col",
          isCompact
            ? isAutomaticOperators
              ? "p-4 sm:p-4"
              : "p-5"
            : isAutomaticOperators
              ? "p-4 sm:p-5"
              : "p-5 sm:p-6",
        )}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Section Route
          </p>
          <h3
            className={cn(
              "mt-3 font-display leading-[1.02] tracking-[-0.045em] text-[var(--foreground)]",
              isCompact
                ? isAutomaticOperators
                  ? "text-[1.14rem] sm:text-[1.24rem]"
                  : "text-[1.26rem] sm:text-[1.38rem]"
                : isAutomaticOperators
                  ? "text-[1.28rem] sm:text-[1.42rem]"
                  : "text-[1.4rem] sm:text-[1.56rem]",
            )}
          >
            {card.title}
          </h3>
        </div>
        <p
          className={cn(
            "mt-4 text-[color-mix(in_srgb,var(--foreground)_82%,transparent)]",
            isAutomaticOperators
              ? "text-[0.92rem] leading-6.5"
              : "text-[0.97rem] leading-7",
          )}
        >
          {card.description}
        </p>
        <div
          className={cn(
            "mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)]",
            isCompact ? "pt-3.5" : "pt-4",
          )}
        >
          {card.scope ? (
            <span
              className={cn(
                "min-w-0 flex-1 pr-2 text-[var(--muted-foreground)]",
                isAutomaticOperators
                  ? "text-[0.72rem] leading-5 tracking-[-0.01em]"
                  : "text-[0.76rem] leading-5 tracking-[-0.01em]",
              )}
            >
              {card.scope}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
            {card.href ? card.ctaLabel ?? "Explore Family" : card.note ?? "Available on request"}
            {card.href ? (
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : null}
          </span>
        </div>
      </div>
    </>
  );

  if (card.href) {
    return (
      <SmartLink
        href={card.href}
        className={cn(
          "group h-full overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_34px_-30px_rgba(17,20,20,0.26)] transition duration-300 hover:border-[var(--accent)] hover:shadow-[0_30px_68px_-38px_rgba(17,20,20,0.28)]",
          isCompact
            ? isAutomaticOperators
              ? "grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
              : "flex flex-col"
            : isAutomaticOperators
              ? "grid sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
              : "grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
        )}
      >
        {content}
      </SmartLink>
    );
  }

  return (
    <article
      className={cn(
        "h-full overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_34px_-30px_rgba(17,20,20,0.26)]",
        isCompact
          ? isAutomaticOperators
            ? "grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            : "flex flex-col"
          : isAutomaticOperators
            ? "grid sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
            : "grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
      )}
    >
      {content}
    </article>
  );
}

function StructureBlock({ section }: { section: CatalogSection }) {
  const isAutomaticOperators = section.slug === "automatic-operators";

  if (
    section.slug === "door-hardware" ||
    section.slug === "automatic-operators"
  ) {
    return (
      <section
        className={cn(
          "surface-panel relative overflow-hidden",
          isAutomaticOperators ? "p-4 sm:p-5 lg:p-5" : "p-5 sm:p-6 lg:p-6",
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[24%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_58%,transparent),transparent_78%)]"
        />
        <div
          className={cn(
            "relative xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-center",
            isAutomaticOperators ? "grid gap-4" : "grid gap-5",
          )}
        >
          <div className="max-w-[33rem]">
            <p className="eyebrow">{section.structure.eyebrow}</p>
            <h2
              className={cn(
                "mt-2.5 font-display leading-[0.98] tracking-[-0.05em] text-[var(--foreground)]",
                isAutomaticOperators
                  ? "text-[clamp(1.75rem,2.5vw,2.35rem)]"
                  : "text-[clamp(2rem,3.2vw,2.9rem)]",
              )}
            >
              {section.structure.title}
            </h2>
            <p
              className={cn(
                "mt-3 max-w-[42ch] text-[var(--muted-foreground)]",
                isAutomaticOperators ? "text-[0.92rem] leading-6" : "text-[0.98rem] leading-7",
              )}
            >
              {section.structure.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                {section.title}
              </span>
              <span aria-hidden="true" className="text-[10px] font-medium text-[var(--muted-foreground)]">
                -&gt;
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                Family
              </span>
              <span aria-hidden="true" className="text-[10px] font-medium text-[var(--muted-foreground)]">
                -&gt;
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                Detail
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {section.structure.steps.map((step, index) => (
              <article
                key={step.label}
                className={cn(
                  "relative rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] shadow-[0_16px_28px_-30px_rgba(17,20,20,0.22)]",
                  isAutomaticOperators ? "px-3.5 py-3.5" : "px-4 py-4",
                )}
              >
                <span className="absolute right-4 top-3 font-display text-[1.3rem] leading-none tracking-[-0.05em] text-[color-mix(in_srgb,var(--border)_78%,transparent)]">
                  0{index + 1}
                </span>
                <p className="eyebrow">{step.label}</p>
                <h3
                  className={cn(
                    "mt-2.5 max-w-[13ch] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--foreground)]",
                    isAutomaticOperators ? "text-[0.96rem]" : "text-[1.02rem]",
                  )}
                >
                  {step.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[34%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_68%,transparent),transparent_72%)]"
      />
      <div className="relative grid gap-6 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-start">
        <div>
          <SectionHeading
            eyebrow={section.structure.eyebrow}
            title={section.structure.title}
            description={section.structure.description}
            className="sm:flex-col sm:items-start sm:justify-start"
          />
          <div className="mt-6 rounded-[1.2rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_95%,var(--panel))] p-5 shadow-[0_18px_34px_-30px_rgba(17,20,20,0.22)]">
            <p className="eyebrow">Route Logic</p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                {section.title}
              </span>
              <span
                aria-hidden="true"
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
              >
                -&gt;
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                Family
              </span>
              <span
                aria-hidden="true"
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
              >
                -&gt;
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                Detail
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
              Start broad, move into the right family, then continue only where a dedicated
              child or detail page improves the workflow.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {section.structure.steps.map((step, index) => (
            <article
              key={step.label}
              className="relative rounded-[1.2rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] p-5 shadow-[0_18px_32px_-30px_rgba(17,20,20,0.2)]"
            >
              <span className="absolute right-4 top-4 font-display text-[1.6rem] leading-none tracking-[-0.06em] text-[color-mix(in_srgb,var(--border)_78%,transparent)]">
                0{index + 1}
              </span>
              <p className="eyebrow">{step.label}</p>
              <h3 className="mt-4 max-w-[13ch] text-[1.16rem] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FunctionMapBlock({ section }: { section: CatalogSection }) {
  if (!section.functionMap) {
    return null;
  }

  const isAutomaticOperators = section.slug === "automatic-operators";
  const usesSixItemGrid = section.functionMap.items.length > 5;

  return (
    <section
      className={cn(
        "surface-panel relative overflow-hidden",
        isAutomaticOperators ? "p-5 sm:p-6 lg:p-6" : "p-6 sm:p-8 lg:p-9",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[28%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_60%,transparent),transparent_78%)]"
      />
      <div className="relative">
        <SectionHeading
          eyebrow={section.functionMap.eyebrow}
          title={section.functionMap.title}
          description={section.functionMap.description}
          className="sm:flex-col sm:items-start sm:justify-start"
        />

        <div
          className={cn(
            "grid gap-3 sm:grid-cols-2",
            isAutomaticOperators ? "mt-5" : "mt-6",
            usesSixItemGrid ? "xl:grid-cols-3" : "xl:grid-cols-5",
          )}
        >
          {section.functionMap.items.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "rounded-[1.05rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] shadow-[0_16px_28px_-30px_rgba(17,20,20,0.2)]",
                isAutomaticOperators ? "px-3.5 py-3.5" : "px-4 py-4",
              )}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                0{index + 1}
              </p>
              <h3
                className={cn(
                  "mt-2.5 font-medium leading-[1.12] tracking-[-0.025em] text-[var(--foreground)]",
                  isAutomaticOperators ? "text-[0.96rem]" : "text-[1.02rem]",
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-[var(--muted-foreground)]",
                  isAutomaticOperators ? "text-[0.84rem] leading-5.5" : "text-sm leading-6",
                )}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {section.functionMap.note ? (
          <p
            className={cn(
              "mt-4 text-[var(--muted-foreground)]",
              isAutomaticOperators ? "text-[0.88rem] leading-5.5" : "text-sm leading-6",
            )}
          >
            {section.functionMap.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function SupportBlock({ section }: { section: CatalogSection }) {
  const isAutomaticOperators = section.slug === "automatic-operators";
  const isPremiumSupportSection =
    section.slug === "door-hardware" ||
    isAutomaticOperators;
  const supportCardBody =
    isAutomaticOperators
      ? "Move into the relevant operator family or request support for circulation logic, approvals, activation devices and system coordination."
      : "Move into the relevant family or request support for packages, approvals and technical coordination.";
  const supportCardNote =
    isAutomaticOperators
      ? "Family route hierarchy remains unchanged. Move from section to family, then deeper only where dedicated operator routes already exist."
      : "Move from section to family, then deeper only where detail pages exist.";

  if (isPremiumSupportSection) {
    return (
      <section
        className={cn(
          "surface-panel relative overflow-hidden",
          isAutomaticOperators ? "p-5 sm:p-6 lg:p-6" : "p-6 sm:p-8 lg:p-9",
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[34%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_66%,transparent),transparent_76%)]"
        />
        <div
          className={cn(
            "relative xl:grid-cols-[minmax(0,1.08fr)_23rem] xl:items-start",
            isAutomaticOperators ? "grid gap-5" : "grid gap-6",
          )}
        >
          <div className="max-w-[46rem]">
            <SectionHeading
              eyebrow="Project Support"
              title={section.supportTitle}
              description={section.supportBody}
              className="sm:flex-col sm:items-start sm:justify-start"
            />

            {section.supportSignals?.length ? (
              <div className={cn("grid gap-3 sm:grid-cols-3", isAutomaticOperators ? "mt-5" : "mt-6")}>
                {section.supportSignals.slice(0, 3).map((signal, index) => (
                  <article
                    key={signal}
                    className={cn(
                      "rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_96%,var(--panel))] shadow-[0_18px_30px_-32px_rgba(17,20,20,0.22)]",
                      isAutomaticOperators ? "px-3.5 py-3.5" : "px-4 py-4",
                    )}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      0{index + 1}
                    </p>
                    <p
                      className={cn(
                        "mt-2 font-medium tracking-[-0.02em] text-[var(--foreground)]",
                        isAutomaticOperators ? "text-[0.94rem]" : "text-[1rem]",
                      )}
                    >
                      {signal}
                    </p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className={cn(
              "rounded-[1.3rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] shadow-[0_24px_42px_-34px_rgba(17,20,20,0.24)]",
              isAutomaticOperators ? "p-4 sm:p-5" : "p-5 sm:p-6",
            )}
          >
            <p className="eyebrow">Technical Guidance</p>
            <p
              className={cn(
                "mt-3 text-[color-mix(in_srgb,var(--foreground)_78%,transparent)]",
                isAutomaticOperators ? "text-[0.92rem] leading-6" : "text-[0.98rem] leading-7",
              )}
            >
              {supportCardBody}
            </p>
            <div className="mt-5 grid gap-3">
              <SmartLink href={section.primaryCta.href} className={cn(buttonClassName(), "w-full")}>
                {section.primaryCta.label}
              </SmartLink>
              <SmartLink
                href={section.secondaryCta.href}
                className={cn(buttonClassName("secondary"), "w-full")}
              >
                {section.secondaryCta.label}
              </SmartLink>
            </div>
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-[11px] font-medium leading-6 text-[var(--muted-foreground)]">
                {supportCardNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[36%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_70%,transparent),transparent_74%)]"
      />
      <div className="relative grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_21rem] xl:items-center">
        <div>
          <SectionHeading
            eyebrow="Project Support"
            title={section.supportTitle}
            description={section.supportBody}
            className="sm:flex-col sm:items-start sm:justify-start"
          />
        </div>
        <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)]">
          <p className="eyebrow">Technical Guidance</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
            Use Door Hardware as the first routing layer for category guidance, catalog
            coordination and approval support before moving into deeper family or detail
            pages.
          </p>
          <div className="mt-4 rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--panel)_84%,white)] px-4 py-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              Family route hierarchy remains unchanged
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
              Project teams can move from section to family, then request guidance for
              packages, approvals and technical coordination where deeper detail pages are
              still being staged.
            </p>
          </div>
          <div className="mt-5 grid gap-3">
            <SmartLink href={section.primaryCta.href} className={cn(buttonClassName(), "w-full")}>
              {section.primaryCta.label}
            </SmartLink>
            <SmartLink
              href={section.secondaryCta.href}
              className={cn(buttonClassName("secondary"), "w-full")}
            >
              {section.secondaryCta.label}
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ section }: { section: CatalogSection }) {
  if (!section.faq) {
    return null;
  }

  const isAutomaticOperators = section.slug === "automatic-operators";

  return (
    <section
      className={cn(
        "surface-panel relative overflow-hidden",
        isAutomaticOperators ? "p-5 sm:p-6 lg:p-6" : "p-6 sm:p-8 lg:p-9",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[26%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_58%,transparent),transparent_80%)]"
      />
      <div
        className={cn(
          "relative xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start",
          isAutomaticOperators ? "grid gap-5" : "grid gap-6",
        )}
      >
        <div className="max-w-[34rem]">
          <SectionHeading
            eyebrow={section.faq.eyebrow}
            title={section.faq.title}
            description={section.faq.description}
            className="sm:flex-col sm:items-start sm:justify-start"
          />
        </div>

        <div className="grid gap-3">
          {section.faq.items.map((item) => (
            <details
              key={item.question}
              className={cn(
                "group rounded-[1.05rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_97%,var(--panel))] shadow-[0_16px_28px_-30px_rgba(17,20,20,0.18)]",
                isAutomaticOperators ? "px-3.5 py-3.5" : "px-4 py-4",
              )}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <span
                  className={cn(
                    "font-medium tracking-[-0.02em] text-[var(--foreground)]",
                    isAutomaticOperators ? "text-[0.96rem] leading-5.5" : "text-[1rem] leading-6",
                  )}
                >
                  {item.question}
                </span>
                <ChevronDownIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p
                className={cn(
                  "pt-3 text-[var(--muted-foreground)]",
                  isAutomaticOperators ? "text-[0.88rem] leading-6" : "text-sm leading-7",
                )}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatalogSectionLandingPage({
  breadcrumbs,
  familyCards,
  section,
}: CatalogSectionLandingPageProps) {
  const isDoorHardware = section.slug === "door-hardware";
  const isAutomaticOperators = section.slug === "automatic-operators";
  const heroMetaLabel =
    isDoorHardware || isAutomaticOperators ? "Core Families" : "Included Routes";
  const routeCounterLabel =
    isDoorHardware || isAutomaticOperators ? "Core Families" : "Routes Surfaced";
  const overviewTitle =
    isDoorHardware
      ? `${familyCards.length} coordinated families, one clear entry point.`
      : isAutomaticOperators
        ? `${familyCards.length} coordinated families, one clear operator entry point.`
      : `${familyCards.length} coordinated routes, one clear entry point.`;
  const overviewDescription =
    isAutomaticOperators
      ? "Move from section into the right operator family before reviewing deeper detail pages."
      : "Move from section into the right family before reviewing deeper detail pages.";
  const primaryRouteCards = familyCards.slice(0, 2);
  const secondaryRouteCards = isAutomaticOperators ? familyCards.slice(2, 4) : familyCards.slice(2);
  const tertiaryRouteCards = isAutomaticOperators ? familyCards.slice(4) : [];
  const showHeroMetaList = !isDoorHardware && !isAutomaticOperators;
  const organizationLabel = isAutomaticOperators
    ? "Specified By Movement"
    : "Specified By Function";

  return (
    <>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <main id="main-content">
        <PageContainer
          className={cn(
            "section-shell",
            isAutomaticOperators ? "pt-6 sm:pt-7 lg:pt-8" : "pt-8 sm:pt-10 lg:pt-12",
          )}
        >
          <section
            className={cn(
              "grid gap-5 xl:items-stretch",
              isAutomaticOperators
                ? "xl:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)]"
                : "xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]",
            )}
          >
            <div
              className={cn(
                "surface-panel relative overflow-hidden",
                isAutomaticOperators ? "p-5 sm:p-6 lg:p-8" : "p-6 sm:p-8 lg:p-10",
              )}
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_72%,transparent),transparent_72%)]"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow">{section.title}</p>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Section Hub
                  </span>
                </div>
                <h1
                  className={cn(
                    "mt-5 font-display leading-[0.92] tracking-[-0.062em] text-[var(--foreground)]",
                    isAutomaticOperators
                      ? "text-[clamp(2.75rem,4.8vw,4.4rem)]"
                      : "text-[clamp(3rem,5.4vw,5.2rem)]",
                  )}
                >
                  {section.title}
                </h1>
                <p
                  className={cn(
                    "mt-5 text-[color-mix(in_srgb,var(--foreground)_86%,transparent)]",
                    isAutomaticOperators
                      ? "max-w-[33ch] text-[clamp(1rem,1.28vw,1.14rem)] leading-[1.52]"
                      : "max-w-[34ch] text-[clamp(1.06rem,1.5vw,1.3rem)] leading-[1.58]",
                  )}
                >
                  {section.description}
                </p>
                <p
                  className={cn(
                    "mt-5 max-w-[58ch] text-[color-mix(in_srgb,var(--foreground)_74%,transparent)]",
                    isAutomaticOperators ? "text-[0.95rem] leading-6.5" : "text-[1rem] leading-7",
                  )}
                >
                  {section.intro}
                </p>
                {section.organizationLine ? (
                  <div
                    className={cn(
                      "max-w-[60ch] rounded-[1rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_94%,var(--panel))] shadow-[0_18px_34px_-32px_rgba(17,20,20,0.18)]",
                      isAutomaticOperators ? "mt-5 px-4 py-3" : "mt-6 px-4 py-3.5",
                    )}
                  >
                    <p className="eyebrow">{organizationLabel}</p>
                    <p
                      className={cn(
                        "mt-2 text-[color-mix(in_srgb,var(--foreground)_78%,transparent)]",
                        isAutomaticOperators ? "text-[0.88rem] leading-5.5" : "text-sm leading-6",
                      )}
                    >
                      {section.organizationLine}
                    </p>
                  </div>
                ) : null}
                <div className={cn("flex flex-col gap-3 sm:flex-row", isAutomaticOperators ? "mt-6" : "mt-7")}>
                  <SmartLink href={section.primaryCta.href} className={buttonClassName()}>
                    {section.primaryCta.label}
                  </SmartLink>
                  <SmartLink
                    href={section.secondaryCta.href}
                    className={buttonClassName("secondary")}
                  >
                    {section.secondaryCta.label}
                  </SmartLink>
                </div>
                {showHeroMetaList ? (
                  <HeroMetaList items={section.highlights} label={heroMetaLabel} />
                ) : null}
              </div>
            </div>

            <CoverImage
              src={section.image}
              alt={section.imageAlt}
              sizes="(max-width: 1279px) 100vw, 52vw"
              priority
              className={cn(
                "surface-panel overflow-hidden",
                isAutomaticOperators
                  ? "min-h-[18rem] sm:min-h-[22rem] xl:min-h-[30rem]"
                  : "min-h-[22rem] sm:min-h-[27rem] xl:min-h-full",
              )}
              imageClassName="object-cover object-center"
              overlayClassName="bg-[linear-gradient(180deg,rgba(12,15,20,0.06)_0%,rgba(12,15,20,0.16)_44%,rgba(12,15,20,0.52)_100%)]"
            >
              <div className={cn("flex h-full items-end", isAutomaticOperators ? "p-3.5 sm:p-5" : "p-4 sm:p-6")}>
                <div
                  className={cn(
                    "rounded-[1.25rem] border border-white/18 bg-[rgba(15,18,24,0.34)] text-white shadow-[0_28px_64px_-40px_rgba(0,0,0,0.48)] backdrop-blur-md",
                    isAutomaticOperators ? "max-w-[19rem] p-4" : "max-w-[22rem] p-5",
                  )}
                >
                  <p className="eyebrow text-white/72">Section Overview</p>
                  <h2
                    className={cn(
                      "mt-3 font-display leading-[0.98] tracking-[-0.045em] text-white",
                      isAutomaticOperators
                        ? "text-[clamp(1.38rem,1.9vw,2rem)]"
                        : "text-[clamp(1.55rem,2.4vw,2.28rem)]",
                    )}
                  >
                    {overviewTitle}
                  </h2>
                  <p
                    className={cn(
                      "mt-3 text-white/82",
                      isAutomaticOperators ? "text-[0.84rem] leading-5.5" : "text-sm leading-6",
                    )}
                  >
                    {overviewDescription}
                  </p>
                </div>
              </div>
            </CoverImage>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section
            className={cn(
              "surface-panel relative overflow-hidden",
              isAutomaticOperators ? "p-5 sm:p-6 lg:p-7" : "p-6 sm:p-8 lg:p-10",
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--warm)_42%,transparent),transparent)]"
            />
            <div className="relative">
              <div
                className={cn(
                  "grid gap-4 xl:grid-cols-[minmax(0,1fr)_8.75rem] xl:items-end",
                  isAutomaticOperators && "gap-3",
                )}
              >
                <div className="max-w-[54rem]">
                  <p className="eyebrow">{section.familyGrid.eyebrow}</p>
                  <h2
                    className={cn(
                      "mt-3 max-w-[18ch] font-display leading-[0.94] tracking-[-0.058em] text-[var(--foreground)]",
                      isAutomaticOperators
                        ? "text-[clamp(1.95rem,3vw,3rem)]"
                        : "text-[clamp(2.35rem,4vw,4rem)]",
                    )}
                  >
                    {section.familyGrid.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-4 max-w-[48ch] text-[color-mix(in_srgb,var(--foreground)_76%,transparent)]",
                      isAutomaticOperators ? "text-[0.94rem] leading-6" : "text-[1rem] leading-7",
                    )}
                  >
                    {section.familyGrid.description}
                  </p>
                </div>

                <div className="xl:justify-self-end">
                  <div className="rounded-[1.05rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-right shadow-[var(--shadow-soft)]">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {routeCounterLabel}
                    </p>
                    <p className="mt-1 font-display text-[2rem] leading-none tracking-[-0.05em] text-[var(--foreground)]">
                      {familyCards.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className={cn("grid gap-4 xl:grid-cols-2", isAutomaticOperators ? "mt-5" : "mt-6")}>
                {primaryRouteCards.map((card, index) => (
                  <RouteCard
                    key={`${card.title}-${card.href ?? card.note ?? "static"}`}
                    card={card}
                    index={index}
                    variant="feature"
                    sectionSlug={section.slug}
                  />
                ))}
              </div>

              {secondaryRouteCards.length ? (
                <div
                  className={cn(
                    "mt-4 grid gap-4 md:grid-cols-2",
                    isAutomaticOperators ? "xl:grid-cols-2" : "xl:grid-cols-3",
                  )}
                >
                  {secondaryRouteCards.map((card, index) => (
                    <RouteCard
                      key={`${card.title}-${card.href ?? card.note ?? "static"}`}
                      card={card}
                      index={index + primaryRouteCards.length}
                      variant="compact"
                      sectionSlug={section.slug}
                    />
                  ))}
                </div>
              ) : null}

              {tertiaryRouteCards.length ? (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {tertiaryRouteCards.map((card, index) => (
                    <RouteCard
                      key={`${card.title}-${card.href ?? card.note ?? "static"}`}
                      card={card}
                      index={index + primaryRouteCards.length + secondaryRouteCards.length}
                      variant="compact"
                      sectionSlug={section.slug}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        </PageContainer>

        {section.functionMap ? (
          <PageContainer className="section-shell pt-0">
            <FunctionMapBlock section={section} />
          </PageContainer>
        ) : null}

        <PageContainer className="section-shell pt-0">
          <StructureBlock section={section} />
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <SupportBlock section={section} />
        </PageContainer>

        {section.faq ? (
          <PageContainer className="section-shell pt-0">
            <FaqBlock section={section} />
          </PageContainer>
        ) : null}
      </main>
    </>
  );
}
