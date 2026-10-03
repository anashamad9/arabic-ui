"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { color: "bg-emerald-500", label: "مكتمل", value: "completed" },
  { color: "bg-blue-500", label: "قيد التقدم", value: "in-progress" },
  { color: "bg-amber-500", label: "قيد الانتظار", value: "pending" },
  { color: "bg-gray-500", label: "ملغى", value: "cancelled" },
  { color: "bg-red-500", label: "فشل", value: "failed" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="حدد الحالة">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${item.color}`}
              />
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${item.color}`}
              />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
