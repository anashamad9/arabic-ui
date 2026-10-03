import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TrashIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
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
        <MenuGroup>
          <MenuGroupLabel>تشغيل</MenuGroupLabel>
          <MenuItem>
            <PlayIcon aria-hidden="true" />
            تشغيل
            <MenuShortcut>⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem disabled>
            <PauseIcon aria-hidden="true" />
            الوقفة
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipBackIcon aria-hidden="true" />
            السابق
            <MenuShortcut>⌘[</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipForwardIcon aria-hidden="true" />
            التالي
            <MenuShortcut>⌘]</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>تشغيل عشوائي</MenuCheckboxItem>
        <MenuCheckboxItem>تكرار</MenuCheckboxItem>
        <MenuCheckboxItem disabled>الصوت المحسن</MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>ترتيب حسب</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem value="artist">فنان</MenuRadioItem>
            <MenuRadioItem value="album">الألبوم</MenuRadioItem>
            <MenuRadioItem value="title">العنوان</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem variant="switch">حفظ تلقائي</MenuCheckboxItem>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>إضافة إلى قائمة التشغيل</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>موسيقى الجاز</MenuItem>
            <MenuSub>
              <MenuSubTrigger>روك</MenuSubTrigger>
              <MenuSubPopup>
                <MenuItem>هارد روك</MenuItem>
                <MenuItem>صخرة ناعمة</MenuItem>
                <MenuItem>كلاسيك روك</MenuItem>
                <MenuSeparator />
                <MenuItem>المعادن المعدنية</MenuItem>
                <MenuItem>الشرير</MenuItem>
                <MenuItem>كلاسيكي</MenuItem>
                <MenuItem>البديل</MenuItem>
                <MenuItem>إيندي</MenuItem>
                <MenuItem>إلكتروني</MenuItem>
              </MenuSubPopup>
            </MenuSub>
            <MenuItem>بوب</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          حذف
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
