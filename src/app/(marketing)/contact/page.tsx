import { pageSeo } from "@/content/site/seo";
import { ContactPage } from "@/features/contact/components/contact-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pageSeo.contact);

export default function ContactRoute() {
  return <ContactPage />;
}
