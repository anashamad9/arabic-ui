import {
  AtSignIcon,
  ChevronDownIcon,
  CircleDashedIcon,
  CommandIcon,
  EclipseIcon,
  GaugeIcon,
  type LucideIcon,
  ZapIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";

const items = [
  {
    collapsibles: [
      {
        content:
          "نقوم بتحسين كل مكون للحصول على أقصى قدر من الأداء والحد الأدنى من حجم الحزمة.",
        icon: GaugeIcon,
        title: "ماذا عن الأداء؟",
      },
      {
        content: "وثائقنا شاملة وتتضمن أمثلة حية لكل مكون.",
        icon: CircleDashedIcon,
        title: "كيف هي الوثائق؟",
      },
    ],
    icon: CommandIcon,
    id: "1",
    title: "ما الذي يميّز COSS UI/Arabic؟",
  },
  {
    collapsibles: [
      {
        content:
          "نعم ، نظام السمات لدينا قابل للتخصيص بالكامل ويدعم كل من أوضاع الضوء والظلام.",
        icon: GaugeIcon,
        title: "هل يمكنني استخدام سمات مخصصة؟",
      },
      {
        content: "لدينا دعم من الدرجة الأولى ل تيلويند مع فئات فائدة مخصصة.",
        icon: CircleDashedIcon,
        title: "ماذا عن دعم تيلويند؟",
      },
    ],
    icon: EclipseIcon,
    id: "2",
    title: "كيف أخصّص المكونات؟",
  },
  {
    collapsibles: [
      {
        content:
          "مكوناتنا قابلة للاهتزاز الأشجار وعادة ما تضيف الحد الأدنى من النفقات العامة إلى الحزمة الخاصة بك.",
        icon: GaugeIcon,
        open: true,
        title: "ما هو تأثير حجم الحزمة؟",
      },
      {
        content:
          "نحن نؤيد تقسيم التعليمات البرمجية التلقائي لأداء التحميل الأمثل.",
        icon: CircleDashedIcon,
        title: "كيف يتم التعامل مع تقسيم الكود؟",
      },
    ],
    icon: ZapIcon,
    id: "3",
    title: "هل المكونات محسّنة للأداء؟",
  },
  {
    collapsibles: [
      {
        content:
          "نقوم بالاختبار باستخدام إن في دي إيه و فويس أوفر و جوز لضمان توافق واسع النطاق.",
        icon: GaugeIcon,
        title: "ما هي برامج قراءة الشاشة التي يتم دعمها؟",
      },
      {
        content:
          "يتم تنفيذ دعم التنقل الكامل للوحة المفاتيح باتباع أفضل ممارسات سهولة الوصول.",
        icon: CircleDashedIcon,
        title: "ماذا عن الملاحة بلوحة المفاتيح؟",
      },
    ],
    icon: AtSignIcon,
    id: "4",
    title: "هل تدعم المكونات سهولة الوصول؟",
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">متعدد المستويات ث / رمز</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem
            className="outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="justify-start gap-3 rounded-md text-[15px] leading-6 outline-none hover:no-underline focus-visible:ring-0 [&>svg]:-order-1">
              <span className="flex items-center gap-3">
                <item.icon
                  aria-hidden="true"
                  className="shrink-0 opacity-60"
                  size={16}
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {item.collapsibles.map((collapsible, _index) => (
                <CollapsibleDemo
                  content={collapsible.content}
                  icon={collapsible.icon}
                  key={collapsible.title}
                  open={collapsible.open}
                  title={collapsible.title}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function CollapsibleDemo({
  title,
  content,
  open,
  icon: Icon,
}: {
  title: string;
  content: string;
  open?: boolean;
  icon: LucideIcon;
}) {
  return (
    <Collapsible className="border-t py-3 ps-6 pe-4" defaultOpen={open}>
      <CollapsibleTrigger className="flex gap-2 font-semibold text-[15px] leading-6 [&[data-state=open]>svg]:rotate-180">
        <ChevronDownIcon
          aria-hidden="true"
          className="mt-1 shrink-0 opacity-60 transition-transform duration-200"
          size={16}
        />
        <span className="flex items-center gap-3">
          <Icon aria-hidden="true" className="shrink-0 opacity-60" size={16} />
          <span>{title}</span>
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 overflow-hidden ps-6 text-muted-foreground text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
