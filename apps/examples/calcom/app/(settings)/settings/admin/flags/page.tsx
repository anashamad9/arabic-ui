import { FlagAdminList } from "./flag-admin-list";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function AdminFlagsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الأعلام ميزة">
          <AppHeaderDescription>
            إدارة killswitches والأعلام ميزة لمثيلك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <FlagAdminList />
    </>
  );
}
