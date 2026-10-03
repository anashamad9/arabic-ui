import { Card, CardFrame, CardPanel } from "@coss/ui/components/card";
import { CopyLink } from "./copy-link";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function TeamProfileNoPermissionsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الملف الشخصي">
          <AppHeaderDescription>
            إدارة الإعدادات لملف تعريف فريقك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <CardFrame>
        <Card>
          <CardPanel>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-semibold text-sm">اسم المنظمة</p>
                <p className="text-muted-foreground text-sm">كال</p>
              </div>

              <div>
                <p className="font-semibold text-sm">عنوان رابط</p>
                <div className="flex items-center gap-1">
                  <p className="text-muted-foreground text-sm">
                    https://cal.com/org/cal-com
                  </p>
                  <CopyLink />
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm">حول المشروع</p>
                <p className="text-muted-foreground text-sm">صناع الوقت.</p>
              </div>
            </div>
          </CardPanel>
        </Card>
      </CardFrame>
    </>
  );
}
