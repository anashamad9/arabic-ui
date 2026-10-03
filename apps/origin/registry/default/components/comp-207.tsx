import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Component() {
  const id = useId();
  return (
    <div className="[--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)] *:not-first:mt-2">
      <Label htmlFor={id}>حدد مع الحدود الملونة وخاتم</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id}>
          <SelectValue placeholder="اختر إطار العمل" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">رياكت</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">أسترو</SelectItem>
          <SelectItem value="4">غاتسبي</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
