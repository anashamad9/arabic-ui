"use client";

import {
  Field,
  FieldDescription,
  FieldItem,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export default function Particle() {
  return (
    <Field
      className="gap-2"
      name="plan"
      render={(props) => <Fieldset {...props} />}
    >
      <FieldsetLegend className="font-medium text-sm">اختر خطة</FieldsetLegend>
      <RadioGroup defaultValue="free">
        <FieldItem>
          <FieldLabel>
            <Radio value="free" /> مجانا
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Radio value="pro" /> برو
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Radio value="enterprise" /> المؤسسات
          </FieldLabel>
        </FieldItem>
      </RadioGroup>
      <FieldDescription>اختر الخطة التي تناسب احتياجاتك.</FieldDescription>
    </Field>
  );
}
