"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { ProductFilterPanel } from "@/features/products/components/product-filter-panel";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductQuickView } from "@/features/products/components/product-quick-view";
import { cn } from "@/lib/utils/cn";

const PER_PAGE = 18;

function buildPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

type ProductsPageProps = {
  products: Product[];
  initialSection?: string;
  initialFamily?: string;
  initialProduct?: string;
  initialPage?: number;
};

export function ProductsPage({
  products,
  initialSection,
  initialFamily,
  initialProduct,
  initialPage = 1,
}: ProductsPageProps) {
  const router = useRouter();
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string | undefined>(initialSection);
  const [activeFamily, setActiveFamily] = useState<string | undefined>(initialFamily);
  const [quickViewSlug, setQuickViewSlug] = useState<string | undefined>(initialProduct);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const syncUrl = useCallback(
    (
      section: string | undefined,
      family: string | undefined,
      product: string | undefined,
      page: number,
    ) => {
      const params = new URLSearchParams();
      if (section) params.set("s", section);
      if (family) params.set("f", family);
      if (product) params.set("product", product);
      if (page > 1) params.set("page", String(page));
      const qs = params.toString();
      const url = qs ? (`/products?${qs}` as "/products") : "/products";
      router.replace(url, { scroll: false });
    },
    [router],
  );

  function handleSectionChange(section: string | undefined) {
    setActiveSection(section);
    setActiveFamily(undefined);
    setCurrentPage(1);
    syncUrl(section, undefined, quickViewSlug, 1);
  }

  function handleFamilyChange(family: string | undefined) {
    setActiveFamily(family);
    setCurrentPage(1);
    syncUrl(activeSection, family, quickViewSlug, 1);
  }

  function handleOpenQuickView(slug: string) {
    setQuickViewSlug(slug);
    syncUrl(activeSection, activeFamily, slug, currentPage);
  }

  function handleCloseQuickView() {
    setQuickViewSlug(undefined);
    syncUrl(activeSection, activeFamily, undefined, currentPage);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    syncUrl(activeSection, activeFamily, undefined, page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (p.isRouteGroup) return false;
      if (activeSection && p.section !== activeSection) return false;
      if (activeFamily && p.familySlug !== activeFamily) return false;
      return true;
    });
  }, [products, activeSection, activeFamily]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return filteredProducts.slice(start, start + PER_PAGE);
  }, [filteredProducts, safePage]);

  const quickViewProduct = useMemo(
    () => products.find((p) => p.slug === quickViewSlug),
    [products, quickViewSlug],
  );

  const familyCounts = useMemo(() => {
    const sectionProducts = activeSection
      ? products.filter((p) => p.section === activeSection && !p.isRouteGroup)
      : products.filter((p) => !p.isRouteGroup);
    const counts: Record<string, number> = {};
    for (const p of sectionProducts) {
      counts[p.familySlug] = (counts[p.familySlug] ?? 0) + 1;
    }
    return counts;
  }, [products, activeSection]);

  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of products) {
      if (!p.isRouteGroup) counts[p.section] = (counts[p.section] ?? 0) + 1;
    }
    return counts;
  }, [products]);

  const pageNumbers = buildPageNumbers(safePage, totalPages);
  const startItem = (safePage - 1) * PER_PAGE + 1;
  const endItem = Math.min(safePage * PER_PAGE, filteredProducts.length);

  return (
    <main id="main-content" className="min-h-screen pb-24 pt-10 sm:pt-14">
      <PageContainer>
        {/* Page header */}
        <div className="mb-8 border-b border-[var(--border)] pb-8 sm:mb-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
            Full Catalogue
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="font-display text-[clamp(1.8rem,3.5vw,2.9rem)] font-medium leading-[1.02] tracking-[-0.046em] text-[var(--foreground)]">
              All{" "}
              <em className="italic text-[var(--accent)]">Products</em>
            </h1>
            <p className="max-w-[36rem] text-[13.5px] leading-[1.78] text-[var(--muted-foreground)] sm:pb-0.5 sm:text-right">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} across
              door hardware, glass systems, access control and automatic operators.
            </p>
          </div>
        </div>

        {/* Layout: sidebar + grid */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="w-full shrink-0 lg:sticky lg:top-[6rem] lg:w-[17rem] xl:w-[19rem]">
            <ProductFilterPanel
              products={products}
              activeSection={activeSection}
              activeFamily={activeFamily}
              sectionCounts={sectionCounts}
              familyCounts={familyCounts}
              onSectionChange={handleSectionChange}
              onFamilyChange={handleFamilyChange}
            />
          </aside>

          <div className="min-w-0 flex-1">
            {/* Grid anchor for scroll-to */}
            <div ref={gridRef} className="scroll-mt-24">
              <ProductGrid products={paginatedProducts} onQuickView={handleOpenQuickView} />
            </div>

            {/* Pagination */}
            {totalPages > 1 ? (
              <div className="mt-10 flex flex-col items-center gap-5 border-t border-[var(--border)] pt-8 sm:flex-row sm:justify-between">
                {/* Count label */}
                <p className="shrink-0 text-[12.5px] text-[var(--muted-foreground)]">
                  Showing{" "}
                  <span className="font-semibold text-[var(--foreground)]">
                    {startItem}–{endItem}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-[var(--foreground)]">
                    {filteredProducts.length}
                  </span>
                </p>

                {/* Page controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={safePage === 1}
                    onClick={() => handlePageChange(safePage - 1)}
                    className="inline-flex h-9 items-center gap-1.5 rounded-[0.6rem] border border-[var(--border)] px-3.5 text-[11px] font-semibold text-[var(--muted-foreground)] transition-[border-color,color] duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
                  >
                    ← Prev
                  </button>

                  {pageNumbers.map((p, i) =>
                    p === "…" ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="flex h-9 w-8 items-center justify-center text-[13px] text-[var(--muted-foreground)]"
                      >
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePageChange(p as number)}
                        className={cn(
                          "inline-flex h-9 w-9 items-center justify-center rounded-[0.6rem] text-[12.5px] font-semibold transition-[border-color,color,background-color] duration-150",
                          p === safePage
                            ? "bg-[var(--accent)] text-white"
                            : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                        )}
                      >
                        {p}
                      </button>
                    ),
                  )}

                  <button
                    type="button"
                    disabled={safePage === totalPages}
                    onClick={() => handlePageChange(safePage + 1)}
                    className="inline-flex h-9 items-center gap-1.5 rounded-[0.6rem] border border-[var(--border)] px-3.5 text-[11px] font-semibold text-[var(--muted-foreground)] transition-[border-color,color] duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
                  >
                    Next →
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </PageContainer>

      {/* Quick-view modal */}
      {quickViewProduct ? (
        <ProductQuickView product={quickViewProduct} onClose={handleCloseQuickView} />
      ) : null}
    </main>
  );
}
