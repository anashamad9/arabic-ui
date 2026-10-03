import { AtSignIcon } from "lucide-react";
import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>الإدخال مع رمز البدء</Label>
      <div className="relative">
        <Input
          className="peer ps-9"
          id={id}
          placeholder="البريد الإلكتروني"
          type="email"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <AtSignIcon aria-hidden="true" size={16} />
        </div>
      </div>
    </div>
  );
}
