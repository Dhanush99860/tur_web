# Rebuild Summary

## Homepage Content Hierarchy Pass
- Improved homepage information architecture so the sections now read as a project-led B2B journey instead of a mixed catalog / consumer flow.
- Updated hero, trusted partners, featured products, resources, story, featured carousel, collection tabs, spotlight, testimonials, and trust-banner copy to better reflect TUR's architectural hardware, automatic entry, access, glass, sealing, and technical-services scope.
- Removed fake customer-style testimonial language and repositioned the testimonial content as proof / project-approach statements.
- Aligned spotlight content with the current ironmongery-led imagery by switching the spotlight product mapping to `furnish-the-door`.
- Fixed collection-tab priority routing so the first three routes now correctly prioritize:
  - `Automatic Operators` -> `/automatic-operators`
  - `Access Control` -> `/door-hardware/access-control`
  - `Glass Hardware` -> `/door-hardware/glass-hardware`
- Files changed:
  - `src/content/home/hero.ts`
  - `src/content/home/sections.ts`
  - `src/features/home/components/hero-stage.tsx`
  - `src/features/home/sections/featured-products-section.tsx`
  - `src/features/home/sections/resources-section.tsx`
  - `src/features/home/sections/featured-carousel-section.tsx`
  - `src/features/home/sections/collection-tabs-section.tsx`
  - `src/features/home/sections/spotlight-section.tsx`
  - `src/features/home/components/testimonials-carousel.tsx`
  - `src/features/home/sections/trusted-partners-section.tsx`
  - `src/features/home/sections/trust-banner-section.tsx`
  - `docs/rebuild-summary.md`

## Brand And Performance Pass
- Accent migration:
  - Replaced the teal accent token system with logo blue across light and dark themes.
  - Light theme accent now uses `#3055A6` with `#284A92` hover and blue focus-ring values.
  - Dark theme accent now uses `#86A2E6` with `#9CB4EE` hover while keeping the existing dark surfaces intact.
- Files changed:
  - `src/styles/tokens.css`
  - `src/styles/globals.css`
  - `src/content/site/site-config.ts`
  - `src/app/layout.tsx`
  - `src/components/shared/site-logo.tsx`
  - `src/features/home/components/hero-stage.tsx`
  - `src/features/footer/components/site-footer.tsx`
  - `src/features/footer/components/footer-newsletter-form.tsx`
  - `src/features/navigation/components/site-header.tsx`
  - `src/features/navigation/components/mobile-menu.tsx`
  - `src/features/navigation/components/header-mega-panel.tsx`
  - `src/features/home/sections/featured-carousel-section.tsx`
  - `src/features/home/sections/story-section.tsx`
  - `src/features/home/sections/testimonials-section.tsx`
  - `src/features/home/components/testimonials-carousel.tsx`
  - `public/logo/logo-brand.png`
  - `public/logo/logo-brand-white.png`
  - `docs/rebuild-summary.md`
- Logo asset improvements:
  - Added cropped, web-ready transparent logo assets for standard and inverse usage.
  - Header, footer, and mobile navigation now use the optimized logo assets instead of the oversized legacy raster and white JPG pairing.
  - Kept proportions and presentation aligned with the existing site.
- Performance and smoothness improvements:
  - Reduced some global animation durations and added `will-change` only to the marquee track.
  - Lightened sticky-header and utility-menu blur strength while keeping the same layered navigation treatment.
  - Reduced a few oversized shadows and hover transforms in hero, mega-panel, carousel, story, and testimonial interactions.
  - Removed persistent `will-change` usage from the featured carousel rail.
- Client and server component changes:
  - `HeroStage` is now server-rendered because it does not require client interactivity.
  - Footer newsletter behavior was isolated into a small client component so the main footer can render on the server.
  - Testimonial product resolution now happens on the server, with a smaller interactive client carousel receiving pre-resolved data.
- Validation:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`
- Remaining limitations:
  - Typography still uses `next/font/google` for DM Sans and Archivo because local project font files were not available in the repository during this pass.
  - Fallback stacks and `display: "swap"` were added to improve resilience, but a full offline-safe font setup would still require adding licensed local font files to the repo.

## Latest Hardening Pass
- Files changed:
  - `next.config.ts`
  - `src/proxy.ts`
  - `src/lib/seo/legacy-redirects.ts`
  - `src/lib/seo/metadata.ts`
  - `src/app/sitemap.ts`
  - `src/features/seo/components/structured-data.tsx`
  - `src/content/site/seo.ts`
  - `src/content/site/site-config.ts`
  - `src/content/catalog/categories.ts`
  - `src/content/catalog/products.ts`
  - `src/app/layout.tsx`
  - `src/components/shared/cover-image.tsx`
  - `src/components/shared/smart-link.tsx`
  - `src/features/navigation/components/*`
  - `src/features/home/sections/*`
  - `src/features/catalog/components/*`
  - `src/features/about/components/about-page.tsx`
  - `src/features/contact/components/contact-page.tsx`
  - `src/features/downloads/components/downloads-page.tsx`
  - `docs/architecture.md`
  - `docs/content-migration-map.md`
  - `docs/seo-and-redirect-audit.md`

## Main SEO Improvements
- Page titles now rely on clean child titles such as `About`, `Contact`, and `Door Hardware`, so the root template renders `About | TUR` instead of duplicated brand strings.
- Metadata generation now normalizes accidental trailing brand names, deduplicates keywords, and resolves `metadataBase` from environment overrides with a safe canonical fallback.
- JSON-LD output is now serialized with `<` escaped to `\u003c` before injection.
- Sitemap URLs now use stable route-level update dates instead of `new Date()` for every entry, and duplicate section URLs were removed.
- Root viewport metadata now reflects both light and dark theme colors.

## Redirect Coverage
- Added permanent legacy page redirects:
  - `/about_us` -> `/about`
  - `/contact_us` -> `/contact`
  - `/download` -> `/downloads`
  - `/door_hardware` -> `/door-hardware`
  - `/automatic_operators` -> `/automatic-operators`
- Added query-driven legacy family redirects through `src/proxy.ts` for:
  - `/door_hardware/sub?...`
  - `/automatic_operators/sub?...`
- Confirmed legacy category ids `10` to `13` for core door hardware families.
- For legacy family URLs without an exact family match, the redirect now falls back to the nearest canonical parent section instead of leaving a dead path.
- Non-routing query params are preserved when they still matter, while legacy routing params such as `id` and `n` are removed.

## Accessibility Improvements
- Dialogs now use `aria-labelledby` and `aria-describedby` instead of a generic `aria-label`, and the in-panel close button now has an accessible name.
- The homepage collection selector was simplified from an incomplete tab pattern to an honest pressed-button pattern.
- Important content imagery now uses semantic `next/image` markup instead of `background-image` containers in the hero, resources, spotlight, category landing pages, product galleries, story cards, and supporting marketing pages.
- External links now add `noopener noreferrer` automatically when opened in a new tab.

## Validation
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Still Pending
- Add more confirmed legacy id mappings if the old live site exposes additional query ids beyond the audited set.
- Add richer per-image alt text for product galleries if approved model-specific captions become available later.
- Add finer-grained per-family and per-product update dates if content migration starts happening at a faster cadence.

## Final Typography And Cleanup Pass
- Warning cleanup completed:
  - Removed the unused `count` variable from `src/features/home/sections/trust-banner-section.tsx`.
  - Rechecked the latest homepage edits and confirmed lint now passes cleanly without leftover dead code from this pass.
- Font loading decision:
  - Kept `DM Sans` and `Archivo` on `next/font/google` because no local licensed font files were present in the repository.
  - Hardened the setup by centralizing body and display fallback stacks and keeping `display: "swap"` in `src/app/layout.tsx`, `src/styles/tokens.css`, and `src/styles/globals.css`.
- Typography and visual hierarchy improvements:
  - Centralized the homepage and shared section-heading hierarchy so eyebrows, section titles, and descriptions now follow one cleaner system.
  - Strengthened display usage for hero, section titles, mega-panel headings, and promotional card titles while keeping `DM Sans` for navigation, controls, labels, metadata, and body copy.
  - Tuned button, header, mega-panel, footer, and trust-banner typography for calmer body reading and clearer CTA scanning without changing layout structure.
- Remaining limitation:
  - Build validation passes in the current environment, but truly offline-safe font loading would still require adding local `DM Sans` and `Archivo` font files to the repo and moving to `next/font/local`.
- Files changed:
  - `src/app/layout.tsx`
  - `src/styles/tokens.css`
  - `src/styles/globals.css`
  - `src/components/ui/section-heading.tsx`
  - `src/features/home/components/home-section-heading.tsx`
  - `src/features/home/components/hero-stage.tsx`
  - `src/features/home/sections/trust-banner-section.tsx`
  - `src/features/navigation/components/site-header.tsx`
  - `src/features/navigation/components/header-mega-panel.tsx`
  - `src/features/footer/components/site-footer.tsx`
  - `docs/rebuild-summary.md`

## Mega Navigation Upgrade
- Replaced the desktop mega panel's two static promo cards with one live preview panel that updates from hovered or focused leaf items.
- Remapped the old-site hierarchy into a one-view mega-navigation structure using typed groups and leaf items for:
  - `Door Hardware`
  - `Automatic Operators`
- Updated the desktop mega panel so all major groups stay visible in the left content area while the right preview stays singular, stable, and purpose-led.
- Updated the mobile menu to read from the same grouped data source without trying to reproduce desktop hover-preview behavior.
- Route fallbacks:
  - Used real migrated product routes where current product pages already exist.
  - Used parent family routes for items that do not yet have dedicated migrated detail pages.
  - Avoided legacy query-string URLs and dead links.
- Files changed:
  - `src/content/site/navigation.ts`
  - `src/features/navigation/components/header-mega-panel.tsx`
  - `src/features/navigation/components/site-header.tsx`
  - `src/features/navigation/components/mobile-menu.tsx`
  - `docs/rebuild-summary.md`
