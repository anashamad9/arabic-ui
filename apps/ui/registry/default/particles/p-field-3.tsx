import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Field disabled>
      <FieldLabel>البريد الإلكتروني</FieldLabel>
      <Input disabled placeholder="أدخل بريدك الإلكتروني" type="email" />
      <FieldDescription>هذا الحقل معطل حالياً.</FieldDescription>
    </Field>
  );
}
