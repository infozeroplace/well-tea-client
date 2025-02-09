"use client";

import { useCheckAuthQuery } from "@/services/features/auth/authApi";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedLayout = ({ children }) => {
  const { isLoading, isError } = useCheckAuthQuery();
  const router = useRouter();
  const pathname = usePathname(); // Get current URL

  useEffect(() => {
    if (isError) {
     return router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isError, pathname, router]);

  if (isLoading) {
    return <p>Authenticating...</p>; // Prevent flashing protected content
  }

  if (isError) {
    return null; // Avoid rendering protected content before redirect
  }

  return <>{children}</>;
};

export default ProtectedLayout;
