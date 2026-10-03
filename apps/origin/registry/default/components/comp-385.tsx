"use client";

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
];

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNavigation = () => {
    if (currentTip === tips.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">تلميح الأدوات مع الخطوات</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="font-medium text-[13px]">{tips[currentTip].title}</p>
            <p className="text-muted-foreground text-xs">
              {tips[currentTip].description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-muted-foreground text-xs">
              {currentTip + 1}/{tips.length}
            </span>
            <button
              className="font-medium text-xs hover:underline"
              onClick={handleNavigation}
              type="button"
            >
              {currentTip === tips.length - 1 ? "ابدأ من جديد" : "التالي"}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
