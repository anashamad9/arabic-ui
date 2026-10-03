import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table";

export default function Component() {
  return (
    <div className="mx-auto max-w-lg">
      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableBody>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                الاسم
              </TableCell>
              <TableCell className="py-2">داود سالم</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                البريد الإلكتروني
              </TableCell>
              <TableCell className="py-2">d.kim@company.com</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                الموقع
              </TableCell>
              <TableCell className="py-2">عمّان، الأردن</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                الحالة
              </TableCell>
              <TableCell className="py-2">نشط</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                الرصيد
              </TableCell>
              <TableCell className="py-2">$1,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        الجدول العمودي
      </p>
    </div>
  );
}
