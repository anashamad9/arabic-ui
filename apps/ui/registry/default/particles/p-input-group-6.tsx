import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/registry/default/ui/input-group";
import {
  NumberField,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";

export default function Particle() {
  return (
    <InputGroup>
      <NumberField aria-label="أدخل المبلغ" defaultValue={10}>
        <NumberFieldInput className="text-start" />
      </NumberField>
      <InputGroupAddon>
        <InputGroupText>€</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>يورو</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
