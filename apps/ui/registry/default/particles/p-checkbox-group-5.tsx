"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Field, FieldItem, FieldLabel } from "@/registry/default/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset";
import { Form } from "@/registry/default/ui/form";

export default function Particle() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    const frameworks = formData.getAll("frameworks") as string[];
    alert(`تم اختياره: ${frameworks.join(", ") || "none"}`);
  };

  return (
    <Form
      className="flex w-full max-w-[160px] flex-col gap-4"
      onSubmit={onSubmit}
    >
      <Field name="frameworks" render={(props) => <Fieldset {...props} />}>
        <FieldsetLegend className="font-medium text-sm">الأطر</FieldsetLegend>
        <CheckboxGroup defaultValue={["next"]}>
          <FieldItem>
            <FieldLabel>
              <Checkbox value="next" />
              Next.js
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel>
              <Checkbox value="vite" />
              فايت
            </FieldLabel>
          </FieldItem>
          <FieldItem>
            <FieldLabel>
              <Checkbox value="astro" />
              أسترو
            </FieldLabel>
          </FieldItem>
        </CheckboxGroup>
      </Field>
      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
