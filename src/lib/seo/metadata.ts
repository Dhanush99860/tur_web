import type { Metadata } from "next";
import { seoDefaults } from "@/content/site/seo";
import { siteConfig } from "@/content/site/site-config";

type MetadataType = "website" | "article";

type CreatePageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: MetadataType;
};

function prefixProtocol(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function resolveMetadataBase() {
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    vercelUrl,
    siteConfig.baseUrl,
  ];

  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }

    try {
      return new URL(prefixProtocol(candidate));
    } catch {
      continue;
    }
  }

  return new URL(siteConfig.baseUrl);
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizePageTitle(title: string) {
  const trimmedTitle = title.trim();
  const brandPattern = new RegExp(
    `(?:\\s*[|:-]\\s*${escapeRegExp(siteConfig.shortName)}|\\s+${escapeRegExp(siteConfig.shortName)})$`,
    "i",
  );
  const normalizedTitle = trimmedTitle.replace(brandPattern, "").trim();

  return normalizedTitle || trimmedTitle;
}

const metadataBase = resolveMetadataBase();

export function absoluteUrl(path = "/") {
  return new URL(path, metadataBase).toString();
}

export function createPageMetadata({
  title,
  description = seoDefaults.defaultDescription,
  path = "/",
  image = seoDefaults.defaultImage,
  keywords = [],
  noIndex = false,
  type = "website",
}: CreatePageMetadataOptions = {}): Metadata {
  const resolvedTitle = title ? normalizePageTitle(title) : undefined;
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialTitle = resolvedTitle
    ? `${resolvedTitle} | ${siteConfig.shortName}`
    : siteConfig.shortName;

  return {
    title: resolvedTitle ?? seoDefaults.defaultTitle,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: siteConfig.shortName,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            "max-image-preview": "none",
            "max-snippet": 0,
            "max-video-preview": 0,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createRootMetadata(): Metadata {
  const metadata = createPageMetadata();

  return {
    ...metadata,
    metadataBase,
    title: {
      default: seoDefaults.defaultTitle,
      template: seoDefaults.titleTemplate,
    },
    applicationName: siteConfig.shortName,
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    manifest: "/favicon/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon/favicon.ico",      sizes: "any",   type: "image/x-icon" },
        { url: "/favicon/favicon.svg",       type: "image/svg+xml" },
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}
