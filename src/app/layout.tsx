import type { Metadata, Viewport } from "next";
import { Archivo, DM_Sans } from "next/font/google";
import { ThemeScript } from "@/features/theme/components/theme-script";
import { createRootMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site/site-config";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial"],
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  display: "swap",
  fallback: ["Arial Narrow", "Aptos", "Segoe UI", "Arial"],
  subsets: ["latin"],
});

export const metadata: Metadata = createRootMetadata();

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColorDark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${dmSans.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
