"use client";

import { DownloadIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator, GroupText } from "@/registry/default/ui/group";
import { Spinner } from "@/registry/default/ui/spinner";
import { toastManager } from "@/registry/default/ui/toast";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const abortControllerRef = useRef<AbortController | null>(null);
  const infoToastIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isDownloading) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(99, prev + Math.round(Math.random() * 8 + 2)),
      );
    }, 300);

    return () => clearInterval(interval);
  }, [isDownloading]);

  async function handleDownload() {
    if (isDownloading) return;

    setIsDownloading(true);
    setProgress(0);
    abortControllerRef.current = new AbortController();

    infoToastIdRef.current = toastManager.add({
      description: "سيبدأ التنزيل بمجرد أن يكون جاهزًا.",
      title: "إصدار تقرير...",
      type: "info",
    });

    try {
      await new Promise<string>((resolve, reject) => {
        const shouldSucceed = Math.random() > 0.2;
        const timeoutId = setTimeout(() => {
          if (shouldSucceed) {
            resolve("تحميل كامل");
          } else {
            reject(new Error("فشل التحميل"));
          }
        }, 4000);

        abortControllerRef.current?.signal.addEventListener("abort", () => {
          clearTimeout(timeoutId);
          reject(new DOMException("ملغى", "AbortError"));
        });
      });
    } catch (err) {
      // Close info toast before showing error
      if (infoToastIdRef.current) {
        toastManager.close(infoToastIdRef.current);
        infoToastIdRef.current = null;
      }

      if (err instanceof DOMException && err.name === "AbortError") {
        // Cancelled
        toastManager.add({
          description: "تم إلغاء إنشاء التقارير.",
          title: "ملغى",
          type: "error",
        });
      } else {
        // Other errors
        toastManager.add({
          description: "يرجى المحاولة مرة أخرى في وقت لاحق.",
          title: "فشل في إنشاء تقرير",
          type: "error",
        });
      }
    } finally {
      setIsDownloading(false);
      setProgress(0);
      abortControllerRef.current = null;
      infoToastIdRef.current = null;
    }
  }

  function handleCancel() {
    abortControllerRef.current?.abort();
  }

  return (
    <TooltipProvider delay={0}>
      {isDownloading ? (
        <Group>
          <GroupText
            aria-live="polite"
            className="cursor-default gap-2"
            role="status"
          >
            <Spinner />
            <span
              aria-hidden="true"
              className="font-medium text-foreground tabular-nums"
            >
              {progress.toString().padStart(2, "\u2007")}%
            </span>
            <span className="sr-only">إصدار تقرير، {progress}% مكتمل</span>
          </GroupText>
          <GroupSeparator />
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  aria-label="إلغاء تحميل"
                  onClick={handleCancel}
                  size="icon"
                  variant="outline"
                />
              }
            >
              <XIcon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipPopup>إلغاء</TooltipPopup>
          </Tooltip>
        </Group>
      ) : (
        <Button onClick={handleDownload} variant="outline">
          <DownloadIcon aria-hidden="true" />
          تنزيل
        </Button>
      )}
    </TooltipProvider>
  );
}
