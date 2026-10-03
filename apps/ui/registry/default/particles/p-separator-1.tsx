import { Separator } from "@/registry/default/ui/separator";

export default function Particle() {
  return (
    <div className="max-w-72">
      <div className="flex flex-col gap-1">
        <h4 className="font-medium text-sm">COSS UI/Arabic</h4>
        <p className="text-muted-foreground text-sm">
          بدائيات غير منقوشة ويمكن الوصول إليها لواجهة المستخدم سريعة المنتج
          وأنظمة التصميم.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center gap-4 text-sm">
        <div>مدونة مدونة مدونة المدونة</div>
        <Separator orientation="vertical" />
        <div>التوثيق</div>
        <Separator orientation="vertical" />
        <div>مصدر المصدر المصدر</div>
        <Separator orientation="vertical" />
        <div>الإصدارات</div>
      </div>
    </div>
  );
}
