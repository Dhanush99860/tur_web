import { pageSeo } from "@/content/site/seo";
import { AboutPage } from "@/features/about/components/about-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pageSeo.about);

export default function AboutRoute() {
  return <AboutPage />;
}
