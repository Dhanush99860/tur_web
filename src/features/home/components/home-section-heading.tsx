import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type HomeSectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  as?: ElementType;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

export function HomeSectionHeading({
  eyebrow,
  title,
  as,
  className,
  eyebrowClassName,
  titleClassName,
}: HomeSectionHeadingProps) {
  const HeadingTag = as ?? "h2";

  return (
    <div className={cn("max-w-[100rem]", className)}>
      <div className="mb-3.5 flex items-center gap-2.5">
        <span className="h-px w-5 bg-[color-mix(in_srgb,var(--accent)_24%,var(--border))]" />
        <p
          className={cn(
            "font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted-foreground)]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      </div>

      <HeadingTag
        className={cn(
          "font-display text-[clamp(2rem,3.5vw,3.2rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--foreground)]",
          "[&_em]:font-normal [&_em]:italic [&_em]:text-[color-mix(in_srgb,var(--accent)_70%,var(--foreground))]",
          "[&_strong]:font-medium",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>
    </div>
  );
}
