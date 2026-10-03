import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">ردود الفعل</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 font-semibold text-sm">أرسل لنا ردود الفعل</h2>
          <form className="space-y-3">
            <Textarea
              aria-label="إرسال ملاحظات"
              id="feedback"
              placeholder="كيف يمكننا تحسين COSS UI/Arabic؟"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button size="sm">إرسال ملاحظات</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
