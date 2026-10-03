"use client";

import { DirectionProvider } from "@base-ui/react/direction-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
import { z } from "zod";

z.config(z.locales.ar());

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      {...props}
    >
      <DirectionProvider direction="rtl">{children}</DirectionProvider>
    </NextThemesProvider>
  );
}
