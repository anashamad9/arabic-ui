"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@coss/ui/components/avatar";
import { Button } from "@coss/ui/components/button";
import { Field, FieldDescription, FieldLabel } from "@coss/ui/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@coss/ui/components/input-group";
import { Label } from "@coss/ui/components/label";
import { Toggle } from "@coss/ui/components/toggle";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import { useCopyToClipboard } from "@coss/ui/hooks/use-copy-to-clipboard";
import {
  BoldIcon,
  CheckIcon,
  CopyIcon,
  ItalicIcon,
  LinkIcon,
} from "lucide-react";
import { FieldGrid } from "@/components/particles/field-grid";

export function TeamProfileFields() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarImage
            alt="شعار الفريق"
            src="https://pbs.twimg.com/profile_images/1994776674391457792/7utKOMi6_400x400.jpg"
          />
          <AvatarFallback className="text-xl">الذكاء الاصطناعي</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <Label className="text-sm">شعار الفريق</Label>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              تحميل الشعار
            </Button>
            <Button size="sm" variant="ghost">
              إزالة
            </Button>
          </div>
        </div>
      </div>

      <FieldGrid className="gap-4">
        <Field>
          <FieldLabel>اسم الفريق</FieldLabel>
          <InputGroup>
            <InputGroupInput defaultValue="شركة المثال" />
          </InputGroup>
        </Field>

        <Field>
          <FieldLabel>عنوان رابط</FieldLabel>
          <InputGroup className="opacity-100! has-disabled:cursor-not-allowed has-disabled:bg-muted has-disabled:text-muted-foreground has-disabled:*:cursor-not-allowed">
            <InputGroupAddon>
              <InputGroupText>localhost:3000/team/</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              aria-label="تعيين عنوان رابط لفريقك"
              className="*:[input]:ps-0! has-disabled:*:[input]:cursor-not-allowed"
              defaultValue="acme-inc"
            />
          </InputGroup>
        </Field>
      </FieldGrid>

      <Field className="md:w-1/2">
        <FieldLabel>هوية الفريق</FieldLabel>
        <InputGroup className="opacity-100! has-disabled:cursor-not-allowed has-disabled:bg-muted has-disabled:text-muted-foreground has-disabled:*:cursor-not-allowed">
          <InputGroupInput
            aria-label="هوية الفريق"
            className="has-disabled:*:[input]:cursor-not-allowed"
            defaultValue="47"
            disabled
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label="نسخة من بطاقة الفريق"
                    onClick={() => copyToClipboard("47")}
                    size="icon-xs"
                    variant="ghost"
                  />
                }
              >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
              </TooltipTrigger>
              <TooltipPopup>
                <p>{isCopied ? "تم النسخ!" : "نسخ إلى الحافظة"}</p>
              </TooltipPopup>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <Field>
        <FieldLabel>حول المشروع</FieldLabel>
        <InputGroup>
          <InputGroupTextarea placeholder="أخبرنا عن فريقك..." />
          <InputGroupAddon
            align="block-start"
            className="gap-1 rounded-t-lg border-b bg-muted/72 p-2!"
          >
            <Toggle aria-label="تبديل الخط العريض" size="sm">
              <BoldIcon aria-hidden="true" />
            </Toggle>
            <Toggle aria-label="تبديل الخط المائل" size="sm">
              <ItalicIcon aria-hidden="true" />
            </Toggle>
            <Button aria-label="الرابط" size="icon-sm" variant="ghost">
              <LinkIcon aria-hidden="true" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          بضع جمل حول فريقك. سيظهر هذا في صفحة رابط فريقك.
        </FieldDescription>
      </Field>
    </div>
  );
}
