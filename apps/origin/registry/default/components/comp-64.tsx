import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>مساحة نص مع خطأ</Label>
      <Textarea
        aria-invalid
        defaultValue="أهلًا!"
        id={id}
        placeholder="اكتب تعليقًا"
      />
      <p
        aria-live="polite"
        className="mt-2 text-destructive text-xs"
        role="alert"
      >
        يجب أن تكون الرسالة 10 أحرف على الأقل
      </p>
    </div>
  );
}
