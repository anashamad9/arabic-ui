"use client";

import {
  type ColumnDef,
  columnSizingFeature,
  columnVisibilityFeature,
  createPaginatedRowModel,
  createSortedRowModel,
  flexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, PlaneTakeoffIcon } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { CardFrame, CardFrameFooter } from "@/registry/default/ui/card";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

type Flight = {
  id: string;
  flightCode: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  terminal: string;
  duration: string;
  status: "في الموعد" | "متأخر" | "ملغى" | "الصعود";
  gate: string;
};

const getStatusColor = (status: Flight["status"]) => {
  switch (status) {
    case "في الموعد":
      return "bg-emerald-500";
    case "متأخر":
      return "bg-amber-500";
    case "ملغى":
      return "bg-red-500";
    case "الصعود":
      return "bg-blue-500";
    default:
      return "bg-muted-foreground/64";
  }
};

const features = tableFeatures({
  columnSizingFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
});

const columns: ColumnDef<typeof features, Flight>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="تحديد الصف"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const isSomeSelected = table.getIsSomePageRowsSelected();
      return (
        <Checkbox
          aria-label="حدد جميع الصفوف"
          checked={isAllSelected}
          indeterminate={isSomeSelected && !isAllSelected}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      );
    },
    id: "select",
    size: 28,
  },
  {
    accessorKey: "flightCode",
    cell: ({ row }) => (
      <div className="font-medium font-mono text-muted-foreground">
        {row.getValue("flightCode")}
      </div>
    ),
    header: "الرحلة",
    size: 80,
  },
  {
    accessorKey: "departureTime",
    cell: ({ row }) => {
      const isCancelled = row.original.status === "ملغى";
      const isDelayed = row.original.status === "متأخر";
      return (
        <div
          className={cn(
            "flex items-center gap-1.5 font-normal tabular-nums",
            isCancelled && "text-muted-foreground line-through opacity-50",
          )}
        >
          <div className={isDelayed ? "text-warning-foreground" : undefined}>
            {row.original.departureTime}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-0.5 opacity-50 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
          />
          <div
            className={cn(
              "text-muted-foreground",
              isCancelled && "line-through",
            )}
          >
            {row.original.duration}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-0.5 opacity-50 before:order-1 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
          />
          <div>{row.original.arrivalTime}</div>
        </div>
      );
    },
    header: "الوقت",
    size: 220,
  },
  {
    accessorKey: "destination",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("destination")}</div>
    ),
    header: "الوجهة المقصودة",
    size: 180,
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Flight["status"];
      return (
        <Badge variant="outline">
          <span
            aria-hidden="true"
            className={cn("size-1.5 rounded-full", getStatusColor(status))}
          />
          {status}
        </Badge>
      );
    },
    header: "الحالة",
    size: 120,
  },
  {
    accessorKey: "terminal",
    cell: ({ row }) => (
      <Badge className="font-normal tabular-nums" size="lg" variant="outline">
        <PlaneTakeoffIcon />
        <span>{row.getValue("terminal")}</span>
      </Badge>
    ),
    header: "محطة المحطة الطرفية",
    size: 90,
  },
  {
    accessorKey: "gate",
    header: "بوابة",
    size: 80,
  },
];

export default function Particle() {
  const pageSize = 10;

  const table = useTable(
    {
      columns,
      data: flights,
      enableSortingRemoval: false,
      features,
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize,
        },
        sorting: [
          {
            desc: false,
            id: "departureTime",
          },
        ],
      },
    },
    (state) => ({
      pagination: state.pagination,
      rowSelection: state.rowSelection,
      sorting: state.sorting,
    }),
  );

  return (
    <CardFrame className="w-full">
      <Table variant="card" className="table-fixed">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-transparent" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const columnSize = header.column.getSize();
                return (
                  <TableHead
                    key={header.id}
                    style={
                      columnSize ? { width: `${columnSize}px` } : undefined
                    }
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <div
                        className="flex h-full cursor-pointer select-none items-center justify-between gap-2"
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          if (e.key === "إدخال" || e.key === " ") {
                            e.preventDefault();
                            header.column.getToggleSortingHandler()?.(e);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <ChevronUpIcon
                              aria-hidden="true"
                              className="size-4 shrink-0 opacity-80"
                            />
                          ),
                          desc: (
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="size-4 shrink-0 opacity-80"
                            />
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() ? "selected" : undefined}
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
      </Table>
      <CardFrameFooter className="p-2">
        <div className="flex items-center justify-between gap-2">
          {/* Results range selector */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-muted-foreground text-sm">عرض</p>
            <Select
              items={Array.from({ length: table.getPageCount() }, (_, i) => {
                const start = i * table.state.pagination.pageSize + 1;
                const end = Math.min(
                  (i + 1) * table.state.pagination.pageSize,
                  table.getRowCount(),
                );
                const pageNum = i + 1;
                return { label: `${start}-${end}`, value: pageNum };
              })}
              onValueChange={(value) => {
                table.setPageIndex((value as number) - 1);
              }}
              value={table.state.pagination.pageIndex + 1}
            >
              <SelectTrigger
                aria-label="حدد نطاق النتائج"
                className="w-fit min-w-none"
                size="sm"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectPopup>
                {Array.from({ length: table.getPageCount() }, (_, i) => {
                  const start = i * table.state.pagination.pageSize + 1;
                  const end = Math.min(
                    (i + 1) * table.state.pagination.pageSize,
                    table.getRowCount(),
                  );
                  const pageNum = i + 1;
                  return (
                    <SelectItem key={pageNum} value={pageNum}>
                      {`${start}-${end}`}
                    </SelectItem>
                  );
                })}
              </SelectPopup>
            </Select>
            <p className="text-muted-foreground text-sm">
              من{" "}
              <strong className="font-medium text-foreground">
                {table.getRowCount()}
              </strong>{" "}
              نتائج
            </p>
          </div>

          {/* Pagination */}
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="sm:*:[svg]:hidden"
                  render={
                    <Button
                      disabled={!table.getCanPreviousPage()}
                      onClick={() => table.previousPage()}
                      size="sm"
                      variant="outline"
                    />
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="sm:*:[svg]:hidden"
                  render={
                    <Button
                      disabled={!table.getCanNextPage()}
                      onClick={() => table.nextPage()}
                      size="sm"
                      variant="outline"
                    />
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardFrameFooter>
    </CardFrame>
  );
}

const flights: Flight[] = [
  {
    arrivalTime: "11:45",
    departureTime: "08:30",
    destination: "لوس أنجلوس",
    duration: "5 س و15 د",
    flightCode: "AA1234",
    gate: "A12",
    id: "1",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "17:10",
    departureTime: "14:20",
    destination: "سان فرانسيسكو",
    duration: "4 س و50 د",
    flightCode: "DL5678",
    gate: "B24",
    id: "2",
    status: "متأخر",
    terminal: "2",
  },
  {
    arrivalTime: "13:30",
    departureTime: "10:15",
    destination: "ميامي",
    duration: "3 س و15 د",
    flightCode: "UA9012",
    gate: "C8",
    id: "3",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "18:20",
    departureTime: "16:45",
    destination: "سياتل",
    duration: "2 س و35 د",
    flightCode: "SW3456",
    gate: "D15",
    id: "4",
    status: "في الموعد",
    terminal: "3",
  },
  {
    arrivalTime: "12:30",
    departureTime: "09:00",
    destination: "سولت ليك سيتي",
    duration: "5 س و30 د",
    flightCode: "JB7890",
    gate: "E3",
    id: "5",
    status: "ملغى",
    terminal: "2",
  },
  {
    arrivalTime: "14:15",
    departureTime: "11:30",
    destination: "فينيكس",
    duration: "2 س و45 د",
    flightCode: "AS2345",
    gate: "F7",
    id: "6",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "20:30",
    departureTime: "13:00",
    destination: "لاس فيغاس",
    duration: "5 س و30 د",
    flightCode: "HA6789",
    gate: "G12",
    id: "7",
    status: "متأخر",
    terminal: "2",
  },
  {
    arrivalTime: "09:00",
    departureTime: "07:15",
    destination: "دالاس",
    duration: "1 س و45 د",
    flightCode: "FX0123",
    gate: "H5",
    id: "8",
    status: "الصعود",
    terminal: "1",
  },
  {
    arrivalTime: "08:30",
    departureTime: "06:00",
    destination: "دنفر",
    duration: "2 س و30 د",
    flightCode: "WN4567",
    gate: "I9",
    id: "9",
    status: "الصعود",
    terminal: "2",
  },
  {
    arrivalTime: "15:20",
    departureTime: "12:45",
    destination: "بورتلاند",
    duration: "2 س و35 د",
    flightCode: "B61234",
    gate: "J14",
    id: "10",
    status: "في الموعد",
    terminal: "3",
  },
  {
    arrivalTime: "18:45",
    departureTime: "15:30",
    destination: "أتلانتا أتلانتا أتلانتا أتلانتا",
    duration: "3 س و15 د",
    flightCode: "NK8901",
    gate: "K6",
    id: "11",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "12:00",
    departureTime: "09:45",
    destination: "شيكاغو",
    duration: "2 س و15 د",
    flightCode: "F92345",
    gate: "L11",
    id: "12",
    status: "متأخر",
    terminal: "2",
  },
  {
    arrivalTime: "14:15",
    departureTime: "11:00",
    destination: "بوسطن",
    duration: "3 س و15 د",
    flightCode: "SY6789",
    gate: "M3",
    id: "13",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "16:45",
    departureTime: "13:30",
    destination: "نيويورك",
    duration: "3 س و15 د",
    flightCode: "G40123",
    gate: "N8",
    id: "14",
    status: "في الموعد",
    terminal: "3",
  },
  {
    arrivalTime: "11:20",
    departureTime: "08:00",
    destination: "واشنطن",
    duration: "3 س و20 د",
    flightCode: "YX5678",
    gate: "O12",
    id: "15",
    status: "متأخر",
    terminal: "2",
  },
  {
    arrivalTime: "13:50",
    departureTime: "10:30",
    destination: "أورلاندو",
    duration: "3 س و20 د",
    flightCode: "4U9012",
    gate: "P5",
    id: "16",
    status: "متأخر",
    terminal: "1",
  },
  {
    arrivalTime: "16:30",
    departureTime: "14:00",
    destination: "هيوستن",
    duration: "2 س و30 د",
    flightCode: "QF3456",
    gate: "Q9",
    id: "17",
    status: "في الموعد",
    terminal: "3",
  },
  {
    arrivalTime: "10:00",
    departureTime: "07:30",
    destination: "مينيابوليس",
    duration: "2 س و30 د",
    flightCode: "LH7890",
    gate: "R7",
    id: "18",
    status: "ملغى",
    terminal: "2",
  },
  {
    arrivalTime: "19:30",
    departureTime: "16:15",
    destination: "ديترويت",
    duration: "3 س و15 د",
    flightCode: "KL2345",
    gate: "S4",
    id: "19",
    status: "ملغى",
    terminal: "1",
  },
  {
    arrivalTime: "15:10",
    departureTime: "12:00",
    destination: "فيلادلفيا",
    duration: "3 س و10 د",
    flightCode: "AF6789",
    gate: "T16",
    id: "20",
    status: "في الموعد",
    terminal: "3",
  },
  {
    arrivalTime: "12:25",
    departureTime: "09:15",
    destination: "شارلوت",
    duration: "3 س و10 د",
    flightCode: "BA0123",
    gate: "U10",
    id: "21",
    status: "في الموعد",
    terminal: "2",
  },
  {
    arrivalTime: "18:00",
    departureTime: "15:45",
    destination: "ناشفيل",
    duration: "2 س و15 د",
    flightCode: "IB4567",
    gate: "V8",
    id: "22",
    status: "متأخر",
    terminal: "1",
  },
  {
    arrivalTime: "14:00",
    departureTime: "11:45",
    destination: "أوستن",
    duration: "2 س و15 د",
    flightCode: "EK8901",
    gate: "W13",
    id: "23",
    status: "ملغى",
    terminal: "3",
  },
  {
    arrivalTime: "16:40",
    departureTime: "13:15",
    destination: "تامبا",
    duration: "3 س و25 د",
    flightCode: "QR2345",
    gate: "X6",
    id: "24",
    status: "في الموعد",
    terminal: "2",
  },
  {
    arrivalTime: "11:30",
    departureTime: "08:45",
    destination: "رالي",
    duration: "2 س و45 د",
    flightCode: "TK6789",
    gate: "Y11",
    id: "25",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "12:45",
    departureTime: "10:00",
    destination: "إنديانابوليس",
    duration: "2 س و45 د",
    flightCode: "VS3456",
    gate: "Z4",
    id: "26",
    status: "في الموعد",
    terminal: "2",
  },
  {
    arrivalTime: "20:00",
    departureTime: "17:30",
    destination: "كانساس سيتي",
    duration: "2 س و30 د",
    flightCode: "LX7890",
    gate: "A8",
    id: "27",
    status: "متأخر",
    terminal: "3",
  },
  {
    arrivalTime: "15:20",
    departureTime: "12:30",
    destination: "كولومبوس",
    duration: "2 س و50 د",
    flightCode: "OS1234",
    gate: "B19",
    id: "28",
    status: "في الموعد",
    terminal: "1",
  },
  {
    arrivalTime: "20:15",
    departureTime: "18:00",
    destination: "ميلووكي",
    duration: "2 س و15 د",
    flightCode: "SN5678",
    gate: "C22",
    id: "29",
    status: "في الموعد",
    terminal: "2",
  },
  {
    arrivalTime: "21:30",
    departureTime: "19:15",
    destination: "ممفيس",
    duration: "2 س و15 د",
    flightCode: "TP9012",
    gate: "D6",
    id: "30",
    status: "في الموعد",
    terminal: "3",
  },
];
