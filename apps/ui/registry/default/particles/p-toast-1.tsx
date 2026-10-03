"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        toastManager.add({
          description: "الاثنين 3 يناير الساعة 6:00 مساءً",
          title: "تم إنشاء الحدث",
        });
      }}
      variant="outline"
    >
      إشعار افتراضي
    </Button>
  );
}
