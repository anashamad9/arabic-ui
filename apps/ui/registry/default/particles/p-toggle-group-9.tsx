import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <TooltipProvider>
      <ToggleGroup defaultValue={["bold"]} multiple>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToggleGroupItem aria-label="تبديل الخط العريض" value="bold" />
            }
          >
            <BoldIcon />
          </TooltipTrigger>
          <TooltipPopup>عريض</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToggleGroupItem aria-label="تبديل الخط المائل" value="italic" />
            }
          >
            <ItalicIcon />
          </TooltipTrigger>
          <TooltipPopup>مائل</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToggleGroupItem aria-label="تبديل التسطير" value="underline" />
            }
          >
            <UnderlineIcon />
          </TooltipTrigger>
          <TooltipPopup>تسطير</TooltipPopup>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  );
}
