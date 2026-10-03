"use client";

import { RiCalendarLine, RiDeleteBinLine } from "@remixicon/react";
import { format, isBefore } from "date-fns";
import { ar } from "date-fns/locale";
import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  CalendarEvent,
  EventColor,
} from "@/registry/default/components/event-calendar";
import {
  DefaultEndHour,
  DefaultStartHour,
  EndHour,
  StartHour,
} from "@/registry/default/components/event-calendar/constants";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Textarea } from "@/registry/default/ui/textarea";

interface EventDialogProps {
  event: CalendarEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: CalendarEvent) => void;
  onDelete: (eventId: string) => void;
}

export function EventDialog({
  event,
  isOpen,
  onClose,
  onSave,
  onDelete,
}: EventDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState(`${DefaultStartHour}:00`);
  const [endTime, setEndTime] = useState(`${DefaultEndHour}:00`);
  const [allDay, setAllDay] = useState(false);
  const [location, setLocation] = useState("");
  const [color, setColor] = useState<EventColor>("sky");
  const [error, setError] = useState<string | null>(null);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  // Debug log to check what event is being passed
  useEffect(() => {
    console.log("EventDialog تلقى الحدث:", event);
  }, [event]);

  const resetForm = useCallback(() => {
    setTitle("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(`${DefaultStartHour}:00`);
    setEndTime(`${DefaultEndHour}:00`);
    setAllDay(false);
    setLocation("");
    setColor("sky");
    setError(null);
  }, []);

  const formatTimeForInput = useCallback((date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = Math.floor(date.getMinutes() / 15) * 15;
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setDescription(event.description || "");

      const start = new Date(event.start);
      const end = new Date(event.end);

      setStartDate(start);
      setEndDate(end);
      setStartTime(formatTimeForInput(start));
      setEndTime(formatTimeForInput(end));
      setAllDay(event.allDay || false);
      setLocation(event.location || "");
      setColor((event.color as EventColor) || "sky");
      setError(null); // Reset error when opening dialog
    } else {
      resetForm();
    }
  }, [event, formatTimeForInput, resetForm]);

  // Memoize time options so they're only calculated once
  const timeOptions = useMemo(() => {
    const options = [];
    for (let hour = StartHour; hour <= EndHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const value = `${formattedHour}:${formattedMinute}`;
        // Use a fixed date to avoid unnecessary date object creations
        const date = new Date(2000, 0, 1, hour, minute);
        const label = format(date, "h:mm a", { locale: ar });
        options.push({ label, value });
      }
    }
    return options;
  }, []); // Empty dependency array ensures this only runs once

  const handleSave = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (!allDay) {
      const [startHours = 0, startMinutes = 0] = startTime
        .split(":")
        .map(Number);
      const [endHours = 0, endMinutes = 0] = endTime.split(":").map(Number);

      if (
        startHours < StartHour ||
        startHours > EndHour ||
        endHours < StartHour ||
        endHours > EndHour
      ) {
        setError(
          `يجب أن يكون الوقت المحدد بين ${StartHour}00 و 00 ${EndHour}:00`,
        );
        return;
      }

      start.setHours(startHours, startMinutes, 0);
      end.setHours(endHours, endMinutes, 0);
    } else {
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    }

    // Validate that end date is not before start date
    if (isBefore(end, start)) {
      setError("تاريخ الانتهاء لا يمكن أن يكون قبل تاريخ البدء");
      return;
    }

    // Use generic title if empty
    const eventTitle = title.trim() ? title : "(بدون عنوان)";

    onSave({
      allDay,
      color,
      description,
      end,
      id: event?.id || "",
      location,
      start,
      title: eventTitle,
    });
  };

  const handleDelete = () => {
    if (event?.id) {
      onDelete(event.id);
    }
  };

  // Updated color options to match types.ts
  const colorOptions: Array<{
    value: EventColor;
    label: string;
    bgClass: string;
    borderClass: string;
  }> = [
    {
      bgClass: "bg-sky-400 data-[state=checked]:bg-sky-400",
      borderClass: "border-sky-400 data-[state=checked]:border-sky-400",
      label: "سكاي",
      value: "sky",
    },
    {
      bgClass: "bg-amber-400 data-[state=checked]:bg-amber-400",
      borderClass: "border-amber-400 data-[state=checked]:border-amber-400",
      label: "العنبر",
      value: "amber",
    },
    {
      bgClass: "bg-violet-400 data-[state=checked]:bg-violet-400",
      borderClass: "border-violet-400 data-[state=checked]:border-violet-400",
      label: "البنفسجي",
      value: "violet",
    },
    {
      bgClass: "bg-rose-400 data-[state=checked]:bg-rose-400",
      borderClass: "border-rose-400 data-[state=checked]:border-rose-400",
      label: "روز",
      value: "rose",
    },
    {
      bgClass: "bg-emerald-400 data-[state=checked]:bg-emerald-400",
      borderClass: "border-emerald-400 data-[state=checked]:border-emerald-400",
      label: "الزمرد",
      value: "emerald",
    },
    {
      bgClass: "bg-orange-400 data-[state=checked]:bg-orange-400",
      borderClass: "border-orange-400 data-[state=checked]:border-orange-400",
      label: "برتقال",
      value: "orange",
    },
  ];

  return (
    <Dialog onOpenChange={(open) => !open && onClose()} open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event?.id ? "تعديل الحدث" : "إنشاء الحدث"}</DialogTitle>
          <DialogDescription className="sr-only">
            {event?.id
              ? "تعديل تفاصيل هذا الحدث"
              : "إضافة حدث جديد إلى التقويم الخاص بك"}
          </DialogDescription>
        </DialogHeader>
        {error && (
          <div className="rounded-md bg-destructive/15 px-3 py-2 text-destructive text-sm">
            {error}
          </div>
        )}
        <div className="grid gap-4 py-4">
          <div className="*:not-first:mt-1.5">
            <Label htmlFor="title">العنوان</Label>
            <Input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="*:not-first:mt-1.5">
            <Label htmlFor="description">الوصف</Label>
            <Textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              value={description}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 *:not-first:mt-1.5">
              <Label htmlFor="start-date">تاريخ البدء</Label>
              <Popover onOpenChange={setStartDateOpen} open={startDateOpen}>
                <PopoverTrigger asChild>
                  <Button
                    className={cn(
                      "group w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]",
                      !startDate && "text-muted-foreground",
                    )}
                    id="start-date"
                    variant={"outline"}
                  >
                    <span
                      className={cn(
                        "truncate",
                        !startDate && "text-muted-foreground",
                      )}
                    >
                      {startDate
                        ? format(startDate, "PPP", { locale: ar })
                        : "اختر تاريخًا"}
                    </span>
                    <RiCalendarLine
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground/80"
                      size={16}
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-2">
                  <Calendar
                    defaultMonth={startDate}
                    mode="single"
                    onSelect={(date) => {
                      if (date) {
                        setStartDate(date);
                        // If end date is before the new start date, update it to match the start date
                        if (isBefore(endDate, date)) {
                          setEndDate(date);
                        }
                        setError(null);
                        setStartDateOpen(false);
                      }
                    }}
                    selected={startDate}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {!allDay && (
              <div className="min-w-28 *:not-first:mt-1.5">
                <Label htmlFor="start-time">وقت البدء</Label>
                <Select onValueChange={setStartTime} value={startTime}>
                  <SelectTrigger id="start-time">
                    <SelectValue placeholder="حدد الوقت" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1 *:not-first:mt-1.5">
              <Label htmlFor="end-date">تاريخ الانتهاء</Label>
              <Popover onOpenChange={setEndDateOpen} open={endDateOpen}>
                <PopoverTrigger asChild>
                  <Button
                    className={cn(
                      "group w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]",
                      !endDate && "text-muted-foreground",
                    )}
                    id="end-date"
                    variant={"outline"}
                  >
                    <span
                      className={cn(
                        "truncate",
                        !endDate && "text-muted-foreground",
                      )}
                    >
                      {endDate
                        ? format(endDate, "PPP", { locale: ar })
                        : "اختر تاريخًا"}
                    </span>
                    <RiCalendarLine
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground/80"
                      size={16}
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-2">
                  <Calendar
                    defaultMonth={endDate}
                    disabled={{ before: startDate }}
                    mode="single"
                    onSelect={(date) => {
                      if (date) {
                        setEndDate(date);
                        setError(null);
                        setEndDateOpen(false);
                      }
                    }}
                    selected={endDate}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {!allDay && (
              <div className="min-w-28 *:not-first:mt-1.5">
                <Label htmlFor="end-time">نهاية الوقت</Label>
                <Select onValueChange={setEndTime} value={endTime}>
                  <SelectTrigger id="end-time">
                    <SelectValue placeholder="حدد الوقت" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={allDay}
              id="all-day"
              onCheckedChange={(checked) => setAllDay(checked === true)}
            />
            <Label htmlFor="all-day">طوال اليوم</Label>
          </div>

          <div className="*:not-first:mt-1.5">
            <Label htmlFor="location">الموقع</Label>
            <Input
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <fieldset className="space-y-4">
            <legend className="font-medium text-foreground text-sm leading-none">
              آداب السلوك
            </legend>
            <RadioGroup
              className="flex gap-1.5"
              defaultValue={colorOptions[0]?.value}
              onValueChange={(value: EventColor) => setColor(value)}
              value={color}
            >
              {colorOptions.map((colorOption) => (
                <RadioGroupItem
                  aria-label={colorOption.label}
                  className={cn(
                    "size-6 shadow-none",
                    colorOption.bgClass,
                    colorOption.borderClass,
                  )}
                  id={`color-${colorOption.value}`}
                  key={colorOption.value}
                  value={colorOption.value}
                />
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <DialogFooter className="flex-row sm:justify-between">
          {event?.id && (
            <Button
              aria-label="حذف الحدث"
              onClick={handleDelete}
              size="icon"
              variant="outline"
            >
              <RiDeleteBinLine aria-hidden="true" size={16} />
            </Button>
          )}
          <div className="flex flex-1 justify-end gap-2">
            <Button onClick={onClose} variant="outline">
              إلغاء
            </Button>
            <Button onClick={handleSave}>حفظ</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
