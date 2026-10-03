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
import { toastManager } from "@coss/ui/components/toast";
import { useState } from "react";
import { AddDelegationCredentialDialog } from "./add-delegation-credential-dialog";
import { DelegationCredentialEmpty } from "./delegation-credential-empty";
import { DelegationCredentialList } from "./delegation-credential-list";
import {
  DEFAULT_CALENDAR_SCOPE_URL,
  type DelegationCredentialItem,
  generateDelegationSubjectId,
} from "./delegation-credential-types";
import {
  EditDelegationCredentialDialog,
  type EditDelegationCredentialSavePayload,
} from "./edit-delegation-credential-dialog";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

const DELEGATION_CREDENTIAL_DESCRIPTION =
  "يتيح لك اعتماد التفويض إدارة الوصول إلى تقويمات غوغل مساحة العمل لمؤسستك.";

export function DelegationCredentialPageContent() {
  const [credentials, setCredentials] = useState<DelegationCredentialItem[]>(
    [],
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingCredential, setEditingCredential] =
    useState<DelegationCredentialItem | null>(null);
  const [enabledById, setEnabledById] = useState<Record<string, boolean>>({});
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [credentialToRemove, setCredentialToRemove] =
    useState<DelegationCredentialItem | null>(null);

  const hasItems = credentials.length > 0;

  function handleCreate(data: {
    domain: string;
    platformLabel: string;
    platformValue: string;
    serviceAccountKeyJson: string;
  }) {
    const id = `dc_${Date.now().toString(36)}`;
    const domainBadge = data.domain.trim().replace(/^https?:\/\//i, "");
    setCredentials((prev) => {
      if (prev.length >= 1) return prev;
      const newCredential: DelegationCredentialItem = {
        domain: domainBadge || "—",
        id,
        platformLabel: data.platformLabel,
        platformValue: data.platformValue,
        scopeUrl: DEFAULT_CALENDAR_SCOPE_URL,
        subjectId: generateDelegationSubjectId(),
        serviceAccountKeyJson: data.serviceAccountKeyJson || undefined,
      };
      setEnabledById((enabled) => ({
        ...enabled,
        [newCredential.id]: true,
      }));
      return [...prev, newCredential];
    });
  }

  function handleEditRequest(item: DelegationCredentialItem) {
    setEditingCredential(item);
    setEditDialogOpen(true);
  }

  function handleEditDialogOpenChange(open: boolean) {
    setEditDialogOpen(open);
    if (!open) {
      setEditingCredential(null);
    }
  }

  function handleSaveEdit(
    id: string,
    data: EditDelegationCredentialSavePayload,
  ) {
    const domainBadge = data.domain.trim().replace(/^https?:\/\//i, "");
    setCredentials((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              domain: domainBadge || "—",
              platformLabel: data.platformLabel,
              platformValue: data.platformValue,
            }
          : c,
      ),
    );
    toastManager.add({
      title: "تحديث بيانات اعتماد التفويض بنجاح",
      type: "success",
    });
  }

  function handleEnabledChange(id: string, checked: boolean) {
    setEnabledById((prev) => ({ ...prev, [id]: checked }));
    toastManager.add({
      title: "تحديث بيانات اعتماد التفويض بنجاح",
      type: "success",
    });
  }

  function handleRemoveRequest(item: DelegationCredentialItem) {
    setCredentialToRemove(item);
    setRemoveDialogOpen(true);
  }

  function handleRemoveDialogOpenChange(open: boolean) {
    setRemoveDialogOpen(open);
  }

  function handleRemoveDialogOpenChangeComplete(open: boolean) {
    if (!open) {
      setCredentialToRemove(null);
    }
  }

  function handleRemoveConfirm() {
    if (!credentialToRemove) return;
    setCredentials((prev) =>
      prev.filter((c) => c.id !== credentialToRemove.id),
    );
    setRemoveDialogOpen(false);
  }

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="اعتماد الوفود">
          <AppHeaderDescription>
            {DELEGATION_CREDENTIAL_DESCRIPTION}
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>

      {hasItems ? (
        <Card>
          <CardPanel className="p-0">
            <DelegationCredentialList
              credentials={credentials}
              enabledById={enabledById}
              onEditRequest={handleEditRequest}
              onEnabledChange={handleEnabledChange}
              onRemoveRequest={handleRemoveRequest}
            />
          </CardPanel>
        </Card>
      ) : (
        <DelegationCredentialEmpty
          description={DELEGATION_CREDENTIAL_DESCRIPTION}
          onAddClick={() => setDialogOpen(true)}
        />
      )}

      <AddDelegationCredentialDialog
        onCreate={handleCreate}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
      />

      <EditDelegationCredentialDialog
        credential={editingCredential}
        onOpenChange={handleEditDialogOpenChange}
        onSave={handleSaveEdit}
        open={editDialogOpen}
      />

      <AlertDialog
        onOpenChange={handleRemoveDialogOpenChange}
        onOpenChangeComplete={handleRemoveDialogOpenChangeComplete}
        open={removeDialogOpen}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>حذف بيانات تفويض</AlertDialogTitle>
            <AlertDialogDescription>
              {credentialToRemove
                ? `هل أنت متأكد من أنك تريد إزالة بيانات الاعتماد "${credentialToRemove.subjectId}" ؟ لا يمكن التراجع عن هذا الإجراء.`
                : null}
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
