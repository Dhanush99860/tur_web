import type { HomeHero } from "@/types";
import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { CoverImage } from "@/components/shared/cover-image";
import { ArrowUpRightIcon } from "@/components/shared/icons";
import { SmartLink } from "@/components/shared/smart-link";

type HeroStageProps = {
  hero: HomeHero;
};

export function HeroStage({ hero }: HeroStageProps) {
  return (
    <CoverImage
      src={hero.image}
      alt={hero.imageAlt}
      priority
      sizes="100vw"
      className="group/hero-stage relative min-h-[calc(100svh-9.5rem)] overflow-hidden rounded-[1.75rem] border border-white/8 sm:min-h-[calc(100svh-10rem)] lg:min-h-[calc(100svh-10.75rem)]"
      imageClassName="object-cover object-center scale-[1.03] transition-transform duration-[12s] ease-out group-hover/hero-stage:scale-100"
      overlayClassName="bg-[linear-gradient(108deg,rgba(4,8,10,0.82)_0%,rgba(4,8,10,0.55)_42%,rgba(4,8,10,0.22)_68%,rgba(4,8,10,0.38)_100%)]"
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Left vignette — deep editorial shadow */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[52%] bg-[linear-gradient(90deg,rgba(4,8,10,0.72)_0%,rgba(4,8,10,0.36)_60%,transparent_100%)]"
      />

      {/* Top edge highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_30%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.12)_70%,transparent_100%)]"
      />

      {/* Accent glow — bottom left atmospheric */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] blur-[96px]"
      />

      {/* Diagonal accent line — decorative */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-[0.07]"
      >
        <div
          className="absolute -left-20 top-0 h-full w-px origin-top-left rotate-[18deg] bg-[linear-gradient(180deg,transparent,var(--accent)_30%,var(--accent)_70%,transparent)]"
          style={{ left: "18%" }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8 xl:px-10">

        {/* ── Main grid ── */}
        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,25rem)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,27rem)] 2xl:grid-cols-[minmax(0,1.05fr)_28rem]">

          {/* ── Left: Copy ── */}
          <div className="hero-content-reveal flex max-w-[42rem] flex-col justify-center gap-0">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_85%,white)]" />
              </span>
              <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--accent)_72%,white)]">
                {hero.eyebrow}
              </span>
              <span className="h-px flex-1 max-w-[3rem] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent)_50%,transparent),transparent)]" />
            </div>

            {/* Headline */}
            <h1
              aria-label={hero.title}
              className="mt-5 max-w-[38rem] font-display text-[clamp(2.1rem,3.8vw,3.55rem)] font-semibold leading-[1.07] tracking-[-0.025em] text-white"
            >
              {hero.title}
            </h1>

            {/* Rule */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[color-mix(in_srgb,var(--accent)_60%,white)]" />
              <span className="h-px w-full max-w-[10rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)]" />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[30rem] text-[14px] leading-[1.8] tracking-[0.01em] text-white/70 sm:text-[14.5px]">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <SmartLink
                href={hero.primaryCta.href}
                className="button-base group relative inline-flex min-h-[3rem] items-center gap-3 overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--accent)_64%,white)] bg-[var(--accent)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--foreground-inverse)] shadow-[0_8px_32px_-8px_color-mix(in_srgb,var(--accent)_62%,transparent)] transition-all duration-300 hover:gap-4 hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_40px_-8px_color-mix(in_srgb,var(--accent)_70%,transparent)]"
              >
                {/* Shine sweep on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-500 group-hover:translate-x-full"
                />
                <span className="relative truncate">{hero.primaryCta.label}</span>
                <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/18 transition-all duration-300 group-hover:bg-white/28 group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-3 w-3" />
                </span>
              </SmartLink>

              <SmartLink
                href={hero.secondaryCta.href}
                className="button-base group inline-flex min-h-[3rem] items-center gap-3 rounded-full border border-white/14 bg-white/6 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/26 hover:bg-white/10 hover:text-white"
              >
                <span className="truncate">{hero.secondaryCta.label}</span>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6 transition-all duration-300 group-hover:border-white/22 group-hover:bg-white/12 group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-3 w-3" />
                </span>
              </SmartLink>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="hero-content-reveal flex w-full max-w-[28rem] flex-col self-center lg:ml-auto">
            {/* Frosted card frame */}
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.025)_100%)] shadow-[0_32px_72px_-24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
              {/* Card top accent line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_80%,white)_50%,transparent)]"
              />
              {/* Card inner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--accent)_22%,transparent)] blur-[48px]"
              />
              <div className="relative p-1">
                <ContactInquiryForm className="hero-card-reveal" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Metrics strip ── */}
        <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2 xl:grid-cols-4">
          {hero.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="hero-content-reveal group relative overflow-hidden rounded-[1.1rem] border border-white/9 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-white/18 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.04)_100%)]"
            >
              {/* Top shimmer */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_55%,white),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Index badge */}
              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_75%,white)] shadow-[0_0_6px_color-mix(in_srgb,var(--accent)_60%,transparent)]" />
                </div>
                <span className="font-mono text-[8.5px] font-semibold tracking-[0.2em] text-white/28">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Value */}
              <p className="font-display text-[1.12rem] font-semibold leading-none tracking-[-0.04em] text-white transition-all duration-300 group-hover:text-[color-mix(in_srgb,var(--accent)_20%,white)] sm:text-[1.18rem]">
                {metric.value}
              </p>

              {/* Label */}
              <p className="mt-1.5 font-sans text-[8.5px] font-semibold uppercase tracking-[0.2em] text-white/52">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CoverImage>
  );
}
