"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { description: "npx create-next-app", label: "Next.js", value: "next" },
  { description: "npm create vite@latest", label: "فايت", value: "vite" },
  { description: "npm create astro@latest", label: "أسترو", value: "astro" },
  { description: "npx create-remix", label: "ريميكس", value: "remix" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="حدد إطار العمل مع الأمر" className="py-1">
        <SelectValue>
          {(item) => (
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">
                {item.description}
              </span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
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
