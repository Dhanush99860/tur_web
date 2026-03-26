import { getProductBySlug, getProductsBySlugs } from "@/content/catalog/products";
import { homeHero } from "@/content/home/hero";
import {
  homeCarouselProductSlugs,
  homeCollectionTabs,
  homeFeaturedProductSlugs,
  homePartnerLogos,
  homeResourceCards,
  homeSpotlightImages,
  homeSpotlightProductSlug,
  homeStoryCards,
  homeTestimonials,
  homeTrustBannerItems,
} from "@/content/home/sections";
import { CollectionTabsSection } from "@/features/home/sections/collection-tabs-section";
import { FeaturedCarouselSection } from "@/features/home/sections/featured-carousel-section";
import { FeaturedProductsSection } from "@/features/home/sections/featured-products-section";
import { HeroSection } from "@/features/home/sections/hero-section";
import { ResourcesSection } from "@/features/home/sections/resources-section";
import { SpotlightSection } from "@/features/home/sections/spotlight-section";
import { StorySection } from "@/features/home/sections/story-section";
import { TestimonialsSection } from "@/features/home/sections/testimonials-section";
import { TrustedPartnersSection } from "@/features/home/sections/trusted-partners-section";
import { TrustBannerSection } from "@/features/home/sections/trust-banner-section";

export function HomePage() {
  const featuredProducts = getProductsBySlugs([...homeFeaturedProductSlugs]);
  const carouselProducts = getProductsBySlugs([...homeCarouselProductSlugs]);
  const spotlightProduct = getProductBySlug(homeSpotlightProductSlug);

  return (
    <>
      <HeroSection hero={homeHero} />
       <TrustedPartnersSection brands={homePartnerLogos} />
      <FeaturedProductsSection products={featuredProducts} />
      <ResourcesSection resources={homeResourceCards} />
      <StorySection stories={homeStoryCards} />
      <FeaturedCarouselSection products={carouselProducts} />
      <CollectionTabsSection tabs={homeCollectionTabs} />
      {spotlightProduct ? (
        <SpotlightSection product={spotlightProduct} images={homeSpotlightImages} />
      ) : null}
      <TestimonialsSection testimonials={homeTestimonials} />
      <TrustBannerSection items={homeTrustBannerItems} />
    </>
  );
}
