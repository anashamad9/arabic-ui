import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  return (
    <Label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
      <Checkbox defaultChecked />
      <div className="flex flex-col gap-1">
        <p>تمكين الإشعارات</p>
        <p className="text-muted-foreground text-xs">
          يمكنك تمكين الإشعارات أو تعطيلها في أي وقت.
        </p>
      </div>
    </Label>
  );
}
