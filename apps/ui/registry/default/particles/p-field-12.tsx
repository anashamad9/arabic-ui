import { Checkbox } from "@/registry/default/ui/checkbox";
import { Field, FieldLabel } from "@/registry/default/ui/field";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>
        <Checkbox />
        أوافق على الشروط والأحكام
      </FieldLabel>
    </Field>
  );
}
