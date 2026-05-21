import { downloadResources } from "@/content/home/sections";
import { PageContainer } from "@/components/layout/page-container";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function DownloadsPage() {
  return (
    <main id="main-content">
      <PageContainer className="section-shell">
        <section className="surface-panel p-6 sm:p-8 lg:p-10">
          <p className="eyebrow">Downloads</p>
          <h1 className="display-hero mt-4 max-w-[12ch] text-[var(--foreground)]">
            Company profile, catalogues and technical resources.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_88%,transparent)]">
            Download the TUR company profile, access product catalogues and submit technical or project support requests directly to the TUR team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SmartLink href="/company_profile.pdf" className={buttonClassName()}>
              Download Company Profile
            </SmartLink>
            <SmartLink href="/contact" className={buttonClassName("secondary")}>
              Contact TUR
            </SmartLink>
          </div>
        </section>
      </PageContainer>

      <PageContainer className="section-shell pt-0">
        <SectionHeading
          eyebrow="Available Resources"
          title="Catalogues, profiles and project support."
          description="Download product catalogues and the company profile, or submit a request for technical documents and specification support."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {downloadResources.map((resource) => (
            <SmartLink
              key={resource.title}
              href={resource.href}
              className="card-panel flex h-full flex-col overflow-hidden transition hover:border-[var(--accent)]"
            >
              <CoverImage
                src={resource.image}
                alt={resource.imageAlt}
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="aspect-[1.1/1]"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow">{resource.eyebrow}</p>
                <h2 className="display-subtitle mt-3 text-[var(--foreground)]">{resource.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {resource.description}
                </p>
                <span className="mt-auto pt-6 text-sm font-medium text-[var(--accent)]">
                  {resource.ctaLabel}
                </span>
              </div>
            </SmartLink>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}
