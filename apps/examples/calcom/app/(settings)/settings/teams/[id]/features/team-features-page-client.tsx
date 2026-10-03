"use client";

import { Card, CardFrame, CardPanel } from "@coss/ui/components/card";
import { toastManager } from "@coss/ui/components/toast";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@coss/ui/components/toggle-group";
import { useState } from "react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

type EnhancedBookingsState = "disabled" | "enabled" | "inherit";

export function TeamFeaturesPageClient() {
  const [enhancedBookings, setEnhancedBookings] =
    useState<EnhancedBookingsState>("inherit");
  const [autoOptIn, setAutoOptIn] = useState(false);

  function handleEnhancedBookingsChange(values: readonly string[]) {
    const newValue = values[0] as EnhancedBookingsState | undefined;
    if (!newValue) return;
    setEnhancedBookings(newValue);
    toastManager.add({
      title: "تحديث الإعدادات بنجاح",
      type: "success",
    });
  }

  function handleAutoOptInChange(checked: boolean) {
    setAutoOptIn(checked);
    toastManager.add({
      title: "تحديث الإعدادات بنجاح",
      type: "success",
    });
  }

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="المزايا">
          <AppHeaderDescription>
            إدارة الميزات التجريبية لفريقك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <Card>
            <CardPanel>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-sm">الحجوزات المحسنة</p>
                  <p className="text-muted-foreground text-sm">
                    صفحة حجز معاد تصميمها بما في ذلك عرض التقويم.
                  </p>
                </div>
                <ToggleGroup
                  className="shrink-0"
                  onValueChange={handleEnhancedBookingsChange}
                  value={[enhancedBookings]}
                  variant="outline"
                >
                  <ToggleGroupItem aria-label="تعطيل" value="disabled">
                    تعطيل
                  </ToggleGroupItem>
                  <ToggleGroupSeparator />
                  <ToggleGroupItem aria-label="تفعيل" value="enabled">
                    تفعيل
                  </ToggleGroupItem>
                  <ToggleGroupSeparator />
                  <ToggleGroupItem
                    aria-label="السماح للمستخدمين بتحديد"
                    value="inherit"
                  >
                    السماح للمستخدمين بتحديد
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </CardPanel>
          </Card>
        </CardFrame>

        <SettingsToggle
          checked={autoOptIn}
          description="اختيار أعضاء الفريق تلقائيًا في ميزات تجريبية جديدة ، ما لم يتم تكوينها من قبل المؤسسة أو إلغاء الاشتراك من قبل الأعضاء"
          onCheckedChange={handleAutoOptInChange}
          title="اختيار تلقائي للميزات التجريبية المستقبلية"
        />
      </div>
    </>
  );
}
