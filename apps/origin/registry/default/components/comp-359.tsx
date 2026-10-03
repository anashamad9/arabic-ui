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
            W / صورة
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-2">
            <img
              alt="المحتوى"
              className="w-full rounded"
              height={216}
              src="/origin/dialog-content.png"
              width={382}
            />
            <div className="space-y-1">
              <p className="font-medium text-[13px]">
                تلميح الأدوات مع العنوان والرمز
              </p>
              <p className="text-muted-foreground text-xs">
                تم تصميم تلميحات الأدوات لتكون قابلة للتخصيص بشكل كبير ، مع
                ميزات مثل الموضع الديناميكي والمحتوى الغني وواجهة برمجة تطبيقات
                قوية.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
