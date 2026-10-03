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
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
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

interface Enable2FADialogProps {
  onEnabled?: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

const MANUAL_SETUP_KEY = "EBBDGDSAJVEA6RTUE4IGKXAJG4IBQWZ5";

type Step = "password" | "scan" | "verify";

export function Enable2FADialog({
  onEnabled,
  onOpenChange,
  open,
}: Enable2FADialogProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<Step>("password");

  useEffect(() => {
    if (open) {
      setStep("password");
    }
  }, [open]);

  function handleEnable() {
    onEnabled?.();
    onOpenChange(false);
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogPopup showCloseButton={false}>
        {step === "password" && (
          <>
            <DialogHeader>
              <DialogTitle>تمكين المصادقة الثنائية</DialogTitle>
              <DialogDescription>
                قم بتأكيد كلمة المرور الحالية للبدء.
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
              <Button onClick={() => setStep("scan")} variant="outline">
                متابعة
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "scan" && (
          <>
            <DialogHeader>
              <DialogTitle>تمكين المصادقة الثنائية</DialogTitle>
              <DialogDescription>
                قم بمسح الصورة أدناه باستخدام تطبيق المصادقة على هاتفك أو أدخل
                الرمز النصي يدويًا بدلاً من ذلك.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel className="flex flex-col items-center gap-4">
              <div
                aria-hidden
                className="aspect-square size-48 shrink-0 bg-black"
              />
              <code className="font-mono text-muted-foreground text-xs">
                {MANUAL_SETUP_KEY}
              </code>
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
              <DialogTitle>تمكين المصادقة الثنائية</DialogTitle>
              <DialogDescription>
                أدخل الرمز المكون من ستة أرقام من تطبيق المصادقة أدناه.
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
                <FieldDescription>
                  تمكين المصادقة الثنائية. يرجى إدخال الرمز المكون من ستة أرقام
                  من تطبيق المصادقة الخاص بك.
                </FieldDescription>
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="ghost" />}>
                إلغاء
              </DialogClose>
              <Button onClick={handleEnable}>تفعيل</Button>
            </DialogFooter>
          </>
        )}
      </DialogPopup>
    </Dialog>
  );
}
