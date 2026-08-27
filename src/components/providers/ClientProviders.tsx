"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
