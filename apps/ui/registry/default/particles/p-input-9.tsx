"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        aria-label="كلمة المرور مع رؤية التبديل"
        placeholder="أدخل كلمة المرور"
        type={showPassword ? "text" : "password"}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label={
                  showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                }
                onClick={() => setShowPassword(!showPassword)}
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </TooltipTrigger>
          <TooltipPopup>
            {showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
          </TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
