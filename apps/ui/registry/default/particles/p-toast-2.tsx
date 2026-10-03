"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          toastManager.add({
            description: "تم حفظ التغييرات الخاصة بك.",
            title: "النجاح!",
            type: "success",
          });
        }}
        variant="outline"
      >
        إشعار النجاح
      </Button>
      <Button
        onClick={() => {
          toastManager.add({
            description: "كانت هناك مشكلة في طلبك.",
            title: "حدث خطأ ما",
            type: "error",
          });
        }}
        variant="outline"
      >
        خطأ إشعار
      </Button>
      <Button
        onClick={() => {
          toastManager.add({
            description:
              "يمكنك إضافة مكونات إلى التطبيق الخاص بك باستخدام سطر الأوامر.",
            title: "تنبيه!",
            type: "info",
          });
        }}
        variant="outline"
      >
        معلومات إشعار
      </Button>
      <Button
        onClick={() => {
          toastManager.add({
            description: "جلستك على وشك الانتهاء.",
            title: "تحذير!",
            type: "warning",
          });
        }}
        variant="outline"
      >
        تحذير إشعار
      </Button>
    </div>
  );
}
