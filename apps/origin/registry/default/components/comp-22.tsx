import { useId } from "react";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>الإدخال مع زر</Label>
      <div className="flex gap-2">
        <Input
          className="flex-1"
          id={id}
          placeholder="البريد الإلكتروني"
          type="email"
        />
        <Button variant="outline">إرسال</Button>
      </div>
    </div>
  );
}
