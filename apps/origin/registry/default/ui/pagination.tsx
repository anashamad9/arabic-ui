import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/default/lib/utils";
import { type Button, buttonVariants } from "@/registry/default/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="تصنيف: ترقيم الصفحات"
      className={cn("mx-auto flex w-full justify-center", className)}
      data-slot="pagination"
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      data-slot="pagination-content"
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  isDisabled?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          size,
          variant: isActive ? "outline" : "ghost",
        }),
        className,
      )}
      data-active={isActive}
      data-slot="pagination-link"
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="الانتقال إلى الصفحة السابقة"
      className={cn("gap-1 px-2.5 sm:pe-4", className)}
      size="default"
      {...props}
    >
      <ChevronLeftIcon className="rtl:rotate-180" size={16} />
      <span>السابق</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="الانتقال إلى الصفحة التالية"
      className={cn("gap-1 px-2.5 sm:ps-4", className)}
      size="default"
      {...props}
    >
      <span>التالي</span>
      <ChevronRightIcon className="rtl:rotate-180" size={16} />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn("flex size-9 items-center justify-center", className)}
      data-slot="pagination-ellipsis"
      {...props}
    >
      <MoreHorizontalIcon size={16} />
      <span className="sr-only">المزيد من الصفحات</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
