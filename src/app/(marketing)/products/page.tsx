import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/content/catalog/products";
import { ProductsPage } from "@/features/products/products-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "All Products — Architectural Hardware & Automatic Entry Systems",
  description:
    "Browse the complete TUR catalogue — door hardware, glass systems, access control, sealing systems and automatic operators in one structured view.",
  path: "/products",
});

type ProductsLandingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ProductsLandingPage({ searchParams }: ProductsLandingPageProps) {
  const params = await searchParams;

  const initialSection = typeof params.s === "string" ? params.s : undefined;
  const initialFamily = typeof params.f === "string" ? params.f : undefined;
  const initialProduct = typeof params.product === "string" ? params.product : undefined;
  const initialPage =
    typeof params.page === "string" ? Math.max(1, parseInt(params.page, 10) || 1) : 1;

  return (
    <Suspense>
      <ProductsPage
        products={products}
        initialSection={initialSection}
        initialFamily={initialFamily}
        initialProduct={initialProduct}
        initialPage={initialPage}
      />
    </Suspense>
  );
}
