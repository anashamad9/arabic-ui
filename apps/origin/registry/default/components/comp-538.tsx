import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineItem,
} from "@/registry/default/ui/timeline";

const items = [
  {
    date: new Date("2024-01-09T10:55:00"),
    description: "تم الانتهاء من النسخ الاحتياطي للنظام بنجاح.",
    id: 1,
  },
  {
    date: new Date("2024-01-09T10:50:00"),
    description: "إعادة تشغيل خدمة مصادقة المستخدم بسبب تحديث التكوين.",
    id: 2,
  },
  {
    date: new Date("2024-01-09T10:45:00"),
    description:
      "تحذير: تم اكتشاف استخدام وحدة المعالجة المركزية العالية على عقدة العامل-03.",
    id: 3,
  },
  {
    date: new Date("2024-01-09T10:40:00"),
    description: "بدأ نشر جديد لـ واجهة برمجية-service v2.1.0.",
    id: 4,
  },
];

export default function Component() {
  return (
    <Timeline className="divide-y rounded-lg border">
      {items.map((item) => (
        <TimelineItem className="m-0! px-4! py-3!" key={item.id} step={item.id}>
          <TimelineContent className="text-foreground">
            {item.description}
            <TimelineDate className="mt-1">
              {item.date.toLocaleDateString("ar", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              في{" "}
              {item.date.toLocaleTimeString("ar", {
                hour: "numeric",
                hour12: true,
                minute: "2-digit",
              })}
            </TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
