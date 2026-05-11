import Image from "next/image";
import type { BreadcrumbItem, CatalogCard, CatalogSection } from "@/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";
import { buttonClassName } from "@/components/ui/button";

type CatalogSectionLandingPageProps = {
  section: CatalogSection;
  familyCards: CatalogCard[];
  breadcrumbs?: BreadcrumbItem[];
};

// ── Family card — clean icon/text, no photo ──
function FamilyCard({ card, index }: { card: CatalogCard; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  const inner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-5 transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))] hover:shadow-[0_12px_36px_-16px_rgba(0,0,0,0.13)]">
      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-[1.25rem] bg-[var(--accent)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      {/* Header row: eyebrow + number */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[8.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
          {card.eyebrow ?? "Family"}
        </span>
        <span className="font-display text-[1.65rem] leading-none tracking-[-0.06em] text-[color-mix(in_srgb,var(--border)_90%,transparent)] transition-colors duration-300 group-hover:text-[color-mix(in_srgb,var(--accent)_22%,var(--border))]">
          {num}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3.5 text-[1.05rem] font-semibold leading-[1.18] tracking-[-0.025em] text-[var(--foreground)]">
        {card.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
        {card.description}
      </p>

      {/* Scope tag */}
      {card.scope ? (
        <p className="mt-4 rounded-[0.55rem] bg-[var(--panel)] px-3 py-1.5 text-[10.5px] font-medium leading-snug text-[var(--muted-foreground)]">
          {card.scope}
        </p>
      ) : card.note ? (
        <p className="mt-4 rounded-[0.55rem] bg-[var(--panel)] px-3 py-1.5 text-[10.5px] font-medium leading-snug text-[var(--muted-foreground)]">
          {card.note}
        </p>
      ) : null}

      {/* CTA row */}
      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-[12px] font-semibold tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {card.href ? (card.ctaLabel ?? "Explore Family") : "Available on request"}
        </span>
        {card.href ? (
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
        ) : null}
      </div>
    </div>
  );

  if (card.href) {
    return (
      <SmartLink href={card.href} className="block h-full">
        {inner}
      </SmartLink>
    );
  }

  return <article className="h-full">{inner}</article>;
}

// ── FAQ accordion item ──
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-[var(--border)] last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left">
        <span className="text-[0.9rem] font-medium leading-[1.52] tracking-[-0.018em] text-[var(--foreground)]">
          {question}
        </span>
        <span className="mt-0.5 flex h-[1.35rem] w-[1.35rem] shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-200 group-open:rotate-45 group-open:border-[var(--accent)] group-open:text-[var(--accent)]">
          <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="pb-5 pr-8 text-[13px] leading-[1.78] text-[var(--muted-foreground)]">
        {answer}
      </p>
    </details>
  );
}

// ── Breadcrumb + route hierarchy strip ──
function HierarchyStrip({ section }: { section: CatalogSection }) {
  const steps = [section.title, "Family", "Product Detail"];
  return (
    <div className="flex items-center gap-2 py-4">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span
            className={
              i === 0
                ? "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]"
                : "text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
            }
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <svg viewBox="0 0 12 12" fill="none" className="h-2 w-2 shrink-0 text-[var(--border)]">
              <path d="M3 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export function CatalogSectionLandingPage({
  breadcrumbs,
  familyCards,
  section,
}: CatalogSectionLandingPageProps) {
  return (
    <>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <main id="main-content" className="pb-28">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <PageContainer className="pt-10 sm:pt-14">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.75fr] lg:gap-8 xl:gap-10">

            {/* Left — text panel */}
            <div className="flex flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9 lg:p-10">
              {/* Eyebrow row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                  TUR Architectural
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Section Hub
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-5 font-display text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.91] tracking-[-0.065em] text-[var(--foreground)]">
                {section.title}
              </h1>

              {/* Separator */}
              <div className="my-6 h-px w-full bg-[var(--border)]" />

              {/* Description */}
              <p className="max-w-[40ch] text-[clamp(0.98rem,1.3vw,1.14rem)] leading-[1.62] text-[var(--muted-foreground)]">
                {section.description}
              </p>

              <p className="mt-4 max-w-[52ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)] opacity-80">
                {section.intro}
              </p>

              {/* Hierarchy strip */}
              <div className="my-6 h-px w-full bg-[var(--border)]" />
              <HierarchyStrip section={section} />
              <div className="mb-6 h-px w-full bg-[var(--border)]" />

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <SmartLink href={section.primaryCta.href} className={buttonClassName()}>
                  {section.primaryCta.label}
                </SmartLink>
                <SmartLink href={section.secondaryCta.href} className={buttonClassName("secondary")}>
                  {section.secondaryCta.label}
                </SmartLink>
              </div>

              {/* Highlights */}
              <div className="mt-7 flex flex-wrap gap-2">
                {section.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] lg:min-h-0">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(6,8,12,0.05)_0%,rgba(6,8,12,0.55)_100%)]" />

              {/* Frosted glass card */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-[1.1rem] border border-white/14 bg-[rgba(8,10,16,0.56)] p-4 backdrop-blur-[12px] sm:p-5">
                  <p className="text-[8.5px] font-semibold uppercase tracking-[0.28em] text-white/55">
                    {familyCards.length} Core {familyCards.length === 1 ? "Family" : "Families"}
                  </p>
                  <p className="mt-2 font-display text-[1.45rem] leading-[1.04] tracking-[-0.042em] text-white">
                    One clear entry point.
                  </p>
                  <p className="mt-2 text-[12px] leading-[1.64] text-white/68">
                    {section.organizationLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        {/* ════════════════════════════════════════
            FAMILY GRID
        ════════════════════════════════════════ */}
        <PageContainer className="pt-20 sm:pt-24">
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-4 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {section.familyGrid.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,3.1rem)] font-medium leading-[1.01] tracking-[-0.052em] text-[var(--foreground)]">
                {section.familyGrid.title}
              </h2>
              <p className="mt-3 max-w-[52ch] text-[0.92rem] leading-[1.72] text-[var(--muted-foreground)]">
                {section.familyGrid.description}
              </p>
            </div>
            {/* Count badge */}
            <div className="shrink-0 rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-center sm:text-right">
              <p className="font-display text-[2.6rem] leading-none tracking-[-0.065em] text-[var(--accent)]">
                {familyCards.length}
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Families
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {familyCards.map((card, i) => (
              <FamilyCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </PageContainer>

        {/* ════════════════════════════════════════
            FUNCTION / MOVEMENT MAP
        ════════════════════════════════════════ */}
        {section.functionMap ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {section.functionMap.eyebrow}
                  </p>
                  <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-medium leading-[1.03] tracking-[-0.05em] text-[var(--foreground)]">
                    {section.functionMap.title}
                  </h2>
                  <p className="mt-3 max-w-[54ch] text-[0.92rem] leading-[1.72] text-[var(--muted-foreground)]">
                    {section.functionMap.description}
                  </p>
                </div>
                {section.functionMap.note ? (
                  <p className="max-w-[24ch] rounded-[0.85rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[11.5px] leading-[1.62] text-[var(--muted-foreground)] lg:text-right">
                    {section.functionMap.note}
                  </p>
                ) : null}
              </div>

              {/* Items */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.functionMap.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5"
                  >
                    {/* Number bubble */}
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] text-[9.5px] font-bold text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-[1.66] text-[var(--muted-foreground)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        ) : null}

        {/* ════════════════════════════════════════
            FAQ
        ════════════════════════════════════════ */}
        {section.faq ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14 xl:gap-20">
              {/* Left — heading */}
              <div className="lg:sticky lg:top-[7rem] lg:self-start">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                  {section.faq.eyebrow}
                </p>
                <h2 className="font-display text-[clamp(1.65rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.048em] text-[var(--foreground)]">
                  {section.faq.title}
                </h2>
                <p className="mt-4 text-[0.9rem] leading-[1.72] text-[var(--muted-foreground)]">
                  {section.faq.description}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <SmartLink href={section.primaryCta.href} className={buttonClassName()}>
                    {section.primaryCta.label}
                  </SmartLink>
                  <SmartLink href={section.secondaryCta.href} className={buttonClassName("secondary")}>
                    {section.secondaryCta.label}
                  </SmartLink>
                </div>
              </div>

              {/* Right — accordion */}
              <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] px-6 sm:px-8">
                {section.faq.items.map((item) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          </PageContainer>
        ) : null}

        {/* ════════════════════════════════════════
            SUPPORT CTA BANNER
        ════════════════════════════════════════ */}
        <PageContainer className="pt-20 sm:pt-24">
          <div className="grid gap-8 overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-10">
            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Project Support
              </p>
              <h2 className="font-display text-[clamp(1.55rem,2.4vw,2.2rem)] font-medium leading-[1.06] tracking-[-0.042em] text-[var(--foreground)]">
                {section.supportTitle}
              </h2>
              <p className="mt-3 max-w-[58ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                {section.supportBody}
              </p>
              {section.supportSignals?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.supportSignals.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-3.5 py-1.5 text-[11px] font-semibold text-[var(--accent)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-col gap-3 lg:min-w-[15rem]">
              <SmartLink href={section.primaryCta.href} className={buttonClassName()}>
                {section.primaryCta.label}
              </SmartLink>
              <SmartLink href={section.secondaryCta.href} className={buttonClassName("secondary")}>
                {section.secondaryCta.label}
              </SmartLink>
            </div>
          </div>
        </PageContainer>

      </main>
    </>
  );
}
