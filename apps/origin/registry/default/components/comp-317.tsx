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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">قابل للتمرير (رأس لزجة)</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-start">
          <DialogTitle className="border-b px-6 py-4 text-base">
            الأسئلة الشائعة (الأسئلة الشائعة)
          </DialogTitle>
          <div className="overflow-y-auto">
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-1">
                    <p>
                      <strong>إدارة الحسابات</strong>
                    </p>
                    <p>
                      انتقل إلى صفحة التسجيل ، وقدم المعلومات المطلوبة ، وتحقق
                      من عنوان بريدك الإلكتروني. يمكنك التسجيل باستخدام بريدك
                      الإلكتروني أو من خلال منصات التواصل الاجتماعي.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>عملية إعادة تعيين كلمة المرور</strong>
                    </p>
                    <p>
                      يمكن للمستخدمين إعادة تعيين كلمة المرور الخاصة بهم من خلال
                      صفحة إعدادات الحساب. انقر فوق " نسيت كلمة المرور" واتبع
                      خطوات التحقق من البريد الإلكتروني لاستعادة الوصول إلى
                      الحساب بسرعة وأمان.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>مستويات تسعير الخدمة</strong>
                    </p>
                    <p>
                      نحن نقدم ثلاثة مستويات اشتراك أساسية مصممة لتلبية احتياجات
                      المستخدمين المتنوعة: الأساسية (مجانا مع ميزات محدودة)،
                      المهنية (رسوم شهرية مع وصول شامل)، والمشاريع (تسعير مخصص
                      مع قدرات منصة كاملة).
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>قنوات الدعم الفني</strong>
                    </p>
                    <p>
                      يمكن الوصول إلى دعم العملاء من خلال طرق اتصال متعددة بما
                      في ذلك دعم البريد الإلكتروني ، والدردشة المباشرة خلال
                      ساعات العمل ، ونظام تذاكر الدعم المتكامل ، والدعم عبر
                      الهاتف خصيصًا للعملاء على مستوى المؤسسة.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>استراتيجيات حماية البيانات</strong>
                    </p>
                    <p>
                      تطبق منصتنا إجراءات أمنية صارمة بما في ذلك تشفير الاتصال
                      الآمن 256 بت ، وتدقيقات أمنية شاملة منتظمة ، وضوابط صارمة
                      للوصول إلى البيانات ، والامتثال للمعايير الدولية لحماية
                      الخصوصية.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>توافق المنصة</strong>
                    </p>
                    <p>
                      تدعم الخدمة بيئات متعددة للأجهزة ونظام التشغيل ، بما في
                      ذلك متصفحات الويب مثل كروم و فايرفوكس ، وتطبيقات الأجهزة
                      المحمولة لنظامي التشغيل آي أو إس و أندرويد ، وتطبيقات سطح
                      المكتب المتوافقة مع ويندوز و ماك.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>إدارة الاشتراكات</strong>
                    </p>
                    <p>
                      يمكن إلغاء الاشتراكات في أي وقت من خلال إعدادات الحساب ،
                      مع إمكانية استرداد المبالغ المتناسبة في غضون 30 يومًا من
                      الدفع. يتم توفير خيارات الفوترة الشهرية والسنوية ، مع
                      تقديم خصومات خاصة للالتزامات السنوية.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>خيارات طريقة الدفع</strong>
                    </p>
                    <p>
                      نحن نقبل مجموعة واسعة من طرق الدفع بما في ذلك بطاقات
                      الائتمان الرئيسية مثل فيزا و ماستركارد و أمريكان إكسبريس
                      ومنصات الدفع الرقمية مثل باي بال والتحويلات المصرفية
                      المباشرة. قد تتوفر أيضًا خيارات الدفع الإقليمية اعتمادًا على
                      موقع المستخدم.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>دعم العملاء</strong>
                    </p>
                    <p>
                      يتوفر فريق دعم العملاء المخصص لدينا على مدار الساعة طوال
                      أيام الأسبوع ، مما يوفر مساعدة سريعة وفعالة لمعالجة أي
                      استفسارات أو مشكلات قد تواجهها.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>سياسة الخصوصية</strong>
                    </p>
                    <p>
                      تحدد سياسة الخصوصية الخاصة بنا كيفية جمع بياناتك الشخصية
                      واستخدامها وحمايتها ، مما يضمن حماية خصوصيتك في جميع
                      الأوقات.
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <DialogClose asChild>
                <Button type="button">حسنًا</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
