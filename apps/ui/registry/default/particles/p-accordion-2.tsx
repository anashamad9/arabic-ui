import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function Particle() {
  return (
    <Accordion className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>ما هي واجهة المستخدم الأساسية؟</AccordionTrigger>
        <AccordionPanel>
          بيس هي مكتبة من مكونات رياكت عالية الجودة غير المصمم لأنظمة التصميم
          وتطبيقات الويب.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>كيف أبدأ؟</AccordionTrigger>
        <AccordionPanel>
          توجه إلى دليل "البداية السريعة" في المستندات. إذا كنت قد استخدمت
          مكتبات غير مصنفة من قبل، ستشعر وكأنك في منزلك.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>هل يمكنني استخدامه لمشروعي؟</AccordionTrigger>
        <AccordionPanel>
          بالطبع! قاعدة واجهة المستخدم مجانية ومفتوحة المصدر.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
