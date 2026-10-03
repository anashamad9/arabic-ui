"use client";

import { CircleUserRoundIcon } from "lucide-react";
import { useFileUpload } from "@/registry/default/hooks/use-file-upload";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    });

  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="inline-flex items-center gap-2 align-top">
        <div
          aria-label={
            previewUrl ? "تحميل معاينة" : "الرمزية للمستخدم الافتراضي"
          }
          className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-input"
        >
          {previewUrl ? (
            <img
              alt="تحميل معاينة"
              className="size-full object-cover"
              height={32}
              src={previewUrl}
              width={32}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="opacity-60" size={16} />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button aria-haspopup="dialog" onClick={openFileDialog}>
            {fileName ? "تغيير الصورة" : "تحميل الصورة"}
          </Button>
          <input
            {...getInputProps()}
            aria-label="رفع ملف صورة"
            className="sr-only"
            tabIndex={-1}
          />
        </div>
      </div>
      {fileName && (
        <div className="inline-flex gap-2 text-xs">
          <p aria-live="polite" className="truncate text-muted-foreground">
            {fileName}
          </p>{" "}
          <button
            aria-label={`إزالة ${fileName}`}
            className="font-medium text-destructive hover:underline"
            onClick={() => removeFile(files[0]?.id)}
            type="button"
          >
            إزالة
          </button>
        </div>
      )}
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        أداة تحميل الصور الأساسية ∙{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/cosscom/coss/blob/main/apps/origin/docs/use-file-upload.md"
        >
          التوثيق
        </a>
      </p>
    </div>
  );
}
