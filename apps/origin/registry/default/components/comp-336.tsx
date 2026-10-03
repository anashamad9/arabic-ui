import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
      <h2 className="font-bold text-xl">مع سهم جانبي</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionTrigger className="justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="ps-7 pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
