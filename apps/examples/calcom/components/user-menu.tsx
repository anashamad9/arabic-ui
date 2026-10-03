"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@coss/ui/components/avatar";
import { useMediaQuery } from "@coss/ui/hooks/use-media-query";
import {
  GaugeIcon,
  LogOutIcon,
  MessageCircleQuestionMarkIcon,
  MilestoneIcon,
  MonitorDownIcon,
  MoonStarIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";
import type * as React from "react";
import {
  AdaptiveMenu,
  AdaptiveMenuGroup,
  AdaptiveMenuGroupLabel,
  AdaptiveMenuItem,
  AdaptiveMenuPopup,
  AdaptiveMenuSeparator,
  AdaptiveMenuTrigger,
} from "@/components/shared/adaptive-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface UserMenuProps {
  variant?: "sidebar" | "mobile";
}

const triggerButtonClassName = "relative shrink-0 justify-center p-0 lg:size-8";

function UserMenuTriggerContent(): React.ReactElement {
  return (
    <>
      <Avatar className="lg:size-6">
        <AvatarImage
          alt="لوك تريسي"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>ل ت</AvatarFallback>
      </Avatar>
      <span className="absolute right-[3px] bottom-[3px] size-2.5 rounded-full border-2 border-sidebar bg-emerald-500 lg:end-0.5 lg:bottom-0.5" />
      <span className="sr-only">قائمة المستخدمين</span>
    </>
  );
}

export function UserMenu({
  variant = "sidebar",
}: UserMenuProps): React.ReactElement {
  const isBetweenMdAndLg = useMediaQuery("md:max-lg");

  return (
    <AdaptiveMenu>
      <AdaptiveMenuTrigger
        render={<SidebarMenuButton className={triggerButtonClassName} />}
      >
        <UserMenuTriggerContent />
      </AdaptiveMenuTrigger>
      <AdaptiveMenuPopup
        align={variant === "mobile" ? "end" : "start"}
        alignOffset={variant === "sidebar" && isBetweenMdAndLg ? -3 : undefined}
        side={
          variant === "mobile"
            ? "bottom"
            : isBetweenMdAndLg
              ? "right"
              : "bottom"
        }
      >
        <AdaptiveMenuGroup>
          <AdaptiveMenuGroupLabel>لوك تريسي</AdaptiveMenuGroupLabel>
          <AdaptiveMenuItem>
            <UserRoundIcon aria-hidden />
            ملفي الشخصي
          </AdaptiveMenuItem>
          <AdaptiveMenuItem
            render={<Link href="/settings/my-account/general" />}
          >
            <SettingsIcon aria-hidden />
            إعداداتي
          </AdaptiveMenuItem>
          <AdaptiveMenuItem>
            <MoonStarIcon aria-hidden />
            خارج المكتب
          </AdaptiveMenuItem>
        </AdaptiveMenuGroup>
        <AdaptiveMenuSeparator />
        <AdaptiveMenuGroup>
          <AdaptiveMenuItem>
            <MilestoneIcon aria-hidden />
            خريطة الطريق
          </AdaptiveMenuItem>
          <AdaptiveMenuItem>
            <MessageCircleQuestionMarkIcon aria-hidden />
            المساعدة
          </AdaptiveMenuItem>
          <AdaptiveMenuItem>
            <MonitorDownIcon aria-hidden />
            تنزيل تطبيق سطح المكتب
          </AdaptiveMenuItem>
          <AdaptiveMenuItem>
            <GaugeIcon aria-hidden />
            منصة منصة المنصة
          </AdaptiveMenuItem>
        </AdaptiveMenuGroup>
        <AdaptiveMenuSeparator />
        <AdaptiveMenuItem>
          <LogOutIcon aria-hidden />
          تسجيل الدخول
        </AdaptiveMenuItem>
      </AdaptiveMenuPopup>
    </AdaptiveMenu>
  );
}
