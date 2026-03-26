import { PageContainer } from "@/components/layout/page-container";

type TrustBannerSectionProps = {
  items: readonly string[];
};

export function TrustBannerSection({ items }: TrustBannerSectionProps) {
  const repeated = [...items, ...items];

  return (
    <section className="home-section-shell py-12 sm:py-16">
      <PageContainer>
        <div className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--background)]">
          <div className="flex flex-col items-start justify-between gap-5 border-b border-[var(--border)] px-8 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-9">
            <div className="flex items-baseline gap-4">
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  Integrated Scope
                </p>
                <p className="mt-1 max-w-[80ch] text-[13px] leading-[1.65] text-[var(--muted-foreground)]">
                  Coordinated capability set for specification-led projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Hardware", "Automation", "Access"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden bg-[var(--panel)] py-5
              before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-[var(--panel)] before:to-transparent
              after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-[var(--panel)] after:to-transparent"
          >
            <div
              className="flex w-max items-center gap-2.5"
              style={{ animation: "trust-scroll 36s linear infinite" }}
            >
              {repeated.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-[18px] py-2.5 font-sans text-[13px] font-medium whitespace-nowrap text-[var(--foreground)] transition-colors hover:border-[color-mix(in_srgb,var(--border)_160%,transparent)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      <style>{`
        @keyframes trust-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
