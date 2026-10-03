import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Component() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline">
            إحصائيات
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <ul className="grid gap-3 text-xs">
            <li className="grid gap-0.5">
              <span className="text-muted-foreground">الحالة</span>
              <span className="font-medium">مكتمل</span>
            </li>
            <li className="grid gap-0.5">
              <span className="text-muted-foreground">تغطية الكود</span>
              <span className="font-medium">94.3%</span>
            </li>
            <li className="grid gap-0.5">
              <span className="text-muted-foreground">آخر نشر</span>
              <span className="font-medium">اليوم الساعة 15:42</span>
            </li>
            <li className="grid gap-0.5">
              <span className="text-muted-foreground">درجة الأداء</span>
              <span className="font-medium">98/100</span>
            </li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
