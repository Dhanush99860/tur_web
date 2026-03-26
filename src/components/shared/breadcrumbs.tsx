import type { BreadcrumbItem } from "@/types";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <PageContainer>
      <nav aria-label="Breadcrumb" className="pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.name}-${item.path}`} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-[var(--foreground)]">
                    {item.name}
                  </span>
                ) : (
                  <SmartLink href={item.path} className="transition hover:text-[var(--foreground)]">
                    {item.name}
                  </SmartLink>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </PageContainer>
  );
}
