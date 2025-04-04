import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for a non-existent static file
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/favicon.ico") ||
    request.nextUrl.pathname.startsWith("/robots.txt") ||
    request.nextUrl.pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next()
  }

  // Handle broken links that aren't covered by redirects
  const brokenPaths = ["/investor", "/invest", "/news", "/blog", "/faq"]
  if (brokenPaths.some((path) => request.nextUrl.pathname === path)) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Check for dashboard access - verify authentication
  if (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/portfolio")) {
    // Check for authentication token
    const sessionToken = request.cookies.get("session_token")?.value

    if (!sessionToken) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    // In a real app, you would verify the token here
    // For now, we'll just check if it exists
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

