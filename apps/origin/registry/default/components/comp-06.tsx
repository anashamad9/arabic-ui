import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>إدخال مع خطأ</Label>
      <Input
        aria-invalid
        className="peer"
        defaultValue="invalid@email.com"
        id={id}
        placeholder="البريد الإلكتروني"
        type="email"
      />
      <p
        aria-live="polite"
        className="mt-2 text-xs peer-aria-invalid:text-destructive"
        role="alert"
      >
        البريد الإلكتروني غير صالح
      </p>
    </div>
  );
}
