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
        aria-label="تعيين عنوان رابط الخاص بك"
        className="*:[input]:ps-0!"
        placeholder="كوس"
        type="search"
      />
      <InputGroupAddon>
        <InputGroupText>i.كال/</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
