import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "نشط", value: "active" },
  { label: "غير نشط", value: "inactive" },
  { label: "الأرشيف", value: "archived" },
];

export default function Particle() {
  return (
    <Select defaultValue="active" items={items}>
      <SelectTrigger
        aria-label="حدد الفلتر"
        className="[--radius-lg:9999px] [--radius:9999px]"
      >
        <SelectValue />
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
