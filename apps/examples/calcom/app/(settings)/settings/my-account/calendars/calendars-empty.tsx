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
import { CalendarIcon } from "lucide-react";

export function CalendarsEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CalendarIcon />
        </EmptyMedia>
        <EmptyTitle>لا تطبيقات التقويم</EmptyTitle>
        <EmptyDescription>
          لم تقم بعد بتوصيل أي تطبيقات تقويم. قم بتوصيل تطبيق تقويم للبدء.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">ربط التقويم الأول</Button>
      </EmptyContent>
    </Empty>
  );
}
