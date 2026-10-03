"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  {
    description: "مثالية للأفراد",
    label: "الخطة القياسية",
    value: "standard",
  },
  { description: "للمستخدمين المحترفين", label: "خطة برو", value: "pro" },
  {
    description: "بنيت للفرق الكبيرة",
    label: "خطة المؤسسة",
    value: "enterprise",
  },
];

export default function Particle() {
  return (
    <Select defaultValue={items[1]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="اختر خطة">
        <SelectValue>
          {(item) => <span className="truncate">{item.label}</span>}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">
                {item.description}
              </span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
