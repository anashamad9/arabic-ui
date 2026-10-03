import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>منزلق عمودي</Label>
      <div className="flex h-40 justify-center">
        <Slider
          aria-label="منزلق عمودي"
          defaultValue={[5]}
          max={10}
          orientation="vertical"
        />
      </div>
    </div>
  );
}
