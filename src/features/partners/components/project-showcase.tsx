"use client";

import { useState, useEffect } from "react";
import type React from "react";
import Image from "next/image";
import {
  projectSuccessStories,
  type ProjectRegion,
  type ProjectGroup,
} from "@/content/partners";

// ── Accent colours ────────────────────────────────────────────────────────────

const regionAccent: Record<ProjectRegion, string> = {
  "UAE":               "#2563eb",
  "Saudi Arabia":      "#c27b10",
  "Qatar":             "#9b1c2a",
  "Oman":              "#a16207",
  "GCC & Levant":      "#15803d",
  "United Kingdom":    "#6d28d9",
  "Europe":            "#1d4ed8",
  "Hong Kong":         "#be1b1b",
  "Singapore":         "#c01515",
  "Brunei":            "#926010",
  "West Indies":       "#0f766e",
  "India & Others":    "#c2410c",
};

// Country / region flags (emoji — rendered as actual flags on all modern systems)
const regionFlag: Record<ProjectRegion, string> = {
  "UAE":               "🇦🇪",
  "Saudi Arabia":      "🇸🇦",
  "Qatar":             "🇶🇦",
  "Oman":              "🇴🇲",
  "GCC & Levant":      "🌍",
  "United Kingdom":    "🇬🇧",
  "Europe":            "🇪🇺",
  "Hong Kong":         "🇭🇰",
  "Singapore":         "🇸🇬",
  "Brunei":            "🇧🇳",
  "West Indies":       "🌴",
  "India & Others":    "🇮🇳",
};

const groupOrder: ProjectGroup[] = [
  "Middle East & GCC",
  "United Kingdom & Europe",
  "Asia Pacific & International",
];

const groupAccent: Record<ProjectGroup, string> = {
  "Middle East & GCC":              "#c27b10",
  "United Kingdom & Europe":        "#6d28d9",
  "Asia Pacific & International":   "#0f766e",
};

const groupShortLabels: Record<ProjectGroup, string> = {
  "Middle East & GCC":              "Middle East & GCC",
  "United Kingdom & Europe":        "UK & Europe",
  "Asia Pacific & International":   "Asia Pacific",
};

// Group flag / symbol
const groupFlag: Record<ProjectGroup, string> = {
  "Middle East & GCC":              "🕌",
  "United Kingdom & Europe":        "🏛",
  "Asia Pacific & International":   "🌏",
};

// ── Project image gallery data ────────────────────────────────────────────────

const projectGallery: Record<string, string[]> = {
  // ── UAE ──
  "Emaar Square Building 2":       ["/tur/projects/uae/emaar-square.jpg"],
  "The Opus Tower":                ["/tur/projects/uae/opus-tower.jpg"],
  "Ubora Tower":                   ["/tur/projects/uae/ubora-tower.jpg"],

  // ── Saudi Arabia ──
  "NEOM Utility Buildings":                  ["/tur/projects/saudi-arabia/neom.jpg"],
  "Multiple Colleges, Qassim University":    ["/tur/projects/saudi-arabia/qassim-university.jpg"],
  "Kingdom Hospital":                        ["/tur/projects/saudi-arabia/kingdom-hospital.jpg"],
  "Royal Saudi Air Force HQ":                ["/tur/projects/saudi-arabia/royal-saudi-airforce-hq.jpg"],
  "Faizaliya Tower":                         ["/tur/projects/saudi-arabia/faizaliya-tower.jpg"],
  "King Abdullah Financial District (KAFD)": ["/tur/projects/saudi-arabia/kafd-riyadh.jpg"],

  // ── Qatar ──
  "Al Bayt Stadium":                         ["/tur/projects/qatar/al-bayt-stadium.jpg"],
  "Hamad Medical Corporation":               ["/tur/projects/qatar/hamad-medical.jpg"],
  "Qatar Energy HQ":                         ["/tur/projects/qatar/qatar-energy-hq.jpg"],
  "Kahramaa (Qatar Electricity & Water Co)": ["/tur/projects/qatar/kahramaa.jpg"],

  // ── Oman ──
  "Ministry of Health":             ["/tur/projects/oman/ministry-of-health.jpg"],
  "Ministry of Education":          ["/tur/projects/oman/ministry-of-education.jpg"],
  "Ministry of Heritage & Tourism": ["/tur/projects/oman/ministry-of-heritage.jpg"],

  // ── GCC & Levant ──
  "ADNOC Headquarters":               ["/tur/projects/uae/adnoc-hq.jpg"],
  "World Trade Centre":               ["/tur/projects/gcc-levant/world-trade-centre-bahrain.jpg"],
  "Ciragan Palace Hotel (Kempinski)": ["/tur/projects/gcc-levant/ciragan-palace.jpg"],
  "Kazma Camp":                       ["/tur/projects/gcc-levant/kazma-camp-kuwait.jpg"],

  // ── United Kingdom ──
  "Buckingham Palace":                    ["/tur/projects/uk/buckingham-palace.jpg"],
  "Bank of England Printing Press Works": ["/tur/projects/uk/bank-of-england.jpg"],
  "St. Paul's Cathedral":                 ["/tur/projects/uk/st-pauls-cathedral.jpg"],
  "HSBC HQ and UK branches":              ["/tur/projects/uk/hsbc-canary-wharf.jpg"],
  "Colchester Garrison":                  ["/tur/projects/uk/colchester-garrison.jpg"],
  "The Lloyd's Building":                 ["/tur/projects/uk/lloyds-building.jpg"],
  "Royal Holloway University":            ["/tur/projects/uk/royal-holloway-university.jpg"],
  "University of Greenwich":              ["/tur/projects/uk/university-of-greenwich.jpg"],
  "Wentworth Golf Club":                  ["/tur/projects/uk/wentworth-golf-club.jpg"],

  // ── Europe ──
  "Vestatoren Tower":             ["/tur/projects/europe/vestatoren-heerenveen.jpg"],
  "Hotel De President":           ["/tur/projects/europe/hotel-de-president.jpg"],
  "Revitalisatie Rivierenhuis":   ["/tur/projects/europe/rivierenhuis-amsterdam.jpg"],
  "The Carousel":                 ["/tur/projects/europe/the-carousel-zoetermeer.jpg"],
  "Grotius":                      ["/tur/projects/europe/grotius-den-haag.jpg"],
  "Student Experience Amsterdam": ["/tur/projects/europe/student-experience-amsterdam.jpg"],
  "West Beat Amsterdam":          ["/tur/projects/europe/west-beat-amsterdam.jpg"],
  "Bajeskwartier":                ["/tur/projects/europe/bajeskwartier-amsterdam.jpg"],

  // ── Hong Kong ──
  "Hong Kong Convention & Exhibition Centre": ["/tur/projects/hong-kong/hkcec.jpg"],
  "The Hong Kong Electric Company":           ["/tur/projects/hong-kong/hk-electric.jpg"],
  "MTR Mass Transit Railway":                 ["/tur/projects/hong-kong/mtr-hong-kong.jpg"],
  "Tuen Mun Hospital":                        ["/tur/projects/hong-kong/tuen-mun-hospital.jpg"],
  "The China Light and Power Company":        ["/tur/projects/hong-kong/china-light-power.jpg"],

  // ── Singapore ──
  "Changi Airport": ["/tur/projects/singapore/changi-airport.jpg"],

  // ── Brunei ──
  "Brunei International Airport":                ["/tur/projects/brunei/brunei-airport.jpg"],
  "Jerudong International School":               ["/tur/projects/brunei/jerudong-school.jpg"],
  "Prime Minister's Residence & Banqueting Hall":["/tur/projects/brunei/pm-residence-brunei.jpg"],

  // ── West Indies ──
  "University of West Indies":  ["/tur/projects/west-indies/uwi-barbados.jpg"],
  "Albena Lake-Hodge School":   ["/tur/projects/west-indies/anguilla-school.jpg"],
  "New Hospital in Montserrat": ["/tur/projects/west-indies/montserrat-hospital.jpg"],

  // ── India & Others ──
  "British High Commission Residence": ["/tur/projects/india-others/british-high-commission-delhi.jpg"],
  "St Raphael Resort & Hotel":         ["/tur/projects/india-others/st-raphael-cyprus.jpg"],
  "International Finance Centre":      ["/tur/projects/india-others/jersey-finance-centre.jpg"],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function typeAbbrev(type: string): string {
  const map: Record<string, string> = {
    "Commercial": "COM", "Healthcare": "HLT", "Sports": "SPT",
    "Government": "GOV", "Education": "EDU", "Heritage / Government": "HER",
    "Heritage": "HER", "Financial": "FIN", "Transport": "TRS",
    "Mixed Use": "MXD", "Hospitality": "HSP", "Infrastructure": "INF",
    "Energy / Government": "ENR", "Energy / Commercial": "ENR",
    "Landmark Development": "LMK", "Ministry of Defence": "DEF",
    "Events": "EVT", "Utilities": "UTL", "Residential": "RES", "Military": "MIL",
  };
  return map[type] ?? type.slice(0, 3).toUpperCase();
}

function initials(name: string) {
  return name.split(" ").filter((w) => w.length > 2).slice(0, 3).map((w) => w[0]).join("");
}

// ── SVG icons ─────────────────────────────────────────────────────────────────

function ChevronLeft({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ── Project detail panel ──────────────────────────────────────────────────────

function ProjectDetailPanel({
  project,
  projectIndex,
  totalProjects,
  region,
  onPrev,
  onNext,
}: {
  project: { name: string; location: string; type: string };
  projectIndex: number;
  totalProjects: number;
  region: ProjectRegion;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const accent = regionAccent[region];
  if (!project) return null;
  const images = projectGallery[project.name] ?? [];
  const hasImages = images.length > 0;
  const multipleImages = images.length > 1;

  useEffect(() => { setImgIdx(0); }, [project.name]);

  return (
    <div className="flex h-full flex-col">

      {/* ── Gallery / artwork ── */}
      <div
        className="group relative w-full overflow-hidden"
        style={{ aspectRatio: "16 / 9" }}
      >
        {hasImages ? (
          <>
            <Image
              key={images[imgIdx]}
              src={images[imgIdx]}
              alt={project.name}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/18 to-transparent" aria-hidden="true" />
            <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden="true" />

            {/* Counter chip */}
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-mono text-white/80 backdrop-blur-sm">
                {multipleImages ? `${imgIdx + 1} / ${images.length}` : "Photo"}
              </span>
            </div>

            {/* Multiple-image controls */}
            {multipleImages && (
              <>
                <button onClick={() => setImgIdx((i) => Math.max(0, i - 1))} disabled={imgIdx === 0} aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-25">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setImgIdx((i) => Math.min(images.length - 1, i + 1))} disabled={imgIdx === images.length - 1} aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-25">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} aria-label={`Image ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{ height: 6, width: i === imgIdx ? 20 : 6, backgroundColor: i === imgIdx ? "white" : "rgba(255,255,255,0.35)" }} />
                  ))}
                </div>
              </>
            )}

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
              <h3 className="text-[clamp(1rem,2vw,1.3rem)] font-bold leading-snug tracking-tight text-white drop-shadow">
                {project.name}
              </h3>
            </div>
          </>
        ) : (
          /* ── Premium no-image artwork ── */
          <>
            <div className="absolute inset-0 bg-[var(--card)]" />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 65%, ${accent}18 0%, transparent 65%)` }} aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 78% 28%, ${accent}10 0%, transparent 52%)` }} aria-hidden="true" />
            {/* Blueprint grid */}
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`, backgroundSize: "28px 28px" }} aria-hidden="true" />
            {/* Accent top strip */}
            <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden="true" />
            {/* Corner marks */}
            <div className="absolute left-5 top-5 h-7 w-7 border-l-2 border-t-2" style={{ borderColor: `${accent}45` }} aria-hidden="true" />
            <div className="absolute right-5 top-5 h-7 w-7 border-r-2 border-t-2" style={{ borderColor: `${accent}25` }} aria-hidden="true" />
            <div className="absolute bottom-5 left-5 h-7 w-7 border-b-2 border-l-2" style={{ borderColor: `${accent}25` }} aria-hidden="true" />
            <div className="absolute bottom-5 right-5 h-7 w-7 border-b-2 border-r-2" style={{ borderColor: `${accent}45` }} aria-hidden="true" />
            {/* Ghosted initials */}
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none tracking-tight"
              aria-hidden="true"
              style={{ fontSize: "clamp(4.5rem,10vw,7.5rem)", color: accent, opacity: 0.05 }}>
              {initials(project.name)}
            </span>
            {/* Center info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 px-10 text-center">
              <span className="rounded-full border px-3.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.24em]"
                style={{ borderColor: `${accent}38`, color: accent, backgroundColor: `${accent}12` }}>
                {project.type}
              </span>
              <h3 className="max-w-[22ch] text-[clamp(0.9rem,1.7vw,1.25rem)] font-bold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                {project.name}
              </h3>
              <p className="text-[11.5px] text-[var(--muted-foreground)]">{project.location}</p>
            </div>
            {/* Bottom label */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: `${accent}28` }} aria-hidden="true" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-foreground)]/38">
                Project Reference · Gallery on Request
              </span>
              <span className="h-px w-8" style={{ backgroundColor: `${accent}28` }} aria-hidden="true" />
            </div>
          </>
        )}
      </div>

      {/* Thumbnails when multiple images */}
      {multipleImages && (
        <div className="flex gap-2 overflow-x-auto border-b border-[var(--border)] px-5 py-3">
          {images.map((img, i) => (
            <button key={img} onClick={() => setImgIdx(i)} aria-label={`Image ${i + 1}`}
              className="shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200"
              style={{ borderColor: i === imgIdx ? accent : "transparent", width: 72, height: 48 }}>
              <div className="relative h-full w-full">
                <Image src={img} alt="" fill sizes="72px" className="object-cover" />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── Project info + prev/next navigation ── */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
        {/* Project facts */}
        <div>
          {/* Region + index breadcrumb */}
          <div className="mb-3 flex items-center gap-2 text-[9.5px] text-[var(--muted-foreground)]/55">
            <span className="text-[16px] leading-none">{regionFlag[region]}</span>
            <span>{region}</span>
            <span>·</span>
            <span className="font-mono">{String(projectIndex + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}</span>
          </div>

          <h3 className="text-[clamp(1rem,1.8vw,1.2rem)] font-bold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
            {project.name}
          </h3>

          {/* Facts grid */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[var(--border)] px-4 py-3">
              <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]/50">Location</p>
              <p className="mt-1 text-[12px] font-medium text-[var(--foreground)]">{project.location}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] px-4 py-3">
              <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]/50">Sector</p>
              <p className="mt-1 text-[12px] font-medium" style={{ color: accent }}>{project.type}</p>
            </div>
            <div className="col-span-2 rounded-xl border border-[var(--border)] px-4 py-3">
              <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]/50">Supplied by</p>
              <p className="mt-1 text-[12px] font-medium text-[var(--foreground)]">TUR Middle East FZC — Architectural Hardware</p>
            </div>
          </div>
        </div>

        {/* Prev / Next project navigation */}
        <div className="flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
          <button
            onClick={onPrev}
            disabled={projectIndex === 0}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 text-[11px] font-medium transition-all disabled:opacity-30 hover:bg-[var(--card)]"
            style={{ borderColor: projectIndex === 0 ? "var(--border)" : `${accent}30`, color: projectIndex === 0 ? "var(--muted-foreground)" : accent }}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Previous
          </button>
          <span className="font-mono text-[10px] text-[var(--muted-foreground)]/45">
            {projectIndex + 1} of {totalProjects}
          </span>
          <button
            onClick={onNext}
            disabled={projectIndex === totalProjects - 1}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 text-[11px] font-medium transition-all disabled:opacity-30 hover:bg-[var(--card)]"
            style={{ borderColor: projectIndex === totalProjects - 1 ? "var(--border)" : `${accent}30`, color: projectIndex === totalProjects - 1 ? "var(--muted-foreground)" : accent }}
          >
            Next
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Project list panel ────────────────────────────────────────────────────────

function ProjectListPanel({
  region,
  projects,
  activeIndex,
  onSelect,
}: {
  region: ProjectRegion;
  projects: { name: string; location: string; type: string }[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const accent = regionAccent[region];

  return (
    <div className="flex h-full flex-col">
      {/* Panel header */}
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-4" style={{ background: `${accent}08` }}>
        <span className="text-[22px] leading-none">{regionFlag[region]}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>{region}</p>
          <p className="text-[10.5px] text-[var(--muted-foreground)]">{projects.length} project references</p>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {projects.map((project, i) => {
          const isActive = i === activeIndex;
          const hasImg = Boolean(projectGallery[project.name]?.length);
          return (
            <button
              key={project.name}
              onClick={() => onSelect(i)}
              className="group relative flex w-full items-start gap-3.5 border-b border-[var(--border)] px-5 py-4 text-left transition-colors last:border-b-0"
              style={{ backgroundColor: isActive ? `${accent}0d` : "transparent" }}
            >
              <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full transition-all duration-200"
                style={{ backgroundColor: accent, opacity: isActive ? 1 : 0 }} aria-hidden="true" />

              <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold"
                style={{ color: isActive ? accent : "var(--muted-foreground)", opacity: isActive ? 1 : 0.5 }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] leading-snug" style={{ fontWeight: isActive ? 700 : 500, color: "var(--foreground)" }}>
                  {project.name}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-[var(--muted-foreground)]">{project.location}</p>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em]"
                  style={{ backgroundColor: `${accent}12`, color: accent }}>
                  {typeAbbrev(project.type)}
                </span>
                {hasImg && <span className="text-[9px] text-[var(--muted-foreground)]/50">📷</span>}
              </div>

              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-opacity"
                style={{ color: accent, opacity: isActive ? 0.8 : 0 }} />
            </button>
          );
        })}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3">
        <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]/40">
          TUR Hardware Supply · Project Archive
        </p>
      </div>
    </div>
  );
}

// ── Advanced region sidebar ───────────────────────────────────────────────────

function RegionSidebar({
  activeRegion,
  onSelect,
}: {
  activeRegion: ProjectRegion;
  onSelect: (r: ProjectRegion) => void;
}) {
  return (
    <aside className="shrink-0 lg:sticky lg:top-24 lg:w-[272px] lg:self-start">

      {/* Mobile: scrollable pills */}
      <div className="flex gap-2 overflow-x-auto pb-3 lg:hidden">
        {projectSuccessStories.map(({ region, projects }) => {
          const ra = regionAccent[region];
          const isActive = activeRegion === region;
          return (
            <button key={region} onClick={() => onSelect(region)}
              className="shrink-0 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all"
              style={{ borderColor: isActive ? ra : "var(--border)", color: isActive ? ra : "var(--muted-foreground)", backgroundColor: isActive ? `${ra}10` : "transparent" }}>
              <span className="text-[12px] leading-none">{regionFlag[region]}</span>
              {region} ({projects.length})
            </button>
          );
        })}
      </div>

      {/* Desktop: full navigation panel */}
      <nav className="hidden lg:flex lg:flex-col lg:gap-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]" aria-label="Project region navigation">
        {groupOrder.map((group, gi) => {
          const regions = projectSuccessStories.filter((r) => r.group === group);
          const ga = groupAccent[group];
          const totalInGroup = regions.reduce((a, r) => a + r.projects.length, 0);
          const hasActiveInGroup = regions.some((r) => r.region === activeRegion);

          return (
            <div key={group} className="border-b border-[var(--border)] last:border-b-0">

              {/* Group header */}
              <div
                className="flex items-center gap-3 px-4 py-3.5"
                style={{ background: hasActiveInGroup ? `${ga}12` : `${ga}07` }}
              >
                {/* Group icon */}
                <div
                  className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-xl border text-[15px]"
                  style={{ borderColor: `${ga}30`, backgroundColor: `${ga}14` }}
                >
                  {groupFlag[group]}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.24em]" style={{ color: ga }}>
                    {groupShortLabels[group]}
                  </p>
                  <p className="text-[9.5px] text-[var(--muted-foreground)]/60">
                    {regions.length} {regions.length === 1 ? "country" : "countries"}
                  </p>
                </div>

                {/* Total badge */}
                <span
                  className="shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-mono font-bold"
                  style={{ backgroundColor: `${ga}18`, color: ga }}
                >
                  {totalInGroup}
                </span>
              </div>

              {/* Region rows */}
              <div className="divide-y divide-[var(--border)]/50">
                {regions.map(({ region, projects }) => {
                  const ra = regionAccent[region];
                  const isActive = activeRegion === region;
                  const flag = regionFlag[region];

                  return (
                    <button
                      key={region}
                      onClick={() => onSelect(region)}
                      className="group relative flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-150"
                      style={{ backgroundColor: isActive ? `${ra}0e` : "transparent" }}
                    >
                      {/* Active left bar */}
                      <span
                        className="absolute bottom-0 left-0 top-0 w-[3px] rounded-r transition-all duration-200"
                        style={{ backgroundColor: ra, opacity: isActive ? 1 : 0, transform: isActive ? "none" : "scaleY(0.3)" }}
                        aria-hidden="true"
                      />

                      {/* Flag box */}
                      <div
                        className="flex h-[28px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] border text-[17px] leading-none transition-all duration-150"
                        style={{
                          borderColor: isActive ? `${ra}40` : "var(--border)",
                          backgroundColor: isActive ? `${ra}12` : "color-mix(in srgb, var(--border) 35%, transparent)",
                          filter: isActive ? "none" : "grayscale(0.3) opacity(0.75)",
                          boxShadow: isActive ? `0 0 0 2px ${ra}20` : "none",
                        }}
                      >
                        {flag}
                      </div>

                      {/* Country name */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="truncate text-[12px] leading-snug transition-all duration-150"
                          style={{ color: isActive ? ra : "var(--foreground)", fontWeight: isActive ? 700 : 450 }}
                        >
                          {region}
                        </p>
                        {isActive && (
                          <p className="truncate text-[9.5px] text-[var(--muted-foreground)]/60">
                            {projects.length} reference{projects.length !== 1 ? "s" : ""}
                          </p>
                        )}
                      </div>

                      {/* Count / arrow */}
                      {isActive ? (
                        <ChevronRight className="h-3.5 w-3.5 shrink-0" style={{ color: ra }} />
                      ) : (
                        <span
                          className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-mono font-semibold"
                          style={{ backgroundColor: "color-mix(in srgb, var(--border) 70%, transparent)", color: "var(--muted-foreground)" }}
                        >
                          {projects.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer stat */}
      <p className="mt-3 hidden text-center text-[10px] text-[var(--muted-foreground)]/40 lg:block">
        {projectSuccessStories.reduce((a, r) => a + r.projects.length, 0)} total project references across 12 regions
      </p>
    </aside>
  );
}

// ── Main showcase ─────────────────────────────────────────────────────────────

export function ProjectShowcase() {
  const [activeRegion, setActiveRegion] = useState<ProjectRegion>("UAE");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => { setActiveProjectIndex(0); }, [activeRegion]);

  const currentData = projectSuccessStories.find((r) => r.region === activeRegion)!;

  const handlePrev = () => setActiveProjectIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveProjectIndex((i) => Math.min(currentData.projects.length - 1, i + 1));

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">

      <RegionSidebar activeRegion={activeRegion} onSelect={setActiveRegion} />

      {/* Split panel: list + detail */}
      <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] lg:ml-6">
        {projectSuccessStories.map(({ region, projects, group }) => (
          <div
            key={region}
            className={`h-full ${activeRegion === region ? "flex" : "hidden"} flex-col lg:flex-row`}
            aria-hidden={activeRegion !== region}
          >
            {/* Left: project list */}
            <div className="w-full border-b border-[var(--border)] lg:w-[42%] lg:border-b-0 lg:border-r">
              <ProjectListPanel
                region={region}
                projects={projects}
                activeIndex={activeRegion === region ? activeProjectIndex : 0}
                onSelect={setActiveProjectIndex}
              />
            </div>

            {/* Right: detail + gallery */}
            <div className="w-full lg:w-[58%]">
              <ProjectDetailPanel
                project={projects[Math.min(activeRegion === region ? activeProjectIndex : 0, projects.length - 1)]}
                projectIndex={Math.min(activeRegion === region ? activeProjectIndex : 0, projects.length - 1)}
                totalProjects={projects.length}
                region={region}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
