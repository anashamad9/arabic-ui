import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="عموم الكاميرا حتى"
              className="col-start-2"
              size="icon"
              variant="outline"
            >
              <ChevronUpIcon aria-hidden="true" size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs" side="top">
            عموم أعلى
            <kbd className="ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
              ⌘T
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="كاميرا عموم اليسار"
              className="col-start-1"
              size="icon"
              variant="outline"
            >
              <ChevronLeftIcon
                className="rtl:rotate-180"
                aria-hidden="true"
                size={16}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs" side="left">
            بان
            <kbd className="ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
              ⌘L
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div aria-hidden="true" className="flex items-center justify-center">
        <CircleIcon className="opacity-60" size={16} />
      </div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button aria-label="كاميرا عموم الحق" size="icon" variant="outline">
              <ChevronRightIcon
                className="rtl:rotate-180"
                aria-hidden="true"
                size={16}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs" side="right">
            عموم الحق
            <kbd className="ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
              ⌘R
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="كاميرا عموم أسفل"
              className="col-start-2"
              size="icon"
              variant="outline"
            >
              <ChevronDownIcon aria-hidden="true" size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs" side="bottom">
            عموم القاع
            <kbd className="ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
              ⌘B
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
