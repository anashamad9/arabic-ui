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
      <Label htmlFor={id}>اختر مع نائب</Label>
      <Select>
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
