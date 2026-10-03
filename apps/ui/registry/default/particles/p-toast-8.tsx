"use client";

import { useRef, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Spinner } from "@/registry/default/ui/spinner";
import { anchoredToastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  const submitRef = useRef<HTMLButtonElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastIdRef = useRef<string | null>(null);

  function handleSubmit() {
    if (!submitRef.current || isSubmitting) return;

    if (toastIdRef.current) {
      anchoredToastManager.close(toastIdRef.current);
      toastIdRef.current = null;
    }

    setIsSubmitting(true);

    new Promise<void>((_, reject) => {
      setTimeout(() => {
        setIsSubmitting(false);
        reject(new Error("الخادم لا يستجيب. يرجى المحاولة مرة أخرى لاحقًا."));
      }, 2000);
    }).catch((error: Error) => {
      toastIdRef.current = anchoredToastManager.add({
        description: error.message,
        positionerProps: {
          anchor: submitRef.current,
          sideOffset: 4,
        },
        title: "خطأ في إرسال النموذج",
        type: "error",
      });
    });
  }

  return (
    <Button
      disabled={isSubmitting}
      onClick={handleSubmit}
      ref={submitRef}
      variant="outline"
    >
      {isSubmitting ? (
        <>
          <Spinner />
          تقديم ...
        </>
      ) : (
        "إرسال"
      )}
    </Button>
  );
}
