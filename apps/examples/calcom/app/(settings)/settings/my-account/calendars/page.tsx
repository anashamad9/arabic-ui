import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { PlusIcon } from "lucide-react";
import { CalendarsDemoForm } from "./calendars-demo-form";
import { CheckForConflictsCard } from "./check-for-conflicts-card";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function CalendarsSettingsPage() {
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

      <div className="flex flex-col gap-4">
        <CardFrame>
          <CardFrameHeader>
            <CardFrameTitle>إضافة إلى التقويم</CardFrameTitle>
            <CardFrameDescription>
              حدد مكان إضافة الأحداث عند حجزك.
            </CardFrameDescription>
          </CardFrameHeader>

          <Card className="rounded-b-none!">
            <CardPanel>
              <CalendarsDemoForm />
            </CardPanel>
          </Card>
        </CardFrame>

        <CheckForConflictsCard />
      </div>
    </>
  );
}
