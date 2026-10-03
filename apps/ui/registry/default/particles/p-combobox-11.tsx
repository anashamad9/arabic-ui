"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";

const items = [
  { label: "تفاح", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "برتقال", value: "orange" },
  { label: "عنب", value: "grape" },
  { label: "فراولة", value: "strawberry" },
  { label: "مانجو", value: "mango" },
  { label: "أناناس", value: "pineapple" },
  { label: "كيوي", value: "kiwi" },
  { label: "خوخ", value: "peach" },
  { label: "كمثرى", value: "pear" },
];

export default function Particle() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedItem = formData.get("item");
    const itemValue =
      items.find((item) => item.label === selectedItem)?.value || selectedItem;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`العنصر المفضل: ${itemValue || ""}`);
  };

  return (
    <Form className="flex w-full max-w-64 flex-col gap-4" onSubmit={onSubmit}>
      <Field name="item">
        <FieldLabel>العنصر المفضل</FieldLabel>
        <Combobox items={items} required>
          <ComboboxInput placeholder="اختر عنصرًا…" />
          <ComboboxPopup>
            <ComboboxEmpty>لم يتم العثور على نتائج.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>
        <FieldError>يرجى اختيار عنصر.</FieldError>
      </Field>
      <Button loading={loading} type="submit">
        إرسال
      </Button>
    </Form>
  );
}
