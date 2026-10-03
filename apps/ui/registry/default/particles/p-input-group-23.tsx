"use client";

import { LoaderCircleIcon, MicIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [inputValue]);

  return (
    <InputGroup>
      <InputGroupAddon>
        {isLoading ? (
          <LoaderCircleIcon
            aria-label="جارٍ التحميل…"
            className="animate-spin"
            role="status"
          />
        ) : (
          <SearchIcon aria-hidden="true" />
        )}
      </InputGroupAddon>
      <InputGroupInput
        aria-label="بحث"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="ابحث…"
        type="search"
        value={inputValue}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="البحث الصوتي"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <MicIcon aria-hidden="true" />
          </TooltipTrigger>
          <TooltipPopup>البحث الصوتي</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
