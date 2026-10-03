import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/default/ui/accordion";

const items = [
  {
    content:
      "قم بتوصيل حساباتك من غوغل أو غيت هب أو مايكروسوفت لتمكين تسجيل الدخول مرة واحدة وتبسيط سير عملك. يمكن استخدام الحسابات المتصلة لتسجيل الدخول السريع واستيراد تفضيلاتك عبر الأنظمة الأساسية. يمكنك إلغاء الوصول إلى أي حساب متصل في أي وقت.",
    id: "1",
    sub: "إدارة حساباتك الاجتماعية والعملية المرتبطة",
    title: "الحسابات المتصلة",
  },
  {
    content:
      "اختر التحديثات التي تريد تلقيها. يمكنك الحصول على إشعارات لما يلي: تنبيهات الأمان وتحديثات الفواتير والرسائل الإخبارية وإعلانات المنتجات وتقارير الاستخدام والصيانة المجدولة. يمكن تسليم الإشعارات عبر البريد الإلكتروني أو الرسائل القصيرة أو الإشعارات الفورية على أجهزتك.",
    id: "2",
    sub: "تخصيص تفضيلات الإشعارات",
    title: "الإشعارات",
  },
  {
    content:
      "قم بحماية حسابك من خلال المصادقة الثنائية. يمكنك استخدام تطبيقات المصادقة مثل غوغل المصادقة أو أوثي أو تلقي رموز رسائل قصيرة أو استخدام مفاتيح الأمان مثل يوبي كي. نوصي باستخدام تطبيق المصادقة للحصول على تجربة أكثر أمانًا.",
    id: "3",
    sub: "أضف طبقة أمان إضافية إلى حسابك",
    title: "التحقق بخطوتين",
  },
  {
    content:
      "فريق الدعم متاح على مدار الساعة للإجابة عن استفسارات الفوترة والمشكلات التقنية والأسئلة العامة. يمكنك التواصل عبر المحادثة أو البريد الإلكتروني، أو حجز مكالمة مع الفريق.",
    id: "4",
    sub: "نحن هنا للمساعدة 24/7",
    title: "دعم الاتصال",
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">W/رأس فرعي وشيفرون</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-start font-semibold text-[15px] leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&[data-state=open]>svg]:rotate-180">
                <span className="flex flex-col space-y-1">
                  <span>{item.title}</span>
                  {item.sub && (
                    <span className="font-normal text-sm">{item.sub}</span>
                  )}
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
