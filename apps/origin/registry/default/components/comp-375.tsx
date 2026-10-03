import { CircleUserRoundIcon } from "lucide-react";
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
        <DropdownMenuLabel className="flex flex-col">
          <span>تسجيل الدخول كما</span>
          <span className="font-normal text-foreground text-xs">
            k.kennedy@coss.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>الخيار الأول</DropdownMenuItem>
          <DropdownMenuItem>الخيار الثاني</DropdownMenuItem>
          <DropdownMenuItem>الخيار الثالث</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>تسجيل الخروج</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
