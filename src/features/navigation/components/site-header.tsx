"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import {
  headerAnnouncement,
  headerUtilityItems,
  mainNavigation,
} from "@/content/site/navigation";
import { siteConfig } from "@/content/site/site-config";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/shared/icons";
import { SiteLogo } from "@/components/shared/site-logo";
import { SmartLink } from "@/components/shared/smart-link";
import { PageContainer } from "@/components/layout/page-container";
import { HeaderMegaPanel } from "@/features/navigation/components/header-mega-panel";
import { SearchPanel } from "@/features/navigation/components/search-panel";
import { MobileMenu } from "@/features/navigation/components/mobile-menu";
import { ThemeToggle } from "@/features/theme/components/theme-toggle";
import { cn } from "@/lib/utils/cn";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [openUtilityMenu, setOpenUtilityMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const activePanel = useMemo(
    () => mainNavigation.find((item) => item.label === openPanel),
    [openPanel],
  );

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function queuePanelClose() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenPanel(null);
    }, 140);
  }

  function openMegaPanel(label: string) {
    clearCloseTimer();
    setSearchOpen(false);
    setOpenUtilityMenu(null);
    setOpenPanel(label);
  }

  function closeMenus() {
    clearCloseTimer();
    setOpenPanel(null);
    setSearchOpen(false);
    setOpenUtilityMenu(null);
  }

  const handleWindowKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenus();
    }
  });

  const handlePointerDown = useEffectEvent((event: MouseEvent) => {
    if (!headerRef.current?.contains(event.target as Node)) {
      closeMenus();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    window.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
      clearCloseTimer();
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-[70]" ref={headerRef}>
        <div className="bg-[var(--nav-strip)] text-[var(--nav-strip-foreground)]">
          <PageContainer className="flex min-h-11 items-center justify-center gap-2 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.18em]">
            <span className="text-[color-mix(in_srgb,var(--nav-strip-foreground)_84%,transparent)]">
              {headerAnnouncement.message}
            </span>
            <SmartLink
              href={headerAnnouncement.ctaHref}
              className="border-b border-current pb-[1px] text-white"
            >
              {headerAnnouncement.ctaLabel}
            </SmartLink>
          </PageContainer>
        </div>

        <header className="border-b border-[var(--nav-line)] bg-[color-mix(in_srgb,var(--background)_98%,transparent)] backdrop-blur-sm">
          <PageContainer className="relative">
            <div
              className="flex min-h-[4.7rem] items-center justify-between gap-5"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={openPanel ? queuePanelClose : undefined}
            >
              <div className="flex min-w-0 items-center gap-4 lg:gap-6 xl:gap-7">
                <button
                  type="button"
                  aria-label="Open navigation"
                  onClick={() => {
                    closeMenus();
                    setMobileMenuOpen(true);
                  }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--foreground)] transition duration-300 hover:bg-[var(--nav-soft)]"
                >
                  <MenuIcon className="h-4 w-4" />
                </button>

                <Link
                  href="/"
                  aria-label={`${siteConfig.shortName} home`}
                  className="shrink-0"
                  onClick={closeMenus}
                >
                  <SiteLogo
                    className="h-[3.65rem] w-[5.8rem] sm:h-[3.9rem] sm:w-[5.5rem]"
                    priority
                    sizes="168px"
                  />
                </Link>

                <nav aria-label="Primary navigation" className="hidden lg:block">
                  <ul className="flex items-center gap-5 xl:gap-7">
                    {mainNavigation.map((item) => {
                      const isCurrent = isActivePath(pathname, item.href);
                      const isOpen = openPanel === item.label;
                      const underlineClassName = cn(
                        "absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[var(--accent)] transition duration-300",
                        isCurrent || isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      );

                      return (
                        <li key={item.label} className="relative">
                          {item.panel ? (
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-haspopup="true"
                              onClick={() => {
                                clearCloseTimer();
                                setSearchOpen(false);
                                setOpenUtilityMenu(null);
                                setOpenPanel((current) =>
                                  current === item.label ? null : item.label,
                                );
                              }}
                              onMouseEnter={() => openMegaPanel(item.label)}
                              onFocus={() => openMegaPanel(item.label)}
                              className={cn(
                                "group relative inline-flex h-[4.7rem] items-center font-sans text-[0.97rem] font-medium tracking-[-0.015em] text-[var(--foreground)] transition duration-300 hover:text-[var(--accent)] xl:text-[1rem]",
                                (isCurrent || isOpen) && "text-[var(--accent)]",
                              )}
                            >
                              <span>{item.label}</span>
                              <span className={underlineClassName} />
                            </button>
                          ) : (
                            <SmartLink
                              href={item.href}
                              onClick={closeMenus}
                              className={cn(
                                "group relative inline-flex h-[4.7rem] items-center font-sans text-[0.97rem] font-medium tracking-[-0.015em] text-[var(--foreground)] transition duration-300 hover:text-[var(--accent)] xl:text-[1rem]",
                                isCurrent && "text-[var(--accent)]",
                              )}
                            >
                              <span>{item.label}</span>
                              <span className={underlineClassName} />
                            </SmartLink>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 xl:gap-5">
                <ThemeToggle />

                <button
                  type="button"
                  aria-label={searchOpen ? "Close search" : "Open search"}
                  aria-expanded={searchOpen}
                  onClick={() => {
                    setOpenUtilityMenu(null);
                    setOpenPanel(null);
                    setSearchOpen((current) => !current);
                  }}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full border text-[var(--foreground)] transition duration-300",
                    searchOpen
                      ? "border-[var(--nav-line)] bg-[var(--nav-soft)] text-[var(--accent)]"
                      : "border-transparent hover:border-[var(--nav-line)] hover:bg-[var(--nav-soft)] hover:text-[var(--accent)]",
                  )}
                >
                  <SearchIcon className="h-4 w-4" />
                </button>

                <div className="hidden items-center gap-4 lg:flex">
                  {headerUtilityItems.map((item) => {
                    const isUtilityMenuOpen = openUtilityMenu === item.label;

                    if (item.options?.length) {
                      return (
                        <div key={item.label} className="relative">
                          <button
                            type="button"
                            aria-expanded={isUtilityMenuOpen}
                            aria-label={`Open ${item.label} options`}
                            onClick={() => {
                              setSearchOpen(false);
                              setOpenPanel(null);
                              setOpenUtilityMenu((current) =>
                                current === item.label ? null : item.label,
                              );
                            }}
                            className={cn(
                              "inline-flex h-10 items-center gap-1 rounded-full border px-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] transition duration-300",
                              isUtilityMenuOpen
                                ? "border-[var(--nav-line)] bg-[var(--nav-soft)] text-[var(--foreground)]"
                                : "border-transparent text-[var(--muted-foreground)] hover:border-[var(--nav-line)] hover:bg-[var(--nav-soft)] hover:text-[var(--foreground)]",
                            )}
                          >
                            <span>{item.label}</span>
                            {item.hasChevron ? (
                              <ChevronDownIcon
                                className={cn(
                                  "h-3.5 w-3.5 transition duration-300",
                                  isUtilityMenuOpen && "rotate-180",
                                )}
                              />
                            ) : null}
                          </button>

                          {isUtilityMenuOpen ? (
                            <div className="nav-panel-reveal absolute right-0 top-[calc(100%+0.9rem)] w-[17rem] rounded-[1.15rem] border border-[var(--nav-line)] bg-[color-mix(in_srgb,var(--background)_96%,var(--nav-soft))] p-3 shadow-[var(--nav-shadow)] backdrop-blur-md">
                              <div className="grid gap-2">
                                {item.options.map((option) => (
                                  <button
                                    key={option.label}
                                    type="button"
                                    disabled={option.disabled}
                                    onClick={() => setOpenUtilityMenu(null)}
                                    className={cn(
                                      "rounded-[0.9rem] px-4 py-3 text-left transition duration-300",
                                      option.disabled
                                        ? "cursor-not-allowed opacity-55"
                                        : "hover:bg-[var(--nav-soft)]",
                                    )}
                                  >
                                    <div className="flex items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-medium text-[var(--foreground)]">
                                          {option.label}
                                        </p>
                                        {option.description ? (
                                          <p className="mt-1 text-xs leading-5 text-[var(--muted-foreground)]">
                                            {option.description}
                                          </p>
                                        ) : null}
                                      </div>
                                      {option.current ? (
                                        <span className="rounded-full bg-[var(--nav-soft)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                                          Current
                                        </span>
                                      ) : null}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      );
                    }

                    if (item.href) {
                      return (
                        <SmartLink
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] transition duration-300 hover:text-[var(--accent)]"
                        >
                          <span>{item.label}</span>
                          {item.hasChevron ? (
                            <ChevronDownIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                          ) : null}
                        </SmartLink>
                      );
                    }

                    return (
                      <span
                        key={item.label}
                        className={cn(
                          "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em]",
                          item.muted
                            ? "text-[var(--muted-foreground)]"
                            : "text-[var(--foreground)]",
                        )}
                      >
                        <span>{item.label}</span>
                        {item.hasChevron ? (
                          <ChevronDownIcon className="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                        ) : null}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {activePanel?.panel ? (
              <HeaderMegaPanel
                key={activePanel.label}
                item={activePanel}
                onNavigate={closeMenus}
                onMouseEnter={clearCloseTimer}
                onMouseLeave={queuePanelClose}
              />
            ) : null}

            {searchOpen ? <SearchPanel onNavigate={closeMenus} /> : null}
          </PageContainer>
        </header>
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
