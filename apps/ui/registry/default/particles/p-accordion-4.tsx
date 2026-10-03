"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Button } from "@/registry/default/ui/button";

export default function Particle() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="flex w-full flex-col gap-4">
      <Accordion className="w-full" onValueChange={setValue} value={value}>
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

      <div className="flex flex-col items-start gap-4">
        <Button
          onClick={() => setValue(["item-1", "item-2"])}
          variant="outline"
        >
          فتح الأول اثنين
        </Button>
        <p className="text-muted-foreground text-sm">
          فتح البنود: {value.length > 0 ? value.join(", ") : "لا شيء"}
        </p>
      </div>
    </div>
  );
}
