"use client";

import Image from "next/image";
import type { Product } from "@/types";
import { ArrowUpRightIcon, EyeIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";

const CATEGORY_ACCENT: Record<string, string> = {
  "American Standard":    "#4e8ae6",
  "European Ironmongery": "#b09a6a",
  "Glass Hardware":       "#64aa8c",
  "Access Control":       "#86a2e6",
  "Sealing Systems":      "#8fa8b6",
  "Automatic Operators":  "#c47c54",
};

function getAccent(product: Product) {
  return CATEGORY_ACCENT[product.category] ?? "#86a2e6";
}

type ProductCardProps = {
  product: Product;
  onQuickView: (slug: string) => void;
};

function ProductCard({ product, onQuickView }: ProductCardProps) {
  const accent = getAccent(product);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[0.85rem] border border-[var(--border)] bg-[var(--card)] transition-[box-shadow,border-color] duration-300 hover:border-[color-mix(in_srgb,var(--border)_50%,transparent)] hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.2)]">

      {/* ── Image — click = quick view ── */}
      <button
        type="button"
        onClick={() => onQuickView(product.slug)}
        aria-label={`Quick view ${product.title}`}
        className="group/img relative aspect-[4/3] w-full overflow-hidden bg-[var(--panel)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/img:scale-[1.04]"
        />

        {/* Badge */}
        {product.badge ? (
          <span
            className="absolute left-3 top-3 z-20 rounded-full px-2.5 py-1 text-[7.5px] font-bold uppercase tracking-[0.18em] text-white"
            style={{ background: accent }}
          >
            {product.badge}
          </span>
        ) : null}

        {/* Slide-up Quick View bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex h-11 translate-y-full items-center justify-center gap-2 bg-[rgba(6,8,10,0.78)] opacity-0 transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:translate-y-0 group-hover/img:opacity-100">
          <EyeIcon className="h-3.5 w-3.5 text-white" />
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
            Quick View
          </span>
        </div>
      </button>

      {/* ── Card body ── */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
        <p
          className="text-[8px] font-bold uppercase tracking-[0.28em]"
          style={{ color: accent }}
        >
          {product.familyTitle}
        </p>

        {/* Title + circle arrow */}
        <div className="mt-1.5 flex items-start gap-2">
          <h3 className="flex-1 text-[0.95rem] font-medium leading-[1.18] tracking-[-0.025em] text-[var(--foreground)]">
            {product.title}
          </h3>
          <SmartLink
            href={`/products/${product.slug}`}
            aria-label={`View details for ${product.title}`}
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-[border-color,background-color,color] duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            <ArrowUpRightIcon className="h-3 w-3" />
          </SmartLink>
        </div>

        <p className="mt-1.5 line-clamp-2 text-[12px] leading-[1.72] text-[var(--muted-foreground)]">
          {product.shortDescription}
        </p>
      </div>

      {/* Left accent stripe */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-hover:opacity-60"
        style={{ background: accent }}
      />
    </article>
  );
}

type ProductGridProps = {
  products: Product[];
  onQuickView: (slug: string) => void;
};

export function ProductGrid({ products, onQuickView }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-[1.25rem] border border-dashed border-[var(--border)] text-center">
        <p className="text-[0.95rem] font-medium text-[var(--foreground)]">No products match</p>
        <p className="text-[13px] text-[var(--muted-foreground)]">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
}
