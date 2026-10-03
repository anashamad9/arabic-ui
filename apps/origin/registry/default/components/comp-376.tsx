import {
  BoltIcon,
  BookOpenIcon,
  CircleUserRoundIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="افتح حساب" size="icon" variant="outline">
          <CircleUserRoundIcon aria-hidden="true" size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex items-start gap-3">
          <img
            alt="الصورة الشخصية"
            className="shrink-0 rounded-full"
            height={32}
            src="/origin/avatar.jpg"
            width={32}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-foreground text-sm">
              كينيدي
            </span>
            <span className="truncate font-normal text-muted-foreground text-xs">
              k.kennedy@coss.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoltIcon aria-hidden="true" className="opacity-60" size={16} />
            <span>الخيار الأول</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Layers2Icon aria-hidden="true" className="opacity-60" size={16} />
            <span>الخيار الثاني</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpenIcon aria-hidden="true" className="opacity-60" size={16} />
            <span>الخيار الثالث</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon aria-hidden="true" className="opacity-60" size={16} />
            <span>الخيار 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPenIcon aria-hidden="true" className="opacity-60" size={16} />
            <span>الخيار 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon aria-hidden="true" className="opacity-60" size={16} />
          <span>تسجيل الخروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
