import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/features/navigation/components/site-header";
import { SiteFooter } from "@/features/footer/components/site-footer";
import { StructuredData } from "@/features/seo/components/structured-data";
import { createOrganizationSchema, createWebsiteSchema } from "@/lib/schema/site";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData data={[createOrganizationSchema(), createWebsiteSchema()]} />
      <SkipLink />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
