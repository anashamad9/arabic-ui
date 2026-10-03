"use client";

import { Button } from "@coss/ui/components/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@coss/ui/components/combobox";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Fieldset, FieldsetLegend } from "@coss/ui/components/fieldset";
import { Label } from "@coss/ui/components/label";
import {
  Select,
  SelectButton,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { useMemo } from "react";
import { FieldGrid, FieldGridRow } from "@/components/particles/field-grid";

export function GeneralSettingsFields() {
  const languageItems = [
    { label: "العربية", value: "ar" },
    { label: "الإنجليزية (الإنجليزية)", value: "en" },
    { label: "الإسبانية", value: "es" },
    { label: "الفرنسية", value: "fr" },
    { label: "الألمانية", value: "de" },
    { label: "إيطاليا", value: "it" },
  ];

  const timezones = Intl.supportedValuesOf("timeZone");

  const formattedTimezones = useMemo(() => {
    return timezones
      .map((timezone) => {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          timeZoneName: "shortOffset",
        });
        const parts = formatter.formatToParts(new Date());
        const offset =
          parts.find((part) => part.type === "timeZoneName")?.value || "";

        const offsetMatch = offset.match(/GMT([+-]?)(\d+)(?::(\d+))?/);
        const sign = offsetMatch?.[1] === "-" ? -1 : 1;
        const hours = Number.parseInt(offsetMatch?.[2] || "0", 10);
        const minutes = Number.parseInt(offsetMatch?.[3] || "0", 10);
        const totalMinutes = sign * (hours * 60 + minutes);

        return {
          label:
            new Intl.DateTimeFormat("ar", {
              timeZone: timezone,
              timeZoneName: "long",
            })
              .formatToParts(new Date())
              .find((part) => part.type === "timeZoneName")?.value || timezone,
          numericOffset: totalMinutes,
          value: timezone,
        };
      })
      .sort((a, b) => a.numericOffset - b.numericOffset);
  }, [timezones]);

  const defaultTimezone =
    formattedTimezones.find((tz) => tz.value === "Asia/Amman") ??
    formattedTimezones[0];

  const timeFormatItems = [
    { label: "١٢ ساعة", value: "12" },
    { label: "٢٤ ساعة", value: "24" },
  ];

  const startOfWeekItems = [
    { label: "الأحد", value: "sunday" },
    { label: "الاثنين", value: "monday" },
    { label: "الثلاثاء", value: "tuesday" },
    { label: "الأربعاء", value: "wednesday" },
    { label: "الخميس", value: "thursday" },
    { label: "الجمعة", value: "friday" },
    { label: "السبت", value: "saturday" },
  ];

  return (
    <FieldGrid>
      <Field>
        <FieldLabel>اللغة</FieldLabel>
        <Select aria-label="اللغة" defaultValue="ar" items={languageItems}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {languageItems.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </Field>

      <FieldGridRow>
        <Fieldset className="flex w-full flex-col gap-2">
          <Label render={<FieldsetLegend />}>منطقة زمنية</Label>
          <FieldGrid className="gap-4">
            <Field className="contents">
              <Combobox
                autoHighlight
                defaultValue={defaultTimezone}
                items={formattedTimezones}
              >
                <ComboboxTrigger render={<SelectButton />}>
                  <ComboboxValue />
                </ComboboxTrigger>
                <ComboboxPopup aria-label="اختر المنطقة الزمنية">
                  <div className="border-b p-2">
                    <ComboboxInput
                      className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
                      placeholder="أوروبا/روما"
                      showTrigger={false}
                      startAddon={<SearchIcon />}
                    />
                  </div>
                  <ComboboxEmpty>لم يتم العثور على مناطق زمنية.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item.value} value={item}>
                        {item.label}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxPopup>
              </Combobox>
            </Field>
            <Button variant="outline">
              <CalendarIcon />
              <span>تغيير الجدول الزمني</span>
            </Button>
          </FieldGrid>
        </Fieldset>
      </FieldGridRow>

      <Field>
        <FieldLabel>الشكل الزمني</FieldLabel>
        <Select
          aria-label="الشكل الزمني"
          defaultValue="12"
          items={timeFormatItems}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {timeFormatItems.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <FieldDescription>
          هذا إعداد داخلي ولن يؤثر على كيفية عرض الأوقات على صفحات الحجز العامة
          لك أو لأي شخص يقوم بحجزك.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>بداية الأسبوع</FieldLabel>
        <Select
          aria-label="بداية الأسبوع"
          defaultValue="sunday"
          items={startOfWeekItems}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {startOfWeekItems.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </Field>
    </FieldGrid>
  );
}
