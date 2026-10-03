import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        الرسالة <span className="text-destructive">*</span>
      </Label>
      <Textarea id={id} placeholder="اكتب رسالتك هنا" required />
    </div>
  );
}
