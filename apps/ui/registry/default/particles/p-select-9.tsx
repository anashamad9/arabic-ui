"use client";

import { Code2Icon, GlobeIcon, LayersIcon, ZapIcon } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { icon: LayersIcon, label: "المكونات", value: "components" },
  { icon: ZapIcon, label: "أداء أداء الأداء", value: "performance" },
  { icon: GlobeIcon, label: "شبكة الشبكة", value: "network" },
  { icon: Code2Icon, label: "التنمية والتنمية", value: "development" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="اختر الفئة">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
