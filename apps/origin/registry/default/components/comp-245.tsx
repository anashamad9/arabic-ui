import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>شريط تمرير مع قيم مرجعية</Label>
      <div>
        <Slider
          aria-label="شريط تمرير مع قيم مرجعية"
          defaultValue={[15]}
          max={35}
          min={5}
        />
        <span
          aria-hidden="true"
          className="mt-4 flex w-full items-center justify-between gap-1 font-medium text-muted-foreground text-xs"
        >
          <span>5 جيجابايت</span>
          <span>20 جيجابايت</span>
          <span>35 جيجابايت</span>
        </span>
      </div>
    </div>
  );
}
