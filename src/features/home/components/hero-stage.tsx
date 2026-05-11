"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeHero } from "@/types";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

const SLIDE_DURATION = 6500;
// Pinned to dark-mode periwinkle — hero is always on a dark overlay regardless of site theme
const ACCENT = "#86a2e6";

type HeroStageProps = {
  hero: HomeHero;
};

export function HeroStage({ hero }: HeroStageProps) {
  const slides = hero.slides.slice(0, 3);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const goTo = (index: number) => {
    if (index === active) return;
    cancelAnimationFrame(rafRef.current);
    startRef.current = 0;
    setProgress(0);
    setActive(index);
  };

  useEffect(() => {
    startRef.current = 0;

    function tick(timestamp: number) {
      if (!pausedRef.current) {
        if (startRef.current === 0) {
          startRef.current = timestamp;
        }

        const p = Math.min((timestamp - startRef.current) / SLIDE_DURATION, 1);
        setProgress(p);
        if (p >= 1) {
          setActive((prev) => (prev + 1) % slides.length);
          startRef.current = timestamp;
          setProgress(0);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, slides.length]);

  const slide = slides[active]!;
  const ctaHref = slide.href ?? `/products/${slide.productSlug}`;

  return (
    <div
      className="relative min-h-[calc(100svh-10.75rem)] overflow-hidden rounded-[1.75rem] border border-white/[0.07]"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {/* ── Background slides ── */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-[900ms] ease-in-out",
            i === active ? "z-[1] opacity-100" : "z-0 opacity-0",
          )}
        >
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            priority={i === 0}
            sizes="(max-width: 1280px) 100vw, 1520px"
            className={cn(
              "object-cover object-center transition-transform duration-[14s] ease-out",
              i === active ? "scale-100" : "scale-[1.04]",
            )}
          />
        </div>
      ))}

      {/* ── Gradient overlays ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(112deg,rgba(3,6,8,0.92)_0%,rgba(3,6,8,0.62)_36%,rgba(3,6,8,0.18)_62%,rgba(3,6,8,0.34)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[2] h-[65%] bg-[linear-gradient(0deg,rgba(3,6,8,0.95)_0%,rgba(3,6,8,0.34)_55%,transparent_100%)]"
      />
      {/* Noise film */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.024]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />
      {/* Accent atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 z-[2] h-[480px] w-[480px] rounded-full blur-[96px]"
        style={{ background: "radial-gradient(circle, rgba(134,162,230,0.12) 0%, transparent 70%)" }}
      />
      {/* Top edge shimmer */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[5] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10)_30%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.10)_70%,transparent)]"
      />

      {/* ── Main content ── */}
      <div className="relative z-[4] flex min-h-[calc(100svh-10.75rem)] gap-3 p-5 sm:p-7 lg:gap-4 lg:p-9 xl:p-10">

        {/* ── Left / main column ── */}
        <div className="flex flex-1 flex-col min-w-0">

          {/* Slide counter — top right of left column */}
          <div className="flex items-start justify-end">
            <span className="font-mono text-[9px] font-semibold tracking-[0.26em] text-white/28">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-1.5 opacity-50">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex-1" />

          {/* ── Text content — key triggers CSS animation on slide change ── */}
          <div key={active} className="hero-slide-text mb-5 max-w-[36rem]">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2.5">
              <span className="relative flex h-[7px] w-[7px] shrink-0">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-55"
                  style={{ background: ACCENT }}
                />
                <span
                  className="relative inline-flex h-[7px] w-[7px] rounded-full"
                  style={{ background: "#95ade9" }}
                />
              </span>
              <span
                className="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em]"
                style={{ color: "#a4b9ec" }}
              >
                {slide.label}
              </span>
              <span
                className="h-px w-10"
                style={{ background: "linear-gradient(90deg, rgba(134,162,230,0.42), transparent)" }}
              />
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(1.85rem,3.5vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
              {slide.title}
            </h1>

            {/* Description */}
            {slide.description ? (
              <p className="mt-3 max-w-[30rem] text-[13px] leading-[1.85] text-white/54 sm:text-[13.5px]">
                {slide.description}
              </p>
            ) : null}

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Primary: solid white — always legible over dark hero overlay in any theme */}
              <SmartLink
                href={ctaHref}
                className="button-link group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-5 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-900 shadow-[0_8px_24px_-6px_rgba(255,255,255,0.28)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_12px_32px_-6px_rgba(255,255,255,0.38)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full skew-x-[-16deg] bg-[linear-gradient(90deg,transparent,rgba(134,162,230,0.18),transparent)] transition-transform duration-500 group-hover:translate-x-full"
                />
                <span className="relative">Explore Product</span>
                <span
                  className="relative inline-flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45"
                  style={{ background: "rgba(134,162,230,0.22)" }}
                >
                  <ArrowUpRightIcon className="h-2.5 w-2.5" />
                </span>
              </SmartLink>

              {/* Secondary: frosted glass */}
              <SmartLink
                href={hero.primaryCta.href}
                className="button-link inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/16"
              >
                {hero.primaryCta.label}
              </SmartLink>
            </div>
          </div>

          {/* ── Mobile slide tabs — visible below lg ── */}
          <div className="mb-4 grid grid-cols-3 gap-2 lg:hidden">
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "group relative overflow-hidden rounded-[0.85rem] border px-3 py-3 text-left transition-all duration-300",
                    isActive
                      ? "border-white/16 bg-white/8"
                      : "border-white/5 bg-white/4 hover:border-white/10 hover:bg-white/6",
                  )}
                >
                  <div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{
                      width: isActive ? `${progress * 100}%` : "0%",
                      background: ACCENT,
                      transition: "none",
                    }}
                  />
                  <span
                    className={cn(
                      "block font-mono text-[7.5px] font-semibold tracking-[0.22em]",
                      !isActive && "text-white/26",
                    )}
                    style={isActive ? { color: "#a4b9ec" } : undefined}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block truncate text-[9.5px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300",
                      isActive ? "text-white" : "text-white/34 group-hover:text-white/55",
                    )}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Metrics strip ── */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {hero.metrics.map((m, i) => (
              <span key={m.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-2.5 w-px shrink-0 bg-white/16" />
                )}
                <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/32">
                  {m.value}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Right column: slide nav cards — desktop only ── */}
        <div className="hidden w-[200px] lg:flex xl:w-[218px]">
          {/* Frosted glass panel wraps all cards */}
          <div className="flex w-full flex-col gap-1.5 self-stretch rounded-[1.4rem] p-1.5 backdrop-blur-[3px] ring-1 ring-inset ring-white/12"
            style={{ background: "rgba(3,6,8,0.28)" }}
          >
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.label}`}
                  className={cn(
                    "group relative overflow-hidden rounded-[1rem] text-left transition-all duration-500 ease-in-out",
                    isActive ? "flex-[2.8]" : "flex-[1.2]",
                  )}
                >
                  {/* Card background image */}
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="218px"
                    className={cn(
                      "object-cover object-center transition-all duration-700 ease-out",
                      isActive
                        ? "scale-[1.04] brightness-[0.78]"
                        : "scale-100 brightness-[0.52] group-hover:brightness-[0.68] group-hover:scale-[1.02]",
                    )}
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(3,6,8,0.88)_100%)]" />

                  {/* Top shimmer line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24)_50%,transparent)]" />

                  {/* Border ring — accent tint for active, white for inactive */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset transition-all duration-300"
                    style={{
                      boxShadow: isActive
                        ? "inset 0 0 0 1px rgba(134,162,230,0.38)"
                        : "inset 0 0 0 1px rgba(255,255,255,0.14)",
                    }}
                  />

                  {/* Active: left accent stripe */}
                  {isActive && (
                    <div
                      className="absolute inset-y-0 left-0 w-[3px] rounded-l-[1rem]"
                      style={{ background: ACCENT }}
                    />
                  )}

                  {/* Active: subtle accent glow at bottom */}
                  {isActive && (
                    <div
                      className="absolute inset-x-0 bottom-0 h-24 opacity-30"
                      style={{ background: "linear-gradient(0deg, rgba(134,162,230,0.22), transparent)" }}
                    />
                  )}

                  {/* Progress bar */}
                  <div
                    className="absolute bottom-0 left-0 z-10 h-[2.5px] rounded-full"
                    style={{
                      width: isActive ? `${progress * 100}%` : "0%",
                      background: ACCENT,
                      transition: "none",
                    }}
                  />

                  {/* Slide number badge — top right */}
                  <span className="absolute right-2 top-2 z-10 rounded-full border border-white/14 bg-black/44 px-1.5 py-[2px] font-mono text-[7px] font-semibold tracking-[0.18em] text-white/44 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Card content — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
                    <span
                      className={cn(
                        "block font-mono text-[7.5px] font-semibold tracking-[0.22em] transition-colors duration-300",
                        !isActive && "text-white/30 group-hover:text-white/46",
                      )}
                      style={isActive ? { color: "#99b1e8" } : undefined}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className={cn(
                        "mt-0.5 truncate text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300",
                        isActive ? "text-white/92" : "text-white/40 group-hover:text-white/60",
                      )}
                    >
                      {s.label}
                    </p>
                    {isActive ? (
                      <p className="mt-1 line-clamp-2 text-[10.5px] font-medium leading-snug text-white/62">
                        {s.title}
                      </p>
                    ) : (
                      <p className="mt-0.5 truncate text-[9px] font-normal leading-snug text-white/28 transition-colors duration-300 group-hover:text-white/42">
                        {s.title}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
