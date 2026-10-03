import { useId } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">إنشاء حساب</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
          >
            <svg
              aria-hidden="true"
              className="stroke-zinc-800 dark:stroke-zinc-100"
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" fill="none" r="12" strokeWidth="8" />
            </svg>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              تسجيل الدخول COSS UI/Arabic
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              نحن فقط بحاجة إلى بعض التفاصيل لتبدأ.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-name`}>الاسم الكامل</Label>
              <Input
                id={`${id}-name`}
                placeholder="خالد أحمد"
                required
                type="text"
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>البريد الإلكتروني</Label>
              <Input
                id={`${id}-email`}
                placeholder="hi@yourcompany.com"
                required
                type="email"
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-password`}>كلمة المرور</Label>
              <Input
                id={`${id}-password`}
                placeholder="أدخل كلمة المرور"
                required
                type="password"
              />
            </div>
          </div>
          <Button className="w-full" type="button">
            إنشاء حساب
          </Button>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-muted-foreground text-xs">أو</span>
        </div>

        <Button variant="outline">تابع مع غوغل</Button>

        <p className="text-center text-muted-foreground text-xs">
          من خلال الاشتراك فإنك توافق على موقعنا{" "}
          <a className="underline hover:no-underline" href="#">
            الشروط والأحكام
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
