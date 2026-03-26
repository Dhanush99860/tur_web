import type { BreadcrumbItem, Product } from "@/types";
import { createInquiryHref } from "@/content/site/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { ProductCard } from "@/features/catalog/components/product-card";

type ProductDetailPageProps = {
  breadcrumbs: BreadcrumbItem[];
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetailPage({
  breadcrumbs,
  product,
  relatedProducts,
}: ProductDetailPageProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <main id="main-content">
        <PageContainer className="section-shell">
          <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{product.familyTitle}</p>
              <h1 className="display-hero mt-4 max-w-[12ch] text-[var(--foreground)]">
                {product.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_88%,transparent)]">
                {product.shortDescription}
              </p>
              <p className="body-copy mt-5">{product.overview}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.finishOptions.map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
                  >
                    {option}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SmartLink href={createInquiryHref(product.inquirySubject)} className={buttonClassName()}>
                  Send Inquiry
                </SmartLink>
                <SmartLink href="/downloads" className={buttonClassName("secondary")}>
                  View Downloads
                </SmartLink>
              </div>
            </div>

            <div className="surface-panel grid gap-4 overflow-hidden p-4 sm:grid-cols-2">
              {product.gallery.map((image, index) => (
                <div
                  key={`${product.slug}-${image}`}
                  className={index === 0 ? "sm:col-span-2" : undefined}
                >
                  <CoverImage
                    src={image}
                    alt={`${product.title} gallery image ${index + 1}`}
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="h-full min-h-[14rem] rounded-[1rem]"
                  />
                </div>
              ))}
            </div>
          </section>
        </PageContainer>

        <PageContainer className="section-shell pt-0">
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="card-panel p-6">
              <p className="eyebrow">Overview</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                {product.description}
              </p>
            </div>
            <div className="card-panel p-6">
              <p className="eyebrow">Feature Focus</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted-foreground)]">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-panel p-6">
              <p className="eyebrow">Applications</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted-foreground)]">
                {product.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>
          </section>
        </PageContainer>

        {relatedProducts.length ? (
          <PageContainer className="section-shell pt-0">
            <div className="mb-10">
              <p className="eyebrow">Related Products</p>
              <h2 className="display-title mt-4 text-[var(--foreground)]">
                Continue through the family
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </PageContainer>
        ) : null}
      </main>
    </>
  );
}
