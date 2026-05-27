import Image from "next/image";

// ── Data ──────────────────────────────────────────────────────────────────────

const americanStandards = {
  label: "American Standards",
  standards: ["ANSI", "UL Listed 2025"],
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
    { file: "R40953", product: "Fire Door Closers", models: "TA7016–TA7903, TE7830–TE7890" },
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
    { file: "0905-CPR-200515-01", product: "Single-axis Hinges", models: "TE1900" },
    { file: "0905-CPR-201232-01", product: "Locks & Latches", models: "TE7768, TE7772V" },
    { file: "0905-CPR-192668-01", product: "Panic Exit Devices", models: "TE7904.TA" },
    { file: "17-001282-PR01",      product: "Door Closers (ift Rosenheim)", models: "TE7777Z" },
    { file: "0757-CPR-231-9016862-1-3", product: "Fire/Smoke Door Sets", models: "TE7764.TA" },
  ],
  issuedBy: "Intertek Deutschland GmbH  ·  ift Rosenheim",
  trademark: "tüR International FZCO — Dubai, UAE",
};

const certBodies = [
  "ANSI",
  "UL — 2025",
  "CE Marked",
  "Intertek",
  "SKG 2-Star",
  "GAI Member",
  "Warrington",
  "TÜV / DIN EN 1303",
  "ISO 9001",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="mt-[3px] h-3 w-3 shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke={color} strokeOpacity="0.22" />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StandardPanel({ data }: { data: typeof americanStandards }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
      {/* Header */}
      <div>
        <div className="mb-1 h-[2.5px] w-6 rounded-full" style={{ backgroundColor: data.color }} />
        <p className="text-[8.5px] font-bold uppercase tracking-[0.28em]" style={{ color: data.color }}>
          {data.label}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {data.standards.map((s) => (
            <span
              key={s}
              className="inline-block rounded border border-[var(--border)] bg-[var(--panel,var(--background))] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Products covered */}
        <div>
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            Products Covered
          </p>
          <ul className="flex flex-col gap-1.5">
            {data.products.map((p) => (
              <li key={p} className="flex items-start gap-2" style={{ color: data.color }}>
                <CheckIcon color={data.color} />
                <span className="text-[11.5px] text-[var(--foreground)]">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificate references */}
        <div>
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            Certificate References
          </p>
          <div className="flex flex-col gap-2.5">
            {data.certificates.map((c) => (
              <div key={c.file} className="flex flex-col gap-0.5">
                <code className="self-start rounded bg-[color-mix(in_srgb,var(--border)_180%,transparent)] px-1.5 py-0.5 text-[8.5px] font-mono font-bold text-[var(--foreground)]">
                  {c.file}
                </code>
                <p className="text-[10.5px] leading-snug text-[var(--foreground)]">{c.product}</p>
                <p className="text-[9.5px] text-[var(--muted-foreground)]">{c.models}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--border)] pt-3 text-[9.5px] text-[var(--muted-foreground)]">
        <p>{data.issuedBy}</p>
        <p className="mt-0.5 font-medium text-[var(--foreground)]">Trademark: {data.trademark}</p>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function CertificationsSection() {
  return (
    <div className="flex flex-col gap-4">

      {/* Two standard panels */}
      <div className="grid gap-4 lg:grid-cols-2">
        <StandardPanel data={americanStandards} />
        <StandardPanel data={europeanStandards} />
      </div>

      {/* Certification body badge strip */}
      <div className="flex flex-wrap gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4">
        <p className="w-full text-[8px] font-bold uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
          Certification Bodies
        </p>
        {certBodies.map((b) => (
          <span
            key={b}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]"
          >
            {b}
          </span>
        ))}
        <span className="ml-auto self-center text-[9px] text-[var(--muted-foreground)]/50">
          Full certificates available on request
        </span>
      </div>

    </div>
  );
}
