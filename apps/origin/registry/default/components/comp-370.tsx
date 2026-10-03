import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  TrashIcon,
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
        <Button variant="outline">
          تصنيف العناصر المجمعة
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>التسمية</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CopyPlusIcon aria-hidden="true" className="opacity-60" size={16} />
            نسخ
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BoltIcon aria-hidden="true" className="opacity-60" size={16} />
            تعديل
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>التسمية</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Layers2Icon aria-hidden="true" className="opacity-60" size={16} />
            المجموعة
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FilesIcon aria-hidden="true" className="opacity-60" size={16} />
            استنساخ
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <TrashIcon aria-hidden="true" size={16} />
            حذف
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
