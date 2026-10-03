import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

export default function Particle() {
  return (
    <Drawer position="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        فتح اللوحة المنزلقة
      </DrawerTrigger>
      <DrawerPopup showCloseButton variant="straight">
        <DrawerHeader>
          <DrawerTitle>الإشعارات</DrawerTitle>
          <DrawerDescription>هذا هو وصف اللوحة المنزلقة.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <p className="text-muted-foreground text-sm">
            هذا نص عربي تجريبي يعرض شكل المحتوى داخل المكوّن. يمكنك استبداله
            بمحتواك الخاص، وتعديل الطول والتنسيق بما يناسب واجهتك.
          </p>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  );
}
