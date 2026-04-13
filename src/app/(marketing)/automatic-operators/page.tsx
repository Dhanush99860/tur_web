import {
  getCatalogSection,
  getCatalogSectionFamilyCards,
} from "@/content/catalog/categories";
import { pageSeo } from "@/content/site/seo";
import { CatalogSectionLandingPage } from "@/features/catalog/components/catalog-section-landing-page";
import { createPageMetadata } from "@/lib/seo/metadata";

const section = getCatalogSection("automatic-operators");

export const metadata = createPageMetadata(pageSeo.automaticOperators);

export default function AutomaticOperatorsRoute() {
  if (!section) {
    return null;
  }

  return (
    <CatalogSectionLandingPage
      section={section}
      familyCards={getCatalogSectionFamilyCards("automatic-operators")}
    />
  );
}
