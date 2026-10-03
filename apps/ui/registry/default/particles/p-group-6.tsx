import {
  ArchiveIcon,
  EditIcon,
  EllipsisIcon,
  FilesIcon,
  FilmIcon,
  ShareIcon,
  TrashIcon,
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
    <Group aria-label="إجراءات الملف">
      <Button>
        <FilesIcon aria-hidden="true" />
        ملفات
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Button>
        <FilmIcon aria-hidden="true" />
        الوسائط
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Menu>
        <MenuTrigger render={<Button aria-label="القائمة" size="icon" />}>
          <EllipsisIcon aria-hidden="true" className="size-4" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuItem>
            <EditIcon aria-hidden="true" />
            تعديل
          </MenuItem>
          <MenuItem>
            <ArchiveIcon aria-hidden="true" />
            أرشفة
          </MenuItem>
          <MenuItem>
            <ShareIcon aria-hidden="true" />
            مشاركة
          </MenuItem>
          <MenuItem variant="destructive">
            <TrashIcon aria-hidden="true" />
            حذف
          </MenuItem>
        </MenuPopup>
      </Menu>
    </Group>
  );
}
