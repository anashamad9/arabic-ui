import { useId } from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function Particle() {
  const id = useId();

  return (
    <div className="flex items-start gap-2">
      <Checkbox defaultChecked id={id} />
      <div className="flex flex-col gap-1">
        <Label htmlFor={id}>أوافق على الشروط والأحكام</Label>
        <p className="text-muted-foreground text-xs">
          بالنقر فوق مربع الاختيار هذا، فإنك توافق على الشروط والأحكام.
        </p>
      </div>
    </div>
  );
}
