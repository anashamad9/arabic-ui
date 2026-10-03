"use client";

import { CheckIcon, TerminalIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { useCopy } from "@/hooks/use-copy";

const CopyLayout = ({ command }: { command: string | undefined }) => {
  const { copied, copy } = useCopy();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label={copied ? "تم النسخ" : "انسخ الأمر"}
            className="inline-flex items-center gap-1 text-sm hover:underline max-sm:hidden"
            disabled={copied}
            onClick={() => copy(command || "")}
            type="button"
          >
            {copied ? (
              <CheckIcon className="size-4 text-emerald-600" />
            ) : (
              <TerminalIcon className="size-4 text-muted-foreground" />
            )}
            أمر سطر الأوامر
          </button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-muted-foreground text-xs">
          انقر لنسخ
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyLayout;
