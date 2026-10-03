"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

const schema = z.object({
  age: z.coerce
    .number({ message: "الرجاء إدخال رقم." })
    .positive({ message: "يجب أن يكون الرقم إيجابيا." }),
  name: z.string().min(1, { message: "الرجاء إدخال اسم." }),
});

type Errors = Record<string, string | string[]>;

async function submitForm(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const result = schema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }

  return {
    errors: {} as Errors,
  };
}

export default function Particle() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    const response = await submitForm(event);
    await new Promise((r) => setTimeout(r, 800));
    setErrors(response.errors);
    setLoading(false);
    if (Object.keys(response.errors).length === 0) {
      alert(
        `الاسم: ${String(formData.get("name") || "")}العمر:: ${String(
          formData.get("age") || "",
        )}`,
      );
    }
  };

  return (
    <Form
      className="flex w-full max-w-64 flex-col gap-4"
      errors={errors}
      onSubmit={onSubmit}
    >
      <Field name="name">
        <FieldLabel>الاسم</FieldLabel>
        <Input placeholder="أدخل الاسم" />
        <FieldError />
      </Field>
      <Field name="age">
        <FieldLabel>العمر</FieldLabel>
        <Input placeholder="أدخل في العمر" />
        <FieldError />
      </Field>
      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
