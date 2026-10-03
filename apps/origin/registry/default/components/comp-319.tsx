"use client";

import { useRef, useState } from "react";
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
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">الشروط والأحكام</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-start">
          <DialogTitle className="border-b px-6 py-4 text-base">
            الشروط والأحكام
          </DialogTitle>
          <div
            className="overflow-y-auto"
            onScroll={handleScroll}
            ref={contentRef}
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        <strong>قبول الشروط</strong>
                      </p>
                      <p>
                        من خلال الوصول إلى هذا الموقع واستخدامه ، يوافق
                        المستخدمون على الامتثال والالتزام بشروط الخدمة هذه. يجب
                        على المستخدمين الذين لا يوافقون على هذه الشروط التوقف عن
                        استخدام الموقع على الفور.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>مسؤوليات حساب المستخدم</strong>
                      </p>
                      <p>
                        المستخدمون مسؤولون عن الحفاظ على سرية بيانات اعتماد
                        حسابهم. أي أنشطة تحدث تحت حساب المستخدم هي مسؤولية صاحب
                        الحساب وحده. يجب على المستخدمين إخطار مسؤولي الموقع على
                        الفور بأي وصول غير مصرح به إلى الحساب.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>استخدام المحتوى والقيود</strong>
                      </p>
                      <p>
                        الموقع ومحتواه الأصلي محمية بموجب قوانين الملكية
                        الفكرية. لا يجوز للمستخدمين إعادة إنتاج أو توزيع أو
                        تعديل أو إنشاء أعمال مشتقة أو استغلال أي محتوى تجاريًا
                        دون إذن كتابي صريح من مالكي الموقع.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>تحديد المسؤولية</strong>
                      </p>
                      <p>
                        يوفر الموقع المحتوى “كما هو “ دون أي ضمانات. لن يكون
                        مالكو الموقع مسؤولين عن الأضرار المباشرة أو غير المباشرة
                        أو العرضية أو التبعية أو العقابية الناشئة عن تفاعلات
                        المستخدم مع المنصة.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>إرشادات سلوك المستخدم</strong>
                      </p>
                      <ul className="list-disc ps-6">
                        <li>عدم تحميل محتوى ضار أو ضار</li>
                        <li>احترام حقوق المستخدمين الآخرين</li>
                        <li>تجنب الأنشطة التي يمكن أن تعطل وظائف موقع الويب</li>
                        <li>الامتثال للقوانين المحلية والدولية المعمول بها</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>التعديلات على الشروط</strong>
                      </p>
                      <p>
                        يحتفظ الموقع بالحق في تعديل هذه الشروط في أي وقت.
                        استمرار استخدام الموقع بعد التغييرات يشكل قبولا للشروط
                        الجديدة.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>بند الإنهاء</strong>
                      </p>
                      <p>
                        يجوز للموقع إنهاء أو تعليق وصول المستخدم دون إشعار مسبق
                        لانتهاك هذه الشروط أو لأي سبب آخر تراه مناسبًا من قبل
                        الإدارة.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>القانون الحاكم</strong>
                      </p>
                      <p>
                        تخضع هذه الشروط لقوانين الولاية القضائية التي يتم فيها
                        تشغيل الموقع في المقام الأول ، بغض النظر عن تعارض مبادئ
                        القانون.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="grow text-muted-foreground text-xs max-sm:text-center">
              اقرأ جميع الشروط قبل قبولها.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              إلغاء
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={!hasReadToBottom} type="button">
              أوافق
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
