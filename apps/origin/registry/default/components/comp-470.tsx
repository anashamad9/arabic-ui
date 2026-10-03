import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

const items = [
  {
    balance: "$1,250.00",
    email: "alex.t@company.com",
    id: "1",
    location: "سان فرانسيسكو, الولايات المتحدة",
    name: "أحمد علي",
    status: "نشط",
  },
  {
    balance: "$600.00",
    email: "sarah.c@company.com",
    id: "2",
    location: "الرياض",
    name: "سارة أحمد",
    status: "نشط",
  },
  {
    balance: "$650.00",
    email: "j.wilson@company.com",
    id: "3",
    location: "لندن، المملكة المتحدة",
    name: "عمر خالد",
    status: "غير نشط",
  },
  {
    balance: "$0.00",
    email: "m.garcia@company.com",
    id: "4",
    location: "مدريد, إسبانيا",
    name: "ماريا غارسيا",
    status: "نشط",
  },
  {
    balance: "-$1,000.00",
    email: "d.kim@company.com",
    id: "5",
    location: "عمّان، الأردن",
    name: "داود سالم",
    status: "نشط",
  },
];

export default function Component() {
  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableHead>الاسم</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead>الموقع</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead className="text-end">الرصيد</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {items.map((item) => (
            <TableRow
              className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
              key={item.id}
            >
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-end">{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        الجدول مع خطوط عمودية
      </p>
    </div>
  );
}
