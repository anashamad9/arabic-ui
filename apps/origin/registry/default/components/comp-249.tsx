import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>شريط التمرير مع التسميات وتلميح الأدوات</Label>
      <div>
        <span
          aria-hidden="true"
          className="mb-3 flex w-full items-center justify-between gap-2 font-medium text-muted-foreground text-xs"
        >
          <span>منخفضة</span>
          <span>عالية</span>
        </span>
        <Slider
          aria-label="شريط التمرير مع التسميات وتلميح الأدوات"
          defaultValue={[50]}
          showTooltip={true}
          step={10}
        />
      </div>
    </div>
  );
}
