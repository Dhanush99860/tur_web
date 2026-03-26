# Content Migration Map

## Core Data Mapping

| Old Source | New Destination | Notes |
| --- | --- | --- |
| `data/site.ts` | `src/content/site/site-config.ts` | Site identity, contact info, offices, trust signals |
| `data/information-architecture.ts` | `src/content/catalog/categories.ts` | Section and family landing data |
| `data/information-architecture.ts` | `src/content/site/navigation.ts` | Top-level nav and search index |
| `data/information-architecture.ts` | `src/content/site/footer.ts` | Footer groups |
| `data/mock-data.ts` | `src/content/catalog/products.ts` | Product records reshaped for inquiry-led catalog use |
| `data/mock-data.ts` | `src/content/home/hero.ts` | Hero copy, CTA intent and feature slugs |
| `data/mock-data.ts` | `src/content/home/sections.ts` | Homepage resource, story, spotlight, testimonial and gallery content |
| `lib/seo.ts` | `src/lib/seo/metadata.ts` | Metadata generation |
| `lib/seo.ts` | `src/lib/schema/site.ts` | JSON-LD builders |

## Homepage Section Mapping

| Old Area | Old Source | New Destination |
| --- | --- | --- |
| Hero | `components/hero-section.tsx` | `features/home/sections/hero-section.tsx` |
| Featured Product Families | `components/pages/home/home-page.tsx` + `data/mock-data.ts` | `features/home/sections/featured-products-section.tsx` + `content/home/sections.ts` |
| Resources | `components/article-card.tsx` | `features/home/sections/resources-section.tsx` |
| About / Brand Story | `components/about-section.tsx` | `features/home/sections/story-section.tsx` |
| Featured Carousel | `components/featured-carousel-section.tsx` | `features/home/sections/featured-carousel-section.tsx` |
| Collection Tabs | `components/collection-tabs.tsx` | `features/home/sections/collection-tabs-section.tsx` |
| Trust Banner | `components/marquee-banner.tsx` | `features/home/sections/trust-banner-section.tsx` |
| Spotlight Product | `components/trending-section.tsx` | `features/home/sections/spotlight-section.tsx` |
| Testimonials / Proof | `components/testimonials/*` | `features/home/sections/testimonials-section.tsx` |
| Visual Gallery | `components/instagram-section.tsx` | `features/home/sections/gallery-section.tsx` |

## Route Scaffold Mapping

| Route | Old Source | New Destination |
| --- | --- | --- |
| `/about` | `app/about/page.tsx` | `app/(marketing)/about/page.tsx` + `features/about/components/about-page.tsx` |
| `/downloads` | `app/downloads/page.tsx` | `app/(marketing)/downloads/page.tsx` + `features/downloads/components/downloads-page.tsx` |
| `/contact` | `app/contact/page.tsx` | `app/(marketing)/contact/page.tsx` + `features/contact/components/contact-page.tsx` |
| `/door-hardware` | `app/door-hardware/page.tsx` | `app/(marketing)/door-hardware/page.tsx` + `features/catalog/components/catalog-landing-page.tsx` |
| `/door-hardware/[category]` | `app/door-hardware/[category]/page.tsx` | `app/(marketing)/door-hardware/[category]/page.tsx` |
| `/automatic-operators` | `app/automatic-operators/page.tsx` | `app/(marketing)/automatic-operators/page.tsx` |
| `/automatic-operators/[category]` | `app/automatic-operators/[category]/page.tsx` | `app/(marketing)/automatic-operators/[category]/page.tsx` |
| `/products/[slug]` | `app/products/[slug]/page.tsx` | `app/(marketing)/products/[slug]/page.tsx` + `features/catalog/components/product-detail-page.tsx` |

## Assets To Move Or Reuse Later

| Old Asset Source | Status | Notes |
| --- | --- | --- |
| `public/tur/*` | Reused now | Brand imagery already copied into new `public/tur/` |
| `public/art/baanner_newimage.webp` | Reused now | Used for hero background |
| `public/company_profile.pdf` | Reused now | Downloads route already points to it |
| Additional old experimental art assets | Pending review | Migrate only if a route explicitly needs them |

## Migration Priorities
1. Expand product detail content family by family inside `src/content/catalog/products.ts`.
2. Add technical document records into `src/content/site` or a future `src/content/downloads` area.
3. Replace remaining inquiry placeholders in category cards with migrated product detail pages where appropriate.
4. Add richer imagery and supporting technical copy to about, downloads and contact as final content is approved.

## Legacy URL And Semantic Media Notes
- Legacy live-site page URLs now have direct permanent redirects in `next.config.ts`.
- Legacy query-style family URLs now resolve through `src/proxy.ts` so migration can preserve old inbound links without polluting canonical routes.
- Content-carrying visuals should migrate into semantic image records with alt text where possible instead of relying on CSS-only backgrounds.
- The shared `src/components/shared/cover-image.tsx` helper is the intended destination for future hero, category, resource and product imagery during page-by-page migration.
