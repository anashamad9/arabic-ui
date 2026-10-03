"use client";

import {
  ArchiveRestoreIcon,
  ChevronDownIcon,
  PlusIcon,
  Share2Icon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function Component() {
  const [framework, setFramework] = useState("nextjs");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          قائمة غنية بالرموز
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PlusIcon aria-hidden="true" className="opacity-60" size={16} />
            <span>جديد</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>إطار العمل</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  onValueChange={setFramework}
                  value={framework}
                >
                  <DropdownMenuRadioItem value="nextjs">
                    Next.js
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem disabled value="sveltekit">
                    سفلت
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="remix">
                    ريميكس
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="astro">
                    أسترو
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>الإشعارات</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                >
                  البريد الإلكتروني
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                >
                  دفع
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Share2Icon aria-hidden="true" className="opacity-60" size={16} />
            <span>مشاركة</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArchiveRestoreIcon
              aria-hidden="true"
              className="opacity-60"
              size={16}
            />
            <span>أرشفة</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon aria-hidden="true" size={16} />
          <span>حذف</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
