"use client";

import { useId } from "react";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox";
import { Label } from "@/registry/default/ui/label";

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
  const id = useId();
  return (
    <Combobox items={items}>
      <div className="flex flex-col items-start gap-2">
        <Label htmlFor={id}>الفواكه</Label>
        <ComboboxInput
          aria-label="اختر عنصر"
          id={id}
          placeholder="اختر عنصرًا…"
        />
      </div>
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
  );
}
