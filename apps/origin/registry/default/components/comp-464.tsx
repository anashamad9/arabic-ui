import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/default/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number;
};

export default function Component({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* First page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1 ? true : undefined}
            aria-label="انتقل إلى الصفحة الأولى"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}
            role={currentPage === 1 ? "link" : undefined}
          >
            <ChevronFirstIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Previous page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1 ? true : undefined}
            aria-label="الانتقال إلى الصفحة السابقة"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}
            role={currentPage === 1 ? "link" : undefined}
          >
            <ChevronLeftIcon
              className="rtl:rotate-180"
              aria-hidden="true"
              size={16}
            />
          </PaginationLink>
        </PaginationItem>

        {/* Page number select */}
        <PaginationItem>
          <Select aria-label="اختر صفحة" defaultValue={String(currentPage)}>
            <SelectTrigger className="w-fit whitespace-nowrap" id="select-page">
              <SelectValue placeholder="اختر صفحة" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <SelectItem key={page} value={String(page)}>
                    الصفحة {page}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
        </PaginationItem>

        {/* Next page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages ? true : undefined}
            aria-label="الانتقال إلى الصفحة التالية"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages
                ? undefined
                : `#/page/${currentPage + 1}`
            }
            role={currentPage === totalPages ? "link" : undefined}
          >
            <ChevronRightIcon
              className="rtl:rotate-180"
              aria-hidden="true"
              size={16}
            />
          </PaginationLink>
        </PaginationItem>

        {/* Last page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages ? true : undefined}
            aria-label="انتقل إلى الصفحة الأخيرة"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages ? undefined : `#/page/${totalPages}`
            }
            role={currentPage === totalPages ? "link" : undefined}
          >
            <ChevronLastIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
