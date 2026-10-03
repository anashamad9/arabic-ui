import { Label } from "@coss/ui/components/label";

export function WebhookTestSection() {
  return (
    <div className="flex flex-col gap-2">
      <Label render={<div />}>استجابة خطاف الويب</Label>
      <div className="rounded-lg border border-input">
        <div className="p-4 font-mono text-sm">لا توجد بيانات حتى الآن</div>
      </div>
    </div>
  );
}
