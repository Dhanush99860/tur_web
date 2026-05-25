import Image from "next/image";
import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "@/components/shared/icons";
import {
  contactHero,
  contactMethods,
  contactInquiryTypes,
  contactOffices,
  contactDownloads,
  siteConfig,
  siteContact,
} from "@/content/contact";

export function ContactPage() {
  const primaryOffice = contactOffices.find((o) => o.isPrimary)!;
  const secondaryOffices = contactOffices.filter((o) => !o.isPrimary);

  return (
    <main id="main-content">

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <PageContainer className="pt-5 sm:pt-6">
        <div className="relative min-h-[72svh] overflow-hidden rounded-[1.75rem] border border-white/[0.07]">
          <Image
            src={contactHero.image}
            alt={contactHero.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1520px"
            className="object-cover object-center brightness-90"
          />

          {/* Layered dark overlays for depth */}
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(168deg,rgba(3,6,8,0.10)_0%,rgba(3,6,8,0.78)_55%,rgba(3,6,8,0.96)_100%)]" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[70%] bg-[linear-gradient(90deg,rgba(3,6,8,0.62),transparent)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(3,6,8,0.88),transparent)]" />

          {/* Top hairline highlight */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14)_35%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.14)_65%,transparent)]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-10 lg:p-12 xl:p-14">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-[7px] w-[7px] shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#86a2e6] opacity-55" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#95ade9]" />
              </span>
              <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] text-[#a4b9ec]">
                {contactHero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2.1rem,3.8vw,3.7rem)] font-semibold leading-[1.03] tracking-[-0.046em] text-white">
              {contactHero.headline}
            </h1>
            <p className="mt-4 max-w-[52rem] text-[13.5px] leading-[1.85] text-white/52">
              {contactHero.description}
            </p>

            {/* Quick-contact chips */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {contactMethods.map((method) =>
                method.href ? (
                  <SmartLink
                    key={method.label}
                    href={method.href}
                    className="button-link group flex items-center gap-2.5 rounded-full border border-white/16 bg-white/[0.08] px-4 py-2.5 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.14]"
                  >
                    <span className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/40">{method.label}</span>
                    <span className="h-3 w-px bg-white/15" />
                    <span className="text-[12.5px] font-semibold text-white/85">{method.value}</span>
                    <ArrowUpRightIcon className="h-2.5 w-2.5 text-white/35 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </SmartLink>
                ) : (
                  <div key={method.label} className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5">
                    <span className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/35">{method.label}</span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="text-[12.5px] font-semibold text-white/62">{method.value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ── 2. SPLIT PANEL — DARK INFO + FORM ───────────────────────────────── */}
      <PageContainer className="py-10 sm:py-14">
        <div className="overflow-hidden rounded-[1.75rem] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] shadow-[0_40px_80px_-36px_rgba(8,12,18,0.22)]">
          <div className="grid xl:grid-cols-[0.80fr_1.20fr]">

            {/* ── Left: dark info panel ── */}
            <div className="flex flex-col bg-[#0b0e18] p-7 sm:p-9 xl:p-10">

              {/* Eyebrow + heading */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#4f72c4]">
                  Project Inquiry
                </p>
                <h2 className="mt-4 max-w-[24ch] font-display text-[clamp(1.45rem,2.4vw,2rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                  Share your scope — TUR will route the request correctly.
                </h2>
                <p className="mt-4 max-w-[38ch] text-[13px] leading-[1.85] text-white/42">
                  For commercial, hospitality, healthcare and specification-led projects. Include the project type, product families and timeline.
                </p>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Inquiry types list */}
              <div className="flex-1">
                <p className="text-[8.5px] font-bold uppercase tracking-[0.26em] text-white/25">
                  We handle inquiries for
                </p>
                <ul className="mt-4 space-y-2.5">
                  {contactInquiryTypes.map((type) => (
                    <li key={type} className="flex items-start gap-2.5">
                      <span className="mt-[5.5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3055A6] opacity-75" />
                      <span className="text-[12.5px] leading-[1.65] text-white/50">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Direct contact */}
              <div>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.26em] text-white/25">
                  Direct contact
                </p>
                <div className="mt-4 space-y-3.5">
                  <a
                    href={siteContact.emailHref}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-white/[0.11]">
                      <MailIcon className="h-3.5 w-3.5 text-[#5b84d6]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-white/25">Email</p>
                      <p className="truncate text-[12.5px] font-medium text-white/65 transition-colors group-hover:text-white/85">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                  <a
                    href={siteContact.phoneHref}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-white/[0.11]">
                      <PhoneIcon className="h-3.5 w-3.5 text-[#5b84d6]" />
                    </span>
                    <div>
                      <p className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-white/25">Phone</p>
                      <p className="text-[12.5px] font-medium text-white/65 transition-colors group-hover:text-white/85">
                        {siteConfig.phoneDisplay}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Office address */}
                <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                  <p className="text-[10.5px] font-semibold text-white/35">TUR Middle East FZC</p>
                  <p className="mt-1.5 text-[11.5px] leading-[1.65] text-white/25">{primaryOffice.address}</p>
                  <p className="mt-1.5 text-[10px] text-white/18">{primaryOffice.note}</p>
                </div>
              </div>
            </div>

            {/* ── Right: form panel ── */}
            <div className="bg-[color-mix(in_srgb,white_97%,var(--background))] p-6 sm:p-8 xl:p-10">
              <ContactInquiryForm
                embedded
                title="Send your project inquiry"
                description="Complete the form and TUR will route the request to the right contact point."
                subject="Project Inquiry — Contact Page"
                submitLabel="Send Inquiry"
              />
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ── 3. REGIONAL OFFICES ──────────────────────────────────────────────── */}
      <PageContainer className="pb-16 sm:pb-20">
        <div className="border-t border-[var(--border)] pt-10">

          {/* Section header */}
          <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Global Presence
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-[1.07] tracking-[-0.044em] text-[var(--foreground)]">
                Six offices. One specification route.
              </h2>
            </div>
            <p className="max-w-[36ch] text-[13.5px] leading-[1.8] text-[var(--muted-foreground)] sm:pb-1 sm:text-right">
              Regional offices and partner entities across the Middle East, Europe, Asia and beyond.
            </p>
          </div>

          {/* HQ — featured card */}
          <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_5%,var(--card))]">
            <div className="grid md:grid-cols-[1fr_auto]">

              {/* Left: info */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Headquarters
                  </span>
                  <span className="text-[10px] text-[var(--muted-foreground)] opacity-60">{primaryOffice.note}</span>
                </div>

                {/* Flag badge + name */}
                <div className="mt-5 flex items-start gap-4">
                  <div className="shrink-0 overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--border)_120%,transparent)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                    <Image
                      src={`https://flagcdn.com/w160/${primaryOffice.countryCode.toLowerCase()}.png`}
                      alt={`${primaryOffice.region} flag`}
                      width={96}
                      height={64}
                      className="block"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16.5px] font-semibold leading-snug tracking-[-0.015em] text-[var(--foreground)]">
                      {primaryOffice.name}
                    </h3>
                    <p className="mt-1 text-[12.5px] font-semibold text-[var(--accent)]">{primaryOffice.region}</p>
                    <p className="mt-2.5 text-[13px] leading-[1.7] text-[var(--muted-foreground)]">{primaryOffice.address}</p>
                  </div>
                </div>
              </div>

              {/* Right: contact */}
              <div className="flex flex-col justify-center gap-4 border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] p-6 md:min-w-[17rem] md:border-l md:border-t-0 md:p-8">
                <p className="text-[8.5px] font-bold uppercase tracking-[0.24em] text-[var(--muted-foreground)] opacity-60">
                  Direct contact
                </p>
                {"emailHref" in primaryOffice && (
                  <a href={primaryOffice.emailHref as string} className="group flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] transition group-hover:bg-[color-mix(in_srgb,var(--accent)_18%,transparent)]">
                      <MailIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
                    </span>
                    <span className="text-[12.5px] text-[var(--muted-foreground)] transition group-hover:text-[var(--foreground)]">
                      {primaryOffice.email as string}
                    </span>
                  </a>
                )}
                {"phoneHref" in primaryOffice && (
                  <a href={primaryOffice.phoneHref as string} className="group flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] transition group-hover:bg-[color-mix(in_srgb,var(--accent)_18%,transparent)]">
                      <PhoneIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
                    </span>
                    <span className="text-[12.5px] text-[var(--muted-foreground)] transition group-hover:text-[var(--foreground)]">
                      {primaryOffice.phone as string}
                    </span>
                  </a>
                )}
                <SmartLink
                  href={siteContact.emailHref}
                  className="button-link mt-1 inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--accent)] px-4 py-2 text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
                >
                  Send an Inquiry
                  <ArrowUpRightIcon className="h-2.5 w-2.5" />
                </SmartLink>
              </div>
            </div>
          </div>

          {/* Secondary offices — ISO watermark + flag badge cards */}
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {secondaryOffices.map((office) => {
              const code = office.countryCode;
              return (
                <div
                  key={office.name}
                  className="flex flex-col overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] p-4 transition-all hover:border-[color-mix(in_srgb,var(--border)_160%,transparent)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.10)] xl:p-5"
                >
                  {/* Large ISO watermark + flag badge */}
                  <div className="flex items-center justify-between">
                    <span className="select-none font-mono text-[2.25rem] font-black leading-none tracking-tight text-[color-mix(in_srgb,var(--foreground)_7%,transparent)]">
                      {code}
                    </span>
                    <div className="overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--border)_100%,transparent)] shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
                      <Image
                        src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
                        alt={`${office.region} flag`}
                        width={54}
                        height={36}
                        className="block"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-3.5 h-px bg-[color-mix(in_srgb,var(--border)_80%,transparent)]" />

                  {/* Info */}
                  <h3 className="text-[12.5px] font-semibold leading-snug text-[var(--foreground)]">
                    {office.name}
                  </h3>
                  <p className="mt-0.5 text-[10.5px] font-semibold text-[var(--accent)]">{office.region}</p>
                  <p className="mt-2 text-[11px] leading-[1.65] text-[var(--muted-foreground)]">{office.address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>

      {/* ── 4. DARK CLOSE — RESOURCES ────────────────────────────────────────── */}
      <section className="bg-[#0b0e18]">
        <PageContainer className="py-14 sm:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Resources
              </p>
              <h2 className="mt-3 max-w-[32ch] font-display text-[clamp(1.4rem,2.5vw,2rem)] font-semibold leading-[1.1] tracking-[-0.042em] text-white/82">
                Review the company profile and product catalog before submitting an inquiry.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[13.5px] leading-[1.8] text-white/35">
                The TUR company profile covers the full hardware and automatic entry systems offer, partner brands and project scope.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 md:items-end">
              {contactDownloads.map((dl) => (
                <SmartLink
                  key={dl.href}
                  href={dl.href}
                  className="button-link inline-flex items-center gap-2.5 rounded-xl border border-white/14 bg-white/[0.07] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 transition-all hover:border-white/24 hover:bg-white/[0.12] hover:text-white"
                >
                  {dl.label}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </SmartLink>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

    </main>
  );
}
