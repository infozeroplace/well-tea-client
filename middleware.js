import { NextResponse } from "next/server";

export function middleware(req) {
  const { value: authToken } = req.cookies.get("authToken") || {};
  const pathname = req.nextUrl.pathname;

  const authPaths = ["/login", "/forgot-password", "/reset-password"];

  const protectedPaths = ["/profile"];

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // Redirect if trying to access protected paths without token
  if (isProtected && !authToken) {
    const url = new URL("/login", req.url);
    url.searchParams.set("redirect", pathname);

    return NextResponse.redirect(url);
  }

  // Redirect if logged in and trying to access auth pages
  if (authPaths.includes(pathname) && authToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/forgot-password", "/reset-password", "/profile"],
};
