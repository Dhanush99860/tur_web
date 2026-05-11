import Image from "next/image";
import type { BreadcrumbItem, CatalogRouteGroup, Product } from "@/types";
import { createInquiryHref } from "@/content/site/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils/cn";

type ProductCardProps = { product: Product };

function RouteProductCard({ product }: ProductCardProps) {
  const href = `/products/${product.slug}`;

  return (
    <SmartLink
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))] hover:shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-[2.5px] origin-left scale-x-0 rounded-t-[1.25rem] bg-[var(--accent)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--panel)]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 z-20 rounded-full border border-white/18 bg-[rgba(6,8,12,0.52)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
          {product.familyTitle}
        </p>
        <h3 className="mt-2 text-[1rem] font-semibold leading-[1.18] tracking-[-0.022em] text-[var(--foreground)]">
          {product.title}
        </h3>
        <p className="mt-2 flex-1 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
          {product.shortDescription}
        </p>
        {product.features.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-1.5">
            {product.features.slice(0, 2).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-[11.5px] leading-[1.6] text-[var(--muted-foreground)]">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-60" />
                {f}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="text-[12px] font-semibold tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
            View Details
          </span>
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
        </div>
      </div>
    </SmartLink>
  );
}

type CatalogRouteGroupPageProps = {
  group: CatalogRouteGroup;
  products: Product[];
  breadcrumbs: BreadcrumbItem[];
  familyHref: string;
};

export function CatalogRouteGroupPage({
  group,
  products,
  breadcrumbs,
  familyHref,
}: CatalogRouteGroupPageProps) {
  const coreProducts = products.filter((p) => !p.isOptionOnly);
  const optionProducts = products.filter((p) => p.isOptionOnly);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <main id="main-content">
        {/* ── Hero ── */}
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--card)]">
          <div className="absolute inset-0">
            <Image
              src={group.image}
              alt={group.imageAlt}
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_38%,transparent_100%)]" />
          </div>
          <PageContainer className="relative z-10 py-14 sm:py-20">
            <p className="mb-3 text-[9.5px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
              {group.eyebrow ?? `${group.familyTitle} · Route`}
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.01] tracking-[-0.048em] text-[var(--foreground)]">
              {group.title}
            </h1>
            <p className="mt-4 max-w-[44rem] text-[14.5px] leading-[1.78] text-[var(--muted-foreground)] sm:text-[15px]">
              {group.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SmartLink
                href={createInquiryHref(`${group.title} Inquiry`)}
                className={buttonClassName()}
              >
                Request Details
              </SmartLink>
              <SmartLink href={familyHref} className={buttonClassName("secondary")}>
                ← Back to {group.familyTitle}
              </SmartLink>
            </div>
          </PageContainer>
        </div>

        {/* ── Core Products grid ── */}
        <PageContainer className="py-14 sm:py-20">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                {group.title}
              </p>
              <h2 className="mt-1.5 font-display text-[clamp(1.45rem,2.8vw,2rem)] font-medium leading-[1.06] tracking-[-0.038em] text-[var(--foreground)]">
                {coreProducts.length > 0 ? "Core Products" : "Products coming soon"}
              </h2>
            </div>
            <p className="text-[12.5px] text-[var(--muted-foreground)]">
              {coreProducts.length} product{coreProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {coreProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {coreProducts.map((product) => (
                <RouteProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-[1.25rem] border border-dashed border-[var(--border)] text-center">
              <p className="text-[0.95rem] font-medium text-[var(--foreground)]">
                Product pages are being staged
              </p>
              <p className="max-w-[28rem] text-[13px] text-[var(--muted-foreground)]">
                This route currently uses inquiry-led support. Contact TUR for catalog details, specifications and project coordination.
              </p>
              <SmartLink
                href={createInquiryHref(`${group.title} Inquiry`)}
                className={buttonClassName()}
              >
                Contact TUR
              </SmartLink>
            </div>
          )}

          {/* ── Options & Preparation ── */}
          {optionProducts.length > 0 ? (
            <div className="mt-14 sm:mt-16">
              <div className="mb-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                  Options & Preparation
                </p>
                <h2 className="mt-1.5 font-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium leading-[1.06] tracking-[-0.038em] text-[var(--foreground)]">
                  Hardware Options & Door Preparation
                </h2>
                <p className="mt-2 max-w-[48rem] text-[13px] leading-[1.76] text-[var(--muted-foreground)]">
                  Specification suffixes and preparation codes that refine hinge selection for specific door conditions, security requirements or architectural detailing.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {optionProducts.map((product) => (
                  <SmartLink
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group flex flex-col gap-2 rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-5 transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))]"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
                      Option
                    </p>
                    <h3 className="text-[0.95rem] font-semibold leading-[1.2] tracking-[-0.018em] text-[var(--foreground)]">
                      {product.title}
                    </h3>
                    <p className="flex-1 text-[12px] leading-[1.65] text-[var(--muted-foreground)]">
                      {product.shortDescription}
                    </p>
                  </SmartLink>
                ))}
              </div>
            </div>
          ) : null}
        </PageContainer>

        {/* ── Support CTA ── */}
        <div className="border-t border-[var(--border)] bg-[var(--card)]">
          <PageContainer className="py-12 sm:py-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                  Specification Support
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium leading-[1.1] tracking-[-0.036em] text-[var(--foreground)]">
                  Need specification guidance?
                </h2>
                <p className="mt-2 max-w-[36rem] text-[13px] leading-[1.76] text-[var(--muted-foreground)]">
                  TUR provides hardware scheduling, approval documentation and project coordination support for all {group.familyTitle} products.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                <SmartLink
                  href={createInquiryHref(`${group.title} Specification Inquiry`)}
                  className={buttonClassName()}
                >
                  Send Inquiry
                </SmartLink>
                <SmartLink href="/contact" className={cn(buttonClassName("secondary"), "w-full sm:w-auto")}>
                  Contact TUR
                </SmartLink>
              </div>
            </div>
          </PageContainer>
        </div>
      </main>
    </>
  );
}
