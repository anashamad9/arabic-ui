"use client";

import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameAction,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { useState } from "react";
import { CopyableField } from "../../developer/oauth/copyable-field";
import { ConfigureDirectorySyncDialog } from "./configure-directory-sync-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import {
  DirectorySyncTeamMapping,
  type TeamDirectoryRow,
} from "./directory-sync-team-mapping";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";

const MOCK_SCIM_BASE_URL =
  "http://localhost:3000/api/scim/v2.0/7e676752-55b4-4cdc-8f45-9a82e060df12";
const MOCK_SCIM_BEARER_TOKEN = "lsM4BTx47bqaL70530CSJg";

const INITIAL_TEAM_ROWS: TeamDirectoryRow[] = [
  { groupNames: [], id: "1", teamName: "فريق الأحلام" },
  { groupNames: [], id: "2", teamName: "فريق آخر" },
];

export function DirectorySyncPageContent() {
  const [configureOpen, setConfigureOpen] = useState(false);
  const [scimConfigured, setScimConfigured] = useState(false);

  return (
    <>
      <AppHeader>
        <AppHeaderContent title="مزامنة الدليل">
          <AppHeaderDescription>
            تزويد المستخدمين وإلغاء توفيرهم مع مزود الدليل الخاص بك.
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-4">
        {!scimConfigured ? (
          <Card>
            <CardPanel>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardFrameDescription>
                    تكوين موفر هوية للبدء مع مزامنة الهوية.
                  </CardFrameDescription>
                </div>
                <Button onClick={() => setConfigureOpen(true)} type="button">
                  تكوين
                </Button>
              </div>
            </CardPanel>
          </Card>
        ) : (
          <>
            <CardFrame>
              <CardFrameHeader>
                <CardFrameTitle>أوراق اعتماد مزامنة الهوية</CardFrameTitle>
                <CardFrameDescription>
                  سيطلب موفر الهوية الخاص بك المعلومات التالية لتكوين مزامنة
                  الهوية. اتبع الإرشادات لإنهاء الإعداد.
                </CardFrameDescription>
              </CardFrameHeader>
              <Card className="rounded-b-none!">
                <CardPanel className="flex flex-col gap-6">
                  <CopyableField
                    aria-label="رابط قاعدة مزامنة الهوية"
                    label="رابط قاعدة مزامنة الهوية"
                    value={MOCK_SCIM_BASE_URL}
                  />
                  <CopyableField
                    aria-label="رمز حامل مزامنة الهوية"
                    label="رمز مزامنة الهوية Bearer"
                    value={MOCK_SCIM_BEARER_TOKEN}
                  />
                </CardPanel>
              </Card>
            </CardFrame>

            <CardFrame>
              <CardFrameHeader>
                <CardFrameTitle>الفرق</CardFrameTitle>
                <CardFrameAction>
                  <CreateTeamDialog />
                </CardFrameAction>
              </CardFrameHeader>
              <Card className="w-full rounded-b-none!">
                <CardPanel className="p-0">
                  <DirectorySyncTeamMapping initialRows={INITIAL_TEAM_ROWS} />
                </CardPanel>
              </Card>
            </CardFrame>
          </>
        )}
      </div>
      <ConfigureDirectorySyncDialog
        onConfigured={() => setScimConfigured(true)}
        onOpenChange={setConfigureOpen}
        open={configureOpen}
      />
    </>
  );
}
