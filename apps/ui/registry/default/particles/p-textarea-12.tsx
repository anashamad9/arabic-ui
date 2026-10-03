import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>
        الرسالة <span className="text-destructive-foreground">*</span>
      </FieldLabel>
      <Textarea placeholder="اكتب رسالتك هنا" required />
      <FieldError>يرجى ملء هذا الحقل.</FieldError>
    </Field>
  );
}
