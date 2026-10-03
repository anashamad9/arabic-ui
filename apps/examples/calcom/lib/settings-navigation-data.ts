import {
  CreditCardIcon,
  KeyIcon,
  LockIcon,
  type LucideIcon,
  TerminalIcon,
} from "lucide-react";

export interface SettingsNavChild {
  title: string;
  url: string;
  external?: boolean;
  badge?: {
    label: string;
  };
}

export interface SettingsNavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  avatar?: {
    src: string;
    fallback: string;
  };
  children?: SettingsNavChild[];
}

export const userSettingsItems: SettingsNavItem[] = [
  {
    avatar: {
      fallback: "LT",
      src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
    },
    children: [
      { title: "الملف الشخصي", url: "/settings/my-account/profile" },
      { title: "جنرال جنرال لواء", url: "/settings/my-account/general" },
      { title: "التقويمات", url: "/settings/my-account/calendars" },
      { title: "المؤتمرات", url: "/settings/my-account/conferencing" },
      { title: "مظهر مظهر خارجي", url: "/settings/my-account/appearance" },
      { title: "خارج المكتب", url: "/settings/my-account/out-of-office" },
      {
        title: "دفع الإخطارات",
        url: "/settings/my-account/push-notifications",
      },
      { title: "المزايا", url: "/settings/my-account/features" },
    ],
    title: "لوك تريسي",
    url: "/settings/my-account",
  },
  {
    children: [
      { title: "كلمة المرور", url: "/settings/security/password" },
      { title: "انتحال الشخصية", url: "/settings/security/impersonation" },
      {
        title: "مصادقة عاملين",
        url: "/settings/security/two-factor-auth",
      },
      { title: "الامتثال", url: "/settings/security/compliance" },
    ],
    icon: KeyIcon,
    title: "الأمن",
    url: "/settings/security",
  },
  {
    children: [{ title: "إدارة الفواتير", url: "/settings/billing" }],
    icon: CreditCardIcon,
    title: "الفوترة",
    url: "/settings/billing",
  },
  {
    children: [
      { title: "خطافات الويب", url: "/settings/developer/webhooks" },
      { title: "تفويض الوصول", url: "/settings/developer/oauth" },
      { title: "مفاتيح واجهة برمجية", url: "/settings/developer/api-keys" },
    ],
    icon: TerminalIcon,
    title: "المطوّر",
    url: "/settings/developer",
  },
];

export const adminSettingsItems: SettingsNavItem[] = [
  {
    children: [
      { title: "الأعلام", url: "/settings/admin/flags" },
      { title: "ترخيص ترخيص الترخيص", url: "/settings/admin/license" },
      { title: "الفوترة", url: "/settings/admin/billing" },
      { title: "انتحال الشخصية", url: "/settings/admin/impersonation" },
      { title: "التطبيقات", url: "/settings/admin/apps" },
      { title: "المستخدمون", url: "/settings/admin/users" },
      { title: "المؤسسات", url: "/settings/admin/organizations" },
      { title: "الرسائل القصيرة المقفلة", url: "/settings/admin/locked-sms" },
      { title: "قائمة الحظر", url: "/settings/admin/blocklist" },
      { title: "تفويض الوصول", url: "/settings/admin/oauth" },
      {
        title: "منصات مساحة العمل",
        url: "/settings/admin/workspace-platforms",
      },
      { title: "ملعب", url: "/settings/admin/playground" },
    ],
    icon: LockIcon,
    title: "مسؤول",
    url: "/settings/admin",
  },
];

const teamNavChildren: SettingsNavChild[] = [
  { title: "الملف الشخصي", url: "/settings/teams/47/profile" },
  { title: "الأعضاء", url: "/settings/teams/47/members" },
  {
    badge: { label: "جديد" },
    title: "الأدوار",
    url: "/settings/teams/47/roles",
  },
  { title: "مظهر مظهر خارجي", url: "/settings/teams/47/appearance" },
  { title: "المزايا", url: "/settings/teams/47/features" },
  { title: "الفوترة", url: "/settings/teams/47/billing" },
  { title: "الإعدادات", url: "/settings/teams/47/settings" },
];

export const teamSettingsItems: SettingsNavItem[] = [
  {
    children: teamNavChildren,
    title: "شركة المثال",
    url: "/settings/teams/47",
  },
];

export const orgSettingsItems: SettingsNavItem[] = [
  {
    avatar: {
      fallback: "CC",
      src: "https://pbs.twimg.com/profile_images/1994776674391457792/7utKOMi6_400x400.jpg",
    },
    children: [
      { title: "الملف الشخصي", url: "/settings/organizations/profile" },
      { title: "جنرال جنرال لواء", url: "/settings/organizations/general" },
      {
        title: "إشعارات الضيوف",
        url: "/settings/organizations/guest-notifications",
      },
      {
        external: true,
        title: "الأعضاء",
        url: "/settings/organizations/members",
      },
      { title: "السمات", url: "/settings/organizations/attributes" },
      {
        title: "الخصوصية والأمان",
        url: "/settings/organizations/privacy-security",
      },
      { title: "الدخول الموحد", url: "/settings/organizations/sso" },
      { title: "مزامنة الدليل", url: "/settings/organizations/dsync" },
      {
        external: true,
        title: "توثيق الواجهة البرمجية",
        url: "https://cal.com/docs/api-reference/v2",
      },
      { title: "المزايا", url: "/settings/organizations/features" },
      {
        title: "اعتماد الوفود",
        url: "/settings/organizations/delegation-credential",
      },
      {
        title: "الأدوار والأذونات",
        url: "/settings/organizations/roles-permissions",
      },
      { title: "الفوترة", url: "/settings/organizations/billing" },
      { title: "الخطط", url: "/settings/organizations/plans" },
    ],
    title: "كال",
    url: "/settings/organizations",
  },
];

export const settingsNavItems: SettingsNavItem[] = [
  ...userSettingsItems,
  ...orgSettingsItems,
  ...adminSettingsItems,
];
