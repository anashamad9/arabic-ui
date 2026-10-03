import { useId } from "react";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label className="flex-1">المدى</Label>
      <div className="flex">
        <Input
          aria-label="الحد الأدنى للقيمة"
          className="flex-1 rounded-e-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id={`${id}-1`}
          placeholder="من"
          type="number"
        />
        <Input
          aria-label="القيمة القصوى"
          className="-ms-px flex-1 rounded-s-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id={`${id}-2`}
          placeholder="إلى"
          type="number"
        />
      </div>
    </div>
  );
}
