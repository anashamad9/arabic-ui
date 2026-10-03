import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameDescription,
  CardFrameFooter,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { ActivityIcon } from "lucide-react";
import Link from "next/link";
import { NewWebhookFormFields } from "./new-webhook-form-fields";
import { WebhookTestSection } from "./webhook-test-section";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function NewWebhookPage() {
  return (
    <>
      <AppHeader>
        <AppHeaderContent title="جديد خطاف الويب">
          <AppHeaderDescription>
            تلقي بيانات الاجتماع في الوقت الحقيقي عندما يحدث شيء ما في كال.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        <CardFrame>
          <Card className="rounded-b-none!">
            <CardPanel>
              <NewWebhookFormFields />
            </CardPanel>
          </Card>
          <CardFrameFooter className="flex justify-end gap-2">
            <Button
              render={<Link href="/settings/developer/webhooks" />}
              variant="outline"
            >
              إلغاء
            </Button>
            <Button>حفظ</Button>
          </CardFrameFooter>
        </CardFrame>

        <CardFrame>
          <CardFrameHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardFrameTitle>اختبار خطاف الويب</CardFrameTitle>
                <CardFrameDescription>
                  يرجى اختبار ping قبل الإنشاء.
                </CardFrameDescription>
              </div>
              <Button size="sm" variant="outline">
                <ActivityIcon />
                اختبار Ping
              </Button>
            </div>
          </CardFrameHeader>
          <Card>
            <CardPanel>
              <WebhookTestSection />
            </CardPanel>
          </Card>
        </CardFrame>
      </div>
    </>
  );
}
