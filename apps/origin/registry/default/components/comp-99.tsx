"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Component() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button aria-label="إضافة عنصر جديد" size="icon" variant="outline">
            <PlusIcon aria-hidden="true" size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">التلميح</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
