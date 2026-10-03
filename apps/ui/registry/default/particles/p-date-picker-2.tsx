"use client";

import type { DateRange } from "@daypicker/react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <Popover>
      <PopoverTrigger
        render={<Button className="w-full justify-start" variant="outline" />}
      >
        <CalendarIcon aria-hidden="true" />
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y", { locale: ar })} -{" "}
              {format(date.to, "LLL dd, y", { locale: ar })}
            </>
          ) : (
            format(date.from, "LLL dd, y", { locale: ar })
          )
        ) : (
          <span>اختيار نطاق التاريخ</span>
        )}
      </PopoverTrigger>
      <PopoverPopup>
        <Calendar
          defaultMonth={date?.from}
          mode="range"
          onSelect={setDate}
          selected={date}
        />
      </PopoverPopup>
    </Popover>
  );
}
