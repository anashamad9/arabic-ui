"use client";

import {
  segmentedControlItemVariants,
  segmentedControlRootClassName,
} from "@/registry/default/lib/segmented-control";
import {
  RadioGroupPrimitive,
  RadioPrimitive,
} from "@/registry/default/ui/radio-group";

const itemClassName = segmentedControlItemVariants({
  className: "grow",
  state: "checked",
});

export default function Particle() {
  return (
    <RadioGroupPrimitive
      aria-label="فترة الفوترة"
      className={segmentedControlRootClassName}
      defaultValue="monthly"
    >
      <RadioPrimitive.Root className={itemClassName} value="monthly">
        شهريا
      </RadioPrimitive.Root>
      <RadioPrimitive.Root className={itemClassName} value="yearly">
        سنوي
      </RadioPrimitive.Root>
    </RadioGroupPrimitive>
  );
}
