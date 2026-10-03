"use client";

import {
  BlocksIcon,
  BrainIcon,
  ChevronDownIcon,
  CpuIcon,
  DatabaseIcon,
  GlobeIcon,
  LayoutIcon,
  LineChartIcon,
  NetworkIcon,
  SearchIcon,
  ServerIcon,
} from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

const items = [
  {
    icon: LineChartIcon,
    label: "منصة التحليلات",
    number: 2451,
    value: "منصة التحليلات",
  },
  {
    icon: BrainIcon,
    label: "خدمات الذكاء الاصطناعي",
    number: 1832,
    value: "خدمات الذكاء الاصطناعي",
  },
  {
    icon: DatabaseIcon,
    label: "أنظمة قواعد البيانات",
    number: 1654,
    value: "أنظمة قواعد البيانات",
  },
  {
    icon: CpuIcon,
    label: "حساب الموارد",
    number: 943,
    value: "حساب الموارد",
  },
  {
    icon: NetworkIcon,
    label: "خدمات الشبكة",
    number: 832,
    value: "خدمات الشبكة",
  },
  {
    icon: GlobeIcon,
    label: "خدمات الويب",
    number: 654,
    value: "خدمات الويب",
  },
  {
    icon: SearchIcon,
    label: "أدوات المراقبة",
    number: 432,
    value: "أدوات المراقبة",
  },
  {
    icon: ServerIcon,
    label: "إدارة الخادم",
    number: 321,
    value: "إدارة الخادم",
  },
  {
    icon: BlocksIcon,
    label: "البنية التحتية",
    number: 234,
    value: "infrastructure",
  },
  {
    icon: LayoutIcon,
    label: "خدمات فرونت إند",
    number: 123,
    value: "خدمات الواجهة",
  },
];

export default function Component() {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>خيارات مع رمز ورقم</Label>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
            id={id}
            role="combobox"
            variant="outline"
          >
            {value ? (
              <span className="flex min-w-0 items-center gap-2">
                {(() => {
                  const selectedItem = items.find(
                    (item) => item.value === value,
                  );
                  if (selectedItem) {
                    const Icon = selectedItem.icon;
                    return <Icon className="size-4 text-muted-foreground" />;
                  }
                  return null;
                })()}
                <span className="truncate">
                  {items.find((item) => item.value === value)?.label}
                </span>
              </span>
            ) : (
              <span className="text-muted-foreground">اختر فئة الخدمة</span>
            )}
            <ChevronDownIcon
              aria-hidden="true"
              className="shrink-0 text-muted-foreground/80"
              size={16}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
        >
          <Command>
            <CommandInput placeholder="خدمات البحث..." />
            <CommandList>
              <CommandEmpty>لم يتم العثور على خدمة</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    className="flex items-center justify-between"
                    key={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={item.value}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="size-4 text-muted-foreground" />
                      {item.label}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {item.number.toLocaleString()}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
