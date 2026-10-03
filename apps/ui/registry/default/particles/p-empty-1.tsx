import { BookIcon, RouteIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export default function Particle() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RouteIcon />
        </EmptyMedia>
        <EmptyTitle>لا توجد اجتماعات قادمة</EmptyTitle>
        <EmptyDescription>قم بإنشاء اجتماع للبدء.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">إنشاء اجتماع</Button>
          <Button size="sm" variant="outline">
            <BookIcon />
            عرض المستندات
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
