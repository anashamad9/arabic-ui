"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

const ERROR_TOAST_ID = "coss-demo-error-upsert";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        toastManager.add({
          description:
            "نقرات متكررة تحديث هذا الخبز المحمص ؛ الأخطاء تستخدم الرسوم المتحركة هزة.",
          id: ERROR_TOAST_ID,
          title: "حدث خطأ ما",
          type: "error",
        });
      }}
      variant="outline"
    >
      إشعار خطأ واحد
    </Button>
  );
}
