import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
} from "lucide-react";
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
          القائمة مع الأيقونات
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyPlusIcon aria-hidden="true" className="opacity-60" size={16} />
          نسخ
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BoltIcon aria-hidden="true" className="opacity-60" size={16} />
          تعديل
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Layers2Icon aria-hidden="true" className="opacity-60" size={16} />
          المجموعة
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FilesIcon aria-hidden="true" className="opacity-60" size={16} />
          استنساخ
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
