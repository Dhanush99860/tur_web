export const partnersHero = {
  eyebrow: "Partner Network",
  headline: "Trusted brands. Landmark projects.",
  description:
    "TUR operates through a curated network of specification-grade manufacturers â€” each selected for technical depth, product range and the ability to support complex architectural projects across the Middle East and beyond.",
  image: "/tur/home/project-1.png",
  imageAlt: "TUR landmark project reference â€” architectural hardware supply",
  metrics: [
    { value: "Since 1670", label: "Heritage via James Gibbons Format" },
    { value: "6", label: "Specification partner brands" },
    { value: "50+", label: "Years GCC experience" },
    { value: "15+", label: "Countries with project references" },
  ],
};

export const partnerBrands = [
  {
    name: "James Gibbons Format",
    logo: "/tur/site/logo-1-1.png",
    eyebrow: "Door Hardware",
    origin: "United Kingdom",
    since: "1670",
    description:
      "One of Britain's longest-established architectural hardware manufacturers â€” specification-grade ironmongery covering locks, levers, cylinders and decorative ironmongery for commercial, institutional and hospitality projects across the GCC and beyond.",
    highlights: [
      "UK Made Since 1670 â€” state-of-the-art unique designs",
      "Special Anti-microbial coated products for hospitals",
      "50 years of project experience in the GCC",
    ],
    categories: ["Lever Handles", "Cylinders", "Locks & Latches", "Pull Handles", "Anti-microbial Hardware"],
    href: "/door-hardware",
  },
  {
    name: "GÂ·U Automatic",
    logo: "/tur/site/logo-1-2.png",
    eyebrow: "Automatic Operators",
    origin: "Germany",
    since: null,
    description:
      "High-performance automatic door systems engineered for premium commercial entrances â€” from high-traffic sliding systems to all-glass revolving doors, swing automation and controlled physical access gates for institutional and commercial projects.",
    highlights: [
      "Automatic Sliding Door Operators & Swing Door Drives",
      "Automatic Revolving Doors & All-Glass Systems",
      "Automatic Access Control Gates & Sensors",
    ],
    categories: ["Sliding Door Operators", "Swing Door Drives", "Revolving Doors", "All-Glass Systems", "Access Control Gates"],
    href: "/automatic-operators",
  },
  {
    name: "BKS",
    logo: "/tur/site/logo-1-3.png",
    eyebrow: "Security Hardware",
    origin: "Germany",
    since: null,
    description:
      "Precision lock and latch systems, panic hardware and cylinders â€” BKS supplies the mechanical security backbone for commercial and institutional door hardware schedules across European and international projects.",
    highlights: [
      "Precision mortice locks & panic hardware",
      "Euro profile cylinders & deadbolts",
      "Commercial & institutional grade security",
    ],
    categories: ["Mortice Locks", "Panic Hardware", "Euro Cylinders", "Deadbolts", "Strikes"],
    href: "/door-hardware/european-ironmongery",
  },
  {
    name: "BB Locks",
    logo: "/tur/site/logo-1-4.png",
    eyebrow: "Electronic Security",
    origin: "Belgium",
    since: "1980",
    description:
      "Electronic lock technology engineered for the highest-security environments â€” banks, prisons, airports, museums, embassies, psychiatric institutions and hospitals. Robustness, reliability and durability in every product.",
    highlights: [
      "Belgium Made Since 1980 â€” electronic lock technology",
      "Banks, Prisons, Airports, Museums, Embassies & Hospitals",
      "Robustness, Reliability, Durability",
    ],
    categories: ["Electronic Security Locks", "High-Security Cylinders", "Euro Profile", "Keypad Locks", "Padlocks"],
    href: "/door-hardware/access-control",
  },
  {
    name: "D4E â€” Design 4 Excellence",
    logo: "/tur/site/logo-1-5.png",
    eyebrow: "Cylinders & Closers",
    origin: "Netherlands",
    since: null,
    description:
      "SKG-certified specialist in master key cylinders and door hardware â€” anti-tamper protection against drilling, picking, bumping, snapping and plug extraction. Plus door closers, hinges and floor springs for heavy-traffic commercial openings.",
    highlights: [
      "SKG Certified â€” Manufacturing cylinders under Master Key systems",
      "Anti-tamper: Drilling Â· Picking Â· Bumping Â· Snapping Â· Plug extraction",
      "Master Key System Design Guide",
    ],
    categories: ["SKG Certified Cylinders", "Master Key Systems", "Door Closers", "Hinges", "Floor Springs"],
    href: "/door-hardware",
  },
  {
    name: "TURN",
    logo: "/tur/site/logo-1-6.png",
    eyebrow: "Master Key Systems",
    origin: "In-House Brand",
    since: null,
    description:
      "TUR's own master key brand â€” SKG 2-star certified Euro profile cylinders with full KA, KD, MK and GMK hierarchy. Duplication-controlled keys, in-house production facility with MARKER 2000 and FUTURA PRO precision cutting machines.",
    highlights: [
      "SKG 2-Star certified â€” BS EN 1303:2015 compliant",
      "Full hierarchy: Grand Master â†’ Master â†’ individual doors",
      "In-house production â€” CATALOGUE 2026",
    ],
    categories: ["Master Key Cylinders", "Euro Profile", "SKG 2-Star", "Key Hierarchy", "In-House Production"],
    href: "/master-key-systems",
  },
];

export type ProjectRegion =
  | "UAE"
  | "Saudi Arabia"
  | "Qatar"
  | "Oman"
  | "GCC & Levant"
  | "United Kingdom"
  | "Europe"
  | "Hong Kong"
  | "Singapore"
  | "Brunei"
  | "West Indies"
  | "India & Others";

export type ProjectGroup = "Middle East & GCC" | "United Kingdom & Europe" | "Asia Pacific & International";

export const projectSuccessStories: {
  region: ProjectRegion;
  group: ProjectGroup;
  projects: { name: string; location: string; type: string }[];
}[] = [
  {
    region: "UAE",
    group: "Middle East & GCC",
    projects: [
      { name: "Emaar Square Building 2", location: "Downtown Dubai", type: "Commercial" },
      { name: "The Opus Tower", location: "Business Bay, Dubai", type: "Commercial" },
      { name: "Ubora Tower", location: "Business Bay, Dubai", type: "Mixed Use" },
    ],
  },
  {
    region: "Saudi Arabia",
    group: "Middle East & GCC",
    projects: [
      { name: "King Abdullah Financial District (KAFD)", location: "Riyadh", type: "Commercial" },
      { name: "Faizaliya Tower", location: "Riyadh", type: "Mixed Use" },
      { name: "Kingdom Hospital", location: "Riyadh", type: "Healthcare" },
      { name: "Royal Saudi Air Force HQ", location: "Riyadh", type: "Government" },
      { name: "NEOM Utility Buildings", location: "Tabuk Province", type: "Landmark Development" },
      { name: "Multiple Colleges, Qassim University", location: "Qassim", type: "Education" },
    ],
  },
  {
    region: "Qatar",
    group: "Middle East & GCC",
    projects: [
      { name: "Al Bayt Stadium", location: "Doha, Qatar", type: "Sports" },
      { name: "Hamad Medical Corporation", location: "Doha, Qatar", type: "Healthcare" },
      { name: "Qatar Energy HQ", location: "Doha, Qatar", type: "Energy / Commercial" },
      { name: "Kahramaa (Qatar Electricity & Water Co)", location: "Qatar", type: "Infrastructure" },
    ],
  },
  {
    region: "Oman",
    group: "Middle East & GCC",
    projects: [
      { name: "Ministry of Health", location: "Muscat, Oman", type: "Healthcare" },
      { name: "Ministry of Education", location: "Oman", type: "Government" },
      { name: "Ministry of Heritage & Tourism", location: "Oman", type: "Government" },
    ],
  },
  {
    region: "GCC & Levant",
    group: "Middle East & GCC",
    projects: [
      { name: "ADNOC Headquarters", location: "Abu Dhabi, UAE", type: "Energy / Government" },
      { name: "World Trade Centre", location: "Bahrain", type: "Commercial" },
      { name: "Ciragan Palace Hotel (Kempinski)", location: "Istanbul, Turkey", type: "Hospitality" },
      { name: "Kazma Camp", location: "Kuwait", type: "Military" },
    ],
  },
  {
    region: "United Kingdom",
    group: "United Kingdom & Europe",
    projects: [
      { name: "Buckingham Palace", location: "London", type: "Heritage / Government" },
      { name: "Bank of England Printing Press Works", location: "Essex", type: "Government" },
      { name: "St. Paul's Cathedral", location: "London", type: "Heritage" },
      { name: "HSBC HQ and UK branches", location: "Canary Wharf, London", type: "Financial" },
      { name: "Colchester Garrison", location: "Essex", type: "Ministry of Defence" },
      { name: "The Lloyd's Building", location: "London", type: "Commercial" },
      { name: "Royal Holloway University", location: "Surrey", type: "Education" },
      { name: "University of Greenwich", location: "London", type: "Education" },
      { name: "Wentworth Golf Club", location: "Surrey", type: "Sports / Hospitality" },
    ],
  },
  {
    region: "Europe",
    group: "United Kingdom & Europe",
    projects: [
      { name: "Vestatoren Tower", location: "Heerenveen, Netherlands", type: "Commercial" },
      { name: "Hotel De President", location: "Hoofddorp, Netherlands", type: "Hospitality" },
      { name: "Revitalisatie Rivierenhuis", location: "Amsterdam-Zuid, Netherlands", type: "Residential" },
      { name: "The Carousel", location: "Zoetermeer, Netherlands", type: "Residential" },
      { name: "Grotius", location: "Den Haag, Netherlands", type: "Commercial" },
      { name: "Student Experience Amsterdam", location: "Amsterdam, Netherlands", type: "Education" },
      { name: "West Beat Amsterdam", location: "Amsterdam, Netherlands", type: "Mixed Use" },
      { name: "Bajeskwartier", location: "Amsterdam, Netherlands", type: "Residential" },
    ],
  },
  {
    region: "Hong Kong",
    group: "Asia Pacific & International",
    projects: [
      { name: "Hong Kong Convention & Exhibition Centre", location: "Wan Chai, Hong Kong", type: "Events" },
      { name: "The Hong Kong Electric Company", location: "Hong Kong", type: "Utilities" },
      { name: "MTR Mass Transit Railway", location: "Hong Kong", type: "Transport" },
      { name: "Tuen Mun Hospital", location: "Hong Kong", type: "Healthcare" },
      { name: "The China Light and Power Company", location: "Hong Kong", type: "Utilities" },
    ],
  },
  {
    region: "Singapore",
    group: "Asia Pacific & International",
    projects: [
      { name: "Changi Airport", location: "Singapore", type: "Transport" },
    ],
  },
  {
    region: "Brunei",
    group: "Asia Pacific & International",
    projects: [
      { name: "Brunei International Airport", location: "Brunei", type: "Transport" },
      { name: "Jerudong International School", location: "Brunei", type: "Education" },
      { name: "Prime Minister's Residence & Banqueting Hall", location: "Brunei", type: "Government" },
    ],
  },
  {
    region: "West Indies",
    group: "Asia Pacific & International",
    projects: [
      { name: "University of West Indies", location: "Barbados, St Vincent & Trinidad", type: "Education" },
      { name: "Albena Lake-Hodge School", location: "Anguilla, British Overseas Territory", type: "Education" },
      { name: "New Hospital in Montserrat", location: "Montserrat", type: "Healthcare" },
    ],
  },
  {
    region: "India & Others",
    group: "Asia Pacific & International",
    projects: [
      { name: "British High Commission Residence", location: "New Delhi, India", type: "Government" },
      { name: "St Raphael Resort & Hotel", location: "Limassol, Cyprus", type: "Hospitality" },
      { name: "International Finance Centre", location: "St Helier, Jersey", type: "Financial" },
    ],
  },
];

export const partnerCertifications = [
  { label: "ANSI", description: "American National Standards Institute" },
  { label: "UL", description: "Underwriters Laboratories (2025)" },
  { label: "CE Marked", description: "European Conformity" },
  { label: "Intertek", description: "Third-party Testing" },
  { label: "SKG 2-Star", description: "Dutch Security Certification" },
  { label: "GAI Member", description: "Guild of Architectural Ironmongers" },
  { label: "Warrington", description: "Fire & Security Testing" },
  { label: "TÃœV / DIN EN 1303", description: "German Technical Inspection" },
  { label: "ISO 9001", description: "Quality Management System" },
];

