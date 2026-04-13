import { createInquiryHref } from "@/content/site/site-config";
import type { CatalogSection, CatalogSectionSlug } from "@/types";

export const catalogSections: CatalogSection[] = [
  {
    slug: "door-hardware",
    title: "Door Hardware",
    description:
      "Architectural door hardware families spanning American Standard, European Ironmongery, Glass Hardware, Access Control and Sealing Systems.",
    intro:
      "Door Hardware is the main route into TUR's architectural hardware offer, organised around the core specification categories used across commercial and premium architectural projects.",
    organizationLine:
      "Door Hardware is structured by how openings are specified: hanging, controlling, securing, furnishing, access coordination and sealing performance.",
    image: "/tur/mc-1.jpg",
    imageAlt: "Coordinated lever, lockset and premium ironmongery detail from TUR",
    highlights: [
      "American Standard",
      "European Ironmongery",
      "Glass Hardware",
      "Access Control",
      "Sealing Systems",
    ],
    routeCards: [
      {
        title: "American Standard",
        description:
          "Coordinated hardware families for hanging, controlling, securing and furnishing architectural door sets.",
        scope: "Includes Hang • Control • Secure • Furnish",
        href: "/door-hardware/american-standard",
        eyebrow: "Door Hardware Family",
        ctaLabel: "Explore Family",
        image: "/tur/project-1.jpg",
        imageAlt: "Coordinated hanging and architectural door hardware from TUR",
      },
      {
        title: "European Ironmongery",
        description:
          "Premium ironmongery families for architectural door sets, finish coordination and furnishing packages.",
        scope: "Includes Hang • Control • Cylinders • Furnish",
        href: "/door-hardware/european-ironmongery",
        eyebrow: "Door Hardware Family",
        ctaLabel: "Explore Family",
        image: "/tur/mc-2.jpg",
        imageAlt: "Premium lever-handle and ironmongery detail from TUR",
      },
      {
        title: "Glass Hardware",
        description:
          "Frameless and all-glass fittings for hinges, clips, patch fittings, pull handles and related glass applications.",
        scope: "Includes Hinges • Patch • Pull Handles",
        href: "/door-hardware/glass-hardware",
        eyebrow: "Door Hardware Family",
        ctaLabel: "Explore Family",
        image: "/tur/project-3.jpg",
        imageAlt: "Frameless glass fitting and patch hardware detail from TUR",
      },
      {
        title: "Access Control",
        description:
          "Integrated locking, release devices and E-ACCESS systems for coordinated secure openings.",
        scope: "Includes Locks • Strikes • E-ACCESS",
        href: "/door-hardware/access-control",
        eyebrow: "Door Hardware Family",
        ctaLabel: "Explore Family",
        image: "/tur/slider-5.webp",
        imageAlt: "Electromagnetic locking and access coordination hardware from TUR",
      },
      {
        title: "Sealing Systems",
        description:
          "Door bottom, threshold and perimeter seals for entrance performance and detailing.",
        scope: "Includes Bottom • Threshold • Perimeter",
        href: "/door-hardware/sealing-systems",
        eyebrow: "Door Hardware Family",
        ctaLabel: "Explore Family",
        image: "/tur/sliding-a.jpg",
        imageAlt: "Threshold, perimeter and door bottom sealing detail from TUR",
      },
    ],
    primaryCta: {
      label: "Request Door Hardware Details",
      href: createInquiryHref("Door Hardware Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    familyGrid: {
      eyebrow: "Door Hardware Families",
      title: "Move into the core Door Hardware families",
      description:
        "Use the family map below to route by function, finish direction and performance requirement before moving into detail pages.",
    },
    functionMap: {
      eyebrow: "Specified by Function",
      title: "Map the opening by function",
      description:
        "Build the hardware package by function before moving into the right family.",
      note: "Start with the opening requirement, then move into the right hardware family.",
      items: [
        {
          title: "Hang the opening",
          description:
            "Hinges, pivots and related hardware that carry and guide the leaf.",
        },
        {
          title: "Control the opening",
          description:
            "Closers, floor springs and control hardware that manage movement and closing behavior.",
        },
        {
          title: "Secure the opening",
          description:
            "Locks, cylinders, latches and coordinated security hardware for controlled access.",
        },
        {
          title: "Furnish the opening",
          description:
            "Lever handles, pull hardware and finishing elements that complete the door set.",
        },
        {
          title: "Seal the opening",
          description:
            "Threshold, bottom and perimeter sealing systems for performance, detailing and environmental control.",
        },
      ],
    },
    structure: {
      eyebrow: "Structured Landing Pages",
      title: "Choose the right route",
      description:
        "Start broad, move into the right family, then go deeper only where a dedicated detail page exists.",
      steps: [
        {
          label: "Section",
          title: "Start with Door Hardware",
          description: "Begin at the section level before narrowing into a family.",
        },
        {
          label: "Family",
          title: "Choose the right family",
          description: "Move into the family that matches the application and specification need.",
        },
        {
          label: "Detail",
          title: "Go deeper only where needed",
          description: "Continue only where a dedicated child or detail page adds value.",
        },
      ],
    },
    supportTitle: "A clean page-based route into core hardware categories",
    supportBody:
      "Use this section as the main entry into TUR's hardware platform, then move into the relevant family or request project-led guidance for packages, approvals and technical coordination.",
    supportSignals: [
      "Family guidance",
      "Package coordination",
      "Approval support",
    ],
    faq: {
      eyebrow: "Technical Guidance",
      title: "Frequently asked questions about Door Hardware",
      description:
        "Use these answers to choose the right family, understand the page hierarchy and know when to request project support.",
      items: [
        {
          question:
            "What is the difference between American Standard and European Ironmongery?",
          answer:
            "American Standard and European Ironmongery organize coordinated hardware routes differently, but both help specify hanging, controlling, securing and furnishing components. The right starting point depends on the project standard, finish direction and package requirement.",
        },
        {
          question: "When should I start with Glass Hardware?",
          answer:
            "Start with Glass Hardware when the opening relies on frameless or all-glass fittings such as hinges, clips, patch fittings or pull handles.",
        },
        {
          question: "When does Access Control belong in the package?",
          answer:
            "Access Control belongs in the route when the opening requires coordinated locking, release devices, electronic access or secure entry control.",
        },
        {
          question: "Why should sealing systems be considered early?",
          answer:
            "Sealing systems affect threshold performance, perimeter detailing, environmental control and the overall behavior of the opening, so they should be considered before late-stage coordination.",
        },
        {
          question: "Can TUR support package guidance and technical coordination?",
          answer:
            "Yes. TUR can support category guidance, catalog routing, approvals, package coordination and project-led technical follow-up before users move into deeper family or detail pages.",
        },
      ],
    },
    keywords: [
      "door hardware",
      "architectural hardware",
      "american standard",
      "european ironmongery",
      "glass hardware",
      "access control",
      "sealing systems",
    ],
    updatedAt: "2026-03-19",
  },
  {
    slug: "automatic-operators",
    title: "Automatic Operators",
    description:
      "Automatic entrance families spanning sliding doors, controlled physical access, revolving doors, swing door drives, all-glass systems, and activation and safety devices.",
    intro:
      "Automatic Operators is the main route into TUR's entrance automation platform, organised around movement type, access-control logic and system coordination across commercial, healthcare, hospitality and high-traffic project environments.",
    organizationLine:
      "Automatic Operators is structured by entrance movement and control logic: sliding, controlled access, revolving, swing automation, all-glass systems, and activation and safety sensing.",
    image: "/tur/sliding-b.jpg",
    imageAlt: "Automatic sliding entrance system and operator-led movement from TUR",
    highlights: [
      "Sliding Doors",
      "Controlled Physical Access",
      "Revolving Doors",
      "Swing Door Drives",
      "All Glass Systems",
      "Automatic Pulse Generators & Sensors",
    ],
    routeCards: [
      {
        title: "Sliding Doors",
        description:
          "Automatic sliding systems for high-use entrances, accessibility, escape routing and controlled circulation.",
        scope: "Includes Prismatic • Curved • Telescoping",
        href: "/automatic-operators/sliding-doors",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/sliding-b.jpg",
        imageAlt: "Automatic sliding entrance system from TUR",
      },
      {
        title: "Controlled Physical Access",
        description:
          "Entrance systems for regulated pedestrian flow, secure access and controlled passage.",
        scope: "Includes Turnstiles • Swing Gates • Barriers",
        href: "/automatic-operators/controlled-physical-access",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/project-4.jpg",
        imageAlt: "Controlled physical access systems and regulated pedestrian flow from TUR",
      },
      {
        title: "Revolving Doors",
        description:
          "Revolving entrance systems for high-traffic circulation, environmental separation and premium entrance control.",
        scope: "Includes Standard • All-Glass • Security",
        href: "/automatic-operators/revolving-doors",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/project-c.jpg",
        imageAlt: "Premium revolving entrance system from TUR",
      },
      {
        title: "Swing Door Drives",
        description:
          "Automatic swing automation for controlled door movement, accessibility and retrofit-friendly operator use.",
        scope: "Includes Power Assist • Swing Automation",
        href: "/automatic-operators/swing-door-drives",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/sliding-d.jpg",
        imageAlt: "Automatic swing door drive from TUR",
      },
      {
        title: "All Glass Systems",
        description:
          "Automatic all-glass entrance systems for contemporary frameless circulation and storefront conditions.",
        scope: "Includes shopMaster • Frameless Routes",
        href: "/automatic-operators/all-glass-systems",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/sliding-c.jpg",
        imageAlt: "Automatic all-glass entrance system from TUR",
      },
      {
        title: "Automatic Pulse Generators & Sensors",
        description:
          "Activation, sensing and safety devices that complete the operator package.",
        scope: "Includes Activation • Safety • Control Inputs",
        href: "/automatic-operators/automatic-pulse-generators-and-sensors",
        eyebrow: "Operator Family",
        ctaLabel: "Explore Family",
        image: "/tur/slider-6.webp",
        imageAlt: "Automatic entrance activation devices and safety sensors from TUR",
      },
    ],
    primaryCta: {
      label: "Request Automatic Operator Details",
      href: createInquiryHref("Automatic Operators Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    familyGrid: {
      eyebrow: "Automatic Operators Families",
      title: "Route into the core Automatic Operators families",
      description:
        "Use the family map below to route by entrance movement, regulated passage and system logic before moving into deeper detail pages.",
    },
    functionMap: {
      eyebrow: "Specified by Movement",
      title: "Map the entrance by movement and control",
      description:
        "Automatic Operators is organized around how the entrance behaves in practice: sliding movement, controlled access, revolving circulation, swing automation, all-glass coordination, and activation and safety sensing.",
      note:
        "Start with the movement requirement, then move into the right operator family.",
      items: [
        {
          title: "Slide the entrance",
          description:
            "Use sliding systems where circulation, accessibility, clear opening width or escape routing are key.",
        },
        {
          title: "Control the passage",
          description:
            "Use controlled physical access where turnstiles, gates or regulated pedestrian flow are required.",
        },
        {
          title: "Revolve the entrance",
          description:
            "Use revolving systems where high traffic, environmental separation or premium entry control is important.",
        },
        {
          title: "Automate the swing",
          description:
            "Use swing door drives where hinged openings need controlled powered movement.",
        },
        {
          title: "Coordinate all-glass systems",
          description:
            "Use all-glass operator routes where frameless visual continuity and automated movement must work together.",
        },
        {
          title: "Activate and protect the system",
          description:
            "Use pulse generators and sensors to complete the opening with activation, safety and control logic.",
        },
      ],
    },
    structure: {
      eyebrow: "Structured Landing Pages",
      title: "Choose the right route",
      description:
        "Start broad, move into the right operator family, then go deeper only where a dedicated detail page exists.",
      steps: [
        {
          label: "Section",
          title: "Start with Automatic Operators",
          description: "Begin at the section level before narrowing into an operator family.",
        },
        {
          label: "Family",
          title: "Choose the right operator family",
          description:
            "Move into the family that matches the entrance movement, access and control strategy.",
        },
        {
          label: "Detail",
          title: "Go deeper only where needed",
          description:
            "Continue only where a dedicated child or detail page adds value to the operator workflow.",
        },
      ],
    },
    supportTitle: "A clean page-based route into core automatic entrance families",
    supportBody:
      "Use this section as the main entry into TUR's entrance automation platform, then move into the relevant family or request project-led guidance for circulation logic, approvals, activation devices, access control coordination and system selection.",
    supportSignals: [
      "Entrance-system coordination",
      "Activation and safety logic",
      "Approval support",
    ],
    faq: {
      eyebrow: "Technical Guidance",
      title: "Frequently asked questions about Automatic Operators",
      description:
        "Use these answers to choose the right family, understand the section hierarchy and know when to request project support.",
      items: [
        {
          question: "What is the difference between Sliding Doors and Swing Door Drives?",
          answer:
            "Sliding Doors are used where lateral movement, clear passage and operator-based sliding performance are needed, while Swing Door Drives automate hinged openings that move on a pivot or hinge.",
        },
        {
          question: "When should Controlled Physical Access be the starting family?",
          answer:
            "Use Controlled Physical Access when the project needs regulated passage, gated access, turnstiles, reader posts or secure pedestrian control.",
        },
        {
          question: "When are Revolving Doors the right route?",
          answer:
            "Revolving Doors are appropriate for high-traffic entrances, environmental separation, premium entry experience and controlled circulation.",
        },
        {
          question: "What belongs under Automatic Pulse Generators & Sensors?",
          answer:
            "This family includes activation devices, safety sensors and control-related components that complete the operator system.",
        },
        {
          question:
            "Can TUR support operator packages, approvals and technical coordination?",
          answer:
            "Yes. TUR can support family selection, package coordination, approvals, activation and safety logic, and project-led technical follow-up before users move into deeper detail pages.",
        },
      ],
    },
    keywords: [
      "automatic operators",
      "sliding doors",
      "controlled physical access",
      "revolving doors",
      "swing door drives",
      "all glass systems",
      "automatic pulse generators and sensors",
    ],
    updatedAt: "2026-03-20",
  },
];

export function getCatalogSection(slug: CatalogSectionSlug) {
  return catalogSections.find((section) => section.slug === slug);
}
