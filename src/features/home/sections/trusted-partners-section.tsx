import Image from "next/image";
import type { GalleryImage } from "@/types";
import type { HomeCertItem } from "@/content/home/sections";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";

type BrandLogo = GalleryImage & { role?: string };

type TrustedPartnersSectionProps = {
  brands: BrandLogo[];
  certifications: GalleryImage[];
  certItems?: HomeCertItem[];
};

export function TrustedPartnersSection({ brands, certifications, certItems }: TrustedPartnersSectionProps) {
  if (brands.length === 0) return null;

  return (
    <section className="home-section-shell py-14 sm:py-16">
      <PageContainer>
        {/* ── Header ── */}
        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:gap-8 lg:flex-row lg:items-end">
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
          <p className="max-w-[26rem] text-[13px] leading-7 text-[var(--muted-foreground)] lg:text-right">
            Long-standing partners across hardware, automation and access systems,
            aligned to project requirements across Europe, the Middle East and South Asia.
          </p>
        </div>

        {/* ── Brand partners panel ── */}
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)]">
          {/* Logos — 2 col on mobile, 3 on sm, 6 on lg */}
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand.src}
                className="group flex flex-col items-center justify-center gap-2 px-4 py-5 text-center transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--border)_30%,transparent)]"
              >
                {/* Logo */}
                <div className="relative h-9 w-[110px]">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    sizes="130px"
                    className="object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Name + role */}
                {brand.label && (
                  <div className="w-full">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                      {brand.label}
                    </p>
                    {brand.role && (
                      <p className="mt-0.5 text-[8.5px] leading-relaxed text-[var(--muted-foreground)]">
                        {brand.role}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Certifications ── */}
          {certItems && certItems.length > 0 && (
            <div className="border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)]">
              {/* Section label */}
              <div className="flex flex-col items-center gap-1 px-6 pb-5 pt-6 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.30em] text-[var(--muted-foreground)]">
                  Standards &amp; Certifications
                </p>
                <p className="max-w-[52ch] text-[12px] leading-[1.65] text-[var(--muted-foreground)]">
                  Independently tested and certified across American and European standards — covering the full product range.
                </p>
              </div>

              {/* Cert rows — 1 col mobile, 2 col sm, 4 col lg */}
              <div className="grid grid-cols-1 gap-px border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[color-mix(in_srgb,var(--border)_60%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
                {certItems.map((cert) => (
                  <div
                    key={cert.label}
                    className="flex flex-col items-center gap-2.5 bg-[var(--card)] px-5 py-5 text-center"
                  >
                    {/* Logo or text badge */}
                    {cert.src ? (
                      <div className="relative h-7 w-[72px]">
                        <Image
                          src={cert.src}
                          alt={cert.label}
                          fill
                          sizes="80px"
                          className="object-contain opacity-80"
                        />
                      </div>
                    ) : (
                      <div className="flex h-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3">
                        <span className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)]">
                          {cert.label}
                        </span>
                      </div>
                    )}

                    {/* Label + sublabel */}
                    <div>
                      <p className="text-[10px] font-bold text-[var(--foreground)]">{cert.label}</p>
                      {cert.sublabel && (
                        <p className="mt-0.5 text-[8.5px] text-[var(--muted-foreground)]">{cert.sublabel}</p>
                      )}
                    </div>

                    {/* Description — always visible */}
                    <p className="w-full text-[9px] leading-[1.6] text-[var(--muted-foreground)]">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
