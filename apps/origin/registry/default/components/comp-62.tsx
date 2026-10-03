import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6" htmlFor={id}>
          مساحة النص مع تلميح
        </Label>
        <span className="text-muted-foreground text-sm">اختياري</span>
      </div>
      <Textarea id={id} placeholder="اكتب تعليقًا" />
    </div>
  );
}
