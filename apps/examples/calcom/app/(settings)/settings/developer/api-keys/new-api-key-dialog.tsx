"use client";

import { Alert, AlertDescription, AlertTitle } from "@coss/ui/components/alert";
import { Button } from "@coss/ui/components/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@coss/ui/components/collapsible";
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
import { Form } from "@coss/ui/components/form";
import { Input } from "@coss/ui/components/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { Switch } from "@coss/ui/components/switch";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyableField } from "../oauth/copyable-field";

type Step = "form" | "submitted";

interface NewApiKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewApiKeyDialog({ open, onOpenChange }: NewApiKeyDialogProps) {
  const [step, setStep] = useState<Step>("form");
  const [neverExpires, setNeverExpires] = useState(false);
  const [generatedKey, setGeneratedKey] = useState("");

  useEffect(() => {
    if (open) {
      setStep("form");
      setNeverExpires(false);
      setGeneratedKey("");
    }
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneratedKey("cal_live_mock_api_key");
    setStep("submitted");
    e.currentTarget.reset();
  }

  const isFormStep = step === "form";

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogPopup className="max-w-xl" showCloseButton={false}>
        {isFormStep ? (
          <>
            <DialogHeader>
              <DialogTitle>إنشاء مفتاح واجهة برمجية</DialogTitle>
              <DialogDescription>
                تتيح لك مفاتيح واجهة برمجية إجراء مكالمات واجهة برمجية لحسابك
                الخاص.
              </DialogDescription>
            </DialogHeader>
            <Form className="contents" onSubmit={handleSubmit}>
              <DialogPanel className="grid gap-6">
                <Alert variant="info">
                  <InfoIcon />
                  <AlertDescription>
                    هنا يمكننا أن نقول شيئا عن تفويض الوصول مع وصلة إلى
                    المستندات.
                  </AlertDescription>
                </Alert>
                <Field>
                  <FieldLabel>اسم هذا المفتاح</FieldLabel>
                  <Input
                    name="note"
                    placeholder="على سبيل المثال التنمية"
                    type="text"
                  />
                </Field>

                <Collapsible
                  onOpenChange={(open) => setNeverExpires(!open)}
                  open={!neverExpires}
                >
                  <Field>
                    <FieldLabel>
                      <CollapsibleTrigger
                        nativeButton={false}
                        render={
                          <Switch
                            checked={neverExpires}
                            onCheckedChange={(checked) =>
                              setNeverExpires(checked === true)
                            }
                          />
                        }
                      />
                      لا تنتهي أبدا
                    </FieldLabel>
                  </Field>
                  <CollapsiblePanel>
                    <Field className="mt-4">
                      <FieldLabel>انتهاء الصلاحية</FieldLabel>
                      <Select
                        aria-label="انتهاء الصلاحية"
                        defaultValue="30d"
                        items={[
                          { label: "7 أيام", value: "7d" },
                          { label: "30 يوما", value: "30d" },
                          { label: "3 أشهر", value: "3m" },
                          { label: "سنة واحدة", value: "1y" },
                        ]}
                        name="expiresAt"
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectPopup>
                          <SelectItem value="7d">7 أيام</SelectItem>
                          <SelectItem value="30d">30 يوما</SelectItem>
                          <SelectItem value="3m">3 أشهر</SelectItem>
                          <SelectItem value="1y">سنة واحدة</SelectItem>
                        </SelectPopup>
                      </Select>
                      <FieldDescription>
                        ستنتهي صلاحية مفتاح واجهة برمجية في 21-03-2026
                      </FieldDescription>
                    </Field>
                  </CollapsiblePanel>
                </Collapsible>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  إلغاء
                </DialogClose>
                <Button type="submit">إنشاء</Button>
              </DialogFooter>
            </Form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>تم إنشاء مفتاح واجهة برمجية بنجاح</DialogTitle>
              <DialogDescription>
                تم إنشاء مفتاح واجهة برمجية الجديد الخاص بك. انسخه الآن - لن
                تتمكن من رؤيته مرة أخرى.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel className="flex flex-col gap-6">
              <Alert variant="warning">
                <TriangleAlertIcon />
                <AlertTitle>احفظ مفتاح واجهة برمجية هذا في مكان آمن</AlertTitle>
                <AlertDescription>
                  لن تتمكن من عرضه مرة أخرى بمجرد إغلاق هذا النموذج.
                </AlertDescription>
              </Alert>
              <CopyableField
                aria-label="مفتاح واجهة برمجة التطبيقات"
                description="انتهاء الصلاحية 2/19/2027"
                label="مفتاح واجهة برمجية"
                value={generatedKey}
              />
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button />}>تم القيام به</DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogPopup>
    </Dialog>
  );
}
