import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export default function Particle() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Menu>
            <MenuTrigger
              render={
                <Button
                  className="-m-1.5 text-muted-foreground"
                  size="icon-sm"
                  variant="ghost"
                />
              }
            >
              <BreadcrumbEllipsis />
            </MenuTrigger>
            <MenuPopup align="start">
              <MenuItem render={<Link href="/docs" />}>التوثيق</MenuItem>
              <MenuItem render={<Link href="/particles" />}>الأمثلة</MenuItem>
            </MenuPopup>
          </Menu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/docs/" />}>
            المكونات
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>مسار التنقل</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
