"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "Next.js", value: "next" },
  { label: "فايت", value: "vite" },
  { label: "أسترو", value: "astro" },
];

export default function Particle() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`الإطار: ${formData.get("framework") || ""}`);
  };

  return (
    <Form className="flex w-full max-w-64 flex-col gap-4" onSubmit={onSubmit}>
      <Field>
        <FieldLabel>إطار العمل</FieldLabel>
        <Select items={items} name="framework" required>
          <SelectTrigger aria-label="اختر إطار العمل">
            <SelectValue placeholder="اختر إطار عمل" />
          </SelectTrigger>
          <SelectPopup>
            {items.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <FieldDescription>اختر المفضلة لديك.</FieldDescription>
        <FieldError>يرجى اختيار قيمة.</FieldError>
      </Field>

      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
