"use client";

import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Switch } from "@coss/ui/components/switch";
import { toastManager } from "@coss/ui/components/toast";
import { useState } from "react";

export function ImpersonationToggle() {
  const [enabled, setEnabled] = useState(false);

  function handleToggle(checked: boolean) {
    setEnabled(checked);
    toastManager.add({
      title: "تم تحديث الملف الشخصي بنجاح",
      type: "success",
    });
  }

  return (
    <Field>
      <FieldLabel className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
        <Switch checked={enabled} onCheckedChange={handleToggle} />
        <span>انتحال شخصية المستخدم</span>
        <FieldDescription className="col-start-2 font-normal">
          يسمح لفريق الدعم لدينا بتسجيل الدخول مؤقتًا لمساعدتنا في حل أي مشكلات
          تبلغ عنها إلينا بسرعة.
        </FieldDescription>
      </FieldLabel>
    </Field>
  );
}
