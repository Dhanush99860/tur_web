import type { SiteConfig } from "@/types";

export const siteConfig = {
  name: "TUR Middle East FZC",
  shortName: "TUR",
  legalName: "TUR Middle East FZC",
  description:
    "Architectural door hardware, automatic entry systems, access control, glass hardware and sealing systems for commercial, hospitality, healthcare and high-spec architectural projects.",
  baseUrl: "https://www.tur.com.co",
  locale: "en_US",
  themeColor: "#3055A6",
  themeColorDark: "#1B2B56",
  ogImage: "/tur/meta-default.jpg",
  logoPath: "/logo/logo-brand.png",
  logoWhitePath: "/logo/logo-brand-white.png",
  manifestPath: "/manifest.webmanifest",
  email: "info@tur.com.co",
  phone: "+97165396440",
  phoneDisplay: "+971 6 539 6440",
  locationLabel:
    "Office No. LV 32B, Hamriyah Free Zone, Sharjah, United Arab Emirates",
  officeRegionLabel: "Sharjah, United Arab Emirates",
  announcementItems: [
    "Architectural Door Hardware",
    "Automatic Entry Systems",
    "Specification Support",
  ],
  offices: [
    {
      name: "TUR Middle East FZC",
      region: "Sharjah, United Arab Emirates",
    },
    {
      name: "TUR Netherlands BV",
      region: "Netherlands",
    },
    {
      name: "James Gibbons Format Limited",
      region: "United Kingdom",
    },
    {
      name: "TUR Lanka Holdings",
      region: "Sri Lanka",
    },
    {
      name: "TUR Arabia Establishment",
      region: "Middle East",
    },
  ],
  trustSignals: [
    "Since 1670 Heritage",
    "30+ Years Regional Experience",
    "Global Presence",
    "Technical Services",
  ],
  keywords: [
    "TUR",
    "TUR Middle East FZC",
    "architectural door hardware",
    "automatic entry systems",
    "access control",
    "glass hardware",
    "sealing systems",
    "automatic operators",
  ],
  address: {
    streetAddress: "Hamriyah Free Zone",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    addressCountry: "AE",
  },
} satisfies SiteConfig;

export const siteContact = {
  emailHref: `mailto:${siteConfig.email}`,
  phoneHref: `tel:${siteConfig.phone}`,
};

export function createInquiryHref(subject: string) {
  return `${siteContact.emailHref}?subject=${encodeURIComponent(subject)}`;
}

export function absoluteSiteUrl(path = "/") {
  return new URL(path, siteConfig.baseUrl).toString();
}
