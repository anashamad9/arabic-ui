import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ردود الفعل</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>أرسل لنا ردود الفعل</DialogTitle>
          <DialogDescription>
            مشاهدة Watch Watch Watch{" "}
            <a className="text-foreground hover:underline" href="#">
              البرامج التعليمية
            </a>
            , قراءة COSS UI/Arabic‘s{" "}
            <a className="text-foreground hover:underline" href="#">
              التوثيق
            </a>
            أو انضم إلينا{" "}
            <a className="text-foreground hover:underline" href="#">
              ديسكورد
            </a>{" "}
            للمساعدة المجتمعية.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-5">
          <Textarea
            aria-label="إرسال ملاحظات"
            id="feedback"
            placeholder="كيف يمكننا تحسين COSS UI/Arabic؟"
          />
          <div className="flex flex-col sm:flex-row sm:justify-end">
            <Button type="button">إرسال ملاحظات</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
