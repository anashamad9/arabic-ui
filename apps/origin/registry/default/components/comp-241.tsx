import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>منزلق معطل</Label>
      <Slider aria-label="منزلق معطل" defaultValue={[25]} disabled />
    </div>
  );
}
