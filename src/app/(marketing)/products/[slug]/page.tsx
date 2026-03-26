import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogFamily, getCatalogSection } from "@/content/catalog/categories";
import { getProductBySlug, getRelatedProducts, products } from "@/content/catalog/products";
import { ProductDetailPage } from "@/features/catalog/components/product-detail-page";
import { StructuredData } from "@/features/seo/components/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema, createProductSchema } from "@/lib/schema/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return createPageMetadata({
      title: "Product Not Found",
      description: "The requested TUR product page could not be found.",
      path: "/products",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: product.title,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: [product.title, product.familyTitle, product.category],
  });
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const family = getCatalogFamily(product.section, product.familySlug);
  const section = getCatalogSection(product.section);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(section ? [{ name: section.title, path: `/${section.slug}` }] : []),
    ...(family
      ? [{ name: family.title, path: `/${family.section}/${family.slug}` }]
      : []),
    { name: product.title, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <StructuredData data={[createBreadcrumbSchema(breadcrumbs), createProductSchema(product)]} />
      <ProductDetailPage
        breadcrumbs={breadcrumbs}
        product={product}
        relatedProducts={getRelatedProducts(product, 3)}
      />
    </>
  );
}
