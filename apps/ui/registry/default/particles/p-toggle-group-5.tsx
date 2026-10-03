import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@/registry/default/ui/toggle-group";

export default function Particle() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      orientation="vertical"
      variant="outline"
    >
      <ToggleGroupItem aria-label="تبديل الخط العريض" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator orientation="horizontal" />
      <ToggleGroupItem aria-label="تبديل الخط المائل" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator orientation="horizontal" />
      <ToggleGroupItem aria-label="تبديل التسطير" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
