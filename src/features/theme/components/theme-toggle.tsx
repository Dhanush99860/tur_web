"use client";

import { startTransition, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/shared/icons";
import { applyTheme, resolvePreferredTheme } from "@/features/theme/utils/theme";
import { cn } from "@/lib/utils/cn";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window === "undefined" ? "light" : resolvePreferredTheme(),
  );

  const isDark = theme === "dark";

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] xl:inline-flex">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        className={cn(
          "relative inline-flex h-7 w-14 items-center rounded-full border border-[var(--nav-line)] px-1 transition duration-300",
          isDark ? "bg-[var(--accent)]" : "bg-[var(--nav-soft)]",
        )}
        onClick={() => {
          const nextTheme = isDark ? "light" : "dark";
          startTransition(() => {
            applyTheme(nextTheme);
            setTheme(nextTheme);
          });
        }}
      >
        <span
          className={cn(
            "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm transition duration-300",
            isDark && "translate-x-7 bg-[var(--background)] text-[var(--foreground)]",
          )}
        >
          {isDark ? <MoonIcon className="h-3.5 w-3.5" /> : <SunIcon className="h-3.5 w-3.5" />}
        </span>
      </button>
    </div>
  );
}
