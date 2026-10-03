"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "@/registry/default/ui/alert-dialog";
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
import { Field } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Dialog
      onOpenChange={(o) => {
        if (!o && value) {
          setConfirmOpen(true);
        } else {
          setDialogOpen(o);
        }
      }}
      open={dialogOpen}
    >
      <DialogTrigger render={<Button variant="outline" />}>يؤلف</DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>رسالة جديدة</DialogTitle>
          <DialogDescription>اكتب شيئًا وحاول إغلاقه.</DialogDescription>
        </DialogHeader>
        <Form
          className="contents"
          onSubmit={(event) => {
            event.preventDefault();
            // Close the dialog when submitting
            setDialogOpen(false);
          }}
        >
          <DialogPanel>
            <Field>
              <Textarea
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>إلغاء</DialogClose>
            <Button
              onClick={() => {
                setValue("");
                setDialogOpen(false);
              }}
            >
              إرسال
            </Button>
          </DialogFooter>
        </Form>
      </DialogPopup>

      {/* Confirmation dialog */}
      <AlertDialog onOpenChange={setConfirmOpen} open={confirmOpen}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>تجاهل التغييرات؟</AlertDialogTitle>
            <AlertDialogDescription>سيتم فقدان رسالتك.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              العودة إلى الوراء
            </AlertDialogClose>
            <Button
              onClick={() => {
                setConfirmOpen(false);
                setValue("");
                setDialogOpen(false);
              }}
            >
              استكشف
            </Button>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </Dialog>
  );
}
