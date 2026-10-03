import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Toggle } from "@/registry/default/ui/toggle";

export default function Particle() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="تبديل الخط العريض" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="تبديل الخط المائل" variant="outline">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="تبديل التسطير" variant="outline">
        <UnderlineIcon />
      </Toggle>
    </div>
  );
}
