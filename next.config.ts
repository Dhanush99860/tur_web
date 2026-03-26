import type { NextConfig } from "next";
import { legacyStaticRedirects } from "./src/lib/seo/legacy-redirects";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return legacyStaticRedirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent,
    }));
  },
};

export default nextConfig;
