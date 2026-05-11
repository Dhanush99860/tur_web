import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogFamily } from "@/content/catalog/categories";
import { getRouteGroup, routeGroups } from "@/content/catalog/route-groups";
import { products } from "@/content/catalog/products";
import { CatalogRouteGroupPage } from "@/features/catalog/components/catalog-route-group-page";
import { StructuredData } from "@/features/seo/components/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema } from "@/lib/schema/site";

type RouteGroupPageProps = {
  params: Promise<{ category: string; group: string }>;
};

export async function generateMetadata({ params }: RouteGroupPageProps): Promise<Metadata> {
  const { category, group: groupSlug } = await params;
  const group = getRouteGroup("door-hardware", category, groupSlug);

  if (!group) {
    return createPageMetadata({
      title: "Page Not Found",
      description: "The requested page could not be found.",
      path: `/door-hardware/${category}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${group.title} — ${group.familyTitle}`,
    description: group.description,
    path: `/door-hardware/${category}/${groupSlug}`,
    image: group.image,
    keywords: group.keywords,
  });
}

export function generateStaticParams() {
  return routeGroups
    .filter((g) => g.section === "door-hardware")
    .map((g) => ({ category: g.familySlug, group: g.slug }));
}

export default async function DoorHardwareRouteGroupPage({ params }: RouteGroupPageProps) {
  const { category, group: groupSlug } = await params;
  const group = getRouteGroup("door-hardware", category, groupSlug);

  if (!group) notFound();

  const familyData = getCatalogFamily("door-hardware", category);
  if (!familyData) notFound();

  const groupProducts = products.filter(
    (p) =>
      p.section === "door-hardware" &&
      p.familySlug === category &&
      p.routeGroupSlug === groupSlug &&
      !p.isRouteGroup,
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Door Hardware", path: "/door-hardware" },
    { name: familyData.title, path: `/door-hardware/${category}` },
    { name: group.title, path: `/door-hardware/${category}/${groupSlug}` },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <CatalogRouteGroupPage
        group={group}
        products={groupProducts}
        breadcrumbs={breadcrumbs}
        familyHref={`/door-hardware/${category}`}
      />
    </>
  );
}
