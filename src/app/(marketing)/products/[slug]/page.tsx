import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getCatalogFamily, getCatalogSection } from "@/content/catalog/categories";
import { getRouteGroup } from "@/content/catalog/route-groups";
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

const routeGroupAliasRedirects: Record<string, string> = {
  "american-bolt-the-door": "/door-hardware/american-standard/bolt-the-door",
  "american-ancillary-products": "/door-hardware/american-standard/ancillary-products",
  "american-emergency-exits": "/door-hardware/american-standard/emergency-exits",
  "american-furnish-the-door": "/door-hardware/american-standard/furnish-the-door",
  "euro-hang-the-door": "/door-hardware/european-ironmongery/hang-the-door",
  "euro-control-the-door": "/door-hardware/european-ironmongery/control-the-door",
  "euro-secure-the-door": "/door-hardware/european-ironmongery/secure-the-door",
  "euro-ancillary-products": "/door-hardware/european-ironmongery/ancillary-products",
  "euro-emergency-exits": "/door-hardware/european-ironmongery/emergency-exits",
  "bolt-the-door": "/door-hardware/european-ironmongery/bolt-the-door",
  "furnish-the-door": "/door-hardware/european-ironmongery/furnish-the-door",
  "cylinders": "/door-hardware/european-ironmongery/cylinders",
  "furnish-the-door-lever-handle":
    "/door-hardware/european-ironmongery/furnish-the-door-lever-handle",
  "glass-hinge-glass-clip": "/door-hardware/glass-hardware/glass-hinge-glass-clip",
  "bathroom-handle-glass-knob": "/door-hardware/glass-hardware/bathroom-handle-glass-knob",
  "patch-fitting": "/door-hardware/glass-hardware/patch-fitting",
  "pull-handle": "/door-hardware/glass-hardware/pull-handle",
  "lipseal": "/door-hardware/glass-hardware/lipseal",
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.isRouteGroup) {
    return createPageMetadata({
      title: "Product Not Found",
      description: "The requested TUR product page could not be found.",
      path: "/products",
      noIndex: true,
    });
  }

  // Option-only pages (isIndexable: false) remain accessible but must not be indexed
  if (product.isIndexable === false) {
    return createPageMetadata({
      title: product.title,
      description: product.shortDescription,
      path: `/products/${product.slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: product.routeGroupTitle
      ? `${product.title} — ${product.routeGroupTitle}`
      : product.title,
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

  if (!product) notFound();

  // Route-group "products" are listing pages — redirect to canonical route group URL
  if (product.isRouteGroup) {
    // Cast needed: Next.js typed router doesn't resolve 3-level dynamic paths at compile time
    redirect(
      (routeGroupAliasRedirects[product.slug] ??
        `/${product.section}/${product.familySlug}/${product.slug}`) as never,
    );
  }

  const family = getCatalogFamily(product.section, product.familySlug);
  const section = getCatalogSection(product.section);

  // Build breadcrumb: Home → Section → Family → [RouteGroup] → Product
  const routeGroup =
    product.routeGroupSlug && product.section === "door-hardware"
      ? getRouteGroup(product.section, product.familySlug, product.routeGroupSlug)
      : undefined;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(section ? [{ name: section.title, path: `/${section.slug}` }] : []),
    ...(family
      ? [{ name: family.title, path: `/${family.section}/${family.slug}` }]
      : []),
    ...(routeGroup
      ? [
          {
            name: routeGroup.title,
            path: `/${routeGroup.section}/${routeGroup.familySlug}/${routeGroup.slug}`,
          },
        ]
      : []),
    { name: product.title, path: `/products/${product.slug}` },
  ];

  // Option-only pages: emit breadcrumb schema only, no Product schema
  const structuredData = product.isIndexable === false
    ? [createBreadcrumbSchema(breadcrumbs)]
    : [createBreadcrumbSchema(breadcrumbs), createProductSchema(product)];

  return (
    <>
      <StructuredData data={structuredData} />
      <ProductDetailPage
        breadcrumbs={breadcrumbs}
        product={product}
        relatedProducts={getRelatedProducts(product, 3)}
      />
    </>
  );
}
