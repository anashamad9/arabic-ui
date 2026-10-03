import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>اختر باستخدام نص مساعد (أصلي)</Label>
      <SelectNative id={id}>
        <option value="1">رياكت</option>
        <option value="2">Next.js</option>
        <option value="3">أسترو</option>
        <option value="4">غاتسبي</option>
      </SelectNative>
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        أخبرنا ما هو إطار اختيارك المفضل
      </p>
    </div>
  );
}
