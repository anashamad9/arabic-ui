"use client";

import { Button } from "@coss/ui/components/button";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import type { WebhookItem } from "./webhooks-list-content";
import { WebhooksListContent } from "./webhooks-list-content";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

interface WebhooksPageContentProps {
  webhooks: WebhookItem[];
}

export function WebhooksPageContent({ webhooks }: WebhooksPageContentProps) {
  const [selectedUserIds, _setSelectedUserIds] = useState<string[]>([]);

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="خطافات الويب">
          <AppHeaderDescription>
            تلقي بيانات الاجتماع في الوقت الحقيقي عندما يحدث شيء ما في كال.
          </AppHeaderDescription>
        </AppHeaderContent>
        <AppHeaderActions>
          <Button variant="outline">
            جديد
            <ChevronDownIcon />
          </Button>
        </AppHeaderActions>
      </AppHeader>
      <WebhooksListContent
        selectedUserIds={selectedUserIds}
        webhooks={webhooks}
      />
    </>
  );
}
