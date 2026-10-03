import { MailIcon } from "lucide-react";
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

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">النشرة الإخبارية</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
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
              لا تفوت أي تحديث
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              اشترك لتلقي الأخبار والعروض الخاصة.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="*:not-first:mt-2">
            <div className="relative">
              <Input
                aria-label="البريد الإلكتروني"
                className="peer ps-9"
                id="dialog-subscribe"
                placeholder="hi@yourcompany.com"
                type="email"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <MailIcon aria-hidden="true" size={16} />
              </div>
            </div>
          </div>
          <Button className="w-full" type="button">
            اشتراك
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-xs">
          عن طريق الاشتراك فإنك توافق على موقعنا{" "}
          <a className="underline hover:no-underline" href="#">
            سياسة الخصوصية
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
