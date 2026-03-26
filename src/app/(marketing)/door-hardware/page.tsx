import { catalogSections, getCatalogSectionCards } from "@/content/catalog/categories";
import { pageSeo } from "@/content/site/seo";
import { CatalogLandingPage } from "@/features/catalog/components/catalog-landing-page";
import { createPageMetadata } from "@/lib/seo/metadata";

const section = catalogSections.find((item) => item.slug === "door-hardware");

export const metadata = createPageMetadata(pageSeo.doorHardware);

export default function DoorHardwareRoute() {
  if (!section) {
    return null;
  }

  return (
    <CatalogLandingPage
      eyebrow="Door Hardware"
      title={section.title}
      description={section.description}
      intro={section.intro}
      image={section.image}
      imageAlt={section.imageAlt}
      cards={getCatalogSectionCards("door-hardware")}
      primaryCta={section.primaryCta}
      secondaryCta={section.secondaryCta}
      supportTitle={section.supportTitle}
      supportBody={section.supportBody}
    />
  );
}
