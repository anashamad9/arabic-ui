import { ChevronDownIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button className="h-auto p-0 hover:bg-transparent" variant="ghost">
      <Avatar>
        <AvatarImage alt="صورة الملف الشخصي" src="/origin/avatar.jpg" />
        <AvatarFallback>ل ح</AvatarFallback>
      </Avatar>
      <ChevronDownIcon aria-hidden="true" className="opacity-60" size={16} />
    </Button>
  );
}
