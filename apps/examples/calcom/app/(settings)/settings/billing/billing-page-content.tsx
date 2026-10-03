"use client";

import { Button } from "@coss/ui/components/button";
import { Calendar } from "@coss/ui/components/calendar";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
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
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { FieldsetLegend } from "@coss/ui/components/fieldset";
import { Group } from "@coss/ui/components/group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@coss/ui/components/input-group";
import {
  NumberField,
  NumberFieldInput,
} from "@coss/ui/components/number-field";
import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@coss/ui/components/popover";
import { SelectButton } from "@coss/ui/components/select";
import type { DateRange } from "@daypicker/react";
import { ExternalLinkIcon, FileTextIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { FieldGrid } from "@/components/particles/field-grid";

const monthOptions = [
  { label: "يناير 2026", value: "يناير 2026" },
  { label: "فبراير 2026", value: "فبراير 2026" },
  { label: "مارس 2026", value: "مارس 2026" },
  { label: "أبريل 2026", value: "أبريل 2026" },
  { label: "مايو 2026", value: "مايو 2026" },
  { label: "يونيو 2026", value: "يونيو 2026" },
];

export function BillingPageContent() {
  const today = new Date();
  const subDays = (date: Date, days: number) => {
    const next = new Date(date);
    next.setDate(next.getDate() - days);
    return next;
  };
  const startOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const startOfYear = (date: Date) => new Date(date.getFullYear(), 0, 1);
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("ar", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

  const [credits, setCredits] = useState<number | null>(50);
  const [expenseLogMonth, setExpenseLogMonth] = useState("فبراير 2026");
  const [invoiceRange, setInvoiceRange] = useState<DateRange | undefined>({
    from: subDays(today, 6),
    to: today,
  });
  const [invoiceMonth, setInvoiceMonth] = useState(today);
  const [selectedInvoicePreset, setSelectedInvoicePreset] = useState<
    string | null
  >("last-7-days");

  const applyInvoicePreset = (
    presetValue: string,
    range: { from: Date; to: Date },
  ) => {
    setInvoiceRange(range);
    setSelectedInvoicePreset(presetValue);
    setInvoiceMonth(range.to);
  };

  const invoicePresets = [
    {
      label: "اليوم",
      onClick: () => {
        applyInvoicePreset("today", { from: today, to: today });
      },
      value: "today",
    },
    {
      label: "آخر 7 أيام",
      onClick: () => {
        applyInvoicePreset("last-7-days", {
          from: subDays(today, 6),
          to: today,
        });
      },
      value: "last-7-days",
    },
    {
      label: "آخر 30 يوم",
      onClick: () => {
        applyInvoicePreset("last-30-days", {
          from: subDays(today, 29),
          to: today,
        });
      },
      value: "last-30-days",
    },
    {
      label: "الشهر حتى الآن",
      onClick: () => {
        applyInvoicePreset("month-to-date", {
          from: startOfMonth(today),
          to: today,
        });
      },
      value: "month-to-date",
    },
    {
      label: "السنة حتى الآن",
      onClick: () => {
        applyInvoicePreset("year-to-date", {
          from: startOfYear(today),
          to: today,
        });
      },
      value: "year-to-date",
    },
  ];

  const invoiceRangeLabel =
    invoiceRange?.from && invoiceRange?.to
      ? `${formatDate(invoiceRange.from)} - ${formatDate(invoiceRange.to)}`
      : "حدد نطاق التاريخ";

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الفوترة">
          <AppHeaderDescription>
            إدارة جميع الأشياء الفواتير
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <Card className="rounded-b-none!">
            <CardPanel>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardFrameTitle>إدارة الفواتير</CardFrameTitle>
                  <CardFrameDescription>
                    عرض وإدارة تفاصيل الفواتير الخاصة بك
                  </CardFrameDescription>
                </div>
                <Button>
                  بوابة الفوترة
                  <ExternalLinkIcon aria-hidden="true" />
                </Button>
              </div>
            </CardPanel>
          </Card>
        </CardFrame>

        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>الائتمانات</CardFrameTitle>
            <CardFrameDescription>
              عرض وإدارة الاعتمادات لإرسال رسائل رسائل قصيرة
            </CardFrameDescription>
          </CardFrameHeader>
          <Card className="rounded-b-none!">
            <CardPanel>
              <FieldGrid>
                <div>
                  <FieldsetLegend className="inline" render={<div />}>
                    الرصيد الحالي:{" "}
                    <span className="font-normal text-muted-foreground">0</span>
                  </FieldsetLegend>
                </div>
                <Field className="md:col-start-1">
                  <div className="flex items-center gap-2">
                    <FieldLabel>اعتمادات إضافية</FieldLabel>
                  </div>
                  <Group aria-label="اعتمادات إضافية" className="w-full gap-2">
                    <InputGroup>
                      <NumberField
                        aria-label="الائتمانات"
                        min={1}
                        onValueChange={(value) => setCredits(value ?? 0)}
                        value={credits}
                      >
                        <NumberFieldInput className="text-start" />
                      </NumberField>
                      <InputGroupAddon align="inline-end">
                        <InputGroupText>الائتمانات</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <div>
                      <Button variant="outline">شراء</Button>
                    </div>
                  </Group>
                  <FieldDescription>
                    رصيد واحد يساوي 1 ¢ (دولار أمريكي).
                  </FieldDescription>
                </Field>
                <Field className="md:col-start-1">
                  <FieldLabel>تحميل سجل النفقات</FieldLabel>
                  <Group
                    aria-label="تحميل سجل النفقات"
                    className="w-full gap-2"
                  >
                    <Combobox
                      autoHighlight
                      items={monthOptions}
                      onValueChange={(item) =>
                        item && setExpenseLogMonth(item.value)
                      }
                      value={
                        monthOptions.find((m) => m.value === expenseLogMonth) ??
                        null
                      }
                    >
                      <ComboboxTrigger render={<SelectButton />}>
                        <ComboboxValue />
                      </ComboboxTrigger>
                      <ComboboxPopup aria-label="اختر الشهر">
                        <div className="border-b p-2">
                          <ComboboxInput
                            placeholder="على سبيل المثال فبراير 2026"
                            showTrigger={false}
                            startAddon={<SearchIcon />}
                          />
                        </div>
                        <ComboboxEmpty>لم يتم العثور على أشهر.</ComboboxEmpty>
                        <ComboboxList>
                          {(item: (typeof monthOptions)[0]) => (
                            <ComboboxItem key={item.value} value={item}>
                              {item.label}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxPopup>
                    </Combobox>
                    <div>
                      <Button variant="outline">تنزيل</Button>
                    </div>
                  </Group>
                </Field>
              </FieldGrid>
            </CardPanel>
          </Card>
        </CardFrame>

        <CardFrame>
          <CardFrameHeader>
            <div className="flex w-full items-center justify-between gap-4">
              <CardFrameTitle>الفواتير</CardFrameTitle>
              <Popover>
                <PopoverTrigger render={<SelectButton className="w-fit" />}>
                  {invoiceRangeLabel}
                </PopoverTrigger>
                <PopoverPopup align="end" className="p-0">
                  <div className="flex max-sm:flex-col">
                    <div className="relative max-sm:order-1 max-sm:border-t max-sm:pt-2 sm:py-1">
                      <div className="flex h-full flex-col gap-0.5 sm:min-w-36 sm:border-e sm:pe-2">
                        {invoicePresets.map((preset) => (
                          <Button
                            className="justify-start"
                            data-pressed={
                              selectedInvoicePreset === preset.value
                                ? ""
                                : undefined
                            }
                            key={preset.label}
                            onClick={preset.onClick}
                            variant="ghost"
                          >
                            {preset.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Calendar
                      className="max-sm:pb-2 sm:ps-2"
                      mode="range"
                      month={invoiceMonth}
                      numberOfMonths={1}
                      onMonthChange={setInvoiceMonth}
                      onSelect={(range) => {
                        setInvoiceRange(range);
                        setSelectedInvoicePreset(null);
                      }}
                      selected={invoiceRange}
                    />
                  </div>
                </PopoverPopup>
              </Popover>
            </div>
          </CardFrameHeader>
          <Card className="rounded-b-none!">
            <CardPanel className="p-0">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <FileTextIcon />
                  </EmptyMedia>
                  <EmptyTitle>لم يتم العثور على فواتير</EmptyTitle>
                  <EmptyDescription>
                    لم يتم العثور على فواتير في نطاق التاريخ المحدد.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </CardPanel>
          </Card>
        </CardFrame>

        <div className="mt-2 text-center text-muted-foreground/72 text-sm">
          هل تحتاج إلى مساعدة؟{" "}
          <Link
            className="text-muted-foreground underline hover:text-foreground"
            href="#"
          >
            دعم الاتصال
          </Link>
        </div>
      </div>
    </>
  );
}
