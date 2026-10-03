"use client";

import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const countries = [
  {
    continent: "أمريكا",
    items: [
      {
        flag: "\u{1F1FA}\u{1F1F8}",
        label: "الولايات المتحدة الأمريكية",
        value: "us",
      },
      { flag: "\u{1F1E8}\u{1F1E6}", label: "كندا", value: "ca" },
      { flag: "\u{1F1F2}\u{1F1FD}", label: "المكسيك", value: "mx" },
    ],
  },
  {
    continent: "أوروبا",
    items: [
      { flag: "\u{1F1EC}\u{1F1E7}", label: "المملكة المتحدة", value: "gb" },
      { flag: "\u{1F1EB}\u{1F1F7}", label: "فرنسا", value: "fr" },
      { flag: "\u{1F1E9}\u{1F1EA}", label: "ألمانيا", value: "de" },
    ],
  },
  {
    continent: "آسيا",
    items: [
      { flag: "\u{1F1E8}\u{1F1F3}", label: "الصين", value: "cn" },
      { flag: "\u{1F1EF}\u{1F1F5}", label: "اليابان", value: "jp" },
      { flag: "\u{1F1EE}\u{1F1F3}", label: "الهند", value: "in" },
    ],
  },
];

const allItems = countries.flatMap((c) => c.items);

export default function Particle() {
  return (
    <Select
      defaultValue={allItems.find((item) => item.value === "ca")}
      itemToStringValue={(item) => item.value}
    >
      <SelectTrigger aria-label="اختر البلد">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <span className="text-base leading-none">{item.flag}</span>
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {countries.map((group, index) => (
          <SelectGroup key={group.continent}>
            {index > 0 && <SelectSeparator />}
            <SelectGroupLabel>{group.continent}</SelectGroupLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item}>
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{item.flag}</span>
                  <span className="truncate">{item.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectPopup>
    </Select>
  );
}
