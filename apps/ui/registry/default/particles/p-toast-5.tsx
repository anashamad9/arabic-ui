"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        toastManager.promise(
          new Promise<string>((resolve, reject) => {
            const shouldSucceed = Math.random() > 0.3;
            setTimeout(() => {
              if (shouldSucceed) {
                resolve("تحميل البيانات بنجاح");
              } else {
                reject(new Error("فشل في تحميل البيانات"));
              }
            }, 2000);
          }),
          {
            error: () => ({
              description: "يرجى المحاولة مرة أخرى.",
              title: "حدث خطأ ما",
            }),
            loading: {
              description: "الوعد هو التحميل.",
              title: "تحميل...",
            },
            success: (data: string) => ({
              description: `النجاح : ${data}`,
              title: "هذا إشعار نجاح!",
            }),
          },
        );
      }}
      variant="outline"
    >
      تشغيل الوعد
    </Button>
  );
}
