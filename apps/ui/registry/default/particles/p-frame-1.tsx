import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/registry/default/ui/frame";

export default function Particle() {
  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle>رأس القسم</FrameTitle>
        <FrameDescription>وصف موجز عن القسم</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="font-semibold text-sm">عنوان القسم</h2>
        <p className="text-muted-foreground text-sm">وصف القسم</p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">التذييل</p>
      </FrameFooter>
    </Frame>
  );
}
