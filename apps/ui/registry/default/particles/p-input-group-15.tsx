import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="اشترك في نشرتنا الإخبارية"
        disabled
        placeholder="أفضل بريد إلكتروني"
        type="email"
      />
      <InputGroupAddon align="inline-end">
        <Button aria-label="اشتراك" disabled size="icon-xs" variant="ghost">
          <ArrowRightIcon className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
