"use client";

import { Button } from "@coss/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
} from "@coss/ui/components/dialog";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Form } from "@coss/ui/components/form";
import { Input } from "@coss/ui/components/input";
import type { ApiKeyItem } from "./api-keys-list";

interface EditApiKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  apiKey: ApiKeyItem | null;
}

export function EditApiKeyDialog({
  open,
  onOpenChange,
  apiKey,
}: EditApiKeyDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open && !!apiKey}>
      <DialogPopup className="max-w-xl" showCloseButton={false}>
        {apiKey && (
          <>
            <DialogHeader>
              <DialogTitle>تحرير مفتاح واجهة برمجية</DialogTitle>
            </DialogHeader>
            <Form
              className="contents"
              onSubmit={(e) => {
                e.preventDefault();
                onOpenChange(false);
              }}
            >
              <DialogPanel className="grid gap-6">
                <Field>
                  <FieldLabel>اسم هذا المفتاح</FieldLabel>
                  <Input
                    defaultValue={apiKey.note}
                    name="note"
                    placeholder="على سبيل المثال التنمية"
                    type="text"
                  />
                </Field>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  إلغاء
                </DialogClose>
                <Button type="submit">حفظ</Button>
              </DialogFooter>
            </Form>
          </>
        )}
      </DialogPopup>
    </Dialog>
  );
}
