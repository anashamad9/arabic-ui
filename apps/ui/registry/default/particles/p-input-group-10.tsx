import { Badge } from "@/registry/default/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="اكتب للبحث..." type="search" />
      <InputGroupAddon align="inline-end">
        <Badge variant="info">الشارة</Badge>
      </InputGroupAddon>
    </InputGroup>
  );
}
