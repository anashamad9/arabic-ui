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
      <Label htmlFor={id}>اختر مع الوصف والمؤشر الصحيح</Label>
      <Select defaultValue="2">
        <SelectTrigger className="**:data-desc:hidden" id={id}>
          <SelectValue placeholder="اختر خطة" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
          <SelectItem value="1">
            الخطة القياسية
            <span
              className="mt-1 block text-muted-foreground text-xs"
              data-desc
            >
              مثالية للأفراد
            </span>
          </SelectItem>
          <SelectItem value="2">
            خطة برو
            <span
              className="mt-1 block text-muted-foreground text-xs"
              data-desc
            >
              للمستخدمين المحترفين
            </span>
          </SelectItem>
          <SelectItem value="3">
            خطة المؤسسة
            <span
              className="mt-1 block text-muted-foreground text-xs"
              data-desc
            >
              بنيت للفرق الكبيرة
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
