import { useId } from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>
        أوافق على{" "}
        <a
          className="underline"
          href="https://coss.com/origin"
          rel="noreferrer"
          target="_blank"
        >
          شروط الخدمة
        </a>
      </Label>
    </div>
  );
}
