import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "تفاح", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "برتقال", value: "orange" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} items={items}>
      <SelectLabel>الفواكه</SelectLabel>
      <SelectTrigger aria-label="اختر الفاكهة">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
