import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/default/ui/progress";

export default function Particle() {
  return (
    <Progress value={60}>
      <div className="flex items-center justify-between gap-2">
        <ProgressLabel>تصدير البيانات</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}
