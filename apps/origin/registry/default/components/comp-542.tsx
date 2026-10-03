"use client";

import { addDays, setHours, setMinutes, subDays } from "date-fns";
import { useState } from "react";
import {
  type CalendarEvent,
  EventCalendar,
} from "@/registry/default/components/event-calendar";

// Sample events data with hardcoded times
const sampleEvents: CalendarEvent[] = [
  {
    allDay: true,
    color: "sky",
    description: "التخطيط الاستراتيجي للعام المقبل",
    end: subDays(new Date(), 23), // 23 days before today
    id: "1",
    location: "قاعة المؤتمرات الرئيسية",
    start: subDays(new Date(), 24), // 24 days before today
    title: "التخطيط السنوي",
  },
  {
    color: "amber",
    description: "تقديم المنجزات النهائية",
    end: setMinutes(setHours(subDays(new Date(), 9), 15), 30), // 3:30 PM, 9 days before
    id: "2",
    location: "مكتب",
    start: setMinutes(setHours(subDays(new Date(), 9), 13), 0), // 1:00 PM, 9 days before
    title: "الموعد النهائي للمشروع",
  },
  {
    allDay: true,
    color: "orange",
    description: "التخطيط الاستراتيجي للعام المقبل",
    end: subDays(new Date(), 13), // 13 days before today
    id: "3",
    location: "قاعة المؤتمرات الرئيسية",
    start: subDays(new Date(), 13), // 13 days before today
    title: "مراجعة الميزانية الفصلية",
  },
  {
    color: "sky",
    description: "مزامنة الفريق الأسبوعية",
    end: setMinutes(setHours(new Date(), 11), 0), // 11:00 AM today
    id: "4",
    location: "غرفة الاجتماعات أ",
    start: setMinutes(setHours(new Date(), 10), 0), // 10:00 AM today
    title: "اجتماع الفريق",
  },
  {
    color: "emerald",
    description: "مناقشة متطلبات المشروع الجديدة",
    end: setMinutes(setHours(addDays(new Date(), 1), 13), 15), // 1:15 PM, 1 day from now
    id: "5",
    location: "داون تاون كافيه",
    start: setMinutes(setHours(addDays(new Date(), 1), 12), 0), // 12:00 PM, 1 day from now
    title: "الغداء مع العميل",
  },
  {
    allDay: true,
    color: "violet",
    description: "إصدار منتج جديد",
    end: addDays(new Date(), 6), // 6 days from now
    id: "6",
    start: addDays(new Date(), 3), // 3 days from now
    title: "إطلاق المنتج",
  },
  {
    color: "rose",
    description: "مناقشة حول العملاء الجدد",
    end: setMinutes(setHours(addDays(new Date(), 5), 14), 45), // 2:45 PM, 5 days from now
    id: "7",
    location: "داون تاون كافيه",
    start: setMinutes(setHours(addDays(new Date(), 4), 14), 30), // 2:30 PM, 4 days from now
    title: "مؤتمر المبيعات",
  },
  {
    color: "orange",
    description: "مزامنة الفريق الأسبوعية",
    end: setMinutes(setHours(addDays(new Date(), 5), 10), 30), // 10:30 AM, 5 days from now
    id: "8",
    location: "غرفة الاجتماعات أ",
    start: setMinutes(setHours(addDays(new Date(), 5), 9), 0), // 9:00 AM, 5 days from now
    title: "اجتماع الفريق",
  },
  {
    color: "sky",
    description: "مزامنة الفريق الأسبوعية",
    end: setMinutes(setHours(addDays(new Date(), 5), 15), 30), // 3:30 PM, 5 days from now
    id: "9",
    location: "غرفة الاجتماعات أ",
    start: setMinutes(setHours(addDays(new Date(), 5), 14), 0), // 2:00 PM, 5 days from now
    title: "مراجعة العقود",
  },
  {
    color: "amber",
    description: "مزامنة الفريق الأسبوعية",
    end: setMinutes(setHours(addDays(new Date(), 5), 11), 0), // 11:00 AM, 5 days from now
    id: "10",
    location: "غرفة الاجتماعات أ",
    start: setMinutes(setHours(addDays(new Date(), 5), 9), 45), // 9:45 AM, 5 days from now
    title: "اجتماع الفريق",
  },
  {
    color: "emerald",
    description: "التخطيط التسويقي الفصلي",
    end: setMinutes(setHours(addDays(new Date(), 9), 15), 30), // 3:30 PM, 9 days from now
    id: "11",
    location: "قسم التسويق",
    start: setMinutes(setHours(addDays(new Date(), 9), 10), 0), // 10:00 AM, 9 days from now
    title: "جلسة استراتيجية التسويق",
  },
  {
    allDay: true,
    color: "sky",
    description: "عرض النتائج السنوية",
    end: addDays(new Date(), 17), // 17 days from now
    id: "12",
    location: "جراند كونفرنس سنتر",
    start: addDays(new Date(), 17), // 17 days from now
    title: "الاجتماع السنوي للمساهمين",
  },
  {
    color: "rose",
    description: "العصف الذهني للميزات الجديدة",
    end: setMinutes(setHours(addDays(new Date(), 27), 17), 0), // 5:00 PM, 27 days from now
    id: "13",
    location: "مختبر الابتكار",
    start: setMinutes(setHours(addDays(new Date(), 26), 9), 0), // 9:00 AM, 26 days from now
    title: "ورشة تطوير المنتجات",
  },
];

export default function Component() {
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

  const handleEventAdd = (event: CalendarEvent) => {
    setEvents([...events, event]);
  };

  const handleEventUpdate = (updatedEvent: CalendarEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event,
      ),
    );
  };

  const handleEventDelete = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <EventCalendar
      events={events}
      onEventAdd={handleEventAdd}
      onEventDelete={handleEventDelete}
      onEventUpdate={handleEventUpdate}
    />
  );
}
