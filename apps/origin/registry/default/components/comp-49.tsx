"use client";

import { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  const { getCVCProps } = usePaymentInputs();

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={`cvc-${id}`}>الكود</Label>
      <Input
        {...getCVCProps()}
        className="[direction:inherit]"
        id={`cvc-${id}`}
      />
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        مبني باستخدام{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/medipass/react-payment-inputs"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          مدخلات الدفع رياكت
        </a>
      </p>
    </div>
  );
}
