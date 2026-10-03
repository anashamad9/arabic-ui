import { SettingsIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function SettingsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="افتح قائمة تحرير"
          className="rounded-full shadow-none"
          size="icon"
          variant="ghost"
        >
          <SettingsIcon
            aria-hidden="true"
            className="text-muted-foreground"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuItem>مظهر مظهر خارجي</DropdownMenuItem>
        <DropdownMenuItem>التفضيلات</DropdownMenuItem>
        <DropdownMenuItem>إعدادات واجهة برمجية</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
