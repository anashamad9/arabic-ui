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

interface ApiKeysEmptyProps {
  onNewClick: () => void;
}

export function ApiKeysEmpty({ onNewClick }: ApiKeysEmptyProps) {
  return (
    <Empty className="rounded-xl border border-dashed py-8 md:py-12">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <KeyIcon />
        </EmptyMedia>
        <EmptyTitle>إنشاء أول مفتاح واجهة برمجية الخاص بك</EmptyTitle>
        <EmptyDescription>
          تسمح مفاتيح واجهة برمجية للتطبيقات الأخرى بالتواصل مع كال
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
