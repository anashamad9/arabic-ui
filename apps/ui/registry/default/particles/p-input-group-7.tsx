"use client";

import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="كلمة المرور"
        placeholder="كلمة المرور"
        type="password"
      />
      <InputGroupAddon align="inline-end">
        <Popover>
          <PopoverTrigger
            openOnHover
            render={
              <Button
                aria-label="متطلبات كلمة المرور"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <InfoIcon />
          </PopoverTrigger>
          <PopoverPopup side="top" tooltipStyle>
            <p>الحد الأدنى 8 أحرف</p>
          </PopoverPopup>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
}
