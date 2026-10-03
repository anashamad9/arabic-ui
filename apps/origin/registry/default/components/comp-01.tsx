import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>إدخال بسيط</Label>
      <Input id={id} placeholder="البريد الإلكتروني" type="email" />
    </div>
  );
}
