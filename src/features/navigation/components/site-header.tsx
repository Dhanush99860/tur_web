"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import {
  headerAnnouncement,
  mainNavigation,
} from "@/content/site/navigation";
import { siteConfig, siteContact } from "@/content/site/site-config";
import {
  ArrowUpRightIcon,
  MenuIcon,
  PhoneIcon,
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
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
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
    }, 80);
  }

  function openMegaPanel(label: string) {
    clearCloseTimer();
    setSearchOpen(false);
    setOpenPanel(label);
  }

  function dismissMegaPanel() {
    clearCloseTimer();
    setOpenPanel(null);
  }

  function closeMenus() {
    clearCloseTimer();
    setOpenPanel(null);
    setSearchOpen(false);
  }

  const handleWindowKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") closeMenus();
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      setOpenPanel(null);
      setSearchOpen((current) => !current);
    }
  });

  const handlePointerDown = useEffectEvent((event: MouseEvent) => {
    if (!headerRef.current?.contains(event.target as Node)) closeMenus();
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

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((i) => (i + 1) % headerAnnouncement.items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-[70]" ref={headerRef}>

        {/* ── Announcement strip — always dark, always white text ── */}
        <div className="relative overflow-hidden bg-[#0f1117]">
          {/* Edge fades — same fixed dark colour */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,#0f1117,transparent)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,#0f1117,transparent)]" />

          <PageContainer className="relative flex min-h-[2.4rem] items-center justify-between gap-4">

            {/* Left — pulsing dot + label */}
            <div className="relative z-20 hidden shrink-0 items-center gap-2 sm:flex">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3055A6] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3055A6]" />
              </span>
              <span className="font-sans text-[8px] font-bold uppercase tracking-[0.22em] text-white/40">
                TUR Global
              </span>
              <span className="h-3 w-px bg-white/10" />
            </div>

            {/* Center — rotating messages */}
            <div className="relative flex min-h-[1.1rem] flex-1 items-center justify-center overflow-hidden">
              {headerAnnouncement.items.map((item, i) => (
                <span
                  key={i}
                  aria-hidden={i !== announcementIndex}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center font-sans text-[9.5px] font-medium uppercase tracking-[0.16em] text-white/75 transition-all duration-500 ease-in-out",
                    i === announcementIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0 pointer-events-none",
                  )}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Right — progress dots + CTA */}
            <div className="relative z-20 hidden shrink-0 items-center gap-3 sm:flex">
              <div className="flex items-center gap-1">
                {headerAnnouncement.items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Announcement ${i + 1}`}
                    onClick={() => setAnnouncementIndex(i)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      i === announcementIndex
                        ? "w-4 bg-[#3055A6]"
                        : "w-1 bg-white/25 hover:bg-white/50",
                    )}
                  />
                ))}
              </div>
              <span className="h-3 w-px bg-white/10" />
              <SmartLink
                href={headerAnnouncement.ctaHref}
                className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                {headerAnnouncement.ctaLabel}
                <ArrowUpRightIcon className="h-2.5 w-2.5" />
              </SmartLink>
            </div>

            {/* Mobile — just the CTA */}
            <SmartLink
              href={headerAnnouncement.ctaHref}
              className="shrink-0 font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 underline underline-offset-2 decoration-white/30 transition duration-200 hover:text-white sm:hidden"
            >
              {headerAnnouncement.ctaLabel}
            </SmartLink>

          </PageContainer>
        </div>

        {/* ── Main header ── */}
        <header className="border-b border-[var(--nav-line)] bg-[color-mix(in_srgb,var(--background)_98%,transparent)] backdrop-blur-sm">
          <PageContainer className="relative">
            <div
              className="flex min-h-[4.2rem] items-center justify-between gap-5"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={openPanel ? queuePanelClose : undefined}
            >
              {/* ── Left: hamburger (mobile only) + logo + desktop nav ── */}
              <div className="flex min-w-0 items-center gap-4 lg:gap-6 xl:gap-7">

                {/* Hamburger — mobile / tablet only */}
                <button
                  type="button"
                  aria-label="Open navigation"
                  onClick={() => {
                    closeMenus();
                    setMobileMenuOpen(true);
                  }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--foreground)] transition duration-200 hover:bg-[var(--nav-soft)] lg:hidden"
                >
                  <MenuIcon className="h-[1.05rem] w-[1.05rem]" />
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

                {/* Desktop nav */}
                <nav aria-label="Primary navigation" className="hidden lg:block">
                  <ul className="flex items-center gap-4 xl:gap-6">
                    {mainNavigation.map((item) => {
                      const isCurrent = isActivePath(pathname, item.href);
                      const isOpen = openPanel === item.label;
                      const underlineClassName = cn(
                        "absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[var(--accent)] transition duration-200",
                        isCurrent || isOpen
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      );

                      return (
                        <li key={item.label} className="relative">
                          {item.comingSoon ? (
                            /* Disabled coming-soon item */
                            <span
                              className="group relative inline-flex h-[4.2rem] cursor-not-allowed items-center gap-1.5 font-sans text-[0.82rem] font-medium tracking-[0.01em] text-[var(--muted-foreground)] opacity-45"
                            >
                              <span>{item.label}</span>
                              <span className="rounded-full border border-[var(--border)] bg-[var(--nav-soft)] px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[0.12em]">
                                Soon
                              </span>
                            </span>
                          ) : item.panel ? (
                            /* Panel item — hover shows panel, click navigates */
                            <SmartLink
                              href={item.href}
                              onClick={closeMenus}
                              onMouseEnter={() => openMegaPanel(item.label)}
                              onFocus={() => openMegaPanel(item.label)}
                              className={cn(
                                "group relative inline-flex h-[4.2rem] items-center font-sans text-[0.82rem] font-medium tracking-[0.01em] text-[var(--foreground)] transition duration-200 hover:text-[var(--accent)]",
                                (isCurrent || isOpen) && "text-[var(--accent)]",
                              )}
                            >
                              <span>{item.label}</span>
                              <span className={underlineClassName} />
                            </SmartLink>
                          ) : (
                            /* Plain link */
                            <SmartLink
                              href={item.href}
                              onClick={closeMenus}
                              onMouseEnter={dismissMegaPanel}
                              onFocus={dismissMegaPanel}
                              className={cn(
                                "group relative inline-flex h-[4.2rem] items-center font-sans text-[0.82rem] font-medium tracking-[0.01em] text-[var(--foreground)] transition duration-200 hover:text-[var(--accent)]",
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

              {/* ── Right: language + phone + theme + search ── */}
              <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">

                {/* Phone — desktop only */}
                <a
                  href={siteContact.phoneHref}
                  className="hidden items-center gap-2 rounded-full border border-transparent px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-foreground)] transition duration-200 hover:border-[var(--nav-line)] hover:bg-[var(--nav-soft)] hover:text-[var(--foreground)] lg:flex"
                >
                  <PhoneIcon className="h-3 w-3 shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>

                <ThemeToggle />

                {/* Search */}
                <button
                  type="button"
                  aria-label={searchOpen ? "Close search" : "Open search (Ctrl+K)"}
                  aria-expanded={searchOpen}
                  onClick={() => {
                    setOpenPanel(null);
                    setSearchOpen((current) => !current);
                  }}
                  className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-full border px-3 transition duration-200",
                    searchOpen
                      ? "border-[var(--nav-line)] bg-[var(--nav-soft)] text-[var(--accent)]"
                      : "border-transparent text-[var(--foreground)] hover:border-[var(--nav-line)] hover:bg-[var(--nav-soft)] hover:text-[var(--accent)]",
                  )}
                >
                  <SearchIcon className="h-4 w-4 shrink-0" />
                  <kbd className="hidden select-none font-mono text-[10px] text-[var(--muted-foreground)] xl:inline">
                    ⌘K
                  </kbd>
                </button>
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

            {searchOpen ? (
              <>
                {/* Backdrop — fixed, behind header (z-70) but above page content */}
                <div
                  className="fixed inset-0 z-[64] bg-black/30 backdrop-blur-[2px]"
                  aria-hidden="true"
                  onClick={closeMenus}
                />
                <SearchPanel onNavigate={closeMenus} />
              </>
            ) : null}
          </PageContainer>
        </header>
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
