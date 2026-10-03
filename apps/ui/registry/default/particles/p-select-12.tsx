import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { disabled: false, label: "Next.js", value: "next" },
  { disabled: false, label: "فايت", value: "vite" },
  { disabled: true, label: "Astro (قريبا)", value: "astro" },
  { disabled: true, label: "ريمكس (قريبا)", value: "remix" },
  { disabled: false, label: "نكست", value: "nuxt" },
];

export default function Particle() {
  return (
    <Select defaultValue="next" items={items}>
      <SelectTrigger aria-label="اختر إطار العمل">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ disabled, label, value }) => (
          <SelectItem disabled={disabled} key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
