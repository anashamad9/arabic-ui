import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Menu>
      <MenuTrigger openOnHover render={<Button variant="outline" />}>
        تحوم حولي
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>البند 1</MenuItem>
        <MenuItem>البند الثاني</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
