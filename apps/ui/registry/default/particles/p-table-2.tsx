import { Badge } from "@/registry/default/ui/badge";
import { Frame } from "@/registry/default/ui/frame";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

export default function Particle() {
  return (
    <Frame className="w-full">
      <Table variant="card">
        <TableHeader>
          <TableRow>
            <TableHead>المشروع</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>الفريق</TableHead>
            <TableHead className="text-end">ميزانية الميزانية</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">إعادة تصميم الموقع</TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-500"
                />
                مدفوع
              </Badge>
            </TableCell>
            <TableCell>فريق فرونت إند</TableCell>
            <TableCell className="text-end">$12,500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">تطبيق الهاتف</TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-muted-foreground/64"
                />
                غير مدفوع
              </Badge>
            </TableCell>
            <TableCell>فريق الجوال</TableCell>
            <TableCell className="text-end">$8,750</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              تكامل الواجهة البرمجية
            </TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-amber-500"
                />
                قيد الانتظار
              </Badge>
            </TableCell>
            <TableCell>فريق الخلفية</TableCell>
            <TableCell className="text-end">$5,200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">قاعدة بيانات الهجرة</TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-500"
                />
                مدفوع
              </Badge>
            </TableCell>
            <TableCell>فريق التطوير والتشغيل</TableCell>
            <TableCell className="text-end">$3,800</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">لوحة تحكم المستخدم</TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-500"
                />
                مدفوع
              </Badge>
            </TableCell>
            <TableCell>فريق تجربة المستخدم</TableCell>
            <TableCell className="text-end">$7,200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">التدقيق الأمني</TableCell>
            <TableCell>
              <Badge variant="outline">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-red-500"
                />
                فشل
              </Badge>
            </TableCell>
            <TableCell>فريق الأمن</TableCell>
            <TableCell className="text-end">$2,100</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>مجموع الميزانية</TableCell>
            <TableCell className="text-end">$39,550</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Frame>
  );
}
