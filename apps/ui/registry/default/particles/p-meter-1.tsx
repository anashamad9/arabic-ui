import {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@/registry/default/ui/meter";

export default function Particle() {
  return (
    <Meter value={75}>
      <div className="flex items-center justify-between gap-2">
        <MeterLabel>استخدام التخزين</MeterLabel>
        <MeterValue />
      </div>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
