import { useId } from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";

export default function Component() {
  const id = useId();

  const items = [
    { defaultChecked: true, label: "الاثنين", value: "1" },
    { defaultChecked: true, label: "الثلاثاء", value: "2" },
    { label: "الأربعاء", value: "3" },
    { defaultChecked: true, label: "الخميس", value: "4" },
    { defaultChecked: true, label: "الجمعة", value: "5" },
    { label: "السبت", value: "6" },
    { disabled: true, label: "الأحد", value: "7" },
  ];

  return (
    <fieldset className="space-y-4">
      <legend className="font-medium text-foreground text-sm leading-none">
        أيام الأسبوع
      </legend>
      <div className="flex gap-1.5">
        {items.map((item) => (
          <label
            className="relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border border-input text-center shadow-xs outline-none transition-[color,box-shadow] has-data-disabled:cursor-not-allowed has-data-[state=checked]:border-primary has-focus-visible:border-ring has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground has-data-disabled:opacity-50 has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
            key={`${id}-${item.value}`}
          >
            <Checkbox
              className="sr-only after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
              id={`${id}-${item.value}`}
              value={item.value}
            />
            <span aria-hidden="true" className="font-medium text-sm">
              {item.label[0]}
            </span>
            <span className="sr-only">{item.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
