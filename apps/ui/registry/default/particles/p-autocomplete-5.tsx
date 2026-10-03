"use client";

import { useId } from "react";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete";
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
    <Autocomplete items={items}>
      <div className="flex flex-col items-start gap-2">
        <Label htmlFor={id}>الفواكه</Label>
        <AutocompleteInput
          aria-label="البحث في العناصر"
          id={id}
          placeholder="ابحث في العناصر…"
        />
      </div>
      <AutocompletePopup>
        <AutocompleteEmpty>لا توجد عناصر.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
