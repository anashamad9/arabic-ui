import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">أداة مثل نافذة منبثقة</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="font-medium text-[13px]">نافذة منبثقة مع زر</p>
            <p className="text-muted-foreground text-xs">
              أنا من نافذة منبثقة التي ترغب في أن تبدو وكأنها تلميح أداة. لا
              أستطيع أن أكون تلميح أداة بسبب العنصر التفاعلي داخل لي.
            </p>
          </div>
          <Button className="h-7 px-2" size="sm">
            اعرف المزيد
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
