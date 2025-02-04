"use client";

import { HeroUIProvider } from "@heroui/react";

export function UIProvider({ children }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
