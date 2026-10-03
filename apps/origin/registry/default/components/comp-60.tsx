import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        مساحة النص المطلوبة <span className="text-destructive">*</span>
      </Label>
      <Textarea id={id} placeholder="اترك رسالة" required />
    </div>
  );
}
