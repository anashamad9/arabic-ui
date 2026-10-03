"use client";

import {
  Card,
  CardFrame,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
import { KeyRoundIcon } from "lucide-react";
import {
  type OAuthClientItem,
  OAuthClientsList,
} from "@/app/(settings)/settings/developer/oauth/oauth-clients-list";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

const STATUS_GROUPS = ["pending", "rejected", "approved"] as const;

const STATUS_LABELS: Record<(typeof STATUS_GROUPS)[number], string> = {
  approved: "المعتمدة",
  pending: "قيد الانتظار",
  rejected: "مرفوض",
};

import { useState } from "react";

const OAUTH_CLIENTS: OAuthClientItem[] = [
  {
    clientId: "cl_admin_1",
    clientSecret: "cs_admin_1",
    id: "1",
    name: "أخرى",
    status: "pending",
  },
  {
    clientId: "cl_admin_2",
    clientSecret: "cs_admin_2",
    id: "2",
    name: "اختبار اختبار الاختبار",
    status: "pending",
  },
];

export default function AdminOAuthPage() {
  const [clients, setClients] = useState(OAUTH_CLIENTS);

  const grouped = STATUS_GROUPS.map((status) => ({
    clients: clients.filter((c) => c.status === status),
    label: STATUS_LABELS[status],
    status,
  }));

  function handleEditClick(_client: OAuthClientItem) {
    // TODO: open edit dialog
  }

  function handleRemoveClick(client: OAuthClientItem) {
    setClients((prev) => prev.filter((c) => c.id !== client.id));
  }

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="عملاء تفويض الوصول">
          <AppHeaderDescription>
            إدارة طلبات عملاء تفويض الوصول والموافقة عليها
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        {grouped.map((group) => (
          <CardFrame key={group.status}>
            <CardFrameHeader>
              <CardFrameTitle>{group.label}</CardFrameTitle>
            </CardFrameHeader>
            <Card>
              <CardPanel className="p-0">
                {group.clients.length > 0 ? (
                  <OAuthClientsList
                    clients={group.clients}
                    onEditClick={handleEditClick}
                    onRemoveClick={handleRemoveClick}
                  />
                ) : (
                  <Empty className="py-0">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <KeyRoundIcon />
                      </EmptyMedia>
                      <EmptyTitle>
                        لا {group.label.toLowerCase()} عملاء
                      </EmptyTitle>
                      <EmptyDescription>
                        لا يوجد {group.label.toLowerCase()} تقديمات عملاء تفويض
                        الوصول.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                )}
              </CardPanel>
            </Card>
          </CardFrame>
        ))}
      </div>
    </>
  );
}
