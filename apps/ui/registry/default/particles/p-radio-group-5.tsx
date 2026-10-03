"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldItem, FieldLabel } from "@/registry/default/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset";
import { Form } from "@/registry/default/ui/form";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export default function Particle() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`تم اختياره: ${formData.get("frameworks")}`);
  };

  return (
    <Form
      className="flex w-full max-w-[160px] flex-col gap-4"
      onSubmit={onSubmit}
    >
      <Field
        className="gap-2"
        name="frameworks"
        render={(props) => <Fieldset {...props} />}
      >
        <FieldsetLegend className="font-medium text-sm">الأطر</FieldsetLegend>
        <RadioGroup defaultValue="next">
          <FieldItem>
            <FieldLabel>
              <Radio value="next" /> Next.js
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel>
              <Radio value="vite" /> فايت
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel>
              <Radio value="astro" /> أسترو
            </FieldLabel>
          </FieldItem>
        </RadioGroup>
      </Field>
      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
