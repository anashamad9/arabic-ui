import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="بحث"
        placeholder="بحث"
        size="lg"
        type="search"
      />
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  );
}
