import Image from "next/image";
import type { Product } from "@/types";
import { SmartLink } from "@/components/shared/smart-link";
import { ArrowUpRightIcon } from "@/components/shared/icons";

type ProductCardProps = {
  product: Product;
};

const CERT_BADGES: Record<string, string[]> = {
  "American Standard":         ["ANSI", "UL"],
  "European Ironmongery":      ["CE"],
  "Glass Hardware":            ["CE"],
  "Glass hinge / glass clip":  ["CE"],
  "Bathroom handle / glass knob": ["CE"],
  "Glass patch fitting":       ["CE"],
  "Glass pull handle":         ["CE"],
  "Glass lip seal":            ["CE"],
  "Access Control":            ["CE"],
  "Sealing Systems":           ["CE"],
  "Automatic Operators":       ["CE"],
  "Master Key Systems":        ["CE", "SKG"],
};

export function ProductCard({ product }: ProductCardProps) {
  const badges = CERT_BADGES[product.category] ?? [];

  return (
    <SmartLink
      href={`/products/${product.slug}`}
      className="card-panel group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div className="relative aspect-[1.1/1] overflow-hidden bg-[var(--surface)]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {badges.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded px-[6px] py-[3px] text-[7.5px] font-bold uppercase tracking-[0.12em] text-white"
                style={{ background: "rgba(0,0,0,0.52)", backdropFilter: "blur(4px)" }}
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.familyTitle}</p>
        <h3 className="display-subtitle mt-3 text-[var(--foreground)]">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-[var(--accent)]">
          <span>View details</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </div>
      </div>
    </SmartLink>
  );
}
