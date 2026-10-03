import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>مساحة النص مع نص مساعد</Label>
      <Textarea id={id} placeholder="اكتب تعليقًا" />
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        يرجى إضافة العديد من التفاصيل كما يمكنك
      </p>
    </div>
  );
}
