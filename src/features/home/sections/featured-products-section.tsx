import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HomeSectionHeading } from "@/features/home/components/home-section-heading";
import { FeaturedProductShowcaseCard } from "@/features/home/components/featured-product-showcase-card";

type FeaturedProductsSectionProps = {
  products: Product[];
};

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  return (
    <section className="home-section-shell">
      <PageContainer>
        <div className="border-t border-[var(--border)] pt-8 sm:pt-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,50rem)_minmax(0,34rem)] lg:items-end lg:justify-between lg:gap-8">
            <HomeSectionHeading
              eyebrow="Representative Solutions"
              title={<>Four product entry points across the TUR offer.</>}
              className="max-w-[30rem]"
              titleClassName="max-w-[25ch]"
            />

            <div className="max-w-[34rem] lg:justify-self-end lg:pb-1">
              <p className="text-[15px] leading-7 text-[color-mix(in_srgb,var(--foreground)_82%,transparent)] sm:text-[16px]">
                A quick view of the product types that explain the broader hardware, glass, access and automation platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <FeaturedProductShowcaseCard key={product.slug} product={product} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
