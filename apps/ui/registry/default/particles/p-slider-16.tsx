"use client";

import { useState } from "react";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Slider } from "@/registry/default/ui/slider";

const labels = ["رهيبة", "الفقراء", "حسنًا", "جيد", "مذهلة"];

export default function Particle() {
  const [value, setValue] = useState<number | readonly number[]>(3);

  const currentValue = Array.isArray(value) ? value[0] : value;

  return (
    <Field className="*:grid *:grid-cols-[auto_1fr_auto] *:items-center *:gap-x-2">
      <Slider
        aria-label="تقييم تجربتك"
        max={5}
        min={1}
        onValueChange={setValue}
        value={value}
      >
        <div className="col-span-3 mb-2 flex items-center justify-between gap-1">
          <FieldLabel>تقييم تجربتك</FieldLabel>
          <span className="text-sm">{labels[currentValue - 1]}</span>
        </div>
        <span aria-hidden="true" className="text-2xl">
          😡
        </span>
        <span aria-hidden="true" className="order-1 text-2xl">
          😍
        </span>
      </Slider>
    </Field>
  );
}
