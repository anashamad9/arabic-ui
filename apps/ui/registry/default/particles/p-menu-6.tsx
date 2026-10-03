import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>حساب حساب الحساب</MenuGroupLabel>
          <MenuItem>الملف الشخصي</MenuItem>
          <MenuItem>الفوترة</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>الدعم</MenuGroupLabel>
          <MenuItem>التوثيق</MenuItem>
          <MenuItem>اتصل بنا</MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
