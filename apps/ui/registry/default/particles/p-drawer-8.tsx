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
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Drawer position="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        أدراج متداخلة
      </DrawerTrigger>
      <DrawerPopup variant="inset">
        <DrawerHeader>
          <DrawerTitle>إدارة أعضاء الفريق</DrawerTitle>
          <DrawerDescription>عرض وإدارة مستخدم في فريقك.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">الاسم</p>
            <p className="font-medium text-sm">بورا بالوغلو</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">البريد الإلكتروني</p>
            <p className="font-medium text-sm">bora@example.com</p>
          </div>
        </DrawerPanel>
        <DrawerFooter>
          <Drawer position="right">
            <DrawerTrigger render={<Button variant="outline" />}>
              تحرير التفاصيل
            </DrawerTrigger>
            <DrawerPopup variant="inset">
              <DrawerHeader>
                <DrawerTitle>تحرير التفاصيل</DrawerTitle>
                <DrawerDescription>
                  قم بإجراء تغييرات على معلومات العضو و .
                </DrawerDescription>
              </DrawerHeader>
              <DrawerPanel className="grid gap-4">
                <Field>
                  <FieldLabel>الاسم</FieldLabel>
                  <Input defaultValue="بورا بالوغلو" type="text" />
                </Field>
                <Field>
                  <FieldLabel>البريد الإلكتروني</FieldLabel>
                  <Input defaultValue="bora@example.com" type="email" />
                </Field>
              </DrawerPanel>
              <DrawerFooter>
                <DrawerClose render={<Button variant="ghost" />}>
                  إلغاء
                </DrawerClose>
                <Button type="submit">حفظ التغييرات</Button>
              </DrawerFooter>
            </DrawerPopup>
          </Drawer>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
