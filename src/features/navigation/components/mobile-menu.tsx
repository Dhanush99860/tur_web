"use client";

import { useEffect, useEffectEvent, useId, useRef } from "react";
import {
  drawerSupportLinks,
  headerUtilityItems,
  mainNavigation,
} from "@/content/site/navigation";
import { CloseIcon, ChevronDownIcon } from "@/components/shared/icons";
import { SiteLogo } from "@/components/shared/site-logo";
import { SmartLink } from "@/components/shared/smart-link";

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

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!open) {
      return;
    }

    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (!focusable.length) {
      return;
    }

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
    if (!open) {
      return;
    }

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

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 bg-black/45"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="nav-drawer-reveal absolute inset-y-0 left-0 flex w-full max-w-[25rem] flex-col overflow-y-auto border-r border-[var(--nav-line)] bg-[var(--background)] shadow-[var(--nav-shadow)]"
      >
        <div className="flex items-center justify-between border-b border-[var(--nav-line)] px-6 py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Navigation
            </p>
            <div id={titleId} className="mt-2">
              <SiteLogo className="h-[3.8rem] w-[10rem]" sizes="160px" />
            </div>
          </div>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--nav-line)] text-[var(--foreground)]"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 px-6 py-6">
          <nav aria-label="Site navigation" className="grid gap-3">
            {mainNavigation.map((item) =>
              item.panel ? (
                <details
                  key={item.label}
                  className="overflow-hidden rounded-[1rem] border border-[var(--nav-line)] bg-[var(--nav-soft)]"
                >
                  <summary className="flex list-none items-center justify-between px-5 py-4 text-left text-[1rem] font-medium tracking-[-0.02em] text-[var(--foreground)]">
                    <span>{item.label}</span>
                    <ChevronDownIcon className="h-4 w-4 text-[var(--muted-foreground)]" />
                  </summary>
                  <div className="border-t border-[var(--nav-line)] px-5 py-4">
                    <SmartLink
                      href={item.href}
                      onClick={onClose}
                      className="inline-flex border-b border-current pb-1 text-sm font-medium text-[var(--foreground)]"
                    >
                      View overview
                    </SmartLink>
                    <div className="mt-4 grid gap-3">
                      {item.panel.groups.map((group) => (
                        <div
                          key={`${item.label}-${group.label}`}
                          className="rounded-[0.95rem] border border-[var(--nav-line)] bg-[var(--background)] px-4 py-3.5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                                {group.label}
                              </p>
                              {group.description ? (
                                <p className="mt-1 text-[13px] leading-5 text-[var(--muted-foreground)]">
                                  {group.description}
                                </p>
                              ) : null}
                            </div>

                            {group.href ? (
                              <SmartLink
                                href={group.href}
                                onClick={onClose}
                                className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                              >
                                Open
                              </SmartLink>
                            ) : null}
                          </div>

                          <div className="mt-3 grid gap-2">
                            {group.items.map((link) => (
                              <SmartLink
                                key={`${item.label}-${group.label}-${link.key}`}
                                href={link.href}
                                onClick={onClose}
                                className="rounded-[0.85rem] border border-[var(--nav-line)] bg-[var(--panel)] px-3.5 py-3"
                              >
                                <span className="block text-[0.98rem] font-medium tracking-[-0.02em] text-[var(--foreground)]">
                                  {link.label}
                                </span>
                                {link.description ? (
                                  <span className="mt-1 block text-sm leading-6 text-[var(--muted-foreground)]">
                                    {link.description}
                                  </span>
                                ) : null}
                              </SmartLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ) : (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-[1rem] border border-[var(--nav-line)] px-5 py-4 text-[1rem] font-medium tracking-[-0.02em] text-[var(--foreground)]"
                >
                  {item.label}
                </SmartLink>
              ),
            )}
          </nav>

          <div className="mt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Quick Support
            </p>
            <div className="mt-4 grid gap-3">
              {drawerSupportLinks.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-[1rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] px-5 py-4 text-sm font-medium text-[var(--foreground)]"
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--nav-line)] px-6 py-5">
          <div className="grid gap-3">
            {headerUtilityItems.map((item) => {
              const currentOption = item.options?.find((option) => option.current);

              if (item.options?.length) {
                return (
                  <div
                    key={item.label}
                    className="rounded-[1rem] border border-[var(--nav-line)] bg-[var(--nav-soft)] px-4 py-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                      {currentOption?.label ?? item.label}
                    </p>
                  </div>
                );
              }

              if (item.href) {
                return (
                  <SmartLink
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                  >
                    {item.label}
                  </SmartLink>
                );
              }

              return (
                <span
                  key={item.label}
                  className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                >
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
