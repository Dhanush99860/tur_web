# Architecture

## Strategy
- Use App Router with server components by default.
- Keep route files thin and readable.
- Keep content in typed source files, not inside JSX.
- Isolate interactivity to client-only feature components.
- Separate reusable UI primitives from route-aware features.

## Folder Roles

### `src/app`
- Owns route entry points, metadata routes and top-level layouts.
- Route files compose feature components and metadata helpers.
- No business content should be authored directly in route files unless it is truly route-local.

### `src/features`
- Owns route-aware and domain-aware UI.
- Examples:
  - `features/home/*` for homepage sections and composition
  - `features/navigation/*` for header, mobile menu and search dialog
  - `features/catalog/*` for landing pages and product detail scaffolds
  - `features/about/*`, `features/downloads/*`, `features/contact/*` for marketing pages
  - `features/theme/*` for theme script and toggle
  - `features/seo/*` for structured-data rendering

### `src/components`
- Owns generic building blocks shared across features.
- `components/ui/*`:
  - Button styles
  - Section headings
  - Presentational primitives
- `components/layout/*`:
  - Page container
  - Skip link
- `components/shared/*`:
  - Smart link abstraction
  - Breadcrumbs
  - Shared icons

### `src/content`
- Owns typed source-of-truth content and IA.
- `content/site/*`:
  - Site config
  - SEO defaults
  - Navigation
  - Footer
- `content/catalog/*`:
  - Section data
  - Family landing data
  - Product records
  - Collection summaries
- `content/home/*`:
  - Hero data
  - Homepage section data

### `src/lib`
- Owns framework-agnostic helpers.
- `lib/seo/*`:
  - Metadata generation
- `lib/schema/*`:
  - JSON-LD builders
- `lib/utils/*`:
  - Classname helper and other small utilities
- `lib/constants/*`:
  - Small route or UI constants

### `src/styles`
- Owns global tokens and global CSS utilities.
- `tokens.css`:
  - Semantic light and dark theme tokens
- `globals.css`:
  - Tailwind import
  - Typography utilities
  - Layout utilities
  - Focus states
  - Reduced motion handling

## Page Composition Rules
- Route files should mostly do three things:
  - fetch or select typed content
  - export metadata
  - render one feature component
- Dynamic routes should own:
  - `generateMetadata`
  - `generateStaticParams`
  - structured data relevant to that route

## Content Migration Rules
- Migrate old content into `src/content/*` first.
- Only then wire that content into sections or route components.
- Avoid moving old JSX into the new codebase.
- Preserve slugs and route intent unless there is a deliberate SEO reason to change them.

## Client Component Boundaries
- Use client components only for:
  - theme toggle
  - search dialog
  - mobile menu
  - desktop navigation dropdown behavior
  - homepage carousel
  - homepage tabs
- Keep the rest server-rendered for clarity and performance.

## SEO And Migration Safety Notes
- `src/lib/seo/metadata.ts` owns canonical URL generation, root metadata, social fallbacks and title normalization.
- `src/lib/seo/legacy-redirects.ts` owns audited legacy route mappings and query-route normalization.
- `src/proxy.ts` handles the small set of legacy query-driven redirects that cannot be expressed cleanly in `next.config.ts`.
- `src/app/sitemap.ts` should only include canonical public routes and should prefer stable content dates over `new Date()`.
- `src/features/seo/components/structured-data.tsx` is the only JSON-LD injection point and should keep the current escaping behavior intact.
- `src/components/shared/cover-image.tsx` is the shared semantic-image primitive for content-carrying visuals that need `next/image` without repeating layout code.

## Why This Is Better Than The Old Structure
- The old project mixed content, routing and presentation too freely.
- The new structure creates a clean migration path:
  - content can grow without bloating page files
  - shared UI is reusable without becoming a dumping ground
  - feature folders own the route-specific logic that actually belongs together
