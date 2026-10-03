"use client";

import { Button } from "@coss/ui/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
import { KeyIcon, PlusIcon } from "lucide-react";

interface OAuthEmptyProps {
  onNewClick: () => void;
}

export function OAuthEmpty({ onNewClick }: OAuthEmptyProps) {
  return (
    <Empty className="rounded-xl border border-dashed py-8 md:py-12">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <KeyIcon />
        </EmptyMedia>
        <EmptyTitle>لا عملاء تفويض الوصول</EmptyTitle>
        <EmptyDescription>
          لقد قمت بإنشاء أي عملاء تفويض الوصول حتى الآن. إنشاء واحد للبدء.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={onNewClick}>
          <PlusIcon />
          جديد
        </Button>
      </EmptyContent>
    </Empty>
  );
}
