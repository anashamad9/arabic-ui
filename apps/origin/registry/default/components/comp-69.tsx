import { useId } from "react";
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>مساحة النص مع الزر الأيمن</Label>
      <Textarea id={id} placeholder="اكتب تعليقًا" />
      <div className="flex justify-end">
        <Button variant="outline">إرسال</Button>
      </div>
    </div>
  );
}
