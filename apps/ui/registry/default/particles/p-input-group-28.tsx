"use client";

import { ImageIcon, PaperclipIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="اكتب رسالتك..." rows={4} />
      <InputGroupAddon align="block-end" className="justify-between">
        <TooltipProvider>
          <div className="flex gap-1">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label="إرفاق ملف"
                    size="icon-sm"
                    variant="ghost"
                  />
                }
              >
                <PaperclipIcon />
              </TooltipTrigger>
              <TooltipPopup>إرفاق ملف</TooltipPopup>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label="إدراج صورة"
                    size="icon-sm"
                    variant="ghost"
                  />
                }
              >
                <ImageIcon />
              </TooltipTrigger>
              <TooltipPopup>إدراج صورة</TooltipPopup>
            </Tooltip>
          </div>
        </TooltipProvider>
        <Button size="sm">إرسال</Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
