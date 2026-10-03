import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrameDescription,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function BillingPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الفوترة">
          <AppHeaderDescription>
            إدارة جميع الأشياء الفواتير
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <Card>
          <CardPanel>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardFrameTitle>إدارة الفواتير</CardFrameTitle>
                <CardFrameDescription>
                  عرض وإدارة تفاصيل الفواتير الخاصة بك
                </CardFrameDescription>
              </div>
              <Button>
                بوابة الفوترة
                <ExternalLinkIcon aria-hidden="true" />
              </Button>
            </div>
          </CardPanel>
        </Card>

        <div className="my-2 text-center text-muted-foreground/72 text-sm">
          هل تحتاج إلى مساعدة؟{" "}
          <Link
            className="text-muted-foreground underline hover:text-foreground"
            href="#"
          >
            دعم الاتصال
          </Link>
        </div>
      </div>
    </>
  );
}
