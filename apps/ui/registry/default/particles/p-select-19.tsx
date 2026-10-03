"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const users = [
  {
    avatar:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=72&h=72&dpr=2&q=80",
    initials: "JH",
    label: "جيني هاميلتون",
    value: "jenny",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=72&h=72&dpr=2&q=80",
    initials: "PS",
    label: "بول سميث",
    value: "paul",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=72&h=72&dpr=2&q=80",
    initials: "LW",
    label: "لونا واين",
    value: "luna",
  },
];

export default function Particle() {
  return (
    <Select defaultValue={users[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="اختر المستخدم">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage alt={item.label} src={item.avatar} />
                <AvatarFallback className="text-[.625rem]">
                  {item.initials}
                </AvatarFallback>
              </Avatar>
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>انتحال شخصية المستخدم</SelectGroupLabel>
          {users.map((item) => (
            <SelectItem key={item.value} value={item}>
              <span className="flex items-center gap-2">
                <Avatar className="size-5">
                  <AvatarImage alt={item.label} src={item.avatar} />
                  <AvatarFallback className="text-[10px]">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{item.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
