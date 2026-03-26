import Image from "next/image";
import { siteConfig } from "@/content/site/site-config";
import { cn } from "@/lib/utils/cn";

type SiteLogoProps = {
  variant?: "default" | "white";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteLogo({
  variant = "default",
  className,
  imageClassName,
  priority = false,
  sizes = "180px",
}: SiteLogoProps) {
  const src = variant === "white" ? siteConfig.logoWhitePath : siteConfig.logoPath;

  return (
    <span className={cn("relative block h-[4.15rem] w-[10.8rem]", className)}>
      <Image
        src={src}
        alt={siteConfig.shortName}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-contain object-left", imageClassName)}
      />
    </span>
  );
}
