import { getCatalogFamiliesBySection, getCatalogFamily } from "@/content/catalog/categories";
import { getProductBySlug, products } from "@/content/catalog/products";
import { pageSeo } from "@/content/site/seo";
import { createInquiryHref, siteConfig } from "@/content/site/site-config";
import type { CatalogSectionSlug, LinkItem, SearchEntry } from "@/types";

export type HeaderNavigationPreview = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
};

export type HeaderNavigationLeafItem = {
  key: string;
  label: string;
  href: string;
  description?: string;
  preview: HeaderNavigationPreview;
};

export type HeaderNavigationGroup = {
  label: string;
  description?: string;
  href?: string;
  items: HeaderNavigationLeafItem[];
};

export type HeaderNavigationPanel = {
  heading: string;
  description: string;
  groups: HeaderNavigationGroup[];
  defaultPreviewKey?: string;
  overviewHref?: string;
};

export type HeaderNavigationItem = {
  label: string;
  href: string;
  description?: string;
  panel?: HeaderNavigationPanel;
  comingSoon?: boolean;
};

export type HeaderUtilityItem = {
  label: string;
  href?: string;
  muted?: boolean;
  hasChevron?: boolean;
  options?: {
    label: string;
    description?: string;
    current?: boolean;
    disabled?: boolean;
  }[];
};

export type HeaderSearchPopularItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  meta: string;
};

export type HeaderSearchFeatureCard = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  ctaLabel: string;
};

export type HeaderSearchSupportItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
};

export type HeaderSearchPanelData = {
  popularItems: HeaderSearchPopularItem[];
  featureCard: HeaderSearchFeatureCard;
  supportItems: HeaderSearchSupportItem[];
  supportCta: LinkItem;
};

function requireFamily(section: CatalogSectionSlug, slug: string) {
  const family = getCatalogFamily(section, slug);

  if (!family) {
    throw new Error(`Missing navigation family for ${section}/${slug}`);
  }

  return family;
}

function requireProduct(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) {
    throw new Error(`Missing navigation product for ${slug}`);
  }

  return product;
}

function createFamilyHref(section: CatalogSectionSlug, slug: string) {
  const family = requireFamily(section, slug);

  return `/${family.section}/${family.slug}`;
}

function createProductHref(slug: string) {
  const product = requireProduct(slug);

  return `/products/${product.slug}`;
}

type PreviewOverrides = Partial<
  Pick<
    HeaderNavigationPreview,
    "eyebrow" | "title" | "description" | "href" | "image" | "imageAlt" | "ctaLabel"
  >
>;

function createProductPreview(slug: string, overrides: PreviewOverrides = {}) {
  const product = requireProduct(slug);

  return {
    eyebrow: overrides.eyebrow ?? product.familyTitle,
    title: overrides.title ?? product.title,
    description: overrides.description ?? product.shortDescription,
    href: overrides.href ?? createProductHref(slug),
    image: overrides.image ?? product.image,
    imageAlt: overrides.imageAlt ?? product.imageAlt,
    ctaLabel: overrides.ctaLabel ?? "View product",
  } satisfies HeaderNavigationPreview;
}

type ProductLeafInput = {
  key: string;
  slug: string;
  label?: string;
  description?: string;
  previewEyebrow?: string;
  previewTitle?: string;
  previewDescription?: string;
  ctaLabel?: string;
};

function createProductLeaf({
  key,
  slug,
  label,
  description,
  previewEyebrow,
  previewTitle,
  previewDescription,
  ctaLabel,
}: ProductLeafInput) {
  const product = requireProduct(slug);
  const linkLabel = label ?? product.title;
  const linkDescription = description ?? product.shortDescription;

  return {
    key,
    label: linkLabel,
    href: createProductHref(slug),
    description: linkDescription,
    preview: createProductPreview(slug, {
      eyebrow: previewEyebrow,
      title: previewTitle ?? product.title,
      description: previewDescription ?? linkDescription,
      ctaLabel,
    }),
  } satisfies HeaderNavigationLeafItem;
}

export function getHeaderNavigationLeafItems(panel: HeaderNavigationPanel) {
  return panel.groups.flatMap((group) => group.items);
}

export function getDefaultHeaderNavigationLeafItem(panel: HeaderNavigationPanel) {
  const items = getHeaderNavigationLeafItems(panel);

  if (!items.length) {
    return null;
  }

  if (!panel.defaultPreviewKey) {
    return items[0];
  }

  return items.find((item) => item.key === panel.defaultPreviewKey) ?? items[0];
}

export function getHeaderNavigationLeafItemByKey(
  panel: HeaderNavigationPanel,
  key: string,
) {
  return getHeaderNavigationLeafItems(panel).find((item) => item.key === key) ?? null;
}

const doorHardwareFamilies = getCatalogFamiliesBySection("door-hardware");
const automaticOperatorFamilies = getCatalogFamiliesBySection("automatic-operators");

export const headerAnnouncement = {
  message: "Architectural Door Hardware & Automatic Entry Systems — Since 1670",
  ctaLabel: "Get in Touch",
  ctaHref: "/contact",
};

export const headerUtilityItems: HeaderUtilityItem[] = [];

const doorHardwareCoreGroups: HeaderNavigationGroup[] = [
  {
    label: "American Standard",
    href: createFamilyHref("door-hardware", "american-standard"),
    items: [
      createProductLeaf({ key: "american-hang-the-door", slug: "hang-the-door" }),
      createProductLeaf({ key: "american-control-the-door", slug: "control-the-door" }),
      createProductLeaf({ key: "american-secure-the-door", slug: "secure-the-door" }),
      createProductLeaf({ key: "american-bolt-the-door", slug: "american-bolt-the-door" }),
      createProductLeaf({ key: "american-ancillary-products", slug: "american-ancillary-products" }),
      createProductLeaf({ key: "american-emergency-exits", slug: "american-emergency-exits" }),
      createProductLeaf({ key: "american-furnish-the-door", slug: "american-furnish-the-door" }),
    ],
  },
  {
    label: "European Ironmongery",
    href: createFamilyHref("door-hardware", "european-ironmongery"),
    items: [
      createProductLeaf({ key: "euro-hang-the-door", slug: "euro-hang-the-door" }),
      createProductLeaf({ key: "euro-control-the-door", slug: "euro-control-the-door" }),
      createProductLeaf({ key: "euro-secure-the-door", slug: "euro-secure-the-door" }),
      createProductLeaf({ key: "euro-cylinders", slug: "cylinders" }),
      createProductLeaf({ key: "euro-furnish-the-door", slug: "furnish-the-door" }),
      createProductLeaf({ key: "euro-bolt-the-door", slug: "bolt-the-door" }),
      createProductLeaf({ key: "euro-ancillary-products", slug: "euro-ancillary-products" }),
      createProductLeaf({ key: "euro-emergency-exits", slug: "euro-emergency-exits" }),
      createProductLeaf({ key: "euro-furnish-the-door-lever-handle", slug: "furnish-the-door-lever-handle" }),
    ],
  },
  {
    label: "Glass Hardware",
    href: createFamilyHref("door-hardware", "glass-hardware"),
    items: [
      createProductLeaf({ key: "glass-hinge-glass-clip", slug: "glass-hinge-glass-clip" }),
      createProductLeaf({ key: "glass-bathroom-handle-glass-knob", slug: "bathroom-handle-glass-knob" }),
      createProductLeaf({ key: "glass-patch-fitting", slug: "tg-pf103" }),
      createProductLeaf({ key: "glass-pull-handle", slug: "pull-handle" }),
      createProductLeaf({ key: "glass-lipseal", slug: "lipseal" }),
    ],
  },
];

const doorHardwareSupportGroups: HeaderNavigationGroup[] = [
  {
    label: "Access Control",
    href: createFamilyHref("door-hardware", "access-control"),
    items: [
      createProductLeaf({ key: "access-electromagnetic-locks", slug: "electromagnetic-locks" }),
      createProductLeaf({ key: "access-electric-strikes", slug: "electric-strikes" }),
      createProductLeaf({ key: "access-armature-mounting-accessories", slug: "armature-mounting-accessories" }),
      createProductLeaf({ key: "access-electromechanical-locking-devices", slug: "electromechanical-locking-devices" }),
      createProductLeaf({ key: "access-e-access", slug: "e-access" }),
      createProductLeaf({ key: "access-digital-keypad-system", slug: "digital-keypad-system" }),
      createProductLeaf({ key: "access-infrared-wireless-exit-devices", slug: "infrared-wireless-exit-devices" }),
      createProductLeaf({ key: "access-electromagnetic-door-holders", slug: "electromagnetic-door-holders" }),
      createProductLeaf({ key: "access-control-accessories", slug: "access-control-accessories" }),
    ],
  },
  {
    label: "Sealing Systems",
    href: createFamilyHref("door-hardware", "sealing-systems"),
    items: [
      createProductLeaf({ key: "sealing-door-bottom-seals", slug: "door-bottom-seals" }),
      createProductLeaf({ key: "sealing-threshold-plate-seals", slug: "threshold-plate-seals" }),
      createProductLeaf({ key: "sealing-threshold-plates", slug: "threshold-plates" }),
      createProductLeaf({ key: "sealing-intumescent-seals", slug: "intumescent-seals" }),
      createProductLeaf({ key: "sealing-door-frame-perimeter-seals", slug: "door-frame-or-perimeter-seals" }),
      createProductLeaf({ key: "sealing-astragals", slug: "astragals" }),
      createProductLeaf({ key: "sealing-magnetic-astragals", slug: "magnetic-astragals" }),
      createProductLeaf({ key: "sealing-self-adhesive-seals", slug: "self-adhesive-seals" }),
      createProductLeaf({ key: "sealing-brush-strip-seals", slug: "brush-strip-seals" }),
      createProductLeaf({ key: "sealing-complementary-products", slug: "complementary-products" }),
      createProductLeaf({ key: "sealing-weather-stripping", slug: "weather-stripping" }),
    ],
  },
];

const automaticOperatorsPrimaryGroups: HeaderNavigationGroup[] = [
  {
    label: "Sliding Doors",
    href: createFamilyHref("automatic-operators", "sliding-doors"),
    items: [
      createProductLeaf({ key: "auto-sliding-prismatic-cmw", slug: "prismatic-sliding-door-cmw" }),
      createProductLeaf({ key: "auto-sliding-curved-cmr", slug: "curved-sliding-door-cmr" }),
      createProductLeaf({ key: "auto-sliding-telescoping-emt", slug: "telescoping-sliding-door-emt" }),
      createProductLeaf({ key: "auto-sliding-escape-hmf-ft", slug: "escape-route-sliding-door-hm-f-ft" }),
      createProductLeaf({ key: "auto-sliding-heavymaster-hm", slug: "heavymaster-hm" }),
      createProductLeaf({ key: "auto-sliding-economaster-em", slug: "economaster-em" }),
      createProductLeaf({ key: "auto-sliding-compactmaster-cm", slug: "compactmaster-cm" }),
    ],
  },
  {
    label: "Controlled Physical Access",
    href: createFamilyHref("automatic-operators", "controlled-physical-access"),
    items: [
      createProductLeaf({ key: "auto-access-reader-posts", slug: "reader-posts-guiding-bar" }),
      createProductLeaf({ key: "auto-access-gsi-security-curved", slug: "gsi-curved-sliding-access" }),
      createProductLeaf({ key: "auto-access-full-height-turnstile", slug: "full-height-turnstile" }),
      createProductLeaf({ key: "auto-access-sensor-barriers", slug: "sensor-barriers" }),
      createProductLeaf({ key: "auto-access-swing-gates", slug: "swing-gates" }),
      createProductLeaf({ key: "auto-access-turnstiles", slug: "turnstile-systems" }),
      createProductLeaf({ key: "auto-access-3-arm-2-arm-turnstiles", slug: "tripod-turnstiles" }),
    ],
  },
  {
    label: "Revolving Doors",
    href: createFamilyHref("automatic-operators", "revolving-doors"),
    items: [
      createProductLeaf({ key: "auto-revolving-gsi-security", slug: "gsi-security-revolving-door" }),
      createProductLeaf({ key: "auto-revolving-ggr-large-capacity", slug: "ggr-large-capacity-revolving" }),
      createProductLeaf({ key: "auto-revolving-ggg-all-glass", slug: "ggg-all-glass-revolving-door" }),
      createProductLeaf({ key: "auto-revolving-gra-graf-standard", slug: "gra-standard-revolving-door" }),
    ],
  },
];

const automaticOperatorsSupportGroups: HeaderNavigationGroup[] = [
  {
    label: "Swing Door Drives",
    href: createFamilyHref("automatic-operators", "swing-door-drives"),
    items: [
      createProductLeaf({ key: "auto-swing-dtn-80", slug: "swing-door-drives" }),
      createProductLeaf({ key: "auto-swing-tsw150", slug: "tsw150-automatic-door-operator" }),
      createProductLeaf({ key: "auto-swing-tsw120", slug: "tsw120-automatic-door-operator" }),
    ],
  },
  {
    label: "All Glass Systems",
    href: createFamilyHref("automatic-operators", "all-glass-systems"),
    items: [
      createProductLeaf({ key: "auto-all-glass-shopmaster-gsw-a", slug: "sliding-doors" }),
      createProductLeaf({ key: "auto-all-glass-shopmaster-gsw-m-g30", slug: "shopmaster-gsw-m-g30" }),
      createProductLeaf({ key: "auto-all-glass-shopmaster-gsw-m", slug: "shopmaster-gsw-m" }),
    ],
  },
  {
    label: "Automatic Pulse Generators & Sensors",
    href: createFamilyHref("automatic-operators", "automatic-pulse-generators-and-sensors"),
    items: [
      createProductLeaf({ key: "auto-sensors-activation-devices", slug: "activation-devices-sensors" }),
      createProductLeaf({ key: "auto-sensors-safety-sensors", slug: "safety-sensors" }),
      createProductLeaf({ key: "auto-sensors-control-inputs", slug: "control-inputs" }),
    ],
  },
];

export const mainNavigation = [
  {
    label: "Door Hardware",
    href: "/door-hardware",
    description:
      "Architectural hardware categories for hanging, securing, glass coordination, access control and sealing performance.",
    panel: {
      heading: "Shop by Category",
      description:
        "A structured one-view mega panel into TUR's core hardware families, sub-families and representative specification routes.",
      overviewHref: "/door-hardware",
      defaultPreviewKey: "american-hang-the-door",
      groups: [...doorHardwareCoreGroups, ...doorHardwareSupportGroups],
    },
  },
  {
    label: "Automatic Operators",
    href: "/automatic-operators",
    description:
      "Sliding, revolving, swing and controlled access systems arranged as clear family landing pages.",
    panel: {
      heading: "Automatic Entry Systems",
      description:
        "Browse entrance automation families and specialist access systems through a single structured mega panel, with live preview by hovered item.",
      overviewHref: "/automatic-operators",
      defaultPreviewKey: "auto-sliding-prismatic-cmw",
      groups: [...automaticOperatorsPrimaryGroups, ...automaticOperatorsSupportGroups],
    },
  },
  { label: "Master Key", href: "/products", comingSoon: true },
  { label: "All Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] satisfies HeaderNavigationItem[];

export const drawerSupportLinks = [
  {
    label: "Request Catalog",
    href: createInquiryHref("Request Catalog"),
  },
  {
    label: "Company Profile",
    href: "/downloads",
  },
  {
    label: "Project Inquiry",
    href: "/contact",
  },
] satisfies LinkItem[];

const featuredSearchProductSlugs = [
  "tu-d800",
  "tsw150-automatic-door-operator",
  "furnish-the-door",
] as const;

export const headerSearchPanel = {
  popularItems: featuredSearchProductSlugs.map((slug) => {
    const product = requireProduct(slug);

    return {
      title: product.title,
      href: `/products/${product.slug}`,
      image: product.image,
      imageAlt: product.imageAlt,
      eyebrow: product.familyTitle,
      meta: product.section === "door-hardware" ? "Door Hardware" : "Automatic Operators",
    } satisfies HeaderSearchPopularItem;
  }),
  featureCard: {
    title: "Access Control",
    href: "/door-hardware/access-control",
    image: requireFamily("door-hardware", "access-control").image,
    imageAlt: requireFamily("door-hardware", "access-control").imageAlt,
    eyebrow: "Highlighted Family",
    ctaLabel: "Explore family",
  },
  supportItems: [
    {
      title: "Company profile, catalog requests and supporting downloads.",
      href: "/downloads",
      image: "/tur/meta-default.jpg",
      imageAlt: "TUR downloads preview",
      eyebrow: "Downloads",
    },
    {
      title: "Heritage, global presence and project-led technical support.",
      href: "/about",
      image: "/tur/project-c.jpg",
      imageAlt: "TUR about preview",
      eyebrow: "About TUR",
    },
    {
      title: "Reach TUR for product details, technical services and project inquiries.",
      href: "/contact",
      image: "/tur/project-b.jpg",
      imageAlt: "TUR contact preview",
      eyebrow: "Contact",
    },
  ],
  supportCta: {
    label: "View All Support Routes",
    href: "/contact",
  },
} satisfies HeaderSearchPanelData;

const topLevelSearchEntries: SearchEntry[] = [
  {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    href: pageSeo.home.path,
    category: "Page",
  },
  {
    title: pageSeo.about.title,
    description: pageSeo.about.description,
    href: pageSeo.about.path,
    category: "Page",
  },
  {
    title: pageSeo.downloads.title,
    description: pageSeo.downloads.description,
    href: pageSeo.downloads.path,
    category: "Page",
  },
  {
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
    href: pageSeo.contact.path,
    category: "Page",
  },
];

export const searchEntries: SearchEntry[] = [
  ...topLevelSearchEntries,
  ...doorHardwareFamilies.map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    category: "Door Hardware Family",
  })),
  ...automaticOperatorFamilies.map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    category: "Automatic Operator Family",
  })),
  ...products.map((product) => ({
    title: product.title,
    description: product.shortDescription,
    href: `/products/${product.slug}`,
    category: "Product",
  })),
  {
    title: "Request Catalog",
    description: "Open a direct inquiry route for broader category and product support.",
    href: createInquiryHref("Request Catalog"),
    category: "Support",
  },
  {
    title: "Sharjah Office",
    description: siteConfig.locationLabel,
    href: "/contact",
    category: "Office",
  },
];
