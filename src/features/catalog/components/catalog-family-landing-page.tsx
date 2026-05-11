import Image from "next/image";
import type { BreadcrumbItem, CatalogCard, CatalogFamily } from "@/types";
import { catalogFamilies } from "@/content/catalog/categories";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";
import { buttonClassName } from "@/components/ui/button";

type CatalogFamilyLandingPageProps = {
  family: CatalogFamily;
  breadcrumbs?: BreadcrumbItem[];
};

// ── Card WITH image ──
function ImageCard({ card }: { card: CatalogCard }) {
  const isPrimary = card.priority !== "secondary";

  const inner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))] hover:shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[2.5px] origin-left scale-x-0 rounded-t-[1.25rem] bg-[var(--accent)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--panel)]">
        <Image
          src={card.image!}
          alt={card.imageAlt ?? card.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className={["object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]", card.imageClassName ?? ""].join(" ")}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(6,8,12,0.32)_100%)]" />
        <span className="absolute left-3 top-3 rounded-full border border-white/18 bg-[rgba(6,8,12,0.52)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {card.eyebrow ?? (isPrimary ? "Primary Route" : "Secondary Route")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1rem] font-semibold leading-[1.18] tracking-[-0.022em] text-[var(--foreground)]">
          {card.title}
        </h3>
        <p className="mt-2 flex-1 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
          {card.description}
        </p>
        {card.scope ? (
          <p className="mt-3.5 rounded-[0.5rem] bg-[var(--panel)] px-3 py-1.5 text-[10.5px] font-medium leading-snug text-[var(--muted-foreground)]">
            {card.scope}
          </p>
        ) : null}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="text-[12px] font-semibold tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
            {card.href ? (card.ctaLabel ?? "Explore Route") : "Available on request"}
          </span>
          {card.href ? (
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
          ) : null}
        </div>
      </div>
    </div>
  );

  if (card.href) return <SmartLink href={card.href} className="block h-full">{inner}</SmartLink>;
  return <article className="h-full">{inner}</article>;
}

// ── Text card (no image) ──
function TextCard({ card, index }: { card: CatalogCard; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const isPrimary = card.priority !== "secondary";

  const inner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-5 transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))] hover:shadow-[0_12px_36px_-16px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-[1.25rem] bg-[var(--accent)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-2">
        <span className={["text-[8.5px] font-bold uppercase tracking-[0.28em]", isPrimary ? "text-[var(--accent)]" : "text-[var(--muted-foreground)]"].join(" ")}>
          {card.eyebrow ?? (isPrimary ? "Primary Route" : "Secondary Route")}
        </span>
        <span className="font-display text-[1.65rem] leading-none tracking-[-0.06em] text-[color-mix(in_srgb,var(--border)_90%,transparent)] transition-colors duration-300 group-hover:text-[color-mix(in_srgb,var(--accent)_22%,var(--border))]">
          {num}
        </span>
      </div>
      <h3 className="mt-3.5 text-[1.02rem] font-semibold leading-[1.18] tracking-[-0.024em] text-[var(--foreground)]">
        {card.title}
      </h3>
      <p className="mt-2 flex-1 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
        {card.description}
      </p>
      {(card.scope ?? card.note) ? (
        <p className="mt-4 rounded-[0.5rem] bg-[var(--panel)] px-3 py-1.5 text-[10.5px] font-medium leading-snug text-[var(--muted-foreground)]">
          {card.scope ?? card.note}
        </p>
      ) : null}
      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-[12px] font-semibold tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {card.href ? (card.ctaLabel ?? "Explore Route") : "Available on request"}
        </span>
        {card.href ? (
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
        ) : null}
      </div>
    </div>
  );

  if (card.href) return <SmartLink href={card.href} className="block h-full">{inner}</SmartLink>;
  return <article className="h-full">{inner}</article>;
}

function FamilyCard({ card, index }: { card: CatalogCard; index: number }) {
  if (card.image) return <ImageCard card={card} />;
  return <TextCard card={card} index={index} />;
}

export function CatalogFamilyLandingPage({
  family,
  breadcrumbs,
}: CatalogFamilyLandingPageProps) {
  const sectionLabel = family.section === "door-hardware" ? "Door Hardware" : "Automatic Operators";
  const sectionHref = `/${family.section}`;
  const cardLabel = family.section === "door-hardware" ? "Routes" : "Products";
  const gridTitle = family.section === "door-hardware" ? `${family.title} Routes` : `${family.title} Products`;

  const relatedFamilies = (family.relatedFamilySlugs ?? [])
    .map((slug) => catalogFamilies.find((f) => f.slug === slug))
    .filter(Boolean) as CatalogFamily[];

  return (
    <>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <main id="main-content" className="pb-28">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <PageContainer className="pt-10 sm:pt-14">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.72fr] lg:gap-8 xl:gap-10">

            {/* Left — text panel */}
            <div className="flex flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9 lg:p-10">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <SmartLink href={sectionHref} className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] transition-opacity hover:opacity-70">
                  {sectionLabel}
                </SmartLink>
                <svg viewBox="0 0 12 12" fill="none" className="h-2 w-2 shrink-0 text-[var(--border)]">
                  <path d="M3 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  {family.title}
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.5rem,4.6vw,4.6rem)] font-medium leading-[0.91] tracking-[-0.065em] text-[var(--foreground)]">
                {family.title}
              </h1>
              <div className="my-6 h-px bg-[var(--border)]" />
              <p className="max-w-[40ch] text-[clamp(0.95rem,1.25vw,1.1rem)] leading-[1.64] text-[var(--muted-foreground)]">
                {family.description}
              </p>
              <p className="mt-4 max-w-[54ch] text-[0.89rem] leading-[1.76] text-[var(--muted-foreground)] opacity-80">
                {family.intro}
              </p>
              <div className="my-6 h-px bg-[var(--border)]" />
              <div className="flex flex-wrap gap-3">
                <SmartLink href={family.primaryCta.href} className={buttonClassName()}>
                  {family.primaryCta.label}
                </SmartLink>
                <SmartLink href={family.secondaryCta.href} className={buttonClassName("secondary")}>
                  {family.secondaryCta.label}
                </SmartLink>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {family.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] lg:min-h-0">
              <Image src={family.image} alt={family.imageAlt} fill priority sizes="(max-width: 1023px) 100vw, 38vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(6,8,12,0.04)_0%,rgba(6,8,12,0.62)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-[1.1rem] border border-white/14 bg-[rgba(8,10,16,0.58)] p-4 backdrop-blur-[12px] sm:p-5">
                  <div className="mb-3 flex items-center gap-4">
                    <div>
                      <p className="font-display text-[1.9rem] leading-none tracking-[-0.06em] text-white">{family.cards.length}</p>
                      <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">{cardLabel}</p>
                    </div>
                    <div className="h-8 w-px bg-white/14" />
                    <div>
                      <p className="font-display text-[1.9rem] leading-none tracking-[-0.06em] text-white">{family.highlights.length}</p>
                      <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Key Items</p>
                    </div>
                  </div>
                  <p className="text-[11.5px] leading-[1.58] text-white/65">{family.supportTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        {/* ══════════════════════════════════════
            ROUTES / PRODUCTS GRID
        ══════════════════════════════════════ */}
        <PageContainer className="pt-20 sm:pt-24">
          <div className="mb-10 flex flex-col gap-4 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {sectionLabel} &middot; {family.title}
              </p>
              <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
                {gridTitle}
              </h2>
            </div>
            <div className="shrink-0 rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-center sm:text-right">
              <p className="font-display text-[2.4rem] leading-none tracking-[-0.065em] text-[var(--accent)]">{family.cards.length}</p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{cardLabel}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {family.cards.map((card, i) => (
              <FamilyCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </PageContainer>

        {/* ══════════════════════════════════════
            APPLICATIONS
        ══════════════════════════════════════ */}
        {family.applications?.length ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="mb-10">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Applications &middot; {family.title}
              </p>
              <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
                Where {family.title} is Specified
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {family.applications.map((app, i) => (
                <div
                  key={app.title}
                  className="rounded-[1.1rem] border border-[var(--border)] bg-[var(--card)] p-5 transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]"
                >
                  <span className="font-display text-[1.55rem] leading-none tracking-[-0.06em] text-[color-mix(in_srgb,var(--accent)_22%,var(--border))]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[0.94rem] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </PageContainer>
        ) : null}

        {/* ══════════════════════════════════════
            KEY FEATURES
        ══════════════════════════════════════ */}
        {family.featurePoints?.length ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]">
              <div className="grid lg:grid-cols-2">
                {/* Left: heading */}
                <div className="border-b border-[var(--border)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                    Key Features
                  </p>
                  <h2 className="font-display text-[clamp(1.85rem,3vw,2.8rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
                    Why specify {family.title}
                  </h2>
                  <p className="mt-4 max-w-[38ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                    {family.description}
                  </p>
                </div>
                {/* Right: feature list */}
                <div className="p-7 sm:p-9 lg:p-10">
                  <ul className="flex flex-col gap-5">
                    {family.featurePoints.map((f) => (
                      <li key={f.title} className="flex gap-4">
                        <span className="mt-0.5 flex h-[1.2rem] w-[1.2rem] shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
                          <svg viewBox="0 0 10 10" fill="none" className="h-[9px] w-[9px]">
                            <path d="M1.5 5l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">
                            {f.title}
                          </p>
                          <p className="mt-0.5 text-[12.5px] leading-[1.7] text-[var(--muted-foreground)]">
                            {f.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </PageContainer>
        ) : null}

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        {family.faq?.length ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.65fr] lg:gap-16">
              {/* Left: sticky heading */}
              <div className="lg:sticky lg:top-[7rem] lg:self-start">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                  FAQ
                </p>
                <h2 className="font-display text-[clamp(1.85rem,3vw,2.8rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
                  Common questions
                </h2>
                <p className="mt-4 max-w-[32ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                  Answers to frequently asked questions about {family.title}.
                </p>
                <SmartLink
                  href={family.primaryCta.href}
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--accent)] transition-opacity hover:opacity-70"
                >
                  {family.primaryCta.label}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </SmartLink>
              </div>
              {/* Right: accordion */}
              <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)]">
                {family.faq.map((item, i) => (
                  <details
                    key={item.question}
                    className={["group px-6", i > 0 ? "border-t border-[var(--border)]" : ""].join(" ")}
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left">
                      <span className="text-[0.9rem] font-medium leading-[1.52] tracking-[-0.018em] text-[var(--foreground)]">
                        {item.question}
                      </span>
                      <span className="mt-0.5 flex h-[1.35rem] w-[1.35rem] shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-200 group-open:rotate-45 group-open:border-[var(--accent)] group-open:text-[var(--accent)]">
                        <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
                          <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-5 pr-8 text-[13px] leading-[1.78] text-[var(--muted-foreground)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </PageContainer>
        ) : null}

        {/* ══════════════════════════════════════
            RELATED FAMILIES
        ══════════════════════════════════════ */}
        {relatedFamilies.length > 0 ? (
          <PageContainer className="pt-20 sm:pt-24">
            <div className="mb-10 flex flex-col gap-4 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Continue Exploring
                </p>
                <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
                  Related Families
                </h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFamilies.map((rel) => (
                <SmartLink
                  key={rel.slug}
                  href={`/${rel.section}/${rel.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))] hover:shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.imageAlt}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(6,8,12,0.28)_100%)]" />
                      <span className="absolute left-3 top-3 rounded-full border border-white/18 bg-[rgba(6,8,12,0.52)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {rel.section === "door-hardware" ? "Door Hardware" : "Automatic Operators"}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[1rem] font-semibold leading-snug tracking-[-0.022em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                        {rel.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[12.5px] leading-[1.68] text-[var(--muted-foreground)]">
                        {rel.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Explore family
                        <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </SmartLink>
              ))}
            </div>
          </PageContainer>
        ) : null}

        {/* ══════════════════════════════════════
            SUPPORT BANNER
        ══════════════════════════════════════ */}
        <PageContainer className="pt-20 sm:pt-24">
          <div className="grid gap-8 overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-10">
            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Project Support
              </p>
              <h2 className="font-display text-[clamp(1.5rem,2.3vw,2.1rem)] font-medium leading-[1.06] tracking-[-0.04em] text-[var(--foreground)]">
                {family.supportTitle}
              </h2>
              <p className="mt-3 max-w-[58ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                {family.supportBody}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {family.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-3.5 py-1.5 text-[11px] font-semibold text-[var(--accent)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 lg:min-w-[15rem]">
              <SmartLink href={family.primaryCta.href} className={buttonClassName()}>
                {family.primaryCta.label}
              </SmartLink>
              <SmartLink href={family.secondaryCta.href} className={buttonClassName("secondary")}>
                {family.secondaryCta.label}
              </SmartLink>
            </div>
          </div>
        </PageContainer>

      </main>
    </>
  );
}
