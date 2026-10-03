import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>منزلق بسيط</Label>
      <Slider aria-label="منزلق بسيط" defaultValue={[25]} />
    </div>
  );
}
