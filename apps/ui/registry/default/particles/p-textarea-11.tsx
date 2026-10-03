"use client";

import { useState } from "react";
import { Field, FieldDescription } from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  const maxLength = 280;
  const [value, setValue] = useState("");

  return (
    <Field>
      <Textarea
        aria-label="الرسالة"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="اكتب رسالتك هنا"
        value={value}
      />
      <FieldDescription>
        <span className="tabular-nums">{maxLength - value.length}</span> تصنيف:
        شخصيات
      </FieldDescription>
    </Field>
  );
}
