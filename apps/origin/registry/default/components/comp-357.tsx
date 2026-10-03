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
            W / العنوان
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            <p className="font-medium text-[13px]">تلميح الأدوات مع العنوان</p>
            <p className="text-muted-foreground text-xs">
              تم تصميم تلميحات الأدوات لتكون قابلة للتخصيص بشكل كبير ، مع ميزات
              مثل الموضع الديناميكي والمحتوى الغني وواجهة برمجة تطبيقات قوية.
              يمكنك حتى استخدامها كقائمة منسدلة كاملة المواصفات عن طريق ضبط{" "}
              <code>trigger</code> الدعامة <code>click</code>.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
