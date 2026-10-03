"use client";

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@coss/ui/components/collapsible";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Input } from "@coss/ui/components/input";
import { Switch } from "@coss/ui/components/switch";
import { useState } from "react";

export function CustomBrandColorsSection() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Collapsible onOpenChange={setEnabled} open={enabled}>
      <Field>
        <FieldLabel>
          <CollapsibleTrigger
            nativeButton={false}
            render={<Switch checked={enabled} onCheckedChange={setEnabled} />}
          />
          تمكين ألوان العلامة التجارية المخصصة
        </FieldLabel>
      </Field>
      <CollapsiblePanel>
        <div className="mt-4 flex flex-col items-start gap-4">
          <Field>
            <FieldLabel>لون العلامة التجارية (موضوع الضوء)</FieldLabel>
            <Input placeholder="#000000" type="text" />
          </Field>
          <Field>
            <FieldLabel>لون العلامة التجارية (موضوع مظلم)</FieldLabel>
            <Input placeholder="#000000" type="text" />
          </Field>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}
