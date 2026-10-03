"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Switch } from "@/registry/default/ui/switch";

export default function Particle() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    console.log(formData.get("marketing"));

    const enabled = formData.get("marketing");
    alert(`رسائل البريد الإلكتروني التسويقية: ${enabled}`);
  };

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Field name="marketing">
        <FieldLabel>
          <Switch defaultChecked name="marketing" />
          تمكين رسائل البريد الإلكتروني التسويقية
        </FieldLabel>
      </Field>
      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
