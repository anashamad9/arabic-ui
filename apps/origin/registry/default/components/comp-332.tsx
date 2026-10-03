"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function Component() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      description:
        "اكتشف مجموعة قوية من المكونات المصممة لتعزيز سير عمل التطوير الخاص بك.",
      title: "مرحبا بكم في COSS UI/Arabic",
    },
    {
      description:
        "كل مكون قابل للتخصيص بالكامل وبنيت مع معايير الويب الحديثة في الاعتبار.",
      title: "مكونات قابلة للتخصيص",
    },
    {
      description:
        "ابدأ ببناء واجهات مذهلة مع مكتبة المكونات الشاملة الخاصة بنا.",
      title: "هل أنت مستعد للبدء؟",
    },
    {
      description:
        "يمكنك الوصول إلى وثائقنا ومواردنا المجتمعية الشاملة لتحقيق أقصى استفادة من COSS UI/Arabic.",
      title: "الحصول على الدعم",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">تهيئة الحساب</Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
        <div className="p-2">
          <img
            alt="حوار حوار حواري"
            className="w-full rounded-md"
            height={216}
            src="/origin/dialog-content.png"
            width={382}
          />
        </div>
        <div className="space-y-6 px-6 pt-3 pb-6">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription>
              {stepContent[step - 1].description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  className={cn(
                    "size-1.5 rounded-full bg-primary",
                    index + 1 === step ? "bg-primary" : "opacity-20",
                  )}
                  key={String(index)}
                />
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  Skip تخطي
                </Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button
                  className="group"
                  onClick={handleContinue}
                  type="button"
                >
                  التالي
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
                    size={16}
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button">حسنًا</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
