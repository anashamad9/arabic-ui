import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
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
        أدراج متداخلة
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader className="text-center">
          <DrawerTitle>الخطوة الأولى</DrawerTitle>
          <DrawerDescription>
            هذه هي الخطوة الأولى. اضغط على الزر أدناه للمتابعة إلى الشاشة
            التالية.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter
          className="justify-center sm:justify-center"
          variant="bare"
        >
          <DrawerClose render={<Button variant="ghost" />}>إلغاء</DrawerClose>
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>
              متابعة
            </DrawerTrigger>
            <DrawerPopup showBar>
              <DrawerHeader className="text-center">
                <DrawerTitle>الخطوة الثانية</DrawerTitle>
                <DrawerDescription>
                  لقد وصلت إلى الخطوة الثانية. اضغط على الزر أدناه للمتابعة إلى
                  الشاشة التالية.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerPanel>
                <div className="flex justify-center">
                  <div className="size-48 shrink-0 rounded-xl border bg-muted" />
                </div>
              </DrawerPanel>
              <DrawerFooter
                className="justify-center sm:justify-center"
                variant="bare"
              >
                <DrawerClose render={<Button variant="ghost" />}>
                  رجوع
                </DrawerClose>
                <Drawer>
                  <DrawerTrigger render={<Button variant="outline" />}>
                    متابعة
                  </DrawerTrigger>
                  <DrawerPopup showBar>
                    <DrawerHeader className="text-center">
                      <DrawerTitle>الخطوة الثالثة</DrawerTitle>
                      <DrawerDescription>
                        لقد وصلت إلى الخطوة النهائية. يمكنك إغلاق هذا اللوحة
                        المنزلقة أو العودة.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerPanel>
                      <div className="flex justify-center">
                        <div className="size-32 shrink-0 rounded-full border bg-muted" />
                      </div>
                    </DrawerPanel>
                  </DrawerPopup>
                </Drawer>
              </DrawerFooter>
            </DrawerPopup>
          </Drawer>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
