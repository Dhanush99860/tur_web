import type { HomeHero } from "@/types";
import { createInquiryHref } from "@/content/site/site-config";

export const homeHero: HomeHero = {
  eyebrow: "Architectural Door Hardware / Automatic Entry Systems",
  title: "Integrated door hardware for project-led delivery.",
  description:
    "One project route for architectural door hardware, automatic operators, access control, glass hardware and sealing systems, supported by technical coordination for commercial, hospitality, healthcare and institutional work.",
  primaryCta: {
    label: "Explore Door Hardware",
    href: "/door-hardware",
  },
  secondaryCta: {
    label: "Explore Automatic Operators",
    href: "/automatic-operators",
  },
  image: "/art/baanner_newimage.webp",
  imageAlt: "TUR architectural hardware hero banner",
  slides: [
    {
      productSlug: "tu-d800",
      label: "Access Control",
      title: "TU.D800 electromagnetic lock",
      image: "/tur/slider-5.webp",
      imageAlt: "TU.D800 preview card",
    },
    {
      productSlug: "tsw150-automatic-door-operator",
      label: "Automatic Operators",
      title: "TSW150 automatic door operator",
      image: "/tur/slider-3.webp",
      imageAlt: "TSW150 operator preview card",
    },
    {
      productSlug: "furnish-the-door",
      label: "European Ironmongery",
      title: "TA1200 Series Standard Lever Designs",
      image: "/tur/mc-2.jpg",
      imageAlt: "TA1200 Series preview card",
    },
    {
      productSlug: "swing-door-drives",
      label: "Featured Operator",
      title: "DTN 80 automatic operator",
      image: "/tur/sliding-d.jpg",
      imageAlt: "DTN 80 preview card",
    },
  ],
  supportActions: [
    { label: "Company Profile", href: "/company_profile.pdf" },
    { label: "Request Catalog", href: createInquiryHref("Request Catalog") },
    { label: "Start Project Inquiry", href: createInquiryHref("Project Inquiry") },
  ],
  metrics: [
    { value: "Since 1670", label: "James Gibbons Format" },
    { value: "30+ Years", label: "Regional experience" },
    { value: "Global Presence", label: "Partner and market reach" },
    { value: "Technical Services", label: "Project coordination" },
  ],
};
