"use client";

import {
  type ColumnDef,
  columnFacetingFeature,
  columnFilteringFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  type FilterFn,
  flexRender,
  type Row,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  ChevronDownIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleXIcon,
  Columns3Icon,
  EllipsisIcon,
  FilterIcon,
  ListFilterIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/registry/default/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/default/ui/alert-dialog";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/registry/default/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
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

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "نشط" | "غير نشط" | "قيد الانتظار";
  balance: number;
};

const features = tableFeatures({
  columnFilteringFeature,
  columnFacetingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  facetedUniqueValues: createFacetedUniqueValues(),
  filteredRowModel: createFilteredRowModel(),
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

// Custom filter function for multi-column searching
const multiColumnFilterFn: FilterFn<typeof features, Item> = (
  row,
  _columnId,
  filterValue,
) => {
  const searchableRowContent =
    `${row.original.name} ${row.original.email}`.toLowerCase();
  const searchTerm = (filterValue ?? "").toLowerCase();
  return searchableRowContent.includes(searchTerm);
};

const statusFilterFn: FilterFn<typeof features, Item> = (
  row,
  columnId,
  filterValue: string[],
) => {
  if (!filterValue?.length) return true;
  const status = row.getValue(columnId) as string;
  return filterValue.includes(status);
};

const columns: ColumnDef<typeof features, Item>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="تحديد الصف"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="تحديد الكل"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    id: "select",
    size: 28,
  },
  {
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
    enableHiding: false,
    filterFn: multiColumnFilterFn,
    header: "الاسم",
    size: 180,
  },
  {
    accessorKey: "email",
    header: "البريد الإلكتروني",
    size: 220,
  },
  {
    accessorKey: "location",
    cell: ({ row }) => (
      <div>
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
    header: "الموقع",
    size: 180,
  },
  {
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === "غير نشط" &&
            "bg-muted-foreground/60 text-primary-foreground",
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
    filterFn: statusFilterFn,
    header: "الحالة",
    size: 100,
  },
  {
    accessorKey: "performance",
    header: "أداء أداء الأداء",
  },
  {
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("ar", {
        currency: "USD",
        style: "currency",
      }).format(amount);
      return formatted;
    },
    header: "الرصيد",
    size: 120,
  },
  {
    cell: ({ row }) => <RowActions row={row} />,
    enableHiding: false,
    header: () => <span className="sr-only">الإجراءات</span>,
    id: "actions",
    size: 60,
  },
];

export default function Component() {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/users-01_fertyx.json",
      );
      const data = await res.json();
      setData(data);
    }
    fetchPosts();
  }, []);

  const handleDeleteRows = () => {
    const selectedRows = table.getSelectedRowModel().rows;
    const updatedData = data.filter(
      (item) => !selectedRows.some((row) => row.original.id === item.id),
    );
    setData(updatedData);
    table.resetRowSelection();
  };

  const table = useTable(
    {
      columns,
      data,
      enableSortingRemoval: false,
      features,
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
        sorting: [
          {
            desc: false,
            id: "name",
          },
        ],
      },
    },
    (state) => ({
      columnFilters: state.columnFilters,
      columnVisibility: state.columnVisibility,
      pagination: state.pagination,
      rowSelection: state.rowSelection,
      sorting: state.sorting,
    }),
  );

  // Get unique status values
  const uniqueStatusValues = useMemo(() => {
    const statusColumn = table.getColumn("status");

    if (!statusColumn) return [];

    const values = Array.from(statusColumn.getFacetedUniqueValues().keys());

    return values.sort();
  }, [table.getColumn]);

  // Get counts for each status
  const statusCounts = useMemo(() => {
    const statusColumn = table.getColumn("status");
    if (!statusColumn) return new Map();
    return statusColumn.getFacetedUniqueValues();
  }, [table]);

  const selectedStatuses = useMemo(() => {
    const filterValue = table.getColumn("status")?.getFilterValue() as string[];
    return filterValue ?? [];
  }, [table]);

  const handleStatusChange = (checked: boolean, value: string) => {
    const filterValue = table.getColumn("status")?.getFilterValue() as string[];
    const newFilterValue = filterValue ? [...filterValue] : [];

    if (checked) {
      newFilterValue.push(value);
    } else {
      const index = newFilterValue.indexOf(value);
      if (index > -1) {
        newFilterValue.splice(index, 1);
      }
    }

    table
      .getColumn("status")
      ?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Filter by name or email */}
          <div className="relative">
            <Input
              aria-label="تصفية حسب الاسم أو البريد الإلكتروني"
              className={cn(
                "peer min-w-60 ps-9",
                Boolean(table.getColumn("name")?.getFilterValue()) && "pe-9",
              )}
              id={`${id}-input`}
              onChange={(e) =>
                table.getColumn("name")?.setFilterValue(e.target.value)
              }
              placeholder="تصفية حسب الاسم أو البريد الإلكتروني ..."
              ref={inputRef}
              type="text"
              value={
                (table.getColumn("name")?.getFilterValue() ?? "") as string
              }
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <ListFilterIcon aria-hidden="true" size={16} />
            </div>
            {Boolean(table.getColumn("name")?.getFilterValue()) && (
              <button
                aria-label="فلتر واضح"
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => {
                  table.getColumn("name")?.setFilterValue("");
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
                type="button"
              >
                <CircleXIcon aria-hidden="true" size={16} />
              </button>
            )}
          </div>
          {/* Filter by status */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <FilterIcon
                  aria-hidden="true"
                  className="-ms-1 opacity-60"
                  size={16}
                />
                الحالة
                {selectedStatuses.length > 0 && (
                  <span className="-me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
                    {selectedStatuses.length}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto min-w-36 p-3">
              <div className="space-y-3">
                <div className="font-medium text-muted-foreground text-xs">
                  عوامل التصفية
                </div>
                <div className="space-y-3">
                  {uniqueStatusValues.map((value, i) => (
                    <div className="flex items-center gap-2" key={value}>
                      <Checkbox
                        checked={selectedStatuses.includes(value)}
                        id={`${id}-${i}`}
                        onCheckedChange={(checked: boolean) =>
                          handleStatusChange(checked, value)
                        }
                      />
                      <Label
                        className="flex grow justify-between gap-2 font-normal"
                        htmlFor={`${id}-${i}`}
                      >
                        {value}{" "}
                        <span className="ms-2 text-muted-foreground text-xs">
                          {statusCounts.get(value)}
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          {/* Toggle columns visibility */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Columns3Icon
                  aria-hidden="true"
                  className="-ms-1 opacity-60"
                  size={16}
                />
                عرض
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>تبديل الأعمدة</DropdownMenuLabel>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      checked={column.getIsVisible()}
                      className="capitalize"
                      key={column.id}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                      onSelect={(event) => event.preventDefault()}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-3">
          {/* Delete button */}
          {table.getSelectedRowModel().rows.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="ms-auto" variant="outline">
                  <TrashIcon
                    aria-hidden="true"
                    className="-ms-1 opacity-60"
                    size={16}
                  />
                  حذف
                  <span className="-me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
                    {table.getSelectedRowModel().rows.length}
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                  <div
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                  >
                    <CircleAlertIcon className="opacity-80" size={16} />
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle>هل أنت متأكد تماما؟</AlertDialogTitle>
                    <AlertDialogDescription>
                      لا يمكن التراجع عن هذا الإجراء. سيؤدي ذلك إلى حذف دائم{" "}
                      {table.getSelectedRowModel().rows.length} محدّد{" "}
                      {table.getSelectedRowModel().rows.length === 1
                        ? "row"
                        : "rows"}
                      .
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteRows}>
                    حذف
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {/* Add user button */}
          <Button className="ms-auto" variant="outline">
            <PlusIcon
              aria-hidden="true"
              className="-ms-1 opacity-60"
              size={16}
            />
            إضافة مستخدم
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-md border bg-background">
        <Table className="table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="hover:bg-transparent" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="h-11"
                      key={header.id}
                      style={{ width: `${header.getSize()}px` }}
                    >
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <div
                          className={cn(
                            header.column.getCanSort() &&
                              "flex h-full cursor-pointer select-none items-center justify-between gap-2",
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                          onKeyDown={(e) => {
                            // Enhanced keyboard handling for sorting
                            if (
                              header.column.getCanSort() &&
                              (e.key === "إدخال" || e.key === " ")
                            ) {
                              e.preventDefault();
                              header.column.getToggleSortingHandler()?.(e);
                            }
                          }}
                          tabIndex={header.column.getCanSort() ? 0 : undefined}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: (
                              <ChevronUpIcon
                                aria-hidden="true"
                                className="shrink-0 opacity-60"
                                size={16}
                              />
                            ),
                            desc: (
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="shrink-0 opacity-60"
                                size={16}
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="last:py-0" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  لا توجد نتائج.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-8">
        {/* Results per page */}
        <div className="flex items-center gap-3">
          <Label className="max-sm:sr-only" htmlFor={id}>
            الصفوف في الصفحة
          </Label>
          <Select
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
            value={table.state.pagination.pageSize.toString()}
          >
            <SelectTrigger className="w-fit whitespace-nowrap" id={id}>
              <SelectValue placeholder="اختر عدد النتائج" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
              {[5, 10, 25, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Page number information */}
        <div className="flex grow justify-end whitespace-nowrap text-muted-foreground text-sm">
          <p
            aria-live="polite"
            className="whitespace-nowrap text-muted-foreground text-sm"
          >
            <span className="text-foreground">
              {table.state.pagination.pageIndex *
                table.state.pagination.pageSize +
                1}
              -
              {Math.min(
                Math.max(
                  table.state.pagination.pageIndex *
                    table.state.pagination.pageSize +
                    table.state.pagination.pageSize,
                  0,
                ),
                table.getRowCount(),
              )}
            </span>{" "}
            من{" "}
            <span className="text-foreground">
              {table.getRowCount().toString()}
            </span>
          </p>
        </div>

        {/* Pagination buttons */}
        <div>
          <Pagination>
            <PaginationContent>
              {/* First page button */}
              <PaginationItem>
                <Button
                  aria-label="انتقل إلى الصفحة الأولى"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.firstPage()}
                  size="icon"
                  variant="outline"
                >
                  <ChevronFirstIcon aria-hidden="true" size={16} />
                </Button>
              </PaginationItem>
              {/* Previous page button */}
              <PaginationItem>
                <Button
                  aria-label="الانتقال إلى الصفحة السابقة"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.previousPage()}
                  size="icon"
                  variant="outline"
                >
                  <ChevronLeftIcon
                    className="rtl:rotate-180"
                    aria-hidden="true"
                    size={16}
                  />
                </Button>
              </PaginationItem>
              {/* Next page button */}
              <PaginationItem>
                <Button
                  aria-label="الانتقال إلى الصفحة التالية"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.nextPage()}
                  size="icon"
                  variant="outline"
                >
                  <ChevronRightIcon
                    className="rtl:rotate-180"
                    aria-hidden="true"
                    size={16}
                  />
                </Button>
              </PaginationItem>
              {/* Last page button */}
              <PaginationItem>
                <Button
                  aria-label="انتقل إلى الصفحة الأخيرة"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.lastPage()}
                  size="icon"
                  variant="outline"
                >
                  <ChevronLastIcon aria-hidden="true" size={16} />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        مثال على جدول أكثر تعقيدًا مصنوع من{" "}
        <a
          className="underline hover:text-foreground"
          href="https://tanstack.com/table"
          rel="noopener noreferrer"
          target="_blank"
        >
          جدول البيانات
        </a>
      </p>
    </div>
  );
}

function RowActions({ row: _row }: { row: Row<typeof features, Item> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end">
          <Button
            aria-label="تحرير البند"
            className="shadow-none"
            size="icon"
            variant="ghost"
          >
            <EllipsisIcon aria-hidden="true" size={16} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>تعديل</span>
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>إنشاء نسخة</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>أرشفة</span>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>المزيد</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>الانتقال إلى المشروع</DropdownMenuItem>
                <DropdownMenuItem>نقل إلى مجلد</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>خيارات متقدمة</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>مشاركة</DropdownMenuItem>
          <DropdownMenuItem>أضف للقائمة المفضلة</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <span>حذف</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
