import { FolderIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardFrame,
  CardFrameAction,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@/registry/default/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export default function Particle() {
  return (
    <CardFrame className="w-full">
      <CardFrameHeader>
        <CardFrameTitle>المشروع</CardFrameTitle>
        <CardFrameDescription>إدارة مشاريعك</CardFrameDescription>
        <CardFrameAction>
          <Button variant="outline">
            <PlusIcon />
            إضافة
          </Button>
        </CardFrameAction>
      </CardFrameHeader>
      <Card>
        <CardPanel>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderIcon />
              </EmptyMedia>
              <EmptyTitle>لا مشاريع حتى الآن</EmptyTitle>
              <EmptyDescription>ابدأ بإضافة مشروعك الأول.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardPanel>
      </Card>
    </CardFrame>
  );
}
