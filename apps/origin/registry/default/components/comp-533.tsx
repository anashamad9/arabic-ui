import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry/default/ui/timeline";

const items = [
  {
    date: "منذ 15 دقيقة",
    description:
      "قدم العلاقات العامة #342 مع تنفيذ ميزة جديدة. في انتظار مراجعة التعليمات البرمجية من قادة الفريق.",
    id: 1,
    title: "سحب طلب مقدم",
  },
  {
    date: "منذ 10 دقائق",
    description:
      "بدأت الاختبارات الآلية وعملية البناء. تشغيل اختبارات الوحدة وفحوصات جودة الكود.",
    id: 2,
    title: "CI خط أنابيب بدأت",
  },
  {
    date: "منذ 5 دقائق",
    description:
      "التعليقات الواردة على العلاقات العامة. التعديلات الطفيفة اللازمة في التعامل مع الأخطاء والوثائق.",
    id: 3,
    title: "مراجعة التعليمات البرمجية",
  },
  {
    description:
      "نفذت التغييرات المطلوبة ودفعت التحديثات إلى فرع ميزة. في انتظار الموافقة النهائية.",
    id: 4,
    title: "التغييرات التي تم دفعها",
  },
];

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineTitle className="-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
