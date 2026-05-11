import Image from "next/image";
import type {
  BreadcrumbItem,
  Product,
  ProductComparisonSpec,
  ProductModelRow,
  ProductSpec,
  ProductVariant,
} from "@/types";
import { createInquiryHref } from "@/content/site/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CoverImage } from "@/components/shared/cover-image";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { ProductCard } from "@/features/catalog/components/product-card";

// ── Specification table ───────────────────────────────────────────────────────
function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="overflow-hidden rounded-[1rem] border border-[var(--border)]">
      <table className="w-full text-[13px]">
        <tbody className="divide-y divide-[var(--border)]">
          {specs.map((spec) => (
            <tr key={spec.label} className="group">
              <td className="w-[44%] bg-[var(--panel)] px-4 py-3 font-semibold leading-snug text-[var(--foreground)] group-hover:bg-[color-mix(in_srgb,var(--panel)_80%,var(--accent))]">
                {spec.label}
              </td>
              <td className="px-4 py-3 leading-snug text-[var(--muted-foreground)]">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Comparison spec table (1-leaf / 2-leaf, 2-leaf / 4-leaf, etc.) ───────────
function ComparisonSpecTable({ data }: { data: ProductComparisonSpec }) {
  return (
    <div className="overflow-hidden rounded-[1rem] border border-[var(--border)]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--panel)]">
            <th className="w-[44%] px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]" />
            {data.columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {data.rows.map((row) => (
            <tr key={row.label} className="group">
              <td className="w-[44%] bg-[var(--panel)] px-4 py-3 font-semibold leading-snug text-[var(--foreground)] group-hover:bg-[color-mix(in_srgb,var(--panel)_80%,var(--accent))]">
                {row.label}
              </td>
              {row.values.map((val, i) => (
                <td key={i} className="px-4 py-3 leading-snug text-[var(--muted-foreground)]">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Model number table ────────────────────────────────────────────────────────
function ModelTable({ rows }: { rows: ProductModelRow[] }) {
  const hasInches = rows.some((r) => r.inches);
  const hasMm = rows.some((r) => r.mm);
  const hasNote = rows.some((r) => r.note);

  return (
    <div className="overflow-hidden rounded-[1rem] border border-[var(--border)]">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--panel)]">
            <th className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
              Model No.
            </th>
            {hasInches ? (
              <th className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                Inches
              </th>
            ) : null}
            {hasMm ? (
              <th className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                mm
              </th>
            ) : null}
            {hasNote ? (
              <th className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                Note
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {rows.map((row, i) => (
            <tr key={`${row.modelNo}-${i}`} className="group">
              <td className="px-4 py-3 font-mono font-semibold text-[var(--foreground)]">
                {row.modelNo}
              </td>
              {hasInches ? (
                <td className="px-4 py-3 text-[var(--muted-foreground)]">
                  {row.inches ?? "—"}
                </td>
              ) : null}
              {hasMm ? (
                <td className="px-4 py-3 text-[var(--muted-foreground)]">
                  {row.mm ?? "—"}
                </td>
              ) : null}
              {hasNote ? (
                <td className="px-4 py-3 italic text-[var(--muted-foreground)]">
                  {row.note ?? "—"}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── How to order block ────────────────────────────────────────────────────────
function HowToOrderBlock({
  howToOrder,
  orderCodeExample,
}: {
  howToOrder?: string;
  orderCodeExample?: string;
}) {
  if (!howToOrder && !orderCodeExample) return null;

  return (
    <div className="card-panel p-5">
      <p className="eyebrow">How to Order</p>
      {howToOrder ? (
        <p className="mt-3 text-[13px] leading-[1.72] text-[var(--muted-foreground)]">
          {howToOrder}
        </p>
      ) : null}
      {orderCodeExample ? (
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
            Example:
          </span>
          <code className="rounded-[0.5rem] border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 font-mono text-[13px] font-semibold tracking-wide text-[var(--foreground)]">
            {orderCodeExample}
          </code>
        </div>
      ) : null}
    </div>
  );
}

// ── Variant section (SA / DA or other variants) ───────────────────────────────
function VariantSection({ variant }: { variant: ProductVariant }) {
  return (
    <div className="card-panel overflow-hidden p-0">
      <div className="border-b border-[var(--border)] px-5 py-4">
        <p className="eyebrow">{variant.label}</p>
        {variant.series ? (
          <p className="mt-1 font-display text-[1.15rem] font-medium leading-snug tracking-[-0.03em] text-[var(--foreground)]">
            Series {variant.series}
          </p>
        ) : null}
        {variant.description ? (
          <p className="mt-2 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
            {variant.description}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 p-5">
        {variant.modelRows && variant.modelRows.length > 0 ? (
          <div>
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Model Numbers
            </p>
            <ModelTable rows={variant.modelRows} />
          </div>
        ) : null}

        {variant.finishOptions && variant.finishOptions.length > 0 ? (
          <div>
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Finish Options
            </p>
            <div className="flex flex-wrap gap-1.5">
              {variant.finishOptions.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {variant.options && variant.options.length > 0 ? (
          <div>
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Options
            </p>
            <ul className="flex flex-col gap-1">
              {variant.options.map((opt) => (
                <li
                  key={opt}
                  className="flex items-center gap-2 text-[12.5px] text-[var(--muted-foreground)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-60" />
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {(variant.howToOrder ?? variant.orderCodeExample) ? (
          <div className="border-t border-[var(--border)] pt-4">
            {variant.howToOrder ? (
              <p className="text-[12px] leading-[1.7] text-[var(--muted-foreground)]">
                <span className="font-semibold text-[var(--foreground)]">How to order:</span>{" "}
                {variant.howToOrder}
              </p>
            ) : null}
            {variant.orderCodeExample ? (
              <div className="mt-2 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  Example:
                </span>
                <code className="rounded-[0.5rem] border border-[var(--border)] bg-[var(--panel)] px-3 py-1 font-mono text-[12.5px] font-semibold tracking-wide text-[var(--foreground)]">
                  {variant.orderCodeExample}
                </code>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
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
  const hasVariants = product.variants && product.variants.length > 0;
  const hasSpecs = product.specs && product.specs.length > 0;
  const hasModelRows = product.modelRows && product.modelRows.length > 0;
  const hasHowToOrder = !!(product.howToOrder ?? product.orderCodeExample);
  const hasDiagram = !!product.diagram;

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <main id="main-content">
        {/* ── Hero section ── */}
        <PageContainer className="section-shell">
          <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            {/* Left: product info */}
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
              {product.routeGroupTitle ? (
                <p className="eyebrow">{product.routeGroupTitle}</p>
              ) : (
                <p className="eyebrow">{product.familyTitle}</p>
              )}
              <h1 className="display-hero mt-4 max-w-[16ch] text-[var(--foreground)]">
                {product.title}
              </h1>
              {product.badge ? (
                <span className="mt-3 inline-flex rounded-full border border-[var(--accent)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  {product.badge}
                </span>
              ) : null}
              <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_88%,transparent)]">
                {product.shortDescription}
              </p>
              <p className="body-copy mt-5">{product.overview}</p>

              {/* Finish / model tags */}
              {!hasVariants && product.finishOptions.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.finishOptions.map((option) => (
                    <span
                      key={option}
                      className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SmartLink
                  href={createInquiryHref(product.inquirySubject)}
                  className={buttonClassName()}
                >
                  Send Inquiry
                </SmartLink>
                <SmartLink href="/downloads" className={buttonClassName("secondary")}>
                  View Downloads
                </SmartLink>
              </div>
            </div>

            {/* Right: gallery */}
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

        {/* ── Overview / Features / Applications ── */}
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
              <ul className="mt-4 flex flex-col gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--muted-foreground)]">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-70" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-panel p-6">
              <p className="eyebrow">Applications</p>
              <ul className="mt-4 flex flex-col gap-3">
                {product.applications.map((application, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--muted-foreground)]">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-70" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </PageContainer>

        {/* ── Technical Specifications ── */}
        {(hasSpecs || product.comparisonSpecs) ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Technical Details</p>
              {product.comparisonSpecs ? (
                <div className={hasSpecs ? "mb-5" : ""}>
                  <ComparisonSpecTable data={product.comparisonSpecs} />
                </div>
              ) : null}
              {hasSpecs ? <SpecTable specs={product.specs!} /> : null}
            </section>
          </PageContainer>
        ) : null}

        {/* ── Model Table (non-variant products) ── */}
        {!hasVariants && hasModelRows ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Model Numbers</p>
              <ModelTable rows={product.modelRows!} />
              {hasHowToOrder ? (
                <div className="mt-5">
                  <HowToOrderBlock
                    howToOrder={product.howToOrder}
                    orderCodeExample={product.orderCodeExample}
                  />
                </div>
              ) : null}
            </section>
          </PageContainer>
        ) : null}

        {/* ── Variants (SA / DA, etc.) ── */}
        {hasVariants ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Models &amp; Variants</p>
              <div className="grid gap-5 md:grid-cols-2">
                {product.variants!.map((variant) => (
                  <VariantSection key={variant.key} variant={variant} />
                ))}
              </div>
            </section>
          </PageContainer>
        ) : null}

        {/* ── Technical Drawing / Diagram ── */}
        {hasDiagram ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Technical Drawing</p>
              <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6">
                <div className="relative mx-auto max-w-[36rem]">
                  <Image
                    src={product.diagram!}
                    alt={`${product.title} technical drawing`}
                    width={720}
                    height={480}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </section>
          </PageContainer>
        ) : null}

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 ? (
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
