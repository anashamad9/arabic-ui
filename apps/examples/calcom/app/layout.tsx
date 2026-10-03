import "./globals.css";

import {
  AnchoredToastProvider,
  ToastProvider,
} from "@coss/ui/components/toast";
import { fontMono, fontSans } from "@coss/ui/fonts";
import { ThemeProvider } from "@coss/ui/shared/theme-provider";
import type { Metadata } from "next";
import { AppCommand } from "@/components/app/app-command";
import { DebugProvider } from "@/components/debug-context";

export const metadata: Metadata = {
  description: "مكتبة واجهات عربية مفتوحة المصدر",
  metadataBase: new URL("http://localhost:3001"),
  title: "COSS UI/Arabic | واجهات عربية",
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
          <ToastProvider position="bottom-center">
            <AnchoredToastProvider>
              <DebugProvider>
                <AppCommand />
                {children}
              </DebugProvider>
            </AnchoredToastProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
