import { GitCompare, GitFork, GitMerge, GitPullRequest } from "lucide-react";
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
    description: "مفترق المستودع لإنشاء فرع جديد للتنمية.",
    icon: GitFork,
    id: 1,
    title: "مستودع مفترق",
  },
  {
    date: "منذ 10 دقائق",
    description:
      "قدم العلاقات العامة #342 مع تنفيذ ميزة جديدة. في انتظار مراجعة التعليمات البرمجية من قادة الفريق.",
    icon: GitPullRequest,
    id: 2,
    title: "سحب طلب مقدم",
  },
  {
    date: "منذ 5 دقائق",
    description:
      "التعليقات الواردة على العلاقات العامة. التعديلات الطفيفة اللازمة في التعامل مع الأخطاء والوثائق.",
    icon: GitCompare,
    id: 3,
    title: "مقارنة الفروع",
  },
  {
    description: "دمج فرع الميزة في الفرع الرئيسي. جاهز للنشر.",
    icon: GitMerge,
    id: 4,
    title: "فرع مدمج",
  },
];

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          className="group-data-[orientation=vertical]/timeline:ms-10"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator className="flex size-6 items-center justify-center border-none bg-primary/10 group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground">
              <item.icon size={14} />
            </TimelineIndicator>
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
