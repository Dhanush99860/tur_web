import Image from "next/image";
import type { Product } from "@/types";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type FeaturedProductShowcaseCardProps = {
  product: Product;
};

export function FeaturedProductShowcaseCard({
  product,
}: FeaturedProductShowcaseCardProps) {
  return (
    <SmartLink
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[0.85rem] border border-[rgba(38,38,38,0.04)] bg-[color-mix(in_srgb,var(--panel)_56%,white)] p-4 sm:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      {product.badge ? (
        <span className="absolute left-4 top-4 z-20 rounded-full border border-[color-mix(in_srgb,var(--accent)_18%,white)] bg-[color-mix(in_srgb,var(--accent)_10%,white)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
          {product.badge}
        </span>
      ) : null}

      <div className="relative flex min-h-[15.25rem] items-start justify-center overflow-visible rounded-[0.55rem] bg-transparent pt-4 sm:min-h-[16.25rem]">
        <div className="pointer-events-none absolute inset-x-[14%] bottom-6 h-8 rounded-full bg-[rgba(18,20,20,0.16)] blur-2xl transition-opacity duration-300 group-hover:opacity-90" />

        <div className="relative w-[92%] max-w-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
          <div className="relative bg-white p-2 shadow-[0_24px_34px_-24px_rgba(0,0,0,0.24)]">
            <div className="relative aspect-[0.92/1] overflow-hidden bg-[color-mix(in_srgb,var(--surface)_70%,white)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%,rgba(12,15,20,0.06)_100%)]" />
              <div className="absolute inset-y-0 left-[-34%] z-10 w-[60%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[54%] group-hover:opacity-100" />
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.1]"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-0.7rem] z-20 translate-y-2 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-y-0 group-hover:opacity-100">
          <div className="border border-[color-mix(in_srgb,var(--border)_88%,white)] bg-white px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] shadow-[0_12px_24px_-18px_rgba(0,0,0,0.18)]">
            Explore Product
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          {product.familyTitle}
        </p>

        <h3 className="mt-4 max-w-[17ch] text-[1.28rem] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-[1.34rem]">
          {product.title}
        </h3>
        <div className="mt-3 flex flex-1 items-end justify-between gap-4">
          <p className="min-w-0 flex-1 text-[0.96rem] leading-7 text-[var(--muted-foreground)]">
            {product.shortDescription}
          </p>

          <span className="mb-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_64%,white)] bg-transparent text-[var(--accent)] transition duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRightIcon className="h-4.5 w-4.5" />
          </span>
        </div>
      </div>
    </SmartLink>
  );
}
