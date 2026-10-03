"use client";

import { ArrowUpIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="اسأل أو ابحث أو دردش..." />
      <InputGroupAddon align="block-end">
        <Menu>
          <Tooltip>
            <TooltipTrigger
              render={
                <MenuTrigger
                  render={
                    <Button
                      aria-label="إضافة ملفات"
                      className="rounded-full"
                      size="icon-sm"
                      variant="ghost"
                    />
                  }
                >
                  <PlusIcon />
                </MenuTrigger>
              }
            />
            <TooltipPopup>إضافة الملفات والمزيد</TooltipPopup>
          </Tooltip>
          <MenuPopup align="start">
            <MenuItem>إضافة الصور &amp; الملفات</MenuItem>
            <MenuItem>إنشاء صورة</MenuItem>
            <MenuItem>التفكير</MenuItem>
            <MenuItem>البحث العميق</MenuItem>
          </MenuPopup>
        </Menu>
        <InputGroupText className="ms-auto">78 ٪ المستخدمة</InputGroupText>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="إرسال"
                className="rounded-full"
                size="icon-sm"
                variant="default"
              >
                <ArrowUpIcon />
              </Button>
            }
          />
          <TooltipPopup>إرسال</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
