import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function CoverImage({
  alt,
  children,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
  sizes,
  src,
}: CoverImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {overlayClassName ? (
        <div aria-hidden="true" className={cn("absolute inset-0", overlayClassName)} />
      ) : null}
      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}
