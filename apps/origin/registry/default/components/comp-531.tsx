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
    date: "15 مارس 2024",
    description:
      "الاجتماع الأولي للفريق وتحديد نطاق المشروع. وضع المعالم الرئيسية وتخصيص الموارد.",
    id: 1,
    title: "انطلاقة المشروع",
  },
  {
    date: "مارس 22, 2024",
    description:
      "تم الانتهاء من الإطارات السلكية والنماذج النموذجية لواجهة المستخدم. تم دمج مراجعة أصحاب المصلحة وردود الفعل.",
    id: 2,
    title: "مرحلة التصميم",
  },
  {
    date: "أبريل 5, 2024",
    description:
      "تنفيذ واجهة برمجة التطبيقات الخلفية وتطوير مكونات الواجهة الأمامية قيد التنفيذ.",
    id: 3,
    title: "تطوير سبرينت",
  },
  {
    date: "أبريل 19, 2024",
    description: "اختبار ضمان الجودة ، وتحسين الأداء ، وإعداد نشر الإنتاج.",
    id: 4,
    title: "الاختبار والنشر",
  },
];

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-end">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
