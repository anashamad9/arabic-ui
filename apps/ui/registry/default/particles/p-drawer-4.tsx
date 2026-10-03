import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

export default function Particle() {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer position="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          اليمين
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>اليمين</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">المحتوى من اليمين.</p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer position="left">
        <DrawerTrigger render={<Button variant="outline" />}>
          اليسار
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>اليسار</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">المحتوى من اليسار.</p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer position="top">
        <DrawerTrigger render={<Button variant="outline" />}>
          أعلى قمة
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>أعلى قمة</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">المحتوى من الأعلى.</p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>
          القاع
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>القاع</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">المحتوى من الأسفل.</p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
    </div>
  );
}
