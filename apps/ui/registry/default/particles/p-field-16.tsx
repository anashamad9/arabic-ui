import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Slider } from "@/registry/default/ui/slider";

export default function Particle() {
  return (
    <Field className="items-stretch gap-3">
      <FieldLabel>الدولة</FieldLabel>
      <Slider defaultValue={50} />
      <FieldDescription>هذا حقل اختياري</FieldDescription>
    </Field>
  );
}
