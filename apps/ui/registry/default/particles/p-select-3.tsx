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
    <Select items={items}>
      <SelectTrigger aria-label="اختر إطار العمل" size="lg">
        <SelectValue placeholder="اختر إطار العمل" />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
