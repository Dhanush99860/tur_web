import Image from "next/image";
import type { Product } from "@/types";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type FeaturedProductShowcaseCardProps = {
  product: Product;
};

export function FeaturedProductShowcaseCard({ product }: FeaturedProductShowcaseCardProps) {
  const href = product.href ?? `/products/${product.slug}`;

  return (
    <SmartLink
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--border)_100%,transparent)] hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      {/* Badge */}
      {product.badge ? (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,var(--card))] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] ring-1 ring-[color-mix(in_srgb,var(--accent)_28%,transparent)]">
          {product.badge}
        </span>
      ) : null}

      {/* Image area */}
      <div className="relative overflow-hidden bg-[color-mix(in_srgb,var(--panel)_70%,white)]" style={{ aspectRatio: "4/3" }}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
        />
        {/* Subtle top gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,transparent_40%)]" />

        {/* Hover overlay — "Quick View" pill */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-800">
              View Details
            </span>
            <ArrowUpRightIcon className="h-3 w-3 text-slate-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          {product.familyTitle}
        </p>

        <h3 className="mt-3 max-w-[17ch] text-[1.15rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--foreground)] sm:text-[1.22rem]">
          {product.title}
        </h3>

        <div className="mt-3 flex flex-1 items-end justify-between gap-4">
          <p className="min-w-0 flex-1 text-[0.875rem] leading-[1.7] text-[var(--muted-foreground)]">
            {product.shortDescription}
          </p>

          <span className="mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_50%,transparent)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}
