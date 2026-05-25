import Image from "next/image";
import type { GalleryImage } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";

type BrandLogo = GalleryImage & { role?: string };

type TrustedPartnersSectionProps = {
  brands: BrandLogo[];
  certifications: GalleryImage[];
};

export function TrustedPartnersSection({ brands, certifications }: TrustedPartnersSectionProps) {
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
          {/* Logos — 2 col on mobile, 3 on sm, 6 on lg — no inner borders */}
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand, i) => (
              <div
                key={brand.src}
                className="group flex flex-col items-center justify-center gap-3 px-5 py-8 text-center transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--border)_30%,transparent)]"
              >
                {/* Number */}
                <span className="font-mono text-[9px] font-semibold tracking-[0.22em] text-[var(--muted-foreground)] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Logo */}
                <div className="relative h-9 w-[110px]">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    sizes="130px"
                    className="object-contain grayscale opacity-55 transition duration-300 dark:invert dark:brightness-[1.4] dark:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:invert-0 dark:group-hover:brightness-100"
                  />
                </div>

                {/* Name + role */}
                {brand.label && (
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                      {brand.label}
                    </p>
                    {brand.role && (
                      <p className="mt-0.5 text-[9px] leading-relaxed text-[var(--muted-foreground)]">
                        {brand.role}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Certifications strip ── */}
          {certifications.length > 0 && (
            <div className="border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[color-mix(in_srgb,var(--border)_18%,transparent)]">
              <div className="flex items-center gap-4 px-6 py-2.5">
                <p className="shrink-0 text-[8.5px] font-bold uppercase tracking-[0.24em] text-[var(--muted-foreground)] opacity-60">
                  Standards &amp; Certifications
                </p>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--border)_60%,transparent)]" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 pb-6 pt-2 sm:justify-start sm:gap-x-10">
                {certifications.map((cert) => (
                  <div key={cert.src} className="group flex flex-col items-center gap-2 text-center">
                    <div className="relative h-7 w-[68px]">
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        fill
                        sizes="80px"
                        className="object-contain grayscale opacity-40 transition duration-300 dark:invert dark:brightness-[1.4] dark:opacity-55 group-hover:grayscale-0 group-hover:opacity-90 dark:group-hover:invert-0 dark:group-hover:brightness-100"
                      />
                    </div>
                    {cert.label && (
                      <p className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                        {cert.label}
                      </p>
                    )}
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
