# Design System

## Brand Direction
- Tone:
  - Premium
  - Technical
  - Architectural
  - Restrained
  - Editorial
- Fonts:
  - Body: DM Sans
  - Display: Archivo

## Core Tokens

### Light Theme
- `--background: #ffffff`
- `--foreground: #262626`
- `--muted-foreground: #747474`
- `--border: #d9d9d5`
- `--surface: #efefef`
- `--surface-strong: #e8e8e8`
- `--panel: #f7f7f5`
- `--card: #ffffff`
- `--accent: #2f575a`
- `--accent-hover: #3f696c`
- `--ring: rgba(47, 87, 90, 0.42)`
- `--hero-overlay: rgba(18, 24, 26, 0.12)`
- `--hero-overlay-strong: rgba(18, 24, 26, 0.48)`
- `--warm: #f4f0ea`

### Dark Theme
- `--background: #121718`
- `--foreground: #eef0eb`
- `--muted-foreground: #a5afaa`
- `--border: #2d3738`
- `--surface: #182021`
- `--surface-strong: #20292a`
- `--panel: #161c1d`
- `--card: #182021`
- `--accent: #6a969a`
- `--accent-hover: #82adb0`
- `--ring: rgba(130, 173, 176, 0.46)`
- `--hero-overlay: rgba(3, 7, 7, 0.24)`
- `--hero-overlay-strong: rgba(3, 7, 7, 0.72)`
- `--warm: #26211b`

## Typography
- Eyebrow:
  - Uppercase
  - Tight micro-label
  - High tracking
  - Muted text color
- Hero display:
  - `display-hero`
  - Large editorial headline
  - Tight leading
- Section display:
  - `display-title`
  - Used for major section and page headings
- Supporting display:
  - `display-subtitle`
  - Used for cards and smaller hero blocks
- Body copy:
  - `body-copy`
  - Comfortable line length and muted body tone

## Layout And Spacing
- Main container:
  - `page-container`
  - Max width `1520px`
- Section wrapper:
  - `section-shell`
  - Consistent vertical rhythm
- Radii:
  - Card: `1.25rem`
  - Panel: `1.5rem`
  - Controls: pill / full radius
- Shadows:
  - `--shadow-soft`
  - `--shadow-strong`

## Buttons
- Primary:
  - Accent-filled
  - High-contrast white text
  - Used for inquiry and key route CTAs
- Secondary:
  - Neutral card background
  - Border-led
  - Used for alternate route actions
- Ghost:
  - Header and utility actions
  - Low visual weight

## Card Patterns
- `surface-panel`
  - Elevated background block for heroes and support sections
- `card-panel`
  - Reusable card wrapper for products, resources, stories and proof items
- Product cards:
  - Large image
  - Family label
  - Short catalog description
- Landing cards:
  - Optional media
  - Title + description + CTA / note

## Accessibility Rules
- Skip link included globally.
- Focus states use semantic `--ring`.
- Dialogs trap focus and support Escape.
- Navigation is keyboard reachable on desktop and mobile.
- Reduced motion is respected globally.

## Motion
- Minimal and purposeful.
- Current reusable motion:
  - Trust banner marquee
  - Subtle hover lift on cards
  - Image scale on hover
- No decorative motion should block readability.
