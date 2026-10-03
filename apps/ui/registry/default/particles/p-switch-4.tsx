import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function Particle() {
  const id = useId();

  return (
    <Label
      className="flex items-center gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
      htmlFor={id}
    >
      <div className="flex flex-col gap-1">
        <p>تمكين الإشعارات</p>
        <p className="text-muted-foreground text-xs">
          يمكنك تمكين الإشعارات أو تعطيلها في أي وقت.
        </p>
      </div>
      <Switch
        className="[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3)]"
        defaultChecked
        id={id}
      />
    </Label>
  );
}
