import { pageSeo } from "@/content/site/seo";
import { PartnersPage } from "@/features/partners/components/partners-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pageSeo.partners);

export default function PartnersRoute() {
  return <PartnersPage />;
}
