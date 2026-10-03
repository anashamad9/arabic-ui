import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>اشتراك</FieldLabel>
      <InputGroup>
        <InputGroupInput placeholder="أفضل بريد إلكتروني" type="email" />
        <InputGroupAddon align="inline-end">
          <Button aria-label="اشتراك" size="icon-xs" variant="ghost">
            <ArrowRightIcon className="rtl:rotate-180" aria-hidden="true" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>يرجى إدخال عنوان بريد إلكتروني صحيح.</FieldError>
    </Field>
  );
}
