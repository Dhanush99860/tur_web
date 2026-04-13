import { createInquiryHref } from "@/content/site/site-config";
import { catalogSections, getCatalogSection } from "@/content/catalog/sections";
import type { CatalogCard, CatalogFamily, CatalogSectionSlug } from "@/types";

const productHref = (slug: string) => `/products/${slug}`;

const doorHardwareFamilies: CatalogFamily[] = [
  {
    section: "door-hardware",
    slug: "american-standard",
    title: "American Standard",
    description:
      "Coordinated hardware families for hanging, controlling, securing and furnishing architectural door sets.",
    intro:
      "American Standard organises the core door functions used across commercial, hospitality and institutional specifications.",
    image: "/tur/project-1.jpg",
    imageAlt: "American Standard architectural door hardware",
    highlights: ["Hang The Door", "Control The Door", "Secure The Door"],
    cards: [
      {
        title: "Hang The Door",
        description: "Core hanging hardware for coordinated door schedules.",
        href: productHref("hang-the-door"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Control The Door",
        description: "Control hardware for dependable movement and closing.",
        href: productHref("control-the-door"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Secure The Door",
        description: "Security-led hardware for protected and controlled openings.",
        href: productHref("secure-the-door"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Emergency Exits and Ancillary Products",
        description:
          "Life-safety and supporting components used to complete coordinated packages.",
        eyebrow: "Support Range",
        note: "Catalog support available on request.",
      },
    ],
    primaryCta: {
      label: "Request American Standard Details",
      href: createInquiryHref("American Standard Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Specification-led American Standard coordination",
    supportBody:
      "Use this landing page as a family overview, then move into dedicated product pages or contact TUR for project coordination and catalog support.",
    keywords: ["american standard", "door hardware", "hang the door", "secure the door"],
  },
  {
    section: "door-hardware",
    slug: "european-ironmongery",
    title: "European Ironmongery",
    description:
      "Premium ironmongery families for architectural door sets, finish coordination and furnishing packages.",
    intro:
      "European Ironmongery brings together core door functions and design-conscious hardware families suited to premium specifications.",
    image: "/tur/project-2.jpg",
    imageAlt: "European Ironmongery range from TUR",
    highlights: ["Bolt The Door", "Cylinders", "TA1200 Series"],
    cards: [
      {
        title: "Cylinders",
        description: "Cylinder families for keyed access coordination across projects.",
        href: productHref("cylinders"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "TA1200 Series Standard Lever Designs",
        description: "Lever designs for furnishing-focused architectural door sets.",
        href: productHref("furnish-the-door"),
        eyebrow: "Featured Family",
        ctaLabel: "View Product",
      },
      {
        title: "Bolt The Door",
        description: "Bolting families for secure closure and refined detailing.",
        href: productHref("bolt-the-door"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Furnish The Door Lever Handle",
        description: "Lever handle family for premium furnishing applications.",
        href: productHref("furnish-the-door-lever-handle"),
        eyebrow: "Featured Family",
        ctaLabel: "View Product",
      },
    ],
    primaryCta: {
      label: "Request Ironmongery Details",
      href: createInquiryHref("European Ironmongery Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    supportTitle: "Premium ironmongery with specification support",
    supportBody:
      "This family overview provides a clear route into cylinders, lever designs and bolting solutions while keeping broader specification support one step away.",
    keywords: ["european ironmongery", "premium ironmongery", "lever handle", "cylinders"],
  },
  {
    section: "door-hardware",
    slug: "glass-hardware",
    title: "Glass Hardware",
    description:
      "Frameless and all-glass fittings for hinges, clips, patch fittings, pull handles and supporting glass applications.",
    intro:
      "Glass Hardware groups contemporary fitting families for frameless entrances, partitions and premium all-glass door applications.",
    image: "/tur/project-3.jpg",
    imageAlt: "Glass hardware solutions from TUR",
    highlights: ["Glass Hinge & Glass Clip", "Patch Fitting", "Pull Handle"],
    cards: [
      {
        title: "Glass Hinge & Glass Clip",
        description: "Frameless hinge and clip hardware for clean-lined glass applications.",
        href: productHref("glass-hinge-glass-clip"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Bathroom Handle & Glass Knob",
        description: "Handles and knobs for bathroom and partition glass applications.",
        href: productHref("bathroom-handle-glass-knob"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Patch Fitting",
        description: "Hydraulic patch fitting coordination for frameless glass doors.",
        href: productHref("tg-pf103"),
        eyebrow: "Featured Family",
        ctaLabel: "View Product",
      },
      {
        title: "Pull Handle",
        description: "Architectural pull handles for glass and premium door applications.",
        href: productHref("pull-handle"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
    ],
    primaryCta: {
      label: "Request Glass Hardware Details",
      href: createInquiryHref("Glass Hardware Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Frameless hardware for architectural glass applications",
    supportBody:
      "Use these family links to move into available product pages or request broader glass hardware coordination for project-led entrances and partitions.",
    keywords: ["glass hardware", "frameless hardware", "patch fitting", "pull handle"],
  },
  {
    section: "door-hardware",
    slug: "access-control",
    title: "Access Control",
    description:
      "Integrated locking, release devices, E-ACCESS systems and accessories for secure and coordinated entry points.",
    intro:
      "Access Control covers the locking, release and electronic access layers needed to coordinate secure opening packages across commercial and institutional projects.",
    image: "/tur/video-thumb.png",
    imageAlt: "Access control systems from TUR",
    highlights: ["Electromagnetic Locks", "Electric Strikes", "E-ACCESS"],
    cards: [
      {
        title: "Electromagnetic Locks",
        description: "Electromagnetic locking hardware for secure access-controlled openings.",
        href: productHref("electromagnetic-locks"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Electric Strikes",
        description: "Integrated release functionality for coordinated access workflows.",
        href: productHref("electric-strikes"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "E-ACCESS",
        description: "Electronic access control family for managed entry points.",
        href: productHref("e-access"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "TU.D800 / TU.DL-400",
        description:
          "Representative electromagnetic and electromechanical hardware for secure entry coordination.",
        href: productHref("tu-d800"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
      },
    ],
    primaryCta: {
      label: "Request Access Control Details",
      href: createInquiryHref("Access Control Inquiry"),
    },
    secondaryCta: {
      label: "Send Project Inquiry",
      href: "/contact",
    },
    supportTitle: "Secure opening coordination across hardware and access layers",
    supportBody:
      "Access Control landing pages collect the available product pages while leaving room for broader family catalog requests where dedicated detail pages are still pending.",
    keywords: [
      "access control",
      "electromagnetic locks",
      "electric strikes",
      "electronic access",
    ],
  },
  {
    section: "door-hardware",
    slug: "sealing-systems",
    title: "Sealing Systems",
    description:
      "Door bottom, threshold and perimeter seals that support coordinated threshold performance and architectural detailing.",
    intro:
      "Sealing Systems covers threshold, perimeter and weather solutions used to complete entrance packages and improve door performance.",
    image: "/tur/sliding-a.jpg",
    imageAlt: "Door sealing systems from TUR",
    highlights: ["Door Bottom Seals", "Threshold Plate Seals", "Weather Stripping"],
    cards: [
      {
        title: "Door Bottom Seals",
        description: "Threshold sealing systems for controlled air movement and door performance.",
        href: productHref("door-bottom-seals"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Threshold Plate Seals",
        description: "Threshold plate and seal coordination for clean transitions and performance.",
        href: productHref("threshold-plate-seals"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Door Frame Or Perimeter Seals",
        description: "Frame and perimeter seal systems for architectural doors.",
        href: productHref("door-frame-perimeter-seals"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
      {
        title: "Weather Stripping",
        description: "Complementary weather stripping for coordinated sealing packages.",
        href: productHref("weather-stripping"),
        eyebrow: "Family",
        ctaLabel: "View Product",
      },
    ],
    primaryCta: {
      label: "Request Sealing Systems Details",
      href: createInquiryHref("Sealing Systems Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Threshold and perimeter performance for coordinated openings",
    supportBody:
      "This page provides a clear route into the sealing families already present in the build, while keeping the remaining families available as inquiry-led placeholders instead of dead links.",
    keywords: ["sealing systems", "door bottom seals", "threshold seals", "weather stripping"],
  },
];

const automaticOperatorFamilies: CatalogFamily[] = [
  {
    section: "automatic-operators",
    slug: "sliding-doors",
    title: "Sliding Doors",
    description:
      "Automatic sliding door families shaped for circulation, controlled access and streamlined architectural entry sequences.",
    intro:
      "Sliding Doors collects key sliding families used across commercial and high-traffic entrance planning.",
    image: "/tur/sliding-b.jpg",
    imageAlt: "Automatic sliding doors from TUR",
    highlights: ["Prismatic CMW", "Telescoping EMT", "heavyMaster HM"],
    cards: [
      {
        title: "Prismatic and Curved Sliding Doors",
        description: "Sliding families for controlled and coordinated access flows.",
        eyebrow: "Sliding Family",
        note: "Family details available on request.",
      },
      {
        title: "Telescoping Sliding Door EMT",
        description: "Telescoping sliding family for constrained openings and efficient movement.",
        eyebrow: "Sliding Family",
        note: "Family details available on request.",
      },
      {
        title: "Escape Route Sliding Door HM-F FT",
        description: "Escape route-ready sliding family for safety-led entrance planning.",
        eyebrow: "Safety Sliding",
        note: "Family details available on request.",
      },
      {
        title: "heavyMaster HM",
        description: "Heavy-duty sliding family for demanding entrance applications.",
        eyebrow: "Sliding Family",
        note: "Family details available on request.",
      },
    ],
    primaryCta: {
      label: "Request Sliding Door Details",
      href: createInquiryHref("Sliding Doors Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Sliding entrance families for controlled circulation",
    supportBody:
      "Representative sliding families are listed here as a clean project entry point even where the build does not yet include full product-detail pages for each model.",
    keywords: ["automatic sliding doors", "sliding operators", "entrance automation"],
  },
  {
    section: "automatic-operators",
    slug: "controlled-physical-access",
    title: "Controlled Physical Access",
    description:
      "Security entrance systems that guide, channel and control physical access across sensitive or high-volume environments.",
    intro:
      "Controlled Physical Access groups turnstiles, swing gates, reader posts and related systems for secure flow management.",
    image: "/tur/project-4.jpg",
    imageAlt: "Controlled physical access systems from TUR",
    highlights: ["Turnstiles", "Swing Gates", "Reader Posts"],
    cards: [
      {
        title: "Reader Posts and Pedestrian Guiding Bars",
        description: "Supporting guidance and reader post systems for coordinated access layouts.",
        eyebrow: "Supporting System",
        note: "Family details available on request.",
      },
      {
        title: "Motorised Swing Gates",
        description: "Controlled swing gate systems for managed pedestrian movement.",
        eyebrow: "Access System",
        note: "Family details available on request.",
      },
      {
        title: "Tripod and Full-Height Turnstiles",
        description: "Turnstile families for secure circulation and controlled entry volumes.",
        eyebrow: "Access System",
        note: "Family details available on request.",
      },
    ],
    primaryCta: {
      label: "Request Controlled Access Details",
      href: createInquiryHref("Controlled Physical Access Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Secure flow management for controlled environments",
    supportBody:
      "This route keeps controlled access systems visible within the IA today while deeper model-level migration can happen later.",
    keywords: ["controlled access", "turnstiles", "swing gates", "reader posts"],
  },
  {
    section: "automatic-operators",
    slug: "revolving-doors",
    title: "Revolving Doors",
    description:
      "Security, standard and all-glass revolving door families for premium and high-capacity entrance applications.",
    intro:
      "Revolving Doors provides a family-level overview of the key revolving door systems in the TUR range.",
    image: "/tur/project-c.jpg",
    imageAlt: "Revolving door systems from TUR",
    highlights: ["Security Revolving", "Large Capacity", "All-Glass Revolving"],
    cards: [
      {
        title: "GSI Security Revolving Door",
        description: "Security revolving door family for controlled entrance applications.",
        eyebrow: "Security System",
        note: "Family details available on request.",
      },
      {
        title: "Large-Capacity Revolving Doors",
        description: "High-volume revolving door families for premium circulation.",
        eyebrow: "Revolving Family",
        note: "Family details available on request.",
      },
      {
        title: "All-Glass and Standard Revolving Doors",
        description: "Representative revolving families for premium architectural entrances.",
        eyebrow: "Revolving Family",
        note: "Family details available on request.",
      },
    ],
    primaryCta: {
      label: "Request Revolving Door Details",
      href: createInquiryHref("Revolving Doors Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Revolving door families for premium and secure entrances",
    supportBody:
      "The revolving door families are presented as a lightweight landing page now so navigation remains complete without introducing dead links.",
    keywords: ["revolving doors", "all-glass revolving doors", "security revolving doors"],
  },
  {
    section: "automatic-operators",
    slug: "swing-door-drives",
    title: "Swing Door Drives",
    description:
      "Automatic swing door operator families for accessibility, controlled circulation and specification-led entrance packages.",
    intro:
      "Swing Door Drives focuses on operator families for accessible, commercial and controlled entrance applications.",
    image: "/tur/sliding-d.jpg",
    imageAlt: "Swing door drives from TUR",
    highlights: ["DTN 80", "TSW150", "TSW120"],
    cards: [
      {
        title: "DTN 80",
        description: "Automatic operator for fire, smoke, interior and exterior door automation.",
        href: productHref("swing-door-drives"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
      },
      {
        title: "TSW150 Automatic Door Operator",
        description: "Automatic operator for hygiene-conscious and accessible entrances.",
        href: productHref("tsw150-automatic-door-operator"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
      },
      {
        title: "TSW120 Automatic Door Operator",
        description: "Specification-led operator with quiet control and multiple activation options.",
        href: productHref("tsw120-automatic-door-operator"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
      },
    ],
    primaryCta: {
      label: "Request Swing Door Drive Details",
      href: createInquiryHref("Swing Door Drives Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    supportTitle: "Automatic swing operators for specification-led projects",
    supportBody:
      "This page connects the current detail pages for DTN 80, TSW150 and TSW120 within a clearer Automatic Operators hierarchy.",
    keywords: ["swing door drives", "automatic swing operators", "accessibility operators"],
  },
  {
    section: "automatic-operators",
    slug: "all-glass-systems",
    title: "All Glass Systems",
    description:
      "All-glass sliding systems for premium architectural entrances and coordinated storefront-style applications.",
    intro:
      "All Glass Systems collects the shopMaster families used for premium all-glass movement and entrance coordination.",
    image: "/tur/sliding-c.jpg",
    imageAlt: "All-glass systems from TUR",
    highlights: ["shopMaster GSW-A", "GSW-M G30", "GSW-M"],
    cards: [
      {
        title: "shopMaster GSW-A",
        description: "All-glass system for coordinated architectural entrance movement.",
        href: productHref("sliding-doors"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
      },
      {
        title: "shopMaster GSW-M G30",
        description: "All-glass system family for premium coordinated entrances.",
        eyebrow: "All-Glass Family",
        note: "Family details available on request.",
      },
      {
        title: "shopMaster GSW-M",
        description: "Supporting all-glass system family for premium applications.",
        eyebrow: "All-Glass Family",
        note: "Family details available on request.",
      },
    ],
    primaryCta: {
      label: "Request All-Glass System Details",
      href: createInquiryHref("All Glass Systems Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "All-glass movement systems for premium entrances",
    supportBody:
      "shopMaster families are grouped here to give the homepage and navigation a clean page-based path into all-glass systems without relying on legacy collection anchors.",
    keywords: ["all glass systems", "shopmaster", "automatic glass doors"],
  },
  {
    section: "automatic-operators",
    slug: "automatic-pulse-generators-and-sensors",
    title: "Automatic Pulse Generators & Sensors",
    description:
      "Activation devices and sensor layers that support coordinated automatic entry operation.",
    intro:
      "This landing page currently acts as a category overview for activation devices, sensors and supporting control inputs for automatic entrances.",
    image: "/tur/slider-6.webp",
    imageAlt: "Automatic pulse generators and sensors from TUR",
    highlights: ["Activation Devices", "Safety Sensors", "Control Inputs"],
    cards: [
      {
        title: "Activation Devices",
        description: "Supporting activation and trigger devices for automatic entrances.",
        eyebrow: "Category Overview",
        note: "Detailed model pages can be added into this family later.",
      },
      {
        title: "Safety Sensors",
        description: "Sensor layers for coordinated activation and user safety.",
        eyebrow: "Category Overview",
        note: "Detailed model pages can be added into this family later.",
      },
      {
        title: "Control Inputs",
        description: "Push buttons, wireless triggers and supporting control inputs.",
        eyebrow: "Category Overview",
        note: "Detailed model pages can be added into this family later.",
      },
    ],
    primaryCta: {
      label: "Request Sensor Category Details",
      href: createInquiryHref("Automatic Pulse Generators and Sensors Inquiry"),
    },
    secondaryCta: {
      label: "Send Inquiry",
      href: "/contact",
    },
    supportTitle: "A clean category route that is ready for deeper migration",
    supportBody:
      "This route is intentionally lightweight for now, but it ensures the IA remains complete while activation-device details are migrated page by page.",
    keywords: ["automatic sensors", "activation devices", "pulse generators"],
  },
];

export const catalogFamilies = [...doorHardwareFamilies, ...automaticOperatorFamilies];

export const catalogSectionRoutes = catalogSections.map((section) => `/${section.slug}`);

export const catalogFamilyRoutes = catalogFamilies.map(
  (family) => `/${family.section}/${family.slug}`,
);

export { catalogSections, getCatalogSection };

export function getCatalogFamiliesBySection(section: CatalogSectionSlug) {
  return catalogFamilies.filter((family) => family.section === section);
}

export function getCatalogFamily(section: CatalogSectionSlug, slug: string) {
  return catalogFamilies.find(
    (family) => family.section === section && family.slug === slug,
  );
}

export function getCatalogSectionFamilyCards(section: CatalogSectionSlug): CatalogCard[] {
  const catalogSection = getCatalogSection(section);

  if (catalogSection?.routeCards?.length) {
    return catalogSection.routeCards;
  }

  return getCatalogFamiliesBySection(section).map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    eyebrow: section === "door-hardware" ? "Door Hardware Family" : "System Family",
    ctaLabel: "Explore Family",
    image: family.image,
    imageAlt: family.imageAlt,
  }));
}

export function getCatalogSectionCards(section: CatalogSectionSlug): CatalogCard[] {
  return getCatalogFamiliesBySection(section).map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    eyebrow:
      section === "door-hardware" ? "Category Landing Page" : "Family Landing Page",
    ctaLabel: "View Family",
    image: family.image,
    imageAlt: family.imageAlt,
  }));
}
