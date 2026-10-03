"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>الحيوية</FieldLabel>
      <Textarea placeholder="أخبرنا عن نفسك..." />
      <FieldDescription>
        اكتب سيرة ذاتية قصيرة بحد أقصى 500 حرف.
      </FieldDescription>
    </Field>
  );
}
