import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        تحوم حولي
      </TooltipTrigger>
      <TooltipPopup>تلميح مفيد</TooltipPopup>
    </Tooltip>
  );
}
