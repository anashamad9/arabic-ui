import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        فتح النافذة
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>تعديل الملف الشخصي</DialogTitle>
          <DialogDescription>
            قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء من
            ذلك.
          </DialogDescription>
        </DialogHeader>
        <Form className="contents">
          <DialogPanel className="grid gap-4">
            <Field>
              <FieldLabel>الاسم</FieldLabel>
              <Input defaultValue="مارجريت ويلز" type="text" />
            </Field>
            <Field>
              <FieldLabel>اسم المستخدم</FieldLabel>
              <Input defaultValue="@maggie.welsh" type="text" />
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>إلغاء</DialogClose>
            <Button type="submit">حفظ</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
