export const appConfig = {
  description:
    "مكتبة مكونات عربية مفتوحة المصدر، قابلة للنسخ والتخصيص، مع دعم الاتجاه من اليمين إلى اليسار وخط ثمانية.",
  name: "COSS UI/Arabic",
  navItems: [
    {
      href: "/docs",
      label: "التوثيق",
    },
    {
      href: "/particles",
      label: "الأمثلة",
    },
  ],
  ogImage: "https://coss.com/og.jpg",
  url: process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui",
};
