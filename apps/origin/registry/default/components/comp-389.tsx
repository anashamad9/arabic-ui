"use client";

import {
  ClubIcon,
  DiamondIcon,
  HeartIcon,
  type LucideIcon,
  SpadeIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

interface TourStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    description:
      "هذه هي مساحة العمل الجديدة. ستجد هنا جميع مشاريعك وأنشطتك الأخيرة وإعداداتك والمزيد.",
    icon: HeartIcon,
    title: "القلب",
  },
  {
    description:
      "استخدم شريط الأدوات أعلاه لإنشاء مشاريع جديدة أو دعوة أعضاء الفريق أو إعدادات الوصول.",
    icon: DiamondIcon,
    title: "الماس",
  },
  {
    description:
      "انقر فوق رمز الدعم في الزاوية اليمنى العليا للوصول إلى مركز المساعدة والوثائق الخاصة بنا.",
    icon: ClubIcon,
    title: "نادي نادي كلوب",
  },
  {
    description:
      "اضغط على ⌘K لفتح لوحة الأوامر. استخدم مفاتيح الأسهم للتنقل وإدخال لتحديد إجراء.",
    icon: SpadeIcon,
    title: "سبايدر",
  },
];

interface CardProps {
  number: number;
  isActive: boolean;
}

function Card({ number, isActive }: CardProps) {
  const content = (
    <div className="flex size-10 items-center justify-center rounded-md bg-secondary font-medium text-muted-foreground text-sm">
      {number + 1}
    </div>
  );

  return isActive ? <PopoverAnchor>{content}</PopoverAnchor> : content;
}

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNavigation = () => {
    if (currentTip === tourSteps.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover
        onOpenChange={(open) => {
          if (open) setCurrentTip(0);
        }}
      >
        <div className="grid grid-cols-2 place-items-center gap-4">
          {tourSteps.map((step, index) => (
            <Card
              isActive={currentTip === index}
              key={step.title}
              number={index}
            />
          ))}
        </div>

        <PopoverTrigger asChild>
          <Button variant="outline">بدء جولة</Button>
        </PopoverTrigger>

        <PopoverContent
          className="max-w-[280px] py-3 shadow-none"
          showArrow={true}
          side={currentTip % 2 === 0 ? "left" : "right"}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="font-medium text-[13px]">
                {tourSteps[currentTip].title}
              </p>
              <p className="text-muted-foreground text-xs">
                {tourSteps[currentTip].description}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground text-xs">
                {currentTip + 1}/{tourSteps.length}
              </span>
              <button
                className="font-medium text-xs hover:underline"
                onClick={handleNavigation}
                type="button"
              >
                {currentTip === tourSteps.length - 1
                  ? "ابدأ من جديد"
                  : "التالي"}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
