"use client";

import { toast } from "sonner";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button
      onClick={() => {
        toast("تم الانتهاء من طلبك!", {
          action: {
            label: "تراجع",
            onClick: () => console.log("تراجع"),
          },
          description: "لقد كانت رحلة طويلة ، لكننا فعلناها!",
        });
      }}
      variant="outline"
    >
      عرض السونر
    </Button>
  );
}
