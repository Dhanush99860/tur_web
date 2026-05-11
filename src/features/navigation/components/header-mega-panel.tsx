"use client";

import { type HeaderNavigationItem } from "@/content/site/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";

type HeaderMegaPanelProps = {
  item: HeaderNavigationItem;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function HeaderMegaPanel({
  item,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: HeaderMegaPanelProps) {
  const panel = item.panel;
  if (!panel) return null;

  const colCount = Math.min(panel.groups.length, 6);

  return (
    <div
      className="nav-panel-reveal absolute inset-x-0 top-full border-t border-[var(--nav-line)] bg-[var(--background)] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.16)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PageContainer>
        <div
          className="grid py-5 pb-6"
          style={{
            gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          }}
        >
          {panel.groups.map((group, i) => (
            <div
              key={group.label}
              className="flex flex-col px-5 first:pl-0 last:pr-0"
              style={i > 0 ? { borderLeft: "1px solid var(--nav-line)" } : undefined}
            >
              {/* Group heading — accent, bold, title-case */}
              {group.href ? (
                <SmartLink
                  href={group.href}
                  onClick={onNavigate}
                  className="mb-2.5 text-[11.5px] font-bold leading-none text-[var(--accent)] transition-opacity duration-150 hover:opacity-70"
                >
                  {group.label}
                </SmartLink>
              ) : (
                <p className="mb-2.5 text-[11.5px] font-bold leading-none text-[var(--accent)]">
                  {group.label}
                </p>
              )}

              {/* Items — compact plain text, no bullets */}
              <ul className="flex flex-col">
                {group.items.map((leaf) => (
                  <li key={leaf.key}>
                    <SmartLink
                      href={leaf.href}
                      onClick={onNavigate}
                      className="block py-[4px] text-[12.5px] leading-snug text-[var(--foreground)] opacity-80 transition-[color,opacity] duration-100 hover:text-[var(--accent)] hover:opacity-100"
                    >
                      {leaf.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer — minimal, just View All + Downloads */}
        <div className="flex items-center justify-between border-t border-[var(--nav-line)] py-2">
          <SmartLink
            href={panel.overviewHref ?? "/products"}
            onClick={onNavigate}
            className="text-[10.5px] font-semibold text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            View all {item.label} →
          </SmartLink>
          <SmartLink
            href="/downloads"
            onClick={onNavigate}
            className="text-[10.5px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Downloads
          </SmartLink>
        </div>
      </PageContainer>
    </div>
  );
}
