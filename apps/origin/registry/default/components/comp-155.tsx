import { useId } from "react";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";

export default function Component() {
  const id = useId();
  return (
    <RadioGroup className="gap-6" defaultValue="1">
      <div className="flex items-start gap-2">
        <RadioGroupItem
          aria-describedby={`${id}-1-description`}
          id={`${id}-1`}
          value="1"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-1`}>
            صغير{" "}
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
      <div className="flex items-start gap-2">
        <RadioGroupItem
          aria-describedby={`${id}-2-description`}
          id={`${id}-2`}
          value="2"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-2`}>
            كبير{" "}
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
