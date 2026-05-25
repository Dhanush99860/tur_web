import Image from "next/image";
import { siteConfig, siteContact } from "@/content/site/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { SiteLogo } from "@/components/shared/site-logo";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { FooterNewsletterForm } from "@/features/footer/components/footer-newsletter-form";

// ── Data ────────────────────────────────────────────────────────────────────

const platformLinks = [
  { label: "Home", href: "/" },
  { label: "About TUR", href: "/about" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Downloads", href: "/downloads" },
  { label: "All Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const doorHardwareLinks = [
  { label: "Overview", href: "/door-hardware" },
  { label: "American Standard", href: "/door-hardware/american-standard" },
  { label: "European Ironmongery", href: "/door-hardware/european-ironmongery" },
  { label: "Glass Hardware", href: "/door-hardware/glass-hardware" },
  { label: "Access Control", href: "/door-hardware/access-control" },
  { label: "Sealing Systems", href: "/door-hardware/sealing-systems" },
  { label: "Master Key Systems", href: "/master-key-systems" },
];

const automaticOpsLinks = [
  { label: "Overview", href: "/automatic-operators" },
  { label: "Sliding Doors", href: "/automatic-operators/sliding-doors" },
  { label: "Revolving Doors", href: "/automatic-operators/revolving-doors" },
  { label: "Swing Door Drives", href: "/automatic-operators/swing-door-drives" },
  { label: "All Glass Systems", href: "/automatic-operators/all-glass-systems" },
  { label: "Controlled Access", href: "/automatic-operators/controlled-physical-access" },
  { label: "Sensors & Activation", href: "/automatic-operators/automatic-pulse-generators-and-sensors" },
];

const globalOffices = [
  { region: "Sharjah, UAE", isPrimary: true },
  { region: "Netherlands", isPrimary: false },
  { region: "United Kingdom", isPrimary: false },
  { region: "Sri Lanka", isPrimary: false },
  { region: "Middle East", isPrimary: false },
];

const partnerLogos = [
  { src: "/tur/site/logo-1-1.png", alt: "James Gibbons Format" },
  { src: "/tur/site/logo-1-2.png", alt: "G·U Automatic" },
  { src: "/tur/site/logo-1-3.png", alt: "BKS" },
  { src: "/tur/site/logo-1-4.png", alt: "BB Locks" },
  { src: "/tur/site/logo-1-5.png", alt: "D4E" },
  { src: "/tur/site/logo-1-6.png", alt: "TURN" },
];

const certBadges = ["ANSI", "GAI Member", "CE Marked", "SKG 2-Star", "ISO 9001"];

// ── Helpers ─────────────────────────────────────────────────────────────────

function LinkGroup({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      {/* p element — not an <a>, so text-white/28 applies directly */}
      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/28">
        {heading}
      </p>
      <ul className="mt-3.5 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {/*
              opacity-* instead of text-white/* because the global CSS rule
              `a:not(.button-base)...{ color: inherit }` has specificity (0,5,1)
              which beats Tailwind utility classes (0,1,0). With text-white on
              the <footer>, `inherit` resolves to white; opacity then controls
              visual weight without fighting the cascade.
            */}
            <SmartLink
              href={link.href}
              className="block text-[13px] opacity-50 transition-opacity duration-150 hover:opacity-100"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M5.6 8.5H9V19H5.6zm1.7-4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3.8 4.8h3.2v1.4h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.2 4.4 5.5V19h-3.4v-4.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V19h-3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0e18] text-white">
      <PageContainer>

        {/* ── Newsletter band ──────────────────────────────────────────────── */}
        <div className="grid items-center gap-6 border-b border-white/[0.07] py-8 sm:py-10 lg:grid-cols-[1fr_minmax(0,25rem)]">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/28">
              Stay Informed
            </p>
            <p className="mt-2 text-[clamp(1.05rem,1.7vw,1.35rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-white/80">
              Catalog updates, hardware guides and project resources from TUR.
            </p>
          </div>
          <FooterNewsletterForm inverted />
        </div>

        {/* ── Link grid ────────────────────────────────────────────────────── */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.65fr_1fr_1fr_1fr_1.2fr] lg:gap-7 xl:py-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLogo variant="white" className="h-[3.2rem] w-[8.5rem]" sizes="140px" />
            <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/25">
              Middle East FZC
            </p>

            <p className="mt-3.5 max-w-[26ch] text-[13px] leading-[1.75] text-white/42">
              Architectural door hardware and automatic entry systems — specification, supply and technical coordination since 1670.
            </p>

            {/* Global presence + social — compact horizontal layout */}
            <div className="mt-5 border-t border-white/[0.07] pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/25">
                  Global Presence
                </p>
                {/* Social icons inline with heading */}
                <div className="flex gap-1.5">
                  <SmartLink
                    href="/contact"
                    aria-label="LinkedIn"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 opacity-40 transition-opacity hover:opacity-80"
                  >
                    <LinkedInIcon />
                  </SmartLink>
                  <SmartLink
                    href="/contact"
                    aria-label="Instagram"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 opacity-40 transition-opacity hover:opacity-80"
                  >
                    <InstagramIcon />
                  </SmartLink>
                </div>
              </div>
              {/* Horizontal wrap — removes the tall vertical stack */}
              <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
                {globalOffices.map((office) => (
                  <div key={office.region} className="flex items-center gap-1.5">
                    <span className={`h-1 w-1 shrink-0 rounded-full ${office.isPrimary ? "bg-[var(--accent)]" : "bg-white/16"}`} />
                    <span className={`text-[11.5px] ${office.isPrimary ? "font-medium text-white/65" : "text-white/35"}`}>
                      {office.region}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <LinkGroup heading="Platform" links={platformLinks} />
          <LinkGroup heading="Door Hardware" links={doorHardwareLinks} />
          <LinkGroup heading="Automatic Operators" links={automaticOpsLinks} />

          {/* Contact column */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/28">
              Contact
            </p>
            <div className="mt-3.5 space-y-3">
              <p className="text-[13px] leading-[1.7] text-white/42">
                Office No. LV 32B,<br />
                Hamriyah Free Zone,<br />
                Sharjah, UAE.
              </p>
              <p className="text-[11px] text-white/22">
                Trade License 23473 / 23474
              </p>
              {/* Contact links use opacity for hierarchy — same cascade reason as link columns */}
              <SmartLink
                href={siteContact.phoneHref}
                className="block text-[13px] opacity-50 transition-opacity hover:opacity-90"
              >
                {siteConfig.phoneDisplay}
              </SmartLink>
              <SmartLink
                href={siteContact.emailHref}
                className="block text-[13px] opacity-50 transition-opacity hover:opacity-90"
              >
                {siteConfig.email}
              </SmartLink>
            </div>

            <SmartLink
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-white/12 px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.15em] opacity-50 transition-opacity hover:opacity-90"
            >
              Start an Inquiry
              <ArrowUpRightIcon className="h-2.5 w-2.5" />
            </SmartLink>
          </div>
        </div>

        {/* ── Partner logos ────────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] py-6">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white/22">
            Partner Brands
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="relative h-6 w-[4.8rem]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="80px"
                  className="object-contain object-left brightness-0 invert opacity-30 transition-opacity duration-200 hover:opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Legal bar ───────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {certBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 px-2.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/22"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </PageContainer>
    </footer>
  );
}
