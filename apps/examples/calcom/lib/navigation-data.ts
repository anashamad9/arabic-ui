import {
  ActivityIcon,
  CalendarIcon,
  ClockFadingIcon,
  ContactRoundIcon,
  CopyIcon,
  ExternalLinkIcon,
  GiftIcon,
  Grid2x2Plus,
  Link2Icon,
  type LucideIcon,
  RouteIcon,
  SettingsIcon,
  UsersRoundIcon,
  WorkflowIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  badge?: string;
  matchPath?: string;
  items?: {
    title: string;
    url: string;
  }[];
}

export interface User {
  avatar: string;
  email: string;
  name: string;
}

export const navMainItems: NavItem[] = [
  {
    icon: Link2Icon,
    title: "أنواع الأحداث",
    url: "/event-types",
  },
  {
    icon: CalendarIcon,
    matchPath: "/booking",
    title: "الحجوزات",
    url: "/booking/upcoming",
  },
  {
    icon: ClockFadingIcon,
    title: "توافر توافر التوافر",
    url: "/availability",
  },
  {
    icon: ContactRoundIcon,
    title: "الأعضاء",
    url: "/members",
  },
  {
    icon: UsersRoundIcon,
    title: "الفرق",
    url: "/teams",
  },
  {
    icon: Grid2x2Plus,
    items: [
      {
        title: "متجر التطبيقات",
        url: "/apps/store",
      },
      {
        title: "التطبيقات المثبتة",
        url: "/apps/installed",
      },
    ],
    title: "التطبيقات",
    url: "/apps",
  },
  {
    icon: RouteIcon,
    title: "التوجيه",
    url: "/routing",
  },
  {
    icon: WorkflowIcon,
    title: "سير العمل",
    url: "/workflows",
  },
  {
    icon: ActivityIcon,
    title: "التحليلات",
    url: "/insights",
  },
];

export const navFooterItems: NavItem[] = [
  {
    icon: ExternalLinkIcon,
    title: "عرض الصفحة العامة",
    url: "/public",
  },
  {
    icon: CopyIcon,
    title: "نسخ رابط الصفحة العامة",
    url: "#",
  },
  {
    icon: GiftIcon,
    title: "إحالة وكسب",
    url: "/refer",
  },
  {
    icon: SettingsIcon,
    title: "الإعدادات",
    url: "/settings",
  },
];

export const user: User = {
  avatar: "",
  email: "pasqua@example.com",
  name: "باسكوال",
};
