import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>خيارات مع الرمزية</Label>
      <Select defaultValue="1">
        <SelectTrigger
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
          id={id}
        >
          <SelectValue placeholder="اختر إطار العمل" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
          <SelectGroup>
            <SelectLabel className="ps-2">انتحال شخصية المستخدم</SelectLabel>
            <SelectItem value="1">
              <img
                alt="فرانك أليسون"
                className="size-5 rounded"
                height={20}
                src="/origin/avatar-20-01.jpg"
                width={20}
              />
              <span className="truncate">جيني هاميلتون</span>
            </SelectItem>
            <SelectItem value="2">
              <img
                alt="كزافيير غيرا"
                className="size-5 rounded"
                height={20}
                src="/origin/avatar-20-02.jpg"
                width={20}
              />
              <span className="truncate">بول سميث</span>
            </SelectItem>
            <SelectItem value="3">
              <img
                alt="آن كيلي"
                className="size-5 rounded"
                height={20}
                src="/origin/avatar-20-03.jpg"
                width={20}
              />
              <span className="truncate">لونا واين</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
