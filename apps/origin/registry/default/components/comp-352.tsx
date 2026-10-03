import { ChevronDownIcon } from "lucide-react";
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
        title: "ماذا عن الأداء؟",
      },
      {
        content: "وثائقنا شاملة وتتضمن أمثلة حية لكل مكون.",
        title: "كيف هي الوثائق؟",
      },
    ],
    id: "1",
    title: "ما الذي يميّز COSS UI/Arabic؟",
  },
  {
    collapsibles: [
      {
        content:
          "نعم ، نظام السمات لدينا قابل للتخصيص بالكامل ويدعم كل من أوضاع الضوء والظلام.",
        title: "هل يمكنني استخدام سمات مخصصة؟",
      },
      {
        content: "لدينا دعم من الدرجة الأولى ل تيلويند مع فئات فائدة مخصصة.",
        title: "ماذا عن دعم تيلويند؟",
      },
    ],
    id: "2",
    title: "كيف أخصّص المكونات؟",
  },
  {
    collapsibles: [
      {
        content:
          "مكوناتنا قابلة للاهتزاز الأشجار وعادة ما تضيف الحد الأدنى من النفقات العامة إلى الحزمة الخاصة بك.",
        open: true,
        title: "ما هو تأثير حجم الحزمة؟",
      },
      {
        content:
          "نحن نؤيد تقسيم التعليمات البرمجية التلقائي لأداء التحميل الأمثل.",
        title: "كيف يتم التعامل مع تقسيم الكود؟",
      },
    ],
    id: "3",
    title: "هل المكونات محسّنة للأداء؟",
  },
  {
    collapsibles: [
      {
        content:
          "نقوم بالاختبار باستخدام إن في دي إيه و فويس أوفر و جوز لضمان توافق واسع النطاق.",
        title: "ما هي برامج قراءة الشاشة التي يتم دعمها؟",
      },
      {
        content:
          "يتم تنفيذ دعم التنقل الكامل للوحة المفاتيح باتباع أفضل ممارسات سهولة الوصول.",
        title: "ماذا عن الملاحة بلوحة المفاتيح؟",
      },
    ],
    id: "4",
    title: "هل تدعم المكونات سهولة الوصول؟",
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">متعدد المستويات</h2>
      <Accordion
        className="w-full -space-y-px"
        collapsible
        defaultValue="3"
        type="single"
      >
        {items.map((item) => (
          <AccordionItem
            className="relative border bg-background outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="rounded-md px-4 py-3 text-[15px] leading-6 outline-none hover:no-underline focus-visible:ring-0">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {item.collapsibles.map((collapsible, _index) => (
                <CollapsibleDemo
                  content={collapsible.content}
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
}: {
  title: string;
  content: string;
  open?: boolean;
}) {
  return (
    <Collapsible className="border-t bg-accent px-4 py-3" defaultOpen={open}>
      <CollapsibleTrigger className="flex gap-2 font-semibold text-[15px] leading-6 [&[data-state=open]>svg]:rotate-180">
        <ChevronDownIcon
          aria-hidden="true"
          className="mt-1 shrink-0 opacity-60 transition-transform duration-200"
          size={16}
        />
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 overflow-hidden ps-6 text-muted-foreground text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
