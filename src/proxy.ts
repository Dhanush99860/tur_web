import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  copyForwardableSearchParams,
  resolveLegacyFamilyRedirect,
} from "@/lib/seo/legacy-redirects";

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const destinationPathname = resolveLegacyFamilyRedirect(
    request.nextUrl.pathname,
    request.nextUrl.searchParams,
  );

  if (!destinationPathname) {
    return NextResponse.next();
  }

  const destinationUrl = request.nextUrl.clone();
  destinationUrl.pathname = destinationPathname;
  destinationUrl.search = "";
  copyForwardableSearchParams(destinationUrl.searchParams, request.nextUrl.searchParams);

  return NextResponse.redirect(destinationUrl, 308);
}

export const config = {
  matcher: ["/door_hardware/sub/:path*", "/automatic_operators/sub/:path*"],
};
