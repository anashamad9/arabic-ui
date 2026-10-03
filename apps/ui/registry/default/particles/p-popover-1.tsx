"use client";

import { Button } from "@/registry/default/ui/button";
import { Field } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        افتح النافذة المنبثقة
      </PopoverTrigger>
      <PopoverPopup className="w-80">
        <div className="mb-4">
          <PopoverTitle className="text-base">أرسل لنا ردود الفعل</PopoverTitle>
          <PopoverDescription>دعونا نعرف كيف يمكننا تحسين.</PopoverDescription>
        </div>
        <Form className="flex w-full flex-col gap-4">
          <Field>
            <Textarea
              aria-label="إرسال ملاحظات"
              id="feedback"
              placeholder="كيف يمكننا أن نتحسن؟"
            />
          </Field>
          <Button type="submit">إرسال ملاحظات</Button>
        </Form>
      </PopoverPopup>
    </Popover>
  );
}
