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
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>حدد مع خطأ</Label>
      <Select defaultValue="1">
        <SelectTrigger aria-invalid id={id}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">رياكت</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">أسترو</SelectItem>
          <SelectItem value="4">غاتسبي</SelectItem>
        </SelectContent>
      </Select>
      <p
        aria-live="polite"
        className="mt-2 text-destructive text-xs"
        role="alert"
      >
        الخيار المحدد غير صالح
      </p>
    </div>
  );
}
