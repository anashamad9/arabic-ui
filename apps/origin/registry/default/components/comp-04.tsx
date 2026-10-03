import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6" htmlFor={id}>
          مدخلات مع تلميح
        </Label>
        <span className="text-muted-foreground text-sm">اختياري</span>
      </div>
      <Input id={id} placeholder="البريد الإلكتروني" type="email" />
    </div>
  );
}
