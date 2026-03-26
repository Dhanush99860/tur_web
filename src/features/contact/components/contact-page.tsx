import { contactOffices } from "@/content/home/sections";
import { createInquiryHref, siteConfig, siteContact } from "@/content/site/site-config";
import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { PageContainer } from "@/components/layout/page-container";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactPage() {
  return (
    <main id="main-content">
      <PageContainer className="section-shell">
        <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[38%] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--warm)_72%,transparent),transparent_72%)]"
            />

            <div className="relative">
              <p className="eyebrow">Contact Us</p>
              <h1 className="display-hero mt-4 max-w-[11ch] text-[var(--foreground)]">
                Contact TUR Middle East FZC.
              </h1>
              <p className="body-copy mt-5 max-w-[58ch]">
                Reach TUR for product details, catalog requests, specification support and
                coordinated project inquiries across architectural hardware and automatic
                entry systems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SmartLink href={createInquiryHref("Project Inquiry")} className={buttonClassName()}>
                  Send Inquiry
                </SmartLink>
                <SmartLink href="/downloads" className={buttonClassName("secondary")}>
                  View Downloads
                </SmartLink>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <SmartLink
                  href={siteContact.emailHref}
                  className="card-panel rounded-[1.35rem] p-5 transition hover:border-[var(--accent)]"
                >
                  <p className="eyebrow">Email</p>
                  <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                    {siteConfig.email}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                    Direct route for project and product communication.
                  </p>
                </SmartLink>

                <SmartLink
                  href={siteContact.phoneHref}
                  className="card-panel rounded-[1.35rem] p-5 transition hover:border-[var(--accent)]"
                >
                  <p className="eyebrow">Phone</p>
                  <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                    {siteConfig.phoneDisplay}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                    Office contact for fast coordination during working hours.
                  </p>
                </SmartLink>

                <article className="card-panel rounded-[1.35rem] p-5 sm:col-span-2 xl:col-span-1">
                  <p className="eyebrow">Office</p>
                  <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                    Hamriyah Free Zone
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                    Sharjah, United Arab Emirates
                  </p>
                </article>
              </div>
            </div>
          </div>

          <CoverImage
            src="/tur/project-b.jpg"
            alt="Regional presence and project support"
            sizes="(max-width: 1279px) 100vw, 50vw"
            className="surface-panel min-h-[24rem] overflow-hidden sm:min-h-[28rem]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(10,14,18,0.08),rgba(10,14,18,0.42))]"
          >
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="max-w-[16rem] rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Primary Office
              </div>

              <div className="max-w-[28rem] rounded-[1.6rem] border border-white/18 bg-[rgba(17,20,24,0.34)] p-5 text-white shadow-[0_28px_64px_-42px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-6">
                <p className="eyebrow text-white/70">Sharjah, UAE</p>
                <h2 className="mt-3 font-display text-[clamp(1.6rem,2.3vw,2.3rem)] leading-[0.98] tracking-[-0.045em] text-white">
                  Project support from the regional office.
                </h2>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-white/78">
                  {siteConfig.locationLabel}
                </p>

                <div className="mt-5 flex flex-col gap-2 text-sm text-white/86 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <SmartLink href={siteContact.emailHref} className="transition hover:text-white">
                    {siteConfig.email}
                  </SmartLink>
                  <SmartLink href={siteContact.phoneHref} className="transition hover:text-white">
                    {siteConfig.phoneDisplay}
                  </SmartLink>
                </div>
              </div>
            </div>
          </CoverImage>
        </section>
      </PageContainer>

      <PageContainer className="section-shell pt-0">
        <SectionHeading
          eyebrow="Regional Presence"
          title="Offices and associated entities."
          description="Regional offices and partner entities that reinforce TUR's broader project, sourcing and support platform."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contactOffices.map((office) => (
            <article
              key={office.title}
              className="card-panel relative overflow-hidden rounded-[1.4rem] p-6 transition hover:border-[var(--accent)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_36%,white),transparent)]"
              />
              <p className="eyebrow">{office.eyebrow}</p>
              <h2 className="display-subtitle mt-3 text-[var(--foreground)]">{office.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                {office.description}
              </p>
              {office.href ? (
                <SmartLink
                  href={office.href}
                  className="mt-6 inline-flex text-sm font-medium text-[var(--accent)]"
                >
                  {office.ctaLabel ?? "Contact"}
                </SmartLink>
              ) : null}
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Project Inquiry</p>
            <h2 className="display-title mt-4 text-[var(--foreground)]">
              Ready for product details, catalog support or technical coordination.
            </h2>
            <p className="body-copy mt-5 max-w-[56ch]">
              Use this inquiry route for commercial, hospitality, healthcare and
              specification-led projects. Share the opening type, required product
              families, quantities or timeline and TUR can route the request correctly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="card-panel rounded-[1.35rem] p-5">
                <p className="eyebrow">Downloads</p>
                <h3 className="mt-3 text-[1.2rem] font-medium tracking-[-0.03em] text-[var(--foreground)]">
                  Company profile and catalog routes
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  Review company material first or move directly into the inquiry form.
                </p>
                <SmartLink
                  href="/downloads"
                  className="mt-5 inline-flex text-sm font-medium text-[var(--accent)]"
                >
                  Open Downloads
                </SmartLink>
              </article>

              <article className="card-panel rounded-[1.35rem] p-5">
                <p className="eyebrow">Direct Contact</p>
                <h3 className="mt-3 text-[1.2rem] font-medium tracking-[-0.03em] text-[var(--foreground)]">
                  Regional office communication
                </h3>
                <div className="mt-3 grid gap-2 text-sm leading-6 text-[var(--muted-foreground)]">
                  <SmartLink href={siteContact.emailHref} className="transition hover:text-[var(--foreground)]">
                    {siteConfig.email}
                  </SmartLink>
                  <SmartLink href={siteContact.phoneHref} className="transition hover:text-[var(--foreground)]">
                    {siteConfig.phoneDisplay}
                  </SmartLink>
                </div>
              </article>
            </div>
          </div>

          <ContactInquiryForm
            title="Send your project inquiry"
            description="Share your scope, timelines and required product families. TUR will route the request through the right contact point."
            subject="Project Inquiry"
            submitLabel="Send Inquiry"
            className="h-full"
          />
        </section>
      </PageContainer>
    </main>
  );
}
