import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogFamily } from "@/content/catalog/categories";
import { pageSeo } from "@/content/site/seo";
import { CatalogFamilyLandingPage } from "@/features/catalog/components/catalog-family-landing-page";
import { CatalogLandingPage } from "@/features/catalog/components/catalog-landing-page";
import { StructuredData } from "@/features/seo/components/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema } from "@/lib/schema/site";

type DoorHardwareFamilyPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({
  params,
}: DoorHardwareFamilyPageProps): Promise<Metadata> {
  const { category } = await params;
  const family = getCatalogFamily("door-hardware", category);

  if (!family) {
    return createPageMetadata({
      title: "Door Hardware Page Not Found",
      description: "The requested door hardware family page could not be found.",
      path: pageSeo.doorHardware.path,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: family.title,
    description: family.description,
    path: `/door-hardware/${family.slug}`,
    image: family.image,
    keywords: family.keywords,
  });
}

export function generateStaticParams() {
  return ["american-standard", "european-ironmongery", "glass-hardware", "access-control", "sealing-systems"].map(
    (category) => ({
      category,
    }),
  );
}

export default async function DoorHardwareFamilyPage({
  params,
}: DoorHardwareFamilyPageProps) {
  const { category } = await params;
  const family = getCatalogFamily("door-hardware", category);

  if (!family) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Door Hardware", path: "/door-hardware" },
    { name: family.title, path: `/door-hardware/${family.slug}` },
  ];

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema(breadcrumbs)}
      />
      {family.familyHub ? (
        <CatalogFamilyLandingPage family={family} breadcrumbs={breadcrumbs} />
      ) : (
        <CatalogLandingPage
          breadcrumbs={breadcrumbs}
          eyebrow="Door Hardware"
          title={family.title}
          description={family.description}
          intro={family.intro}
          image={family.image}
          imageAlt={family.imageAlt}
          cards={family.cards}
          primaryCta={family.primaryCta}
          secondaryCta={family.secondaryCta}
          supportTitle={family.supportTitle}
          supportBody={family.supportBody}
        />
      )}
    </>
  );
}
