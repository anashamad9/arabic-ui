import { Button } from "@coss/ui/components/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@coss/ui/shared/page-header";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
  title: "الصفحة غير موجودة",
};

export default function NotFound() {
  return (
    <div className="container mb-16 w-full flex-1 lg:mb-20">
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
                <ArrowLeftIcon
                  aria-hidden="true"
                  className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5 rtl:rotate-180"
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
