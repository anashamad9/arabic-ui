import { CableIcon } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "Next.js", value: "next" },
  { label: "فايت", value: "vite" },
  { label: "أسترو", value: "astro" },
];

export default function Particle() {
  return (
    <Select defaultValue="next" items={items}>
      <SelectTrigger aria-label="حدد الإطار مع أيقونة">
        <CableIcon aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
