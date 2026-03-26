# Current Project Audit

## Source Audited
- Old project path used as source of truth: `g:\tur\storefront-clone`
- Primary files reviewed:
  - `data/site.ts`
  - `data/information-architecture.ts`
  - `data/mock-data.ts`
  - `lib/seo.ts`
  - `app/page.tsx`
  - `components/pages/home/home-page.tsx`
  - `components/layout/header/*`
  - `components/layout/footer/footer.tsx`
  - `app/about/page.tsx`
  - `app/downloads/page.tsx`
  - `app/contact/page.tsx`
  - `app/door-hardware/*`
  - `app/automatic-operators/*`
  - `app/products/[slug]/page.tsx`

## Old Structure Summary
- App Router project with a mostly flat `components/` directory and route files in `app/`.
- Content, business logic and route IA were concentrated in:
  - `data/site.ts`
  - `data/information-architecture.ts`
  - `data/mock-data.ts`
- Shared SEO logic lived in `lib/seo.ts`.
- Visual assets and brand imagery lived in `public/tur/`, `public/art/`, and `public/company_profile.pdf`.

## What To Preserve
- Business purpose:
  - Premium catalog and inquiry site for architectural door hardware, automatic entry systems, access control, glass hardware and sealing systems.
- Brand and trust signals:
  - TUR / TUR Middle East FZC
  - Since 1670 heritage / James Gibbons Format connection
  - 30+ years regional experience
  - Global presence
  - Technical services / project support
- Information architecture:
  - `/`
  - `/about`
  - `/downloads`
  - `/contact`
  - `/door-hardware`
  - `/door-hardware/[category]`
  - `/automatic-operators`
  - `/automatic-operators/[category]`
  - `/products/[slug]`
- Homepage narrative order:
  - Hero
  - Featured product families
  - Resources
  - About / brand story
  - Featured carousel
  - Collection tabs
  - Trust banner / marquee
  - Spotlight product
  - Testimonials / proof
  - Visual gallery
- SEO direction:
  - Central metadata helper
  - Canonical URLs
  - Open Graph / Twitter defaults
  - `robots.ts`
  - `sitemap.ts`
  - Organization, website, breadcrumb and product schema

## What To Discard
- Storefront framing that did not match the business model:
  - Fake cart route
  - Product pricing bias
  - Collection-first ecommerce cues
- Architecture issues:
  - Overly flat `components/` tree
  - Data and presentation mixed together
  - Route intent embedded directly inside homepage components
  - Header/footer/search state tied to a generic storefront provider
- Styling issues:
  - Large global animation footprint
  - Raw one-off styling repeated across components
  - No real dark theme
- Content model issues:
  - Mock product data shaped like ecommerce inventory instead of inquiry-led catalog content

## Old Routes Observed
- Kept:
  - `/`
  - `/about`
  - `/downloads`
  - `/contact`
  - `/door-hardware`
  - `/door-hardware/[category]`
  - `/automatic-operators`
  - `/automatic-operators/[category]`
  - `/products/[slug]`
- Deprecated from the old build:
  - `/cart`
  - `/collections`

## Old Content And Data Sources
- Site settings and business info:
  - `data/site.ts`
- Navigation, footer, family landing data and parent route relationships:
  - `data/information-architecture.ts`
- Homepage content, products, resource cards and imagery:
  - `data/mock-data.ts`
- Metadata and schema helpers:
  - `lib/seo.ts`
- Brand assets:
  - `public/tur/*`
  - `public/art/baanner_newimage.webp`
  - `public/company_profile.pdf`

## Theme Findings
- Fonts already aligned with the brief:
  - Body: DM Sans
  - Display: Archivo
- Light theme tokens already present and worth preserving:
  - `--background: #ffffff`
  - `--foreground: #262626`
  - `--muted: #747474`
  - `--surface: #efefef`
  - `--surface-strong: #e8e8e8`
  - `--panel: #f7f7f5`
  - `--accent: #2f575a`
  - `--accent-soft: #3f696c`
  - `--dark: #252525`
  - `--border: #d9d9d5`
  - `--warm: #f4f0ea`
- Design direction observed:
  - Premium industrial / architectural
  - Restrained, elegant, editorial
  - Muted teal accent and warm neutral surfaces
  - Image-led composition with structured text blocks

## Reusable Concepts Extracted
- Section ordering and CTA intent from the homepage.
- Category and family slugs from the old IA.
- Product slugs and parent relationships.
- Contact and office presence signals.
- Metadata defaults and schema patterns.
- Brand imagery, PDF, logo and core art direction.

## Rebuild Notes
- The new foundation should stay server-first.
- Products should read as catalog entries, not purchasable inventory.
- Some family pages should remain intentionally inquiry-led placeholders until full content migration is done.
