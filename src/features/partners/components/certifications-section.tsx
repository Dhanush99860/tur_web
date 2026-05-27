"use client";

import { useState } from "react";
import Image from "next/image";

// ── Data ──────────────────────────────────────────────────────────────────────

const americanStandards = {
  label: "American Standards",
  standards: ["ANSI", "UL Listed (2025)"],
  color: "#1d4ed8",
  products: [
    "Mortise Hinges",
    "Mortise Locks & Latches",
    "Auxiliary Locks",
    "Fire Exit Devices",
    "Door Controls / Closers",
    "Flushbolts",
    "Coordinators",
  ],
  certificates: [
    { file: "R41844", product: "Door Hinges", models: "TA5010–TA6040, TE4110–TES130" },
    { file: "R41836", product: "Single-point Locks & Latches", models: "TA1001, TA1002, TE1500–TE1520" },
    { file: "R40953", product: "Swinging Fire Door Closers", models: "TA7016–TA7903, TE7830–TE7890" },
  ],
  issuedBy: "Synergy Source & Trading BV  ·  Veghel, Netherlands",
  trademark: "tüR  ·  D4E",
};

const europeanStandards = {
  label: "European Standards",
  standards: ["CE Marked", "Intertek", "SKG-IKOB", "Warrington", "TÜV / DIN EN 1303"],
  color: "#15803d",
  products: [
    "Mortise Hinges",
    "Mortise Locks",
    "Panic Devices",
    "Door Controls / Closers",
    "EP Cylinders",
    "Lever Handles",
  ],
  certificates: [
    { file: "0905-CPR-200515-01", product: "Building Hardware – Single-axis hinges", models: "TE1900" },
    { file: "0905-CPR-201232-01", product: "Locks & Latches", models: "TE7768, TE7772V" },
    { file: "0905-CPR-192668-01", product: "Panic Exit Devices / Escape Route", models: "TE7904.TA" },
    { file: "17-001282-PR01",      product: "Door Closers (ift Rosenheim)", models: "TE7777Z" },
    { file: "0757-CPR-231-9016862-1-3", product: "Fire/Smoke Compartment Doors", models: "TE7764.TA" },
  ],
  issuedBy: "Intertek Deutschland GmbH  ·  ift Rosenheim",
  trademark: "tüR International FZCO — Dubai, UAE",
};

const certSlides = [
  { src: "/tur/certifications/slide-27.jpg", label: "ANSI & EN Product Certificates Overview", caption: "Certified product categories — American and European standards" },
  { src: "/tur/certifications/slide-28.jpg", label: "CE Certifications", caption: "5 CE Certificates of Constancy of Performance — Intertek & ift Rosenheim" },
  { src: "/tur/certifications/slide-29.jpg", label: "UL Certifications", caption: "3 UL Product iQ listings — Door Hinges, Locks & Latches, Fire Door Closers" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StandardBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-md border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
      {label}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-[3px] h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.25" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StandardPanel({ data }: { data: typeof americanStandards }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
      {/* Header */}
      <div>
        <div className="mb-1 h-[3px] w-8 rounded-full" style={{ backgroundColor: data.color }} />
        <p className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: data.color }}>
          {data.label}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.standards.map((s) => <StandardBadge key={s} label={s} />)}
        </div>
      </div>

      {/* Products covered */}
      <div>
        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          Products Covered
        </p>
        <ul className="flex flex-col gap-2">
          {data.products.map((p) => (
            <li key={p} className="flex items-start gap-2.5" style={{ color: data.color }}>
              <CheckIcon />
              <span className="text-[12.5px] text-[var(--foreground)]">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificate file numbers */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          Certificate References
        </p>
        <div className="flex flex-col gap-3">
          {data.certificates.map((c) => (
            <div key={c.file} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <code className="rounded bg-[var(--border)] px-2 py-0.5 text-[9.5px] font-mono font-bold text-[var(--foreground)]">
                  {c.file}
                </code>
              </div>
              <p className="pl-0.5 text-[11px] text-[var(--foreground)]">{c.product}</p>
              <p className="pl-0.5 text-[10px] text-[var(--muted-foreground)]">{c.models}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-[var(--border)] pt-4 text-[10px] text-[var(--muted-foreground)]">
        <p>{data.issuedBy}</p>
        <p className="mt-0.5 font-medium text-[var(--foreground)]">Trademark: {data.trademark}</p>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function CertificationsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex flex-col gap-8">

      {/* Two standard panels */}
      <div className="grid gap-4 lg:grid-cols-2">
        <StandardPanel data={americanStandards} />
        <StandardPanel data={europeanStandards} />
      </div>

      {/* Certificate document gallery */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[var(--border)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
              Certificate Documents
            </p>
            <p className="mt-1 text-[13px] text-[var(--foreground)]">
              {certSlides[activeSlide].label}
            </p>
          </div>
          {/* Tab switchers */}
          <div className="flex gap-2">
            {certSlides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className="rounded-lg border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-all"
                style={{
                  borderColor: i === activeSlide ? "var(--accent)" : "var(--border)",
                  backgroundColor: i === activeSlide ? "var(--accent)" : "transparent",
                  color: i === activeSlide ? "white" : "var(--muted-foreground)",
                }}
              >
                {i === 0 ? "Overview" : i === 1 ? "CE Certs" : "UL Certs"}
              </button>
            ))}
          </div>
        </div>

        {/* Image viewer */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            key={activeSlide}
            src={certSlides[activeSlide].src}
            alt={certSlides[activeSlide].label}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain bg-[var(--panel)]"
            priority
          />
        </div>

        {/* Caption + note */}
        <div className="flex flex-col gap-2 border-t border-[var(--border)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="text-[11.5px] text-[var(--muted-foreground)]">
            {certSlides[activeSlide].caption}
          </p>
          <p className="shrink-0 text-[10px] text-[var(--muted-foreground)]/50">
            Full original certificates available on request
          </p>
        </div>
      </div>

    </div>
  );
}
