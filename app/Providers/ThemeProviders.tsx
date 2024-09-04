"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export type Themes = "fire" | "dark" | "light";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" themes={["fire", "dark", "light"]}>
      {children}
    </ThemeProvider>
  );
}
