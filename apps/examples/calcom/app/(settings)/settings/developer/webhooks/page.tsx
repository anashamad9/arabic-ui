import { WebhooksEmpty } from "./webhooks-empty";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

export default function WebhooksSettingsPage() {
  const webhooks: { id: string; url: string; events: string }[] = [];

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="خطافات الويب">
          <AppHeaderDescription>
            تلقي بيانات الاجتماع في الوقت الحقيقي عندما يحدث شيء ما في كال.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <WebhooksEmpty webhooks={webhooks} />
    </>
  );
}
