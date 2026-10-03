import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="تعيين عنوان رابط الخاص بك"
        className="*:[input]:ps-0!"
        placeholder="COSS UI/Arabic"
        type="text"
      />
      <InputGroupAddon>https://</InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Popover>
          <PopoverTrigger
            openOnHover
            render={
              <Button
                aria-label="المزيد من المعلومات"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <InfoIcon />
          </PopoverTrigger>
          <PopoverPopup side="top" tooltipStyle>
            <p>عنوان رابط لموقع الويب الخاص بك</p>
          </PopoverPopup>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
}
