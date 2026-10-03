"use client";

import { Field, FieldLabel } from "@coss/ui/components/field";
import { Switch } from "@coss/ui/components/switch";
import { toastManager } from "@coss/ui/components/toast";
import { useState } from "react";

export function PushNotificationsToggle() {
  const [enabled, setEnabled] = useState(false);

  function handleToggle(checked: boolean) {
    setEnabled(checked);
    toastManager.add({
      title: checked ? "تمكين الإشعارات بنجاح" : "تعطيل الإخطارات بنجاح",
      type: "success",
    });
  }

  return (
    <Field>
      <FieldLabel>
        <Switch checked={enabled} onCheckedChange={handleToggle} />
        السماح بإشعارات المتصفح
      </FieldLabel>
    </Field>
  );
}
