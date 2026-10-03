import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>الإدخال مع نص مساعد</Label>
      <Input id={id} placeholder="البريد الإلكتروني" type="email" />
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        فزنا &amp; lsquo;t مشاركة البريد الإلكتروني الخاص بك مع أي شخص
      </p>
    </div>
  );
}
