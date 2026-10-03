import { DatabaseIcon } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "أوريون", value: "orion" },
  { label: "سيجما", value: "sigma" },
  { label: "دورادو", value: "dorado" },
];

export default function Particle() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>
            قواعد البيانات
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Select defaultValue="orion" items={items}>
            <SelectTrigger aria-label="اختر قاعدة بيانات" size="sm">
              <DatabaseIcon />
              <SelectValue />
            </SelectTrigger>
            <SelectPopup>
              {items.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
