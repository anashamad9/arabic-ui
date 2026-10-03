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
    action: "فتح قضية جديدة",
    date: "منذ 15 دقيقة",
    description:
      "أواجه مشكلة مع مكتبة المكوّنات الجديدة، إنها لا تصيّر بشكل صحيح.",
    id: 1,
    image: "/origin/avatar-40-01.jpg",
    title: "هانا كاندل",
  },
  {
    action: "التعليق على",
    date: "منذ 10 دقائق",
    description: "هانا، أنا أواجه مشكلة مع مكتبة المكونات الجديدة.",
    id: 2,
    image: "/origin/avatar-40-02.jpg",
    title: "كريس تومبسون",
  },
  {
    action: "تعيينك إلى",
    date: "منذ 5 دقائق",
    description:
      "مكتبة المكونات الجديدة لا يتم عرضها بشكل صحيح. هل يمكنك إلقاء نظرة؟",
    id: 3,
    image: "/origin/avatar-40-03.jpg",
    title: "إيما ديفيس",
  },
  {
    action: "أغلقت القضية",
    date: "منذ 2 دقيقة",
    description: "تم إصلاح المشكلة. يرجى مراجعة التغييرات.",
    id: 4,
    image: "/origin/avatar-40-05.jpg",
    title: "أليكس مورغان",
  },
];

export default function Component() {
  return (
    <Timeline>
      {items.map((item) => (
        <TimelineItem
          className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">
              {item.title}{" "}
              <span className="font-normal text-muted-foreground text-sm">
                {item.action}
              </span>
            </TimelineTitle>
            <TimelineIndicator className="flex size-6 items-center justify-center border-none bg-primary/10 group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground">
              <img
                alt={item.title}
                className="size-6 rounded-full"
                src={item.image}
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent className="mt-2 rounded-lg border px-4 py-3 text-foreground">
            {item.description}
            <TimelineDate className="mt-1 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
