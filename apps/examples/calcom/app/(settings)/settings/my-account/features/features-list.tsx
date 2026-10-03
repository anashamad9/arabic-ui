"use client";

import { toastManager } from "@coss/ui/components/toast";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@coss/ui/components/toggle-group";
import { useState } from "react";
import { SettingsToggle } from "@/components/particles";

interface Feature {
  slug: string;
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    description: "جرب صفحة الحجوزات المعاد تصميمها مع تحسين التنقل والتصفية.",
    name: "تجربة حجوزات جديدة",
    slug: "bookings-v3",
  },
];

type FeatureState = "disabled" | "enabled" | "inherit";

export function FeaturesList() {
  const [featureStates, setFeatureStates] = useState<
    Record<string, FeatureState>
  >({
    "bookings-v3": "inherit",
  });

  function handleFeatureChange(slug: string, values: readonly string[]) {
    const newValue = values[0];
    if (!newValue) return;
    const state = newValue as FeatureState;
    setFeatureStates((prev) => ({ ...prev, [slug]: state }));
    toastManager.add({
      title: "تحديث الإعدادات بنجاح",
      type: "success",
    });
  }

  return (
    <div className="space-y-6">
      {features.map((feature) => (
        <div
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          key={feature.slug}
        >
          <div>
            <p className="font-medium text-sm">{feature.name}</p>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </div>
          <ToggleGroup
            className="shrink-0"
            onValueChange={(values) =>
              handleFeatureChange(feature.slug, values)
            }
            value={[featureStates[feature.slug] ?? "inherit"]}
            variant="outline"
          >
            <ToggleGroupItem aria-label="قبالة" value="disabled">
              قبالة
            </ToggleGroupItem>
            <ToggleGroupSeparator />
            <ToggleGroupItem aria-label="مفعّل" value="enabled">
              مفعّل
            </ToggleGroupItem>
            <ToggleGroupSeparator />
            <ToggleGroupItem aria-label="الافتراضي" value="inherit">
              الافتراضي
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  );
}

export function AutoOptInToggle() {
  const [autoOptIn, setAutoOptIn] = useState(false);

  function handleToggle(checked: boolean) {
    setAutoOptIn(checked);
    toastManager.add({
      title: "تحديث الإعدادات بنجاح",
      type: "success",
    });
  }

  return (
    <SettingsToggle
      checked={autoOptIn}
      description="اختر تلقائيًا الميزات التجريبية الجديدة ، ما لم يتم تعطيلها من قبل فريقك أو مؤسستك"
      onCheckedChange={handleToggle}
      title="اختيار تلقائي للميزات التجريبية المستقبلية"
    />
  );
}
