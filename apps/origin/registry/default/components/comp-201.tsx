import { useId } from "react";
import { SelectNative } from "@/registry/default/ui/select-native";

export default function Component() {
  const id = useId();
  return (
    <div className="group relative">
      <label
        className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 font-medium text-foreground text-xs group-has-[select:disabled]:opacity-50"
        htmlFor={id}
      >
        حدد مع التسمية المتداخلة (الأصلية)
      </label>
      <SelectNative defaultValue="" id={id}>
        <option disabled value="">
          اختر إطار العمل
        </option>
        <option value="1">رياكت</option>
        <option value="2">Next.js</option>
        <option value="3">أسترو</option>
        <option value="4">غاتسبي</option>
      </SelectNative>
    </div>
  );
}
