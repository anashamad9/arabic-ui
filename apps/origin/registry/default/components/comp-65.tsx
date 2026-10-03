import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>مساحة النص مع خلفية رمادية</Label>
      <Textarea
        className="border-transparent bg-muted shadow-none"
        id={id}
        placeholder="اكتب تعليقًا"
      />
    </div>
  );
}
