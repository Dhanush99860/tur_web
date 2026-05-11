"use client";

import { useEffect, useEffectEvent, useId, useRef, useState } from "react";
import { drawerSupportLinks, mainNavigation } from "@/content/site/navigation";
import { siteConfig, siteContact } from "@/content/site/site-config";
import { CloseIcon, ChevronDownIcon, MailIcon, PhoneIcon } from "@/components/shared/icons";
import { SiteLogo } from "@/components/shared/site-logo";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const focusableSelector =
  'a[href], button:not([disabled]), summary, textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ onClose, open }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!open) return;

    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab") return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      lastFocusedRef.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="nav-drawer-reveal absolute inset-y-0 left-0 flex w-full max-w-[22rem] flex-col border-r border-[var(--nav-line)] bg-[var(--background)] shadow-[var(--nav-shadow)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--nav-line)] px-5 py-4">
          <div id={titleId}>
            <SiteLogo className="h-[3.4rem] w-[9rem]" sizes="144px" />
          </div>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-line)] text-[var(--foreground)] transition duration-200 hover:bg-[var(--nav-soft)]"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <nav aria-label="Site navigation" className="grid gap-2">
            {mainNavigation.map((item) => {
              const isOpen = openSection === item.label;

              return item.panel ? (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-[1rem] border border-[var(--nav-line)]"
                >
                  {/* Accordion trigger — split into nav link + chevron toggle */}
                  <div className="flex items-stretch">
                    <SmartLink
                      href={item.href}
                      onClick={onClose}
                      className="flex flex-1 items-center px-5 py-4 text-[1rem] font-medium tracking-[-0.02em] text-[var(--foreground)]"
                    >
                      {item.label}
                    </SmartLink>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenSection(isOpen ? null : item.label)}
                      className="flex w-12 shrink-0 items-center justify-center border-l border-[var(--nav-line)] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      <ChevronDownIcon
                        className={cn(
                          "h-4 w-4 transition-transform duration-300 ease-in-out",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </div>

                  {/* Animated accordion body */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div className="border-t border-[var(--nav-line)] px-4 py-4">
                        {/* Overview link */}
                        <SmartLink
                          href={item.href}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 pb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"
                        >
                          View all {item.label} →
                        </SmartLink>

                        {/* Groups */}
                        <div className="grid gap-3">
                          {item.panel.groups.map((group) => (
                            <div key={`${item.label}-${group.label}`}>
                              {/* Group label */}
                              <div className="flex items-center justify-between mb-2 px-1">
                                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                                  {group.label}
                                </p>
                                {group.href ? (
                                  <SmartLink
                                    href={group.href}
                                    onClick={onClose}
                                    className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                  >
                                    All
                                  </SmartLink>
                                ) : null}
                              </div>

                              {/* Items — labels only, no descriptions */}
                              <div className="grid gap-1">
                                {group.items.map((link) => (
                                  <SmartLink
                                    key={`${item.label}-${group.label}-${link.key}`}
                                    href={link.href}
                                    onClick={onClose}
                                    className="rounded-[0.65rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] px-3.5 py-2.5 text-[0.9rem] font-medium tracking-[-0.015em] text-[var(--foreground)] transition duration-150 hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))]"
                                  >
                                    {link.label}
                                  </SmartLink>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.comingSoon ? (
                <div
                  key={item.label}
                  className="flex cursor-not-allowed select-none items-center justify-between rounded-[1rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] px-5 py-4 opacity-40"
                >
                  <span className="text-[1rem] font-medium tracking-[-0.02em] text-[var(--foreground)]">
                    {item.label}
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    Soon
                  </span>
                </div>
              ) : (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-[1rem] border border-[var(--nav-line)] px-5 py-4 text-[1rem] font-medium tracking-[-0.02em] text-[var(--foreground)] transition duration-150 hover:border-[var(--accent)] hover:bg-[var(--nav-soft)]"
                >
                  {item.label}
                </SmartLink>
              );
            })}
          </nav>

          {/* Quick support */}
          <div className="mt-6">
            <p className="mb-3 px-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Quick Support
            </p>
            <div className="grid gap-2">
              {drawerSupportLinks.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-[1rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] px-5 py-3.5 text-[0.9rem] font-medium text-[var(--foreground)] transition duration-150 hover:border-[var(--accent)]"
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: contact info */}
        <div className="border-t border-[var(--nav-line)] bg-[var(--nav-soft)] px-5 py-4">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            Contact
          </p>
          <div className="grid gap-2.5">
            <a
              href={siteContact.phoneHref}
              className="flex items-center gap-3 text-[0.88rem] font-medium text-[var(--foreground)] transition duration-150 hover:text-[var(--accent)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--nav-line)] bg-[var(--background)]">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-[0.88rem] font-medium text-[var(--foreground)] transition duration-150 hover:text-[var(--accent)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--nav-line)] bg-[var(--background)]">
                <MailIcon className="h-3.5 w-3.5" />
              </span>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
