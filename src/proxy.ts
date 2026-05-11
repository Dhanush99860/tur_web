import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  copyForwardableSearchParams,
  resolveLegacyFamilyRedirect,
  resolveLegacyProductRedirect,
} from "@/lib/seo/legacy-redirects";

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  // 1. Try product-level redirect first (specific product / listing IDs)
  const productDestination = resolveLegacyProductRedirect(
    request.nextUrl.pathname,
    request.nextUrl.searchParams,
  );

  if (productDestination) {
    const destinationUrl = request.nextUrl.clone();
    destinationUrl.pathname = productDestination;
    destinationUrl.search = "";
    return NextResponse.redirect(destinationUrl, 308);
  }

  // 2. Fall through to family-level redirect
  const familyDestination = resolveLegacyFamilyRedirect(
    request.nextUrl.pathname,
    request.nextUrl.searchParams,
  );

  if (!familyDestination) {
    return NextResponse.next();
  }

  const destinationUrl = request.nextUrl.clone();
  destinationUrl.pathname = familyDestination;
  destinationUrl.search = "";
  copyForwardableSearchParams(destinationUrl.searchParams, request.nextUrl.searchParams);

  return NextResponse.redirect(destinationUrl, 308);
}

export const config = {
  matcher: [
    "/door_hardware/:path*",
    "/automatic_operators/:path*",
  ],
};
