import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function PageContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("page-container", className)} {...props} />;
}
