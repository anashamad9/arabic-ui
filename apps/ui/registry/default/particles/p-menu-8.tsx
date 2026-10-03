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
      <MenuTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </MenuTrigger>
      <MenuPopup>
        <MenuItem closeOnClick>الملف الشخصي</MenuItem>
        <MenuItem closeOnClick>الإعدادات</MenuItem>
        <MenuItem closeOnClick>تسجيل الخروج</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
