import { Slider } from "@/registry/default/ui/slider";

export default function Particle() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="mb-3 flex w-full items-center justify-between gap-2 font-medium text-muted-foreground text-xs"
      >
        <span>منخفضة</span>
        <span>عالية</span>
      </div>
      <Slider
        aria-label="مستوى الكثافة من منخفض إلى مرتفع"
        defaultValue={50}
        step={10}
      />
    </div>
  );
}
