import {
  AtSignIcon,
  CommandIcon,
  EclipseIcon,
  PlusIcon,
  ZapIcon,
} from "lucide-react";
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
    icon: CommandIcon,
    id: "1",
    title: "ما الذي يميّز COSS UI/Arabic؟",
  },
  {
    content:
      "يمكنك تخصيص التنسيق العام بالمتغيرات، أو تعديل خصائص التنسيق لكل مكوّن. تدعم المكتبة الوحدات المنفصلة والمظهر الداكن.",
    icon: EclipseIcon,
    id: "2",
    title: "كيف أخصّص المكونات؟",
  },
  {
    content:
      "نعم، تدعم المكونات تقسيم الكود واستبعاد الأجزاء غير المستخدمة لتقليل حجم التطبيق.",
    icon: ZapIcon,
    id: "3",
    title: "هل المكونات محسّنة للأداء؟",
  },
  {
    content:
      "تراعي المكونات معايير سهولة الوصول، وتدعم التنقل بلوحة المفاتيح وقرّاء الشاشة.",
    icon: AtSignIcon,
    id: "4",
    title: "هل تدعم المكونات سهولة الوصول؟",
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">W / رمز و زائد ناقص</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-start font-semibold text-[15px] text-sm leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-3">
                  <item.icon
                    aria-hidden="true"
                    className="shrink-0 opacity-60"
                    size={16}
                  />
                  <span>{item.title}</span>
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="ps-7 pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
