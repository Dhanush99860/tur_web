import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogFamily } from "@/content/catalog/categories";
import { pageSeo } from "@/content/site/seo";
import { CatalogFamilyLandingPage } from "@/features/catalog/components/catalog-family-landing-page";
import { StructuredData } from "@/features/seo/components/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema } from "@/lib/schema/site";

type AutomaticOperatorFamilyPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: AutomaticOperatorFamilyPageProps): Promise<Metadata> {
  const { category } = await params;
  const family = getCatalogFamily("automatic-operators", category);

  if (!family) {
    return createPageMetadata({
      title: "Automatic Operators Page Not Found",
      description: "The requested automatic operators family page could not be found.",
      path: pageSeo.automaticOperators.path,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: family.title,
    description: family.description,
    path: `/automatic-operators/${family.slug}`,
    image: family.image,
    keywords: family.keywords,
  });
}

export function generateStaticParams() {
  return [
    "sliding-doors",
    "controlled-physical-access",
    "revolving-doors",
    "swing-door-drives",
    "all-glass-systems",
    "automatic-pulse-generators-and-sensors",
  ].map((category) => ({ category }));
}

export default async function AutomaticOperatorFamilyPage({ params }: AutomaticOperatorFamilyPageProps) {
  const { category } = await params;
  const family = getCatalogFamily("automatic-operators", category);

  if (!family) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Automatic Operators", path: "/automatic-operators" },
    { name: family.title, path: `/automatic-operators/${family.slug}` },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <CatalogFamilyLandingPage family={family} breadcrumbs={breadcrumbs} />
    </>
  );
}
