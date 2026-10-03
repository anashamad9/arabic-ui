import { DatabaseIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">قواعد البيانات</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Select defaultValue="1">
            <SelectTrigger
              aria-label="اختر قاعدة بيانات"
              className="relative gap-2 ps-9"
              id="select-database"
            >
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50">
                <DatabaseIcon aria-hidden="true" size={16} />
              </div>
              <SelectValue placeholder="اختر قاعدة بيانات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">أوريون</SelectItem>
              <SelectItem value="2">سيجما</SelectItem>
              <SelectItem value="3">دورادو</SelectItem>
            </SelectContent>
          </Select>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
