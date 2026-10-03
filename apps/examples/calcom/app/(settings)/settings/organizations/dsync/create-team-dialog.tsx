"use client";

import { Button } from "@coss/ui/components/button";
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
} from "@coss/ui/components/dialog";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Form } from "@coss/ui/components/form";
import { Input } from "@coss/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@coss/ui/components/input-group";
import { PlusIcon } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

export interface CreateTeamDialogProps {
  onCreate?: (data: { teamName: string; teamSlug: string }) => void;
}

export function CreateTeamDialog({ onCreate }: CreateTeamDialogProps) {
  const [open, setOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const teamName = (formData.get("teamName") as string) || "";
    const teamSlug = (formData.get("teamSlug") as string) || "";
    onCreate?.({ teamName: teamName.trim(), teamSlug: teamSlug.trim() });
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger render={<Button type="button" variant="outline" />}>
        <PlusIcon aria-hidden="true" />
        إنشاء فريق
      </DialogTrigger>
      <DialogPopup className="max-w-xl" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>إنشاء فريق جديد</DialogTitle>
          <DialogDescription>فرق جديدة ستكون تحت مؤسستك</DialogDescription>
        </DialogHeader>
        <Form className="contents" onSubmit={handleSubmit}>
          <DialogPanel className="grid gap-4">
            <Field>
              <FieldLabel>اسم الفريق</FieldLabel>
              <Input name="teamName" placeholder="شركة المثال" type="text" />
            </Field>
            <Field>
              <FieldLabel>عنوان رابط</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>
                    dunder-mifflin.localhost: 3000
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  aria-label="فريق رابط سبيكة"
                  className="*:[input]:ps-0!"
                  name="teamSlug"
                  placeholder="المثال"
                  type="text"
                />
              </InputGroup>
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button type="button" variant="ghost" />}>
              إلغاء
            </DialogClose>
            <Button type="submit">إنشاء</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
