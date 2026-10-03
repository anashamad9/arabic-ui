import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>
        كلمة المرور <span className="text-destructive-foreground">*</span>
      </FieldLabel>
      <Input placeholder="أدخل كلمة المرور" required type="password" />
      <FieldError>يرجى ملء هذا الحقل.</FieldError>
    </Field>
  );
}
