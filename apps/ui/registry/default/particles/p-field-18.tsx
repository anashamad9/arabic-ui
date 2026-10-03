"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Particle() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    const data = {
      email: formData.get("email"),
      fullName: formData.get("fullName"),
      newsletter: formData.get("newsletter"),
      role: formData.get("role"),
    };
    alert(
      `الاسم الكامل: ${data.fullName || ""}البريد الإلكتروني:: ${data.email || ""}الدور:: ${
        data.role || ""
      }النشرة الإخبارية:: ${data.newsletter}`,
    );
  };
  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <Field name="fullName">
        <FieldLabel>
          الاسم الكامل <span className="text-destructive">*</span>
        </FieldLabel>
        <Input placeholder="جون دو" required type="text" />
        <FieldError>يرجى إدخال اسم صالح.</FieldError>
      </Field>

      <Field name="email">
        <FieldLabel>
          البريد الإلكتروني <span className="text-destructive">*</span>
        </FieldLabel>
        <Input placeholder="john@example.com" required type="email" />
        <FieldError>يرجى إدخال بريد إلكتروني صحيح.</FieldError>
      </Field>

      <Field name="role">
        <FieldLabel>الدور</FieldLabel>
        <Select
          items={[
            { label: "حدد دورك", value: null },
            { label: "المطوّر", value: "developer" },
            { label: "مصمم", value: "designer" },
            { label: "مدير المنتج", value: "manager" },
            { label: "أخرى", value: "other" },
          ]}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            <SelectItem value="developer">المطوّر</SelectItem>
            <SelectItem value="designer">مصمم</SelectItem>
            <SelectItem value="manager">مدير المنتج</SelectItem>
            <SelectItem value="other">أخرى</SelectItem>
          </SelectPopup>
        </Select>
        <FieldDescription>هذا حقل اختياري</FieldDescription>
      </Field>

      <Field name="newsletter">
        <div className="flex items-center gap-2">
          <Checkbox />
          <FieldLabel className="cursor-pointer">
            اشترك في النشرة الإخبارية
          </FieldLabel>
        </div>
      </Field>

      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
