import { siteConfig, siteContact } from "@/content/site/site-config";

export const aboutHero = {
  eyebrow: "About TUR Middle East FZC",
  headline: "Architectural hardware and automatic entry — precision-specified, project-delivered.",
  description:
    "TUR brings together door hardware, automatic operators, access control and sealing systems under one project-managed platform. Rooted in the James Gibbons Format heritage since 1670, and active across the Middle East, Europe and beyond.",
  image: "/art/baanner_newimage.webp",
  imageAlt: "TUR architectural hardware — project-delivered",
  primaryCta: { label: "Download Company Profile", href: "/company_profile.pdf" },
  secondaryCta: { label: "Start an Inquiry", href: "/contact" },
  metrics: [
    { value: "Since 1670", label: "Heritage via James Gibbons Format" },
    { value: "30+", label: "Years regional experience" },
    { value: "6", label: "Global offices" },
    { value: "200+", label: "Product families" },
  ],
};

export const aboutMission = {
  statement: "One specification route. One technical team. One project reference.",
  description:
    "From architecture to handover — TUR coordinates product selection, hardware schedules and supply across commercial, hospitality, healthcare and institutional projects. A single inquiry-led platform for hardware across every opening.",
  sectors: [
    "Commercial Offices",
    "Hospitality & Hotels",
    "Healthcare Facilities",
    "Institutional & Education",
    "High-Spec Residential",
  ],
};

export const aboutHeritage = {
  eyebrow: "James Gibbons Format — Since 1670",
  headline: "Over three centuries of hardware heritage.",
  body: [
    "James Gibbons Format Limited traces its origins to 1670 — one of Britain's longest-established architectural hardware manufacturers. The Format name has been synonymous with quality, precision and specification-grade ironmongery across institutional, commercial and residential projects.",
    "TUR carries this heritage into the Middle East and global markets, providing access to the full Format product catalogue alongside G·U Automatic operators, BKS cylinders, BB Locks and the TURN master key range.",
    "The combination of verified heritage, technical depth and regional experience positions TUR as a credible specification partner for architects, consultants, main contractors and facilities teams.",
  ],
  image: "/tur/home/slider-2.webp",
  imageAlt: "James Gibbons Format heritage — architectural hardware since 1670",
};

export const aboutPlatforms = [
  {
    eyebrow: "Door Hardware",
    title: "Architectural ironmongery for every opening",
    description:
      "American Standard, European Ironmongery, Glass Hardware, Access Control and Sealing Systems — all within a single coordinated specification route.",
    href: "/door-hardware",
    image: "/tur/door-hardware/format-lockset.jpg",
    imageAlt: "Format UK lockset — architectural door hardware",
    cta: "View Door Hardware",
  },
  {
    eyebrow: "Automatic Entry",
    title: "Sliding, revolving, swing and all-glass systems",
    description:
      "High-performance automatic operators from G·U Automatic — engineered for hospitality, healthcare and high-traffic architectural environments.",
    href: "/automatic-operators",
    image: "/tur/home/tsw150-operator.jpg",
    imageAlt: "TSW150 G·U automatic swing door operator",
    cta: "View Automatic Operators",
  },
  {
    eyebrow: "Controlled Access",
    title: "Physical access and security hardware",
    description:
      "Access control hardware coordinated within the door hardware specification — from electromechanical locking to controlled physical access barriers.",
    href: "/door-hardware/access-control",
    image: "/tur/door-hardware/mc-2.jpg",
    imageAlt: "Access control hardware — TUR",
    cta: "View Access Control",
  },
  {
    eyebrow: "Master Key Systems",
    title: "TURN master key — SKG 2-star certified",
    description:
      "Euro profile cylinders with full KA, KD, MK and GMK hierarchy. BS EN 1303:2015 compliant, duplication-controlled and designed for hotels, hospitals and campus projects.",
    href: "/master-key-systems",
    image: "/master-key/hero-key.jpg",
    imageAlt: "TURN master key cylinder — SKG 2-star certified",
    cta: "View Master Key Systems",
  },
];

export const aboutServices = [
  {
    title: "Hardware Specification",
    description:
      "Product selection, hardware schedule preparation and specification document support — coordinated with the project architect and consultant from early design stage.",
  },
  {
    title: "Hardware Schedules",
    description:
      "Room-by-room, door-by-door hardware schedule preparation aligned with architect drawings, door types and project performance requirements.",
  },
  {
    title: "Project Coordination",
    description:
      "A single point of contact for all architectural hardware across the project — from initial specification through supply, installation support and snagging.",
  },
  {
    title: "Supply & Logistics",
    description:
      "Regional warehousing and supply coordination across the Middle East, with international supply routes through UK and European partner entities.",
  },
];

export const aboutTeam = [
  {
    name: "Raghunath Sadasivam",
    role: "Co-Founder & Executive Chairman",
    entity: "TUR Middle East",
    bio: "More than four decades of experience in the construction industry of the GCC. Chaired the Board of Directors of three high-profile companies in the region.",
    photo: "/tur/team/ragu.jpg",
  },
  {
    name: "Chamara S. Gunasekara",
    role: "Managing Director",
    entity: "TUR Middle East",
    bio: "Fifteen years of experience in the door hardware industry. Managed key accounts throughout the GCC for over a decade.",
    photo: "/tur/team/chamara.jpg",
  },
  {
    name: "Frank Van Uden",
    role: "Managing Director",
    entity: "TUR Netherlands B.V",
    bio: "Founding shareholder and Advisory Board Member of TME. Owns seven companies based out of Heeswijk, Netherlands. An expert in managing technology-based building materials with direct links to high-profile European companies.",
    photo: "/tur/team/frank.jpg",
  },
  {
    name: "Varun Singh",
    role: "Managing Director",
    entity: "TUR India",
    bio: "Leads TUR's India operations, overseeing project coordination, supply and strategic partnerships across the Indian subcontinent.",
    photo: "/tur/team/varun.jpg",
  },
  {
    name: "Nikhil Kumar Patel",
    role: "Managing Director",
    entity: "TUR Canada",
    bio: "Heads TUR's Canadian operations, managing architectural hardware supply chains, specification relationships and project delivery across Canada.",
    photo: "/tur/team/nikhil.jpg",
  },
];

export const aboutOffices = [
  {
    name: "TUR Middle East FZC",
    region: "Sharjah, UAE",
    address: "Office No. LV 32B, Hamriyah Free Zone, Sharjah, UAE",
    note: "Trade License 23473 / 23474",
    isPrimary: true,
  },
  {
    name: "James Gibbons Format Limited",
    region: "United Kingdom",
    address: "UK operational base — Format heritage manufacturing",
    isPrimary: false,
  },
  {
    name: "TUR Netherlands BV",
    region: "Netherlands",
    address: "European distribution and coordination",
    isPrimary: false,
  },
  {
    name: "TUR Lanka Holdings",
    region: "Sri Lanka",
    address: "Regional supply and operations",
    isPrimary: false,
  },
  {
    name: "TUR Arabia Establishment",
    region: "Middle East",
    address: "GCC project coordination",
    isPrimary: false,
  },
  {
    name: "TUR India",
    region: "Bengaluru, India",
    address: "Aurbis Prime, No.11 Kaveri Regent Coronet, 80 Feet Road, 3rd Block, Koramangala, Bengaluru, Karnataka 560034",
    isPrimary: false,
  },
];

export const aboutPartners = [
  {
    name: "James Gibbons Format",
    logo: "/tur/site/logo-1-1.png",
    description:
      "Specification-grade ironmongery since 1670 — the heritage brand at the core of TUR's door hardware offer, covering locks, levers, cylinders and decorative ironmongery.",
    productCategories: ["Lever Handles", "Cylinders", "Locks & Latches", "Pull Handles", "Ironmongery"],
  },
  {
    name: "G·U Automatic",
    logo: "/tur/site/logo-1-2.png",
    description:
      "High-performance automatic door systems engineered for premium commercial and institutional entrances — from high-traffic sliding systems to all-glass revolving doors.",
    productCategories: ["Sliding Door Drives", "Swing Door Operators", "Revolving Doors", "All-Glass Systems", "Sensors"],
  },
  {
    name: "BKS",
    logo: "/tur/site/logo-1-3.png",
    description:
      "Precision lock and latch systems, panic hardware and cylinders — BKS supplies the mechanical security backbone for commercial and institutional door hardware schedules.",
    productCategories: ["Mortice Locks", "Panic Hardware", "Euro Cylinders", "Deadbolts", "Strikes"],
  },
  {
    name: "BB Locks",
    logo: "/tur/site/logo-1-4.png",
    description:
      "Security cylinders and locking solutions engineered for high-security and access-controlled environments across hospitality, healthcare and institutional sectors.",
    productCategories: ["High-Security Cylinders", "Euro Profile", "Keypad Locks", "Padlocks"],
  },
  {
    name: "D4E",
    logo: "/tur/site/logo-1-5.png",
    description:
      "Specialist door hardware engineered for demanding architectural applications — including door closers, hinges and overhead hardware for heavy-traffic commercial openings.",
    productCategories: ["Door Closers", "Hinges", "Floor Springs", "Overhead Hardware"],
  },
  {
    name: "TURN",
    logo: "/tur/site/logo-1-6.png",
    description:
      "SKG 2-star certified TURN master key cylinders — Euro profile cylinders with duplication-controlled keys and full master key hierarchy for complex access environments.",
    productCategories: ["Master Key Cylinders", "Euro Profile", "SKG 2-Star", "Key Hierarchy"],
  },
];

export const aboutCertifications = [
  "ANSI",
  "GAI Member",
  "CE Marked",
  "SKG 2-Star",
  "ISO 9001",
];

export { siteConfig, siteContact };
