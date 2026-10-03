import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@coss/ui/shared/page-header";
import { RiArrowLeftLine } from "@remixicon/react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";

export const metadata: Metadata = {
  description: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
  title: "الصفحة غير موجودة",
};

export default function NotFound() {
  return (
    <div className="container w-full">
      <PageHeader>
        <PageHeaderHeading>الصفحة غير موجودة</PageHeaderHeading>
        <PageHeaderDescription>
          الصفحة التي تبحث عنها لا توجد أو ربما تم نقلها.
        </PageHeaderDescription>
        <div className="mt-4">
          <Button
            className="group"
            render={
              <Link href="/">
                <RiArrowLeftLine
                  aria-hidden="true"
                  className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
                />
                العودة إلى المنزل
              </Link>
            }
            size="lg"
          />
        </div>
      </PageHeader>
    </div>
  );
}
