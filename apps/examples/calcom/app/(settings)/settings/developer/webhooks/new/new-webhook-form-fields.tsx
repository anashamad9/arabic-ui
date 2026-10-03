"use client";

import { Button } from "@coss/ui/components/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@coss/ui/components/collapsible";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from "@coss/ui/components/combobox";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Group, GroupSeparator } from "@coss/ui/components/group";
import { Input } from "@coss/ui/components/input";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@coss/ui/components/number-field";
import { ScrollArea } from "@coss/ui/components/scroll-area";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { Switch } from "@coss/ui/components/switch";
import { Textarea } from "@coss/ui/components/textarea";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const eventTriggerItems = [
  { label: "إلغاء الحجز", value: "booking-canceled" },
  { label: "تم إنشاء الحجز", value: "booking-created" },
  { label: "رفض الحجز", value: "booking-rejected" },
  { label: "طلب الحجز", value: "booking-requested" },
  { label: "بدء عملية دفع الحجز", value: "booking-payment-initiated" },
  { label: "إعادة جدولة الحجز", value: "booking-rescheduled" },
  { label: "الحجز المدفوع", value: "booking-paid" },
  { label: "الاجتماع المنتهي", value: "meeting-ended" },
  { label: "بدأ الاجتماع", value: "meeting-started" },
];

const timeUnitItems = [
  { label: "مينس", value: "mins" },
  { label: "hours", value: "hours" },
  { label: "days", value: "days" },
];

const webhookVersionItems = [{ label: "2021-10-20", value: "2021-10-20" }];

const payloadVariables = [
  {
    description:
      "اسم حدث عنصر التفعيل (على سبيل المثال ، BOOKING_CREATED ، BOOKING_CANCELLED)",
    name: "عنصر التفعيلحدث",
  },
  { description: "وقت خطاف الويب", name: "خلقت في" },
  { description: "سبيكة نوع الحدث", name: "type" },
  { description: "اسم نوع الحدث", name: "عنوان اللقب" },
  { description: "وقت بدء الحجز", name: "startTime" },
  { description: "الوقت النهائي للحجز", name: "نهاية الوقت" },
  { description: "قائمة رسائل البريد الإلكتروني الحضور", name: "الحضور" },
];

export function NewWebhookFormFields() {
  const [customPayloadOpen, setCustomPayloadOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Field>
        <FieldLabel>عنوان رابط</FieldLabel>
        <Input placeholder="https://example.com/webhook" type="url" />
      </Field>

      <Field>
        <FieldLabel>
          <Switch defaultChecked />
          تفعيل خطاف الويب
        </FieldLabel>
      </Field>

      <Field>
        <FieldLabel>مشغلات الأحداث</FieldLabel>
        <Combobox
          defaultValue={[eventTriggerItems[0], eventTriggerItems[1]]}
          items={eventTriggerItems}
          multiple
        >
          <ComboboxChips>
            <ComboboxValue>
              {(value: { value: string; label: string }[]) => (
                <>
                  {value?.map((item) => (
                    <ComboboxChip aria-label={item.label} key={item.value}>
                      {item.label}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    aria-label="حدد مشغلات الأحداث"
                    placeholder={
                      value.length > 0 ? undefined : "حدد مشغلات الحدث ..."
                    }
                  />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxPopup>
            <ComboboxEmpty>لم يتم العثور على مشغلات الأحداث.</ComboboxEmpty>
            <ComboboxList>
              {(item: { value: string; label: string }) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>
      </Field>

      <Field>
        <FieldLabel>
          كم من الوقت بعد أن لا يظهر المستخدمون في اجتماع الفيديو كال؟
        </FieldLabel>
        <Group
          aria-label="كم من الوقت بعد أن لا يظهر المستخدمون في اجتماع فيديو كال؟"
          className="w-full"
        >
          <NumberField
            aria-label="المدة الزمنية"
            className="gap-0"
            defaultValue={5}
            min={0}
            render={<NumberFieldGroup />}
          >
            <NumberFieldInput className="text-start" />
          </NumberField>
          <GroupSeparator />
          <Select defaultValue="mins" items={timeUnitItems}>
            <SelectTrigger className="w-fit min-w-none">
              <SelectValue />
            </SelectTrigger>
            <SelectPopup>
              {timeUnitItems.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </Group>
      </Field>

      <Field>
        <FieldLabel>سر</FieldLabel>
        <Input type="text" />
      </Field>

      <Field>
        <FieldLabel>خطاف الويب نسخة</FieldLabel>
        <div className="flex items-center gap-2">
          <Select
            aria-label="خطاف الويب نسخة"
            defaultValue="2021-10-20"
            items={webhookVersionItems}
          >
            <SelectTrigger className="w-fit min-w-none">
              <SelectValue />
            </SelectTrigger>
            <SelectPopup>
              {webhookVersionItems.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </div>
        <FieldDescription className="flex items-center gap-1">
          <Link href="#">عرض مستندات الحمولة لهذا الإصدار</Link>
          <ExternalLinkIcon aria-hidden="true" className="size-3" />
        </FieldDescription>
      </Field>

      <Collapsible onOpenChange={setCustomPayloadOpen} open={customPayloadOpen}>
        <Field>
          <FieldLabel>
            <CollapsibleTrigger
              nativeButton={false}
              render={
                <Switch
                  checked={customPayloadOpen}
                  onCheckedChange={setCustomPayloadOpen}
                />
              }
            />
            قالب حمولة مخصص
          </FieldLabel>
        </Field>
        <CollapsiblePanel>
          <div className="mt-4 flex flex-col items-start gap-2">
            <Textarea placeholder={"{\n  \n}"} rows={4} />
            <Collapsible className="w-full">
              <CollapsibleTrigger
                render={<Button size="sm" variant="outline" />}
              >
                عرض المتغيرات المتاحة
              </CollapsibleTrigger>
              <CollapsiblePanel>
                <ScrollArea
                  className="mt-4 h-64 rounded-lg border border-input"
                  overscrollContain
                  scrollbarGutter
                  scrollFade
                >
                  <div className="p-2">
                    <p className="my-1 px-[calc(--spacing(2)+1px)] font-medium text-sm">
                      الحدث والحجز
                    </p>
                    <ul>
                      {payloadVariables.map((variable) => (
                        <li key={variable.name}>
                          <Button
                            className="h-auto! w-full flex-col items-start gap-0.5 px-2 py-1.5 text-start"
                            variant="ghost"
                          >
                            <span className="font-mono text-xs">
                              {`{{${variable.name}}}`}
                            </span>
                            <span className="font-normal text-muted-foreground text-xs">
                              {variable.description}
                            </span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollArea>
              </CollapsiblePanel>
            </Collapsible>
          </div>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
}
