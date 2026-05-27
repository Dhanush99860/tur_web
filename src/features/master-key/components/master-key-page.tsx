import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import { createInquiryHref } from "@/content/site/site-config";

const INQUIRY_HREF = createInquiryHref("Master Key System Inquiry");

const keyLevels = [
  {
    code: "KA",
    label: "Keyed Alike",
    description:
      "All locks in the set can be opened with the same key. Many SKG 2-star cylinders are available in a keyed alike version, offering convenience for properties with multiple doors.",
    opens: "All KA locks in the set",
  },
  {
    code: "KD",
    label: "Keyed Different",
    description:
      "Each lock has its own unique key that will not open any other lock within that same system. Each lock in the system has an individual key not interchangeable with any other lock in the set.",
    opens: "Only its own lock",
  },
  {
    code: "MK",
    label: "Master Key",
    description:
      "A master key can open all locks within a system, including those that are Keyed Different or Keyed Alike. Master Keys are beneficial for managers and supervisors who need to override the system or handle lost-key situations.",
    opens: "All KD + KA locks in the zone",
  },
  {
    code: "GMK",
    label: "Grand Master Key",
    description:
      "Sits at the highest level of access and opens all locks in a master key system, including those opened by any master key. Typically issued to senior management in large organisations with multiple independent departments.",
    opens: "Every lock in the entire system",
  },
];

const euroCylinders = [
  {
    code: "TE3606.DC",
    label: "Double Cylinder",
    detail: "Both sides opening by key · 6-pin · 70mm (35/35) · CAM 30°",
    specs: "Satin Nickel · Anti-Drill Pin each side · 2.5mm Nickel Silver Keys · 65mm Screw",
    note: "Standard specification for exterior and security doors",
  },
  {
    code: "TE3606.TT",
    label: "Thumb Turn Cylinder",
    detail: "One side thumb turn, other side key · 6-pin · 70mm (35/35) · CAM 30°",
    specs: "Satin Nickel · Anti-Drill Pin at cylinder end and core · 2.5mm Nickel Silver Keys · 65mm Screw",
    note: "Internal door compliance and privacy applications",
  },
  {
    code: "TE3606.PC",
    label: "Privacy Cylinder",
    detail: "Thumb turn outside · coin emergency inside · 6-pin · 70mm (35/35) · CAM 30°",
    specs: "Satin Nickel · Anti-Drill Pin at cylinder end and core · 2.5mm Nickel Silver Keys · 65mm Screw",
    note: "Bathroom, ensuite and privacy room applications",
  },
  {
    code: "TE3606.SC",
    label: "Half Cylinder",
    detail: "One side opening by key · 6-pin · 45mm (10/35) · CAM 30°",
    specs: "Satin Nickel · Anti-Drill Pin at cylinder end and core · 2.5mm Nickel Silver Keys · 65mm Screw",
    note: "Cabinets, lockers and secondary access points",
  },
  {
    code: "TE3606.ST",
    label: "Half Cylinder Thumb Turn",
    detail: "One side opening by thumb turn · 6-pin · 45mm (10/35) · CAM 30°",
    specs: "Satin Nickel · Anti-Drill Pin at cylinder end and core · 2.5mm Nickel Silver Keys · 65mm Screw",
    note: "Emergency access and override secondary openings",
  },
];

const ansiCylinders = [
  {
    code: "TA3100",
    label: "Mortise Conventional Cylinder",
    detail: "Lengths: 118 / 138 / 158mm · Rings: 04, 10, 11, 12, 13, 15 · CAM: 01",
    specs: "Keying: KA / KD / MKD · Finish: 626",
    note: "Standard mortise application. Order: TA3100-118-04-15-MKD-626",
  },
  {
    code: "TA2172KASC",
    label: "Double Mortise Key Cylinder",
    detail: "Schlage 'C' Keyway · Keyed Alike · 1\" Long · 6 Pin · 1-5/32\" diameter",
    specs: "AR MS-Type Cam · 3/16\" cylinder ring · Two keys supplied · Aluminium · US28 finish",
    note: "Includes cylinder ring. Compatible with standard mortise lock body.",
  },
  {
    code: "TA2172Z",
    label: "Mortise Thumb Turn Cylinder",
    detail: "1\" Long · 6 Pin · 1-5/32\" diameter · AR MS-Type Cam",
    specs: "3/16\" cylinder ring · Aluminium · US28 finish",
    note: "Thumb turn operation for internal or privacy mortise locks",
  },
  {
    code: "TA2173Z",
    label: "Mortise Dummy Cylinder",
    detail: "1-5/32\" diameter · 7/8\" Long",
    specs: "3/16\" cylinder ring · Aluminium · US26 finish",
    note: "Non-functional dummy cylinder for aesthetic applications",
  },
];

const icCores = [
  {
    code: "TA3200",
    label: "Small Format Interchangeable Core (SFIC)",
    detail: "IC core removable with control key · No locksmith required for rekeying",
    note: "Order: TA3200-MKD-626",
  },
  {
    code: "TA3300",
    label: "Interchangeable Core Housing (SFIC Housing)",
    detail: "Lengths: 138mm · Rings: 04, 10, 11, 12, 13, 15 · CAM: 01",
    note: "Order: TA3300-138-04-15-626 · Finish: 626",
  },
  {
    code: "TA3500",
    label: "Knob / Lever Cylinder",
    detail: "Standard cylinder · 1-1/4\" long · Specify tail bar and keyway",
    note: "For knob and lever locksets requiring IC core compatibility",
  },
];

const applications = [
  {
    title: "Hospitality",
    image: "/master-key/hotel-room-door.jpg",
    description:
      "Hotels use GMKs to control access to guest rooms, administrative areas and service areas. With a single key, managers can quickly access all areas, enhancing efficiency and security.",
  },
  {
    title: "Corporate Offices",
    image: "/master-key/office-corridor.jpg",
    description:
      "Large corporate offices have different departments and levels of access. GMKs unify key management while safeguarding sensitive areas such as data centers and executive offices.",
  },
  {
    title: "Healthcare",
    image: "/master-key/office-glass-partitions.jpg",
    description:
      "Pharmacies, labs and sensitive patient areas in hospitals need selective access. GMK systems ensure only approved personnel can access restricted locations.",
  },
  {
    title: "Residential & Mixed-Use",
    image: "/master-key/residential-door.jpg",
    description:
      "Apartment buildings and mixed-use developments use keyed-different locks per unit with building-level master keys for facilities teams.",
  },
  {
    title: "Education",
    image: "/master-key/lockset-closeup.jpg",
    description:
      "Schools and universities have different areas needing different access levels. Faculty access labs and admin offices; student access to high-security areas is restricted by GMK.",
  },
  {
    title: "Manufacturing & Logistics",
    image: "/master-key/installation-service.jpg",
    description:
      "Warehouses and distribution centres use GMKs to assign distinct access rights to storage areas, loading bays and production zones — each independently keyed.",
  },
];

const features = [
  {
    title: "SKG 2-Star Certified (NEN 5089)",
    description:
      "Every TURN cylinder meets the Dutch SKG 2-star standard, independently tested and certified by Stichting Kwaliteitscentrum Gevelbouw for burglar resistance, forced-entry and drill attack. Quality is monitored through ongoing random tests.",
  },
  {
    title: "Anti-Drill & Anti-Pick Protection",
    description:
      "Hardened Anti-Drill Pins on both sides of the cylinder and core resist physical attack. The extra-wide key neck provides an additional layer of protection against picking and forced entry.",
  },
  {
    title: "Duplication Controlled Keys",
    description:
      "TURN keys carry built-in duplication resistance and can only be copied by professional locksmiths at authorised James Gibbons Format (JGF) duplication centres — protecting key control integrity across the system life.",
  },
  {
    title: "BS EN 1303:2015 Compliant",
    description:
      "All TURN Euro profile cylinders are tested and certified to BS EN 1303:2015, the European standard for building hardware cylinders.",
  },
  {
    title: "Solid Brass Construction",
    description:
      "All Euro profile cylinders are manufactured from solid brass with 2.5mm Nickel Silver keys and a 65mm fixing screw included. Available in Satin Nickel finish as standard.",
  },
  {
    title: "UL Certified — 2025 Listings",
    description:
      "2025 UL certifications: Door Hinges (File R41844), Locks & Latches (File R41836) and Swinging Fire Door Closers (File R40953). ANSI mortise and rim cylinders also carry UL437 listing under ANSI/BHMA A156.5 / A156.30.",
  },
];

export function MasterKeyPage() {
  return (
    <main id="main-content" className="pb-28">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <PageContainer className="pt-10 sm:pt-14">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.72fr] lg:gap-8 xl:gap-10">

          {/* Left — text panel */}
          <div className="flex flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9 lg:p-10">
            <div className="mb-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                TUR · Master Key Systems · Catalogue 2026
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,4.6vw,4.6rem)] font-medium leading-[0.91] tracking-[-0.065em] text-[var(--foreground)]">
              One Key.<br />Every Door.
            </h1>
            <div className="my-6 h-px bg-[var(--border)]" />
            <p className="max-w-[40ch] text-[clamp(0.95rem,1.25vw,1.1rem)] leading-[1.64] text-[var(--muted-foreground)]">
              TURN master key systems define, organise and control access to buildings, hotels, hospitals, offices, factories and schools. Every person gets exactly the access they need — and nothing more.
            </p>
            <p className="mt-4 max-w-[54ch] text-[0.89rem] leading-[1.76] text-[var(--muted-foreground)] opacity-80">
              Built on SKG 2-star certified solid brass Euro profile cylinders with hardened anti-drill pins, an extra-wide key neck, duplication-controlled keys and BS EN 1303:2015 compliance. High quality at an affordable price.
            </p>
            <div className="my-6 h-px bg-[var(--border)]" />
            <div className="flex flex-wrap gap-3">
              <SmartLink href={INQUIRY_HREF} className={buttonClassName()}>
                Request a System Design
              </SmartLink>
              <SmartLink href="/door-hardware/european-ironmongery/cylinders" className={buttonClassName("secondary")}>
                View Cylinders
              </SmartLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["SKG 2-Star Certified", "BS EN 1303:2015", "UL Certified 2025", "Duplication Controlled", "In-House UAE Facility"].map((h) => (
                <span key={h} className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Right — hero key image */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[#1a1008] lg:min-h-0">
            <Image
              src="/master-key/hero-key.jpg"
              alt="TURN master key — Do not duplicate, Made in UAE"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 38vw"
              className="object-contain object-center p-8"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="rounded-[1.1rem] border border-white/14 bg-[rgba(8,10,16,0.64)] p-4 backdrop-blur-[12px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                  TURN · UAE Manufactured
                </p>
                <p className="mt-1 text-[12.5px] font-medium leading-snug text-white/85">
                  Every key is marked &ldquo;Do not duplicate&rdquo; — copies available only through authorised James Gibbons Format centres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          KEY HIERARCHY — KA / KD / MK / GMK
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="mb-10">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            Key Hierarchy
          </p>
          <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
            Four levels of access. One system.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
            Think of it as the level of authority in an organisation — structured like a corporate organisational chart. The Grand Master Key sits at the top and can open every lock, down to individual keyed-different locks at the base.
          </p>
        </div>

        {/* Hierarchy diagram image */}
        <div className="mb-10 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white">
          <Image
            src="/master-key/cylinder-system-diagram.jpg"
            alt="TURN master key system diagram — one master key opens all cylinder types in the hierarchy"
            width={1053}
            height={694}
            className="w-full object-contain p-6 sm:p-8"
            sizes="(max-width: 1279px) 100vw, 72rem"
          />
        </div>

        {/* KA / KD / MK / GMK cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {keyLevels.map((level, i) => (
            <div
              key={level.code}
              className={[
                "flex flex-col rounded-[1.25rem] border p-6",
                i === 3
                  ? "border-[color-mix(in_srgb,var(--accent)_50%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_9%,var(--background))]"
                  : i === 2 || i === 0
                  ? "border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))]"
                  : "border-[var(--border)] bg-[var(--card)]",
              ].join(" ")}
            >
              <span className={["text-[2rem] font-display font-medium leading-none tracking-[-0.06em]", i === 1 ? "text-[var(--foreground)]" : "text-[var(--accent)]"].join(" ")}>
                {level.code}
              </span>
              <p className="mt-2 text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">
                {level.label}
              </p>
              <p className="mt-3 flex-1 text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
                {level.description}
              </p>
              <div className="mt-5 rounded-[0.6rem] border border-[var(--border)] bg-[var(--card)] px-3 py-2">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">Opens</p>
                <p className="mt-0.5 text-[12px] font-medium text-[var(--foreground)]">{level.opens}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          PLANNING GUIDANCE
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="grid gap-8 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] lg:grid-cols-2">
          <div className="relative min-h-[22rem] overflow-hidden lg:min-h-0">
            <Image
              src="/master-key/cylinder-product.jpg"
              alt="TURN branded key — Do not duplicate, Product of UAE"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,8,12,0.1),rgba(6,8,12,0.52))]" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Planning Your System
            </p>
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--foreground)]">
              Designed around your building, not the other way around.
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              {[
                { n: "01", t: "Map your zones", d: "Identify every area in the building — floors, departments, core services, restricted rooms — and define who needs access to each." },
                { n: "02", t: "Don't forget the building core", d: "Core areas — stairwells, mechanical rooms, electrical, phone and HVAC — are typically grouped under their own MK separate from floor or department masters. Key all similar core areas alike to reduce the number of master keys issued to maintenance." },
                { n: "03", t: "Set the hierarchy", d: "Assign KD locks to individual openings, group them under zone master keys for managers, then place a grand master above all zones for senior access. For large campuses, add Sub-Master Keys (SMK) for intermediate levels." },
                { n: "04", t: "Controlled key issue", d: "Keys are manufactured by TURN, stamped with your system code and issued only through authorised James Gibbons Format (JGF) duplication centres. You retain full key control throughout the system life." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-display text-[1.55rem] leading-none tracking-[-0.06em] text-[color-mix(in_srgb,var(--accent)_30%,var(--border))]">
                    {step.n}
                  </span>
                  <div>
                    <p className="text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">{step.t}</p>
                    <p className="mt-1 text-[12.5px] leading-[1.7] text-[var(--muted-foreground)]">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          EURO CYLINDERS — TE3606
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white lg:min-h-0">
            <Image
              src="/master-key/thumb-turn-cylinder.jpg"
              alt="TURN TE3606 thumb turn Euro profile cylinder — technical drawing and product photo"
              fill
              sizes="(max-width: 1023px) 100vw, 44vw"
              className="object-contain p-8"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Euro Profile Cylinders · TE3606
            </p>
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--foreground)]">
              SKG 2-star certified cylinders built for master key systems.
            </h2>
            <p className="mt-4 text-[0.89rem] leading-[1.76] text-[var(--muted-foreground)]">
              All TURN Euro profile cylinders are solid brass, 6-pin, SKG 2-star certified and BS EN 1303:2015 compliant. DIN 18252 dimensionally compatible. Available in five configurations for every opening type. Satin Nickel finish, 65mm fixing screw and 2.5mm Nickel Silver keys supplied as standard.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.1rem] border border-[var(--border)]">
              {euroCylinders.map((c, i) => (
                <div
                  key={c.code}
                  className={["p-4 sm:p-5", i > 0 ? "border-t border-[var(--border)]" : ""].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[0.82rem] font-bold tracking-[-0.01em] text-[var(--accent)]">{c.code}</span>
                  </div>
                  <p className="mt-0.5 text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">{c.label}</p>
                  <p className="mt-1 text-[11.5px] text-[var(--muted-foreground)]">{c.detail}</p>
                  <p className="mt-0.5 text-[11px] text-[var(--muted-foreground)] opacity-75">{c.specs}</p>
                  <p className="mt-1.5 text-[11px] italic text-[var(--muted-foreground)] opacity-60">{c.note}</p>
                </div>
              ))}
            </div>
            <SmartLink
              href="/door-hardware/european-ironmongery/cylinders"
              className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--accent)] transition-opacity hover:opacity-70"
            >
              Full cylinder specifications
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SmartLink>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          ANSI CYLINDERS
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="mb-10">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            ANSI Cylinders · TA Series
          </p>
          <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
            American standard cylinders for mortise and exit device applications.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
            TURN ANSI cylinders meet ANSI/BHMA A156.5 and A156.30 performance requirements, UL437 listed. Mortise cylinders thread directly into the mortise lock body; rim cylinders operate surface-mounted auxiliary locks. Cylinders are not supplied with exit devices or trim — order separately.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {ansiCylinders.map((c) => (
            <div key={c.code} className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-6">
              <span className="text-[0.82rem] font-bold tracking-[-0.01em] text-[var(--accent)]">{c.code}</span>
              <p className="mt-0.5 text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">{c.label}</p>
              <p className="mt-2 text-[11.5px] leading-[1.68] text-[var(--muted-foreground)]">{c.detail}</p>
              <p className="mt-0.5 text-[11px] leading-[1.6] text-[var(--muted-foreground)] opacity-75">{c.specs}</p>
              <p className="mt-2 text-[11px] italic text-[var(--muted-foreground)] opacity-60">{c.note}</p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          IC CORE
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-[var(--border)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                IC Core · Interchangeable Core
              </p>
              <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--foreground)]">
                Rekey any lock in seconds — without a locksmith.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                An IC core (Interchangeable Core) cylinder can be removed and replaced using a special control key. When a key is lost or stolen, locks are rekeyed instantly — remove the old core, install the new one. Security is regained in seconds.
              </p>
              <p className="mt-3 text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                TURN IC cores come in Small Format (SFIC) for high-security environments. Construction keying is available — temporary cores keyed alike during build-out are replaced with permanent system cores at handover.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Quick rekeying", "No locksmith needed", "Construction keying", "SFIC compatible", "Cost-effective", "High-security rated"].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
                      <svg viewBox="0 0 10 10" fill="none" className="h-[9px] w-[9px]">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[12px] font-medium text-[var(--foreground)]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-7 sm:p-9 lg:p-10">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                IC Core Product Range
              </p>
              <div className="flex flex-col gap-4">
                {icCores.map((c, i) => (
                  <div key={c.code} className={["rounded-[0.9rem] border border-[var(--border)] p-4", i === 0 ? "bg-[color-mix(in_srgb,var(--accent)_4%,var(--background))]" : ""].join(" ")}>
                    <span className="text-[0.78rem] font-bold tracking-[-0.01em] text-[var(--accent)]">{c.code}</span>
                    <p className="mt-0.5 text-[0.85rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">{c.label}</p>
                    <p className="mt-1.5 text-[11.5px] leading-[1.66] text-[var(--muted-foreground)]">{c.detail}</p>
                    <p className="mt-1 text-[11px] italic text-[var(--muted-foreground)] opacity-65">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          APPLICATIONS
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="mb-10">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            Applications
          </p>
          <h2 className="font-display text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--foreground)]">
            Where TURN Master Key Systems are specified.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.title}
              className="group overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] hover:shadow-[0_12px_36px_-16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={app.image}
                  alt={`${app.title} — TURN master key application`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(6,8,12,0.36)_100%)]" />
                <span className="absolute left-3 top-3 rounded-full border border-white/18 bg-[rgba(6,8,12,0.52)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {app.title}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[12.5px] leading-[1.72] text-[var(--muted-foreground)]">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          KEY FEATURES
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-[var(--border)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                Why Specify TURN
              </p>
              <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--foreground)]">
                Security, control and compliance built in from the start.
              </h2>
              <p className="mt-4 max-w-[38ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
                Every component in the TURN master key system is engineered to resist attack, maintain key control and comply with European and American standards across the system&apos;s full life.
              </p>
              <div className="relative mt-8 min-h-[14rem] overflow-hidden rounded-[1rem] border border-[var(--border)]">
                <Image
                  src="/master-key/dubai-skyline.jpg"
                  alt="Dubai skyline — TURN master key systems specified across the Middle East"
                  fill
                  sizes="(max-width: 1023px) 100vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(6,8,12,0.72)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">Regional Presence</p>
                  <p className="mt-0.5 text-[12.5px] font-medium text-white/90">
                    Specified across hotels, hospitals and offices throughout the UAE and Middle East.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-7 sm:p-9 lg:p-10">
              <ul className="flex flex-col gap-6">
                {features.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
                      <svg viewBox="0 0 10 10" fill="none" className="h-[9px] w-[9px]">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-semibold leading-snug tracking-[-0.018em] text-[var(--foreground)]">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-[12.5px] leading-[1.7] text-[var(--muted-foreground)]">
                        {f.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          IN-HOUSE MASTER KEY FACILITY
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="grid gap-0 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] lg:grid-cols-[1.35fr_1fr]">
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              In-House Production · Since 2024
            </p>
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.05em] text-[var(--foreground)]">
              UAE-based master key cutting facility.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
              TUR operates an in-house master key production facility in the UAE — equipped with MARKER 2000 and FUTURA PRO precision cutting machines. Operational since 2024, the facility enables rapid key cutting, system duplication and on-site technical support for regional projects without relying on overseas supply.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "MARKER 2000 Cutting Machine",
                "FUTURA PRO Precision Cutting",
                "UAE-Based Operations",
                "Rapid Key Turnaround",
                "On-Site Duplication",
                "In-Region Project Support",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
                    <svg viewBox="0 0 10 10" fill="none" className="h-[9px] w-[9px]">
                      <path d="M1.5 5l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[12px] font-medium text-[var(--foreground)]">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden border-t border-[var(--border)] lg:min-h-0 lg:border-l lg:border-t-0">
            <Image
              src="/master-key/cylinder-product.jpg"
              alt="TUR in-house master key production facility — MARKER 2000 and FUTURA PRO precision cutting"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,8,12,0.06),rgba(6,8,12,0.55))]" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="rounded-[1.1rem] border border-white/14 bg-[rgba(8,10,16,0.64)] p-4 backdrop-blur-[12px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                  Operational Since 2024
                </p>
                <p className="mt-1 text-[12.5px] font-medium leading-snug text-white/85">
                  MARKER 2000 and FUTURA PRO precision cutting — produced in the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ══════════════════════════════════════
          INQUIRY CTA
      ══════════════════════════════════════ */}
      <PageContainer className="pt-20 sm:pt-24">
        <div className="grid gap-8 overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-10">
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Project Support
            </p>
            <h2 className="font-display text-[clamp(1.5rem,2.3vw,2.1rem)] font-medium leading-[1.06] tracking-[-0.04em] text-[var(--foreground)]">
              Ready to design your master key system?
            </h2>
            <p className="mt-3 max-w-[58ch] text-[0.9rem] leading-[1.74] text-[var(--muted-foreground)]">
              Send us your floor plan or zone list and the TUR team will produce a master key schedule, cylinder specification and key hierarchy diagram for your project — at no charge.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["SKG 2-Star Certified", "BS EN 1303:2015", "UL Certified 2025", "In-House UAE Facility"].map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-3.5 py-1.5 text-[11px] font-semibold text-[var(--accent)]"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 lg:min-w-[15rem]">
            <SmartLink href={INQUIRY_HREF} className={buttonClassName()}>
              Request a System Design
            </SmartLink>
            <SmartLink href="/contact" className={buttonClassName("secondary")}>
              Contact TUR
            </SmartLink>
          </div>
        </div>
      </PageContainer>

    </main>
  );
}
