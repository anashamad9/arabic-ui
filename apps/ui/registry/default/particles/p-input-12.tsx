import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Spinner } from "@/registry/default/ui/spinner";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput disabled placeholder="معالجة..." type="search" />
      <InputGroupAddon>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  );
}
