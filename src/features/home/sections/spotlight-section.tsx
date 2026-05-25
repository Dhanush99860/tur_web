import Image from "next/image";
import type { GalleryImage, Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type SpotlightSectionProps = {
  images: readonly GalleryImage[];
  product: Product;
};

const SPOTLIGHT_METRICS = [
  { value: "Grade 4", label: "BS EN 1906:2012" },
  { value: "200,000", label: "Life cycles tested" },
  { value: "SS 304", label: "Material standard" },
] as const;

export function SpotlightSection({ images, product }: SpotlightSectionProps) {
  const [primaryImage, secondaryImage] = images.length >= 1
    ? images
    : [{ src: product.image, alt: product.imageAlt, label: product.category }];

  const href = product.href ?? `/products/${product.slug}`;
  const topFeatures = product.features.slice(0, 3);
  const topApplications = product.applications.slice(0, 3);

  return (
    <section className="home-section-shell py-14 sm:py-16">
      <PageContainer>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_82%,transparent)] bg-[var(--card)] shadow-[0_28px_56px_-44px_rgba(10,14,20,0.12)]">

          {/* ── Main grid: image left, content right ── */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* Image panel */}
            <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[38rem]">
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
                priority
              />
              {/* Gradient — top + bottom */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.32)_0%,transparent_28%,rgba(0,0,0,0.58)_100%)]" />

              {/* Top: badge + category */}
              <div className="absolute left-5 top-5 flex flex-col gap-2 sm:left-6 sm:top-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-black/36 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  Featured Collection
                </span>
              </div>

              {/* Bottom left: product title + category */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                  {product.familyTitle}
                </p>
                <h3 className="mt-1 max-w-[18ch] text-[1.4rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[1.6rem]">
                  {product.title}
                </h3>
              </div>

              {/* Bottom right: secondary image thumbnail */}
              {secondaryImage && (
                <div className="absolute bottom-5 right-5 h-[5.5rem] w-[4rem] overflow-hidden rounded-xl border border-white/20 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] sm:bottom-6 sm:right-6 sm:h-[7rem] sm:w-[5.25rem]">
                  <Image
                    src={secondaryImage.src}
                    alt={secondaryImage.alt}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                  {secondaryImage.label && (
                    <div className="absolute inset-x-0 bottom-0 bg-black/50 px-1.5 py-1 text-center">
                      <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/80">
                        {secondaryImage.label}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Content panel */}
            <div className="flex flex-col border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">

              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Featured Product
                </p>
              </div>

              {/* Title */}
              <h2 className="mt-5 text-[clamp(1.65rem,2.6vw,2.25rem)] font-semibold leading-[1.07] tracking-[-0.046em] text-[var(--foreground)]">
                Premium <em className="not-italic text-[var(--accent)]">lever designs</em> for specification-led door sets.
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[38ch] text-[13.5px] leading-[1.8] text-[var(--muted-foreground)]">
                {product.description}
              </p>

              {/* Metrics row */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] pt-6">
                {SPOTLIGHT_METRICS.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <span className="text-[1.05rem] font-bold tracking-[-0.03em] text-[var(--foreground)]">
                      {m.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Application tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {topApplications.map((app) => (
                  <span
                    key={app}
                    className="rounded-full border border-[color-mix(in_srgb,var(--border)_88%,transparent)] bg-[color-mix(in_srgb,var(--border)_30%,transparent)] px-3 py-1.5 text-[10.5px] font-medium text-[var(--muted-foreground)]"
                  >
                    {app}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <SmartLink
                  href={href}
                  className="group inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)]"
                >
                  Explore Range
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRightIcon className="h-2.5 w-2.5" />
                  </span>
                </SmartLink>
              </div>
            </div>
          </div>

          {/* ── Feature strip ── */}
          {topFeatures.length > 0 && (
            <div className="grid divide-y divide-[color-mix(in_srgb,var(--border)_70%,transparent)] border-t border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[color-mix(in_srgb,var(--border)_18%,transparent)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {topFeatures.map((feature, i) => (
                <div key={feature} className="px-6 py-5 sm:px-7 sm:py-6">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2 text-[10px] font-bold tracking-[0.12em] text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[12.5px] leading-[1.65] text-[var(--foreground)] sm:text-[13px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </PageContainer>
    </section>
  );
}
