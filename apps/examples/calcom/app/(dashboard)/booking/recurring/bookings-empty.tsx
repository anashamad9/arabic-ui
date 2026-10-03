"use client";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
import { CalendarIcon } from "lucide-react";
import { BookingsListSkeleton } from "../booking-skeleton";
import { useLoadingState } from "@/hooks/use-loading-state";

const ARTIFICIAL_DELAY_MS = 300;

export function BookingsEmpty() {
  const showLoading = useLoadingState(ARTIFICIAL_DELAY_MS);

  if (showLoading) {
    return <BookingsListSkeleton />;
  }

  return (
    <Empty className="rounded-xl border border-dashed md:py-32">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CalendarIcon />
        </EmptyMedia>
        <EmptyTitle>لا توجد حجوزات متكررة</EmptyTitle>
        <EmptyDescription>
          لم يتم العثور على حجوزات متكررة. ستظهر سلسلة الحجز المتكررة هنا.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
