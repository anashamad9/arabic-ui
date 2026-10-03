import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>الإدخال مع بداية الوظيفة الإضافية</Label>
      <div className="flex rounded-md shadow-xs">
        <span className="-z-10 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-muted-foreground text-sm">
          https://
        </span>
        <Input
          className="-ms-px rounded-s-none shadow-none"
          id={id}
          placeholder="غوغل.com"
          type="text"
        />
      </div>
    </div>
  );
}
