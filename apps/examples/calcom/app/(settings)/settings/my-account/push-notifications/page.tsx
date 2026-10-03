import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

export default function PushNotificationsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="دفع الإخطارات">
          <AppHeaderDescription>
            تلقي الإخطارات الفورية عند قيام بوكر بإرسال حجز اجتماع فوري.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <SettingsToggle
        description="السماح بإشعارات المتصفح"
        title="تمكين إشعارات الدفع"
      />
    </>
  );
}
