"use client";

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/registry/default/lib/utils";
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

const frameworks = [
  {
    label: "Next.js",
    value: "next.js",
  },
  {
    label: "سفلت",
    value: "sveltekit",
  },
  {
    label: "Nuxt.js",
    value: "nuxt.js",
  },
  {
    label: "ريميكس",
    value: "remix",
  },
  {
    label: "أسترو",
    value: "astro",
  },
  {
    label: "أنغولار",
    value: "angular",
  },
  {
    label: "Vue.js",
    value: "vue",
  },
  {
    label: "رياكت",
    value: "react",
  },
  {
    label: "Ember.js",
    value: "ember",
  },
  {
    label: "غاتسبي",
    value: "gatsby",
  },
  {
    label: "الحادي عشر",
    value: "eleventy",
  },
  {
    label: "سوليد",
    value: "solid",
  },
  {
    label: "بريكت",
    value: "preact",
  },
  {
    label: "كويك",
    value: "qwik",
  },
  {
    label: "Alpine.js",
    value: "alpine",
  },
  {
    label: "ليت",
    value: "lit",
  },
];

export default function Component() {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>اختر مع البحث</Label>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
            id={id}
            role="combobox"
            variant="outline"
          >
            <span className={cn("truncate", !value && "text-muted-foreground")}>
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "اختر إطار العمل"}
            </span>
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
            <CommandInput placeholder="إطار البحث ..." />
            <CommandList>
              <CommandEmpty>لم يتم العثور على إطار.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={framework.value}
                  >
                    {framework.label}
                    {value === framework.value && (
                      <CheckIcon className="ms-auto" size={16} />
                    )}
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
