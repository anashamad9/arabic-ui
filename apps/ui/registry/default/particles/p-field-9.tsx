"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from "@/registry/default/ui/combobox";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";

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
  return (
    <Field>
      <FieldLabel>الفواكه</FieldLabel>
      <Combobox defaultValue={[items[0], items[4]]} items={items} multiple>
        <ComboboxChips>
          <ComboboxValue>
            {(value: { value: string; label: string }[]) => (
              <>
                {value?.map((item) => (
                  <ComboboxChip aria-label={item.label} key={item.value}>
                    {item.label}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput
                  aria-label="حدد العناصر"
                  placeholder={value.length > 0 ? undefined : "حدد العناصر ..."}
                />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxPopup>
          <ComboboxEmpty>لا توجد عناصر.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <FieldDescription>حدد عناصر متعددة.</FieldDescription>
    </Field>
  );
}
