import type { SeoPage } from "@/types";
import { siteConfig } from "@/content/site/site-config";

export const seoDefaults = {
  defaultTitle: siteConfig.shortName,
  defaultDescription: siteConfig.description,
  defaultImage: siteConfig.ogImage,
  titleTemplate: `%s | ${siteConfig.shortName}`,
};

export const pageSeo = {
  home: {
    title: "Architectural Door Hardware and Automatic Entry Systems",
    description:
      "Integrated architectural door hardware, automatic entry systems, access control, glass hardware and sealing systems for project-led commercial and institutional work.",
    path: "/",
    image: "/tur/meta-default.jpg",
    keywords: [
      "architectural door hardware",
      "automatic entry systems",
      "access control systems",
      "glass hardware",
      "door sealing systems",
    ],
    updatedAt: "2026-03-20",
  },
  about: {
    title: "About",
    description:
      "Learn about TUR's architectural hardware and automatic entry systems offer, heritage through James Gibbons Format, regional experience and technical project support.",
    path: "/about",
    image: "/tur/project-c.jpg",
    keywords: [
      "about tur",
      "james gibbons format",
      "architectural door hardware",
      "automatic entry systems",
      "technical services",
    ],
    updatedAt: "2026-03-18",
  },
  downloads: {
    title: "Downloads",
    description:
      "Access the TUR company profile and use downloads as the core route for profile, catalog and technical support requests.",
    path: "/downloads",
    image: "/tur/meta-default.jpg",
    keywords: [
      "tur downloads",
      "company profile",
      "catalog request",
      "technical support",
    ],
    updatedAt: "2026-03-19",
  },
  contact: {
    title: "Contact",
    description:
      "Contact TUR Middle East FZC for product details, technical services, project support and regional coordination.",
    path: "/contact",
    image: "/tur/project-b.jpg",
    keywords: [
      "contact tur",
      "tur middle east fzc",
      "project inquiry",
      "technical support",
    ],
    updatedAt: "2026-03-19",
  },
  doorHardware: {
    title: "Door Hardware",
    description:
      "Architectural door hardware families spanning American Standard, European Ironmongery, Glass Hardware, Access Control and Sealing Systems.",
    path: "/door-hardware",
    image: "/tur/project-b.jpg",
    keywords: [
      "door hardware",
      "american standard hardware",
      "european ironmongery",
      "glass hardware",
      "sealing systems",
    ],
    updatedAt: "2026-03-19",
  },
  automaticOperators: {
    title: "Automatic Operators",
    description:
      "Sliding, revolving, swing and controlled access systems shaped for premium entrance performance and project coordination.",
    path: "/automatic-operators",
    image: "/tur/slider-3.webp",
    keywords: [
      "automatic operators",
      "sliding doors",
      "swing door drives",
      "revolving doors",
      "controlled physical access",
    ],
    updatedAt: "2026-03-20",
  },
} satisfies Record<string, SeoPage>;
