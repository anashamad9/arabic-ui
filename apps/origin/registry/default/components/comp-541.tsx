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
    description: "اجتماع الفريق الأولي.",
    id: 1,
    title: "انطلاقة المشروع",
  },
  {
    date: "مارس 22, 2024",
    description: "الإطارات السلكية المكتملة.",
    id: 2,
    title: "مرحلة التصميم",
  },
  {
    date: "أبريل 5, 2024",
    description: "تطوير الخلفية.",
    id: 3,
    title: "تطوير سبرينت",
  },
  {
    date: "أبريل 19, 2024",
    description: "تحسين الأداء.",
    id: 4,
    title: "الاختبار والنشر",
  },
];

export default function Component() {
  return (
    <Timeline defaultValue={3} orientation="horizontal">
      {items.map((item) => (
        <TimelineItem
          className="group-data-[orientation=horizontal]/timeline:mt-0"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
            <TimelineDate className="mb-10">{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8" />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
