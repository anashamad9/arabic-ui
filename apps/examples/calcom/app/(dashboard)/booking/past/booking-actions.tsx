"use client";

import { Button } from "@coss/ui/components/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@coss/ui/components/menu";
import { Skeleton } from "@coss/ui/components/skeleton";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import {
  CalendarClockIcon,
  EllipsisIcon,
  EyeOffIcon,
  FlagIcon,
  InfoIcon,
  MapPinIcon,
  PlayCircleIcon,
  UserPlusIcon,
  XIcon,
} from "lucide-react";

export function BookingActions() {
  return (
    <Menu>
      <Tooltip>
        <MenuTrigger
          render={
            <TooltipTrigger
              render={
                <Button aria-label="الخيارات" size="icon" variant="outline">
                  <EllipsisIcon />
                </Button>
              }
            />
          }
        />
        <TooltipPopup>الخيارات</TooltipPopup>
      </Tooltip>
      <MenuPopup align="end">
        <MenuGroup>
          <MenuGroupLabel>تعديل الحدث</MenuGroupLabel>
          <MenuItem>
            <CalendarClockIcon />
            إعادة جدولة الحجز
          </MenuItem>
          <MenuItem disabled>
            <CalendarClockIcon />
            طلب إعادة جدولة
          </MenuItem>
          <MenuItem>
            <MapPinIcon />
            تحرير الموقع
          </MenuItem>
          <MenuItem>
            <UserPlusIcon />
            إضافة ضيوف
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>بعد الحدث</MenuGroupLabel>
          <MenuItem disabled>
            <PlayCircleIcon />
            عرض التسجيلات
          </MenuItem>
          <MenuItem>
            <InfoIcon />
            عرض تفاصيل الجلسة
          </MenuItem>
          <MenuItem>
            <EyeOffIcon />
            علامة كما لا تظهر
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem variant="destructive">
            <FlagIcon />
            تقرير الحجز
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem disabled variant="destructive">
            <XIcon />
            إلغاء الحدث
          </MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}

export function BookingActionsSkeleton() {
  return <Skeleton className="size-9 rounded-lg sm:size-8" />;
}
