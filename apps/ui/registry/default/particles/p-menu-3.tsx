import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem defaultChecked>حفظ تلقائي</MenuCheckboxItem>
        <MenuCheckboxItem>الإشعارات</MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  );
}
