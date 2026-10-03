import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>اختر مع فاصل</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id}>
          <SelectValue placeholder="اختر إطار العمل" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>تطوير الواجهات</SelectLabel>
            <SelectItem value="1">رياكت</SelectItem>
            <SelectItem value="2">فيو</SelectItem>
            <SelectItem value="3">أنغولار</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>تطوير الخدمات</SelectLabel>
            <SelectItem value="4">Node.js</SelectItem>
            <SelectItem value="5">بايثون</SelectItem>
            <SelectItem value="6">جافا</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
