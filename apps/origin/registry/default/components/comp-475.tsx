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
  {
    balance: "$1,500.00",
    email: "john.brown@company.com",
    id: "6",
    location: "نيويورك, الولايات المتحدة",
    name: "جون براون",
    status: "نشط",
  },
  {
    balance: "$200.00",
    email: "jane.doe@company.com",
    id: "7",
    location: "باريس, FR",
    name: "جين دو",
    status: "غير نشط",
  },
  {
    balance: "$1,000.00",
    email: "peter.smith@company.com",
    id: "8",
    location: "برلين, DE",
    name: "بيتر سميث",
    status: "نشط",
  },
  {
    balance: "$500.00",
    email: "olivia.lee@company.com",
    id: "9",
    location: "طوكيو، جي بي",
    name: "أوليفيا لي",
    status: "نشط",
  },
  {
    balance: "$300.00",
    email: "liam.chen@company.com",
    id: "10",
    location: "شنغهاي ، CN",
    name: "ليام تشن",
    status: "غير نشط",
  },
  {
    balance: "$800.00",
    email: "ethan.kim@company.com",
    id: "11",
    location: "بوسان, KR",
    name: "إيثان كيم",
    status: "نشط",
  },
  {
    balance: "$1,200.00",
    email: "ava.brown@company.com",
    id: "12",
    location: "لندن، المملكة المتحدة",
    name: "افا براون",
    status: "نشط",
  },
  {
    balance: "$400.00",
    email: "lily.lee@company.com",
    id: "13",
    location: "عمّان، الأردن",
    name: "ليلى لي",
    status: "نشط",
  },
  {
    balance: "$600.00",
    email: "noah.smith@company.com",
    id: "14",
    location: "نيويورك, الولايات المتحدة",
    name: "نوح سميث",
    status: "غير نشط",
  },
  {
    balance: "$1,800.00",
    email: "eve.chen@company.com",
    id: "15",
    location: "تايبيه, TW",
    name: "إيف تشن",
    status: "نشط",
  },
];

export default function Component() {
  return (
    <div>
      <div className="[&>div]:max-h-96">
        <Table className="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-border [&_th]:border-b [&_tr:not(:last-child)_td]:border-b [&_tr]:border-none">
          <TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-xs">
            <TableRow className="hover:bg-transparent">
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>الموقع</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead className="text-end">الرصيد</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-end">{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={4}>المجموع</TableCell>
              <TableCell className="text-end">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <p className="mt-8 text-center text-muted-foreground text-sm">
        طاولة مع رأس لزجة
      </p>
    </div>
  );
}
