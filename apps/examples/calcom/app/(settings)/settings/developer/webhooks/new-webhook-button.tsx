import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@coss/ui/components/avatar";
import { Button } from "@coss/ui/components/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@coss/ui/components/menu";
import { PlusIcon } from "lucide-react";

export type CreateForOption = {
  id: string;
  name: string;
  type: "user" | "organization";
  initials: string;
  avatar?: string;
};

const createForOptions: CreateForOption[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=72&h=72&dpr=2&q=80",
    id: "user-1",
    initials: "AE",
    name: "مثال المشرف",
    type: "user",
  },
  { id: "org-1", initials: "AI", name: "شركة المثال", type: "organization" },
  { id: "org-2", initials: "OR", name: "المؤسسة", type: "organization" },
  {
    id: "org-3",
    initials: "FS",
    name: "مؤسسة البرمجيات الحرة",
    type: "organization",
  },
];

export interface NewWebhookButtonProps {
  text: string;
  onSelect?: (option: CreateForOption) => void;
}

export function NewWebhookButton({ text, onSelect }: NewWebhookButtonProps) {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>
        <PlusIcon aria-hidden="true" />
        {text}
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>إنشاء ل</MenuGroupLabel>
          {createForOptions.map((item) => (
            <MenuItem key={item.id} onClick={() => onSelect?.(item)}>
              <span className="flex items-center gap-2">
                <Avatar className="size-5">
                  {item.avatar ? (
                    <AvatarImage alt={item.name} src={item.avatar} />
                  ) : null}
                  <AvatarFallback className="text-[.625rem]">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{item.name}</span>
              </span>
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
