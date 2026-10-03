"use client";

import { Label } from "react-aria-components";
import { DateInput, TimeField } from "@/registry/default/ui/datefield-rac";

export default function Component() {
  return (
    <TimeField className="*:not-first:mt-2">
      <Label className="font-medium text-foreground text-sm">إدخال الوقت</Label>
      <DateInput />
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        مبني باستخدام{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateField.html"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          مكونات الوصول
        </a>
      </p>
    </TimeField>
  );
}
