"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import type { ComponentType } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const tooltipHandle = TooltipCreateHandle<ComponentType>();

const BoldContent = () => {
  return <span>جعل النص غامق</span>;
};

const ItalicContent = () => {
  return <span>تطبيق التنسيق المائل على النص</span>;
};

const UnderlineContent = () => {
  return <span>أسفل النص</span>;
};

export default function Particle() {
  return (
    <TooltipProvider>
      <ToggleGroup defaultValue={["bold"]} multiple>
        <TooltipTrigger
          className="after:absolute after:start-full after:h-full after:w-1"
          handle={tooltipHandle}
          payload={BoldContent}
          render={
            <ToggleGroupItem aria-label="تبديل الخط العريض" value="bold" />
          }
        >
          <BoldIcon aria-hidden="true" />
        </TooltipTrigger>
        <TooltipTrigger
          className="after:absolute after:start-full after:h-full after:w-1"
          handle={tooltipHandle}
          payload={ItalicContent}
          render={
            <ToggleGroupItem aria-label="تبديل الخط المائل" value="italic" />
          }
        >
          <ItalicIcon aria-hidden="true" />
        </TooltipTrigger>
        <TooltipTrigger
          className="after:absolute after:start-full after:h-full after:w-1"
          handle={tooltipHandle}
          payload={UnderlineContent}
          render={
            <ToggleGroupItem aria-label="تبديل التسطير" value="underline" />
          }
        >
          <UnderlineIcon aria-hidden="true" />
        </TooltipTrigger>
      </ToggleGroup>

      <Tooltip handle={tooltipHandle}>
        {({ payload: Payload }) => (
          <TooltipPopup>{Payload !== undefined && <Payload />}</TooltipPopup>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
