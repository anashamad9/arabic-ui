import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function Particle() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        الشروط والأحكام
      </DialogTrigger>
      <DialogPopup className="sm:max-w-md" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>الشروط والأحكام</DialogTitle>
        </DialogHeader>
        <DialogPanel>
          <div className="flex flex-col gap-4 [&_strong]:font-semibold [&_strong]:text-foreground">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p>
                  <strong>قبول الشروط</strong>
                </p>
                <p>
                  من خلال الوصول إلى هذا الموقع واستخدامه ، يوافق المستخدمون على
                  الامتثال والالتزام بشروط الخدمة هذه. يجب على المستخدمين الذين
                  لا يوافقون على هذه الشروط التوقف عن استخدام الموقع على الفور.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  <strong>مسؤوليات حساب المستخدم</strong>
                </p>
                <p>
                  المستخدمون مسؤولون عن الحفاظ على سرية بيانات اعتماد حسابهم. أي
                  أنشطة تحدث تحت حساب المستخدم هي مسؤولية صاحب الحساب وحده. يجب
                  على المستخدمين إخطار مسؤولي الموقع على الفور بأي وصول غير مصرح
                  به إلى الحساب.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  <strong>استخدام المحتوى والقيود</strong>
                </p>
                <p>
                  الموقع ومحتواه الأصلي محمية بموجب قوانين الملكية الفكرية. لا
                  يجوز للمستخدمين إعادة إنتاج أو توزيع أو تعديل أو إنشاء أعمال
                  مشتقة أو استغلال أي محتوى تجاريًا دون إذن كتابي صريح من مالكي
                  الموقع.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  <strong>تحديد المسؤولية</strong>
                </p>
                <p>
                  يوفر الموقع المحتوى &amp; ldquo; كما هو &amp; rdquo; دون أي
                  ضمانات. لن يكون مالكو الموقع مسؤولين عن الأضرار المباشرة أو
                  غير المباشرة أو العرضية أو التبعية أو العقابية الناشئة عن
                  تفاعلات المستخدم مع المنصة.
                </p>
              </div>
              <div className="flex flex-col gap-1">
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
              <div className="flex flex-col gap-1">
                <p>
                  <strong>التعديلات على الشروط</strong>
                </p>
                <p>
                  يحتفظ الموقع بالحق في تعديل هذه الشروط في أي وقت. استمرار
                  استخدام الموقع بعد التغييرات يشكل قبولا للشروط الجديدة.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  <strong>بند الإنهاء</strong>
                </p>
                <p>
                  يجوز للموقع إنهاء أو تعليق وصول المستخدم دون إشعار مسبق
                  لانتهاك هذه الشروط أو لأي سبب آخر تراه مناسبًا من قبل الإدارة.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  <strong>القانون الحاكم</strong>
                </p>
                <p>
                  تخضع هذه الشروط لقوانين الولاية القضائية التي يتم فيها تشغيل
                  الموقع في المقام الأول ، بغض النظر عن تعارض مبادئ القانون.
                </p>
              </div>
            </div>
          </div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>إلغاء</DialogClose>
          <Button type="button">أوافق</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
