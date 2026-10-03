import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="[--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)] *:not-first:mt-2">
      <Label htmlFor={id}>مدخلات مع الحدود الملونة وحلقة</Label>
      <Input id={id} placeholder="البريد الإلكتروني" type="email" />
    </div>
  );
}
