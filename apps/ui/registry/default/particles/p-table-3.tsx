"use client";

import {
  type ColumnDef,
  columnVisibilityFeature,
  flexRender,
  rowSelectionFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { Badge } from "@/registry/default/ui/badge";
import { Checkbox } from "@/registry/default/ui/checkbox";
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

type Project = {
  id: string;
  project: string;
  status: "مدفوع" | "غير مدفوع" | "قيد الانتظار" | "فشل";
  team: string;
  budget: number;
};

const data: Project[] = [
  {
    budget: 12500,
    id: "1",
    project: "إعادة تصميم الموقع",
    status: "مدفوع",
    team: "فريق فرونت إند",
  },
  {
    budget: 8750,
    id: "2",
    project: "تطبيق الهاتف",
    status: "غير مدفوع",
    team: "فريق الجوال",
  },
  {
    budget: 5200,
    id: "3",
    project: "تكامل الواجهة البرمجية",
    status: "قيد الانتظار",
    team: "فريق الخلفية",
  },
  {
    budget: 3800,
    id: "4",
    project: "قاعدة بيانات الهجرة",
    status: "مدفوع",
    team: "فريق التطوير والتشغيل",
  },
  {
    budget: 7200,
    id: "5",
    project: "لوحة تحكم المستخدم",
    status: "مدفوع",
    team: "فريق تجربة المستخدم",
  },
  {
    budget: 2100,
    id: "6",
    project: "التدقيق الأمني",
    status: "فشل",
    team: "فريق الأمن",
  },
];

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "مدفوع":
      return "bg-emerald-500";
    case "غير مدفوع":
      return "bg-muted-foreground/64";
    case "قيد الانتظار":
      return "bg-amber-500";
    case "فشل":
      return "bg-red-500";
    default:
      return "bg-muted-foreground/64";
  }
};

const features = tableFeatures({
  columnVisibilityFeature,
  rowSelectionFeature,
});

const getColumns = (): ColumnDef<typeof features, Project>[] => [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="تحديد الصف"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const isSomeSelected = table.getIsSomePageRowsSelected();
      return (
        <Checkbox
          aria-label="تحديد الكل"
          checked={isAllSelected}
          indeterminate={isSomeSelected && !isAllSelected}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      );
    },
    id: "select",
  },
  {
    accessorKey: "project",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("project")}</div>
    ),
    header: "المشروع",
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Project["status"];
      return (
        <Badge variant="outline">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${getStatusColor(status)}`}
          />
          {status}
        </Badge>
      );
    },
    header: "الحالة",
  },
  {
    accessorKey: "team",
    header: "الفريق",
  },
  {
    accessorKey: "budget",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("budget"));
      const formatted = new Intl.NumberFormat("ar", {
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: "currency",
      }).format(amount);
      return <div className="text-end">{formatted}</div>;
    },
    header: () => <div className="text-end">ميزانية الميزانية</div>,
  },
];

const columns = getColumns();

export default function Particle() {
  const table = useTable(
    {
      columns,
      data,
      enableRowSelection: true,
      features,
    },
    (state) => ({ rowSelection: state.rowSelection }),
  );

  const totalBudget = data.reduce((sum, project) => sum + project.budget, 0);
  const formattedTotal = new Intl.NumberFormat("ar", {
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: "currency",
  }).format(totalBudget);

  return (
    <Frame className="w-full">
      <Table variant="card">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                لا توجد نتائج.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>مجموع الميزانية</TableCell>
            <TableCell className="text-end">{formattedTotal}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Frame>
  );
}
