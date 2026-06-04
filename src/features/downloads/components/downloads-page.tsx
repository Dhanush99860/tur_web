import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";
import {
  DownloadIcon,
  CheckIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  FileIcon,
} from "@/components/shared/icons";

// â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type DocItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  fileSize: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  accent: string;
  covers: string[];
};

const primaryDocs: DocItem[] = [
  {
    eyebrow: "Company Overview Â· PDF",
    title: "TUR with Format Company Profile",
    description:
      "A consolidated reference covering TUR's heritage through James Gibbons Format, product verticals, partner brands, global office structure, certifications and project delivery positioning.",
    href: "/company_profile.pdf",
    fileSize: "6.3 MB",
    ctaLabel: "Download Company Profile",
    image: "/tur/home/project-2.jpg",
    imageAlt: "TUR company profile",
    accent: "#c4a96b",
    covers: [
      "Heritage through James Gibbons Format (est. 1670)",
      "Product verticals â€” hardware, operators, access",
      "6 global offices â€” UAE, UK, NL, CA, LK, IN",
      "Certifications: ANSI, UL, CE, SKG, GAI",
      "Landmark project references",
      "Regional and global delivery structure",
    ],
  },
  {
    eyebrow: "Product Catalogue Â· PDF Â· 2024",
    title: "TÃ¼R American Standard 2024",
    description:
      "Full product range conforming to ANSI and UL standards â€” mortise hinges, mortise locks, panic exit devices, door controls, coordinators and flush bolts for US-market specification.",
    href: "/downloads/tur-american-standard-2024.pdf",
    fileSize: "50 MB",
    ctaLabel: "Download Catalogue",
    image: "/tur/door-hardware/format-lockset.jpg",
    imageAlt: "TÃ¼R American Standard 2024",
    accent: "#4e8ae6",
    covers: [
      'Mortise hinges â€” 3Â½" through 6" series',
      "Mortise lock bodies, trim and cylinders",
      "Panic exit devices and emergency hardware",
      "Door closers, coordinators and controls",
      "ANSI / UL certification data and test references",
      "Ordering codes and dimension tables",
    ],
  },
  {
    eyebrow: "Product Catalogue Â· PDF Â· 2025",
    title: "TÃ¼R European Standard 2025",
    description:
      "CE-marked architectural hardware conforming to EN standards â€” Euro profile cylinders, lever handles, hinges, closers, panic devices and coordinated ironmongery packages for European specification.",
    href: "/downloads/tur-european-standard-2025.pdf",
    fileSize: "21 MB",
    ctaLabel: "Download Catalogue",
    image: "/tur/door-hardware/european-lockset.jpg",
    imageAlt: "TÃ¼R European Standard 2025",
    accent: "#64aa8c",
    covers: [
      "Euro profile cylinders â€” SKG 2-star certified",
      "Premium lever handles and furnishing sets",
      "CE-marked hinges, locks and closers",
      "Panic and emergency exit hardware",
      "Sealing and acoustic systems",
      "Finish options and ironmongery schedules",
    ],
  },
];

// â”€â”€ Download Row â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function DownloadRow({ doc, index }: { doc: DocItem; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <div className="group grid overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.14)] lg:grid-cols-2">

      {/* Image side */}
      <div
        className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto ${
          flipped ? "lg:order-2" : ""
        }`}
      >
        {/* Accent bar along top */}
        <div
          className="absolute inset-x-0 top-0 z-10 h-[3px]"
          style={{ background: doc.accent }}
        />
        <Image
          src={doc.image}
          alt={doc.imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* File badge â€” bottom left of image */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <FileIcon className="h-2.5 w-2.5 text-white/55" />
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.22em] text-white/65">
            PDF Â· {doc.fileSize}
          </span>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
        {/* Eyebrow */}
        <p
          className="eyebrow"
          style={{ color: doc.accent }}
        >
          {doc.eyebrow}
        </p>

        {/* Title */}
        <h3 className="display-subtitle mt-3 text-[var(--foreground)]">
          {doc.title}
        </h3>

        {/* Description */}
        <p className="body-copy mt-3">
          {doc.description}
        </p>

        {/* Covers â€” 2-col checklist */}
        <div className="mt-5 grid grid-cols-1 gap-y-2 border-t border-[color-mix(in_srgb,var(--border)_55%,transparent)] pt-5 sm:grid-cols-2 sm:gap-x-5">
          {doc.covers.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckIcon
                className="mt-[2px] h-3 w-3 shrink-0"
                style={{ color: doc.accent }}
              />
              <span className="font-sans text-[11.5px] leading-[1.55] text-[var(--muted-foreground)]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-3">
          <SmartLink
            href={doc.href}
            download
            className={buttonClassName()}
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            {doc.ctaLabel}
          </SmartLink>
        </div>
      </div>
    </div>
  );
}

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function DownloadsPage() {
  return (
    <main id="main-content">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="border-b border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--card)]">
        <PageContainer className="py-10 sm:py-12">
          {/* Headline row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Resource Library</p>
              <h1 className="display-title mt-3 text-[var(--foreground)]">
                Documents &amp; Catalogues
              </h1>
              <p className="body-copy mt-3 max-w-[44ch]">
                Download TUR product catalogues and company profile. Request specification sheets, technical data and project-support documentation.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex shrink-0 flex-wrap gap-2.5">
              <SmartLink
                href="/company_profile.pdf"
                download
                className={buttonClassName()}
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Company Profile
              </SmartLink>
              <SmartLink
                href="/contact"
                className={buttonClassName("secondary")}
              >
                Contact TUR
              </SmartLink>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-8 grid grid-cols-2 divide-x divide-[color-mix(in_srgb,var(--border)_65%,transparent)] overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--border)_65%,transparent)] sm:grid-cols-4">
            {[
              { value: "3", label: "PDF Catalogues" },
              { value: "50+", label: "Years GCC Delivery" },
              { value: "6", label: "Global Offices" },
              { value: "15+", label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--card)] px-5 py-4">
                <p className="font-display text-[1.8rem] font-medium leading-none tracking-[-0.04em] text-[var(--foreground)]">
                  {s.value}
                </p>
                <p className="mt-1 eyebrow">{s.label}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          DOWNLOAD ROWS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-12 sm:py-14">
        <PageContainer>
          {/* Section header */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Available Downloads</p>
              <h2 className="display-subtitle mt-3 text-[var(--foreground)]">
                Catalogues &amp; Company Profile
              </h2>
            </div>
            <p className="hidden max-w-[28ch] text-right font-sans text-[11.5px] leading-[1.75] text-[var(--muted-foreground)] sm:block">
              Current editions â€” full specifications and certification references included.
            </p>
          </div>

          {/* Stacked rows */}
          <div className="flex flex-col gap-5">
            {primaryDocs.map((doc, i) => (
              <DownloadRow key={doc.href} doc={doc} index={i} />
            ))}
          </div>

          <p className="mt-5 text-center font-sans text-[10px] text-[var(--muted-foreground)] opacity-50">
            Contact TUR for the latest revisions or project-specific document versions.
          </p>
        </PageContainer>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          ONLINE RESOURCES
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="border-t border-[color-mix(in_srgb,var(--border)_55%,transparent)] py-12 sm:py-14">
        <PageContainer>
          <div className="mb-7">
            <p className="eyebrow">Online Resources</p>
            <h2 className="display-subtitle mt-3 text-[var(--foreground)]">
              Catalogues &amp; Project Support
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Master Key Systems */}
            <SmartLink
              href="/master-key-systems"
              className="group overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition hover:border-[var(--accent)] hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/6] overflow-hidden">
                <Image
                  src="/master-key/hero-key.png"
                  alt="Master Key Systems"
                  fill
                  sizes="(max-width: 639px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="eyebrow">Online Catalogue</p>
                  <p className="mt-1.5 font-display text-[1.1rem] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
                    Master Key Systems
                  </p>
                  <p className="mt-1 font-sans text-[12px] leading-[1.6] text-[var(--muted-foreground)]">
                    TURN cylinders Â· SKG 2-star Â· GMK hierarchy
                  </p>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </div>
            </SmartLink>

            {/* Request Documents */}
            <SmartLink
              href="/contact"
              className="group overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--card)] transition hover:border-[var(--accent)] hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/6] overflow-hidden">
                <Image
                  src="/tur/home/project-4.jpg"
                  alt="TUR project support"
                  fill
                  sizes="(max-width: 639px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="eyebrow">Technical Support</p>
                  <p className="mt-1.5 font-display text-[1.1rem] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
                    Request Technical Documents
                  </p>
                  <p className="mt-1 font-sans text-[12px] leading-[1.6] text-[var(--muted-foreground)]">
                    Data sheets, specs &amp; project coordination
                  </p>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </div>
            </SmartLink>
          </div>
        </PageContainer>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SUPPORT STRIP
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="border-t border-[color-mix(in_srgb,var(--border)_55%,transparent)] bg-[var(--card)] py-11">
        <PageContainer>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div>
              <p className="eyebrow">Project Support</p>
              <h2 className="display-subtitle mt-3 text-[var(--foreground)]">
                Need project-specific documents
                <br className="hidden sm:block" /> or technical coordination?
              </h2>
              <p className="body-copy mt-3 max-w-[50ch]">
                TUR provides hardware specification, scheduling, master keying documentation and project-led coordination from first inquiry through to delivery.
              </p>
            </div>

            {/* Right â€” CTAs */}
            <div className="flex shrink-0 flex-col gap-2.5 sm:items-end">
              <SmartLink href="/contact" className={buttonClassName()}>
                Contact TUR
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </SmartLink>
              <SmartLink
                href="/about"
                className={buttonClassName("ghost")}
              >
                About the Platform
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </SmartLink>
            </div>
          </div>

          {/* Services row */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--border)_55%,transparent)] bg-[color-mix(in_srgb,var(--border)_55%,transparent)] sm:grid-cols-4">
            {[
              "Hardware Specification",
              "Master Key Design",
              "Shop Drawing Review",
              "Project Coordination",
            ].map((s) => (
              <div key={s} className="bg-[var(--card)] px-5 py-3.5 text-center">
                <p className="font-sans text-[10.5px] font-medium text-[var(--muted-foreground)]">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

