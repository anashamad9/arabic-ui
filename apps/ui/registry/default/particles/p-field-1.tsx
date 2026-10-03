import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>الاسم</FieldLabel>
      <Input placeholder="أدخل اسمك" type="text" />
      <FieldDescription>مرئية على ملفك الشخصي</FieldDescription>
    </Field>
  );
}
