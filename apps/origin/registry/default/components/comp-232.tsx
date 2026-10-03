"use client";

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Fragment, useId, useState } from "react";
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

const countries = [
  {
    continent: "أمريكا",
    items: [
      { flag: "🇺🇸", value: "الولايات المتحدة الأمريكية" },
      { flag: "🇨🇦", value: "كندا" },
      { flag: "🇲🇽", value: "المكسيك" },
    ],
  },
  {
    continent: "أفريقيا",
    items: [
      { flag: "🇿🇦", value: "جنوب أفريقيا" },
      { flag: "🇳🇬", value: "نيجيريا" },
      { flag: "🇲🇦", value: "المغرب" },
    ],
  },
  {
    continent: "آسيا",
    items: [
      { flag: "🇨🇳", value: "الصين" },
      { flag: "🇯🇵", value: "اليابان" },
      { flag: "🇮🇳", value: "الهند" },
    ],
  },
  {
    continent: "أوروبا",
    items: [
      { flag: "🇬🇧", value: "المملكة المتحدة" },
      { flag: "🇫🇷", value: "فرنسا" },
      { flag: "🇩🇪", value: "ألمانيا" },
    ],
  },
  {
    continent: "أوقيانوسيا",
    items: [
      { flag: "🇦🇺", value: "أستراليا" },
      { flag: "🇳🇿", value: "نيوزيلندا" },
    ],
  },
];

export default function Component() {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>خيارات مع العلم والبحث</Label>
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
                <span className="text-lg leading-none">
                  {
                    countries
                      .map((group) =>
                        group.items.find((item) => item.value === value),
                      )
                      .filter(Boolean)[0]?.flag
                  }
                </span>
                <span className="truncate">{value}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">اختر البلد</span>
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
            <CommandInput placeholder="البحث عن البلد ..." />
            <CommandList>
              <CommandEmpty>لم يتم العثور على بلد.</CommandEmpty>
              {countries.map((group) => (
                <Fragment key={group.continent}>
                  <CommandGroup heading={group.continent}>
                    {group.items.map((country) => (
                      <CommandItem
                        key={country.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue);
                          setOpen(false);
                        }}
                        value={country.value}
                      >
                        <span className="text-lg leading-none">
                          {country.flag}
                        </span>{" "}
                        {country.value}
                        {value === country.value && (
                          <CheckIcon className="ms-auto" size={16} />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Fragment>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
