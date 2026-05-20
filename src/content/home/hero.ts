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
      productSlug: "hang-the-door",
      label: "Door Hardware",
      title: "Architectural Hardware For Every Opening",
      description: "Complete specification routes — hanging, securing, access control and sealing — for commercial, hospitality and institutional environments.",
      href: "/door-hardware",
      image: "/tur/door-hardware/format-lockset.jpg",
      imageAlt: "Format UK branded lockset and cylinder — TUR architectural door hardware",
    },
    {
      productSlug: "tsw150-automatic-door-operator",
      label: "Automatic Entry Systems",
      title: "TSW150 Automatic Door Operator",
      description: "High-performance automatic entry engineered for hospitality, healthcare and high-traffic architectural spaces.",
      image: "/tur/home/tsw150-operator.jpg",
      imageAlt: "TSW150 G·U automatic swing door operator",
    },
    {
      productSlug: "swing-door-drives",
      label: "Sliding Door Systems",
      title: "Precision Sliding Door Drives",
      description: "From compact configurations to heavy-duty sliding systems — built for demanding architectural and commercial environments.",
      href: "/automatic-operators",
      image: "/tur/home/sliding-door-hero.jpg",
      imageAlt: "Automatic sliding door system — commercial architectural installation",
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
