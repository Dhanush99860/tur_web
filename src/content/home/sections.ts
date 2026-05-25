import type {
  CollectionTab,
  ContactOffice,
  DownloadResource,
  GalleryImage,
  ResourceCard,
  StoryCard,
  Testimonial,
} from "@/types";
import { createInquiryHref, siteConfig, siteContact } from "@/content/site/site-config";

export const homeFeaturedProductSlugs = [
  "tu-d800",
  "master-key-systems",
  "tg-pf103",
  "tsw150-automatic-door-operator",
] as const;

export const homeCarouselProductSlugs = [
  "hang-the-door",
  "control-the-door",
  "secure-the-door",
  "cylinders",
  "tg-pf103",
  "electromagnetic-locks",
  "door-bottom-seals",
  "tsw150-automatic-door-operator",
  "sliding-doors",
  "ggg-all-glass-revolving-door",
] as const;

export const homeSpotlightProductSlug = "furnish-the-door-lever-handle";

export const homeSpotlightImages = [
  {
    src: "/tur/door-hardware/decorative-lever.jpg",
    alt: "Premium European lever handle — TE1910 series staged product visual",
    label: "European Ironmongery",
  },
  {
    src: "/tur/home/project-a.jpg",
    alt: "Lever handle in context — premium hospitality door set",
    label: "In Use",
  },
] as const satisfies readonly GalleryImage[];

export const homeResourceCards: ResourceCard[] = [
  {
    title: "TUR Company Profile",
    category: "Downloads",
    description:
      "Partner brands, product verticals, technical services, certifications and regional registrations — consolidated in one reference document for project teams and specifiers.",
    href: "/company_profile.pdf",
    ctaLabel: "Download Profile PDF",
    image: "/tur/home/project-2.jpg",
    imageAlt: "TUR architectural hardware — company profile reference",
  },
  {
    title: "Platform, Heritage & Technical Services",
    category: "About TUR",
    description:
      "30+ years of regional delivery. Hardware specification, scheduling, shop drawings, master keying and project-led technical coordination across commercial, hospitality and institutional work.",
    href: "/about",
    ctaLabel: "Explore the Platform",
    image: "/tur/home/project-a.jpg",
    imageAlt: "TUR heritage and regional delivery platform",
  },
  {
    title: "Start a Project Conversation",
    category: "Inquire",
    description:
      "Reach TUR for hardware selection, family routing, catalog access, technical clarification and project-specific support from the first conversation through to delivery.",
    href: "/contact",
    ctaLabel: "Contact TUR",
    image: "/tur/home/project-4.jpg",
    imageAlt: "TUR office — project inquiry and technical coordination",
  },
];

export const homeStoryCards: StoryCard[] = [
  {
    eyebrow: "Heritage",
    title: "Since 1670, through James Gibbons Format.",
    description:
      "TUR's hardware platform is rooted in the James Gibbons Format legacy — one of the oldest established names in architectural hardware, founded in 1670. This heritage informs every product family, specification route and brand partnership carried into TUR's offer.",
    image: "/tur/door-hardware/format-lockset.jpg",
    imageAlt: "Format UK branded lockset — architectural hardware heritage since 1670",
  },
  {
    eyebrow: "Regional Experience",
    title: "30+ years of project delivery across the region.",
    description:
      "Three decades of hardware specification, supply and coordination across commercial, hospitality, healthcare and institutional projects throughout the Middle East and South Asia — from first inquiry to final commissioning.",
    image: "/tur/home/project-a.jpg",
    imageAlt: "Regional project delivery — architectural hardware specification across the Middle East",
  },
  {
    eyebrow: "Technical Services",
    title: "From scheduling to master keying and installation.",
    description:
      "TUR's technical services extend across the full project cycle — estimation, scheduling, shop drawings, master keying, installation support and on-site troubleshooting — so that the hardware package is coordinated from specification through to handover.",
    image: "/tur/door-hardware/mc-2.jpg",
    imageAlt: "Technical hardware coordination and project services — TUR",
  },
  {
    eyebrow: "Global Presence",
    title: "A broader platform across three regions.",
    description:
      "Registrations, manufacturing partnerships and project experience across Europe, the Middle East and South Asia give TUR a reach that extends well beyond a single market — supporting international specifications, procurement and coordinated project delivery.",
    image: "/tur/home/project-1.jpg",
    imageAlt: "TUR brand signage — James Gibbons Format, G·U, BKS and partner presence across regions",
  },
];

export const homeCollectionTabs: CollectionTab[] = [
  {
    label: "Door Hardware",
    href: "/door-hardware",
    description:
      "The full route into architectural hardware — hanging, controlling, securing, furnishing, glass systems and sealing in one organised section.",
    image: "/tur/door-hardware/format-lockset.jpg",
    imageAlt: "Format UK architectural lockset — TUR Door Hardware section",
  },
  {
    label: "Automatic Operators",
    href: "/automatic-operators",
    description:
      "Sliding, swing, revolving and controlled entrance systems for commercial, healthcare, hospitality and high-traffic project environments.",
    image: "/tur/door-hardware/sliding-b.jpg",
    imageAlt: "Automatic sliding entrance system — TUR Automatic Operators",
  },
  {
    label: "Glass Hardware",
    href: "/door-hardware/glass-hardware",
    description:
      "Frameless glass fittings, patch hardware, hinges and pull handles for all-glass architectural openings and storefront conditions.",
    image: "/tur/door-hardware/cat-glass-hardware.jpg",
    imageAlt: "Glass hinges and clip hardware for frameless architectural applications",
  },
  {
    label: "European Ironmongery",
    href: "/door-hardware/european-ironmongery",
    description:
      "Premium lever handles, cylinders and coordinated ironmongery packages for finish-led specification and architectural door sets.",
    image: "/tur/door-hardware/mc-2.jpg",
    imageAlt: "European ironmongery — premium lever handles and door furnishing",
  },
  {
    label: "Sealing Systems",
    href: "/door-hardware/sealing-systems",
    description:
      "Threshold, bottom and perimeter seals for entrance performance, acoustic control and architectural detailing across the full door set.",
    image: "/tur/door-hardware/cat-sealing-systems.jpg",
    imageAlt: "Door bottom seal and threshold system for architectural openings",
  },
  {
    label: "Master Key Systems",
    href: "/master-key-systems",
    description:
      "SKG 2-star certified TURN Euro profile cylinders with KA, KD, MK and GMK key hierarchy — designed for hotels, hospitals, offices and campus projects.",
    image: "/master-key/hero-key.jpg",
    imageAlt: "TURN master key system — SKG 2-star certified Euro profile cylinders",
  },
];

export const homeTrustBannerItems = [
  "Architectural Door Hardware",
  "Automatic Operators",
  "Access Control",
  "Glass Hardware",
  "Sealing Systems",
  "Technical Services",
] as const;

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "TUR combines architectural hardware, automatic entry systems and access solutions into one coordinated project route.",
    author: "TUR Project Approach",
    role: "Specification, supply and technical support",
    productSlug: "tsw150-automatic-door-operator",
  },
  {
    quote:
      "The platform is structured around category clarity, partner-backed supply and inquiry-led technical coordination.",
    author: "TUR Project Approach",
    role: "Specification, supply and technical support",
    productSlug: "tu-d800",
  },
  {
    quote:
      "From door function to product family, TUR provides a clearer route into glass, access, sealing and automation scope.",
    author: "TUR Project Approach",
    role: "Specification, supply and technical support",
    productSlug: "tg-pf103",
  },
  {
    quote:
      "Heritage through James Gibbons Format and regional delivery experience support a calmer project workflow.",
    author: "TUR Project Approach",
    role: "Specification, supply and technical support",
    productSlug: "cylinders",
  },
];

export const homePartnerLogos = [
  {
    src: "/tur/site/logo-1-1.png",
    alt: "James Gibbons Format — heritage manufacturing partner",
    label: "James Gibbons Format",
    role: "Heritage · key supply since 1670",
  },
  {
    src: "/tur/site/logo-1-2.png",
    alt: "G·U Automatic — automatic door systems",
    label: "G·U Automatic",
    role: "Automatic door systems",
  },
  {
    src: "/tur/site/logo-1-3.png",
    alt: "BKS — locks and hardware",
    label: "BKS",
    role: "Locks & hardware",
  },
  {
    src: "/tur/site/logo-1-4.png",
    alt: "BB Locks — security locks",
    label: "BB Locks",
    role: "Security locks",
  },
  {
    src: "/tur/site/logo-1-5.png",
    alt: "D4E — access control systems",
    label: "D4E",
    role: "Access control systems",
  },
  {
    src: "/tur/site/logo-1-6.png",
    alt: "TURN — master key systems",
    label: "TURN",
    role: "Master key systems",
  },
];

export const homeCertificationLogos: GalleryImage[] = [
  {
    src: "/tur/site/logo-2-c1.png",
    alt: "ANSI certified",
    label: "ANSI",
  },
  {
    src: "/tur/site/logo-2-c4.png",
    alt: "GAI — Guild of Architectural Ironmongers member",
    label: "GAI Member",
  },
  {
    src: "/tur/site/logo-2-c5.png",
    alt: "CE marked",
    label: "CE Marked",
  },
  {
    src: "/tur/site/logo-2-c6.png",
    alt: "SKG 2-star certified",
    label: "SKG 2-Star",
  },
  {
    src: "/tur/site/logo-2-c7.png",
    alt: "ISO 9001 certified",
    label: "ISO 9001",
  },
];

export const aboutHighlights: StoryCard[] = [
  {
    eyebrow: "Heritage",
    title: "Since 1670 legacy",
    description:
      "TUR references a long partnership and heritage narrative shaped through James Gibbons Format and project-led architectural hardware.",
    image: "/tur/home/slider-2.webp",
    imageAlt: "James Gibbons Format and heritage visual",
  },
  {
    eyebrow: "Core Offer",
    title: "Architectural hardware and automatic entry systems",
    description:
      "The TUR offer brings together hardware, access control, sealing systems and automatic operators under one coordinated platform.",
    image: "/tur/home/project-a.jpg",
    imageAlt: "Architectural hardware and automatic entry systems",
  },
  {
    eyebrow: "Technical Services",
    title: "Project-oriented technical coordination",
    description:
      "Architects, consultants, contractors and project teams can use TUR for coordinated hardware selection and inquiry-led support.",
    image: "/tur/door-hardware/mc-2.jpg",
    imageAlt: "Project teams and technical coordination",
  },
  {
    eyebrow: "Global Presence",
    title: "Regional and global presence",
    description:
      "TUR's visible regional structure supports a broader global platform for project delivery and product coordination.",
    image: "/tur/home/project-c.jpg",
    imageAlt: "Global presence and regional structure",
  },
];

export const downloadResources: DownloadResource[] = [
  {
    title: "TUR with Format Company Profile",
    description:
      "Download the main company profile for an overview of TUR heritage, product direction, global structure and project support positioning.",
    href: "/company_profile.pdf",
    ctaLabel: "Download PDF",
    eyebrow: "Primary Download",
    image: "/tur/site/meta-default.jpg",
    imageAlt: "TUR company profile download",
  },
  {
    title: "Master Key Systems — Catalogue 2026",
    description:
      "TURN master key systems catalogue covering Euro profile cylinders (TE3606), ANSI mortise cylinders (TA series), IC interchangeable cores, key hierarchy and SKG 2-star certification.",
    href: "/master-key-systems",
    ctaLabel: "View Catalogue",
    eyebrow: "Product Catalogue",
    image: "/master-key/hero-key.jpg",
    imageAlt: "TURN master key systems catalogue 2026",
  },
  {
    title: "Request Product Catalog",
    description:
      "Submit an inquiry to request broader category details, technical data sheets and supporting specification information for any TUR product range.",
    href: createInquiryHref("Request Catalog"),
    ctaLabel: "Request Details",
    eyebrow: "Support",
    image: "/tur/home/slider-4.webp",
    imageAlt: "Request product catalog",
  },
  {
    title: "Technical Services Inquiry",
    description:
      "Contact TUR for project coordination, specification review, system design and technical support across door hardware, automatic operators and master key systems.",
    href: "/contact",
    ctaLabel: "Contact TUR",
    eyebrow: "Project Support",
    image: "/tur/home/video-thumb.png",
    imageAlt: "Technical services inquiry",
  },
];

export const contactOffices: ContactOffice[] = [
  {
    title: "TUR Middle East FZC",
    description: siteConfig.locationLabel,
    eyebrow: "Primary Office",
    href: siteContact.emailHref,
    ctaLabel: "Email Office",
  },
  {
    title: "TUR Netherlands BV",
    description: "Netherlands",
    eyebrow: "Regional Presence",
  },
  {
    title: "James Gibbons Format Limited",
    description: "United Kingdom",
    eyebrow: "Regional Presence",
  },
  {
    title: "TUR Lanka Holdings",
    description: "Sri Lanka",
    eyebrow: "Regional Presence",
  },
  {
    title: "TUR Arabia Establishment",
    description: "Middle East",
    eyebrow: "Regional Presence",
  },
];
