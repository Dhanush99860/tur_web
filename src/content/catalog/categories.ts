import { createInquiryHref } from "@/content/site/site-config";
import { catalogSections, getCatalogSection } from "@/content/catalog/sections";
import type { CatalogCard, CatalogFamily, CatalogSectionSlug } from "@/types";

const productHref = (slug: string) => `/products/${slug}`;
const routeGroupHref = (section: string, family: string, group: string) =>
  `/${section}/${family}/${group}`;

const doorHardwareFamilies: CatalogFamily[] = [
  {
    section: "door-hardware",
    slug: "american-standard",
    title: "American Standard",
    description:
      "Coordinated hardware families for hanging, controlling, securing and furnishing architectural door sets.",
    intro:
      "American Standard organizes the core door functions used across commercial, hospitality, healthcare and institutional specifications, helping teams move from family-level coordination into more specific child routes.",
    image: "/tur/categories/default-2026954824201015.jpg",
    imageAlt: "Coordinated American Standard lever, cylinder and mortise lock hardware from TUR",
    highlights: [
      "7 coordinated routes",
      "One clear family entry point",
      "Move from family to the right child route before reviewing deeper detail pages",
    ],
    cards: [
      {
        title: "Hang The Door",
        description:
          "Coordinated hanging hardware for leaf movement, support and opening preparation.",
        href: routeGroupHref("door-hardware", "american-standard", "hang-the-door"),
        eyebrow: "Primary Route",
        priority: "primary",
        scope:
          "Includes hinges, concealed hinges, rising hinges and related hanging routes where dedicated pages exist.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1260902568201015.jpg",
        imageAlt: "American Standard hanging hardware — hinges and door preparation components",
        imageClassName: "object-left-center",
      },
      {
        title: "Control The Door",
        description:
          "Dependable movement, closing behavior and control hardware for coordinated openings.",
        href: routeGroupHref("door-hardware", "american-standard", "control-the-door"),
        eyebrow: "Primary Route",
        priority: "primary",
        scope:
          "Includes closers, floor-spring and controlled movement routes where available.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-319952360201015.jpg",
        imageAlt: "American Standard door closer — overhead control hardware",
        imageClassName: "object-[24%_center]",
      },
      {
        title: "Secure The Door",
        description: "Security-led hardware for protected and controlled openings.",
        href: routeGroupHref("door-hardware", "american-standard", "secure-the-door"),
        eyebrow: "Primary Route",
        priority: "primary",
        scope:
          "Includes sash locks, latch locks, deadbolts, hook locks and related securing routes.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1292769047201015.jpg",
        imageAlt: "American Standard mortise lock and cylinder — secure door hardware",
        imageClassName: "object-[32%_center]",
      },
      {
        title: "Bolt The Door",
        description: "Dedicated closure and bolting solutions for coordinated openings.",
        href: routeGroupHref("door-hardware", "american-standard", "bolt-the-door"),
        eyebrow: "Secondary Route",
        priority: "secondary",
        scope:
          "Includes bolting hardware used alongside lock and latch coordination.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-517696467201015.jpg",
        imageAlt: "American Standard flush bolt — door bolting hardware",
        imageClassName: "object-left-center",
      },
      {
        title: "Furnish The Door",
        description:
          "Finishing hardware that completes the visual and tactile door-set package.",
        href: routeGroupHref("door-hardware", "american-standard", "furnish-the-door"),
        eyebrow: "Primary Route",
        priority: "primary",
        scope:
          "Includes lever, trim and furnishing-led routes where detail pages exist.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1228180766201015.jpg",
        imageAlt: "American Standard lever handle and trim hardware",
        imageClassName: "object-[58%_center]",
      },
      {
        title: "Emergency Exits",
        description:
          "Life-safety and exit hardware for compliant emergency egress conditions.",
        href: routeGroupHref("door-hardware", "american-standard", "emergency-exits"),
        eyebrow: "Secondary Route",
        priority: "secondary",
        scope: "Includes rim, vertical rod and related exit-device routes.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-848766351201015.jpg",
        imageAlt: "American Standard emergency exit hardware — panic bar and life-safety devices",
        imageClassName: "object-[24%_center]",
      },
      {
        title: "Ancillary Products",
        description:
          "Supporting hardware and accessories used to complete the coordinated package.",
        href: routeGroupHref("door-hardware", "american-standard", "ancillary-products"),
        eyebrow: "Secondary Route",
        priority: "secondary",
        scope:
          "Catalog support available where dedicated detail pages are still being staged.",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-355604123201015.jpg",
        imageAlt: "American Standard ancillary hardware — accessories and supporting components",
        imageClassName: "object-left-center",
      },
    ],
    primaryCta: {
      label: "Request American Standard Details",
      href: createInquiryHref("American Standard Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Specification-led American Standard coordination",
    supportBody:
      "Use this family page as the route into dedicated child pages or contact TUR for project coordination, catalog support, approvals and technical follow-up.",
    applications: [
      { title: "Commercial Offices", description: "Coordinated hardware packages for open-plan and cellular office environments requiring consistent specification across multiple door functions." },
      { title: "Healthcare Facilities", description: "Hospitals, clinics and care homes where hygiene, accessibility and dependable operation are critical across all door types." },
      { title: "Hospitality", description: "Hotels, resorts and serviced apartments requiring complete hardware packages for guestrooms, suites and service routes." },
      { title: "Institutional Buildings", description: "Schools, universities and government facilities where specification coordination, durability and compliance matter." },
      { title: "Retail & Mixed-Use", description: "Shopping centres and mixed-use developments with high-traffic entrances and varied circulation requirements." },
    ],
    featurePoints: [
      { title: "7 coordinated routes in one family", description: "From hanging and closing to securing, bolting and furnishing — a complete door-set specification under one family." },
      { title: "Specification-led across all project types", description: "Suited to commercial, healthcare, hospitality and institutional hardware schedules with consistent finish and function." },
      { title: "Clear functional hierarchy", description: "Choose the function route, then go deeper into product-level detail — no guesswork in the specification process." },
      { title: "Project-wide coordination", description: "Designed for projects requiring consistent hardware language across all door types in a building." },
    ],
    faq: [
      { question: "What does American Standard cover?", answer: "American Standard organises core door-set hardware by function: Hang, Control, Secure, Bolt, Furnish, Emergency Exits and Ancillary. It is TUR's primary hardware family for commercial, hospitality and institutional specifications in the American Standard format." },
      { question: "How do I choose the right route?", answer: "Start with the door function you need to specify. If you are looking at closing hardware, enter Control The Door. For locking, enter Secure The Door. Each route then has its own product-level detail pages." },
      { question: "Can American Standard hardware be specified project-wide?", answer: "Yes — the family is specifically designed for project-wide coordination, where consistent finish, function and quality are required across all door types in a building." },
      { question: "Does TUR provide specification support for American Standard?", answer: "Yes — TUR offers specification-led support including hardware schedules, approval documentation and project coordination. Contact TUR for technical assistance." },
    ],
    relatedFamilySlugs: ["european-ironmongery", "glass-hardware", "access-control"],
    familyHub: {
      companionTag: "American Standard",
      heroImageClassName: "object-[34%_center]",
      organizationLine:
        "American Standard is structured by opening function: hanging, controlling, securing, bolting, furnishing, life-safety egress and supporting package components.",
      routeGrid: {
        eyebrow: "American Standard Routes",
        title: "Choose the right child route",
        description:
          "Use the family as the coordination layer, then move into the route that matches the opening function before reviewing deeper detail content.",
      },
      functionMap: {
        eyebrow: "Specified by Function",
        title: "Map the opening by function",
        description:
          "American Standard organizes the opening by function: hanging, controlling, securing, bolting, furnishing, emergency egress and supporting package components.",
        note:
          "Start with the function requirement, then move into the right American Standard route.",
        items: [
          {
            title: "Hang the opening",
            description:
              "Use hanging routes for hinges, pivots and coordinated leaf support hardware.",
          },
          {
            title: "Control the opening",
            description:
              "Use control routes for closers, floor springs and managed movement behavior.",
          },
          {
            title: "Secure the opening",
            description:
              "Use secure routes for locks, latches, deadbolts and controlled closure security.",
          },
          {
            title: "Bolt the opening",
            description:
              "Use bolt routes where dedicated bolting hardware is required in the package.",
          },
          {
            title: "Furnish the opening",
            description:
              "Use furnishing routes for handles, trim and final hardware expression.",
          },
          {
            title: "Exit safely",
            description:
              "Use emergency-exit routes where compliant life-safety hardware is required.",
          },
          {
            title: "Complete the package",
            description:
              "Use ancillary routes for supporting components that complete the coordinated schedule.",
          },
        ],
      },
      hierarchy: {
        eyebrow: "Structured Landing Pages",
        title: "Choose the right route",
        description:
          "Start with the family, move into the right child route, then go deeper only where a dedicated detail page exists.",
        routeLine: "American Standard -> Route -> Detail",
        steps: [
          {
            label: "Family",
            title: "Start with American Standard",
          },
          {
            label: "Route",
            title: "Choose the right function route",
          },
          {
            label: "Detail",
            title: "Go deeper only where needed",
          },
        ],
      },
      detailBridge: {
        eyebrow: "Detail Routes",
        title: "Some routes already continue into dedicated detail pages",
        description:
          "Use American Standard as the family overview, then move into child routes that already contain deeper model-level pages where TUR has staged dedicated content.",
        note:
          "Emergency Exits and the remaining American Standard routes can still be coordinated through inquiry-led support while dedicated detail content is being staged.",
        items: [
          {
            title: "Hang The Door",
            description:
              "A route for hanging hardware families including spring hinges, full mortise hinges, continuous hinges and concealed bearing hinges.",
            href: routeGroupHref("door-hardware", "american-standard", "hang-the-door"),
            ctaLabel: "Explore Route",
            image: "/tur/categories/default-1260902568201015.jpg",
            imageAlt: "American Standard hanging hardware — hinges and door preparation",
            imageClassName: "object-left-center",
          },
          {
            title: "Control The Door",
            description:
              "A route for closer-led coordination, managed movement and controlled closing behavior.",
            href: routeGroupHref("door-hardware", "american-standard", "control-the-door"),
            ctaLabel: "Explore Route",
            image: "/tur/categories/default-319952360201015.jpg",
            imageAlt: "American Standard door closer — overhead door control hardware",
            imageClassName: "object-[24%_center]",
          },
          {
            title: "Secure The Door",
            description:
              "A route for lock, latch and controlled-opening security families.",
            href: routeGroupHref("door-hardware", "american-standard", "secure-the-door"),
            ctaLabel: "Explore Route",
            image: "/tur/categories/default-1292769047201015.jpg",
            imageAlt: "American Standard mortise lock and cylinder hardware",
            imageClassName: "object-[32%_center]",
          },
        ],
      },
      supportPanel: {
        title: "Support Focus",
        items: [
          "Family guidance",
          "Package coordination",
          "Approval support",
          "Technical follow-up",
        ],
      },
    },
    keywords: [
      "american standard",
      "door hardware",
      "hang the door",
      "control the door",
      "secure the door",
      "bolt the door",
      "furnish the door",
      "emergency exits",
      "ancillary products",
    ],
  },
  {
    section: "door-hardware",
    slug: "european-ironmongery",
    title: "European Ironmongery",
    description:
      "Premium ironmongery families for architectural door sets, finish coordination and furnishing packages.",
    intro:
      "European Ironmongery brings together core door functions and design-conscious hardware families suited to premium specifications.",
    image: "/tur/european-ironmongery/furnish-the-door-lever-handle/lever-handle-te1920-966/lever-handle-te1920-966-main.jpg",
    imageAlt: "European Ironmongery lever and lockset hardware from TUR",
    highlights: ["Bolt The Door", "Cylinders", "TE1910 / TE1920 Lever Handles"],
    cards: [
      {
        title: "Hang The Door",
        description: "Premium hinges and pivot sets within the European ironmongery route.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "hang-the-door"),
        eyebrow: "Ironmongery Route",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/hang-the-door/te4100-series/te4100-series-main.jpg",
        imageAlt: "TE4100 European ironmongery hinge — premium door hanging hardware",
      },
      {
        title: "Control The Door",
        description: "Floor springs and closers for European ironmongery door sets.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "control-the-door"),
        eyebrow: "Ironmongery Route",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/control-the-door/door-closer-rack-pinion-track-arm-te7763b/door-closer-rack-pinion-track-arm-te7763b-main.jpg",
        imageAlt: "TE7763B rack and pinion closer — European ironmongery control hardware",
      },
      {
        title: "Secure The Door",
        description: "Multi-point locks and mortise locksets within the European ironmongery route.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "secure-the-door"),
        eyebrow: "Ironmongery Route",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/secure-the-door/te1400-series-mortise-sash-lock-premium/te1400-series-mortise-sash-lock-premium-main.jpg",
        imageAlt: "TE1400 European ironmongery mortise lockset — premium door security hardware",
      },
      {
        title: "Cylinders",
        description: "Cylinder options for secure and coordinated ironmongery setups.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "cylinders"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/cylinders/te3600-series/te3600-series-main.jpg",
        imageAlt: "TE3600 Euro profile cylinder — European ironmongery cylinder hardware",
      },
      {
        title: "Furnish The Door",
        description:
          "Pull plates, pull handles and special handles from the European Ironmongery furnishing route.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "furnish-the-door"),
        eyebrow: "Featured Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/furnish-the-door/pull-plates-european/pull-plates-european-main.jpg",
        imageAlt: "European Ironmongery pull plates and pull handles — furnishing hardware",
      },
      {
        title: "Bolt The Door",
        description: "Premium bolting solutions for European ironmongery door sets.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "bolt-the-door"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/bolt-the-door/lever-action-flush-bolt-european/lever-action-flush-bolt-european-main.jpg",
        imageAlt: "European ironmongery lever action flush bolt — door bolting hardware",
      },
      {
        title: "Ancillary Products",
        description: "Completion accessories for European ironmongery packages.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "ancillary-products"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/ancillary-products/door-stop-european/door-stop-european-main.jpg",
        imageAlt: "European ironmongery ancillary products — door stops, indicators and accessories",
      },
      {
        title: "Emergency Exits",
        description: "Finish-coordinated panic bars for European ironmongery specifications.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "emergency-exits"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/emergency-exits/te9800-series-premium/te9800-series-premium-main.jpg",
        imageAlt: "TE9800 European ironmongery exit device — finish-coordinated emergency exit",
      },
      {
        title: "Furnish The Door Lever Handle",
        description: "Lever handle family for premium door furnishing applications.",
        href: routeGroupHref("door-hardware", "european-ironmongery", "furnish-the-door-lever-handle"),
        eyebrow: "Featured Family",
        ctaLabel: "Explore Route",
        image: "/tur/european-ironmongery/furnish-the-door-lever-handle/lever-handle-te1910-968/lever-handle-te1910-968-main.jpg",
        imageAlt: "TE1910 lever handle — European Ironmongery furnishing hardware",
      },
    ],
    primaryCta: {
      label: "Request Ironmongery Details",
      href: createInquiryHref("European Ironmongery Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    supportTitle: "Premium ironmongery with specification support",
    supportBody:
      "This family overview provides a clear route into cylinders, lever designs and bolting solutions while keeping broader specification support one step away.",
    applications: [
      { title: "Premium Hospitality", description: "5-star hotels, resorts and luxury serviced apartments requiring finish-matched ironmongery across guestroom, suite and public area door sets." },
      { title: "Executive Offices", description: "Corporate headquarters and boardrooms where refined lever designs and coordinated finishes are part of the design brief." },
      { title: "Institutional & Public Buildings", description: "Universities, embassies and government buildings requiring architectural-grade hardware with consistent finish programmes." },
      { title: "High-End Residential", description: "Luxury residential developments and common areas where quality and visual coherence across the ironmongery schedule matter." },
      { title: "Healthcare Premium", description: "Private hospitals and clinics with specification-grade closing, securing and furnishing requirements." },
    ],
    featurePoints: [
      { title: "Complete 9-route ironmongery programme", description: "Covering hanging, controlling, securing, bolting, furnishing, emergency egress and ancillary accessories in a single family." },
      { title: "Satin Chrome and Polished Chrome finishes", description: "Consistent finish options across the full programme for project-wide ironmongery coordination." },
      { title: "TE1910 / TE1920 lever and knob handle designs", description: "DIN-standard lever and knob handles for architectural coordination across handles, cylinders and escutcheons." },
      { title: "Master key and cylinder suite compatible", description: "Works with cylinder suite systems for project-wide access management across keyed openings." },
    ],
    faq: [
      { question: "What is European Ironmongery?", answer: "European Ironmongery is TUR's premium hardware programme organised by door function — covering hanging, controlling, securing, bolting, furnishing, emergency egress and ancillary accessories. It is specified for hospitality, executive and institutional projects where finish coordination and architectural quality define the brief." },
      { question: "What finish options are available?", answer: "The primary finishes are Satin Chrome and Polished Chrome, designed to coordinate consistently across lever handles, cylinders, escutcheons and auxiliary hardware within a single project schedule." },
      { question: "How does European Ironmongery differ from American Standard?", answer: "European Ironmongery uses DIN-standard lever sets and European mortise locks, prioritising refined finish coordination for premium specifications. American Standard is suited to broader commercial applications. Both organise hardware by door function." },
      { question: "Can TUR provide a full ironmongery schedule?", answer: "Yes — TUR can prepare coordinated ironmongery schedules covering all door types in a project, with finish matching across all routes. Contact TUR's specification team for project-level support." },
    ],
    relatedFamilySlugs: ["american-standard", "glass-hardware", "access-control"],
    keywords: ["european ironmongery", "premium ironmongery", "lever handle", "cylinders"],
  },
  {
    section: "door-hardware",
    slug: "glass-hardware",
    title: "Glass Hardware",
    description:
      "Frameless and all-glass fittings for hinges, clips, patch fittings, pull handles and supporting glass applications.",
    intro:
      "Glass Hardware groups contemporary fitting families for frameless entrances, partitions and premium all-glass door applications.",
    image: "/tur/categories/default-834056193201116.jpg",
    imageAlt: "Glass hardware solutions from TUR — hinges, patch fittings and pull handles",
    highlights: ["Glass Hinge & Glass Clip", "Patch Fitting", "Pull Handle"],
    cards: [
      {
        title: "Glass Hinge & Glass Clip",
        description: "Frameless hinge and clip hardware for clean-lined glass applications.",
        href: routeGroupHref("door-hardware", "glass-hardware", "glass-hinge-glass-clip"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-2080527890201111.jpg",
        imageAlt: "TG.GH glass hinges and clips for frameless architectural glass applications",
      },
      {
        title: "Bathroom Handle & Glass Knob",
        description: "Handles and knobs for bathroom and partition glass applications.",
        href: routeGroupHref("door-hardware", "glass-hardware", "bathroom-handle-glass-knob"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1966218428201111.jpg",
        imageAlt: "TG.BH bathroom handle and TG.GK glass knob — glass hardware",
      },
      {
        title: "Patch Fitting",
        description: "Hydraulic patch fitting coordination for frameless glass doors.",
        href: routeGroupHref("door-hardware", "glass-hardware", "patch-fitting"),
        eyebrow: "Featured Family",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-45651367201111.jpg",
        imageAlt: "TG.PF patch fitting — hydraulic coordination for frameless glass doors",
      },
      {
        title: "Pull Handle",
        description: "Architectural pull handles for glass and premium door applications.",
        href: routeGroupHref("door-hardware", "glass-hardware", "pull-handle"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-769966786201111.jpg",
        imageAlt: "TG.PH architectural pull handles for glass and premium door applications",
      },
      {
        title: "Lipseal",
        description: "Lipseal edge sealing for frameless glass doors and partitions.",
        href: routeGroupHref("door-hardware", "glass-hardware", "lipseal"),
        eyebrow: "Family",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1292103519201111.jpg",
        imageAlt: "TG.LS lipseal — glass edge sealing for frameless glass doors and partitions",
      },
    ],
    primaryCta: {
      label: "Request Glass Hardware Details",
      href: createInquiryHref("Glass Hardware Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Frameless hardware for architectural glass applications",
    supportBody:
      "Use these family links to move into available product pages or request broader glass hardware coordination for project-led entrances and partitions.",
    applications: [
      { title: "Frameless Glass Entrances", description: "Retail, corporate and hospitality entrances using frameless glass doors requiring specialist hinges, patch fittings and pull handles." },
      { title: "Office Partitions", description: "Open-plan and cellular office glass partitions using clips, hinges and handles suited to architectural glass systems." },
      { title: "Hospitality & Amenity Spaces", description: "Shower screens, bathroom partitions and spa glass applications requiring handles, knobs and specialist glass fittings." },
      { title: "Retail Frontage", description: "Shopfront and storefront glass doors requiring patch fittings, pull handles and frameless hardware with architectural quality." },
      { title: "Premium Residential", description: "High-end apartments and common areas with frameless glass entrance and partition specifications." },
    ],
    featurePoints: [
      { title: "5 specialist hardware families", description: "Hinges, clips, patch fittings, pull handles, knobs and Lipseal edge sealing — a complete glass hardware programme." },
      { title: "Hydraulic patch fitting", description: "Controlled glass door movement for frameless office and retail entrances — suitable for most commercial glass weights." },
      { title: "Lipseal glass edge sealing", description: "Weather resistance, acoustic performance and clean visual presentation at the glass leaf perimeter." },
      { title: "Suitable for wet and dry areas", description: "Bathroom Handle and Glass Knob hardware is corrosion-resistant and suited to bathroom, shower and spa applications." },
    ],
    faq: [
      { question: "What is Glass Hardware?", answer: "Glass Hardware is TUR's specialist range for frameless and all-glass applications — covering hinges, clips, patch fittings, pull handles, knobs and edge sealing for frameless entrances, partitions and premium glass door systems." },
      { question: "What is the difference between a patch fitting and a glass hinge?", answer: "A patch fitting is a hydraulic floor-mounted fitting that controls the pivoting of a frameless glass door, providing both support and controlled movement. Glass hinges are surface-mounted and suit lighter frameless applications where a concealed pivot is not required." },
      { question: "Do you supply glass edge sealing?", answer: "Yes — Lipseal provides glass-edge sealing at the door leaf perimeter, providing weather resistance, acoustic performance and a clean visual finish for frameless glass entrances and partitions." },
      { question: "Can glass hardware be used in wet areas?", answer: "Yes — the Bathroom Handle and Glass Knob range is specifically suited to bathroom, shower and spa glass applications, with corrosion-resistant specifications for wet-area use." },
    ],
    relatedFamilySlugs: ["american-standard", "european-ironmongery", "access-control"],
    keywords: ["glass hardware", "frameless hardware", "patch fitting", "pull handle"],
  },
  {
    section: "door-hardware",
    slug: "access-control",
    title: "Access Control",
    description:
      "Integrated locking, release devices, E-ACCESS systems and accessories for secure and coordinated entry points.",
    intro:
      "Access Control covers the locking, release and electronic access layers needed to coordinate secure opening packages across commercial and institutional projects.",
    image: "/tur/categories/default-74293256201015.jpg",
    imageAlt: "Access control and electromagnetic locking systems from TUR",
    highlights: ["Electromagnetic Locks", "Electric Strikes", "E-ACCESS"],
    cards: [
      {
        title: "Electromagnetic Locks",
        description: "Electromagnetic locking hardware for secure access control.",
        href: routeGroupHref("door-hardware", "access-control", "electromagnetic-locks"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-228066963201112.jpg",
        imageAlt: "TU electromagnetic locks — surface-mounted access control maglocks",
      },
      {
        title: "Electric Strikes",
        description: "Electric strike family for integrated access release.",
        href: routeGroupHref("door-hardware", "access-control", "electric-strikes"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-66092838201112.jpg",
        imageAlt: "TU electric strikes — ANSI rim strike and European mortise release hardware",
      },
      {
        title: "Armature Mounting Accessories",
        description: "Mounting brackets and accessories for electromagnetic lock installation.",
        href: routeGroupHref("door-hardware", "access-control", "armature-mounting-accessories"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-42037815201112.jpg",
        imageAlt: "Armature mounting accessories — brackets for electromagnetic lock installation",
      },
      {
        title: "Electromechanical Locking Devices",
        description: "Electromechanical locks combining mechanical bolt with electronic release.",
        href: routeGroupHref("door-hardware", "access-control", "electromechanical-locking-devices"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-973600067201112.jpg",
        imageAlt: "TU.L800 and TU.PBH-350 electromechanical locking devices",
      },
      {
        title: "E-ACCESS",
        description: "Electronic access control family for managed entry points.",
        href: routeGroupHref("door-hardware", "access-control", "e-access"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1195187513201112.jpg",
        imageAlt: "EasiProx Bluetooth and RFID access readers — E-ACCESS electronic systems",
      },
      {
        title: "Digital Keypad System",
        description: "Digital keypad systems for PIN-based standalone or networked access control.",
        href: routeGroupHref("door-hardware", "access-control", "digital-keypad-system"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-941202816201112.jpg",
        imageAlt: "TU.DG-750 digital keypad system — PIN-based access control",
      },
      {
        title: "Infrared & Wireless Exit Devices",
        description: "Infrared and wireless RTE devices for touchless access-controlled egress.",
        href: routeGroupHref("door-hardware", "access-control", "infrared-wireless-exit-devices"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-107836858201112.jpg",
        imageAlt: "TU.RTS infrared request-to-exit sensors — touchless egress devices",
      },
      {
        title: "Electromagnetic Door Holders",
        description: "Electromagnetic door holders for fire-door hold-open and smoke-control integration.",
        href: routeGroupHref("door-hardware", "access-control", "electromagnetic-door-holders"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1789777103201112.jpg",
        imageAlt: "TU.D900 electromagnetic door holders — fire door hold-open devices",
      },
      {
        title: "Access Control Accessories",
        description: "Power supplies, panels and accessories completing access control systems.",
        href: routeGroupHref("door-hardware", "access-control", "access-control-accessories"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-936568577201112.jpg",
        imageAlt: "Access control accessories — door loops, magnetic contacts and power supplies",
      },
    ],
    primaryCta: {
      label: "Request Access Control Details",
      href: createInquiryHref("Access Control Inquiry"),
    },
    secondaryCta: {
      label: "Send Project Inquiry",
      href: "/contact",
    },
    supportTitle: "Secure opening coordination across hardware and access layers",
    supportBody:
      "Access Control landing pages collect the available product pages while leaving room for broader family catalog requests where dedicated detail pages are still pending.",
    applications: [
      { title: "Corporate Offices", description: "Controlled entry management, electromagnetic locking and card access across office floors, server rooms and sensitive areas." },
      { title: "Healthcare & Hospitals", description: "Electromagnetic locks, electric strikes and E-ACCESS for managed patient and staff circulation in clinical environments." },
      { title: "Education", description: "Schools and universities requiring controlled entry at perimeter, classroom and administrative access points." },
      { title: "Government & Institutional", description: "High-security locking, electromechanical devices and keypad systems for controlled government and institutional access." },
      { title: "Industrial & Commercial", description: "Electromagnetic door holders, fire-door coordination and access accessories for industrial and service entry management." },
    ],
    featurePoints: [
      { title: "9 product families in one coordinated range", description: "Electromagnetic locks, electric strikes, electronic access, keypad systems and supporting accessories — all from one family." },
      { title: "Fail-safe and fail-secure options", description: "Electromagnetic locking options for both life-safety compliance and high-security requirements." },
      { title: "E-ACCESS integrated entry management", description: "Managed electronic access across commercial and institutional projects with credential reader and control panel integration." },
      { title: "Fire-door compatible door holders", description: "Electromagnetic door holders for hold-open with automatic release on fire alarm signal." },
    ],
    faq: [
      { question: "What is the difference between electromagnetic locks and electric strikes?", answer: "Electromagnetic locks hold the door closed using magnetic force with no mechanical latching. Electric strikes release a mechanical latch or lock when triggered by an access signal. Electromagnetic locks are simpler to install; electric strikes integrate with existing locksets." },
      { question: "What does fail-safe vs fail-secure mean?", answer: "Fail-safe means the lock releases when power is lost — used on fire exits and life-safety routes. Fail-secure means the lock holds without power — used on secure areas. The correct choice depends on the life-safety and security brief for each opening." },
      { question: "What is E-ACCESS?", answer: "E-ACCESS is TUR's electronic access control family — an integrated managed-entry solution for commercial and institutional projects covering credential readers, control panels and associated hardware." },
      { question: "Can access control integrate with building management systems?", answer: "Yes — TUR's access control range, including electromagnetic locks, electric strikes and E-ACCESS, supports integration with building management, fire alarm and security systems. Contact TUR for project-level integration guidance." },
    ],
    relatedFamilySlugs: ["sealing-systems", "american-standard", "european-ironmongery"],
    keywords: [
      "access control",
      "electromagnetic locks",
      "electric strikes",
      "electronic access",
    ],
  },
  {
    section: "door-hardware",
    slug: "sealing-systems",
    title: "Sealing Systems",
    description:
      "Door bottom, threshold and perimeter seals that support coordinated threshold performance and architectural detailing.",
    intro:
      "Sealing Systems covers threshold, perimeter and weather solutions used to complete entrance packages and improve door performance.",
    image: "/tur/categories/default-247230572201020.jpg",
    imageAlt: "Door bottom seals and threshold sealing systems from TUR",
    highlights: ["Door Bottom Seals", "Threshold Plate Seals", "Weather Stripping"],
    cards: [
      {
        title: "Door Bottom Seals",
        description: "Door bottom sealing systems for threshold performance.",
        href: routeGroupHref("door-hardware", "sealing-systems", "door-bottom-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-70562155201109.jpg",
        imageAlt: "Door bottom sealing systems for threshold performance",
      },
      {
        title: "Threshold Plate Seals",
        description: "Threshold plate and seal options for coordinated openings.",
        href: routeGroupHref("door-hardware", "sealing-systems", "threshold-plate-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1123808333201109.jpg",
        imageAlt: "Threshold plate seals — aluminium floor-mounted sealing profiles",
      },
      {
        title: "Threshold Plates",
        description: "Threshold plates for clean floor transitions and perimeter sealing.",
        href: routeGroupHref("door-hardware", "sealing-systems", "threshold-plates"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-654990898201109.jpg",
        imageAlt: "Threshold plates — aluminium door floor transition and sealing",
      },
      {
        title: "Intumescent Seals",
        description: "Intumescent seals for fire-rated door gap closure and smoke protection.",
        href: routeGroupHref("door-hardware", "sealing-systems", "intumescent-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1956765799201109.jpg",
        imageAlt: "Intumescent seals — heat-activated fire-rated door gap sealing",
      },
      {
        title: "Door Frame Or Perimeter Seals",
        description: "Frame and perimeter seal systems for architectural doors.",
        href: routeGroupHref("door-hardware", "sealing-systems", "door-frame-or-perimeter-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1021603673201109.jpg",
        imageAlt: "Door frame and perimeter seals — head and jamb gap sealing profiles",
      },
      {
        title: "Astragals",
        description: "Astragal seals for double-door meeting-edge draught and smoke control.",
        href: routeGroupHref("door-hardware", "sealing-systems", "astragals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-782518864201109.jpg",
        imageAlt: "Astragal seals — meeting edge sealing for double-door sets",
      },
      {
        title: "Magnetic Astragals",
        description: "Magnetic astragals for positive contact sealing at double-door meeting edges.",
        href: routeGroupHref("door-hardware", "sealing-systems", "magnetic-astragals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-756307014201109.jpg",
        imageAlt: "Magnetic astragals — positive contact meeting edge sealing for double doors",
      },
      {
        title: "Self Adhesive Seals",
        description: "Self-adhesive foam seals for supplementary draught and gap sealing.",
        href: routeGroupHref("door-hardware", "sealing-systems", "self-adhesive-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1868387964201109.jpg",
        imageAlt: "Self-adhesive seals — foam and rubber strips for door perimeter sealing",
      },
      {
        title: "Brush Strip Seals",
        description: "Brush strip seals for threshold, bottom and perimeter flexible sealing.",
        href: routeGroupHref("door-hardware", "sealing-systems", "brush-strip-seals"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-464847982201109.jpg",
        imageAlt: "Brush strip seals — flexible nylon bristle sealing for door bottoms",
      },
      {
        title: "Complementary Products",
        description: "Supporting accessories completing coordinated sealing system packages.",
        href: routeGroupHref("door-hardware", "sealing-systems", "complementary-products"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-342301605201109.jpg",
        imageAlt: "Complementary sealing products — smoke seals and completion accessories",
      },
      {
        title: "Weather Stripping",
        description: "Complementary weather stripping for door sealing systems.",
        href: routeGroupHref("door-hardware", "sealing-systems", "weather-stripping"),
        eyebrow: "Route",
        ctaLabel: "Explore Route",
        image: "/tur/categories/default-1772346152201109.jpg",
        imageAlt: "Weather stripping — surface-applied door weather and draught seals",
      },
    ],
    primaryCta: {
      label: "Request Sealing Systems Details",
      href: createInquiryHref("Sealing Systems Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Threshold and perimeter performance for coordinated openings",
    supportBody:
      "This page provides a clear route into the sealing families already present in the build, while keeping the remaining families available as inquiry-led placeholders instead of dead links.",
    applications: [
      { title: "Commercial Entrances", description: "Door bottom seals, threshold plates and weather stripping for controlled air and weather performance at commercial building entries." },
      { title: "Healthcare & Clinical", description: "Intumescent and smoke seals for fire-rated door assemblies in hospitals, clinics and care homes requiring life-safety compliance." },
      { title: "Acoustic Environments", description: "Astragals, magnetic astragals and perimeter seals for meeting rooms, recording studios and noise-sensitive spaces." },
      { title: "Education Buildings", description: "Threshold seals and perimeter systems for school and university doors requiring draught control and fire compliance." },
      { title: "Industrial & Logistics", description: "Heavy-duty brush strips, threshold plates and perimeter seals for industrial door applications with robust performance requirements." },
    ],
    featurePoints: [
      { title: "11 product families — the most complete sealing programme", description: "Threshold, perimeter, bottom, smoke, acoustic and supplementary sealing — every sealing requirement in one family." },
      { title: "Intumescent seals for fire-rated assemblies", description: "Heat-activated seals that expand on fire exposure to close the gap and maintain the fire rating of the door assembly." },
      { title: "Magnetic astragals for double-door sets", description: "Positive contact sealing at the meeting edge for improved acoustic ratings and more reliable smoke control." },
      { title: "Flexible brush strip seals", description: "Accommodate uneven floors, carpet transitions and varying clearance gaps for dependable threshold sealing." },
    ],
    faq: [
      { question: "What type of seal do I need for a fire-rated door?", answer: "Fire-rated door assemblies require intumescent seals — heat-activated seals that expand on fire exposure to close the gap between door and frame. Depending on the rating, a combined intumescent and smoke seal may also be required. TUR can advise on the correct seal specification for your door assembly." },
      { question: "What is the difference between a door bottom seal and a threshold plate seal?", answer: "A door bottom seal attaches to the bottom of the door leaf and contacts the floor or threshold when the door closes. A threshold plate seal is mounted to the floor at the threshold and coordinates with the door bottom seal to create a complete closure. Both work together for best performance." },
      { question: "Do astragals work for acoustic doors?", answer: "Yes — magnetic astragals are specifically suited to acoustic double-door sets, providing positive contact sealing at the meeting edge to reduce sound transmission. Standard astragals also provide draught and smoke-control performance." },
      { question: "Can sealing systems be specified for external doors?", answer: "Yes — weather stripping, door bottom seals and threshold plates are all available for external door applications. TUR can advise on the correct combination for weather exposure, draught control and threshold coordination." },
    ],
    relatedFamilySlugs: ["american-standard", "european-ironmongery", "access-control"],
    keywords: ["sealing systems", "door bottom seals", "threshold seals", "weather stripping"],
  },
];

const automaticOperatorFamilies: CatalogFamily[] = [
  {
    section: "automatic-operators",
    slug: "sliding-doors",
    title: "Sliding Doors",
    description:
      "Automatic sliding door families shaped for circulation, controlled access and streamlined architectural entry sequences.",
    intro:
      "Sliding Doors collects key sliding families used across commercial and high-traffic entrance planning.",
    image: "/tur/sliding-b.jpg",
    imageAlt: "Automatic sliding doors from TUR",
    highlights: ["Prismatic CMW", "Telescoping EMT", "heavyMaster HM"],
    cards: [
      {
        title: "Prismatic Sliding Door CMW",
        description: "Prismatic sliding operator for structured commercial entrances.",
        href: productHref("prismatic-sliding-door-cmw"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/sliding-door-hero.jpg",
        imageAlt: "Prismatic automatic sliding door — commercial entrance installation",
      },
      {
        title: "Curved Sliding Door CMR",
        description: "Curved sliding system for premium architectural entrance design.",
        href: productHref("curved-sliding-door-cmr"),
        eyebrow: "Sliding Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-a.jpg",
        imageAlt: "Curved automatic sliding door — premium architectural entrance",
      },
      {
        title: "Telescoping Sliding Door EMT",
        description: "Telescoping sliding system for constrained openings and maximum clear width.",
        href: productHref("telescoping-sliding-door-emt"),
        eyebrow: "Sliding Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-c.jpg",
        imageAlt: "Telescoping automatic sliding door — compact entrance system",
      },
      {
        title: "Escape Route Sliding Door HM-F FT",
        description: "Fire-tested sliding door operator for certified escape route applications.",
        href: productHref("escape-route-sliding-door-hm-f-ft"),
        eyebrow: "Safety Sliding",
        ctaLabel: "View Product",
        image: "/tur/sliding-f.jpg",
        imageAlt: "Escape route automatic sliding door — fire-tested entrance system",
      },
      {
        title: "heavyMaster HM",
        description: "Heavy-duty sliding operator for large-format and high-cycle entrances.",
        href: productHref("heavymaster-hm"),
        eyebrow: "Sliding Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-e.jpg",
        imageAlt: "Heavy-duty automatic sliding door — industrial and institutional entrance",
      },
      {
        title: "econoMaster EM",
        description: "Economy-tier sliding operator for controlled daily circulation.",
        href: productHref("economaster-em"),
        eyebrow: "Sliding Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-d.jpg",
        imageAlt: "econoMaster EM automatic sliding door — economy entrance operator",
      },
      {
        title: "compactMaster CM",
        description: "Compact sliding operator for constrained entrance footprints.",
        href: productHref("compactmaster-cm"),
        eyebrow: "Sliding Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-b.jpg",
        imageAlt: "compactMaster CM automatic sliding door — compact overhead operator",
      },
    ],
    primaryCta: {
      label: "Request Sliding Door Details",
      href: createInquiryHref("Sliding Doors Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Sliding entrance families for controlled circulation",
    supportBody:
      "Representative sliding families are listed here as a clean project entry point even where the build does not yet include full product-detail pages for each model.",
    applications: [
      { title: "Retail & Commercial Entrances", description: "High-throughput automatic sliding entrances for shopping centres, supermarkets and retail frontage requiring reliable daily operation." },
      { title: "Healthcare Facilities", description: "Hygiene-conscious automatic sliding doors for hospital entrance, ward and clinical areas with hands-free operation." },
      { title: "Corporate Lobbies", description: "Premium automatic sliding entrances for office buildings and headquarters requiring architectural quality and smooth operation." },
      { title: "Airports & Transport", description: "Heavy-duty and high-cycle automatic sliding systems for airports, stations and transport infrastructure with demanding throughput." },
      { title: "Industrial & Logistics", description: "Heavy-duty sliding operators for warehouses, manufacturing and logistics entries requiring large opening widths and cycle durability." },
    ],
    featurePoints: [
      { title: "7 operator families for every entrance type", description: "Prismatic, curved, telescoping, escape route, heavy-duty, economy and compact — a sliding solution for every specification." },
      { title: "Telescoping EMT for constrained openings", description: "Maximises clear opening width from a compact structural footprint — ideal for healthcare corridors and retrofit openings." },
      { title: "heavyMaster HM for demanding applications", description: "Engineered for heavy door leaves and high daily cycle counts in industrial, institutional and large-format commercial settings." },
      { title: "Access control and sensor integration", description: "All families compatible with card readers, keypads, safety sensors and building management systems." },
    ],
    faq: [
      { question: "What is the difference between prismatic and curved sliding doors?", answer: "Prismatic sliding doors (CMW) open in a straight linear path — ideal for standard commercial entrances. Curved sliding doors (CMR) follow a curved track, allowing the door to slide along a curved wall and creating a premium swept entrance profile suited to hospitality, corporate and architectural applications." },
      { question: "When should I use a telescoping sliding door?", answer: "Use telescoping sliding (EMT) when the structural opening is too narrow for a standard single-slide or bi-parting configuration but you still need maximum clear width. Telescoping doors stack multiple leaves to create a wider opening from a smaller wall cavity." },
      { question: "What is heavyMaster HM suited for?", answer: "heavyMaster HM is designed for entrances with heavier door leaves and for high-cycle applications such as supermarkets, airports and industrial facilities where conventional operators would experience accelerated wear." },
      { question: "What is an escape route sliding door?", answer: "The HM-F FT Escape Route Sliding Door is fire-tested and certified for applications where the door must form part of a compliant escape route. It operates automatically and defaults to the open position on fire alarm activation." },
      { question: "Do automatic sliding doors integrate with access control?", answer: "Yes — all TUR automatic sliding door families support integration with card readers, keypads, biometric devices and building management systems. Contact TUR for project-specific integration guidance." },
    ],
    relatedFamilySlugs: ["all-glass-systems", "swing-door-drives", "controlled-physical-access"],
    keywords: ["automatic sliding doors", "sliding operators", "entrance automation"],
  },
  {
    section: "automatic-operators",
    slug: "controlled-physical-access",
    title: "Controlled Physical Access",
    description:
      "Security entrance systems that guide, channel and control physical access across sensitive or high-volume environments.",
    intro:
      "Controlled Physical Access groups turnstiles, swing gates, reader posts and related systems for secure flow management.",
    image: "/tur/cat-access-readers.jpg",
    imageAlt: "Controlled physical access reader posts and turnstile systems from TUR",
    highlights: ["Turnstiles", "Swing Gates", "Reader Posts"],
    cards: [
      {
        title: "Reader Posts & Pedestrian Guiding Bar",
        description: "Reader posts and guiding bars for organised pedestrian access flow.",
        href: productHref("reader-posts-guiding-bar"),
        eyebrow: "Supporting System",
        ctaLabel: "View Product",
        image: "/tur/cat-access-readers.jpg",
        imageAlt: "Access control reader post and pedestrian guiding bar system",
      },
      {
        title: "GSI Security Curved Sliding Door",
        description: "Security curved sliding door for high-control architectural access points.",
        href: productHref("gsi-curved-sliding-access"),
        eyebrow: "Security System",
        ctaLabel: "View Product",
        image: "/tur/cat-access-control.jpg",
        imageAlt: "GSI security curved sliding access door — controlled entrance system",
      },
      {
        title: "Full-Height Turnstile",
        description: "Full-height turnstile for maximum perimeter access restriction.",
        href: productHref("full-height-turnstile"),
        eyebrow: "Access System",
        ctaLabel: "View Product",
        image: "/tur/sliding-f.jpg",
        imageAlt: "Full-height turnstile — perimeter access control system",
      },
      {
        title: "Sensor Barriers",
        description: "Optical sensor barriers for contactless guided access control.",
        href: productHref("sensor-barriers"),
        eyebrow: "Access System",
        ctaLabel: "View Product",
        image: "/tur/sliding-e.jpg",
        imageAlt: "Optical sensor barrier system — guided pedestrian access control",
      },
      {
        title: "Swing Gates",
        description: "Controlled swing gates for managed pedestrian movement and DDA access lanes.",
        href: productHref("swing-gates"),
        eyebrow: "Access System",
        ctaLabel: "View Product",
        image: "/tur/swing-door-hero.jpg",
        imageAlt: "Controlled swing gate — pedestrian access management system",
      },
      {
        title: "Turnstile Systems",
        description: "Turnstile systems for managed pedestrian access and controlled circulation.",
        href: productHref("turnstile-systems"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/cat-access-readers.jpg",
        imageAlt: "G·U access control turnstile system — controlled pedestrian access",
      },
      {
        title: "3-Arm & 2-Arm Turnstiles",
        description: "Tripod and 2-arm turnstiles for reliable single-person passage control.",
        href: productHref("tripod-turnstiles"),
        eyebrow: "Access System",
        ctaLabel: "View Product",
        image: "/tur/project-4.jpg",
        imageAlt: "Tripod 3-arm turnstile — single-person passage access control",
      },
    ],
    primaryCta: {
      label: "Request Controlled Access Details",
      href: createInquiryHref("Controlled Physical Access Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Secure flow management for controlled environments",
    supportBody:
      "This route keeps controlled access systems visible within the IA today while deeper model-level migration can happen later.",
    applications: [
      { title: "Corporate Headquarters", description: "Turnstiles, speed gates and swing gates for managed staff and visitor entry in commercial office environments." },
      { title: "Transport Terminals", description: "High-throughput tripod turnstiles and full-height barriers for airports, railway stations and bus terminals." },
      { title: "Sports & Entertainment Venues", description: "Tripod and full-height turnstiles for ticketed entry management at stadiums and event venues." },
      { title: "Government & Secure Facilities", description: "Full-height turnstiles and GSI security curved sliding doors for high-security government and institutional access." },
      { title: "Educational Campuses", description: "Reader posts, sensor barriers and swing gates for managed student and visitor circulation at school and university campuses." },
    ],
    featurePoints: [
      { title: "7 product families covering every access control need", description: "Turnstiles, full-height barriers, speed gates, sensor barriers, swing gates, security sliding and reader post systems." },
      { title: "Anti-tailgating security systems", description: "GSI security curved sliding door provides controlled single-person passage for high-security environments." },
      { title: "DDA-compliant swing gates", description: "Motorised swing gates provide accessible entry lanes alongside turnstile-controlled circulation points." },
      { title: "Flexible integration with access management", description: "All systems integrate with card, biometric, visitor management and building security platforms." },
    ],
    faq: [
      { question: "What is the difference between a tripod turnstile and a full-height turnstile?", answer: "A tripod turnstile uses a rotating 3-arm barrier at waist height — it controls access effectively but can be stepped over. A full-height turnstile provides a floor-to-ceiling physical barrier, making it suitable for high-security perimeters where physical defeat is a concern." },
      { question: "What are speed gates and sensor barriers?", answer: "Speed gates use fast-retracting barriers to provide an elegant and faster-throughput controlled access solution than traditional turnstiles. Sensor barriers use optical beams to guide and detect pedestrians. Both are suited to corporate, financial and premium institutional environments." },
      { question: "When do I need a swing gate alongside turnstiles?", answer: "A swing gate provides a DDA-compliant accessible lane — a wider opening for wheelchairs, pushchairs and deliveries — alongside a row of turnstile-controlled lanes. Most controlled access layouts include at least one supervised swing gate lane." },
      { question: "What is the GSI Security Curved Sliding Door used for?", answer: "The GSI Security Curved Sliding Door is an anti-tailgating access system combining a curved sliding door geometry with single-person passage control — suited to high-security entrances at government, financial institution and premium institutional applications." },
    ],
    relatedFamilySlugs: ["sliding-doors", "revolving-doors", "swing-door-drives"],
    keywords: ["controlled access", "turnstiles", "swing gates", "reader posts"],
  },
  {
    section: "automatic-operators",
    slug: "revolving-doors",
    title: "Revolving Doors",
    description:
      "Security, standard and all-glass revolving door families for premium and high-capacity entrance applications.",
    intro:
      "Revolving Doors provides a family-level overview of the key revolving door systems in the TUR range.",
    image: "/tur/project-c.jpg",
    imageAlt: "Revolving door systems from TUR",
    highlights: ["Security Revolving", "Large Capacity", "All-Glass Revolving"],
    cards: [
      {
        title: "GSI Security Revolving Door",
        description: "Security revolving door for controlled single-person access entry points.",
        href: productHref("gsi-security-revolving-door"),
        eyebrow: "Security System",
        ctaLabel: "View Product",
        image: "/tur/project-b.jpg",
        imageAlt: "Security revolving door — controlled access entrance system",
      },
      {
        title: "GGR Large-Capacity Revolving Door",
        description: "Large-capacity revolving door for high-throughput public and institutional entrances.",
        href: productHref("ggr-large-capacity-revolving"),
        eyebrow: "Revolving Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-d.jpg",
        imageAlt: "GGR large-capacity automatic revolving door — high-throughput entrance",
      },
      {
        title: "GGG All-Glass Revolving Door",
        description: "All-glass revolving door for premium transparent entrance expression.",
        href: productHref("ggg-all-glass-revolving-door"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/sliding-b.jpg",
        imageAlt: "All-glass revolving door — premium architectural entrance system",
      },
      {
        title: "GRA Standard Revolving Door",
        description: "Standard revolving door for dependable controlled entrance circulation.",
        href: productHref("gra-standard-revolving-door"),
        eyebrow: "Revolving Family",
        ctaLabel: "View Product",
        image: "/tur/sliding-c.jpg",
        imageAlt: "Standard automatic revolving door — commercial entrance installation",
      },
    ],
    primaryCta: {
      label: "Request Revolving Door Details",
      href: createInquiryHref("Revolving Doors Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "Revolving door families for premium and secure entrances",
    supportBody:
      "The revolving door families are presented as a lightweight landing page now so navigation remains complete without introducing dead links.",
    applications: [
      { title: "Premium Hotel Arrivals", description: "All-glass and standard revolving doors for luxury hotel entrances creating a premium first impression and effective air seal." },
      { title: "Corporate Headquarters", description: "Revolving door entrances for office buildings where architectural quality, energy performance and controlled circulation matter." },
      { title: "Airports & Transport Hubs", description: "Large-capacity GGR revolving doors for high-throughput public entrances at airports and major transport terminals." },
      { title: "Government & Institutional", description: "GSI security revolving doors for high-security government, financial and institutional entrances requiring anti-tailgating control." },
      { title: "Shopping Centres & Retail", description: "Standard and large-capacity revolving doors for retail complex entrances managing high visitor volumes." },
    ],
    featurePoints: [
      { title: "4 families for every revolving entrance type", description: "GSI security, GGR large-capacity, GGG all-glass and GRA standard — a revolving solution for every specification brief." },
      { title: "All-glass construction for maximum transparency", description: "GGG all-glass revolving door provides maximum entrance transparency and premium architectural expression for hospitality and corporate projects." },
      { title: "Permanent air seal for energy performance", description: "Revolving doors significantly reduce heat loss and air infiltration compared to swing or sliding doors." },
      { title: "Anti-tailgating security option", description: "GSI security revolving door provides controlled single-person passage with access management integration for high-security applications." },
    ],
    faq: [
      { question: "What size revolving door do I need?", answer: "Standard revolving doors (GRA) suit most commercial and institutional entrances. For premium architectural expression, GGG all-glass is suited to hospitality and corporate environments. For higher throughput, GGR large-capacity expands the diameter. Contact TUR with your entrance specification for a recommendation." },
      { question: "What is the GGG all-glass revolving door?", answer: "The GGG is a fully glazed revolving door with all-glass wing construction — providing maximum entrance transparency for corporate, hospitality and premium retail environments where brand presence and architectural quality define the arrival experience." },
      { question: "When is a security revolving door required?", answer: "The GSI security revolving door is specified for entrances requiring controlled single-person passage — preventing tailgating and integrating with access management systems. It is suited to government buildings, data centres, financial institutions and high-security institutional entrances." },
      { question: "Do revolving doors help with energy performance?", answer: "Yes — revolving doors maintain a permanent air seal, significantly reducing heat loss and air infiltration compared to swing or sliding doors. This is a key specification advantage for large-building entrances where climate control and energy efficiency are a priority." },
    ],
    relatedFamilySlugs: ["sliding-doors", "controlled-physical-access", "all-glass-systems"],
    keywords: ["revolving doors", "all-glass revolving doors", "security revolving doors"],
  },
  {
    section: "automatic-operators",
    slug: "swing-door-drives",
    title: "Swing Door Drives",
    description:
      "Automatic swing door operator families for accessibility, controlled circulation and specification-led entrance packages.",
    intro:
      "Swing Door Drives focuses on operator families for accessible, commercial and controlled entrance applications.",
    image: "/tur/tsw150-operator.jpg",
    imageAlt: "TSW150 automatic swing door operator from TUR",
    highlights: ["DTN 80", "TSW150", "TSW120"],
    cards: [
      {
        title: "DTN 80",
        description: "Automatic operator for fire, smoke, interior and exterior door automation.",
        href: productHref("swing-door-drives"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/product-door-closer.jpg",
        imageAlt: "DTN 80 automatic swing door operator from TUR",
      },
      {
        title: "TSW150 Automatic Door Operator",
        description: "Automatic operator for hygiene-conscious and accessible entrances.",
        href: productHref("tsw150-automatic-door-operator"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/swing-door-hero.jpg",
        imageAlt: "TSW150 automatic swing door operator from TUR",
      },
      {
        title: "TSW120 Automatic Door Operator",
        description: "Specification-led operator with quiet control and multiple activation options.",
        href: productHref("tsw120-automatic-door-operator"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/product-swing-operator.jpg",
        imageAlt: "TSW120 automatic swing door operator from TUR",
      },
    ],
    primaryCta: {
      label: "Request Swing Door Drive Details",
      href: createInquiryHref("Swing Door Drives Inquiry"),
    },
    secondaryCta: {
      label: "Download Company Profile",
      href: "/downloads",
    },
    supportTitle: "Automatic swing operators for specification-led projects",
    supportBody:
      "This page connects the current detail pages for DTN 80, TSW150 and TSW120 within a clearer Automatic Operators hierarchy.",
    applications: [
      { title: "Healthcare Entrances", description: "Hands-free automatic swing door operation for hospitals, clinics and care homes where hygiene and accessibility are primary." },
      { title: "Accessibility Upgrades", description: "DDA-compliant automatic swing operators for retrofitting existing door openings to meet accessibility requirements." },
      { title: "Corporate & Office Lobbies", description: "Automatic swing entrance operators for office buildings where hands-free entry and controlled circulation are required." },
      { title: "Education Facilities", description: "Automatic swing operators for school and university entrances meeting accessibility requirements and reducing manual operation." },
      { title: "Retail & Commercial", description: "Automatic operators for interior and exterior swing doors in retail, hospitality and mixed-use commercial buildings." },
    ],
    featurePoints: [
      { title: "TSW150 for hygiene-conscious environments", description: "Specifically optimised for healthcare, care homes and DDA-accessible applications requiring hands-free operation." },
      { title: "TSW120 for refined specification projects", description: "Quiet operation and multiple activation options suited to corporate and institutional entrance automation." },
      { title: "DTN 80 for fire and smoke door applications", description: "Fire-door compatible operator supporting fire, smoke, interior and exterior automation with access control integration." },
      { title: "Multiple activation methods", description: "Push-button, touchless infrared, remote control and access system triggers supported across all operator families." },
    ],
    faq: [
      { question: "What is the difference between TSW150 and TSW120?", answer: "Both are automatic swing door operators, but the TSW150 is specifically optimised for hygiene-conscious and DDA-accessible applications — making it the primary choice for healthcare environments. The TSW120 offers quiet operation and greater flexibility in activation options, suited to corporate and institutional applications." },
      { question: "Can automatic swing operators be fitted to existing doors?", answer: "Yes — TUR's swing door operators are designed for both new installations and retrofit applications. The DTN 80 and TSW series can be installed on most existing commercial door openings. TUR's technical team can advise on compatibility and mounting requirements." },
      { question: "What activation options are available?", answer: "All TUR swing door operators support push-button, touchless infrared, remote control and access system integration. Touchless activation is particularly suited to healthcare and food-service environments where hygiene is a priority." },
      { question: "Are TUR swing operators fire-door compatible?", answer: "Yes — the DTN 80 is specifically designed for fire and smoke door applications, operating as an automatic opener while maintaining fire-door compliance and releasing to the closed position on alarm activation." },
    ],
    relatedFamilySlugs: ["sliding-doors", "all-glass-systems", "automatic-pulse-generators-and-sensors"],
    keywords: ["swing door drives", "automatic swing operators", "accessibility operators"],
  },
  {
    section: "automatic-operators",
    slug: "all-glass-systems",
    title: "All Glass Systems",
    description:
      "All-glass sliding systems for premium architectural entrances and coordinated storefront-style applications.",
    intro:
      "All Glass Systems collects the shopMaster families used for premium all-glass movement and entrance coordination.",
    image: "/tur/sliding-c.jpg",
    imageAlt: "All-glass systems from TUR",
    highlights: ["shopMaster GSW-A", "GSW-M G30", "GSW-M"],
    cards: [
      {
        title: "shopMaster GSW-A",
        description: "All-glass system for coordinated architectural entrance movement.",
        href: productHref("sliding-doors"),
        eyebrow: "Featured Product",
        ctaLabel: "View Product",
        image: "/tur/cat-glass-hardware.jpg",
        imageAlt: "shopMaster GSW-A all-glass automatic entrance system from TUR",
      },
      {
        title: "shopMaster GSW-M G30",
        description: "All-glass system family for premium coordinated entrances.",
        eyebrow: "All-Glass Family",
        image: "/tur/cat-glass-patch.png",
        imageAlt: "shopMaster GSW-M G30 all-glass system patch fitting from TUR",
      },
      {
        title: "shopMaster GSW-M",
        description: "Supporting all-glass system family for premium applications.",
        eyebrow: "All-Glass Family",
        image: "/tur/cat-glass-pull.jpg",
        imageAlt: "shopMaster GSW-M all-glass entrance pull hardware from TUR",
      },
    ],
    primaryCta: {
      label: "Request All-Glass System Details",
      href: createInquiryHref("All Glass Systems Inquiry"),
    },
    secondaryCta: {
      label: "Contact TUR",
      href: "/contact",
    },
    supportTitle: "All-glass movement systems for premium entrances",
    supportBody:
      "shopMaster families are grouped here to give the homepage and navigation a clean page-based path into all-glass systems without relying on legacy collection anchors.",
    applications: [
      { title: "Premium Retail Frontage", description: "shopMaster all-glass sliding systems for high-street retail, flagship stores and shopping centre entrances requiring maximum transparency." },
      { title: "Corporate Lobbies", description: "All-glass automatic entrances for headquarters and premium office buildings where architectural clarity and brand presence are key." },
      { title: "Hospitality Arrival", description: "All-glass sliding entrances for luxury hotels, resorts and serviced apartments creating a premium frameless first impression." },
      { title: "Commercial & Mixed-Use", description: "shopMaster systems for commercial building entrances, reception areas and internal all-glass entrance zones." },
      { title: "High-End Residential", description: "Premium all-glass sliding systems for luxury residential common areas and entrance lobby applications." },
    ],
    featurePoints: [
      { title: "3 shopMaster families for different glass specifications", description: "GSW-A, GSW-M G30 and GSW-M — covering standard and heavier G30 glass thickness specifications across all applications." },
      { title: "Full frameless aesthetics", description: "No visible frame, maximum transparency and architectural clarity — the definitive all-glass entrance statement." },
      { title: "G30 glass thickness compatibility", description: "GSW-M G30 accommodates heavier glass panel specifications for premium retail, corporate and hospitality applications." },
      { title: "Single-slide and bi-parting configurations", description: "Flexible opening configurations across all shopMaster families, with access control and safety sensor integration." },
    ],
    faq: [
      { question: "What is an all-glass sliding system?", answer: "An all-glass sliding system is an automatic sliding door where the door leaves are unframed glass panels — the hardware is minimal to maintain maximum visual transparency. shopMaster systems use concealed or minimal-profile drive mechanisms for a fully frameless appearance." },
      { question: "What is the difference between GSW-A and GSW-M?", answer: "The GSW-A is the primary shopMaster all-glass entry product — a premium automatic sliding system for retail, corporate and hospitality applications. The GSW-M is the standard-range foundation model. GSW-M G30 adds compatibility with heavier G30 glass thickness for more demanding specifications." },
      { question: "Can all-glass systems handle high-traffic entrances?", answer: "shopMaster systems are designed for commercial and retail environments with regular daily use. For very high-traffic or heavy-cycle applications, TUR recommends discussing the specification with the technical team to confirm the right system and activation configuration." },
      { question: "Do all-glass systems work with access control?", answer: "Yes — all shopMaster systems integrate with card readers, keypads, biometric devices and building management systems for managed access control alongside the all-glass entrance." },
    ],
    relatedFamilySlugs: ["sliding-doors", "swing-door-drives", "controlled-physical-access"],
    keywords: ["all glass systems", "shopmaster", "automatic glass doors"],
  },
  {
    section: "automatic-operators",
    slug: "automatic-pulse-generators-and-sensors",
    title: "Automatic Pulse Generators & Sensors",
    description:
      "Activation devices and sensor layers that support coordinated automatic entry operation.",
    intro:
      "This landing page currently acts as a category overview for activation devices, sensors and supporting control inputs for automatic entrances.",
    image: "/tur/cat-gu-automatic.jpg",
    imageAlt: "Automatic entrance activation devices and sensors from TUR",
    highlights: ["Activation Devices", "Safety Sensors", "Control Inputs"],
    cards: [
      {
        title: "Activation Devices",
        description: "Supporting activation and trigger devices for automatic entrances.",
        eyebrow: "Category Overview",
        image: "/tur/slider-4.webp",
        imageAlt: "Automatic door activation devices from TUR",
      },
      {
        title: "Safety Sensors",
        description: "Sensor layers for coordinated activation and user safety.",
        eyebrow: "Category Overview",
        image: "/tur/slider-5.webp",
        imageAlt: "Safety sensor systems for automatic entrances from TUR",
      },
      {
        title: "Control Inputs",
        description: "Push buttons, wireless triggers and supporting control inputs.",
        eyebrow: "Category Overview",
        image: "/tur/cat-access-control.jpg",
        imageAlt: "Control input devices for automatic door systems from TUR",
      },
    ],
    primaryCta: {
      label: "Request Sensor Category Details",
      href: createInquiryHref("Automatic Pulse Generators and Sensors Inquiry"),
    },
    secondaryCta: {
      label: "Send Inquiry",
      href: "/contact",
    },
    supportTitle: "A clean category route that is ready for deeper migration",
    supportBody:
      "This route is intentionally lightweight for now, but it ensures the IA remains complete while activation-device details are migrated page by page.",
    applications: [
      { title: "All Automatic Sliding Entrances", description: "Presence detection and safety coverage above and around automatic sliding door openings for compliant safe operation." },
      { title: "Swing Door Installations", description: "Activation and safety sensors for automatic swing door drives, providing detection zones and trigger inputs." },
      { title: "Healthcare & Hygiene Environments", description: "Touchless activation push-plates and wireless triggers for hands-free door operation in clinical and food-service settings." },
      { title: "Accessibility Entrances", description: "Push-button and remote control inputs for DDA-compliant accessible automatic entrance activation." },
      { title: "Revolving Door Systems", description: "Safety sensors for revolving door outer perimeter and wing detection, ensuring compliant automatic revolving door operation." },
    ],
    featurePoints: [
      { title: "3 families covering the complete activation and safety layer", description: "Activation Devices, Safety Sensors and Control Inputs — every input and detection requirement for automatic entrances." },
      { title: "Radar, infrared and microwave detection options", description: "Multiple presence detection technologies for reliable automatic door triggering across different entrance environments." },
      { title: "EN 16005 compliance support", description: "Safety sensors support compliance with EN 16005 and related automatic door safety standards for all operator types." },
      { title: "Compatible with all G·U automatic door families", description: "Works across sliding, swing and revolving door operators — one sensor family for the entire automatic entrance range." },
    ],
    faq: [
      { question: "What is the difference between activation sensors and safety sensors?", answer: "Activation sensors trigger the door to open when a person approaches — they detect presence and initiate the opening cycle. Safety sensors monitor the door's active zone during operation to detect obstacles and prevent contact — they are a compliance requirement for all automatic door installations." },
      { question: "What activation options are available for automatic doors?", answer: "TUR's activation range covers radar presence detectors, infrared sensors, push-plates, key switches, wireless remote controls and building management triggers — allowing activation to be tailored to the specific entrance environment and user group." },
      { question: "Are safety sensors a regulatory requirement?", answer: "Yes — EN 16005 and related standards require safety sensors on automatic door installations to prevent contact with users and obstacles. TUR can advise on the correct safety sensor specification for your operator family and installation type." },
      { question: "Can sensors be integrated with access control?", answer: "Yes — activation and control input devices can be integrated with access management systems, allowing automatic doors to open only on valid credential presentation. This is commonly specified for corporate, institutional and healthcare controlled-access applications." },
    ],
    relatedFamilySlugs: ["swing-door-drives", "sliding-doors", "all-glass-systems"],
    keywords: ["automatic sensors", "activation devices", "pulse generators"],
  },
];

export const catalogFamilies = [...doorHardwareFamilies, ...automaticOperatorFamilies];

export const catalogSectionRoutes = catalogSections.map((section) => `/${section.slug}`);

export const catalogFamilyRoutes = catalogFamilies.map(
  (family) => `/${family.section}/${family.slug}`,
);

export { catalogSections, getCatalogSection };

export function getCatalogFamiliesBySection(section: CatalogSectionSlug) {
  return catalogFamilies.filter((family) => family.section === section);
}

export function getCatalogFamily(section: CatalogSectionSlug, slug: string) {
  return catalogFamilies.find(
    (family) => family.section === section && family.slug === slug,
  );
}

export function getCatalogSectionFamilyCards(section: CatalogSectionSlug): CatalogCard[] {
  const catalogSection = getCatalogSection(section);

  if (catalogSection?.routeCards?.length) {
    return catalogSection.routeCards;
  }

  return getCatalogFamiliesBySection(section).map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    eyebrow: section === "door-hardware" ? "Door Hardware Family" : "System Family",
    ctaLabel: "Explore Family",
    image: family.image,
    imageAlt: family.imageAlt,
  }));
}

export function getCatalogSectionCards(section: CatalogSectionSlug): CatalogCard[] {
  return getCatalogFamiliesBySection(section).map((family) => ({
    title: family.title,
    description: family.description,
    href: `/${family.section}/${family.slug}`,
    eyebrow:
      section === "door-hardware" ? "Category Landing Page" : "Family Landing Page",
    ctaLabel: "View Family",
    image: family.image,
    imageAlt: family.imageAlt,
  }));
}
