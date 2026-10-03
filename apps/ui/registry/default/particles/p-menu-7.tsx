import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>البند 1</MenuItem>
        <MenuSub>
          <MenuSubTrigger>المزيد</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>البند الفرعي ألف</MenuItem>
            <MenuItem>البند الفرعي باء</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuItem>البند الثاني</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
