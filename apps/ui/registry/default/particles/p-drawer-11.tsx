import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

export default function Particle() {
  return (
    <Drawer position="left">
      <DrawerTrigger render={<Button variant="outline" />}>
        فتح القائمة
      </DrawerTrigger>
      <DrawerPopup showCloseButton variant="straight">
        <DrawerHeader>
          <DrawerTitle>القائمة</DrawerTitle>
        </DrawerHeader>
        <DrawerPanel>
          <nav className="-mx-[calc(--spacing(3)-1px)] flex flex-col gap-0.5">
            <DrawerClose
              nativeButton={false}
              render={
                <Button
                  className="justify-start"
                  render={<Link href="#" />}
                  variant="ghost"
                />
              }
            >
              الرئيسية
            </DrawerClose>
            <DrawerClose
              nativeButton={false}
              render={
                <Button
                  className="justify-start"
                  render={<Link href="#" />}
                  variant="ghost"
                />
              }
            >
              الملف الشخصي
            </DrawerClose>
            <DrawerClose
              nativeButton={false}
              render={
                <Button
                  className="justify-start"
                  render={<Link href="#" />}
                  variant="ghost"
                />
              }
            >
              الإعدادات
            </DrawerClose>
            <DrawerClose
              nativeButton={false}
              render={
                <Button
                  className="justify-start"
                  render={<Link href="#" />}
                  variant="ghost"
                />
              }
            >
              تسجيل الدخول
            </DrawerClose>
          </nav>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  );
}
