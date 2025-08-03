import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of valid routes in your application
  const validRoutes = [
    "/",
    "/api", // API routes
  ]

  // Check if the pathname starts with any valid route
  const isValidRoute = validRoutes.some((route) => {
    if (route === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(route)
  })

  // If it's not a valid route and not a static file, redirect to 404
  if (!isValidRoute && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    // Rewrite to the not-found page instead of redirecting
    return NextResponse.rewrite(new URL("/not-found", request.url))
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
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|cursors|.*\\.).*)",
  ],
}
