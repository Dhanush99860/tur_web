import { pageSeo } from "@/content/site/seo";
import { DownloadsPage } from "@/features/downloads/components/downloads-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pageSeo.downloads);

export default function DownloadsRoute() {
  return <DownloadsPage />;
}
