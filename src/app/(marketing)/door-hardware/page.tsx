import {
  getCatalogSection,
  getCatalogSectionFamilyCards,
} from "@/content/catalog/categories";
import { pageSeo } from "@/content/site/seo";
import { CatalogSectionLandingPage } from "@/features/catalog/components/catalog-section-landing-page";
import { createPageMetadata } from "@/lib/seo/metadata";

const section = getCatalogSection("door-hardware");

export const metadata = createPageMetadata(pageSeo.doorHardware);

export default function DoorHardwareRoute() {
  if (!section) {
    return null;
  }

  return (
    <CatalogSectionLandingPage
      section={section}
      familyCards={getCatalogSectionFamilyCards("door-hardware")}
    />
  );
}
