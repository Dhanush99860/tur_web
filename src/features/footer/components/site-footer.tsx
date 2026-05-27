import { siteConfig, siteContact } from "@/content/site/site-config";
import { siteOffices } from "@/content/site/offices";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { SiteLogo } from "@/components/shared/site-logo";
import { ArrowRightIcon } from "@/components/shared/icons";

// ── Data ─────────────────────────────────────────────────────────────────────

const platformLinks = [
  { label: "Home", href: "/" },
  { label: "About TUR", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Door Hardware", href: "/door-hardware" },
  { label: "Automatic Operators", href: "/automatic-operators" },
  { label: "Master Key Systems", href: "/master-key-systems" },
  { label: "All Products", href: "/products" },
];

const doorHardwareLinks = [
  { label: "American Standard", href: "/door-hardware/american-standard" },
  { label: "European Ironmongery", href: "/door-hardware/european-ironmongery" },
  { label: "Glass Hardware", href: "/door-hardware/glass-hardware" },
  { label: "Access Control", href: "/door-hardware/access-control" },
  { label: "Sealing Systems", href: "/door-hardware/sealing-systems" },
];

const resourceLinks = [
  { label: "Company Profile", href: "/company_profile.pdf" },
  { label: "American Std. Catalogue", href: "/downloads/tur-american-standard-2024.pdf" },
  { label: "European Std. Catalogue", href: "/downloads/tur-european-standard-2025.pdf" },
  { label: "Request Technical Docs", href: "/contact" },
  { label: "Hardware Specification", href: "/contact" },
  { label: "All Downloads", href: "/downloads" },
];

const offices = siteOffices.map((o) => ({ label: o.region, primary: o.isPrimary }));

// ── Icons ─────────────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M5.6 8.5H9V19H5.6zm1.7-4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3.8 4.8h3.2v1.4h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.2 4.4 5.5V19h-3.4v-4.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V19h-3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ── Link column ───────────────────────────────────────────────────────────────

function LinkCol({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.32em] text-white">
        {heading}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <SmartLink
              href={link.href}
              className="block text-[12.5px] leading-[1.5] opacity-45 transition-opacity duration-150 hover:opacity-100"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export function SiteFooter() {
  return (
    <footer className="bg-[#07090f] text-white">
      <PageContainer>

        {/* ── Brand band ─────────────────────────────────────────────────── */}
        <div className="grid gap-8 border-b border-white/[0.07] py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Left — identity */}
          <div>
            <SiteLogo variant="white" className="h-10 w-[7rem]" sizes="120px" />
            <p className="mt-1 text-[7.5px] font-semibold uppercase tracking-[0.28em] text-white/22">
              Middle East FZC
            </p>
            <p className="mt-3 max-w-[36ch] text-[13px] leading-[1.75] text-white/42">
              Architectural door hardware and automatic entry systems — specification, supply and technical coordination since 1670.
            </p>
          </div>

          {/* Right — contact + CTA */}
          <div className="flex flex-col gap-2 lg:items-end lg:text-right">
            <p className="text-[7.5px] font-bold uppercase tracking-[0.3em] text-white/25">
              Get in Touch
            </p>
            <SmartLink
              href={siteContact.emailHref}
              className="text-[13px] opacity-55 transition-opacity hover:opacity-100"
            >
              {siteConfig.email}
            </SmartLink>
            <SmartLink
              href={siteContact.phoneHref}
              className="text-[13px] opacity-55 transition-opacity hover:opacity-100"
            >
              {siteConfig.phoneDisplay}
            </SmartLink>
            <SmartLink
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-[9.5px] font-bold uppercase tracking-[0.2em] opacity-55 transition-opacity hover:opacity-100 lg:self-end"
            >
              Start a Project
              <ArrowRightIcon className="h-3 w-3" />
            </SmartLink>
          </div>
        </div>

        {/* ── Link grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 lg:gap-10">
          <LinkCol heading="Platform" links={platformLinks} />
          <LinkCol heading="Products" links={productLinks} />
          <LinkCol heading="Door Hardware" links={doorHardwareLinks} />
          <LinkCol heading="Resources" links={resourceLinks} />
        </div>

        {/* ── Bottom strip ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Offices */}
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
            <span className="mr-2 text-[7.5px] font-bold uppercase tracking-[0.28em] text-white/22">
              Offices
            </span>
            {offices.map((o, i) => (
              <span key={o.label} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="mx-1 text-white/14">·</span>
                )}
                <span
                  className={`text-[11.5px] ${
                    o.primary
                      ? "font-semibold text-white/65"
                      : "text-white/28"
                  }`}
                >
                  {o.label}
                </span>
              </span>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <SmartLink
                href="/contact"
                aria-label="LinkedIn"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 opacity-35 transition-opacity hover:opacity-80"
              >
                <LinkedInIcon />
              </SmartLink>
              <SmartLink
                href="/contact"
                aria-label="Instagram"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 opacity-35 transition-opacity hover:opacity-80"
              >
                <InstagramIcon />
              </SmartLink>
            </div>
            <p className="text-[10.5px] text-white/22">
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>
        </div>

      </PageContainer>
    </footer>
  );
}
