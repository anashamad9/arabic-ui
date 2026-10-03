"use client";

import { Alert, AlertDescription } from "@coss/ui/components/alert";
import { Badge } from "@coss/ui/components/badge";
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
import { Form } from "@coss/ui/components/form";
import { Input } from "@coss/ui/components/input";
import { TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyableField } from "./copyable-field";
import { OAuthClientFormFields } from "./oauth-client-form-fields";

interface OAuthClientSubmittedData {
  clientId: string;
  clientSecret: string;
  name: string;
}

type Step = "form" | "submitted";

interface NewOAuthClientDialogRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function NewOAuthClientDialogRoot({
  open,
  onOpenChange,
}: NewOAuthClientDialogRootProps) {
  const [step, setStep] = useState<Step>("form");
  const [submittedData, setSubmittedData] =
    useState<OAuthClientSubmittedData | null>(null);

  useEffect(() => {
    if (open) {
      setStep("form");
      setSubmittedData(null);
    }
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("clientName") as string) || "تطبيق تفويض الوصول";
    setSubmittedData({
      clientId: "cl_mock_1",
      clientSecret: "cs_mock_1",
      name,
    });
    setStep("submitted");
    form.reset();
  }

  const isFormStep = step === "form";

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogPopup className="max-w-xl" showCloseButton={false}>
        {isFormStep ? (
          <>
            <DialogHeader>
              <DialogTitle>إنشاء عميل تفويض الوصول</DialogTitle>
              <DialogDescription>
                قم بإنشاء عميل تفويض الوصول جديد للسماح لتطبيقات الجهات الخارجية
                بالوصول إلى كال نيابة عن المستخدمين.
              </DialogDescription>
            </DialogHeader>
            <Form className="contents" onSubmit={handleSubmit}>
              <DialogPanel className="grid gap-6">
                <OAuthClientFormFields />
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
          submittedData && (
            <>
              <DialogHeader>
                <DialogTitle>قدم عميل تفويض الوصول</DialogTitle>
                <DialogDescription>
                  تم تقديم عميل تفويض الوصول الخاص بك للموافقة عليه. سوف تتلقى
                  بريدًا إلكترونيًا إذا تمت الموافقة عليه أو رفضه. لا يمكن استخدام
                  عميل تفويض الوصول إلا إذا تمت الموافقة عليه.
                </DialogDescription>
              </DialogHeader>
              <DialogPanel className="flex flex-col gap-6">
                <div>
                  <Badge variant="warning">قيد الانتظار</Badge>
                </div>
                <Field>
                  <FieldLabel>الاسم</FieldLabel>
                  <Input disabled value={submittedData.name} />
                </Field>
                <CopyableField
                  aria-label="هوية العميل"
                  label="هوية العميل"
                  value={submittedData.clientId}
                />
                <CopyableField
                  aria-label="سر العميل"
                  label="سر العميل"
                  value={submittedData.clientSecret}
                />
                <Alert variant="warning">
                  <TriangleAlertIcon />
                  <AlertDescription>
                    يظهر سر العميل هذا مرة واحدة فقط. انسخه الآن - فزت و apos; ر
                    تكون قادرا على مشاهدته مرة أخرى بعد إغلاق هذا الحوار.
                  </AlertDescription>
                </Alert>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button />}>تم القيام به</DialogClose>
              </DialogFooter>
            </>
          )
        )}
      </DialogPopup>
    </Dialog>
  );
}

export { NewOAuthClientDialogRoot };
