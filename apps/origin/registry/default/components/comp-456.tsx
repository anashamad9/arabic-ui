import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/default/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Component({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1 ? true : undefined}
            aria-label="الانتقال إلى الصفحة السابقة"
            className={cn(
              "aria-disabled:pointer-events-none aria-disabled:opacity-50",
              buttonVariants({
                variant: "outline",
              }),
            )}
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
        <PaginationItem>
          <p aria-live="polite" className="text-muted-foreground text-sm">
            الصفحة <span className="text-foreground">{currentPage}</span> من{" "}
            <span className="text-foreground">{totalPages}</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages ? true : undefined}
            aria-label="الانتقال إلى الصفحة التالية"
            className={cn(
              "aria-disabled:pointer-events-none aria-disabled:opacity-50",
              buttonVariants({
                variant: "outline",
              }),
            )}
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
      </PaginationContent>
    </Pagination>
  );
}
