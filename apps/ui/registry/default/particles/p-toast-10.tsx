"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

const DEDUP_ID = "coss-demo-dedup-toast";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        toastManager.add({
          description:
            "تقوم النقرات المتكررة بتحديث هذا الخبز المحمص بدلاً من تكديس آخر.",
          id: DEDUP_ID,
          title: "المحفوظة",
          type: "success",
        });
      }}
      variant="outline"
    >
      إشعار نجاح واحد
    </Button>
  );
}
