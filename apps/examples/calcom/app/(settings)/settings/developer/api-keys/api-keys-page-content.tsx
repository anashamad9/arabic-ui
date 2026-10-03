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
import { ApiKeysEmpty } from "./api-keys-empty";
import type { ApiKeyItem } from "./api-keys-list";
import { ApiKeysList } from "./api-keys-list";
import { EditApiKeyDialog } from "./edit-api-key-dialog";
import { NewApiKeyDialog } from "./new-api-key-dialog";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

const initialMockApiKeys: ApiKeyItem[] = [
  {
    createdAt: "2025-11-15T10:30:00Z",
    expiresAt: null,
    id: "1",
    key: "cal_live_mock_key_1",
    neverExpires: true,
    note: "واجهة برمجية الإنتاج",
  },
  {
    createdAt: "2026-01-20T14:00:00Z",
    expiresAt: "2026-07-20T14:00:00Z",
    id: "2",
    key: "cal_live_mock_key_2",
    neverExpires: false,
    note: "اختبار التطوير",
  },
];

export function ApiKeysPageContent() {
  const [apiKeys, setApiKeys] = useState<ApiKeyItem[]>(initialMockApiKeys);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<ApiKeyItem | null>(null);
  const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
  const [keyToRevoke, setKeyToRevoke] = useState<ApiKeyItem | null>(null);

  const hasApiKeys = apiKeys.length > 0;

  function handleEditClick(apiKey: ApiKeyItem) {
    setEditingKey(apiKey);
    setEditDialogOpen(true);
  }

  function handleRemoveClick(apiKey: ApiKeyItem) {
    setKeyToRevoke(apiKey);
    setRevokeDialogOpen(true);
  }

  function handleRevokeConfirm() {
    if (keyToRevoke) {
      setApiKeys((prev) => prev.filter((k) => k.id !== keyToRevoke.id));
      setKeyToRevoke(null);
    }
    setRevokeDialogOpen(false);
  }

  function handleRevokeDialogOpenChange(open: boolean) {
    if (!open) {
      setKeyToRevoke(null);
    }
    setRevokeDialogOpen(open);
  }

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="مفاتيح واجهة برمجية">
          <AppHeaderDescription>
            إنشاء وإدارة مفاتيح واجهة برمجية للمصادقة باستخدام واجهة برمجة
            تطبيقات كال
          </AppHeaderDescription>
        </AppHeaderContent>
        {hasApiKeys && (
          <AppHeaderActions>
            <Button onClick={() => setCreateDialogOpen(true)} variant="outline">
              <PlusIcon />
              جديد
            </Button>
          </AppHeaderActions>
        )}
      </AppHeader>
      {hasApiKeys ? (
        <Card>
          <CardPanel className="p-0">
            <ApiKeysList
              apiKeys={apiKeys}
              onEditClick={handleEditClick}
              onRemoveClick={handleRemoveClick}
            />
          </CardPanel>
        </Card>
      ) : (
        <ApiKeysEmpty onNewClick={() => setCreateDialogOpen(true)} />
      )}

      <NewApiKeyDialog
        onOpenChange={setCreateDialogOpen}
        open={createDialogOpen}
      />

      <EditApiKeyDialog
        apiKey={editingKey}
        onOpenChange={setEditDialogOpen}
        open={editDialogOpen}
      />

      <AlertDialog
        onOpenChange={handleRevokeDialogOpenChange}
        open={revokeDialogOpen}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>
              قم بإزالة مفتاح واجهة برمجية هذا من حسابك بشكل دائم؟
            </AlertDialogTitle>
            <AlertDialogDescription>
              سيؤدي ذلك إلى حذف مفتاح واجهة برمجية بشكل دائم. ستفقد أي تطبيقات
              تستخدم هذا المفتاح إمكانية الوصول إلى حسابك على الفور. لا يمكن
              التراجع عن هذا الإجراء.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              إلغاء
            </AlertDialogClose>
            <AlertDialogClose
              onClick={handleRevokeConfirm}
              render={
                <Button variant="destructive">
                  إلغاء مفتاح واجهة برمجية هذا
                </Button>
              }
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </>
  );
}
