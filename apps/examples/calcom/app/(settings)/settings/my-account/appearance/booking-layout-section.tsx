"use client";

import { Field } from "@coss/ui/components/field";
import { Fieldset } from "@coss/ui/components/fieldset";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@coss/ui/components/toggle-group";
import { useCallback, useState } from "react";
import { ImageCheckboxOption } from "@/components/particles";

const layoutItems = [
  {
    imageSrc: "https://app.cal.com/theme-light.svg",
    label: "الشهر",
    value: "month",
  },
  {
    imageSrc: "https://app.cal.com/theme-light.svg",
    label: "الأسبوع الأسبوعي الأسبوعي",
    value: "weekly",
  },
  {
    imageSrc: "https://app.cal.com/theme-light.svg",
    label: "العمود",
    value: "column",
  },
];

const initialLayouts = ["month", "weekly", "column"];

export function BookingLayoutSection() {
  const [enabledLayouts, setEnabledLayouts] = useState(initialLayouts);
  const [defaultView, setDefaultView] = useState("month");

  const handleValueChange = useCallback((newValue: string[]) => {
    setEnabledLayouts(newValue);
    setDefaultView((prev) => {
      if (newValue.length === 0) return prev;
      if (newValue.includes(prev)) return prev;
      const first = newValue[0];
      return first !== undefined ? first : prev;
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Field name="layout" render={(props) => <Fieldset {...props} />}>
        <ImageCheckboxOption
          defaultItem={defaultView}
          items={layoutItems}
          onValueChange={handleValueChange}
          value={enabledLayouts}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm">عرض افتراضي</span>
        <ToggleGroup
          onValueChange={(values) => values[0] && setDefaultView(values[0])}
          value={[defaultView]}
          variant="outline"
        >
          <ToggleGroupItem
            aria-label="الشهر"
            disabled={!enabledLayouts.includes("month")}
            value="month"
          >
            الشهر
          </ToggleGroupItem>
          <ToggleGroupSeparator />
          <ToggleGroupItem
            aria-label="الأسبوع الأسبوعي الأسبوعي"
            disabled={!enabledLayouts.includes("weekly")}
            value="weekly"
          >
            الأسبوع الأسبوعي الأسبوعي
          </ToggleGroupItem>
          <ToggleGroupSeparator />
          <ToggleGroupItem
            aria-label="العمود"
            disabled={!enabledLayouts.includes("column")}
            value="column"
          >
            العمود
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
