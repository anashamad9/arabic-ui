"use client";

import { Avatar, AvatarFallback } from "@coss/ui/components/avatar";
import { Button } from "@coss/ui/components/button";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import { Input } from "@coss/ui/components/input";
import { Label } from "@coss/ui/components/label";
import { Switch } from "@coss/ui/components/switch";
import { Textarea } from "@coss/ui/components/textarea";
import { KeyIcon } from "lucide-react";

export interface OAuthClientFormDefaults {
  clientName?: string;
  purpose?: string;
  redirectUri?: string;
  usePkce?: boolean;
  websiteUrl?: string;
}

interface OAuthClientFormFieldsProps {
  defaultValues?: OAuthClientFormDefaults;
  includeClientName?: boolean;
}

export function OAuthClientFormFields({
  defaultValues,
  includeClientName = true,
}: OAuthClientFormFieldsProps) {
  return (
    <>
      {includeClientName && (
        <Field>
          <FieldLabel>اسم العميل</FieldLabel>
          <Input
            defaultValue={defaultValues?.clientName}
            name="clientName"
            placeholder="تطبيق تفويض الوصول"
            type="text"
          />
        </Field>
      )}

      <Field>
        <FieldLabel>الغرض</FieldLabel>
        <Textarea
          defaultValue={defaultValues?.purpose}
          name="purpose"
          placeholder="اشرح ما هو عميل تفويض الوصول هذا وكيف سيتم استخدامه"
          rows={3}
        />
        <FieldDescription>
          يرجى توضيح كيف وماذا سيتم استخدام عميل تفويض الوصول هذا. هذا يساعدنا
          على مراجعة طلبك والموافقة عليه.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>إعادة توجيه URI</FieldLabel>
        <Input
          defaultValue={defaultValues?.redirectUri}
          name="redirectUri"
          placeholder="https://example.com/callback"
          type="url"
        />
        <FieldDescription>
          عنوان رابط حيث سيتم إعادة توجيه المستخدمين بعد التفويض.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>موقع الويب رابط</FieldLabel>
        <Input
          defaultValue={defaultValues?.websiteUrl}
          name="websiteUrl"
          placeholder="https://example.com"
          type="url"
        />
        <FieldDescription>
          For development, you can use a localhost URL (e.g.
          http://localhost:3000).
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>
          <Switch defaultChecked={defaultValues?.usePkce} />
          استخدام PKCE
        </FieldLabel>
        <FieldDescription>
          يضيف Proof Key for الكود Exchange طبقة إضافية من الأمان للعملاء
          العامين مثل تطبيقات الهاتف المحمول أو تطبيقات الصفحة الواحدة.
        </FieldDescription>
      </Field>

      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarFallback className="text-xl">
            <KeyIcon className="size-5 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <Label className="text-sm">الشعار</Label>
          <div className="flex items-center gap-2">
            <Button size="sm" type="button" variant="outline">
              تحميل الشعار
            </Button>
            <Button size="sm" type="button" variant="ghost">
              إزالة
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
