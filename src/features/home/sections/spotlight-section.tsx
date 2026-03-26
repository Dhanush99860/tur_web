import type { GalleryImage, Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type SpotlightSectionProps = {
  images: readonly GalleryImage[];
  product: Product;
};

export function SpotlightSection({ images, product }: SpotlightSectionProps) {
  const [primaryImage] = images.length >= 1 ? images : [{ src: product.image, alt: product.imageAlt }];
  const featureHighlights = product.features.slice(0, 3);
  const primaryApplication = product.applications[0] ?? product.category;
  const imageLabel = primaryImage.label ?? "Project Reference";

  return (
    <section className="home-section-shell py-14 sm:py-18">
      <PageContainer>
        <div className="overflow-hidden rounded-[30px] border border-[color-mix(in_srgb,var(--border)_88%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--panel)_94%,white_6%)_0%,color-mix(in_srgb,var(--background)_96%,transparent)_100%)] shadow-[0_28px_56px_-44px_rgba(15,23,42,0.18)]">
          <div className="grid min-h-[420px] lg:grid-cols-[1.08fr_0.92fr]">
            <CoverImage
              src={primaryImage.src}
              alt={primaryImage.alt}
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="group relative min-h-[300px] sm:min-h-[360px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(8,12,18,0.08)_0%,rgba(8,12,18,0.16)_42%,rgba(8,12,18,0.72)_100%)]"
              imageClassName="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            >
              <div className="flex h-full flex-col justify-between p-5 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/18 bg-black/16 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm">
                    {product.badge ?? "Featured"}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/56">
                      Featured Product
                    </p>
                    <h3 className="mt-1.5 max-w-[18ch] font-display text-[clamp(1.4rem,2.1vw,2rem)] font-normal leading-[1.02] tracking-[-0.04em] text-white">
                      {product.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/66 backdrop-blur-sm">
                    {imageLabel}
                  </span>
                </div>
              </div>
            </CoverImage>

            <div className="flex flex-col justify-between border-t border-[color-mix(in_srgb,var(--border)_88%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_94%,transparent)_0%,color-mix(in_srgb,var(--panel)_88%,transparent)_100%)] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
              <div>
                <HomeSectionHeading
                  eyebrow="Featured Product"
                  title={
                    <>
                      Premium <em>lever designs</em> for specification-led door sets.
                    </>
                  }
                  className="max-w-[26rem]"
                  titleClassName="max-w-[12ch]"
                />

                <p className="mt-4 max-w-[38ch] text-[14px] font-normal leading-7 text-[var(--muted-foreground)] sm:text-[15px]">
                  A furnishing-led ironmongery option for hospitality, executive and premium architectural interiors.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-[color-mix(in_srgb,var(--accent)_24%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_8%,white)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {product.familyTitle}
                  </span>
                  <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_92%,transparent)] bg-[color-mix(in_srgb,var(--panel)_86%,transparent)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                    {primaryApplication}
                  </span>
                </div>
              </div>

              <div className="mt-7">
                <SmartLink
                  href={`/products/${product.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-[22px] border border-[color-mix(in_srgb,var(--border)_90%,transparent)] bg-[color-mix(in_srgb,var(--card)_96%,transparent)] p-4 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.16)] transition duration-300 hover:border-[color-mix(in_srgb,var(--accent)_22%,var(--border))] hover:shadow-[0_24px_44px_-34px_rgba(15,23,42,0.2)] sm:p-5"
                >
                  <div>
                    <p className="font-display text-[1.3rem] font-normal leading-none tracking-[-0.035em] text-[var(--foreground)] sm:text-[1.4rem]">
                      {product.title}
                    </p>
                    <p className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                      {product.category}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--foreground-inverse)]">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </SmartLink>

                <SmartLink
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-[14px] border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--foreground-inverse)] transition-all duration-300 hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] sm:w-auto"
                >
                  Explore Product
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </SmartLink>
              </div>
            </div>
          </div>

          <div className="grid divide-y divide-[color-mix(in_srgb,var(--border)_90%,transparent)] border-t border-[color-mix(in_srgb,var(--border)_90%,transparent)] bg-[color-mix(in_srgb,var(--panel)_58%,transparent)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {featureHighlights.map((feature, i) => (
              <div
                key={feature}
                className="group px-5 py-5 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--card)_72%,transparent)] sm:px-6 sm:py-6"
              >
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_20%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-2 text-[11px] font-bold tracking-[0.12em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[13px] font-medium leading-6 text-[var(--foreground)] sm:text-[14px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
