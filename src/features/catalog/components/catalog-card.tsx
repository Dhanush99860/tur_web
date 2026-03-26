import Image from "next/image";
import type { CatalogCard } from "@/types";
import { SmartLink } from "@/components/shared/smart-link";

type CatalogCardProps = {
  card: CatalogCard;
};

export function CatalogCard({ card }: CatalogCardProps) {
  const content = (
    <>
      {card.image ? (
        <div className="relative aspect-[1.35/1] overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
          <Image
            src={card.image}
            alt={card.imageAlt ?? card.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex h-full flex-col p-5">
        {card.eyebrow ? <p className="eyebrow">{card.eyebrow}</p> : null}
        <h3 className="display-subtitle mt-3 text-[var(--foreground)]">{card.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{card.description}</p>
        <div className="mt-auto pt-6 text-sm font-medium text-[var(--accent)]">
          {card.href ? card.ctaLabel ?? "View Page" : card.note ?? "Available on request"}
        </div>
      </div>
    </>
  );

  if (card.href) {
    return (
      <SmartLink href={card.href} className="card-panel flex h-full flex-col overflow-hidden transition hover:border-[var(--accent)]">
        {content}
      </SmartLink>
    );
  }

  return <article className="card-panel flex h-full flex-col overflow-hidden">{content}</article>;
}
