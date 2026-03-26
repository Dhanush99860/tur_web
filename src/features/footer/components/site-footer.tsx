import { siteConfig, siteContact } from "@/content/site/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { SiteLogo } from "@/components/shared/site-logo";
import { FooterNewsletterForm } from "@/features/footer/components/footer-newsletter-form";

type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "facebook" | "youtube";
};

const productCategories = [
  { label: "American Standard", href: "/door-hardware/american-standard" },
  { label: "European Ironmongery", href: "/door-hardware/european-ironmongery" },
  { label: "Glass Hardware", href: "/door-hardware/glass-hardware" },
  { label: "Access Control", href: "/door-hardware/access-control" },
  { label: "Sealing Systems", href: "/door-hardware/sealing-systems" },
] as const;

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "/contact", icon: "instagram" },
  { label: "LinkedIn", href: "/contact", icon: "linkedin" },
  { label: "Facebook", href: "/contact", icon: "facebook" },
  { label: "YouTube", href: "/contact", icon: "youtube" },
];

const paymentLabels = ["VISA", "MC", "AMEX", "PayPal"] as const;

function SocialIcon({ icon }: Pick<SocialLink, "icon">) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M5.6 8.5H9V19H5.6zm1.7-4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3.8 4.8h3.2v1.4h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.2 4.4 5.5V19h-3.4v-4.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V19h-3.5Z" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.4 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.9H7.9V13h2.3v7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.2 7.2a2.8 2.8 0 0 0-2-2c-1.7-.5-8.2-.5-8.2-.5s-6.5 0-8.2.5a2.8 2.8 0 0 0-2 2C-.7 9-.7 12-.7 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 8.2.5 8.2.5s6.5 0 8.2-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM8.7 15.4V8.6l5.8 3.4Z" />
    </svg>
  );
}

function PaymentBadge({ label }: { label: (typeof paymentLabels)[number] }) {
  return (
    <span className="inline-flex h-9 min-w-[4.2rem] items-center justify-center rounded-[12px] border border-[var(--border)] bg-white px-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] shadow-[0_10px_20px_rgba(10,20,24,0.04)]">
      {label}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 border-b border-[var(--border)] pb-8 xl:grid-cols-[0.9fr_0.8fr_0.95fr_1.15fr]">
          <div className="max-w-[18rem]">
            <SiteLogo className="h-[4.2rem] w-[10.8rem]" sizes="180px" />
            <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              Middle East FZC
            </p>
            <p className="mt-4 text-[14px] leading-6 text-[var(--muted-foreground)]">
              Architectural door hardware and automatic entry systems for project-led support.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </SmartLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">
              Product Categories
            </h3>
            <div className="mt-3 grid gap-2 text-sm text-[var(--muted-foreground)]">
              {productCategories.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-[var(--foreground)]"
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">
              Contact Us
            </h3>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-[var(--muted-foreground)]">
              <p>
                Office No. LV 32B,
                <br />
                Hamriyah Free Zone,
                <br />
                Sharjah,
                <br />
                United Arab Emirates.
              </p>
              <p>Trade License No. 23473 / 23474</p>
              <SmartLink href={siteContact.phoneHref} className="transition hover:text-[var(--foreground)]">
                {siteConfig.phoneDisplay}
              </SmartLink>
              <SmartLink href={siteContact.emailHref} className="transition hover:text-[var(--foreground)]">
                {siteConfig.email}
              </SmartLink>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">
              Newsletter
            </h3>
            <p className="mt-3 max-w-[22rem] text-[14px] leading-6 text-[var(--muted-foreground)]">
              Subscribe for company updates, featured systems and catalog announcements.
            </p>
            <FooterNewsletterForm />
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">
              We Accept
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {paymentLabels.map((label) => (
                <PaymentBadge key={label} label={label} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)] lg:justify-center">
            {socialLinks.map((link) => (
              <SmartLink
                key={`label-${link.label}`}
                href={link.href}
                className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
              >
                <SocialIcon icon={link.icon} />
                <span>{link.label}</span>
              </SmartLink>
            ))}
          </div>

          <div className="text-sm text-[var(--muted-foreground)] lg:text-right">
            <p>{`Copyright ${new Date().getFullYear()} ${siteConfig.shortName}. ${siteConfig.legalName}.`}</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
