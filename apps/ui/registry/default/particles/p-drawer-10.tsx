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
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer position="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          تذييل افتراضي
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>تعديل الملف الشخصي</DrawerTitle>
            <DrawerDescription>
              قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء
              من ذلك.
            </DrawerDescription>
          </DrawerHeader>
          <Form className="contents">
            <DrawerPanel className="grid gap-4">
              <Field>
                <FieldLabel>الاسم</FieldLabel>
                <Input defaultValue="مارجريت ويلز" type="text" />
              </Field>
              <Field>
                <FieldLabel>اسم المستخدم</FieldLabel>
                <Input defaultValue="@maggie.welsh" type="text" />
              </Field>
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose render={<Button variant="ghost" />}>
                إلغاء
              </DrawerClose>
              <Button>حفظ</Button>
            </DrawerFooter>
          </Form>
        </DrawerPopup>
      </Drawer>
      <Drawer position="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          تذييل بسيط
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>تعديل الملف الشخصي</DrawerTitle>
            <DrawerDescription>
              قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء
              من ذلك.
            </DrawerDescription>
          </DrawerHeader>
          <Form className="contents">
            <DrawerPanel className="grid gap-4">
              <Field>
                <FieldLabel>الاسم</FieldLabel>
                <Input defaultValue="مارجريت ويلز" type="text" />
              </Field>
              <Field>
                <FieldLabel>اسم المستخدم</FieldLabel>
                <Input defaultValue="@maggie.welsh" type="text" />
              </Field>
            </DrawerPanel>
            <DrawerFooter variant="bare">
              <DrawerClose render={<Button variant="ghost" />}>
                إلغاء
              </DrawerClose>
              <Button>حفظ</Button>
            </DrawerFooter>
          </Form>
        </DrawerPopup>
      </Drawer>
    </div>
  );
}
