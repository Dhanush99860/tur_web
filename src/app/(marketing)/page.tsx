import { pageSeo } from "@/content/site/seo";
import { HomePage } from "@/features/home/components/home-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pageSeo.home);

export default function HomeRoute() {
  return <HomePage />;
}
