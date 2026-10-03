"use client";

import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { FieldGrid } from "@/components/particles/field-grid";

const addEventsToGroups = [
  {
    items: [
      {
        label: "example@cal.com",
        triggerLabel: "example@cal.com (Google - example@cal.com)",
        value: "google-example",
      },
      {
        label: "الفريق",
        triggerLabel: "فريق (جوجل - example@كال)",
        value: "google-team",
      },
    ],
    label: "غوغل (example@كال)",
  },
];

const defaultReminderItems = [
  { label: "استخدام التذكيرات الافتراضية", value: "default" },
  { label: "في الوقت المناسب", value: "0" },
  { label: "قبل 10 دقائق", value: "10" },
  { label: "قبل 30 دقيقة", value: "30" },
  { label: "60 دقيقة قبل", value: "60" },
];

const allAddEventsToItems = addEventsToGroups.flatMap((g) => g.items);

export function CalendarsDemoForm() {
  return (
    <FieldGrid>
      <Field>
        <FieldLabel>إضافة أحداث إلى</FieldLabel>
        <Select
          aria-label="إضافة أحداث إلى"
          defaultValue={allAddEventsToItems.find(
            (item) => item.value === "google-example",
          )}
          itemToStringValue={(item) => item.value}
        >
          <SelectTrigger>
            <SelectValue>
              {(item) => item?.triggerLabel ?? item?.label ?? ""}
            </SelectValue>
          </SelectTrigger>
          <SelectPopup>
            {addEventsToGroups.map((group) => (
              <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectPopup>
        </Select>
        <FieldDescription>
          يمكنك تجاوز هذا على أساس كل حدث في الإعدادات المتقدمة في كل نوع حدث.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>تذكير افتراضي</FieldLabel>
        <Select
          aria-label="تذكير افتراضي"
          defaultValue="default"
          items={defaultReminderItems}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {defaultReminderItems.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <FieldDescription>
          اضبط وقت التذكير الافتراضي للأحداث التي تمت إضافتها إلى تقويم غوغل.
        </FieldDescription>
      </Field>
    </FieldGrid>
  );
}
