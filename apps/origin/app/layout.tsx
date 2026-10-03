import { fontHeading, fontSans } from "@coss/ui/fonts";
import type { Metadata, Viewport } from "next";
import { Toaster as Sonner } from "@/registry/default/ui/sonner";
import { Toaster } from "@/registry/default/ui/toaster";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import TopBanner from "@/components/top-banner";

import "./globals.css";

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

export const metadata: Metadata = {
  description:
    "مكونات عربية مفتوحة المصدر، مع دعم الاتجاه من اليمين إلى اليسار وخط ثمانية.",
  title: "COSS UI/Arabic | المكونات السابقة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <TopBanner />
          <div className="overflow-hidden px-4 has-data-home:bg-zinc-50 has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 supports-[overflow:clip]:overflow-clip sm:px-6 dark:has-data-home:bg-zinc-950 dark:has-not-data-home:before:hidden">
            <div className="relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:absolute after:inset-y-0 after:-right-12 after:w-px after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
