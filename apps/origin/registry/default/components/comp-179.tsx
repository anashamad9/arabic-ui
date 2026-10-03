"use client";

import { useId, useState } from "react";
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function Component() {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        aria-label="تبديل التبديل"
        checked={checked}
        id={id}
        onCheckedChange={setChecked}
      />
      <Label className="font-medium text-sm" htmlFor={id}>
        {checked ? "مفعّل" : "قبالة"}
      </Label>
    </div>
  );
}
