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
      className="group/hero-stage min-h-[calc(100svh-9.5rem)] overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[var(--shadow-strong)] sm:min-h-[calc(100svh-10rem)] lg:min-h-[calc(100svh-10.75rem)]"
      imageClassName="object-cover object-center"
      overlayClassName="bg-[linear-gradient(92deg,rgba(12,15,15,0.68)_0%,rgba(12,15,15,0.44)_37%,rgba(12,15,15,0.18)_66%,rgba(12,15,15,0.26)_100%)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(14,16,16,0.28))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[46%] bg-[linear-gradient(270deg,rgba(0,0,0,0.34),transparent)]"
      />

      <div className="relative z-10 flex h-full flex-col px-5 py-5 sm:px-7 sm:py-7 lg:px-9 lg:py-8 xl:px-10">
        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,26.5rem)] lg:gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,28rem)] xl:gap-8 2xl:grid-cols-[minmax(0,1.02fr)_29rem]">
          <div className="hero-content-reveal flex max-w-[40rem] flex-col justify-center lg:max-w-[42rem]">
            <div className="flex items-center gap-3 text-white/74">
              <span className="h-px w-10 bg-[color-mix(in_srgb,var(--accent)_62%,white)]" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em]">
                {hero.eyebrow}
              </span>
            </div>

            <div className="mt-5 max-w-[40rem]">
              <h1
                aria-label={hero.title}
                className="max-w-[40rem] font-display text-[clamp(2rem,3.65vw,3.3rem)] font-medium leading-[1.1] tracking-[-0.01em] text-white "
              >
                {hero.title}
              </h1>

              <p className="mt-4 max-w-[28rem] text-[14px] leading-7 text-white/78 sm:text-[15px]">
                {hero.description}
              </p>
            </div>

            <div className="mt-6 grid max-w-[28rem] grid-cols-2 gap-3">
              <SmartLink
                href={hero.primaryCta.href}
                className="button-base group inline-flex min-h-[3.25rem] items-center justify-between gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_76%,white)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_92%,white),color-mix(in_srgb,var(--accent)_78%,black))] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--foreground-inverse)] shadow-[0_20px_34px_-26px_rgba(0,0,0,0.5)] transition duration-300 hover:border-[var(--accent-hover)] hover:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent-hover)_90%,white),color-mix(in_srgb,var(--accent-hover)_76%,black))]"
              >
                <span className="truncate">{hero.primaryCta.label}</span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:bg-white/24">
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
              </SmartLink>

              <SmartLink
                href={hero.secondaryCta.href}
                className="button-base group inline-flex min-h-[3.25rem] items-center justify-between gap-2 rounded-full border border-white/16 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_28px_-24px_rgba(0,0,0,0.44)] transition duration-300 hover:border-white/28 hover:bg-[rgba(255,255,255,0.1)]"
              >
                <span className="truncate">{hero.secondaryCta.label}</span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/7 transition duration-300 group-hover:bg-white/12">
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
              </SmartLink>
            </div>
          </div>

          <div className="hero-content-reveal flex w-full max-w-[28rem] flex-col self-center lg:ml-auto">
            <ContactInquiryForm className="hero-card-reveal" />
          </div>
        </div>

        <div className="mt-auto grid gap-2.5 pt-4 sm:grid-cols-2 xl:grid-cols-4">
          {hero.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="hero-content-reveal group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] px-4 py-3.5 backdrop-blur-sm transition duration-300 hover:border-white/22 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_66%,white),transparent)] opacity-80"
              />
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_70%,white)] shadow-[0_0_0_4px_rgba(255,255,255,0.04)]" />
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-white/38">
                  0{index + 1}
                </span>
              </div>
              <p className="text-[1rem] font-display font-medium leading-none tracking-[-0.05em] text-white sm:text-[1.08rem]">
                {metric.value}
              </p>
              <p className="mt-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CoverImage>
  );
}
