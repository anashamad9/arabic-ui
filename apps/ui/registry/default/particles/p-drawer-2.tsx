import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

export default function Particle() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        فتح اللوحة المنزلقة
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerHeader className="text-center">
          <DrawerTitle>الإشعارات</DrawerTitle>
          <DrawerDescription>هذا هو وصف اللوحة المنزلقة.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter
          className="justify-center sm:justify-center"
          variant="bare"
        >
          <DrawerClose render={<Button variant="outline" />}>إغلاق</DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
