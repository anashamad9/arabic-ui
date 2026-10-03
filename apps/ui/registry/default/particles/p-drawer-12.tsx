"use client";

import { useMediaQuery } from "@/registry/default/hooks/use-media-query";
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

const FORM_TITLE = "تعديل الملف الشخصي";
const FORM_DESCRIPTION =
  "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.";
const TRIGGER_LABEL = "فتح";
const CANCEL_LABEL = "إلغاء";
const SAVE_LABEL = "حفظ";

const formFields = (
  <>
    <Field>
      <FieldLabel>الاسم</FieldLabel>
      <Input defaultValue="مارجريت ويلز" type="text" />
    </Field>
    <Field>
      <FieldLabel>اسم المستخدم</FieldLabel>
      <Input defaultValue="@maggie.welsh" type="text" />
    </Field>
  </>
);

export default function Particle() {
  const isMobile = useMediaQuery("max-md");

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>
          {TRIGGER_LABEL}
        </DrawerTrigger>
        <DrawerPopup showBar>
          <DrawerHeader>
            <DrawerTitle>{FORM_TITLE}</DrawerTitle>
            <DrawerDescription>{FORM_DESCRIPTION}</DrawerDescription>
          </DrawerHeader>
          <Form className="contents">
            <DrawerPanel className="grid gap-4" scrollable={false}>
              {formFields}
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose render={<Button variant="ghost" />}>
                {CANCEL_LABEL}
              </DrawerClose>
              <Button type="submit">{SAVE_LABEL}</Button>
            </DrawerFooter>
          </Form>
        </DrawerPopup>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        {TRIGGER_LABEL}
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{FORM_TITLE}</DialogTitle>
          <DialogDescription>{FORM_DESCRIPTION}</DialogDescription>
        </DialogHeader>
        <Form className="contents">
          <DialogPanel className="grid gap-4">{formFields}</DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              {CANCEL_LABEL}
            </DialogClose>
            <Button type="submit">{SAVE_LABEL}</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
