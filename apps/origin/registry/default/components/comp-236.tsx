import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>اختيار متعدد (أصلي)</Label>
      <div className="overflow-hidden rounded-md border border-input">
        <SelectNative className="rounded-none border-none" id={id} multiple>
          <option value="1">رياكت</option>
          <option value="2">Next.js</option>
          <option value="3">أسترو</option>
          <option value="4">غاتسبي</option>
          <option value="5">فيو</option>
          <option value="6">أنغولار</option>
        </SelectNative>
      </div>
    </div>
  );
}
