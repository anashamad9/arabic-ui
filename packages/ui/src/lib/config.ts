const uiUrl = process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui";

export const siteConfig = {
  description: "مكتبة مكونات عربية مفتوحة المصدر، مصممة للواجهات من اليمين إلى اليسار.",
  links: {
    github: "https://github.com/anashamad9/arabic-ui",
    twitter: "https://x.com/coss_com",
  },
  name: "COSS UI/Arabic",
  ogImage: "/og.jpg",
  products: [
    { href: uiUrl, id: "ui", label: "المكونات" },
    { href: "/calendar", id: "calendar", label: "التقويم", upcoming: true },
    { href: "/scheduling", id: "scheduling", label: "المواعيد", upcoming: true },
    { href: "/auth", id: "auth", label: "تسجيل الدخول", upcoming: true },
    { href: "/email", id: "email", label: "البريد الإلكتروني", upcoming: true },
    { href: "/video", id: "video", label: "الفيديو", upcoming: true },
    { href: "/payments", id: "payments", label: "المدفوعات", upcoming: true },
    { href: "/sms", id: "sms", label: "الرسائل النصية", upcoming: true },
    { href: "/notifications", id: "notifications", label: "الإشعارات", upcoming: true },
  ],
  url: process.env.NEXT_PUBLIC_COSS_URL || "http://localhost:3001",
};
