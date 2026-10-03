"use client";

import { Button } from "@coss/ui/components/button";
import { Field, FieldLabel } from "@coss/ui/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@coss/ui/components/input-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { FieldGrid, FieldGridRow } from "@/components/particles/field-grid";

export function PasswordFormFields() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <FieldGrid className="gap-x-6 gap-y-4">
      <Field>
        <FieldLabel>كلمة المرور القديمة</FieldLabel>
        <InputGroup>
          <InputGroupInput
            aria-label="كلمة المرور القديمة"
            placeholder="أدخل كلمة المرور الحالية"
            type={showOldPassword ? "text" : "password"}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label={
                      showOldPassword
                        ? "إخفاء كلمة المرور"
                        : "إظهار كلمة المرور"
                    }
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    size="icon-xs"
                    variant="ghost"
                  />
                }
              >
                {showOldPassword ? <EyeOffIcon /> : <EyeIcon />}
              </TooltipTrigger>
              <TooltipPopup>
                {showOldPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
              </TooltipPopup>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <Field>
        <FieldLabel>كلمة مرور جديدة</FieldLabel>
        <InputGroup>
          <InputGroupInput
            aria-label="كلمة مرور جديدة"
            placeholder="أدخل كلمة المرور الجديدة"
            type={showNewPassword ? "text" : "password"}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label={
                      showNewPassword
                        ? "إخفاء كلمة المرور"
                        : "إظهار كلمة المرور"
                    }
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    size="icon-xs"
                    variant="ghost"
                  />
                }
              >
                {showNewPassword ? <EyeOffIcon /> : <EyeIcon />}
              </TooltipTrigger>
              <TooltipPopup>
                {showNewPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
              </TooltipPopup>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <FieldGridRow className="text-muted-foreground text-xs">
        يجب أن تكون كلمة المرور على الأقل 7 أحرف طويلة تحتوي على رقم واحد على
        الأقل وتحتوي على مزيج من الأحرف الكبيرة والصغيرة.
      </FieldGridRow>
    </FieldGrid>
  );
}
