import {
  Heading1Icon,
  Heading2Icon,
  MinusIcon,
  PlusIcon,
  TextQuoteIcon,
  TypeIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="افتح قائمة تحرير"
          className="rounded-full shadow-none"
          size="icon"
          variant="ghost"
        >
          <PlusIcon aria-hidden="true" size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pb-2">
        <DropdownMenuLabel>إضافة كتلة</DropdownMenuLabel>
        <DropdownMenuItem>
          <div
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border bg-background"
          >
            <TypeIcon className="opacity-60" size={16} />
          </div>
          <div>
            <div className="font-medium text-sm">النص</div>
            <div className="text-muted-foreground text-xs">
              ابدأ الكتابة بنص عادي
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border bg-background"
          >
            <TextQuoteIcon className="opacity-60" size={16} />
          </div>
          <div>
            <div className="font-medium text-sm">اقتباس</div>
            <div className="text-muted-foreground text-xs">التقاط اقتباس</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border bg-background"
          >
            <MinusIcon className="opacity-60" size={16} />
          </div>
          <div>
            <div className="font-medium text-sm">مقسم</div>
            <div className="text-muted-foreground text-xs">تقسيم بصريا كتل</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border bg-background"
          >
            <Heading1Icon className="opacity-60" size={16} />
          </div>
          <div>
            <div className="font-medium text-sm">العنوان 1</div>
            <div className="text-muted-foreground text-xs">
              عنوان القسم الكبير
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border bg-background"
          >
            <Heading2Icon className="opacity-60" size={16} />
          </div>
          <div>
            <div className="font-medium text-sm">العنوان 2</div>
            <div className="text-muted-foreground text-xs">
              عنوان فرعي متوسط
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
