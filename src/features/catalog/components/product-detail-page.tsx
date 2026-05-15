import Image from "next/image";
import type {
  BreadcrumbItem,
  HowToOrderTable,
  Product,
  ProductAccessory,
  ProductComparisonSpec,
  ProductDetailImage,
  ProductFeatureList,
  ProductInstallationDetail,
  ProductModelRow,
  ProductSolutionComponent,
  ProductSpec,
  ProductVariant,
  TechnicalDrawing,
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
        {variant.specs && variant.specs.length > 0 ? (
          <div>
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Specifications
            </p>
            <SpecTable specs={variant.specs} />
          </div>
        ) : null}
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

// ── Technical drawings (multi-variant or single) ─────────────────────────────
function TechnicalDrawingsSection({ drawings }: { drawings: TechnicalDrawing[] }) {
  return (
    <div className={`grid gap-5${drawings.length > 1 ? " md:grid-cols-2" : ""}`}>
      {drawings.map((drawing, i) => (
        <div
          key={drawing.variant ?? `drawing-${i}`}
          className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]"
        >
          <div className="flex items-center justify-center bg-white p-6 sm:p-8">
            <Image
              src={drawing.image}
              alt={drawing.alt}
              width={600}
              height={400}
              className="h-auto max-h-[22rem] w-full object-contain"
            />
          </div>
          <div className="border-t border-[var(--border)] px-5 py-3.5">
            {drawing.variant ? (
              <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
                {drawing.variant}
              </p>
            ) : null}
            <p className={`${drawing.variant ? "mt-1 " : ""}text-[13px] font-medium leading-snug text-[var(--foreground)]`}>
              {drawing.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Feature list section (lever designs, code lists, image-only, etc.) ────────
function FeatureListSection({ list }: { list: ProductFeatureList }) {
  // Image-only variant (no items) — renders the image full-width with caption
  if (list.items.length === 0 && list.image) {
    return (
      <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]">
        <div className="flex items-center justify-center bg-white p-6 sm:p-8">
          <Image
            src={list.image}
            alt={list.imageAlt ?? list.title}
            width={800}
            height={500}
            className="h-auto max-h-[24rem] w-full object-contain"
          />
        </div>
        {list.caption ? (
          <div className="border-t border-[var(--border)] px-5 py-3.5">
            <p className="text-[13px] leading-snug text-[var(--muted-foreground)]">
              {list.caption}
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  // Bullet/paragraph list variant — renders items as prose bullets
  if (list.items.length > 0 && !list.image) {
    return (
      <div className="card-panel p-6">
        <ul className="flex flex-col gap-2.5">
          {list.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] leading-[1.75] text-[var(--muted-foreground)]">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-70" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Default: code-pill list with optional image aside
  return (
    <div className={list.image ? "grid gap-5 lg:grid-cols-[1fr_0.9fr]" : ""}>
      <div className="card-panel p-6">
        <div className="flex flex-wrap gap-2">
          {list.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 font-mono text-[12px] font-semibold tracking-wide text-[var(--foreground)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {list.image ? (
        <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center justify-center bg-white p-6 sm:p-8">
            <Image
              src={list.image}
              alt={list.imageAlt ?? list.title}
              width={600}
              height={400}
              className="h-auto max-h-[20rem] w-full object-contain"
            />
          </div>
          {list.caption ? (
            <div className="border-t border-[var(--border)] px-5 py-3.5">
              <p className="text-[13px] leading-snug text-[var(--muted-foreground)]">
                {list.caption}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

// ── Solution component cards (image + bullets) ───────────────────────────────
function SolutionComponentCard({ item }: { item: ProductSolutionComponent }) {
  return (
    <div className="card-panel overflow-hidden p-0">
      {item.image ? (
        <div className="flex items-center justify-center bg-white p-6">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={400}
            height={300}
            className="h-auto max-h-[12rem] w-full object-contain"
          />
        </div>
      ) : null}
      <div className={`p-5${item.image ? " border-t border-[var(--border)]" : ""}`}>
        <p className="eyebrow">{item.title}</p>
        {item.bullets.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-2">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[12.5px] leading-[1.65] text-[var(--muted-foreground)]">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-60" />
                {b}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

// ── Product detail images (views / function images) ──────────────────────────
function DetailImagesSection({ images }: { images: ProductDetailImage[] }) {
  return (
    <div className={`grid gap-5${images.length > 1 ? " sm:grid-cols-2" : ""}`}>
      {images.map((img, i) => (
        <div
          key={`detail-img-${i}`}
          className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]"
        >
          <div className="flex items-center justify-center bg-white p-6 sm:p-8">
            <Image
              src={img.image}
              alt={img.alt}
              width={600}
              height={400}
              className="h-auto max-h-[22rem] w-full object-contain"
            />
          </div>
          <div className="border-t border-[var(--border)] px-5 py-3.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
              {img.title}
            </p>
            <p className="mt-1 text-[13px] font-medium leading-snug text-[var(--foreground)]">
              {img.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Available options list ────────────────────────────────────────────────────
function AvailableOptionsBlock({ options }: { options: string[] }) {
  return (
    <div className="card-panel p-5">
      <p className="eyebrow">Available Options</p>
      <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {options.map((opt) => (
          <li key={opt} className="flex items-center gap-2 text-[12.5px] leading-[1.6] text-[var(--muted-foreground)]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-60" />
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Accessories table ─────────────────────────────────────────────────────────
function AccessoriesBlock({ accessories }: { accessories: ProductAccessory[] }) {
  return (
    <div className="card-panel p-5">
      <p className="eyebrow">Accessories</p>
      <div className="mt-4 overflow-hidden rounded-[0.75rem] border border-[var(--border)]">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--panel)]">
              <th className="px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                Accessory
              </th>
              <th className="w-[10rem] px-4 py-2.5 text-left font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {accessories.map((acc) => (
              <tr key={acc.label} className="group">
                <td className="px-4 py-3 leading-snug text-[var(--foreground)]">
                  {acc.label}
                  {acc.note ? (
                    <span className="ml-2 text-[11px] text-[var(--muted-foreground)]">
                      ({acc.note})
                    </span>
                  ) : null}
                </td>
                <td className="px-4 py-3 leading-snug">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] ${
                      acc.status === "Standard"
                        ? "bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)]"
                        : "bg-[var(--panel)] text-[var(--muted-foreground)]"
                    }`}
                  >
                    {acc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Structured how-to-order table ─────────────────────────────────────────────
function HowToOrderTableBlock({
  table,
  orderCodeExample,
}: {
  table: HowToOrderTable;
  orderCodeExample?: string;
}) {
  return (
    <div className="card-panel p-5">
      <p className="eyebrow">How to Order</p>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
        {table.columns.map((col) => (
          <div key={col.label}>
            <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              {col.label}
            </p>
            <ul className="flex flex-col gap-1">
              {col.values.map((val) => (
                <li key={val} className="text-[12px] leading-[1.5] text-[var(--muted-foreground)]">
                  {val}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {orderCodeExample ? (
        <div className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
            Example:
          </span>
          <code className="rounded-[0.5rem] border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 font-mono text-[13px] font-semibold tracking-wide text-[var(--foreground)]">
            {orderCodeExample}
          </code>
        </div>
      ) : null}
      {table.note ? (
        <p className="mt-3 text-[12px] italic leading-[1.65] text-[var(--muted-foreground)]">
          {table.note}
        </p>
      ) : null}
    </div>
  );
}

// ── Individual installation section (Regular Arm / Parallel Arm / Top Jamb / etc.) ──
function InstallationDetailSection({ item }: { item: ProductInstallationDetail }) {
  return (
    <div>
      {item.description ? (
        <p className="mb-4 text-[13.5px] leading-[1.78] text-[var(--muted-foreground)]">
          {item.description}
        </p>
      ) : null}
      <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)]">
        <div className="flex items-center justify-center bg-white p-6 sm:p-8">
          <Image
            src={item.image}
            alt={item.alt}
            width={960}
            height={540}
            className="h-auto max-h-[36rem] w-full object-contain"
          />
        </div>
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
  const hasTechnicalDrawings = !!product.technicalDrawings && product.technicalDrawings.length > 0;
  const hasHowToOrderTable = !!product.howToOrderTable;
  const hasAvailableOptions = !!product.availableOptions && product.availableOptions.length > 0;
  const hasAccessories = !!product.accessories && product.accessories.length > 0;
  const hasInstallationDetails = !!product.installationDetails && product.installationDetails.length > 0;
  const hasDetailImages = !!product.detailImages && product.detailImages.length > 0;
  const hasFeatureLists = !!product.featureLists && product.featureLists.length > 0;
  const hasSolutionComponents = !!product.solutionComponents && product.solutionComponents.length > 0;
  const hasCylinderLegend = !!product.cylinderLegend && product.cylinderLegend.length > 0;
  const hasPostSpecsFeatureLists = !!product.postSpecsFeatureLists && product.postSpecsFeatureLists.length > 0;

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

        {/* ── Product Brief ── */}
        {product.productBrief ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Product Brief</p>
              <div className="card-panel p-6">
                <p className="text-[13.5px] leading-[1.78] text-[var(--muted-foreground)]">
                  {product.productBrief}
                </p>
              </div>
            </section>
          </PageContainer>
        ) : null}

        {/* ── Feature Lists (lever designs, code option lists, etc.) ── */}
        {hasFeatureLists ? (
          <>
            {product.featureLists!.map((fl, i) => (
              <PageContainer key={`fl-${i}`} className="section-shell pt-0">
                <section>
                  <p className="eyebrow mb-4">{fl.title}</p>
                  <FeatureListSection list={fl} />
                </section>
              </PageContainer>
            ))}
          </>
        ) : null}

        {/* ── Solution Components (image + bullets grid) ── */}
        {hasSolutionComponents ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Solution Components</p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {product.solutionComponents!.map((item) => (
                  <SolutionComponentCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </PageContainer>
        ) : null}

        {/* ── Technical Specifications ── */}
        {/* comparisonSpecs renders here for variant/no-model-rows products. specs only renders here when installationDetails is absent; otherwise specs move to the Product Description section below. */}
        {((hasSpecs && !hasInstallationDetails) || (product.comparisonSpecs && (hasVariants || !hasModelRows))) ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Technical Details</p>
              {product.comparisonSpecs && (hasVariants || !hasModelRows) ? (
                <div className={hasSpecs && !hasInstallationDetails ? "mb-5" : ""}>
                  {product.comparisonSpecs.title ? (
                    <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      {product.comparisonSpecs.title}
                    </p>
                  ) : null}
                  <ComparisonSpecTable data={product.comparisonSpecs} />
                </div>
              ) : null}
              {hasSpecs && !hasInstallationDetails ? <SpecTable specs={product.specs!} /> : null}
            </section>
          </PageContainer>
        ) : null}

        {/* ── Model Table (non-variant products) ── */}
        {!hasVariants && hasModelRows ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">{product.modelSectionTitle ?? "Model Numbers"}</p>
              <ModelTable rows={product.modelRows!} />
              {hasTechnicalDrawings ? (
                <div className="mt-6">
                  <p className="eyebrow mb-3">Technical Drawing</p>
                  <TechnicalDrawingsSection drawings={product.technicalDrawings!} />
                </div>
              ) : null}
              {product.comparisonSpecs && !hasVariants ? (
                <div className="mt-5">
                  {product.comparisonSpecs.title ? (
                    <p className="eyebrow mb-3">{product.comparisonSpecs.title}</p>
                  ) : null}
                  <ComparisonSpecTable data={product.comparisonSpecs} />
                </div>
              ) : null}
              {hasAvailableOptions ? (
                <div className="mt-5">
                  <AvailableOptionsBlock options={product.availableOptions!} />
                </div>
              ) : null}
              {hasHowToOrderTable ? (
                <div className="mt-5">
                  <HowToOrderTableBlock
                    table={product.howToOrderTable!}
                    orderCodeExample={product.orderCodeExample}
                  />
                </div>
              ) : null}
              {hasHowToOrder && !hasHowToOrderTable ? (
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

        {/* ── Product Views (detail images / function images) ── */}
        {hasDetailImages ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Product Views</p>
              <DetailImagesSection images={product.detailImages!} />
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

        {/* ── Technical Drawings — standalone section for variant products or products without model rows ── */}
        {hasTechnicalDrawings && (hasVariants || !hasModelRows) ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">
                {product.technicalDrawingsSectionTitle ??
                  (product.technicalDrawings!.length === 1 ? "Technical Drawing" : "Technical Drawings")}
              </p>
              <TechnicalDrawingsSection drawings={product.technicalDrawings!} />
            </section>
          </PageContainer>
        ) : null}

        {/* ── Post-specs feature lists (Standard Mortise Cylinders, Certifications, Strike Plate, etc.) ── */}
        {hasPostSpecsFeatureLists ? (
          <>
            {product.postSpecsFeatureLists!.map((fl, i) => (
              <PageContainer key={`psfl-${i}`} className="section-shell pt-0">
                <section>
                  <p className="eyebrow mb-4">{fl.title}</p>
                  <FeatureListSection list={fl} />
                </section>
              </PageContainer>
            ))}
          </>
        ) : null}

        {/* ── Installation Details — individual sections for Regular Arm / Parallel Arm / Top Jamb / Power Chart etc. ── */}
        {hasInstallationDetails ? (
          <>
            {product.installationDetails!.map((item, i) => (
              <PageContainer key={`install-${i}`} className="section-shell pt-0">
                <section>
                  <p className="eyebrow mb-4">{item.title}</p>
                  <InstallationDetailSection item={item} />
                </section>
              </PageContainer>
            ))}
          </>
        ) : null}

        {/* ── Product Description — specs table for products that use installationDetails ── */}
        {hasInstallationDetails && hasSpecs ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Product Description</p>
              <SpecTable specs={product.specs!} />
            </section>
          </PageContainer>
        ) : null}

        {/* ── Options & Ordering — for products without model rows (e.g. closers) ── */}
        {!hasVariants && !hasModelRows && (hasAvailableOptions || hasAccessories || hasHowToOrderTable || (hasHowToOrder && !hasHowToOrderTable)) ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Options &amp; Ordering</p>
              <div className="flex flex-col gap-5">
                {hasAvailableOptions ? (
                  <AvailableOptionsBlock options={product.availableOptions!} />
                ) : null}
                {hasAccessories ? (
                  <AccessoriesBlock accessories={product.accessories!} />
                ) : null}
                {hasHowToOrderTable ? (
                  <HowToOrderTableBlock
                    table={product.howToOrderTable!}
                    orderCodeExample={product.orderCodeExample}
                  />
                ) : null}
                {hasHowToOrder && !hasHowToOrderTable ? (
                  <HowToOrderBlock
                    howToOrder={product.howToOrder}
                    orderCodeExample={product.orderCodeExample}
                  />
                ) : null}
              </div>
            </section>
          </PageContainer>
        ) : null}

        {/* ── Cylinder Legend ── */}
        {hasCylinderLegend ? (
          <PageContainer className="section-shell pt-0">
            <section>
              <p className="eyebrow mb-4">Cylinder</p>
              <SpecTable specs={product.cylinderLegend!} />
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
