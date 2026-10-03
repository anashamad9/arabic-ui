import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import { SettingsToggle } from "@/components/particles";

export default function ImpersonationSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="انتحال الشخصية">
          <AppHeaderDescription>
            إعدادات لإدارة انتحال شخصية المستخدم
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <SettingsToggle
        description="يسمح لفريق الدعم لدينا بتسجيل الدخول مؤقتًا لمساعدتنا في حل أي مشكلات تبلغ عنها إلينا بسرعة."
        title="انتحال شخصية المستخدم"
      />
    </>
  );
}
