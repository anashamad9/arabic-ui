"use client";

import { useToast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import { ToastAction } from "@/registry/default/ui/toast";

export default function Component() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          action: <ToastAction altText="Try again">حاول مرة أخرى</ToastAction>,
          description: "كانت هناك مشكلة في طلبك.",
          title: "لم نتمكن من إكمال طلبك!",
        });
      }}
      variant="outline"
    >
      عرض نخب
    </Button>
  );
}
