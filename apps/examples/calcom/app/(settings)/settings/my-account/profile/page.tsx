import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameFooter,
  CardPanel,
} from "@coss/ui/components/card";
import { ProfileFields } from "./profile-form";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { DangerZone } from "@/components/particles/danger-zone";

export default function ProfileSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الملف الشخصي">
          <AppHeaderDescription>
            إدارة الإعدادات لملفك الشخصي كال
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <Card className="rounded-b-none!">
            <CardPanel>
              <ProfileFields />
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>

        <DangerZone
          buttonLabel="Delete account"
          description="كن حذرا. لا يمكن التراجع عن حذف الحساب."
        />
      </div>
    </>
  );
}
