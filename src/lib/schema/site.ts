import type { BreadcrumbItem, Product } from "@/types";
import { absoluteSiteUrl, siteConfig } from "@/content/site/site-config";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: absoluteSiteUrl(siteConfig.logoPath),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["en"],
        areaServed: ["AE", "Middle East"],
      },
    ],
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    alternateName: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path),
    })),
  };
}

export function createProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription,
    sku: product.slug,
    category: product.familyTitle,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    image: product.gallery.map((item) => absoluteSiteUrl(item)),
    url: absoluteSiteUrl(`/products/${product.slug}`),
  };
}
