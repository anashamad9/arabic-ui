"use client";

import { XIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        افتح النافذة المنبثقة
      </PopoverTrigger>
      <PopoverPopup className="w-80">
        <PopoverClose
          aria-label="إغلاق"
          className="absolute end-2 top-2"
          render={<Button size="icon" variant="ghost" />}
        >
          <XIcon />
        </PopoverClose>
        <div className="mb-2">
          <PopoverTitle className="text-base">الإشعارات</PopoverTitle>
          <PopoverDescription>كلكم محاصرون عمل جيد</PopoverDescription>
        </div>
        <PopoverClose render={<Button variant="outline" />}>إغلاق</PopoverClose>
      </PopoverPopup>
    </Popover>
  );
}
