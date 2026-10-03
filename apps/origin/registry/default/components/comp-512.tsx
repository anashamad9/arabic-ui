"use client";

import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useId, useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Component() {
  const id = useId();
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div>
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>منتقي نطاق التاريخ</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="group w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
              id={id}
              variant="outline"
            >
              <span
                className={cn("truncate", !date && "text-muted-foreground")}
              >
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
                  "اختيار نطاق التاريخ"
                )}
              </span>
              <CalendarIcon
                aria-hidden="true"
                className="shrink-0 text-muted-foreground/80 transition-colors group-hover:text-foreground"
                size={16}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-2">
            <Calendar mode="range" onSelect={setDate} selected={date} />
          </PopoverContent>
        </Popover>
      </div>
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        مبني باستخدام{" "}
        <a
          className="underline hover:text-foreground"
          href="https://daypicker.dev/"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          منتقي التاريخ
        </a>
      </p>
    </div>
  );
}
