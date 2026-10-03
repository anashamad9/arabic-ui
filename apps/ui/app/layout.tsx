import "./globals.css";

import { fontMono, fontSans } from "@coss/ui/fonts";
import { ThemeProvider } from "@coss/ui/shared/theme-provider";
import type { Metadata } from "next";
import {
  AnchoredToastProvider,
  ToastProvider,
} from "@/registry/default/ui/toast";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  description:
    "مكونات عربية مفتوحة المصدر، مع دعم الاتجاه من اليمين إلى اليسار وخط ثمانية.",
  title: "COSS UI/Arabic | المكونات العربية",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} relative bg-sidebar font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <ToastProvider>
            <AnchoredToastProvider>
              <div className="relative isolate flex min-h-svh flex-col overflow-clip [--header-height:4rem]">
                <div
                  aria-hidden="true"
                  className="container pointer-events-none absolute inset-0 z-45 before:absolute before:inset-y-0 before:-left-3 before:w-px before:bg-border/64 after:absolute after:inset-y-0 after:-right-3 after:w-px after:bg-border/64"
                />
                <div
                  aria-hidden="true"
                  className="container pointer-events-none fixed inset-0 z-45 before:absolute before:top-[calc(var(--header-height)-4.5px)] before:-left-[11.5px] before:z-1 before:-ms-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs/5 after:absolute after:top-[calc(var(--header-height)-4.5px)] after:-right-[11.5px] after:z-1 after:-me-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs/5 dark:after:bg-clip-border dark:before:bg-clip-border"
                />
                <SiteHeader />
                {children}
              </div>
            </AnchoredToastProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
