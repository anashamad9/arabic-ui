"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

const occurrences = [
  { date: "الأربعاء, يوليو 15", id: "occurrence-1", time: "9:00 – 9:30am" },
  { date: "الأربعاء, يوليو 15", id: "occurrence-2", time: "10:00 – 10:30am" },
  { date: "الأربعاء, يوليو 15", id: "occurrence-3", time: "11:00 – 11:30am" },
];

export default function Particle() {
  const [selected, setSelected] = useState(
    occurrences.map((occurrence) => occurrence.id),
  );

  return (
    <div className="flex gap-2">
      <Button size="xs" variant="outline">
        رفض
      </Button>
      <Group aria-label="تأكيد الحجز">
        <Button size="xs">تأكيد كل شيء</Button>
        <GroupSeparator className="bg-primary/72" />
        <Popover>
          <PopoverTrigger
            render={<Button aria-label="اختر الأحداث للتأكيد" size="icon-xs" />}
          >
            <ChevronDownIcon aria-hidden="true" />
          </PopoverTrigger>
          <PopoverPopup align="end" className="w-84">
            <div className="mb-3">
              <PopoverTitle className="text-sm">تأكيد الحوادث</PopoverTitle>
              <PopoverDescription className="text-xs">
                {occurrences.length} في انتظار هذا الحجز
              </PopoverDescription>
            </div>
            <CheckboxGroup
              aria-label="حالات للتأكيد"
              className="gap-0 self-stretch"
              onValueChange={setSelected}
              value={selected}
            >
              {occurrences.map((occurrence) => (
                <Label className="flex w-full gap-2 py-1.5" key={occurrence.id}>
                  <Checkbox value={occurrence.id} />
                  <span className="tabular-nums">{occurrence.time}</span>
                  <span className="ms-auto font-normal text-muted-foreground">
                    {occurrence.date}
                  </span>
                </Label>
              ))}
            </CheckboxGroup>
            <div className="mt-3 flex justify-end gap-2">
              <PopoverClose
                disabled={selected.length === 0}
                render={<Button size="xs" variant="ghost" />}
              >
                رفض المختارة
              </PopoverClose>
              <PopoverClose
                disabled={selected.length === 0}
                render={<Button size="xs" />}
              >
                تأكيد التحديد
                <Badge className="-me-1 text-primary-foreground/60">
                  {selected.length}
                </Badge>
              </PopoverClose>
            </div>
          </PopoverPopup>
        </Popover>
      </Group>
    </div>
  );
}
