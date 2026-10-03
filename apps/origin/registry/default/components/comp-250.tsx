import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>منزلق النطاق المزدوج</Label>
      <Slider
        aria-label="منزلق النطاق المزدوج"
        defaultValue={[25, 75]}
        step={10}
      />
    </div>
  );
}
