import { EllipsisIcon, FilesIcon, FilmIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
      >
        <FilesIcon aria-hidden="true" className="-ms-1 opacity-60" size={16} />
        ملفات
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
      >
        <FilmIcon aria-hidden="true" className="-ms-1 opacity-60" size={16} />
        الوسائط
      </Button>
      <Button
        aria-label="القائمة"
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
        variant="outline"
      >
        <EllipsisIcon aria-hidden="true" size={16} />
      </Button>
    </div>
  );
}
