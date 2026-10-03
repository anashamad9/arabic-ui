"use client";

import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

export interface Item {
  value: string;
  label: string;
  shortcut?: string;
}

export interface Group {
  value: string;
  items: Item[];
}

export const suggestions: Item[] = [
  { label: "خطي", shortcut: "⌘L", value: "linear" },
  { label: "فيغما", shortcut: "⌘F", value: "figma" },
  { label: "التراخي", shortcut: "⌘S", value: "slack" },
  { label: "يوتيوب", shortcut: "⌘Y", value: "youtube" },
  { label: "رايكاست", shortcut: "⌘R", value: "raycast" },
];

export const commands: Item[] = [
  { label: "تاريخ الحافظة", shortcut: "⌘⇧C", value: "clipboard-history" },
  { label: "تمديد الاستيراد", shortcut: "⌘I", value: "import-extension" },
  { label: "إنشاء مقتطف", shortcut: "⌘N", value: "create-snippet" },
  { label: "تفضيلات النظام", shortcut: "⌘,", value: "system-preferences" },
  { label: "إدارة النوافذ", shortcut: "⌘⇧W", value: "window-management" },
];

export const groupedItems: Group[] = [
  { items: suggestions, value: "اقتراحات" },
  { items: commands, value: "الأوامر" },
];

export default function Particle() {
  const [open, setOpen] = useState(false);

  function handleItemClick(_item: Item) {
    setOpen(false);
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog onOpenChange={setOpen} open={open}>
      <CommandDialogTrigger render={<Button variant="outline" />}>
        لوحة القيادة المفتوحة
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>J</Kbd>
        </KbdGroup>
      </CommandDialogTrigger>
      <CommandDialogPopup>
        <Command items={groupedItems}>
          <CommandInput placeholder="البحث عن التطبيقات والأوامر..." />
          <CommandPanel>
            <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
            <CommandList>
              {(group: Group, _index: number) => (
                <Fragment key={group.value}>
                  <CommandGroup items={group.items}>
                    <CommandGroupLabel>{group.value}</CommandGroupLabel>
                    <CommandCollection>
                      {(item: Item) => (
                        <CommandItem
                          key={item.value}
                          onClick={() => handleItemClick(item)}
                          value={item.value}
                        >
                          <span className="flex-1">{item.label}</span>
                          {item.shortcut && (
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          )}
                        </CommandItem>
                      )}
                    </CommandCollection>
                  </CommandGroup>
                  <CommandSeparator />
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <KbdGroup>
                  <Kbd>
                    <ArrowUpIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowDownIcon />
                  </Kbd>
                </KbdGroup>
                <span>تنقل</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>
                  <CornerDownLeftIcon />
                </Kbd>
                <span>فتح</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Esc</Kbd>
              <span>إغلاق</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
