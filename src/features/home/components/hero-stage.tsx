"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeHero } from "@/types";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";
import { cn } from "@/lib/utils/cn";

const SLIDE_DURATION = 6500;
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
        if (startRef.current === 0) startRef.current = timestamp;
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
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* ── Background slides — full frame, image is the hero ── */}
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

      {/* ── Gradients — bottom-heavy so product image shows at top ── */}
      {/* Bottom gradient for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[2] h-[78%] bg-[linear-gradient(0deg,rgba(3,6,8,0.97)_0%,rgba(3,6,8,0.78)_28%,rgba(3,6,8,0.32)_56%,transparent_100%)]"
      />
      {/* Subtle left vignette — just enough contrast for text, doesn't block the image */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-[2] w-[52%] bg-[linear-gradient(90deg,rgba(3,6,8,0.28)_0%,transparent_100%)]"
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
      {/* Accent atmospheric glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 z-[2] h-[480px] w-[480px] rounded-full blur-[96px]"
        style={{ background: "radial-gradient(circle, rgba(134,162,230,0.10) 0%, transparent 70%)" }}
      />
      {/* Top edge shimmer */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[5] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10)_30%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.10)_70%,transparent)]"
      />

      {/* Slide counter — top right */}
      <div className="absolute right-6 top-6 z-[6]">
        <span className="font-mono text-[9px] font-semibold tracking-[0.26em] text-white/30">
          {String(active + 1).padStart(2, "0")}
          <span className="mx-1.5 opacity-50">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── All content pinned to bottom ── */}
      <div className="absolute inset-x-0 bottom-0 z-[6] p-5 sm:p-7 lg:p-9 xl:p-10">

        {/* Eyebrow */}
        <div key={`eyebrow-${active}`} className="hero-slide-text mb-5 flex items-center gap-2.5">
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
            className="h-px w-10 shrink-0"
            style={{ background: "linear-gradient(90deg, rgba(134,162,230,0.42), transparent)" }}
          />
        </div>

        {/* Bottom bar — headline/CTAs left, slide thumbnails right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">

          {/* Left: headline + description + CTAs */}
          <div key={`content-${active}`} className="hero-slide-text flex-1 min-w-0">
            <h1 className="font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.048em] text-white max-w-[22ch]">
              {slide.title}
            </h1>
            {slide.description ? (
              <p className="mt-3 max-w-[42rem] text-[13px] leading-[1.88] text-white/58 sm:text-[13.5px]">
                {slide.description}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Primary CTA — solid white */}
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
              {/* Secondary CTA — frosted glass */}
              <SmartLink
                href={hero.secondaryCta.href}
                className="button-link inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/16"
              >
                {hero.secondaryCta.label}
              </SmartLink>
            </div>
          </div>

          {/* Right: horizontal product thumbnail cards — desktop only */}
          <div className="hidden shrink-0 lg:flex lg:items-end lg:gap-2">
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.label}`}
                  className="group relative overflow-hidden rounded-[0.9rem]"
                  style={{
                    width: isActive ? "172px" : "88px",
                    height: "96px",
                    transition: "width 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {/* Product image */}
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="172px"
                    className={cn(
                      "object-cover object-center transition-all duration-700 ease-out",
                      isActive
                        ? "scale-[1.05] brightness-[0.72]"
                        : "scale-100 brightness-[0.46] group-hover:brightness-[0.60] group-hover:scale-[1.03]",
                    )}
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(3,6,8,0.86)_100%)]" />
                  {/* Border ring */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[0.9rem] transition-all duration-300"
                    style={{
                      boxShadow: isActive
                        ? "inset 0 0 0 1px rgba(134,162,230,0.50)"
                        : "inset 0 0 0 1px rgba(255,255,255,0.10)",
                    }}
                  />
                  {/* Active accent stripe — left edge */}
                  {isActive && (
                    <div
                      className="absolute inset-y-0 left-0 w-[2.5px] rounded-l-[0.9rem]"
                      style={{ background: ACCENT }}
                    />
                  )}
                  {/* Progress bar — bottom */}
                  <div
                    className="absolute bottom-0 left-0 z-10 h-[2px] rounded-full"
                    style={{
                      width: isActive ? `${progress * 100}%` : "0%",
                      background: ACCENT,
                      transition: "none",
                    }}
                  />
                  {/* Label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-2.5">
                    <p
                      className={cn(
                        "truncate text-[8px] font-bold uppercase tracking-[0.18em] transition-colors duration-300",
                        isActive ? "" : "text-white/36 group-hover:text-white/56",
                      )}
                      style={isActive ? { color: "#99b1e8" } : undefined}
                    >
                      {s.label}
                    </p>
                    {isActive && (
                      <p className="mt-0.5 line-clamp-1 text-[9px] font-medium leading-snug text-white/62">
                        {s.title}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile slide tabs — 3 compact buttons */}
          <div className="grid grid-cols-3 gap-2 lg:hidden">
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
        </div>

        {/* Metrics strip — full width, below the bottom bar */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
          {hero.metrics.map((m, i) => (
            <span key={m.label} className="flex items-center gap-3">
              {i > 0 && <span className="h-2.5 w-px shrink-0 bg-white/16" />}
              <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/32">
                {m.value}
              </span>
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
