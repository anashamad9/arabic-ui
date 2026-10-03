import {
  ChevronLeftIcon,
  HistoryIcon,
  MessageSquareText,
  UserRoundPlus,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Button
            aria-label="العودة إلى الوراء"
            asChild
            className="size-8"
            size="icon"
            variant="ghost"
          >
            <a href="#">
              <ChevronLeftIcon className="rtl:rotate-180" />
            </a>
          </Button>
          <h1 className="font-medium text-sm">واجهة المستخدم الأساسية</h1>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* History button */}
          <Button
            aria-label="تاريخ التاريخ"
            className="size-8 rounded-full text-muted-foreground shadow-none"
            size="icon"
            variant="ghost"
          >
            <HistoryIcon aria-hidden="true" size={16} />
          </Button>
          {/* Comments button */}
          <Button
            aria-label="حفظ"
            className="size-8 rounded-full text-muted-foreground shadow-none"
            size="icon"
            variant="ghost"
          >
            <MessageSquareText aria-hidden="true" size={16} />
          </Button>
          {/* Add user */}
          <Button
            aria-label="إضافة مستخدم"
            className="size-8 rounded-full text-muted-foreground shadow-none"
            size="icon"
            variant="ghost"
          >
            <UserRoundPlus aria-hidden="true" size={16} />
          </Button>
          {/* Online users */}
          <div className="ms-2 flex items-center gap-2">
            <div className="relative">
              <Avatar>
                <AvatarImage alt="ليلى حسين" src="/origin/avatar-80-07.jpg" />
                <AvatarFallback>ل ح</AvatarFallback>
              </Avatar>
              <span className="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-emerald-500">
                <span className="sr-only">متصل</span>
              </span>
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage
                  alt="مارثا جونسون"
                  src="/origin/avatar-80-06.jpg"
                />
                <AvatarFallback>ل ح</AvatarFallback>
              </Avatar>
              <span className="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-muted-foreground">
                <span className="sr-only">متصل</span>
              </span>
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage
                  alt="ليندا الخضراء"
                  src="/origin/avatar-80-05.jpg"
                />
                <AvatarFallback>ل ح</AvatarFallback>
              </Avatar>
              <span className="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-muted-foreground">
                <span className="sr-only">متصل</span>
              </span>
            </div>
            <Button
              className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground text-xs ring-background hover:bg-secondary hover:text-foreground"
              size="icon"
              variant="secondary"
            >
              +3
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
