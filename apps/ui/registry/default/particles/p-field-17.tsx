import { Field, FieldDescription } from "@/registry/default/ui/field";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/default/ui/number-field";

export default function Particle() {
  return (
    <Field>
      <NumberField defaultValue={1} max={100} min={1}>
        <NumberFieldScrubArea label="الكمية" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>اختر قيمة بين 1 و 100.</FieldDescription>
    </Field>
  );
}
