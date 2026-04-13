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

function createFamilyPreview(
  section: CatalogSectionSlug,
  slug: string,
  overrides: PreviewOverrides = {},
) {
  const family = requireFamily(section, slug);

  return {
    eyebrow: overrides.eyebrow ?? family.title,
    title: overrides.title ?? family.title,
    description: overrides.description ?? family.description,
    href: overrides.href ?? createFamilyHref(section, slug),
    image: overrides.image ?? family.image,
    imageAlt: overrides.imageAlt ?? family.imageAlt,
    ctaLabel: overrides.ctaLabel ?? "Explore family",
  } satisfies HeaderNavigationPreview;
}

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

type FamilyLeafInput = {
  key: string;
  label: string;
  section: CatalogSectionSlug;
  familySlug: string;
  description: string;
  previewEyebrow?: string;
  previewTitle?: string;
  previewDescription?: string;
  ctaLabel?: string;
};

function createFamilyLeaf({
  key,
  label,
  section,
  familySlug,
  description,
  previewEyebrow,
  previewTitle,
  previewDescription,
  ctaLabel,
}: FamilyLeafInput) {
  return {
    key,
    label,
    href: createFamilyHref(section, familySlug),
    description,
    preview: createFamilyPreview(section, familySlug, {
      eyebrow: previewEyebrow,
      title: previewTitle ?? label,
      description: previewDescription ?? description,
      ctaLabel,
    }),
  } satisfies HeaderNavigationLeafItem;
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
  message: "Since 1670 heritage, 30+ years of regional experience, and project-led technical support.",
  ctaLabel: "Send Inquiry",
  ctaHref: "/contact",
};

export const headerUtilityItems: HeaderUtilityItem[] = [
  {
    label: "EN",
    muted: true,
    hasChevron: true,
    options: [
      {
        label: "English",
        description: "Current navigation language",
        current: true,
      },
      {
        label: "Arabic",
        description: "Arabic navigation layer can be added later.",
        disabled: true,
      },
    ],
  },
];

const doorHardwareCoreGroups: HeaderNavigationGroup[] = [
  {
    label: "American Standard",
    description: "Core door functions arranged under the American Standard route.",
    href: createFamilyHref("door-hardware", "american-standard"),
    items: [
      createProductLeaf({
        key: "american-hang-the-door",
        slug: "hang-the-door",
        previewEyebrow: "American Standard",
      }),
      createProductLeaf({
        key: "american-control-the-door",
        slug: "control-the-door",
        previewEyebrow: "American Standard",
      }),
      createProductLeaf({
        key: "american-secure-the-door",
        slug: "secure-the-door",
        previewEyebrow: "American Standard",
      }),
      createFamilyLeaf({
        key: "american-bolt-the-door",
        label: "Bolt The Door",
        section: "door-hardware",
        familySlug: "american-standard",
        description: "Bolting hardware within the American Standard specification route.",
        previewEyebrow: "American Standard",
      }),
      createFamilyLeaf({
        key: "american-ancillary-products",
        label: "Ancillary Products",
        section: "door-hardware",
        familySlug: "american-standard",
        description: "Supporting accessories and package-completion items for coordinated schedules.",
        previewEyebrow: "American Standard",
      }),
      createFamilyLeaf({
        key: "american-emergency-exits",
        label: "Emergency Exits",
        section: "door-hardware",
        familySlug: "american-standard",
        description: "Life-safety exit components kept within the wider American Standard route.",
        previewEyebrow: "American Standard",
      }),
      createFamilyLeaf({
        key: "american-furnish-the-door",
        label: "Furnish The Door",
        section: "door-hardware",
        familySlug: "american-standard",
        description: "Furnishing-led hardware selections grouped under the American Standard overview.",
        previewEyebrow: "American Standard",
      }),
    ],
  },
  {
    label: "European Ironmongery",
    description: "Premium ironmongery families for furnishing and secure closure.",
    href: createFamilyHref("door-hardware", "european-ironmongery"),
    items: [
      createFamilyLeaf({
        key: "euro-hang-the-door",
        label: "Hang The Door",
        section: "door-hardware",
        familySlug: "european-ironmongery",
        description: "Hanging hardware within the European ironmongery route.",
        previewEyebrow: "European Ironmongery",
      }),
      createFamilyLeaf({
        key: "euro-control-the-door",
        label: "Control The Door",
        section: "door-hardware",
        familySlug: "european-ironmongery",
        description: "Door-control hardware grouped under the premium ironmongery route.",
        previewEyebrow: "European Ironmongery",
      }),
      createFamilyLeaf({
        key: "euro-secure-the-door",
        label: "Secure The Door",
        section: "door-hardware",
        familySlug: "european-ironmongery",
        description: "Security-led ironmongery selections for protected openings.",
        previewEyebrow: "European Ironmongery",
      }),
      createProductLeaf({
        key: "euro-cylinders",
        slug: "cylinders",
        previewEyebrow: "European Ironmongery",
      }),
      createProductLeaf({
        key: "euro-furnish-the-door",
        slug: "furnish-the-door",
        label: "Furnish The Door",
        description: "Lever design route for furnishing-led ironmongery packages.",
        previewEyebrow: "European Ironmongery",
      }),
      createProductLeaf({
        key: "euro-bolt-the-door",
        slug: "bolt-the-door",
        previewEyebrow: "European Ironmongery",
      }),
      createFamilyLeaf({
        key: "euro-ancillary-products",
        label: "Ancillary Products",
        section: "door-hardware",
        familySlug: "european-ironmongery",
        description: "Supporting project accessories and completion items.",
        previewEyebrow: "European Ironmongery",
      }),
      createFamilyLeaf({
        key: "euro-emergency-exits",
        label: "Emergency Exits",
        section: "door-hardware",
        familySlug: "european-ironmongery",
        description: "Exit hardware held within the premium ironmongery route.",
        previewEyebrow: "European Ironmongery",
      }),
      createProductLeaf({
        key: "euro-furnish-the-door-lever-handle",
        slug: "furnish-the-door-lever-handle",
        previewEyebrow: "European Ironmongery",
      }),
    ],
  },
  {
    label: "Glass Hardware",
    description: "Frameless fittings, patch hardware and supporting glass details.",
    href: createFamilyHref("door-hardware", "glass-hardware"),
    items: [
      createProductLeaf({
        key: "glass-hinge-glass-clip",
        slug: "glass-hinge-glass-clip",
        previewEyebrow: "Glass Hardware",
      }),
      createProductLeaf({
        key: "glass-bathroom-handle-glass-knob",
        slug: "bathroom-handle-glass-knob",
        previewEyebrow: "Glass Hardware",
      }),
      createProductLeaf({
        key: "glass-patch-fitting",
        slug: "tg-pf103",
        label: "Patch Fitting",
        description: "Hydraulic patch fitting coordination for frameless glass doors.",
        previewEyebrow: "Glass Hardware",
        previewTitle: "Patch Fitting",
      }),
      createProductLeaf({
        key: "glass-pull-handle",
        slug: "pull-handle",
        previewEyebrow: "Glass Hardware",
      }),
      createFamilyLeaf({
        key: "glass-lipseal",
        label: "Lipseal",
        section: "door-hardware",
        familySlug: "glass-hardware",
        description: "Supporting glass sealing detail kept within the glass hardware overview.",
        previewEyebrow: "Glass Hardware",
      }),
    ],
  },
];

const doorHardwareSupportGroups: HeaderNavigationGroup[] = [
  {
    label: "Access Control",
    description: "Locking, release and electronic access routes for secure openings.",
    href: createFamilyHref("door-hardware", "access-control"),
    items: [
      createProductLeaf({
        key: "access-electromagnetic-locks",
        slug: "electromagnetic-locks",
        previewEyebrow: "Access Control",
      }),
      createProductLeaf({
        key: "access-electric-strikes",
        slug: "electric-strikes",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-armature-mounting-accessories",
        label: "Armature Mounting Accessories",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Supporting accessories for coordinated electromagnetic locking arrangements.",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-electromechanical-locking-devices",
        label: "Electromechanical Locking Devices",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Project-led electromechanical locking options within the access-control route.",
        previewEyebrow: "Access Control",
      }),
      createProductLeaf({
        key: "access-e-access",
        slug: "e-access",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-digital-keypad-system",
        label: "Digital Keypad System",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Keypad-led access layer kept within the wider secure-entry family.",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-infrared-wireless-exit-devices",
        label: "Infrared & Wireless Exit Devices",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Exit-triggering devices for coordinated egress and managed access.",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-electromagnetic-door-holders",
        label: "Electromagnetic Door Holders",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Door-holder solutions for coordinated hold-open and release strategies.",
        previewEyebrow: "Access Control",
      }),
      createFamilyLeaf({
        key: "access-control-accessories",
        label: "Access Control Accessories",
        section: "door-hardware",
        familySlug: "access-control",
        description: "Supporting accessories that complete access-control packages.",
        previewEyebrow: "Access Control",
      }),
    ],
  },
  {
    label: "Sealing Systems",
    description: "Threshold, perimeter and weather-control routes for coordinated openings.",
    href: createFamilyHref("door-hardware", "sealing-systems"),
    items: [
      createProductLeaf({
        key: "sealing-door-bottom-seals",
        slug: "door-bottom-seals",
        previewEyebrow: "Sealing Systems",
      }),
      createProductLeaf({
        key: "sealing-threshold-plate-seals",
        slug: "threshold-plate-seals",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-threshold-plates",
        label: "Threshold Plates",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Threshold plate routes within the wider perimeter-performance family.",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-intumescent-seals",
        label: "Intumescent Seals",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Fire and smoke sealing products kept within the coordinated sealing route.",
        previewEyebrow: "Sealing Systems",
      }),
      createProductLeaf({
        key: "sealing-door-frame-perimeter-seals",
        slug: "door-frame-perimeter-seals",
        label: "Door Frame Or Perimeter Seals",
        previewEyebrow: "Sealing Systems",
        previewTitle: "Door Frame Or Perimeter Seals",
      }),
      createFamilyLeaf({
        key: "sealing-astragals",
        label: "Astragals",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Astragal routes for coordinated perimeter control.",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-magnetic-astragals",
        label: "Magnetic Astragals",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Magnetic astragal options held within the broader sealing family.",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-self-adhesive-seals",
        label: "Self Adhesive Seals",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Self-adhesive sealing routes for supplementary perimeter detailing.",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-brush-strip-seals",
        label: "Brush Strip Seals",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Brush-strip solutions for threshold and perimeter control.",
        previewEyebrow: "Sealing Systems",
      }),
      createFamilyLeaf({
        key: "sealing-complementary-products",
        label: "Complementary Products",
        section: "door-hardware",
        familySlug: "sealing-systems",
        description: "Supporting items that complete wider sealing-system packages.",
        previewEyebrow: "Sealing Systems",
      }),
      createProductLeaf({
        key: "sealing-weather-stripping",
        slug: "weather-stripping",
        previewEyebrow: "Sealing Systems",
      }),
    ],
  },
];

const automaticOperatorsPrimaryGroups: HeaderNavigationGroup[] = [
  {
    label: "Sliding Doors",
    description: "Sliding families for coordinated circulation.",
    href: createFamilyHref("automatic-operators", "sliding-doors"),
    items: [
      createFamilyLeaf({
        key: "auto-sliding-prismatic-cmw",
        label: "Prismatic sliding door CMW",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Prismatic sliding configuration for structured commercial entrance flow.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-curved-cmr",
        label: "Curved sliding door CMR",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Curved sliding route for premium entrance geometry and circulation control.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-telescoping-emt",
        label: "Telescoping sliding door EMT",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Telescoping sliding family for constrained openings and efficient movement.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-escape-hmf-ft",
        label: "Escape route sliding door HM-F FT",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Escape-route-ready sliding family for safety-led entrance planning.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-heavymaster-hm",
        label: "heavyMaster HM",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Heavy-duty sliding route for demanding architectural entrance applications.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-economaster-em",
        label: "econoMaster EM",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Economy-minded sliding family for controlled daily circulation.",
        previewEyebrow: "Sliding Doors",
      }),
      createFamilyLeaf({
        key: "auto-sliding-compactmaster-cm",
        label: "compactMaster CM",
        section: "automatic-operators",
        familySlug: "sliding-doors",
        description: "Compact sliding configuration for tighter entrance footprints.",
        previewEyebrow: "Sliding Doors",
      }),
    ],
  },
  {
    label: "Controlled Physical Access",
    description: "Guided access, barriers and turnstile-led secure circulation.",
    href: createFamilyHref("automatic-operators", "controlled-physical-access"),
    items: [
      createFamilyLeaf({
        key: "auto-access-reader-posts",
        label: "Reader posts and pedestrian guiding bar",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Supporting reader-post and guiding-bar systems for managed access layouts.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-gsi-security-curved",
        label: "GSI security curved sliding door",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Security-led sliding access route within the broader controlled-entry family.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-full-height-turnstile",
        label: "Full-height turnstile",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Full-height turnstile solution for secure high-control entry points.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-sensor-barriers",
        label: "Sensor barriers",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Barrier systems for sensor-led guided access and controlled throughput.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-swing-gates",
        label: "Swing gates",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Controlled swing-gate systems for managed pedestrian movement.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-turnstiles",
        label: "Turnstiles",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Turnstile systems for secure circulation and controlled entry volumes.",
        previewEyebrow: "Controlled Physical Access",
      }),
      createFamilyLeaf({
        key: "auto-access-3-arm-2-arm-turnstiles",
        label: "3-arm / 2-arm turnstiles",
        section: "automatic-operators",
        familySlug: "controlled-physical-access",
        description: "Tripod-style turnstiles grouped under the controlled physical access route.",
        previewEyebrow: "Controlled Physical Access",
      }),
    ],
  },
  {
    label: "Revolving Doors",
    description: "Security, standard and all-glass revolving entrance routes.",
    href: createFamilyHref("automatic-operators", "revolving-doors"),
    items: [
      createFamilyLeaf({
        key: "auto-revolving-gsi-security",
        label: "GSI security revolving door",
        section: "automatic-operators",
        familySlug: "revolving-doors",
        description: "Security revolving door route for controlled premium entrances.",
        previewEyebrow: "Revolving Doors",
      }),
      createFamilyLeaf({
        key: "auto-revolving-ggr-large-capacity",
        label: "GGR large-capacity revolving door",
        section: "automatic-operators",
        familySlug: "revolving-doors",
        description: "Large-capacity revolving system for higher throughput public entries.",
        previewEyebrow: "Revolving Doors",
      }),
      createFamilyLeaf({
        key: "auto-revolving-ggg-all-glass",
        label: "GGG all-glass revolving door",
        section: "automatic-operators",
        familySlug: "revolving-doors",
        description: "All-glass revolving family for premium architectural entrance expression.",
        previewEyebrow: "Revolving Doors",
      }),
      createFamilyLeaf({
        key: "auto-revolving-gra-graf-standard",
        label: "GRA and GRA-F standard revolving door",
        section: "automatic-operators",
        familySlug: "revolving-doors",
        description: "Standard revolving door families for dependable premium circulation.",
        previewEyebrow: "Revolving Doors",
      }),
    ],
  },
];

const automaticOperatorsSupportGroups: HeaderNavigationGroup[] = [
  {
    label: "Swing Door Drives",
    description: "Accessible swing operators and coordinated door-drive routes.",
    href: createFamilyHref("automatic-operators", "swing-door-drives"),
    items: [
      createProductLeaf({
        key: "auto-swing-dtn-80",
        slug: "swing-door-drives",
        label: "DTN 80",
        previewEyebrow: "Swing Door Drives",
        previewTitle: "DTN 80",
      }),
    ],
  },
  {
    label: "All Glass Systems",
    description: "shopMaster routes for premium all-glass movement systems.",
    href: createFamilyHref("automatic-operators", "all-glass-systems"),
    items: [
      createProductLeaf({
        key: "auto-all-glass-shopmaster-gsw-a",
        slug: "sliding-doors",
        label: "shopMaster GSW-A",
        description: "All-glass system for coordinated architectural entrance movement.",
        previewEyebrow: "All Glass Systems",
        previewTitle: "shopMaster GSW-A",
      }),
      createFamilyLeaf({
        key: "auto-all-glass-shopmaster-gsw-m-g30",
        label: "shopMaster GSW-M G30",
        section: "automatic-operators",
        familySlug: "all-glass-systems",
        description: "All-glass family for premium coordinated entrances.",
        previewEyebrow: "All Glass Systems",
      }),
      createFamilyLeaf({
        key: "auto-all-glass-shopmaster-gsw-m",
        label: "shopMaster GSW-M",
        section: "automatic-operators",
        familySlug: "all-glass-systems",
        description: "Supporting all-glass system family for premium movement applications.",
        previewEyebrow: "All Glass Systems",
      }),
    ],
  },
  {
    label: "Automatic Pulse Generators & Sensors",
    description: "Activation devices, safety sensors and control-input layers.",
    href: createFamilyHref(
      "automatic-operators",
      "automatic-pulse-generators-and-sensors",
    ),
    items: [
      createFamilyLeaf({
        key: "auto-sensors-activation-devices",
        label: "Activation Devices",
        section: "automatic-operators",
        familySlug: "automatic-pulse-generators-and-sensors",
        description: "Activation and trigger devices for coordinated automatic entrances.",
        previewEyebrow: "Pulse Generators & Sensors",
      }),
      createFamilyLeaf({
        key: "auto-sensors-safety-sensors",
        label: "Safety Sensors",
        section: "automatic-operators",
        familySlug: "automatic-pulse-generators-and-sensors",
        description: "Safety sensor layers for automatic entrances and protected circulation.",
        previewEyebrow: "Pulse Generators & Sensors",
      }),
      createFamilyLeaf({
        key: "auto-sensors-control-inputs",
        label: "Control Inputs",
        section: "automatic-operators",
        familySlug: "automatic-pulse-generators-and-sensors",
        description: "Control inputs, push buttons and supporting automatic-entry triggers.",
        previewEyebrow: "Pulse Generators & Sensors",
      }),
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
