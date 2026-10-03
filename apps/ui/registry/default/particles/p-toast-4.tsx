"use client";

import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  return (
    <Button
      onClick={() => {
        const id = toastManager.add({
          actionProps: {
            children: "تراجع",
            onClick: () => {
              toastManager.close(id);
              toastManager.add({
                description: "وقد أعيد العمل.",
                title: "العمل غير المنجز",
                type: "info",
              });
            },
          },
          description: "يمكنك التراجع عن هذا الإجراء.",
          timeout: 1000000,
          title: "الإجراء المنفذ",
          type: "success",
        });
      }}
      variant="outline"
    >
      أداء العمل
    </Button>
  );
}
