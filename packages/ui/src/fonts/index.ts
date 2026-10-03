import localFont from "next/font/local";

export const fontMono = localFont({
  display: "swap",
  src: "./PaperMono-Regular.woff2",
  variable: "--font-mono",
});

export const fontSans = localFont({
  display: "swap",
  src: [
    { path: "./thmanyahsans-Light.woff2", weight: "300", style: "normal" },
    { path: "./thmanyahsans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./thmanyahsans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./thmanyahsans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./thmanyahsans-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-sans",
});

export const fontHeading = fontSans;
