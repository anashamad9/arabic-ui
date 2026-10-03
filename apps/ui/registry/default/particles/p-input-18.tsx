"use client";

import { useState } from "react";
import { Field, FieldDescription } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  const maxLength = 14;
  const [value, setValue] = useState("");

  return (
    <Field>
      <Input
        aria-label="الكود"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="أدخل رمز الدخول"
        type="text"
        value={value}
      />
      <FieldDescription>
        <span className="tabular-nums">{maxLength - value.length}</span> تصنيف:
        شخصيات
      </FieldDescription>
    </Field>
  );
}
