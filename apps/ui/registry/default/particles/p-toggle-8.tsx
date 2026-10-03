"use client";

import { BookmarkIcon } from "lucide-react";
import { useRef, useState } from "react";
import { anchoredToastManager } from "@/registry/default/ui/toast";
import { Toggle } from "@/registry/default/ui/toggle";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  const [bookmarked, setBookmarked] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const toastIdRef = useRef<string | null>(null);
  const toastTimeout = 2000;

  function handleToggleChange(pressed: boolean) {
    setBookmarked(pressed);

    if (toastIdRef.current) {
      anchoredToastManager.close(toastIdRef.current);
      toastIdRef.current = null;
    }

    if (pressed && toggleRef.current) {
      toastIdRef.current = anchoredToastManager.add({
        data: {
          tooltipStyle: true,
        },
        positionerProps: {
          anchor: toggleRef.current,
        },
        timeout: toastTimeout,
        title: "إشارة مرجعية!",
        type: "success",
      });
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <div ref={toggleRef}>
            <Toggle
              aria-label={bookmarked ? "إزالة المرجعية" : "ضع علامة على هذا"}
              onPressedChange={handleToggleChange}
              pressed={bookmarked}
            >
              <BookmarkIcon aria-hidden="true" />
            </Toggle>
          </div>
        }
      />
      <TooltipPopup>
        <p>{bookmarked ? "إزالة المرجعية" : "ضع علامة على هذا"}</p>
      </TooltipPopup>
    </Tooltip>
  );
}
