"use client";

import { CircleAlertIcon } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

const PROJECT_NAME = "coss-ui";

export default function Component() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">حذف المشروع</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border"
          >
            <CircleAlertIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">تأكيد نهائي</DialogTitle>
            <DialogDescription className="sm:text-center">
              لا يمكن التراجع عن هذا الإجراء. للتأكيد ، يرجى إدخال اسم المشروع{" "}
              <span className="text-foreground">coss-ui</span>.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="*:not-first:mt-2">
            <Label htmlFor={id}>اسم المشروع</Label>
            <Input
              id={id}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="اكتب COSS UI/Arabic-واجهة المستخدم للتأكيد"
              type="text"
              value={inputValue}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="flex-1" type="button" variant="outline">
                إلغاء
              </Button>
            </DialogClose>
            <Button
              className="flex-1"
              disabled={inputValue !== PROJECT_NAME}
              type="button"
            >
              حذف
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
