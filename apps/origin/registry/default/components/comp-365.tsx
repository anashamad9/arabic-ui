import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <div className="max-w-md text-sm">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a className="flex size-16 overflow-hidden rounded-md" href="#">
            <img
              alt="المحتوى"
              className="size-full object-cover"
              height={216}
              src="/origin/dialog-content.png"
              width={382}
            />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-[320px]" showArrow>
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="font-semibold">
                بناء نظام تصميم مع نكست و تيلويند
              </h2>
              <p className="text-muted-foreground text-sm">
                تعلم كيفية بناء نظام تصميم شامل باستخدام تيلويند ، بما في ذلك
                بنية المكونات وتخصيص السمات.
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <span>8 دقائق قراءة</span>
              <span>·</span>
              <span>تم التحديث منذ يومين</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
