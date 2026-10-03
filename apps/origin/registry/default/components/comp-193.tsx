import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="[--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)] *:not-first:mt-2">
      <Label htmlFor={id}>اختر مع الحدود الملونة (الأصلية)</Label>
      <SelectNative id={id}>
        <option value="1">رياكت</option>
        <option value="2">Next.js</option>
        <option value="3">أسترو</option>
        <option value="4">غاتسبي</option>
      </SelectNative>
    </div>
  );
}
