import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="[--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)] *:not-first:mt-2">
      <Label htmlFor={id}>مساحة النص مع الحدود الملونة وحلقة</Label>
      <Textarea id={id} placeholder="اكتب تعليقًا" />
    </div>
  );
}
