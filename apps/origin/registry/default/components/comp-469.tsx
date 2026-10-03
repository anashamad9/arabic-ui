import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
          <TableRow className="hover:bg-transparent">
            <TableHead>الاسم</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead>الموقع</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead className="text-end">الرصيد</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2" />
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {items.map((item) => (
            <TableRow
              className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
              key={item.id}
            >
              <TableCell className="py-2.5 font-medium">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.email}</TableCell>
              <TableCell className="py-2.5">{item.location}</TableCell>
              <TableCell className="py-2.5">{item.status}</TableCell>
              <TableCell className="py-2.5 text-end">{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2" />
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4}>المجموع</TableCell>
            <TableCell className="text-end">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        جدول مخطط
      </p>
    </div>
  );
}
