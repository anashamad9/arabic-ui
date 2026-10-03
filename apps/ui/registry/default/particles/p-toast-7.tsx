"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useRef } from "react";
import { useCopyToClipboard } from "@/registry/default/hooks/use-copy-to-clipboard";
import { Button } from "@/registry/default/ui/button";
import { anchoredToastManager } from "@/registry/default/ui/toast";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const toastTimeout = 2000;

  const { copyToClipboard, isCopied } = useCopyToClipboard({
    onCopy: () => {
      if (copyButtonRef.current) {
        anchoredToastManager.add({
          data: {
            tooltipStyle: true,
          },
          positionerProps: {
            anchor: copyButtonRef.current,
          },
          timeout: toastTimeout,
          title: "تم النسخ!",
        });
      }
    },
    timeout: toastTimeout,
  });

  function handleCopy() {
    const url = "https://coss.com";
    copyToClipboard(url);
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            aria-label="انسخ الرابط"
            disabled={isCopied}
            onClick={handleCopy}
            ref={copyButtonRef}
            size="icon"
            variant="outline"
          />
        }
      >
        {isCopied ? (
          <CheckIcon className="size-4" />
        ) : (
          <CopyIcon className="size-4" />
        )}
      </TooltipTrigger>
      <TooltipPopup>
        <p>نسخ إلى الحافظة</p>
      </TooltipPopup>
    </Tooltip>
  );
}
