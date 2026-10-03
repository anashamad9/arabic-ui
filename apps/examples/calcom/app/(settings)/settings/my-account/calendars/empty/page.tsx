import { Button } from "@coss/ui/components/button";
import { Card, CardFrame, CardPanel } from "@coss/ui/components/card";
import { PlusIcon } from "lucide-react";
import { CalendarsEmpty } from "../calendars-empty";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function CalendarsEmptyPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="التقويمات">
          <AppHeaderDescription>
            تكوين كيفية تفاعل أنواع الأحداث مع التقويمات الخاصة بك
          </AppHeaderDescription>
        </AppHeaderContent>
        <AppHeaderActions>
          <Button variant="outline">
            <PlusIcon />
            إضافة تقويم
          </Button>
        </AppHeaderActions>
      </AppHeader>
      <CardFrame>
        <Card>
          <CardPanel className="p-0">
            <CalendarsEmpty />
          </CardPanel>
        </Card>
      </CardFrame>
    </>
  );
}
