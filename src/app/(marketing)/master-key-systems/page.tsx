import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/content/site/seo";
import { MasterKeyPage } from "@/features/master-key/components/master-key-page";

export const metadata = createPageMetadata(pageSeo.masterKey);

export default function MasterKeySystemsRoute() {
  return <MasterKeyPage />;
}
