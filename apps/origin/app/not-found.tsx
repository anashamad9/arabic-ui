import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import PageHeader from "@/components/page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader className="mb-6" title="404">
        الصفحة التي تبحث عنها غير موجودة أو لم تعد موجودة.
      </PageHeader>
      <div className="text-center">
        <Button asChild className="rounded-full">
          <Link href="/origin">تصفح المكونات</Link>
        </Button>
      </div>
    </>
  );
}
