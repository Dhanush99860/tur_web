# SEO And Redirect Audit

## What Was Fixed
- Removed duplicate-brand page-title risk by normalizing child titles before the root `%s | TUR` template runs.
- Hardened JSON-LD injection by escaping `<` before rendering inline schema.
- Replaced the sitemap-wide `new Date()` pattern with stable route-level update dates.
- Added audited permanent redirects for legacy static pages and query-driven family routes.
- Tightened dialog semantics and replaced the incomplete home tab pattern with a clearer accessible control pattern.
- Replaced key content visuals with semantic `next/image` usage in the most important marketing and catalog sections.

## Why It Matters
- Search results and browser titles are cleaner and avoid brand duplication.
- Legacy backlinks from the previous live site are more likely to preserve equity and user continuity.
- Search engines get a more trustworthy sitemap because URLs no longer all claim to have changed "right now".
- JSON-LD is safer to inject and easier to keep as the single schema entry point.
- Accessibility and semantic image improvements make the catalog more robust for assistive technology and reduce dependence on CSS-only content rendering.

## Redirect Groups Added
- Static legacy page redirects in `next.config.ts`:
  - `/about_us` -> `/about`
  - `/contact_us` -> `/contact`
  - `/download` -> `/downloads`
  - `/door_hardware` -> `/door-hardware`
  - `/automatic_operators` -> `/automatic-operators`
- Query-style family redirects in `src/proxy.ts`:
  - `/door_hardware/sub?...`
  - `/automatic_operators/sub?...`
- Known legacy door hardware ids mapped:
  - `10` -> `american-standard`
  - `11` -> `european-ironmongery`
  - `12` -> `glass-hardware`
  - `13` -> `access-control`
- Other legacy family requests resolve by normalized family name when a clear modern family exists.

## Metadata Changes
- `src/content/site/seo.ts` now uses clean page titles such as `About` and `Contact`.
- `src/lib/seo/metadata.ts` now:
  - normalizes accidental trailing brand names
  - resolves `metadataBase` safely
  - keeps canonical and social image generation centralized
  - deduplicates keyword arrays
- `src/app/layout.tsx` now publishes light and dark `theme-color` values.

## Sitemap Improvements
- Static marketing pages use explicit update dates from `src/content/site/seo.ts`.
- Section pages use stable dates from `src/content/catalog/categories.ts`.
- Product pages use a stable content fallback date from `src/content/catalog/products.ts`.
- Duplicate section URLs were removed by generating one canonical sitemap entry per URL.

## Structured Data Hardening
- `src/features/seo/components/structured-data.tsx` now escapes `<` to `\u003c`.
- Schema builders in `src/lib/schema/site.ts` remained compatible, so the hardening happened at the shared injection layer instead of duplicating logic elsewhere.

## Accessibility Improvements
- Dialogs now have explicit title and description relationships.
- The dialog close button now has an accessible label.
- The collection selector on the homepage now uses pressed buttons instead of an incomplete tab implementation.
- Important content imagery now renders with semantic images and alt text in the hero, resources, spotlight, category landing, product gallery, story, about, contact and downloads sections.

## Remaining Gaps For Later
- Add more confirmed legacy id mappings if the old live site exposes them during migration.
- Add model-specific gallery captions where product imagery needs more precise alt text.
- Consider per-family and per-product update dates once migration starts changing individual records more frequently.
