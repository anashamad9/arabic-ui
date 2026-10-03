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
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        الوالدين المفتوحين
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>إدارة أعضاء الفريق</DialogTitle>
          <DialogDescription>عرض وإدارة مستخدم في فريقك.</DialogDescription>
        </DialogHeader>
        <DialogPanel className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">الاسم</p>
            <p className="font-medium text-sm">بورا بالوغلو</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">البريد الإلكتروني</p>
            <p className="font-medium text-sm">bora@example.com</p>
          </div>
        </DialogPanel>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              تحرير التفاصيل
            </DialogTrigger>
            <DialogPopup showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>تحرير التفاصيل</DialogTitle>
                <DialogDescription>
                  قم بإجراء تغييرات على معلومات العضو و .
                </DialogDescription>
              </DialogHeader>
              <DialogPanel className="grid gap-4">
                <Field>
                  <FieldLabel>الاسم</FieldLabel>
                  <Input defaultValue="بورا بالوغلو" type="text" />
                </Field>
                <Field>
                  <FieldLabel>البريد الإلكتروني</FieldLabel>
                  <Input defaultValue="bora@example.com" type="text" />
                </Field>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  إلغاء
                </DialogClose>
                <Button type="submit">حفظ التغييرات</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
