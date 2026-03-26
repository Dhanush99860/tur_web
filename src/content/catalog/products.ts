import type { Product } from "@/types";

const gallery = (...items: string[]) => items;

type ProductInput = Omit<Product, "vendor" | "resourceHref"> &
  Partial<Pick<Product, "vendor" | "resourceHref">>;

function defineProduct(input: ProductInput): Product {
  return {
    vendor: "TUR",
    resourceHref: "/company_profile.pdf",
    updatedAt: "2026-03-20",
    ...input,
  };
}

export const products: Product[] = [
  defineProduct({
    slug: "hang-the-door",
    title: "Hang The Door",
    section: "door-hardware",
    familySlug: "american-standard",
    familyTitle: "American Standard",
    category: "American Standard",
    description:
      "A foundational family for hinges and related door preparation components within the American Standard range.",
    shortDescription:
      "Core hanging hardware for coordinated architectural door sets.",
    overview:
      "Hang The Door acts as the entry point for coordinated hanging packages across commercial, hospitality and institutional specifications.",
    image: "/tur/project-1.jpg",
    imageAlt: "Hang The Door product family visual",
    gallery: gallery("/tur/project-1.jpg", "/tur/sliding-c.jpg", "/tur/slider-2.webp"),
    features: [
      "Supports coordinated hinge and hanging schedules.",
      "Suitable for project-wide hardware packages.",
      "Framed for specification-led door preparation.",
    ],
    applications: [
      "Commercial door schedules",
      "Hospitality guestroom packages",
      "Institutional retrofits",
    ],
    finishOptions: ["Catalog View", "Specification View"],
    inquirySubject: "Hang The Door Inquiry",
    relatedSlugs: ["control-the-door", "secure-the-door", "tu-d800"],
  }),
  defineProduct({
    slug: "control-the-door",
    title: "Control The Door",
    section: "door-hardware",
    familySlug: "american-standard",
    familyTitle: "American Standard",
    category: "American Standard",
    description:
      "Control hardware grouped for managed door movement, coordinated closing action and dependable circulation performance.",
    shortDescription:
      "Door control hardware for reliable movement and closing.",
    overview:
      "This family supports controlled operation, closing performance and smooth daily circulation within coordinated hardware schedules.",
    image: "/tur/project-b.jpg",
    imageAlt: "Control The Door product family visual",
    gallery: gallery("/tur/project-b.jpg", "/tur/slider-3.webp", "/tur/sliding-d.jpg"),
    features: [
      "Supports coordinated closing and movement performance.",
      "Suitable for circulation-heavy environments.",
      "Framed for specification-led door packages.",
    ],
    applications: [
      "Commercial entrances",
      "Education and healthcare projects",
      "Back-of-house circulation routes",
    ],
    finishOptions: ["Catalog View", "Specification View"],
    inquirySubject: "Control The Door Inquiry",
    relatedSlugs: ["hang-the-door", "secure-the-door", "tsw150-automatic-door-operator"],
  }),
  defineProduct({
    slug: "secure-the-door",
    title: "Secure The Door",
    section: "door-hardware",
    familySlug: "american-standard",
    familyTitle: "American Standard",
    category: "American Standard",
    description:
      "Security-oriented hardware families for everyday door protection, dependable operation and architectural coordination.",
    shortDescription:
      "Security hardware families for controlled and protected openings.",
    overview:
      "Secure The Door brings together core securing functions where reliability, safety and controlled access matter within a broader hardware package.",
    image: "/tur/project-c.jpg",
    imageAlt: "Secure The Door product family visual",
    gallery: gallery("/tur/project-c.jpg", "/tur/slider-4.webp", "/tur/project-2.jpg"),
    features: [
      "Supports protected and controlled openings.",
      "Fits coordinated hardware schedules.",
      "Aligned with specification-led commercial work.",
    ],
    applications: [
      "Institutional entrance packages",
      "Hospitality service routes",
      "Commercial secure areas",
    ],
    finishOptions: ["Standard", "Project Finish"],
    inquirySubject: "Secure The Door Inquiry",
    relatedSlugs: ["hang-the-door", "control-the-door", "tu-d800"],
  }),
  defineProduct({
    slug: "tu-d800",
    title: "TU.D800",
    section: "door-hardware",
    familySlug: "access-control",
    familyTitle: "Access Control",
    category: "Access Control",
    description:
      "Representative electromagnetic lock hardware positioned for secure openings, coordinated access control and project-led door packages.",
    shortDescription:
      "Electromagnetic lock hardware for coordinated access-controlled openings.",
    overview:
      "TU.D800 provides a clear product-level destination for access-controlled openings while the broader access control family remains inquiry-led.",
    image: "/tur/slider-5.webp",
    imageAlt: "TU.D800 model visual",
    gallery: gallery("/tur/slider-5.webp", "/tur/project-4.jpg", "/tur/sliding-e.jpg"),
    features: [
      "Supports electromagnetic locking strategies.",
      "Suitable for controlled entry coordination.",
      "Works within project-led access packages.",
    ],
    applications: [
      "Controlled offices",
      "Institutional access points",
      "Commercial service entries",
    ],
    finishOptions: ["Standard", "Project"],
    badge: "Featured",
    inquirySubject: "TU.D800 Inquiry",
    relatedSlugs: ["electromagnetic-locks", "electric-strikes", "e-access"],
  }),
  defineProduct({
    slug: "bolt-the-door",
    title: "Bolt The Door",
    section: "door-hardware",
    familySlug: "european-ironmongery",
    familyTitle: "European Ironmongery",
    category: "European Ironmongery",
    description:
      "European ironmongery bolt solutions for secure closure, refined detailing and coordinated furnishing packages.",
    shortDescription:
      "Premium bolting solutions for European ironmongery door sets.",
    overview:
      "Bolt The Door supports premium ironmongery specifications where secure closure, finish coordination and architectural detailing matter.",
    image: "/tur/mc-1.jpg",
    imageAlt: "Bolt The Door ironmongery family visual",
    gallery: gallery("/tur/mc-1.jpg", "/tur/project-2.jpg", "/tur/slider-1.webp"),
    features: [
      "Supports premium closure hardware packages.",
      "Aligned with refined detailing requirements.",
      "Suitable for specification-led furnishing schedules.",
    ],
    applications: [
      "Premium hospitality door sets",
      "High-spec residential common areas",
      "Commercial executive spaces",
    ],
    finishOptions: ["Satin", "Polished"],
    inquirySubject: "Bolt The Door Inquiry",
    relatedSlugs: ["furnish-the-door", "cylinders", "furnish-the-door-lever-handle"],
  }),
  defineProduct({
    slug: "furnish-the-door",
    title: "TA1200 Series Standard Lever Designs",
    section: "door-hardware",
    familySlug: "european-ironmongery",
    familyTitle: "European Ironmongery",
    category: "European Ironmongery",
    description:
      "Lever design solutions developed for specification-led door sets, coordinated finishes and premium architectural touchpoints.",
    shortDescription:
      "Lever handle designs for coordinated specifications and finish selection.",
    overview:
      "TA1200 Series gives the site a premium furnishing-led product page that reflects TUR's architectural and specification-oriented positioning.",
    image: "/tur/mc-2.jpg",
    imageAlt: "TA1200 Series Standard Lever Designs visual",
    gallery: gallery("/tur/mc-2.jpg", "/tur/project-3.jpg", "/tur/slider-6.webp"),
    features: [
      "Supports coordinated finish packages.",
      "Designed for furnishing-focused door sets.",
      "Suitable for premium architectural touchpoints.",
    ],
    applications: [
      "Hospitality guestrooms",
      "Executive office fit-outs",
      "Institutional reception areas",
    ],
    finishOptions: ["Satin", "Polished"],
    inquirySubject: "TA1200 Series Inquiry",
    relatedSlugs: ["bolt-the-door", "cylinders", "furnish-the-door-lever-handle"],
  }),
  defineProduct({
    slug: "cylinders",
    title: "Cylinders",
    section: "door-hardware",
    familySlug: "european-ironmongery",
    familyTitle: "European Ironmongery",
    category: "European Ironmongery",
    description:
      "Cylinder families for keyed access coordination across premium ironmongery specifications and project-wide schedules.",
    shortDescription:
      "Cylinder options for secure and coordinated ironmongery setups.",
    overview:
      "Cylinders provides a direct product-level route for project teams coordinating secure access under premium ironmongery packages.",
    image: "/tur/slider-2.webp",
    imageAlt: "Cylinders product family visual",
    gallery: gallery("/tur/slider-2.webp", "/tur/sliding-a.jpg", "/tur/project-a.jpg"),
    features: [
      "Supports keyed access coordination.",
      "Suitable for premium ironmongery schedules.",
      "Aligned with wider door package planning.",
    ],
    applications: [
      "Commercial keyed suites",
      "Hospitality back-of-house access",
      "Institutional room groupings",
    ],
    finishOptions: ["Standard", "Master Keyed"],
    inquirySubject: "Cylinder Inquiry",
    relatedSlugs: ["bolt-the-door", "furnish-the-door", "furnish-the-door-lever-handle"],
  }),
  defineProduct({
    slug: "furnish-the-door-lever-handle",
    title: "Furnish The Door Lever Handle",
    section: "door-hardware",
    familySlug: "european-ironmongery",
    familyTitle: "European Ironmongery",
    category: "European Ironmongery",
    description:
      "Lever handle options developed for furnishing-focused door sets with a premium architectural ironmongery language.",
    shortDescription:
      "Lever handle family for premium door furnishing applications.",
    overview:
      "This product page acts as a detail-ready landing point for lever handle migration while keeping the wider ironmongery family structure intact.",
    image: "/tur/project-2.jpg",
    imageAlt: "Lever handle family from TUR European Ironmongery",
    gallery: gallery("/tur/project-2.jpg", "/tur/project-4.jpg", "/tur/mc-2.jpg"),
    features: [
      "Supports premium furnishing packages.",
      "Suitable for refined architectural detailing.",
      "Aligned with finish-led ironmongery selections.",
    ],
    applications: [
      "Premium hospitality suites",
      "High-spec offices",
      "Institutional public areas",
    ],
    finishOptions: ["Satin", "Polished"],
    inquirySubject: "Lever Handle Inquiry",
    relatedSlugs: ["furnish-the-door", "bolt-the-door", "cylinders"],
  }),
  defineProduct({
    slug: "glass-hinge-glass-clip",
    title: "Glass Hinge & Glass Clip",
    section: "door-hardware",
    familySlug: "glass-hardware",
    familyTitle: "Glass Hardware",
    category: "Glass Hardware",
    description:
      "Glass hinge and clip solutions for frameless applications requiring clean lines and dependable architectural detailing.",
    shortDescription:
      "Frameless hinge and clip hardware for glass applications.",
    overview:
      "This family represents TUR's contemporary glass hardware offer with a clean, specification-ready route into frameless detailing.",
    image: "/tur/project-3.jpg",
    imageAlt: "Glass hinge and glass clip product family visual",
    gallery: gallery("/tur/project-3.jpg", "/tur/sliding-b.jpg", "/tur/slider-3.webp"),
    features: [
      "Supports frameless architectural glass applications.",
      "Suitable for clean-lined premium detailing.",
      "Aligned with modern partition and entrance schemes.",
    ],
    applications: [
      "Glass partitions",
      "Frameless office entries",
      "Hospitality amenity spaces",
    ],
    finishOptions: ["Frameless", "Heavy Glass"],
    inquirySubject: "Glass Hinge and Clip Inquiry",
    relatedSlugs: ["bathroom-handle-glass-knob", "tg-pf103", "pull-handle"],
  }),
  defineProduct({
    slug: "bathroom-handle-glass-knob",
    title: "Bathroom Handle & Glass Knob",
    section: "door-hardware",
    familySlug: "glass-hardware",
    familyTitle: "Glass Hardware",
    category: "Glass Hardware",
    description:
      "Handle and knob families for bathroom and partition glass applications with a clean, contemporary hardware expression.",
    shortDescription:
      "Glass knobs and bathroom handles for premium partitions.",
    overview:
      "This page gives migration-ready structure to smaller glass hardware families that often arrive later in catalog projects.",
    image: "/tur/project-4.jpg",
    imageAlt: "Bathroom handle and glass knob family visual",
    gallery: gallery("/tur/project-4.jpg", "/tur/project-b.jpg", "/tur/slider-4.webp"),
    features: [
      "Supports bathroom and partition glass applications.",
      "Suitable for contemporary hospitality detailing.",
      "Aligned with premium frameless hardware language.",
    ],
    applications: [
      "Amenity spaces",
      "Partition systems",
      "Hospitality washrooms",
    ],
    finishOptions: ["Frameless", "Heavy Glass"],
    inquirySubject: "Bathroom Handle Inquiry",
    relatedSlugs: ["glass-hinge-glass-clip", "tg-pf103", "pull-handle"],
  }),
  defineProduct({
    slug: "tg-pf103",
    title: "TE7820 - 60KG Hydraulic Patch Fitting",
    section: "door-hardware",
    familySlug: "glass-hardware",
    familyTitle: "Glass Hardware",
    category: "Glass Hardware",
    description:
      "Hydraulic patch fitting support for frameless glass doors requiring controlled movement and cleaner architectural detailing.",
    shortDescription:
      "Hydraulic patch fitting for frameless glass door coordination.",
    overview:
      "TE7820 acts as a representative glass hardware detail page for patch fittings while broader glass hardware migration continues.",
    image: "/tur/sliding-c.jpg",
    imageAlt: "TE7820 hydraulic patch fitting visual",
    gallery: gallery("/tur/sliding-c.jpg", "/tur/slider-5.webp", "/tur/project-1.jpg"),
    features: [
      "Supports controlled glass door movement.",
      "Suitable for frameless premium entrances.",
      "Aligned with patch fitting coordination needs.",
    ],
    applications: ["Retail entrances", "Office lobbies", "Hospitality public areas"],
    finishOptions: ["Frameless", "All Glass"],
    badge: "Featured",
    inquirySubject: "TE7820 Patch Fitting Inquiry",
    relatedSlugs: ["glass-hinge-glass-clip", "bathroom-handle-glass-knob", "pull-handle"],
  }),
  defineProduct({
    slug: "pull-handle",
    title: "Pull Handle",
    section: "door-hardware",
    familySlug: "glass-hardware",
    familyTitle: "Glass Hardware",
    category: "Glass Hardware",
    description:
      "Pull handle options for architectural glass and door applications where tactile quality and visual clarity matter.",
    shortDescription:
      "Architectural pull handles for glass and premium door applications.",
    overview:
      "Pull Handle keeps an essential product family visible for migration while supporting a cleaner catalog-first structure.",
    image: "/tur/sliding-d.jpg",
    imageAlt: "Pull handle family visual",
    gallery: gallery("/tur/sliding-d.jpg", "/tur/project-c.jpg", "/tur/slider-6.webp"),
    features: [
      "Supports tactile premium detailing.",
      "Suitable for glass and architectural doors.",
      "Aligned with contemporary entrance design.",
    ],
    applications: ["All-glass entrances", "Corporate interiors", "Hospitality public routes"],
    finishOptions: ["Frameless", "Heavy Glass"],
    inquirySubject: "Pull Handle Inquiry",
    relatedSlugs: ["glass-hinge-glass-clip", "tg-pf103", "bathroom-handle-glass-knob"],
  }),
  defineProduct({
    slug: "electromagnetic-locks",
    title: "Electromagnetic Locks",
    section: "door-hardware",
    familySlug: "access-control",
    familyTitle: "Access Control",
    category: "Access Control",
    description:
      "Electromagnetic locking solutions designed for coordinated access control requirements across secure architectural openings.",
    shortDescription:
      "Electromagnetic locking hardware for secure access control.",
    overview:
      "This product page forms part of a stronger inquiry-led access control structure without implying a checkout workflow.",
    image: "/tur/slider-1.webp",
    imageAlt: "Electromagnetic locks product family visual",
    gallery: gallery("/tur/slider-1.webp", "/tur/project-a.jpg", "/tur/sliding-e.jpg"),
    features: [
      "Supports secure controlled openings.",
      "Suitable for integrated access-control packages.",
      "Aligned with specification-led entry planning.",
    ],
    applications: [
      "Office security points",
      "Institutional circulation control",
      "Commercial service access",
    ],
    finishOptions: ["Standard", "Enhanced"],
    inquirySubject: "Electromagnetic Locks Inquiry",
    relatedSlugs: ["electric-strikes", "e-access", "tu-d800"],
  }),
  defineProduct({
    slug: "electric-strikes",
    title: "Electric Strikes",
    section: "door-hardware",
    familySlug: "access-control",
    familyTitle: "Access Control",
    category: "Access Control",
    description:
      "Electric strike solutions for integrated release functionality, controlled access workflows and coordinated door security.",
    shortDescription:
      "Electric strike family for integrated access release.",
    overview:
      "Electric Strikes gives project teams a direct route to a key access-control family while preserving TUR's inquiry-led model.",
    image: "/tur/slider-6.webp",
    imageAlt: "Electric strikes product family visual",
    gallery: gallery("/tur/slider-6.webp", "/tur/project-4.jpg", "/tur/mc-1.jpg"),
    features: [
      "Supports release and access workflows.",
      "Suitable for secure coordinated openings.",
      "Aligned with electronic locking packages.",
    ],
    applications: [
      "Access-controlled offices",
      "Institutional secure rooms",
      "Commercial internal circulation",
    ],
    finishOptions: ["Standard", "Enhanced"],
    inquirySubject: "Electric Strikes Inquiry",
    relatedSlugs: ["electromagnetic-locks", "tu-dl-400", "e-access"],
  }),
  defineProduct({
    slug: "e-access",
    title: "E-ACCESS",
    section: "door-hardware",
    familySlug: "access-control",
    familyTitle: "Access Control",
    category: "Access Control",
    description:
      "Electronic access control family bringing together secure entry management, supporting accessories and coordinated operation.",
    shortDescription:
      "Electronic access control family for managed entry points.",
    overview:
      "E-ACCESS is one of the strongest inquiry-led product families in the range and anchors the broader access control narrative.",
    image: "/tur/video-thumb.png",
    imageAlt: "E-ACCESS family visual from TUR",
    gallery: gallery("/tur/video-thumb.png", "/tur/project-2.jpg", "/tur/sliding-f.jpg"),
    features: [
      "Supports managed electronic access workflows.",
      "Suitable for secure and monitored entries.",
      "Aligned with integrated project packages.",
    ],
    applications: [
      "Corporate headquarters",
      "Healthcare access control",
      "Institutional secure areas",
    ],
    finishOptions: ["Standard", "Integrated"],
    badge: "Featured",
    inquirySubject: "E-ACCESS Inquiry",
    relatedSlugs: ["electromagnetic-locks", "electric-strikes", "tu-d800"],
  }),
  defineProduct({
    slug: "tu-dl-400",
    title: "TU.DL-400",
    section: "door-hardware",
    familySlug: "access-control",
    familyTitle: "Access Control",
    category: "Access Control",
    description:
      "Access control hardware positioned for secure entry coordination, compatible locking arrangements and project-based specification review.",
    shortDescription:
      "Access control hardware for secure entry coordination and specification support.",
    overview:
      "TU.DL-400 gives the site another product-level detail page in the access-control family while migration expands over time.",
    image: "/tur/meta-default.jpg",
    imageAlt: "TU.DL-400 access control hardware visual",
    gallery: gallery("/tur/meta-default.jpg", "/tur/slider-2.webp", "/tur/project-b.jpg"),
    features: [
      "Supports secure entry coordination.",
      "Suitable for integrated locking arrangements.",
      "Aligned with specification-led reviews.",
    ],
    applications: [
      "Controlled office entrances",
      "Institutional security upgrades",
      "Commercial secure back-of-house routes",
    ],
    finishOptions: ["Standalone", "Integrated"],
    inquirySubject: "TU.DL-400 Inquiry",
    relatedSlugs: ["electromagnetic-locks", "electric-strikes", "e-access"],
  }),
  defineProduct({
    slug: "door-bottom-seals",
    title: "Door Bottom Seals",
    section: "door-hardware",
    familySlug: "sealing-systems",
    familyTitle: "Sealing Systems",
    category: "Sealing Systems",
    description:
      "Door bottom seal solutions for controlling air movement, threshold performance and coordinated door detailing.",
    shortDescription:
      "Door bottom sealing systems for threshold performance.",
    overview:
      "Door Bottom Seals gives sealing systems a migration-ready detail page without losing the broader inquiry-led family context.",
    image: "/tur/sliding-a.jpg",
    imageAlt: "Door bottom seals product family visual",
    gallery: gallery("/tur/sliding-a.jpg", "/tur/project-1.jpg", "/tur/slider-4.webp"),
    features: [
      "Supports threshold sealing performance.",
      "Suitable for coordinated door detailing.",
      "Aligned with entrance performance requirements.",
    ],
    applications: [
      "Commercial entries",
      "Institutional corridors",
      "Hospitality service routes",
    ],
    finishOptions: ["Standard", "Heavy Duty"],
    inquirySubject: "Door Bottom Seals Inquiry",
    relatedSlugs: [
      "threshold-plate-seals",
      "door-frame-perimeter-seals",
      "weather-stripping",
    ],
  }),
  defineProduct({
    slug: "threshold-plate-seals",
    title: "Threshold Plate Seals",
    section: "door-hardware",
    familySlug: "sealing-systems",
    familyTitle: "Sealing Systems",
    category: "Sealing Systems",
    description:
      "Threshold sealing and plate solutions for cleaner transitions, improved coordination and dependable perimeter performance.",
    shortDescription:
      "Threshold plate and seal options for coordinated openings.",
    overview:
      "This page supports a cleaner IA for sealing systems while keeping detailed specification migration open for later phases.",
    image: "/tur/sliding-b.jpg",
    imageAlt: "Threshold plate seals family visual",
    gallery: gallery("/tur/sliding-b.jpg", "/tur/project-3.jpg", "/tur/project-c.jpg"),
    features: [
      "Supports threshold transitions and perimeter control.",
      "Suitable for clean architectural detailing.",
      "Aligned with coordinated entrance packages.",
    ],
    applications: [
      "Public entrances",
      "Healthcare and education projects",
      "Weather-exposed circulation points",
    ],
    finishOptions: ["Standard", "Heavy Duty"],
    inquirySubject: "Threshold Plate Seals Inquiry",
    relatedSlugs: [
      "door-bottom-seals",
      "door-frame-perimeter-seals",
      "weather-stripping",
    ],
  }),
  defineProduct({
    slug: "door-frame-perimeter-seals",
    title: "Door Frame Or Perimeter Seals",
    section: "door-hardware",
    familySlug: "sealing-systems",
    familyTitle: "Sealing Systems",
    category: "Sealing Systems",
    description:
      "Frame and perimeter seals developed for refined architectural detailing and consistent opening performance.",
    shortDescription:
      "Frame and perimeter seal systems for architectural doors.",
    overview:
      "Door Frame Or Perimeter Seals provides a direct migration target for performance-led sealing details.",
    image: "/tur/sliding-e.jpg",
    imageAlt: "Door frame or perimeter seals visual",
    gallery: gallery("/tur/sliding-e.jpg", "/tur/slider-1.webp", "/tur/project-4.jpg"),
    features: [
      "Supports perimeter performance strategies.",
      "Suitable for coordinated frame detailing.",
      "Aligned with specification-led sealing systems.",
    ],
    applications: [
      "Commercial circulation routes",
      "Institutional perimeter control",
      "Hospitality back-of-house doors",
    ],
    finishOptions: ["Standard", "Heavy Duty"],
    inquirySubject: "Perimeter Seals Inquiry",
    relatedSlugs: [
      "door-bottom-seals",
      "threshold-plate-seals",
      "weather-stripping",
    ],
  }),
  defineProduct({
    slug: "weather-stripping",
    title: "Weather Stripping",
    section: "door-hardware",
    familySlug: "sealing-systems",
    familyTitle: "Sealing Systems",
    category: "Sealing Systems",
    description:
      "Weather stripping solutions that complement broader sealing system packages for architectural door applications.",
    shortDescription:
      "Complementary weather stripping for door sealing systems.",
    overview:
      "Weather Stripping is structured as an inquiry-ready product page so sealing-system migration can happen in practical stages.",
    image: "/tur/sliding-f.jpg",
    imageAlt: "Weather stripping family visual",
    gallery: gallery("/tur/sliding-f.jpg", "/tur/project-a.jpg", "/tur/slider-5.webp"),
    features: [
      "Supports weather and air control at openings.",
      "Suitable for complementary sealing packages.",
      "Aligned with threshold and perimeter strategies.",
    ],
    applications: ["External entrances", "Service routes", "Envelope upgrades"],
    finishOptions: ["Standard", "Heavy Duty"],
    inquirySubject: "Weather Stripping Inquiry",
    relatedSlugs: [
      "door-bottom-seals",
      "threshold-plate-seals",
      "door-frame-perimeter-seals",
    ],
  }),
  defineProduct({
    slug: "tsw150-automatic-door-operator",
    title: "TSW150 Automatic Door Operator",
    section: "automatic-operators",
    familySlug: "swing-door-drives",
    familyTitle: "Swing Door Drives",
    category: "Automatic Operators",
    description:
      "Automatic swing door operator developed for hygiene-conscious, disability-access and project-led entrance environments.",
    shortDescription:
      "Automatic operator for accessible, hygiene-conscious and project-led entrances.",
    overview:
      "TSW150 represents a high-value automatic operator detail page for inquiry-led commercial and institutional projects.",
    image: "/tur/slider-3.webp",
    imageAlt: "TSW150 automatic door operator visual",
    gallery: gallery("/tur/slider-3.webp", "/tur/sliding-c.jpg", "/tur/project-2.jpg"),
    features: [
      "Supports accessibility and hygiene-conscious circulation.",
      "Suitable for mixed-use commercial and institutional entrances.",
      "Aligned with project-led automation packages.",
    ],
    applications: ["Healthcare entrances", "Commercial lobbies", "Institutional access routes"],
    finishOptions: ["Single Door", "Double Door"],
    badge: "Featured",
    inquirySubject: "TSW150 Inquiry",
    relatedSlugs: ["tsw120-automatic-door-operator", "swing-door-drives", "sliding-doors"],
  }),
  defineProduct({
    slug: "tsw120-automatic-door-operator",
    title: "TSW120 Automatic Door Operator",
    section: "automatic-operators",
    familySlug: "swing-door-drives",
    familyTitle: "Swing Door Drives",
    category: "Automatic Operators",
    description:
      "Specification-aware automatic operator designed for quieter operation, coordinated access flow and multiple activation options.",
    shortDescription:
      "Specification-led operator with quiet control and multiple activation options.",
    overview:
      "TSW120 adds another accessible detail page within the swing-door-drives family while the wider operator ecosystem remains structured and scalable.",
    image: "/tur/slider-4.webp",
    imageAlt: "TSW120 automatic door operator visual",
    gallery: gallery("/tur/slider-4.webp", "/tur/sliding-d.jpg", "/tur/project-3.jpg"),
    features: [
      "Supports quiet controlled operation.",
      "Suitable for multiple activation methods.",
      "Aligned with specification-led entrances.",
    ],
    applications: ["Corporate access routes", "Education schemes", "Mixed-use circulation points"],
    finishOptions: ["Single Door", "Double Door"],
    inquirySubject: "TSW120 Inquiry",
    relatedSlugs: ["tsw150-automatic-door-operator", "swing-door-drives", "sliding-doors"],
  }),
  defineProduct({
    slug: "sliding-doors",
    title: "shopMaster GSW-A",
    section: "automatic-operators",
    familySlug: "all-glass-systems",
    familyTitle: "All Glass Systems",
    category: "Automatic Operators",
    description:
      "Automatic sliding door operator support for streamlined circulation, controlled access and project-focused entrance coordination.",
    shortDescription:
      "Automatic sliding door operator for coordinated entrance flow.",
    overview:
      "shopMaster GSW-A acts as a visible product destination within the all-glass systems family while the wider system range is migrated over time.",
    image: "/tur/sliding-c.jpg",
    imageAlt: "shopMaster GSW-A sliding door operator visual",
    gallery: gallery("/tur/sliding-c.jpg", "/tur/sliding-b.jpg", "/tur/project-b.jpg"),
    features: [
      "Supports premium all-glass entrance movement.",
      "Suitable for streamlined circulation planning.",
      "Aligned with coordinated storefront-style applications.",
    ],
    applications: ["Premium retail entries", "Corporate lobbies", "Hospitality arrival zones"],
    finishOptions: ["Single Sliding", "Bi-Parting"],
    inquirySubject: "shopMaster GSW-A Inquiry",
    relatedSlugs: ["swing-door-drives", "tsw150-automatic-door-operator", "tsw120-automatic-door-operator"],
  }),
  defineProduct({
    slug: "swing-door-drives",
    title: "DTN 80",
    section: "automatic-operators",
    familySlug: "swing-door-drives",
    familyTitle: "Swing Door Drives",
    category: "Automatic Operators",
    description:
      "Automatic operator developed for interior, exterior, fire and smoke door applications with access-control compatibility and coordinated entrance automation.",
    shortDescription:
      "Automatic operator for fire, smoke, interior and exterior door automation.",
    overview:
      "DTN 80 anchors the swing-door-drives family as a representative detail page and a strong catalog-to-inquiry bridge.",
    image: "/tur/sliding-d.jpg",
    imageAlt: "DTN 80 automatic operator visual",
    gallery: gallery("/tur/sliding-d.jpg", "/tur/slider-6.webp", "/tur/project-1.jpg"),
    features: [
      "Supports fire, smoke and accessibility applications.",
      "Suitable for interior and exterior automation.",
      "Aligned with controlled circulation and access integration.",
    ],
    applications: [
      "Commercial public entries",
      "Healthcare and institutional routes",
      "Accessibility-led upgrades",
    ],
    finishOptions: ["Push", "Pull"],
    inquirySubject: "DTN 80 Inquiry",
    relatedSlugs: ["tsw150-automatic-door-operator", "tsw120-automatic-door-operator", "sliding-doors"],
  }),
];

export const productRoutes = products.map((product) => `/products/${product.slug}`);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const product = getProductBySlug(slug);
    return product ? [product] : [];
  });
}

export function getRelatedProducts(product: Product, limit = 3) {
  return getProductsBySlugs(product.relatedSlugs).slice(0, limit);
}
