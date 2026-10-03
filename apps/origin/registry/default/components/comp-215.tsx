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
      <Label htmlFor={id}>حدد مع خيارات تعطيل</Label>
      <Select defaultValue="2">
        <SelectTrigger id={id}>
          <SelectValue placeholder="اختر إطار العمل" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem disabled value="1">
            رياكت
          </SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem disabled value="3">
            أسترو
          </SelectItem>
          <SelectItem value="4">غاتسبي</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
