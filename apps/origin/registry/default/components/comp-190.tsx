import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>اختر مع نائب (أصلي)</Label>
      <SelectNative defaultValue="" id={id}>
        <option disabled value="">
          الرجاء اختيار قيمة
        </option>
        <option value="1">1 إلى 5</option>
        <option value="2">5 إلى 10</option>
        <option value="3">أكثر من 10</option>
      </SelectNative>
    </div>
  );
}
