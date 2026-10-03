"use client";

import { useState } from "react";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  const [value, setValue] = useState([25, 75]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">منزلق مزدوج النطاق مع الإخراج</Label>
        <output className="font-medium text-sm tabular-nums">
          {value[0]} - {value[1]}
        </output>
      </div>
      <Slider
        aria-label="منزلق مزدوج النطاق مع الإخراج"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
}
