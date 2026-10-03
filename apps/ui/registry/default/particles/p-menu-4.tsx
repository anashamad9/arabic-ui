import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </MenuTrigger>
      <MenuPopup>
        <MenuRadioGroup defaultValue="system">
          <MenuRadioItem value="light">فاتح</MenuRadioItem>
          <MenuRadioItem value="dark">داكن</MenuRadioItem>
          <MenuRadioItem value="system">النظام</MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  );
}
