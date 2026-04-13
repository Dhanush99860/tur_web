export type ThemeMode = "light" | "dark" | "system";

export type LinkItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type Metric = {
  value: string;
  label: string;
};

export type OfficeLocation = {
  name: string;
  region: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  legalName: string;
  description: string;
  baseUrl: string;
  locale: string;
  themeColor: string;
  themeColorDark: string;
  ogImage: string;
  logoPath: string;
  logoWhitePath: string;
  manifestPath: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  locationLabel: string;
  officeRegionLabel: string;
  announcementItems: string[];
  offices: OfficeLocation[];
  trustSignals: string[];
  keywords: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
};

export type NavigationGroupItem = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  note?: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  description: string;
  items: NavigationGroupItem[];
};

export type NavigationSupport = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type NavigationItem = LinkItem & {
  groups?: NavigationGroup[];
  support?: NavigationSupport;
};

export type FooterLinkGroup = {
  title: string;
  links: LinkItem[];
};

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type CatalogSectionSlug = "door-hardware" | "automatic-operators";

export type CatalogCard = {
  title: string;
  description: string;
  scope?: string;
  eyebrow?: string;
  href?: string;
  ctaLabel?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
};

export type CatalogSectionGrid = {
  eyebrow: string;
  title: string;
  description: string;
};

export type CatalogSectionStructureStep = {
  label: string;
  title: string;
  description: string;
};

export type CatalogSectionStructure = {
  eyebrow: string;
  title: string;
  description: string;
  steps: CatalogSectionStructureStep[];
};

export type CatalogSectionFunctionItem = {
  title: string;
  description: string;
};

export type CatalogSectionFunctionMap = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  items: CatalogSectionFunctionItem[];
};

export type CatalogSectionFaqItem = {
  question: string;
  answer: string;
};

export type CatalogSectionFaq = {
  eyebrow: string;
  title: string;
  description: string;
  items: CatalogSectionFaqItem[];
};

export type CatalogFamily = {
  section: CatalogSectionSlug;
  slug: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  cards: CatalogCard[];
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  supportTitle: string;
  supportBody: string;
  keywords: string[];
};

export type CatalogSection = {
  slug: CatalogSectionSlug;
  title: string;
  description: string;
  intro: string;
  organizationLine?: string;
  supportSignals?: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  routeCards?: CatalogCard[];
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  familyGrid: CatalogSectionGrid;
  functionMap?: CatalogSectionFunctionMap;
  structure: CatalogSectionStructure;
  supportTitle: string;
  supportBody: string;
  faq?: CatalogSectionFaq;
  keywords: string[];
  updatedAt?: string;
};

export type CatalogCollection = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  linkHref: string;
  highlights: string[];
  accentTone: string;
  section: CatalogSectionSlug;
};

export type Product = {
  slug: string;
  title: string;
  vendor: string;
  section: CatalogSectionSlug;
  familySlug: string;
  familyTitle: string;
  category: string;
  description: string;
  shortDescription: string;
  overview: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  features: string[];
  applications: string[];
  finishOptions: string[];
  resourceHref?: string;
  badge?: string;
  inquirySubject: string;
  relatedSlugs: string[];
  updatedAt?: string;
};

export type HomeHeroSlide = {
  productSlug: string;
  label: string;
  title: string;
  image: string;
  imageAlt: string;
};

export type HomeHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: string;
  imageAlt: string;
  slides: HomeHeroSlide[];
  supportActions: LinkItem[];
  metrics: Metric[];
};

export type ResourceCard = {
  title: string;
  category: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
};

export type StoryCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type CollectionTab = {
  label: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  productSlug: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
  href?: string;
};

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  updatedAt?: string;
};

export type DownloadResource = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
};

export type ContactOffice = {
  title: string;
  description: string;
  eyebrow: string;
  href?: string;
  ctaLabel?: string;
};
