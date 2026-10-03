import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";

export default function Component() {
  const id = useId();
  return (
    <RadioGroup className="gap-2" defaultValue="1">
      {/* Radio card #1 */}
      <div className="relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50">
        <RadioGroupItem
          aria-describedby={`${id}-1-description`}
          className="order-1 after:absolute after:inset-0"
          id={`${id}-1`}
          value="1"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-1`}>
            التسمية{" "}
            <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
              (تسمية فرعية)
            </span>
          </Label>
          <p
            className="text-muted-foreground text-xs"
            id={`${id}-1-description`}
          >
            يمكنك استخدام هذه البطاقة مع عنوان ووصف.
          </p>
        </div>
      </div>
      {/* Radio card #2 */}
      <div className="relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50">
        <RadioGroupItem
          aria-describedby={`${id}-2-description`}
          className="order-1 after:absolute after:inset-0"
          id={`${id}-2`}
          value="2"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-2`}>
            التسمية{" "}
            <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
              (تسمية فرعية)
            </span>
          </Label>
          <p
            className="text-muted-foreground text-xs"
            id={`${id}-2-description`}
          >
            يمكنك استخدام هذه البطاقة مع عنوان ووصف.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
