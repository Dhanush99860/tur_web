import { createInquiryHref, siteConfig, siteContact } from "@/content/site/site-config";
import type { FooterLinkGroup } from "@/types";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Overview",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Downloads", href: "/downloads" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Automatic Operators",
    links: [
      { label: "Overview", href: "/automatic-operators" },
      { label: "Sliding Doors", href: "/automatic-operators/sliding-doors" },
      {
        label: "Controlled Physical Access",
        href: "/automatic-operators/controlled-physical-access",
      },
      { label: "Revolving Doors", href: "/automatic-operators/revolving-doors" },
      { label: "Swing Door Drives", href: "/automatic-operators/swing-door-drives" },
      { label: "All Glass Systems", href: "/automatic-operators/all-glass-systems" },
    ],
  },
  {
    title: "Door Hardware",
    links: [
      { label: "Overview", href: "/door-hardware" },
      { label: "American Standard", href: "/door-hardware/american-standard" },
      {
        label: "European Ironmongery",
        href: "/door-hardware/european-ironmongery",
      },
      { label: "Glass Hardware", href: "/door-hardware/glass-hardware" },
      { label: "Access Control", href: "/door-hardware/access-control" },
      { label: "Sealing Systems", href: "/door-hardware/sealing-systems" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Company Profile", href: "/downloads" },
      { label: "Request Catalog", href: createInquiryHref("Request Catalog") },
      { label: "Technical Services", href: "/about" },
      { label: "Send Inquiry", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: siteConfig.name, href: "/contact" },
      { label: siteConfig.email, href: siteContact.emailHref },
      { label: siteConfig.phoneDisplay, href: siteContact.phoneHref },
      { label: siteConfig.officeRegionLabel, href: "/contact" },
    ],
  },
];
