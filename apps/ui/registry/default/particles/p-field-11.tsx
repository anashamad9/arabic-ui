import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "اختر دولة", value: null },
  { label: "الولايات المتحدة الأمريكية", value: "us" },
  { label: "المملكة المتحدة", value: "uk" },
  { label: "كندا", value: "ca" },
  { label: "أستراليا", value: "au" },
];

export default function Particle() {
  return (
    <Field>
      <FieldLabel>الدولة</FieldLabel>
      <Select items={items}>
        <SelectTrigger>
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
      <FieldDescription>هذا حقل اختياري</FieldDescription>
    </Field>
  );
}
