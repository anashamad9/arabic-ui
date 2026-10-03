"use client";

import { ArrowRightIcon, MicIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="اكتب رسالة..." />
      <InputGroupAddon align="block-end">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="رسالة صوتية"
                className="rounded-full"
                size="icon-sm"
                variant="ghost"
              />
            }
          >
            <MicIcon />
          </TooltipTrigger>
          <TooltipPopup>تسجيل رسالة صوتية</TooltipPopup>
        </Tooltip>
        <InputGroupText className="ms-auto text-muted-foreground text-xs">
          اضغط على Enter لإرسال
        </InputGroupText>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="إرسال رسالة خاصة"
                className="rounded-full"
                size="icon-sm"
              />
            }
          >
            <ArrowRightIcon className="rtl:rotate-180" />
          </TooltipTrigger>
          <TooltipPopup>إرسال</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
