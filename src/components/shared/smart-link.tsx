import Link from "next/link";
import type { Route } from "next";
import type { ComponentPropsWithoutRef } from "react";

type SmartLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

function isExternalHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
}

export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (isExternalHref(href)) {
    const rel =
      props.target === "_blank"
        ? Array.from(new Set([...(props.rel?.split(" ") ?? []), "noopener", "noreferrer"]))
            .join(" ")
            .trim()
        : props.rel;

    return <a href={href} {...props} rel={rel} />;
  }

  return <Link href={href as Route} {...props} />;
}
