import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

export default function Particle() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        محتوى قابل للتمرير
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>محتوى قابل للتمرير</DrawerTitle>
        </DrawerHeader>
        <DrawerPanel>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 48 }, (_, i) => `box-${i}`).map((key) => (
              <div
                className="h-12 shrink-0 rounded-xl border bg-muted"
                key={key}
              />
            ))}
          </div>
        </DrawerPanel>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>إغلاق</DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
