import { NextResponse } from "next/server";

export function middleware(req) {
  // Read the raw cookie header
  const cookieHeader = req.headers.get("cookie") || "";
  
  // Manually extract authToken
  const authToken = cookieHeader
    .split("; ")
    .find((cookie) => cookie.startsWith("authToken="))
    ?.split("=")[1];
    
  const pathname = req.nextUrl.pathname;

  const authPaths = ["/login", "/forgot-password", "/reset-password"];
  const protectedPaths = ["/profile"];

  const isAuthRoute = authPaths.includes(pathname);
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  console.log(authToken);
  if (!authToken && isProtected) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (authToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/forgot-password",
    "/reset-password",
    "/profile",
    "/profile/:path*",
  ],
};
