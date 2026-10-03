import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>منطقة نصية أقصر</Label>
      <Textarea
        className="min-h-0"
        id={id}
        placeholder="اكتب تعليقًا"
        rows={2}
      />
    </div>
  );
}
