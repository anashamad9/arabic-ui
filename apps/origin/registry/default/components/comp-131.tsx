"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

const options = [
  {
    description:
      "سيتم إضافة جميع الالتزامات من هذا الفرع إلى الفرع الأساسي عبر إصدار التزام.",
    label: "دمج طلب السحب",
  },
  {
    description:
      "سيتم دمج 6 التزامات من هذا الفرع في التزام واحد في فرع القاعدة.",
    label: "الاسكواش والاندماج",
  },
  {
    description:
      "ستتم إعادة صياغة الالتزامات الستة من هذا الفرع وإضافتها إلى الفرع الأساسي.",
    label: "إعادة القاعدة والدمج",
  },
];

export default function Component() {
  const [selectedIndex, setSelectedIndex] = useState("0");

  return (
    <div className="inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        {options[Number(selectedIndex)].label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="الخيارات"
            className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
            size="icon"
          >
            <ChevronDownIcon aria-hidden="true" size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="max-w-64 md:max-w-xs"
          side="bottom"
          sideOffset={4}
        >
          <DropdownMenuRadioGroup
            onValueChange={setSelectedIndex}
            value={selectedIndex}
          >
            {options.map((option, index) => (
              <DropdownMenuRadioItem
                className="items-start [&>span]:pt-1.5"
                key={option.label}
                value={String(index)}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm">{option.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {option.description}
                  </span>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
