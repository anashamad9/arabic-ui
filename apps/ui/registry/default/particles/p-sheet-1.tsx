import { Button } from "@/registry/default/ui/button";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";

export default function Particle() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        فتح اللوحة الجانبية
      </SheetTrigger>
      <SheetPopup>
        <SheetHeader>
          <SheetTitle>تعديل الملف الشخصي</SheetTitle>
          <SheetDescription>
            قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء من
            ذلك.
          </SheetDescription>
        </SheetHeader>
        <Form className="contents">
          <SheetPanel className="grid gap-4">
            <Field>
              <FieldLabel>الاسم</FieldLabel>
              <Input defaultValue="مارجريت ويلز" type="text" />
            </Field>
            <Field>
              <FieldLabel>اسم المستخدم</FieldLabel>
              <Input defaultValue="@maggie.welsh" type="text" />
            </Field>
          </SheetPanel>
          <SheetFooter>
            <SheetClose render={<Button variant="ghost" />}>إلغاء</SheetClose>
            <Button type="submit">حفظ</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  );
}
