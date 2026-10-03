"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "جافا سكريبت", value: "javascript" },
  { label: "تايب سكريبت", value: "typescript" },
  { label: "بايثون", value: "python" },
  { label: "الذهاب", value: "go" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="اختر اللغة">
        <SelectValue>
          {(item) => (
            <span>
              <span className="text-muted-foreground">اللغة:</span> {item.label}
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
