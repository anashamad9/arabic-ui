"use client";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "@coss/ui/components/alert-dialog";
import { Button } from "@coss/ui/components/button";
import { Card, CardPanel } from "@coss/ui/components/card";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { EditOAuthClientDialog } from "./edit-oauth-client-dialog";
import { NewOAuthClientDialogRoot } from "./new-oauth-client-dialog";
import type { OAuthClientItem } from "./oauth-clients-list";
import { OAuthClientsList } from "./oauth-clients-list";
import { OAuthEmpty } from "./oauth-empty";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

const initialMockClients: OAuthClientItem[] = [
  {
    clientId: "cl_mock_1",
    clientSecret: "cs_mock_1",
    id: "1",
    name: "تكامل سلاك",
    purpose: "مزامنة التوافر وحجز الاجتماعات من سلاك",
    redirectUri: "https://example.com/callback",
    status: "approved",
    usePkce: false,
    websiteUrl: "https://example.com",
  },
  {
    clientId: "cl_mock_2",
    clientSecret: "cs_mock_2",
    id: "2",
    name: "كال موبايل التطبيق",
    purpose: "التطبيق المحمول الأصلي لدائرة الرقابة الداخلية والروبوت",
    redirectUri: "http://localhost:3000/callback",
    status: "pending",
    usePkce: true,
    websiteUrl: "http://localhost:3000",
  },
];

export function OAuthPageContent() {
  const [clients, setClients] = useState<OAuthClientItem[]>(initialMockClients);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<OAuthClientItem | null>(
    null,
  );
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [clientToRemove, setClientToRemove] = useState<OAuthClientItem | null>(
    null,
  );

  const hasClients = clients.length > 0;

  function handleEditClick(client: OAuthClientItem) {
    setEditingClient(client);
    setEditDialogOpen(true);
  }

  function handleRemoveClick(client: OAuthClientItem) {
    setClientToRemove(client);
    setRemoveDialogOpen(true);
  }

  function handleRemoveConfirm() {
    if (clientToRemove) {
      setClients((prev) => prev.filter((c) => c.id !== clientToRemove.id));
      setClientToRemove(null);
    }
    setRemoveDialogOpen(false);
  }

  function handleRemoveDialogOpenChange(open: boolean) {
    if (!open) {
      setClientToRemove(null);
    }
    setRemoveDialogOpen(open);
  }

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="عملاء تفويض الوصول">
          <AppHeaderDescription>
            إنشاء وإدارة عملاء تفويض الوصول لتكاملات الجهات الخارجية
          </AppHeaderDescription>
        </AppHeaderContent>
        {hasClients && (
          <AppHeaderActions>
            <Button onClick={() => setCreateDialogOpen(true)} variant="outline">
              <PlusIcon />
              جديد
            </Button>
          </AppHeaderActions>
        )}
      </AppHeader>
      {hasClients ? (
        <Card>
          <CardPanel className="p-0">
            <OAuthClientsList
              clients={clients}
              onEditClick={handleEditClick}
              onRemoveClick={handleRemoveClick}
            />
          </CardPanel>
        </Card>
      ) : (
        <OAuthEmpty onNewClick={() => setCreateDialogOpen(true)} />
      )}

      <NewOAuthClientDialogRoot
        onOpenChange={setCreateDialogOpen}
        open={createDialogOpen}
      />

      <EditOAuthClientDialog
        client={editingClient}
        onOpenChange={setEditDialogOpen}
        open={editDialogOpen}
      />

      <AlertDialog
        onOpenChange={handleRemoveDialogOpenChange}
        open={removeDialogOpen}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>إزالة عميل تفويض الوصول</AlertDialogTitle>
            <AlertDialogDescription>
              هل أنت متأكد من أنك تريد إزالة عميل تفويض الوصول هذا؟ لا يمكن
              التراجع عن هذا الإجراء.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              إلغاء
            </AlertDialogClose>
            <AlertDialogClose
              onClick={handleRemoveConfirm}
              render={<Button variant="destructive">إزالة</Button>}
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </>
  );
}
