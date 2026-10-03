"use client";

import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameFooter,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/ui/components/select";
import { useState } from "react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { FieldGrid } from "@/components/particles/field-grid";
import { SettingsToggle } from "@/components/particles/settings-toggle";

const resetIntervalItems = [
  { label: "يوميا", value: "daily" },
  { label: "شهريا", value: "monthly" },
];

const distributionBasisItems = [
  { label: "وقت إنشاء الحجز", value: "booking-creation-time" },
  { label: "وقت بدء الاجتماع", value: "event-start-time" },
];

export function TeamSettingsPageClient() {
  const [resetInterval, setResetInterval] = useState("monthly");
  const [distributionBasis, setDistributionBasis] = useState(
    "booking-creation-time",
  );

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الإعدادات">
          <AppHeaderDescription>إدارة الإعدادات لفريقك</AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <SettingsToggle
          description="تحديد عدد المرات التي يمكن فيها حجز الأعضاء عبر جميع أنواع أحداث الفريق"
          title="الحد من تردد الحجز"
        />

        <SettingsToggle
          defaultChecked
          description="يسمح لمالكي فريقك/المسؤولين بتسجيل الدخول مؤقتًا كما أنت."
          title="انتحال شخصية المستخدم"
        />

        <SettingsToggle
          description="لن يتمكن أعضاء فريقك من رؤية أعضاء الفريق الآخرين عند تشغيله."
          title="جعل الفريق خاص"
        />

        <SettingsToggle
          description="إنشاء إعدادات مسبقة للملاحظات الداخلية التي يمكن تطبيقها على الحجوزات"
          title="إعدادات مسبقة لملاحظات الإلغاء الداخلية"
        />

        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>جولة روبن</CardFrameTitle>
            <CardFrameDescription>
              تخصيص إعدادات روبن المستديرة الافتراضية لهذا الفريق
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <FieldGrid>
                <Field>
                  <FieldLabel>
                    إعادة تعيين الفاصل الزمني لروبن جولة المرجح
                  </FieldLabel>
                  <Select
                    items={resetIntervalItems}
                    onValueChange={(value) => value && setResetInterval(value)}
                    value={resetInterval}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectPopup>
                      {resetIntervalItems.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectPopup>
                  </Select>
                  <FieldDescription>
                    يحدد عدد مرات إعادة تعيين عدد حجز روبن المستديرة لضمان
                    التوزيع المتوازن.
                  </FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>قاعدة التوزيع لـ Round Robin</FieldLabel>
                  <Select
                    items={distributionBasisItems}
                    onValueChange={(value) =>
                      value && setDistributionBasis(value)
                    }
                    value={distributionBasis}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectPopup>
                      {distributionBasisItems.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectPopup>
                  </Select>
                  <FieldDescription>
                    يحدد الطابع الزمني للحدث الذي يستخدم كأساس لتوزيع روبن
                    الجولة المرجحة.
                  </FieldDescription>
                </Field>
              </FieldGrid>
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button disabled>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>
      </div>
    </>
  );
}
