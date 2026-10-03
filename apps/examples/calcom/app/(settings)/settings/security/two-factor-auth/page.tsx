import { TwoFactorAuthSection } from "./two-factor-auth-section";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function TwoFactorAuthSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="المصادقة الثنائية">
          <AppHeaderDescription>
            قم بإعداد المصادقة الثنائية.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <TwoFactorAuthSection />
    </>
  );
}
