import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "master-key-hierarchies",
    title: "Master Key Systems: KA, KD, MK and GMK Hierarchies Explained",
    excerpt:
      "A clear breakdown of master key hierarchy levels — from individual keyed-different cylinders through sub-masters, masters and grand masters — and how to specify them for hotels, hospitals and campus projects.",
    category: "Technical Guide",
    image: "/master-key/hero-key.jpg",
    imageAlt: "TURN euro profile cylinder and master key on a dark surface",
    publishedAt: "2026-05-15",
    readingTimeMin: 6,
    tags: ["Master Key", "Cylinders", "TURN", "Key Hierarchy"],
    body: [
      {
        heading: "What Is a Master Key System?",
        paragraphs: [
          "A master key system is a locking hierarchy that allows different keys to open different subsets of doors within a building or campus. Rather than issuing a single key that opens everything — a serious security risk — or individual keys for every door, a master key scheme creates logical zones of access. Each cylinder in the system is configured during manufacturing so that it responds to its individual key and to one or more higher-level keys in the hierarchy.",
          "For architects, consultants and facilities managers, specifying a master key system is one of the most consequential decisions in a building's security design. A well-planned hierarchy remains scalable and secure as occupancy changes; a poorly planned one requires wholesale cylinder replacement when tenants change or access levels shift.",
        ],
      },
      {
        heading: "The Four Core Levels: KD, KA, MK and GMK",
        paragraphs: [
          "Keyed Different (KD) is the baseline condition: each cylinder has a unique key that opens only that lock. KD cylinders form the leaves of the hierarchy — individual office doors, room doors or storage units that require exclusive access. A housekeeper's key does not open a KD room to which they are not assigned.",
          "Keyed Alike (KA) groups multiple cylinders so they all respond to the same key. This is useful where a single person legitimately needs access to several doors of the same type — a maintenance technician servicing all plant rooms on a floor, for example. KA cylinders reduce the key burden without elevating the holder's overall access level.",
          "Master Key (MK) is the first level of override. A master key opens all cylinders within a defined zone or sub-group, regardless of their individual KD or KA configuration. In a hotel, a floor master would open every guest room and service door on that floor. The master key does not open cylinders outside its designated sub-group.",
          "Grand Master Key (GMK) sits at the apex of a two-tier hierarchy, opening all cylinders across every sub-group in the building. In large campuses or organisations with multiple buildings, a further tier — the Great Grand Master Key (GGMK) — can be introduced. The GMK is typically held by facilities management, security directors or senior operations personnel, and its use should be audited wherever possible.",
        ],
      },
      {
        heading: "Sub-Master Keys and Multi-Site Hierarchies",
        paragraphs: [
          "Between the individual MK and the GMK, a Sub-Master Key (SMK) provides an intermediate layer. In a hospital, for instance, an SMK might cover a single department — surgical, pharmacy, administration — while the GMK covers the entire facility. This intermediate tier means a departmental manager holds meaningful access without needing a GMK.",
          "For multi-building campuses, the hierarchy can extend further. A property manager's key may serve as a Site Master Key (Site-MK) covering one building, while a Grand Site Master Key (GSMK) covers the campus. Each cylinder is manufactured with a specific combinator that determines which key levels it will accept, so the hierarchy is enforced mechanically, not just by policy.",
          "When specifying a multi-tier hierarchy, the keying schedule — a controlled document listing every cylinder, its location, its individual key number and which master levels it accepts — must be drafted carefully and securely maintained. TUR provides keying schedule support as part of its TURN master key project service.",
        ],
      },
      {
        heading: "Applications: Hotels, Hospitals and Office Buildings",
        paragraphs: [
          "Hotels represent the most common application for master key systems in the Middle East. A typical hotel hierarchy assigns individual room keys (KD) to guests, a floor master to housekeeping supervisors, a department master to front-of-house and facilities staff, and a GMK to the general manager and security director. Back-of-house areas — plant rooms, server rooms, safe deposit vaults — sit outside the guest-room sub-group, accessible only to authorised maintenance personnel.",
          "Hospitals require a more nuanced approach because access levels must align with clinical governance as well as physical security. Pharmacy lockrooms, pathology cold stores and neonatal units typically require KD cylinders with access restricted to specific sub-master levels, while general ward doors may be on a broader master. Fire-exit compliance must also be considered: cylinders on designated fire escape routes must permit free egress regardless of the keying configuration.",
          "In commercial office buildings, master key systems support multi-tenant arrangements. Each tenancy receives its own MK sub-group, allowing the building manager to hold a GMK without interfering with tenant privacy. When a tenant vacates, only the cylinders within that sub-group need to be re-keyed or replaced.",
        ],
      },
      {
        heading: "SKG 2-Star Certification and TURN Cylinders",
        paragraphs: [
          "The security integrity of a master key system is only as strong as the cylinders within it. TURN cylinders supplied by TUR carry SKG 2-star certification, independently tested and audited by the SKG-IKOB institute in the Netherlands. The 2-star rating confirms resistance to drilling, picking and bump-key attack in accordance with the test protocols of BS EN 1303:2015.",
          "TURN cylinders also incorporate key duplication control: keys can only be duplicated at authorised service points with proof of the keyowner's identity and a valid authorisation card. This is a critical feature for master key projects, where an unauthorised duplicate of a GMK represents a systemic security breach.",
          "When specifying TURN master key systems, TUR recommends including the cylinder specification, the key duplication control protocol and the keying schedule process within the project's security strategy document. This ensures that all stakeholders — architect, consultant, main contractor and end client — understand their obligations before cylinders are ordered.",
        ],
      },
    ],
  },
  {
    slug: "automatic-door-operators-guide",
    title: "Selecting Automatic Door Operators: Swing, Sliding and Revolving Systems",
    excerpt:
      "A specifier's guide to choosing between swing door drives, sliding systems and revolving doors — covering traffic volume, accessibility compliance, fire rating and G·U product positioning.",
    category: "Specification Guide",
    image: "/tur/home/slider-5.webp",
    imageAlt: "G·U automatic door operator installed on a contemporary commercial entrance",
    publishedAt: "2026-04-28",
    readingTimeMin: 5,
    tags: ["Automatic Operators", "G·U", "Commercial", "Specification"],
    body: [
      {
        heading: "Choosing the Right Operator Type",
        paragraphs: [
          "The selection of an automatic door operator is one of the most visible and functionally consequential decisions in a commercial entrance specification. The wrong choice generates complaints from day one: a swing drive on a high-footfall retail frontage creates bottlenecks; a revolving door without a bypass leaf fails accessibility requirements; a sliding system specified for a fire-rated opening without the correct hold-open and release mechanism creates a life-safety liability.",
          "The primary variables governing operator selection are traffic volume and direction of flow, the structural envelope and facade treatment, applicable fire and smoke containment requirements, accessibility legislation (notably DDA/Equality Act compliance in the UK and its regional equivalents), and the client's operational preference for staffed versus fully automatic mode.",
        ],
      },
      {
        heading: "Swing Door Drives: Low to Medium Traffic, Accessibility Focus",
        paragraphs: [
          "Swing door operators suit single or double-leaf doors where traffic volume is low to moderate and the door swing clearance is available. They are the standard solution for accessible side entrances, hospital ward doors, office lobby secondary entrances and residential common areas where automatic operation is mandated by accessibility requirements but full revolving-door throughput is not needed.",
          "G·U swing door drives offer low-energy and full-power variants. Low-energy operators open the door at a controlled, safe speed suitable for pedestrian environments where incidental contact is possible — typically specified for accessible entrances and healthcare settings. Full-power operators are reserved for high-traffic or high-wind-load situations where a faster, more assertive opening cycle is needed.",
          "Key specification parameters for swing drives include: opening force (measured at the door edge, critical for accessible compliance), closing force and speed, hold-open duration, safety sensor coverage (activation mat, radar or infrared presence detection), breakout force (for emergency egress where the door must open manually under load), and power-loss behaviour (typically fail-safe open on loss of supply, or fail-secure depending on the fire strategy).",
        ],
      },
      {
        heading: "Sliding Systems: High Traffic and Facade Integration",
        paragraphs: [
          "Sliding door operators are the workhorse of high-traffic commercial entrances — retail, airports, healthcare reception, hotel main lobbies and transportation hubs. The absence of a door-swing zone means they are inherently safer in crowded environments and allow maximum clear opening width within a given structural opening.",
          "G·U sliding systems accommodate single-slide, bi-parting, telescopic and curved configurations. Telescopic arrangements, where an outer leaf slides behind an inner leaf, double the clear opening width for a given lintel depth — particularly valuable in refurbishment projects where the structural opening is constrained. Curved sliding systems integrate curved glass panels into an automatic entrance, a specification increasingly favoured in premium hotel and retail projects in the Gulf.",
          "For fire-rated sliding entrances, the operator must incorporate a fire alarm interface that releases the hold-open signal and allows the door to close and latch (or, for sliding fire doors, to close under spring-loaded tension) in the event of a fire signal. This interface must be coordinated with the building's fire alarm panel at an early stage of the project, not as an afterthought during commissioning.",
        ],
      },
      {
        heading: "Revolving Doors: Throughput, Energy and Presence",
        paragraphs: [
          "Revolving doors offer three advantages that no other entrance type can match simultaneously: very high throughput without creating a direct air path between interior and exterior (critical for air-conditioned buildings in hot climates), a strong architectural statement at the primary entrance, and a natural airlock effect that significantly reduces HVAC load at the entrance zone.",
          "For commercial and hospitality projects in the Gulf region, the energy argument for revolving doors is particularly compelling. An automatic sliding entrance on a hotel lobby creates a brief but significant air exchange with every activation — multiplied across hundreds of activations per day, this represents meaningful cooling load. A revolving door eliminates this entirely.",
          "G·U revolving systems are available in two-, three- and four-wing configurations, with diameters typically ranging from 2,000 mm to 4,500 mm. All revolving entrances must incorporate emergency breakout panels — wing sections that fold flat to create a direct egress path — which must be coordinated with the fire strategy and tested as part of commissioning. A bypass sliding leaf alongside the revolving door is mandatory for accessible compliance and for low-traffic periods when the revolving system may be parked.",
        ],
      },
    ],
  },
  {
    slug: "skc-2-star-certification",
    title: "SKG 2-Star Certification: European Security Standards for Door Cylinders",
    excerpt:
      "What SKG 2-star certification means in practice — the drill, pick and bump-resistance tests, the relationship to BS EN 1303:2015, and why specifiers should include it in their cylinder schedules.",
    category: "Standards & Certifications",
    image: "/tur/home/slider-6.webp",
    imageAlt: "Format lockset on a contemporary door — European security hardware",
    publishedAt: "2026-04-10",
    readingTimeMin: 4,
    tags: ["SKG", "Security", "BS EN 1303", "Euro Cylinder"],
    body: [
      {
        heading: "What Is SKG Certification?",
        paragraphs: [
          "SKG-IKOB is an independent Dutch certification body that tests and certifies building hardware against defined European security performance standards. Unlike a manufacturer's own quality mark, SKG certification requires cylinders to be submitted for destructive and non-destructive testing by independent laboratory technicians, and ongoing market surveillance means certified products are periodically retested to ensure production consistency.",
          "SKG operates a three-star rating scale for door cylinders. One-star certification confirms that a cylinder meets the minimum requirements of the relevant European norm — adequate for low-risk residential applications but insufficient for most commercial specifications. Two-star certification represents the standard required for commercial, institutional and high-value residential projects. Three-star certification is reserved for the highest-security applications, such as safe rooms, government facilities and high-risk commercial premises.",
        ],
      },
      {
        heading: "What Does 2-Star Certification Require?",
        paragraphs: [
          "To achieve and maintain SKG 2-star certification, a cylinder must pass three categories of attack resistance test: drilling resistance, pick resistance and bump resistance. Drilling resistance tests are conducted with defined drill bits, speeds and pressures; the cylinder must resist destructive attack for a minimum duration without the cam rotating. The test simulates a determined physical attack with power tools — a realistic threat in burglary scenarios.",
          "Pick resistance evaluates the cylinder against single-pin picking and raking techniques using professional lock-picking tools. A certified cylinder must resist picking for a defined number of attempts within a timed test window. Bump key resistance tests the cylinder against the bump key attack method, in which a specially cut key is struck to momentarily displace the pins and allow rotation — a technique that compromises many standard cylinders that have not been specifically designed to resist it.",
          "In addition to the attack-resistance tests, SKG 2-star certification requires that the cylinder meets the dimensional and functional requirements of BS EN 1303:2015, the European standard for building hardware cylinders. This includes key withdrawal in specific positions, force and torque requirements, and endurance testing for operational durability.",
        ],
      },
      {
        heading: "BS EN 1303:2015 and Its Relevance to Specifiers",
        paragraphs: [
          "BS EN 1303:2015 is the primary European performance standard for cylinders used in building hardware. It classifies cylinders across six performance categories covering durability (number of operational cycles), security (attack resistance grades), fire resistance, corrosion resistance, safety (key withdrawal conditions) and strength. A specification that references BS EN 1303:2015 Grade 6 security — the highest grade — is essentially requiring the same attack resistance as SKG 2-star, but the European norm does not mandate third-party certification.",
          "This is the practical value of SKG certification: it provides independent, audited verification that the cylinder in the box actually meets the standard claimed on the product data sheet. For a specifier writing a security strategy for a hotel, hospital or office building, including SKG 2-star as a minimum cylinder requirement in the specification clause provides a defensible, independently verifiable performance benchmark — not simply a manufacturer's claim.",
          "Project specifications in the Middle East increasingly reference European security standards as the regional baseline, particularly on internationally tendered projects and those involving European or UK-headquartered clients, consultants or operators. Referencing SKG 2-star in the cylinder schedule is a straightforward way to align with this expectation without requiring bespoke regional testing.",
        ],
      },
      {
        heading: "TURN Cylinders and Compliance",
        paragraphs: [
          "TURN cylinders supplied by TUR carry SKG 2-star certification across the range specified for master key and high-security applications. The certification is product-specific and batch-audited, meaning that the certification mark on a TURN cylinder reflects tested performance, not a blanket brand endorsement.",
          "When specifying TURN cylinders, TUR recommends that the project's security schedule explicitly states the SKG 2-star requirement at the product clause level, references BS EN 1303:2015, and includes the key duplication control requirement as a separate clause. This ensures that any alternative product submitted during the tender or procurement stage must demonstrate equivalent independently certified performance — not simply claim it.",
          "TUR's technical team can provide product data sheets, SKG certification documentation and specification clause wording for inclusion in project security strategies and hardware schedules. For master key projects, TUR also coordinates the keying schedule and key authorisation documentation to ensure the cylinder specification and the key management system are aligned from the outset.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestBlogPosts(count = 3) {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, count);
}
