import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          نفس عرض عنصر التفعيل
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width)">
        <DropdownMenuItem>الخيار الأول</DropdownMenuItem>
        <DropdownMenuItem>الخيار الثاني</DropdownMenuItem>
        <DropdownMenuItem>الخيار الثالث</DropdownMenuItem>
        <DropdownMenuItem>الخيار 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
