import { aboutHighlights } from "@/content/home/sections";
import { siteConfig } from "@/content/site/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPage() {
  return (
    <main id="main-content">
      <PageContainer className="section-shell">
        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="surface-panel p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">About TUR</p>
            <h1 className="display-hero mt-4 max-w-[13ch] text-[var(--foreground)]">
              A project-oriented platform for hardware and automatic entry systems.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_88%,transparent)]">
              TUR positions architectural door hardware, automatic entry systems and technical
              support within a premium, inquiry-led company structure.
            </p>
            <p className="body-copy mt-5">
              The company narrative brings together heritage through James Gibbons Format,
              regional experience, product depth and collaboration with architects, consultants,
              contractors and wider project stakeholders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SmartLink href="/downloads" className={buttonClassName()}>
                View Downloads
              </SmartLink>
              <SmartLink href="/contact" className={buttonClassName("secondary")}>
                Contact TUR
              </SmartLink>
            </div>
          </div>

          <CoverImage
            src="/tur/project-c.jpg"
            alt="About TUR and global project support"
            sizes="(max-width: 1279px) 100vw, 50vw"
            className="surface-panel min-h-[24rem]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.34))]"
          />
        </section>
      </PageContainer>

      <PageContainer className="section-shell pt-0">
        <SectionHeading
          eyebrow="What To Preserve"
          title="Heritage, regional presence and technical support as trust signals."
          description="These story blocks are structured content in the new codebase so they can migrate cleanly without being trapped inside homepage-only components."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="card-panel overflow-hidden">
              <CoverImage
                src={item.image}
                alt={item.imageAlt}
                sizes="(max-width: 1023px) 100vw, 25vw"
                className="aspect-[1.05/1]"
              />
              <div className="p-5">
                <p className="eyebrow">{item.eyebrow}</p>
                <h2 className="display-subtitle mt-3 text-[var(--foreground)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="surface-panel mt-10 p-6 sm:p-8">
          <p className="eyebrow">Global Presence</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {siteConfig.offices.map((office) => (
              <span
                key={office.name}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted-foreground)]"
              >
                <span className="font-medium text-[var(--foreground)]">{office.name}</span>
                {` / ${office.region}`}
              </span>
            ))}
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
