import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameFooter,
  CardPanel,
} from "@coss/ui/components/card";
import { GeneralSettingsFields } from "./general-settings-form";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

export default function GeneralSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="جنرال جنرال لواء">
          <AppHeaderDescription>
            إدارة الإعدادات للغتك والمنطقة الزمنية
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <Card className="rounded-b-none!">
            <CardPanel>
              <GeneralSettingsFields />
            </CardPanel>
          </Card>

          <CardFrameFooter className="flex justify-end">
            <Button>تحديث</Button>
          </CardFrameFooter>
        </CardFrame>

        <SettingsToggle
          defaultChecked
          description="السماح للحضور بحجزك من خلال حجوزات المجموعات الديناميكية"
          title="روابط المجموعة الديناميكية"
        />

        <SettingsToggle
          defaultChecked
          description="السماح لمحركات البحث بالوصول إلى المحتوى العام الخاص بك"
          title="السماح بفهرسة محرك البحث"
        />

        <SettingsToggle
          defaultChecked
          description="البريد الإلكتروني الملخص الشهري للفرق"
          title="البريد الإلكتروني الملخص الشهري"
        />

        <SettingsToggle
          description="عند التمكين ، يجب على أي شخص يحاول حجز الأحداث باستخدام عنوان بريدك الإلكتروني التحقق من امتلاكه عبر رمز لمرة واحدة أو تسجيل الدخول لمنع انتحال الشخصية"
          title="منع انتحال الشخصية على الحجوزات"
        />
      </div>
    </>
  );
}
