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
  "furnish-the-door",
  "tg-pf103",
  "tsw150-automatic-door-operator",
] as const;

export const homeCarouselProductSlugs = [
  "hang-the-door",
  "cylinders",
  "glass-hinge-glass-clip",
  "electromagnetic-locks",
  "door-bottom-seals",
  "tsw150-automatic-door-operator",
] as const;

export const homeSpotlightProductSlug = "furnish-the-door";

export const homeSpotlightImages = [
  {
    src: "/tur/project-b.jpg",
    alt: "Premium lever handle and door furnishing detail from TUR",
    label: "Ironmongery Detail",
  },
  {
    src: "/tur/project-2.jpg",
    alt: "European ironmongery project reference from TUR",
  },
] as const satisfies readonly GalleryImage[];

export const homeResourceCards: ResourceCard[] = [
  {
    title: "Company Profile",
    category: "Downloads",
    description:
      "Registrations, product verticals, technical services, partner brands and company background in one document.",
    href: "/company_profile.pdf",
    ctaLabel: "Open Company Profile",
    image: "/tur/slider-2.webp",
    imageAlt: "TUR company profile document cover",
  },
  {
    title: "About TUR & Technical Services",
    category: "Company",
    description:
      "Heritage, regional experience, technical coordination and the wider platform behind TUR's project work.",
    href: "/about",
    ctaLabel: "Read About TUR",
    image: "/tur/slider-2.webp",
    imageAlt: "About TUR and technical services overview",
  },
  {
    title: "Start Project Inquiry",
    category: "Contact",
    description:
      "Reach TUR for product selection, catalog requests, technical clarification and project-specific support.",
    href: "/contact",
    ctaLabel: "Contact TUR",
    image: "/tur/slider-2.webp",
    imageAlt: "Project inquiry and technical coordination route",
  },
];

export const homeStoryCards: StoryCard[] = [
  {
    eyebrow: "Heritage",
    title: "Since 1670 heritage through James Gibbons Format",
    description:
      "A long-standing heritage narrative anchored through James Gibbons Format and carried into TUR's architectural hardware platform.",
    image: "/tur/slider-2.webp",
    imageAlt: "Heritage and legacy visual",
  },
  {
    eyebrow: "Regional Experience",
    title: "30+ years of project experience across the Middle East and South Asia",
    description:
      "Regional delivery experience across specification, supply and coordination for commercial, hospitality, healthcare and institutional work.",
    image: "/tur/project-a.jpg",
    imageAlt: "Regional experience visual",
  },
  {
    eyebrow: "Technical Services",
    title: "Scheduling, shop drawings, master keying and installation support",
    description:
      "Technical services include estimation, scheduling, shop drawings, master keying, installation support and troubleshooting.",
    image: "/tur/mc-2.jpg",
    imageAlt: "Project collaboration visual",
  },
  {
    eyebrow: "Global Presence",
    title: "A broader platform across Europe, the Middle East and South Asia",
    description:
      "Registrations, partner relationships and regional presence reinforce a broader platform for project delivery and technical support.",
    image: "/tur/project-c.jpg",
    imageAlt: "Global presence visual",
  },
];

export const homeCollectionTabs: CollectionTab[] = [
  {
    label: "Automatic Operators",
    href: "/automatic-operators",
    description:
      "Sliding, swing and controlled entrance systems for coordinated circulation.",
    image: "/tur/slider-3.webp",
    imageAlt: "Automatic operators category visual",
  },
  {
    label: "Access Control",
    href: "/door-hardware/access-control",
    description:
      "Locking, release and E-ACCESS hardware for secure, managed openings.",
    image: "/tur/slider-5.webp",
    imageAlt: "Access control category visual",
  },
  {
    label: "Glass Hardware",
    href: "/door-hardware/glass-hardware",
    description:
      "Frameless fittings, patch hardware and pull handles for architectural glass.",
    image: "/tur/project-3.jpg",
    imageAlt: "Glass hardware category visual",
  },
  {
    label: "Sealing Systems",
    href: "/door-hardware/sealing-systems",
    description:
      "Threshold, perimeter and weather solutions for opening performance.",
    image: "/tur/sliding-a.jpg",
    imageAlt: "Sealing systems category visual",
  },
  {
    label: "European Ironmongery",
    href: "/door-hardware/european-ironmongery",
    description:
      "Premium ironmongery families for finish-led architectural projects.",
    image: "/tur/mc-1.jpg",
    imageAlt: "European ironmongery category visual",
  },
  {
    label: "American Standard",
    href: "/door-hardware/american-standard",
    description:
      "Foundational families for hanging, controlling and securing the door.",
    image: "/tur/project-1.jpg",
    imageAlt: "American Standard category visual",
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
    productSlug: "furnish-the-door",
  },
];

export const homePartnerLogos: GalleryImage[] = [
  {
    src: "/tur/logo-1-1.png",
    alt: "BKS partner logo",
    label: "BKS",
  },
  {
    src: "/tur/logo-1-2.png",
    alt: "BKS Locks partner logo",
    label: "BKS Locks",
  },
  {
    src: "/tur/logo-1-3.png",
    alt: "DZE partner logo",
    label: "DZE",
  },
  {
    src: "/tur/logo-1-4.png",
    alt: "TUR Nederland partner logo",
    label: "TUR Nederland",
  },
  {
    src: "/tur/logo-1-5.png",
    alt: "VGE partner logo",
    label: "VGE",
  },
  {
    src: "/tur/logo-1-6.png",
    alt: "James Gibbons Format partner logo",
    label: "James Gibbons Format",
  },
];

export const aboutHighlights: StoryCard[] = [
  {
    eyebrow: "Heritage",
    title: "Since 1670 legacy",
    description:
      "TUR references a long partnership and heritage narrative shaped through James Gibbons Format and project-led architectural hardware.",
    image: "/tur/slider-2.webp",
    imageAlt: "James Gibbons Format and heritage visual",
  },
  {
    eyebrow: "Core Offer",
    title: "Architectural hardware and automatic entry systems",
    description:
      "The TUR offer brings together hardware, access control, sealing systems and automatic operators under one coordinated platform.",
    image: "/tur/project-a.jpg",
    imageAlt: "Architectural hardware and automatic entry systems",
  },
  {
    eyebrow: "Technical Services",
    title: "Project-oriented technical coordination",
    description:
      "Architects, consultants, contractors and project teams can use TUR for coordinated hardware selection and inquiry-led support.",
    image: "/tur/mc-2.jpg",
    imageAlt: "Project teams and technical coordination",
  },
  {
    eyebrow: "Global Presence",
    title: "Regional and global presence",
    description:
      "TUR's visible regional structure supports a broader global platform for project delivery and product coordination.",
    image: "/tur/project-c.jpg",
    imageAlt: "Global presence and regional structure",
  },
];

export const downloadResources: DownloadResource[] = [
  {
    title: "TUR with Format Company Profile",
    description:
      "Download the main company profile for an overview of heritage, product direction, global structure and project support positioning.",
    href: "/company_profile.pdf",
    ctaLabel: "Download PDF",
    eyebrow: "Primary Download",
    image: "/tur/meta-default.jpg",
    imageAlt: "TUR company profile download",
  },
  {
    title: "Request Product Catalog",
    description:
      "Use the inquiry route to request broader category details and supporting catalog information.",
    href: createInquiryHref("Request Catalog"),
    ctaLabel: "Request Details",
    eyebrow: "Support",
    image: "/tur/slider-4.webp",
    imageAlt: "Request product catalog",
  },
  {
    title: "Technical Services Inquiry",
    description:
      "Reach TUR for project coordination, specification review and technical support discussions.",
    href: "/contact",
    ctaLabel: "Contact TUR",
    eyebrow: "Project Support",
    image: "/tur/video-thumb.png",
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
