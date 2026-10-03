import {
  ChevronDownIcon,
  DownloadIcon,
  EditIcon,
  ShareIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Group aria-label="إجراءات الاشتراك">
      <Button>اشتراك</Button>
      <GroupSeparator className="bg-primary/72" />
      <Menu>
        <MenuTrigger render={<Button aria-label="نسخ خيارات" size="icon" />}>
          <ChevronDownIcon aria-hidden="true" className="size-4" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuItem>
            <ShareIcon aria-hidden="true" />
            رابط المشاركة
          </MenuItem>
          <MenuItem>
            <DownloadIcon aria-hidden="true" />
            تنزيل
          </MenuItem>
          <MenuItem>
            <EditIcon aria-hidden="true" />
            إنشاء نسخة
          </MenuItem>
        </MenuPopup>
      </Menu>
    </Group>
  );
}
