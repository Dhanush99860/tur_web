import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/content/site/seo";
import { BlogListingPage } from "@/features/blog/components/blog-listing-page";

export const metadata = createPageMetadata(pageSeo.blog);

export default function BlogRoute() {
  return <BlogListingPage />;
}
