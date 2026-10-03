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
      <Label htmlFor={id}>حدد مع النص الأيسر</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id}>
          <span>
            اللغة: <SelectValue placeholder="اختر لغة" />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">جافا سكريبت</SelectItem>
          <SelectItem value="2">باش</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
