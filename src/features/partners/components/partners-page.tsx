import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { buttonClassName } from "@/components/ui/button";
import {
  partnersHero,
  partnerBrands,
  projectSuccessStories,
  partnerCertifications,
} from "@/content/partners";
import { ProjectShowcase } from "./project-showcase";
import { CertificationsSection } from "./certifications-section";

// ── Brand identity themes ─────────────────────────────────────────────────────

const brandTheme: Record<string, { bg: string; accent: string; border: string }> = {
  "James Gibbons Format":       { bg: "#0c1728", accent: "#5487d6", border: "#1d3562" },
  "G·U Automatic":              { bg: "#0b1622", accent: "#42a5e0", border: "#163252" },
  "BKS":                        { bg: "#141210", accent: "#d4a030", border: "#2e2608" },
  "BB Locks":                   { bg: "#180d0d", accent: "#d44040", border: "#3a1010" },
  "D4E — Design 4 Excellence":  { bg: "#091610", accent: "#35c47e", border: "#0d3018" },
  "TURN":                       { bg: "#0a0f1e", accent: "#6888e6", border: "#182050" },
};

function getBrandTheme(name: string) {
  return brandTheme[name] ?? { bg: "#101520", accent: "#5487d6", border: "#1d3060" };
}

// ── Brand card sub-components ─────────────────────────────────────────────────

function BrandCardDefault({
  name, logo, eyebrow, origin, since, description, highlights, categories, href,
}: (typeof partnerBrands)[number]) {
  const t = getBrandTheme(name);
  return (
    <SmartLink
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
      style={{ background: t.bg, borderColor: t.border }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${t.accent}18 0%, transparent 65%)` }}
        aria-hidden="true"
      />
      <div
        className="relative flex flex-col items-center justify-center border-b px-6 py-9"
        style={{ borderColor: t.border, background: `linear-gradient(160deg, ${t.border}80 0%, transparent 60%)` }}
      >
        <div className="relative h-16 w-full max-w-[180px]">
          <Image src={logo} alt={name} fill sizes="190px" className="object-contain" />
        </div>
        <div className="mt-5 flex w-full items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: t.accent }}>
            {origin}
          </span>
          {since && <span className="text-[8px] text-white/30">Est. {since}</span>}
        </div>
      </div>
      <div className="relative flex flex-1 flex-col gap-4 p-5">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: t.accent }}>
            {eyebrow}
          </span>
          <h3 className="mt-1.5 text-[16px] font-bold leading-snug tracking-tight text-white">{name}</h3>
        </div>
        <p className="text-[12px] leading-[1.82] text-white/40">{description}</p>
        <ul className="flex flex-col gap-2.5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: t.accent }} />
              <span className="text-[11px] leading-[1.7] text-white/45">{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-1.5 border-t pt-3.5" style={{ borderColor: t.border }}>
          {categories.slice(0, 4).map((cat) => (
            <span
              key={cat}
              className="rounded-full border px-2.5 py-0.5 text-[9px] font-medium text-white/30"
              style={{ borderColor: `${t.accent}35` }}
            >
              {cat}
            </span>
          ))}
        </div>
        <div
          className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ color: t.accent }}
        >
          Explore range <ArrowUpRightIcon className="h-2.5 w-2.5" />
        </div>
      </div>
    </SmartLink>
  );
}

function BrandCardFeatured({
  name, logo, eyebrow, origin, since, description, highlights, categories, href,
}: (typeof partnerBrands)[number]) {
  const t = getBrandTheme(name);
  return (
    <SmartLink
      href={href}
      className="group relative flex h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_50px_rgba(0,0,0,0.55)]"
      style={{ background: t.bg, borderColor: t.border }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at 28% 50%, ${t.accent}15 0%, transparent 60%)` }}
        aria-hidden="true"
      />
      <div
        className="relative flex w-[40%] shrink-0 flex-col items-center justify-center border-r px-8 py-10"
        style={{ borderColor: t.border, background: `linear-gradient(160deg, ${t.border}90 0%, transparent 70%)` }}
      >
        <div className="absolute left-4 top-4 h-5 w-5 border-l border-t" style={{ borderColor: `${t.accent}30` }} aria-hidden="true" />
        <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r" style={{ borderColor: `${t.accent}30` }} aria-hidden="true" />
        <div className="relative z-10 h-20 w-full max-w-[210px]">
          <Image src={logo} alt={name} fill sizes="230px" className="object-contain" />
        </div>
        <div className="relative z-10 mt-8 flex flex-col items-center gap-1 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: t.accent }}>{origin}</span>
          {since && <span className="text-[8.5px] text-white/25">Est. {since}</span>}
        </div>
        <div
          className="absolute bottom-0 left-0 w-[2px]"
          style={{ background: `linear-gradient(to top, ${t.accent}60, transparent)`, height: "55%" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-5 p-8">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.30em]" style={{ color: t.accent }}>{eyebrow}</span>
          <h3 className="mt-2 font-display text-[24px] font-bold leading-snug tracking-[-0.025em] text-white">{name}</h3>
        </div>
        <p className="text-[13px] leading-[1.85] text-white/42">{description}</p>
        <ul className="flex flex-col gap-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: t.accent }} />
              <span className="text-[12px] leading-[1.72] text-white/50">{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: t.border }}>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <span key={cat} className="rounded-full border px-2.5 py-0.5 text-[9px] font-medium text-white/30" style={{ borderColor: `${t.accent}38` }}>
                {cat}
              </span>
            ))}
          </div>
          <span
            className="flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={{ color: t.accent }}
          >
            Explore <ArrowUpRightIcon className="h-2.5 w-2.5" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

function BrandCardHero({
  name, logo, eyebrow, origin, since, description, highlights, categories, href,
}: (typeof partnerBrands)[number]) {
  const t = getBrandTheme(name);
  return (
    <SmartLink
      href={href}
      className="group relative flex overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_60px_rgba(0,0,0,0.55)]"
      style={{ background: t.bg, borderColor: t.border }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at 14% 50%, ${t.accent}20 0%, transparent 55%)` }}
        aria-hidden="true"
      />
      <div
        className="relative flex w-[22%] shrink-0 flex-col items-center justify-center border-r px-6 py-10"
        style={{ borderColor: t.border, background: `linear-gradient(160deg, ${t.border}90 0%, transparent 80%)` }}
      >
        <div className="absolute left-4 top-4 h-5 w-5 border-l border-t" style={{ borderColor: `${t.accent}30` }} aria-hidden="true" />
        <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r" style={{ borderColor: `${t.accent}30` }} aria-hidden="true" />
        <div className="relative z-10 h-20 w-full max-w-[160px]">
          <Image src={logo} alt={name} fill sizes="180px" className="object-contain" />
        </div>
        <div className="relative z-10 mt-8 flex flex-col items-center gap-1 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: t.accent }}>{origin}</span>
          {since && <span className="text-[8.5px] text-white/25">Est. {since}</span>}
        </div>
        <div
          className="absolute bottom-0 left-0 w-[2px]"
          style={{ background: `linear-gradient(to top, ${t.accent}70, transparent)`, height: "50%" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-5 border-r p-8" style={{ borderColor: t.border }}>
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.30em]" style={{ color: t.accent }}>{eyebrow}</span>
          <h3 className="mt-2 font-display text-[22px] font-bold leading-snug tracking-[-0.025em] text-white">{name}</h3>
        </div>
        <p className="text-[13px] leading-[1.85] text-white/42">{description}</p>
        <ul className="flex flex-col gap-2.5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: t.accent }} />
              <span className="text-[12px] leading-[1.72] text-white/50">{h}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-[220px] shrink-0 flex-col gap-6 p-8">
        <div>
          <p className="mb-3 text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/25">Product Categories</p>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <span key={cat} className="flex items-center gap-2 text-[11px] text-white/45">
                <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: `${t.accent}70` }} />
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <span
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ borderColor: `${t.accent}45`, color: t.accent }}
          >
            Explore range <ArrowUpRightIcon className="h-2.5 w-2.5" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function PartnersPage() {
  const totalProjects = projectSuccessStories.reduce((acc, g) => acc + g.projects.length, 0);

  return (
    <main id="main-content">

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <PageContainer className="pt-5 sm:pt-6">
        <div className="relative min-h-[calc(72svh-5rem)] overflow-hidden rounded-[1.75rem] border border-white/[0.07]">
          <Image
            src={partnersHero.image}
            alt={partnersHero.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1520px"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,8,0.28)_0%,rgba(3,6,8,0.90)_100%)]" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[60%] bg-[linear-gradient(90deg,rgba(3,6,8,0.45),transparent)]" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-9 lg:p-12 xl:p-14">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-[7px] w-[7px] shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#86a2e6] opacity-55" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#95ade9]" />
              </span>
              <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] text-[#a4b9ec]">
                {partnersHero.eyebrow}
              </span>
            </div>

            <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.035em] text-white">
              {partnersHero.headline}
            </h1>
            <p className="mt-4 max-w-[54ch] text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.75] text-white/55">
              {partnersHero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/[0.09] pt-6">
              {partnerBrands.map((brand) => (
                <div key={brand.name} className="relative h-5 w-20 shrink-0 opacity-40">
                  <Image src={brand.logo} alt={brand.name} fill sizes="80px" className="object-contain object-left" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mt-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="grid divide-x divide-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {partnersHero.metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 text-center">
                <span className="font-display text-[clamp(1.3rem,2.5vw,1.9rem)] font-bold tracking-tight text-[var(--foreground)]">
                  {m.value}
                </span>
                <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ── 2. PARTNER BRANDS ────────────────────────────────────────────────── */}
      <PageContainer className="py-16 sm:py-20">
        <div className="mb-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Specification Partners
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)]">
              Brands built for architectural specification.
            </h2>
          </div>
          <p className="max-w-[44ch] text-[14px] leading-[1.75] text-[var(--muted-foreground)] lg:pb-0.5 lg:text-right">
            Every brand in TUR's network is selected for technical depth, certification standing and the ability to support complex project schedules.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BrandCardFeatured {...partnerBrands[0]} />
          </div>
          <BrandCardDefault {...partnerBrands[1]} />
          {partnerBrands.slice(2, 5).map((brand) => (
            <BrandCardDefault key={brand.name} {...brand} />
          ))}
          <div className="lg:col-span-3">
            <BrandCardHero {...partnerBrands[5]} />
          </div>
        </div>
      </PageContainer>

      {/* ── 3. PROJECT REFERENCES ────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)] bg-[var(--panel)]">
        <PageContainer className="py-16 sm:py-20">

          {/* Section header */}
          <div className="mb-10">
            <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Global Project References
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)]">
              {projectSuccessStories.length} countries &amp; regions.{" "}
              <span className="text-[var(--muted-foreground)]">{totalProjects}+ landmark projects.</span>
            </h2>
            <p className="mt-3 max-w-[62ch] text-[14px] leading-[1.8] text-[var(--muted-foreground)]">
              Select a country from the navigation to explore project references — from government buildings and commercial towers to airports, hospitals and landmark hospitality venues.
            </p>
          </div>

          {/* Interactive project showcase */}
          <ProjectShowcase />

        </PageContainer>
      </div>

      {/* ── 4. CERTIFICATIONS ────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)]">
        <PageContainer className="py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Certifications &amp; Compliance
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)]">
              ANSI · UL · CE · SKG.{" "}
              <span className="text-[var(--muted-foreground)]">Fully certified, globally specified.</span>
            </h2>
            <p className="mt-3 max-w-[62ch] text-[14px] leading-[1.8] text-[var(--muted-foreground)]">
              TUR product families carry independent third-party certification to both American (ANSI/UL) and European (CE/EN) standards — covering door hardware, closers, hinges and cylinders across the full architectural specification range.
            </p>
          </div>
          <CertificationsSection />
        </PageContainer>
      </div>

      {/* ── 5. CTA ───────────────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)] bg-[var(--background)]">
        <PageContainer className="py-16 sm:py-20">
          <div className="mx-auto max-w-[52ch] text-center">
            <p className="eyebrow">Project Inquiry</p>
            <h2 className="display-title mt-3 text-[var(--foreground)]">
              Discuss your project with TUR
            </h2>
            <p className="body-copy mx-auto mt-4 max-w-[44ch]">
              From early specification through supply and technical coordination — TUR supports architects, consultants and main contractors across the full project lifecycle.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <SmartLink
                href="/contact"
                className={buttonClassName()}
              >
                Start an Inquiry
                <ArrowUpRightIcon className="h-3 w-3" />
              </SmartLink>
              <SmartLink
                href="/downloads"
                className={buttonClassName("secondary")}
              >
                Download Company Profile
              </SmartLink>
            </div>
          </div>
        </PageContainer>
      </div>

    </main>
  );
}
