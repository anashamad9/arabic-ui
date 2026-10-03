"use client";

import { Button } from "@coss/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
} from "@coss/ui/components/dialog";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Input } from "@coss/ui/components/input";
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
import { useEffect, useState } from "react";

interface Disable2FADialogProps {
  onDisabled?: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

type Step = "password" | "verify";

export function Disable2FADialog({
  onDisabled,
  onOpenChange,
  open,
}: Disable2FADialogProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<Step>("password");

  useEffect(() => {
    if (open) {
      setStep("password");
    }
  }, [open]);

  function handleDisable() {
    onDisabled?.();
    onOpenChange(false);
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogPopup showCloseButton={false}>
        {step === "password" && (
          <>
            <DialogHeader>
              <DialogTitle>تعطيل المصادقة الثنائية</DialogTitle>
              <DialogDescription>
                قم بتأكيد كلمة المرور الخاصة بك وأدخل الرمز المكون من ستة أرقام
                من تطبيق المصادقة لتعطيل المصادقة الثنائية.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel>
              <Field>
                <FieldLabel>كلمة المرور</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    aria-label="كلمة المرور"
                    placeholder="أدخل كلمة المرور"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputGroupAddon align="inline-end">
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            aria-label={
                              showPassword
                                ? "إخفاء كلمة المرور"
                                : "إظهار كلمة المرور"
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
                        {showPassword
                          ? "إخفاء كلمة المرور"
                          : "إظهار كلمة المرور"}
                      </TooltipPopup>
                    </Tooltip>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="ghost" />}>
                إلغاء
              </DialogClose>
              <Button onClick={() => setStep("verify")} variant="outline">
                متابعة
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "verify" && (
          <>
            <DialogHeader>
              <DialogTitle>تعطيل المصادقة الثنائية</DialogTitle>
              <DialogDescription>
                أدخل الرمز المكون من ستة أرقام من تطبيق المصادقة الخاص بك
                للتأكيد.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel>
              <Field>
                <FieldLabel>رمز عاملين</FieldLabel>
                <Input
                  aria-label="رمز عاملين"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  type="text"
                />
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="ghost" />}>
                إلغاء
              </DialogClose>
              <Button onClick={handleDisable}>تعطيل</Button>
            </DialogFooter>
          </>
        )}
      </DialogPopup>
    </Dialog>
  );
}
