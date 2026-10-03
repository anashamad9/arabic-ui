import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="اختر اسم مستخدم"
        placeholder="اختر اسم مستخدم"
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@coss.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
