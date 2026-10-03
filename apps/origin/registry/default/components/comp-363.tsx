import { Button } from "@/registry/default/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          aria-label="ملفي الشخصي"
          asChild
          className="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
        >
          <a href="#">
            <img
              alt="الصورة الشخصية"
              height={40}
              src="/origin/avatar-40-04.jpg"
              width={40}
            />
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[340px]">
        <div className="flex items-start gap-3">
          <img
            alt="الصورة الشخصية"
            className="shrink-0 rounded-full"
            height={40}
            src="/origin/avatar-40-04.jpg"
            width={40}
          />
          <div className="space-y-1">
            <p className="font-medium text-sm">@Origin_UI</p>
            <p className="text-muted-foreground text-sm">
              مكونات واجهة مستخدم جميلة بنيت مع تيلويند و نكست.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
