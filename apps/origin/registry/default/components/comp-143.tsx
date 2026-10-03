import { useId } from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        aria-describedby={`${id}-description`}
        className="order-1"
        id={id}
      />
      <div className="grid grow gap-2">
        <Label htmlFor={id}>
          التسمية{" "}
          <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
            (تسمية فرعية)
          </span>
        </Label>
        <p className="text-muted-foreground text-xs" id={`${id}-description`}>
          يمكنك استخدام مربع الاختيار هذا مع تسمية ووصف.
        </p>
      </div>
    </div>
  );
}
