import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const pathname = req.nextUrl.pathname;

  // ✅ Properly extract token from cookies
  const cookies = req.headers.get("cookie") || "";
  const token = cookies
    .split("; ")
    .find((row) => row.startsWith("auth_refresh="))
    ?.split("=")[1];

  const authPaths = ["/login", "/forgot-password", "/reset-password"];
  const protectedPaths = ["/profile"];

  const isAuthRoute = authPaths.includes(pathname);
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // ✅ Only redirect when accessing a protected route without a token
  if (!token && isProtected) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ If already logged in, prevent access to auth routes
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/login",
    "/forgot-password",
    "/reset-password",
    "/profile",
    "/profile/:path*",
  ],
};
