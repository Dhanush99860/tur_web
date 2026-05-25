import { siteConfig, siteContact, createInquiryHref } from "@/content/site/site-config";

export const contactHero = {
  eyebrow: "Contact & Project Inquiries",
  headline: "Reach the right team for hardware, specification and project support.",
  description:
    "Product details, catalog requests, hardware schedules or technical coordination — use this route for all project and specification-related communication.",
  image: "/tur/home/project-2.jpg",
  imageAlt: "TUR — project coordination and technical services",
};

export const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteContact.emailHref,
    note: "Primary inquiry route — all projects",
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: siteContact.phoneHref,
    note: "Working hours, Sharjah UAE",
  },
  {
    label: "Headquarters",
    value: "Hamriyah Free Zone, Sharjah",
    href: null,
    note: "Office No. LV 32B, UAE",
  },
];

export const contactInquiryTypes = [
  "Architectural hardware schedules and specifications",
  "Product catalog and technical data sheet requests",
  "Automatic operator system selection and design",
  "Master key system design and cylinder hierarchy",
  "Access control coordination and integration",
  "Project-based supply and logistics queries",
];

export const contactOffices = [
  {
    name: "TUR Middle East FZC",
    region: "Sharjah, UAE",
    countryCode: "AE",
    address: "Office No. LV 32B, Hamriyah Free Zone, Sharjah, UAE",
    note: "Trade License 23473 / 23474",
    email: siteConfig.email,
    phone: siteConfig.phoneDisplay,
    emailHref: siteContact.emailHref,
    phoneHref: siteContact.phoneHref,
    isPrimary: true,
  },
  {
    name: "James Gibbons Format Limited",
    region: "United Kingdom",
    countryCode: "GB",
    address: "UK operational base — Format heritage manufacturing",
    isPrimary: false,
  },
  {
    name: "TUR Netherlands BV",
    region: "Netherlands",
    countryCode: "NL",
    address: "European distribution and coordination",
    isPrimary: false,
  },
  {
    name: "TUR Lanka Holdings",
    region: "Sri Lanka",
    countryCode: "LK",
    address: "Regional supply and operations",
    isPrimary: false,
  },
  {
    name: "TUR Arabia Establishment",
    region: "Middle East / GCC",
    countryCode: "SA",
    address: "GCC project coordination",
    isPrimary: false,
  },
  {
    name: "TUR India",
    region: "Bengaluru, India",
    countryCode: "IN",
    address: "Aurbis Prime, No.11 Kaveri Regent Coronet, 80 Feet Road, 3rd Block, Koramangala, Bengaluru, Karnataka 560034",
    isPrimary: false,
  },
];

export const contactDownloads = [
  {
    label: "Company Profile",
    description: "Full overview of TUR, partner brands and product scope.",
    href: "/company_profile.pdf",
  },
  {
    label: "All Downloads",
    description: "Catalogues, data sheets and specification resources.",
    href: "/downloads",
  },
];

export { siteConfig, siteContact, createInquiryHref };
