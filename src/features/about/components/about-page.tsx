import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon, PhoneIcon, MailIcon, LinkedInIcon } from "@/components/shared/icons";
import {
  aboutHero,
  aboutMission,
  aboutHeritage,
  aboutMilestones,
  aboutPlatforms,
  aboutServices,
  aboutTeam,
  aboutOffices,
  aboutPartners,
  aboutCertifications,
} from "@/content/about";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export function AboutPage() {
  const primaryOffices = aboutOffices.filter((o) => o.isPrimary);
  const secondaryOffices = aboutOffices.filter((o) => !o.isPrimary);

  return (
    <main id="main-content">

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <PageContainer className="pt-5 sm:pt-6">
        <div className="relative min-h-[calc(88svh-5rem)] overflow-hidden rounded-[1.75rem] border border-white/[0.07]">
          <Image
            src={aboutHero.image}
            alt={aboutHero.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1520px"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,8,0.32)_0%,rgba(3,6,8,0.88)_100%)]" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[60%] bg-[linear-gradient(90deg,rgba(3,6,8,0.38),transparent)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10)_30%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.10)_70%,transparent)]" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-9 lg:p-12 xl:p-14">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-[7px] w-[7px] shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#86a2e6] opacity-55" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#95ade9]" />
              </span>
              <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] text-[#a4b9ec]">
                {aboutHero.eyebrow}
              </span>
            </div>

            <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.048em] text-white">
              {aboutHero.headline}
            </h1>
            <p className="mt-4 max-w-[52rem] text-[13.5px] leading-[1.85] text-white/60">
              {aboutHero.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SmartLink
                href={aboutHero.primaryCta.href}
                className="button-link inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-900 shadow-[0_8px_24px_-6px_rgba(255,255,255,0.28)] transition-all duration-300 hover:bg-white/90"
              >
                {aboutHero.primaryCta.label}
                <ArrowUpRightIcon className="h-3 w-3" />
              </SmartLink>
              <SmartLink
                href={aboutHero.secondaryCta.href}
                className="button-link inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/16"
              >
                {aboutHero.secondaryCta.label}
              </SmartLink>
            </div>

            {/* Metrics strip */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.09] pt-6">
              {aboutHero.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <span className="font-display text-[1.6rem] font-semibold leading-none tracking-[-0.04em] text-white">
                    {m.value}
                  </span>
                  <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-white/38">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ── 2. BRAND STATEMENT ───────────────────────────────────────────────── */}
      <PageContainer className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[62rem] text-center">
          <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            Our Position
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-semibold leading-[1.06] tracking-[-0.044em] text-[var(--foreground)]">
            {aboutMission.statement}
          </h2>
          <p className="mx-auto mt-6 max-w-[52rem] text-[16px] leading-[1.85] text-[color-mix(in_srgb,var(--foreground)_68%,transparent)]">
            {aboutMission.description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {aboutMission.sectors.map((sector, i) => (
            <span key={sector} className="flex items-center gap-2.5">
              {i > 0 && (
                <span className="h-1 w-1 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--border)_160%,transparent)]" />
              )}
              <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[11.5px] font-medium tracking-[-0.01em] text-[var(--muted-foreground)]">
                {sector}
              </span>
            </span>
          ))}
        </div>
      </PageContainer>

      {/* ── 3. HERITAGE ──────────────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)]">
          <div className="grid xl:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col justify-between bg-[#0b0e18] p-8 sm:p-10 xl:p-14">
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[#86a2e6]">
                  {aboutHeritage.eyebrow}
                </p>
                <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-white">
                  {aboutHeritage.headline}
                </h2>
                <div className="mt-7 space-y-5">
                  {aboutHeritage.body.map((para, i) => (
                    <p key={i} className="text-[14px] leading-[1.85] text-white/50">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-10 inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5">
                <div className="relative h-5 w-16 shrink-0">
                  <Image src="/tur/site/logo-1-1.png" alt="James Gibbons Format" fill sizes="64px" className="object-contain object-left brightness-0 invert opacity-60" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Heritage Partner since 1670
                </span>
              </div>
            </div>
            <div className="relative min-h-[22rem] sm:min-h-[28rem] xl:min-h-0">
              <Image src={aboutHeritage.image} alt={aboutHeritage.imageAlt} fill sizes="(max-width: 1279px) 100vw, 54vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(270deg,transparent_55%,rgba(11,14,24,0.55)_100%)] xl:block" />
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ── 4. KEY MILESTONES ────────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="border-t border-[var(--border)] pt-10">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Key Milestones
              </p>
              <h2 className="mt-4 max-w-[32ch] font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                From first product to UL certification — 2019 to 2025.
              </h2>
            </div>
            <p className="shrink-0 text-[11.5px] text-[var(--muted-foreground)] sm:pb-1">
              7 milestones &nbsp;·&nbsp; 2019 – 2025
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aboutMilestones.map((m) => {
              const isHighlight = m.year === "2023" || m.year === "2025";
              return (
                <div
                  key={m.year}
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-2xl border p-5 lg:p-6",
                    isHighlight
                      ? "border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_5%,var(--card))]"
                      : "border-[var(--border)] bg-[var(--card)]"
                  )}
                >
                  {/* Watermark year */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 -top-2 select-none font-display text-[5.5rem] font-bold leading-none tracking-[-0.04em] text-[var(--foreground)] opacity-[0.04]"
                  >
                    {m.year}
                  </span>

                  {/* Year badge */}
                  <span
                    className={cn(
                      "self-start rounded-full px-3 py-1 font-mono text-[9.5px] font-bold tracking-[0.08em]",
                      isHighlight
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] text-[var(--accent)]"
                    )}
                  >
                    {m.year}
                  </span>

                  {/* Divider */}
                  <div
                    className={cn(
                      "my-4 h-px",
                      isHighlight
                        ? "bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]"
                        : "bg-[var(--border)]"
                    )}
                  />

                  {/* Event */}
                  <p className="text-[12.5px] leading-[1.74] text-[var(--muted-foreground)]">
                    {m.event}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>

      {/* ── 5. PLATFORMS ─────────────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="border-t border-[var(--border)] pt-10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">What We Offer</p>
              <h2 className="mt-4 max-w-[26ch] font-display text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.06] tracking-[-0.044em] text-[var(--foreground)]">
                Four platforms. One coordinated project route.
              </h2>
            </div>
            <p className="max-w-[38ch] text-[14px] leading-[1.8] text-[var(--muted-foreground)] lg:pb-1 lg:text-right">
              Every opening, every system — specified, coordinated and supplied through a single technical team.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aboutPlatforms.map((platform) => (
              <SmartLink
                key={platform.href}
                href={platform.href}
                className="button-link group flex flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent)_60%,transparent)] hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={platform.image} alt={platform.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.38)_100%)]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{platform.eyebrow}</p>
                  <h3 className="mt-2 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">{platform.title}</h3>
                  <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.7] text-[var(--muted-foreground)]">{platform.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {platform.cta}
                    <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ── 6. TECHNICAL SERVICES ────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)]">
          <div className="grid xl:grid-cols-[1.2fr_0.9fr]">
            <div className="p-8 sm:p-10 xl:p-12">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Technical Services</p>
              <h2 className="mt-4 max-w-[24ch] font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                Coordination from specification to supply.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.8] text-[var(--muted-foreground)]">
                TUR operates as a single technical contact for all door hardware and automatic entry systems — supporting architects, consultants and main contractors from early specification through to site delivery.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {aboutServices.map((service, i) => (
                  <div key={service.title} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] font-mono text-[10px] font-bold text-[var(--accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[13.5px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">{service.title}</h3>
                    </div>
                    <p className="pl-10 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">{service.description}</p>
                  </div>
                ))}
              </div>
              <SmartLink
                href="/contact"
                className="button-link mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
              >
                Request Project Support
                <ArrowUpRightIcon className="h-3 w-3" />
              </SmartLink>
            </div>
            <div className="relative min-h-[18rem] border-t border-[color-mix(in_srgb,var(--border)_80%,transparent)] xl:border-l xl:border-t-0">
              <Image src="/tur/home/project-1.jpg" alt="TUR project coordination and technical services" fill sizes="(max-width: 1279px) 100vw, 40vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.20))]" />
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ── 7. LEADERSHIP TEAM ───────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="border-t border-[var(--border)] pt-10">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Leadership</p>
              <h2 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                The team behind TUR.
              </h2>
            </div>
            <p className="text-[12px] text-[var(--muted-foreground)] sm:pb-1">
              100+ years combined experience
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {aboutTeam.map((member) => {
              const initials = getInitials(member.name);
              return (
                <div
                  key={member.name}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]"
                >
                  {/* Top bar accent on hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 rounded-t-2xl bg-[var(--accent)] transition-transform duration-400 group-hover:scale-x-100" />

                  {/* Header row */}
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#0b0e18]">
                      {member.photo ? (
                        <Image src={member.photo} alt={member.name} fill sizes="44px" className="object-cover object-top" />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center font-display text-sm font-semibold" style={{ color: "#86a2e6" }}>
                          {initials}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[13.5px] font-semibold tracking-[-0.018em] text-[var(--foreground)]">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={member.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-200 hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                    >
                      <LinkedInIcon className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Divider with entity */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-px flex-1 bg-[var(--border)]" />
                    <p className="shrink-0 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                      {member.entity}
                    </p>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>

                  {/* Bio */}
                  <p className="line-clamp-3 text-[12px] leading-[1.72] text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]">
                    {member.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>

      {/* ── 8. GLOBAL PRESENCE ───────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="border-t border-[var(--border)] pt-10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Global Presence</p>
              <h2 className="mt-4 max-w-[28ch] font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                Seven offices. One coordinated network.
              </h2>
            </div>
            <SmartLink
              href="/contact"
              className="button-link self-end inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
            >
              Contact a Regional Office
              <ArrowUpRightIcon className="h-3 w-3" />
            </SmartLink>
          </div>

          {/* Primary office — HQ */}
          {primaryOffices.map((office) => (
            <div
              key={office.name}
              className="mt-8 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_5%,var(--card))]"
            >
              <div className="grid items-start gap-6 p-6 sm:grid-cols-[1fr_auto] xl:p-7">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      Headquarters
                    </span>
                  </div>
                  <h3 className="mt-3 text-[16px] font-semibold tracking-[-0.015em] text-[var(--foreground)]">{office.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold text-[var(--accent)]">{office.region}</p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[var(--muted-foreground)]">{office.address}</p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end sm:border-l sm:border-[color-mix(in_srgb,var(--border)_60%,transparent)] sm:pl-6">
                  {office.phoneHref && (
                    <a href={office.phoneHref} className="flex items-center gap-2 text-[12.5px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
                      <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      {office.phone}
                    </a>
                  )}
                  {office.emailHref && (
                    <a href={office.emailHref} className="flex items-center gap-2 text-[12.5px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
                      <MailIcon className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      {office.email}
                    </a>
                  )}
                  <SmartLink
                    href="/contact"
                    className="button-link mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)] px-3.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                  >
                    Get in Touch
                    <ArrowUpRightIcon className="h-2.5 w-2.5" />
                  </SmartLink>
                </div>
              </div>
            </div>
          ))}

          {/* Secondary offices */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryOffices.map((office) => (
              <div
                key={office.name}
                className="rounded-xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] p-4 xl:p-5"
              >
                <span className="flex h-1.5 w-1.5 rounded-full bg-[color-mix(in_srgb,var(--border)_200%,transparent)]" />
                <h3 className="mt-2.5 text-[12.5px] font-semibold leading-snug tracking-[-0.01em] text-[var(--foreground)]">
                  {office.name}
                </h3>
                <p className="mt-0.5 text-[10.5px] font-semibold text-[var(--accent)]">{office.region}</p>
                <p className="mt-1.5 text-[11px] leading-[1.65] text-[var(--muted-foreground)]">{office.address}</p>
                {"phone" in office && office.phone && (
                  <a
                    href={`tel:${(office.phone as string).replace(/\s/g, "")}`}
                    className="mt-2 flex items-center gap-1.5 text-[10.5px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <PhoneIcon className="h-3 w-3 shrink-0 text-[var(--accent)]" />
                    {office.phone as string}
                  </a>
                )}
                {"email" in office && office.email && (
                  <a
                    href={`mailto:${office.email as string}`}
                    className="mt-1 flex items-center gap-1.5 text-[10.5px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <MailIcon className="h-3 w-3 shrink-0 text-[var(--accent)]" />
                    {office.email as string}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ── 9. PARTNER BRANDS ────────────────────────────────────────────────── */}
      <section className="bg-[var(--background)]">
        <PageContainer className="py-16 sm:py-20">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Partner Brands</p>
              <h2 className="mt-4 max-w-[28ch] font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                A curated portfolio of specification-grade brands.
              </h2>
            </div>
            <p className="max-w-[36ch] text-[13.5px] leading-[1.8] text-[var(--muted-foreground)] lg:pb-1 lg:text-right">
              Every brand is selected for product depth, specification credibility and project performance.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPartners.map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]"
              >
                <div className="relative h-8 w-28">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="112px"
                    className="object-contain object-left opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-[13.5px] font-semibold text-[var(--foreground)]">{partner.name}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.72] text-[var(--muted-foreground)]">{partner.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {partner.productCategories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── 10. CERTIFICATIONS + CTA ─────────────────────────────────────────── */}
      <section className="bg-[var(--background)]">
        <PageContainer className="pb-16 sm:pb-20">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                  Standards &amp; Certifications
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {aboutCertifications.map((cert) => (
                    <div
                      key={cert.label}
                      className="flex flex-col gap-0.5 rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-center"
                    >
                      <span className="text-[11px] font-bold text-[var(--foreground)]">{cert.label}</span>
                      <span className="text-[9px] text-[var(--muted-foreground)]">{cert.description}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-[52ch] text-[13.5px] leading-[1.8] text-[var(--muted-foreground)]">
                  TUR product families are certified to ANSI, UL 2025 (Door Hinges R41844, Single-point Locks R41836, Fire Door Closers R40953), CE, Intertek, SKG 2-Star, Warrington and TÜV/DIN EN 1303 standards — with technical coordination aligned to regional compliance and project requirements.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 lg:items-end">
                <SmartLink
                  href="/company_profile.pdf"
                  className="button-link inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
                >
                  Download Company Profile
                  <ArrowUpRightIcon className="h-3 w-3" />
                </SmartLink>
                <SmartLink
                  href="/contact"
                  className="button-link inline-flex items-center gap-2 rounded-xl bg-[#3055A6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
                >
                  Start a Project Inquiry
                  <ArrowUpRightIcon className="h-3 w-3" />
                </SmartLink>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

    </main>
  );
}
