import type { NextConfig } from "next";
import { legacyStaticRedirects } from "./src/lib/seo/legacy-redirects";

const nextConfig: NextConfig = {
  typedRoutes: true,
  async redirects() {
    return legacyStaticRedirects;
  },
};

export default nextConfig;
