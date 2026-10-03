"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

const tips = [
  {
    description:
      "هذه هي مساحة العمل الجديدة. ستجد هنا جميع مشاريعك وأنشطتك الأخيرة وإعداداتك والمزيد.",
    title: "مرحبًا بك في لوحة التحكم",
  },
  {
    description:
      "استخدم شريط الأدوات أعلاه لإنشاء مشاريع جديدة أو دعوة أعضاء الفريق أو إعدادات الوصول.",
    title: "إجراءات سريعة",
  },
  {
    description:
      "انقر فوق رمز الدعم في الزاوية اليمنى العليا للوصول إلى مركز المساعدة والوثائق الخاصة بنا.",
    title: "هل تحتاج إلى مساعدة؟",
  },
  {
    description:
      "اضغط على ⌘K لفتح لوحة الأوامر. استخدم مفاتيح الأسهم للتنقل وإدخال لتحديد إجراء.",
    title: "اختصارات لوحة المفاتيح",
  },
  {
    description:
      "تمكين الإشعارات لتلقي تحديثات حول مشاريعك ونشاط فريقك والمواعيد النهائية المهمة.",
    title: "تحديث البقاء",
  },
];

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNext = () => {
    if (currentTip < tips.length - 1) {
      setCurrentTip(currentTip + 1);
    }
  };

  const handlePrev = () => {
    if (currentTip > 0) {
      setCurrentTip(currentTip - 1);
    }
  };

  const isFirstTip = currentTip === 0;
  const isLastTip = currentTip === tips.length - 1;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">أداة مثل مع nav</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="font-medium text-[13px]">{tips[currentTip].title}</p>
            <p className="text-muted-foreground text-xs">
              {tips[currentTip].description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs">
              {currentTip + 1}/{tips.length}
            </span>
            <div className="flex gap-0.5">
              <Button
                aria-label="النصيحة السابقة"
                className="size-6"
                disabled={isFirstTip}
                onClick={handlePrev}
                size="icon"
                variant="ghost"
              >
                <ArrowLeftIcon
                  className="rtl:rotate-180"
                  aria-hidden="true"
                  size={14}
                />
              </Button>
              <Button
                aria-label="النصيحة التالية"
                className="size-6"
                disabled={isLastTip}
                onClick={handleNext}
                size="icon"
                variant="ghost"
              >
                <ArrowRightIcon
                  className="rtl:rotate-180"
                  aria-hidden="true"
                  size={14}
                />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
