import { EllipsisIcon } from "lucide-react";
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
        <Button
          aria-label="افتح قائمة تحرير"
          className="rounded-full shadow-none"
          size="icon"
          variant="ghost"
        >
          <EllipsisIcon aria-hidden="true" size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>الخيار الأول</DropdownMenuItem>
        <DropdownMenuItem>الخيار الثاني</DropdownMenuItem>
        <DropdownMenuItem>الخيار الثالث</DropdownMenuItem>
        <DropdownMenuItem>الخيار 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
