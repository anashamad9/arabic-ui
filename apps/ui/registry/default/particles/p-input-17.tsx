import { useId } from "react";
import { Input } from "@/registry/default/ui/input";

export default function Particle() {
  const id = useId();
  return (
    <Input
      className="read-only:bg-muted"
      defaultValue="هذا الحقل للقراءة فقط"
      id={id}
      readOnly
      type="text"
    />
  );
}
