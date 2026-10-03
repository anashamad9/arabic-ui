import { ComplianceDocuments } from "./compliance-documents";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function ComplianceSettingsPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="الامتثال">
          <AppHeaderDescription>
            قم بتنزيل وإدارة مستندات الامتثال الخاصة بك
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <ComplianceDocuments />
    </>
  );
}
