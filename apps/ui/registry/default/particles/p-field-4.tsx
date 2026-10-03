import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function FieldWithErrorDemo() {
  return (
    <Field>
      <FieldLabel>البريد الإلكتروني</FieldLabel>
      <Input placeholder="أدخل بريدك الإلكتروني" type="email" />
      <FieldError>يرجى إدخال عنوان بريد إلكتروني صحيح.</FieldError>
    </Field>
  );
}
