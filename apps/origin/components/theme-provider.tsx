"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { Direction } from "radix-ui";
import { I18nProvider } from "react-aria";
import { z } from "zod";

z.config(z.locales.ar());

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Direction.Provider dir="rtl">
        <I18nProvider locale="ar">{children}</I18nProvider>
      </Direction.Provider>
    </NextThemesProvider>
  );
}
