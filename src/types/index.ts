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
  priority?: "primary" | "secondary";
  href?: string;
  ctaLabel?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
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

export type CatalogFamilyHierarchyStep = {
  label: string;
  title: string;
};

export type CatalogFamilyHierarchy = {
  eyebrow: string;
  title: string;
  description: string;
  routeLine?: string;
  steps: CatalogFamilyHierarchyStep[];
};

export type CatalogFamilyDetailBridge = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  items: CatalogCard[];
};

export type CatalogFamilySupportPanel = {
  title: string;
  items: string[];
};

export type CatalogFamilyHub = {
  companionTag?: string;
  organizationLine?: string;
  heroImageClassName?: string;
  routeGrid: CatalogSectionGrid;
  functionMap: CatalogSectionFunctionMap;
  hierarchy: CatalogFamilyHierarchy;
  detailBridge: CatalogFamilyDetailBridge;
  supportPanel: CatalogFamilySupportPanel;
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

export type CatalogFamilyApplication = {
  title: string;
  description: string;
};

export type CatalogFamilyFeaturePoint = {
  title: string;
  description: string;
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
  familyHub?: CatalogFamilyHub;
  applications?: CatalogFamilyApplication[];
  featurePoints?: CatalogFamilyFeaturePoint[];
  faq?: CatalogSectionFaqItem[];
  relatedFamilySlugs?: string[];
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

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductComparisonSpec = {
  title?: string;
  columns: string[];
  rows: {
    label: string;
    values: string[];
  }[];
};

export type ProductModelRow = {
  modelNo: string;
  inches?: string;
  mm?: string;
  note?: string;
};

export type ProductVariant = {
  key: string;
  label: string;
  description?: string;
  series?: string;
  modelRows?: ProductModelRow[];
  finishOptions?: string[];
  howToOrder?: string;
  orderCodeExample?: string;
  options?: string[];
  specs?: ProductSpec[];
};

export type TechnicalDrawing = {
  title: string;
  variant?: string;
  image: string;
  alt: string;
  caption: string;
};

export type HowToOrderColumn = {
  label: string;
  values: string[];
};

export type HowToOrderTable = {
  columns: HowToOrderColumn[];
  note?: string;
};

export type ProductAccessory = {
  label: string;
  status: "Standard" | "Optional";
  note?: string;
};

export type ProductInstallationDetail = {
  title: string;
  description?: string;
  image: string;
  alt: string;
};

export type ProductDetailImage = {
  title: string;
  image: string;
  alt: string;
  caption: string;
};

export type ProductFeatureList = {
  title: string;
  items: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
};

export type ProductSolutionComponent = {
  title: string;
  image?: string;
  imageAlt?: string;
  bullets: string[];
};

export type Product = {
  slug: string;
  title: string;
  vendor: string;
  section: CatalogSectionSlug;
  familySlug: string;
  familyTitle: string;
  /** Slug of the route group this product belongs to (e.g. "hang-the-door") */
  routeGroupSlug?: string;
  /** Display title of the route group (e.g. "Hang The Door") */
  routeGroupTitle?: string;
  /** Additional route group slugs this product also appears under (canonical route remains primary) */
  additionalRouteGroupSlugs?: string[];
  /** True when this record IS a route group listing page, not a real product */
  isRouteGroup?: boolean;
  /** True when this is an option/accessory-only page, not a stand-alone product */
  isOptionOnly?: boolean;
  /** Set false to exclude from sitemap and product listings */
  isIndexable?: boolean;
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
  /** Structured technical specification rows */
  specs?: ProductSpec[];
  /** Multi-column comparison table for products with 1-leaf/2-leaf or 2-leaf/4-leaf configurations */
  comparisonSpecs?: ProductComparisonSpec;
  /** Model number table rows */
  modelRows?: ProductModelRow[];
  /** "How to order" instructions string */
  howToOrder?: string;
  /** Example order code, e.g. "TA4460.DA.626" */
  orderCodeExample?: string;
  /** Single/Double Action or other variants merged into one page */
  variants?: ProductVariant[];
  /** URL path to a technical drawing or diagram image */
  diagram?: string;
  /** Per-variant technical drawings with captions, rendered after the Variants section */
  technicalDrawings?: TechnicalDrawing[];
  /** Structured column-based how-to-order reference table */
  howToOrderTable?: HowToOrderTable;
  /** Available factory options, e.g. NRP, ETW, PIC, RC */
  availableOptions?: string[];
  /** Accessories with Standard / Optional status */
  accessories?: ProductAccessory[];
  /** Ordered installation method sections — each rendered with its own heading, description, and diagram */
  installationDetails?: ProductInstallationDetail[];
  /** Product view / function images rendered as a labelled image grid */
  detailImages?: ProductDetailImage[];
  /** Override the "Model Numbers" section heading (e.g. "TA2100 Series Standard Functions") */
  modelSectionTitle?: string;
  /** Short product brief paragraph, rendered as its own section after the overview panel */
  productBrief?: string;
  /** Feature lists with optional image, rendered between Overview and Technical Details */
  featureLists?: ProductFeatureList[];
  /** Solution component cards (image + bullets), rendered after featureLists */
  solutionComponents?: ProductSolutionComponent[];
  /** Feature-list sections rendered after Technical Details and Technical Drawings (e.g. Standard Mortise Cylinders, Certifications, Strike Plate) */
  postSpecsFeatureLists?: ProductFeatureList[];
  /** Cylinder / code legend rendered after the How To Order section */
  cylinderLegend?: ProductSpec[];
  /** Override the default "Technical Drawing(s)" section heading */
  technicalDrawingsSectionTitle?: string;
  resourceHref?: string;
  sourceOldUrl?: string;
  badge?: string;
  inquirySubject: string;
  relatedSlugs: string[];
  updatedAt?: string;
};

export type CatalogRouteGroup = {
  section: CatalogSectionSlug;
  familySlug: string;
  familyTitle: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  keywords: string[];
  legacyEntryCount?: number;
};

export type HomeHeroSlide = {
  productSlug: string;
  label: string;
  title: string;
  description?: string;
  href?: string;
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
