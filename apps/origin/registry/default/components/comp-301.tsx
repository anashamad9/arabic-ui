import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 inset-x-4` to the container element.
    <div className="z-50 rounded-md border bg-background px-4 py-3 shadow-lg">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <p className="text-sm">
          نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع
          وعرض المحتوى المخصص.
        </p>
        <div className="flex gap-2 max-md:flex-wrap">
          <Button size="sm">قبول</Button>
          <Button size="sm" variant="outline">
            الإنحدار
          </Button>
        </div>
      </div>
    </div>
  );
}
