import { useId } from "react";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Particle() {
  const id = useId();
  return (
    <Textarea
      className="read-only:bg-muted"
      defaultValue="هذه المساحة للقراءة فقط"
      id={id}
      readOnly
    />
  );
}
