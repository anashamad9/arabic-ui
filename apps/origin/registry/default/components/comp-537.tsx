import {
  Timeline,
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
    id: 1,
    title: "انطلاقة المشروع",
  },
  {
    date: "مارس 22, 2024",
    id: 2,
    title: "مرحلة التصميم",
  },
  {
    date: "أبريل 5, 2024",
    id: 3,
    title: "تطوير سبرينت",
  },
  {
    date: "أبريل 19, 2024",
    id: 4,
    title: "الاختبار والنشر",
  },
  {
    date: "3 مايو 2024",
    id: 5,
    title: "تدريب المستخدم",
  },
  {
    date: "17 مايو 2024",
    id: 6,
    title: "تسليم المشروع",
  },
];

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-end even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:start-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:start-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
