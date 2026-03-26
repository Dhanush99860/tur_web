import Image from "next/image";
import type { GalleryImage } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";

type TrustedPartnersSectionProps = {
  brands: GalleryImage[];
};

export function TrustedPartnersSection({ brands }: TrustedPartnersSectionProps) {
  if (brands.length === 0) return null;

  return (
    <section className="home-section-shell py-14 sm:py-16">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[color-mix(in_srgb,var(--border)_88%,transparent)] pb-7 sm:gap-8 sm:pb-8 lg:flex-row lg:items-end">
          <HomeSectionHeading
            eyebrow="Trusted Network"
            title={
              <>
                Brands and manufacturing relationships
                <br />
                behind TUR <em>delivery.</em>
              </>
            }
          />

          <div className="flex max-w-[28rem] flex-col items-start gap-3 lg:items-end">
            <p className="text-[13px] leading-7 text-[var(--muted-foreground)] lg:text-right">
              Long-standing partners across hardware, automation and access systems, aligned to project requirements.
            </p>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {["Hardware", "Automation", "Access Systems"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color-mix(in_srgb,var(--border)_92%,transparent)] bg-[color-mix(in_srgb,var(--card)_92%,transparent)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-[24px] border border-[color-mix(in_srgb,var(--border)_88%,transparent)] bg-[color-mix(in_srgb,var(--border)_62%,transparent)] p-px shadow-[0_24px_48px_-40px_rgba(15,23,42,0.16)]">
          <div className="grid grid-cols-2 gap-px bg-[color-mix(in_srgb,var(--border)_62%,transparent)] sm:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand.src}
                className="group flex min-h-[132px] flex-col items-center justify-center bg-[linear-gradient(180deg,color-mix(in_srgb,var(--panel)_96%,white_4%)_0%,color-mix(in_srgb,var(--card)_96%,transparent)_100%)] px-5 py-6 text-center transition duration-300 hover:bg-[color-mix(in_srgb,var(--card)_98%,white_2%)]"
              >
                <div className="relative h-10 w-[124px] sm:h-11 sm:w-[136px]">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    sizes="140px"
                    className="object-contain opacity-[0.42] grayscale transition duration-300 group-hover:opacity-[0.78] group-hover:grayscale-0"
                  />
                </div>
                {brand.label ? (
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    {brand.label}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
