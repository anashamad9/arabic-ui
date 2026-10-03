import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/registry/default/ui/frame";
import { Separator } from "@/registry/default/ui/separator";

export default function Particle() {
  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle>رأس القسم</FrameTitle>
        <FrameDescription>وصف موجز عن القسم</FrameDescription>
      </FrameHeader>
      <FramePanel className="p-0">
        <div className="p-5">
          <h2 className="font-semibold text-sm">لوحة مكدسة</h2>
          <p className="text-muted-foreground text-sm">وصف القسم</p>
        </div>
        <Separator />
        <div className="p-5">
          <h2 className="font-semibold text-sm">لوحة مكدسة</h2>
          <p className="text-muted-foreground text-sm">وصف القسم</p>
        </div>
      </FramePanel>
    </Frame>
  );
}
