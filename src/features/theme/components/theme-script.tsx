import { getThemeScript } from "@/features/theme/utils/theme";

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />;
}
