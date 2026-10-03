"use client";

import { DownloadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function Particle() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!isGenerating) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(99, prev + Math.round(Math.random() * 8 + 2)),
      );
    }, 300);

    return () => clearInterval(interval);
  }, [isGenerating]);

  async function handleDownload() {
    if (isGenerating) return;

    setIsGenerating(true);
    setProgress(0);
    abortControllerRef.current = new AbortController();

    try {
      await toastManager.promise(
        new Promise<string>((resolve, reject) => {
          const shouldSucceed = Math.random() > 0.2;
          const timeoutId = setTimeout(() => {
            if (shouldSucceed) {
              resolve("تقرير جاهز");
            } else {
              reject(new Error("جيل فاشل"));
            }
          }, 4000);

          abortControllerRef.current?.signal.addEventListener("abort", () => {
            clearTimeout(timeoutId);
            reject(new DOMException("ملغى", "AbortError"));
          });
        }),
        {
          error: (err: Error) => {
            if (err.name === "AbortError") {
              return {
                actionProps: undefined,
                description: "تم إلغاء إنشاء التقارير.",
                title: "ملغى",
                type: "info" as const,
              };
            }
            return {
              actionProps: undefined,
              description: "يرجى المحاولة مرة أخرى في وقت لاحق.",
              title: "فشل في إنشاء تقرير",
            };
          },
          loading: {
            actionProps: {
              children: "إلغاء",
              onClick: () => abortControllerRef.current?.abort(),
            },
            description: "سيبدأ التنزيل بمجرد أن يكون جاهزًا.",
            title: "إصدار تقرير...",
          },
          success: () => ({
            actionProps: undefined,
            description: "الملف الخاص بك هو تحميل الآن.",
            title: "بدء التنزيل",
          }),
        },
      );
    } finally {
      setIsGenerating(false);
      setProgress(0);
      abortControllerRef.current = null;
    }
  }

  return (
    <Button disabled={isGenerating} onClick={handleDownload} variant="outline">
      {isGenerating ? (
        <>
          تحميل...{" "}
          <span className="tabular-nums">
            {progress.toString().padStart(2, "\u2007")}%
          </span>
        </>
      ) : (
        <>
          <DownloadIcon />
          تنزيل
        </>
      )}
    </Button>
  );
}
