"use client";

import {
  CopyIcon,
  EllipsisIcon,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react";
import { useMediaQuery } from "@/registry/default/hooks/use-media-query";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerPanel,
  DrawerPopup,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";
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
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/ui/menu";

const TRIGGER_ARIA_LABEL = "فتح القائمة";

export default function Particle() {
  const isMobile = useMediaQuery("max-md");

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger
          render={
            <Button
              aria-label={TRIGGER_ARIA_LABEL}
              size="icon"
              variant="outline"
            />
          }
        >
          <EllipsisIcon aria-hidden />
        </DrawerTrigger>
        <DrawerPopup showBar>
          <DrawerPanel>
            <DrawerMenu>
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>الإجراءات</DrawerMenuGroupLabel>
                <DrawerClose render={<DrawerMenuItem />}>
                  <PencilIcon aria-hidden />
                  تعديل
                </DrawerClose>
                <DrawerClose render={<DrawerMenuItem />}>
                  <CopyIcon aria-hidden />
                  إنشاء نسخة
                </DrawerClose>
                <DrawerClose render={<DrawerMenuItem />}>
                  <ShareIcon aria-hidden />
                  مشاركة
                </DrawerClose>
              </DrawerMenuGroup>
              <DrawerMenuSeparator />
              <DrawerMenuCheckboxItem>تشغيل عشوائي</DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem>تكرار</DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem disabled>
                الصوت المحسن
              </DrawerMenuCheckboxItem>
              <DrawerMenuSeparator />
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>ترتيب حسب</DrawerMenuGroupLabel>
                <DrawerMenuRadioGroup defaultValue="artist">
                  <DrawerMenuRadioItem value="artist">فنان</DrawerMenuRadioItem>
                  <DrawerMenuRadioItem value="album">
                    الألبوم
                  </DrawerMenuRadioItem>
                  <DrawerMenuRadioItem value="title">
                    العنوان
                  </DrawerMenuRadioItem>
                </DrawerMenuRadioGroup>
              </DrawerMenuGroup>
              <DrawerMenuSeparator />
              <DrawerMenuCheckboxItem variant="switch">
                حفظ تلقائي
              </DrawerMenuCheckboxItem>
              <DrawerMenuSeparator />
              <Drawer>
                <DrawerMenuTrigger>إضافة إلى قائمة التشغيل</DrawerMenuTrigger>
                <DrawerPopup showBar>
                  <DrawerPanel>
                    <DrawerMenu>
                      <DrawerMenuGroup>
                        <DrawerMenuGroupLabel>
                          إضافة إلى قائمة التشغيل
                        </DrawerMenuGroupLabel>
                      </DrawerMenuGroup>
                      <DrawerClose render={<DrawerMenuItem />}>
                        موسيقى الجاز
                      </DrawerClose>
                      <Drawer>
                        <DrawerMenuTrigger>روك</DrawerMenuTrigger>
                        <DrawerPopup showBar>
                          <DrawerPanel>
                            <DrawerMenu>
                              <DrawerMenuGroup>
                                <DrawerMenuGroupLabel>روك</DrawerMenuGroupLabel>
                              </DrawerMenuGroup>
                              <DrawerClose render={<DrawerMenuItem />}>
                                هارد روك
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                صخرة ناعمة
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                كلاسيك روك
                              </DrawerClose>
                              <DrawerMenuSeparator />
                              <DrawerClose render={<DrawerMenuItem />}>
                                المعادن المعدنية
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                الشرير
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                كلاسيكي
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                البديل
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                إيندي
                              </DrawerClose>
                              <DrawerClose render={<DrawerMenuItem />}>
                                إلكتروني
                              </DrawerClose>
                            </DrawerMenu>
                          </DrawerPanel>
                        </DrawerPopup>
                      </Drawer>
                      <DrawerClose render={<DrawerMenuItem />}>بوب</DrawerClose>
                    </DrawerMenu>
                  </DrawerPanel>
                </DrawerPopup>
              </Drawer>
              <DrawerMenuSeparator />
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>منطقة خطر</DrawerMenuGroupLabel>
                <DrawerClose render={<DrawerMenuItem variant="destructive" />}>
                  <TrashIcon aria-hidden />
                  حذف
                </DrawerClose>
              </DrawerMenuGroup>
            </DrawerMenu>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
    );
  }

  return (
    <Menu>
      <MenuTrigger
        render={
          <Button
            aria-label={TRIGGER_ARIA_LABEL}
            size="icon"
            variant="outline"
          />
        }
      >
        <EllipsisIcon aria-hidden />
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>الإجراءات</MenuGroupLabel>
          <MenuItem>
            <PencilIcon aria-hidden />
            تعديل
          </MenuItem>
          <MenuItem>
            <CopyIcon aria-hidden />
            إنشاء نسخة
          </MenuItem>
          <MenuItem>
            <ShareIcon aria-hidden />
            مشاركة
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>تشغيل عشوائي</MenuCheckboxItem>
        <MenuCheckboxItem>تكرار</MenuCheckboxItem>
        <MenuCheckboxItem disabled>الصوت المحسن</MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>ترتيب حسب</MenuGroupLabel>
          <MenuRadioGroup defaultValue="artist">
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
        <MenuGroup>
          <MenuGroupLabel>منطقة خطر</MenuGroupLabel>
          <MenuItem variant="destructive">
            <TrashIcon aria-hidden />
            حذف
          </MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
