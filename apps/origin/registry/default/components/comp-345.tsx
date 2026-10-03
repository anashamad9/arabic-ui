import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/default/ui/accordion";

const items = [
  {
    content:
      "تركّز المكتبة على تجربة المطوّر والأداء، وتوفّر تحققًا من الأنواع ودعمًا لسهولة الوصول وتوثيقًا شاملًا.",
    id: "1",
    title: "ما الذي يميّز COSS UI/Arabic؟",
  },
  {
    content:
      "يمكنك تخصيص التنسيق العام بالمتغيرات، أو تعديل خصائص التنسيق لكل مكوّن. تدعم المكتبة الوحدات المنفصلة والمظهر الداكن.",
    id: "2",
    title: "كيف أخصّص المكونات؟",
  },
  {
    content:
      "نعم، تدعم المكونات تقسيم الكود واستبعاد الأجزاء غير المستخدمة لتقليل حجم التطبيق.",
    id: "3",
    title: "هل المكونات محسّنة للأداء؟",
  },
  {
    content:
      "تراعي المكونات معايير سهولة الوصول، وتدعم التنقل بلوحة المفاتيح وقرّاء الشاشة.",
    id: "4",
    title: "هل تدعم المكونات سهولة الوصول؟",
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">علامات التبويب ث / زائد ناقص</h2>
      <Accordion
        className="w-full space-y-2"
        collapsible
        defaultValue="3"
        type="single"
      >
        {items.map((item) => (
          <AccordionItem
            className="rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
            key={item.id}
            value={item.id}
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-start font-semibold text-[15px] leading-6 outline-none ocus-visible:ring-0 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
