import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>حدد مع مجموعات الخيارات (الأصلية)</Label>
      <SelectNative id={id}>
        <optgroup label="تطوير الواجهات">
          <option value="1">رياكت</option>
          <option value="2">فيو</option>
          <option value="3">أنغولار</option>
        </optgroup>
        <optgroup label="تطوير الخدمات">
          <option value="4">Node.js</option>
          <option value="5">بايثون</option>
          <option value="6">جافا</option>
        </optgroup>
      </SelectNative>
    </div>
  );
}
