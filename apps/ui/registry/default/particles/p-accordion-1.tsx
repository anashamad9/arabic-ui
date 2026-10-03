import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function Particle() {
  const items = [
    {
      content:
        "بيس هي مكتبة من مكونات رياكت عالية الجودة غير المصمم لأنظمة التصميم وتطبيقات الويب.",
      id: "1",
      title: "ما هي واجهة المستخدم الأساسية؟",
    },
    {
      content:
        'توجه إلى دليل "البداية السريعة" في المستندات. إذا كنت قد استخدمت مكتبات غير مصنفة من قبل، ستشعر وكأنك في منزلك.',
      id: "2",
      title: "كيف أبدأ؟",
    },
    {
      content: "بالطبع! قاعدة واجهة المستخدم مجانية ومفتوحة المصدر.",
      id: "3",
      title: "هل يمكنني استخدامه لمشروعي؟",
    },
  ];

  return (
    <Accordion className="w-full" defaultValue={["3"]}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionPanel>{item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
