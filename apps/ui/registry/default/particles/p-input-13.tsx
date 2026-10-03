import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        البريد الإلكتروني <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="البريد الإلكتروني" required type="email" />
    </div>
  );
}
