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
  DialogTrigger,
} from "@coss/ui/components/dialog";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Form } from "@coss/ui/components/form";
import { Input } from "@coss/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@coss/ui/components/input-group";
import {
  NumberField,
  NumberFieldInput,
} from "@coss/ui/components/number-field";
import { Toggle } from "@coss/ui/components/toggle";
import { BoldIcon, ItalicIcon } from "lucide-react";

export function AddEventTypeDialog({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger render={<Button className={className} />}>
        {children}
      </DialogTrigger>
      <DialogPopup className="max-w-xl">
        <DialogHeader>
          <DialogTitle>إضافة نوع حدث جديد</DialogTitle>
          <DialogDescription>
            قم بإعداد أنواع الأحداث لتقديم أنواع مختلفة من الاجتماعات.
          </DialogDescription>
        </DialogHeader>
        <Form className="contents">
          <DialogPanel className="grid gap-6">
            <Field>
              <FieldLabel>العنوان</FieldLabel>
              <Input defaultValue="دردشة سريعة" type="text" />
            </Field>
            <Field>
              <FieldLabel>عنوان رابط</FieldLabel>
              <Input defaultValue="https://i.cal.com/pasquale/" type="text" />
            </Field>
            <Field>
              <FieldLabel>الوصف</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  defaultValue="A quick video meeting."
                  placeholder="أدخل الوصف..."
                />
                <InputGroupAddon
                  align="block-start"
                  className="gap-1 rounded-t-lg border-b bg-muted/72 p-2!"
                >
                  <Toggle aria-label="تبديل الخط العريض" size="sm">
                    <BoldIcon />
                  </Toggle>
                  <Toggle aria-label="تبديل الخط المائل" size="sm">
                    <ItalicIcon />
                  </Toggle>
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel>المدة الزمنية</FieldLabel>
              <InputGroup>
                <NumberField aria-label="أدخل المدة" defaultValue={15} min={1}>
                  <NumberFieldInput className="text-start" />
                </NumberField>
                <InputGroupAddon align="inline-end">
                  <InputGroupText>دقائق</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>إغلاق</DialogClose>
            <Button type="submit">متابعة</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
