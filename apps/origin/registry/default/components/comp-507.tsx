"use client";

import {
  endOfMonth,
  endOfYear,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Component() {
  const today = new Date();
  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1),
  };
  const last7Days = {
    from: subDays(today, 6),
    to: today,
  };
  const last30Days = {
    from: subDays(today, 29),
    to: today,
  };
  const monthToDate = {
    from: startOfMonth(today),
    to: today,
  };
  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1)),
  };
  const yearToDate = {
    from: startOfYear(today),
    to: today,
  };
  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1)),
  };
  const [month, setMonth] = useState(today);
  const [date, setDate] = useState<DateRange | undefined>(last7Days);

  return (
    <div>
      <div className="rounded-md border">
        <div className="flex max-sm:flex-col">
          <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
            <div className="h-full sm:border-e">
              <div className="flex flex-col px-2">
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate({
                      from: today,
                      to: today,
                    });
                    setMonth(today);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  اليوم
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yesterday);
                    setMonth(yesterday.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  أمس
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last7Days);
                    setMonth(last7Days.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  آخر 7 أيام
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last30Days);
                    setMonth(last30Days.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  آخر 30 يوم
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(monthToDate);
                    setMonth(monthToDate.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  الشهر حتى الآن
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastMonth);
                    setMonth(lastMonth.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  الشهر الماضي
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yearToDate);
                    setMonth(yearToDate.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  السنة حتى الآن
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastYear);
                    setMonth(lastYear.to);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  العام الماضي
                </Button>
              </div>
            </div>
          </div>
          <Calendar
            className="p-2"
            disabled={[
              { after: today }, // Dates before today
            ]}
            mode="range"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate);
              }
            }}
            selected={date}
          />
        </div>
      </div>
      <p
        aria-live="polite"
        className="mt-4 text-center text-muted-foreground text-xs"
        role="region"
      >
        تقويم المدى مع الإعدادات المسبقة -{" "}
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
