export const THEME_STORAGE_KEY = "tur-theme";

export function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.cookie = `tur-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
}

export function resolvePreferredTheme() {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getThemeScript() {
  return `(() => {
    const key = "${THEME_STORAGE_KEY}";
    const root = document.documentElement;
    const stored = window.localStorage.getItem(key);
    const theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    document.cookie = "tur-theme=" + theme + "; path=/; max-age=31536000; SameSite=Lax";
  })();`;
}
