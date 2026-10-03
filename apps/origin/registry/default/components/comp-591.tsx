import { BotMessageSquareIcon, MessageCircleDashedIcon } from "lucide-react";
import UserMenu from "@/registry/default/components/navbar-components/user-menu";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div>
          <Select
            aria-label="اختر نموذج الذكاء الاصطناعي"
            defaultValue="orion-alpha-45"
          >
            <SelectTrigger className="**:data-desc:hidden [&>svg]:shrink-0 [&>svg]:text-muted-foreground/80">
              <BotMessageSquareIcon aria-hidden="true" size={16} />
              <SelectValue placeholder="اختر نموذج الذكاء الاصطناعي" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
              <SelectGroup>
                <SelectLabel className="ps-2">نماذج</SelectLabel>
                <SelectItem value="orion-alpha-45">
                  أوريون ألفا 4.5
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    الأداء المتوازن والإبداع
                  </span>
                </SelectItem>
                <SelectItem value="orion-code-4">
                  أوريون كود 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    الأمثل لتوليد التعليمات البرمجية وفهمها
                  </span>
                </SelectItem>
                <SelectItem value="nova-chat-4">
                  محادثة نوفا ٤
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    يتفوق في محادثات طبيعية وجذابة
                  </span>
                </SelectItem>
                <SelectItem value="galaxy-max-4">
                  غالاكسي ٤
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    أقوى نموذج للمهام المعقدة
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center justify-end gap-2">
          {/* Layout button */}
          <Button
            aria-label="الدردشة المؤقتة"
            className="size-8 rounded-full text-muted-foreground shadow-none"
            size="icon"
            variant="ghost"
          >
            <MessageCircleDashedIcon aria-hidden="true" size={16} />
          </Button>
          {/* User menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
