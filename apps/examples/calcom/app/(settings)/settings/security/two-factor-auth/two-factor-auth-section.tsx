"use client";

import { Badge } from "@coss/ui/components/badge";
import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { useState } from "react";
import { Disable2FADialog } from "./disable-2fa-dialog";
import { Enable2FADialog } from "./enable-2fa-dialog";

export function TwoFactorAuthSection() {
  const [enableDialogOpen, setEnableDialogOpen] = useState(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  return (
    <Card>
      <CardPanel>
        <div className="flex items-center justify-between gap-4">
          <CardFrameHeader className="p-0">
            <div className="flex flex-wrap items-center gap-2">
              <CardFrameTitle>مصادقة عاملين</CardFrameTitle>
              <Badge variant={enabled ? "success" : "warning"}>
                {enabled ? "مفعّل" : "معطّل"}
              </Badge>
            </div>
            <CardFrameDescription>
              أضف طبقة أمان إضافية إلى حسابك في حالة سرقة كلمة المرور الخاصة بك.
            </CardFrameDescription>
          </CardFrameHeader>
          {enabled ? (
            <Button
              onClick={() => setDisableDialogOpen(true)}
              variant="outline"
            >
              تعطيل
            </Button>
          ) : (
            <Button onClick={() => setEnableDialogOpen(true)}>تفعيل</Button>
          )}
        </div>

        <Enable2FADialog
          onEnabled={() => setEnabled(true)}
          onOpenChange={setEnableDialogOpen}
          open={enableDialogOpen}
        />

        <Disable2FADialog
          onDisabled={() => setEnabled(false)}
          onOpenChange={setDisableDialogOpen}
          open={disableDialogOpen}
        />
      </CardPanel>
    </Card>
  );
}
