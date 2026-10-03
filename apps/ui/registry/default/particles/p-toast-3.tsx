"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        toastManager.add({
          description: "يرجى الانتظار حتى نقوم بمعالجة طلبك.",
          title: "تحميل...",
          type: "loading",
        });
      }}
      variant="outline"
    >
      تحميل إشعار
    </Button>
  );
}
