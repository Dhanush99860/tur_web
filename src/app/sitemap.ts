import type { MetadataRoute } from "next";
import { catalogFamilies, catalogSections } from "@/content/catalog/categories";
import { products } from "@/content/catalog/products";
import { pageSeo } from "@/content/site/seo";
import { absoluteUrl } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionLastModified = new Map(
    catalogSections.map((section) => [section.slug, section.updatedAt]),
  );
  const staticPages = [pageSeo.home, pageSeo.about, pageSeo.downloads, pageSeo.contact];

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((page, index) => ({
      url: absoluteUrl(page.path),
      lastModified: new Date(page.updatedAt ?? "2026-03-18"),
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : 0.88,
    })),
    ...catalogSections.map((section) => ({
      url: absoluteUrl(`/${section.slug}`),
      lastModified: new Date(section.updatedAt ?? "2026-03-19"),
      changeFrequency: "weekly" as const,
      priority: 0.84,
    })),
    ...catalogFamilies.map((family) => ({
      url: absoluteUrl(`/${family.section}/${family.slug}`),
      lastModified: new Date(
        sectionLastModified.get(family.section) ?? "2026-03-19",
      ),
      changeFrequency: "monthly" as const,
      priority: 0.76,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}`),
      lastModified: new Date(product.updatedAt ?? "2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];

  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
}
