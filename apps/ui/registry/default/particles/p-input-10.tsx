"use client";

import { InfoIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function Particle() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <InputGroup className="[--radius-lg:9999px] [--radius:9999rem]">
      <Popover>
        <InputGroupAddon>
          <PopoverTrigger
            render={<Button size="icon-xs" variant="secondary" />}
          >
            <InfoIcon />
          </PopoverTrigger>
        </InputGroupAddon>
        <PopoverPopup
          align="start"
          alignOffset={-5}
          className="w-64"
          sideOffset={6}
        >
          <PopoverTitle className="text-sm">اتصالك غير آمن.</PopoverTitle>
          <PopoverDescription>
            يجب عليك عدم إدخال أي معلومات حساسة على هذا الموقع.
          </PopoverDescription>
        </PopoverPopup>
      </Popover>
      <InputGroupAddon className="ps-1.5 text-muted-foreground">
        https://
      </InputGroupAddon>
      <InputGroupInput
        aria-label="رابط"
        className="*:[input]:ps-1!"
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <Button
          onClick={() => setIsFavorite(!isFavorite)}
          size="icon-xs"
          variant="ghost"
        >
          <StarIcon
            className="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
            data-favorite={isFavorite}
          />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
