# useFileUpload هوك

خطاف رياكت مرن وغني بالميزات للتعامل مع عمليات تحميل الملفات مع دعم السحب والإفلات والتحقق من صحة الملفات وتوليد المعاينة.

> **ملاحظة:** يوفر هذا الخطاف أساسًا متينًا لتحميل الملفات ولكنه مصمم ليتم تمديده. يمكنك البناء عليه لتنفيذ ميزات إضافية مثل وظيفة الإيقاف المؤقت / استئناف أو التحميلات المقطعة أو آليات إعادة المحاولة أو التكامل مع خدمات خلفية محددة.

## المزايا

- 📁 تحميل ملف واحد أو متعدد
- 🖱️ سحب وإسقاط الدعم
- 🔍 التحقق من صحة نوع الملف
- 📏 التحقق من حجم الملف
- 🖼️ توليد معاينة الصورة
- 🧹 كشف الملفات المكررة
- ⚠️ معالجة الأخطاء
- 🔄 تكامل تتبع التقدم
- 🎛️ واجهة مستخدم مخصصة بالكامل

## التثبيت

هذا الخطاف هو جزء من مكتبة المكونات ولا يتطلب تثبيت منفصل.

## الاستخدام الأساسي

```tsx
import { useFileUpload } from "@/registry/default/hooks/use-file-upload";

function FileUploadComponent() {
  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      handleFileChange,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    multiple: true,
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: "image/*",
  });

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input {...getInputProps()} />

      <button onClick={openFileDialog}>إختر الملفات</button>

      {files.length > 0 && (
        <div>
          <h3>الملفات المختارة:</h3>
          <ul>
            {files.map((file) => (
              <li key={file.id}>
                {file.file.name} ({formatBytes(file.file.size)})
                <button onClick={() => removeFile(file.id)}>إزالة</button>
              </li>
            ))}
          </ul>
          <button onClick={clearFiles}>امسح كل شيء</button>
        </div>
      )}

      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}
```

## مرجع الواجهة البرمجية

### معلمات هوك

المكوّن `useFileUpload` يقبل الخطاف كائن التكوين مع الخيارات التالية:

| الخيار          | النوع                                      | الافتراضي     | الوصف                                                                     |
| --------------- | ----------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `maxFiles`      | `number`                                  | `Infinity`  | الحد الأقصى لعدد الملفات المسموح بها (تستخدم فقط عندما `multiple` هو `true`)           |
| `maxSize`       | `number`                                  | `Infinity`  | الحد الأقصى لحجم الملف في البايت                                                      |
| `accept`        | `string`                                  | `"*"`       | قائمة مفصولة بفواصل لأنواع الملفات المقبولة (على سبيل المثال، `"image/*,application/pdf"`) |
| `multiple`      | `boolean`                                 | `false`     | ما إذا كان يسمح باختيار ملفات متعددة                                        |
| `initialFiles`  | `FileMetadata[]`                          | `[]`        | الملفات الأولية لملء رافع مع                                     |
| `onFilesChange` | `(files: FileWithPreview[]) => void`      | `undefined` | استدعاء وظيفة معاودة الاتصال كلما تغيرت صفيف الملفات                       |
| `onFilesAdded`  | `(addedFiles: FileWithPreview[]) => void` | `undefined` | استدعاء وظيفة الاتصال عند إضافة ملفات جديدة                               |

### قيمة العائد

يعيد الخطاف tuple مع عنصرين:

#### موضوع الدولة

| عقارات عقارية     | النوع                | الوصف                                        |
| ------------ | ------------------- | -------------------------------------------------- |
| `files`      | `FileWithPreview[]` | صفيف من الملفات مع عناوين رابط للمعاينة                   |
| `isDragging` | `boolean`           | ما إذا كان يتم سحب الملفات عبر منطقة الإسقاط |
| `errors`     | `string[]`          | صفيف رسائل الخطأ                            |

#### كائن الإجراءات

| طريقة الأسلوب             | النوع                                                                                                                              | الوصف                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `addFiles`         | `(files: FileList \| File[]) => void`                                                                                             | إضافة الملفات برمجيا           |
| `removeFile`       | `(id: string) => void`                                                                                                            | إزالة ملف عن طريق معرفه              |
| `clearFiles`       | `() => void`                                                                                                                      | إزالة جميع الملفات                     |
| `clearErrors`      | `() => void`                                                                                                                      | مسح جميع رسائل الخطأ             |
| `handleDragEnter`  | `(e: DragEvent<HTMLElement>) => void`                                                                                             | التعامل مع السحب دخول الحدث              |
| `handleDragLeave`  | `(e: DragEvent<HTMLElement>) => void`                                                                                             | التعامل مع السحب ترك الحدث              |
| `handleDragOver`   | `(e: DragEvent<HTMLElement>) => void`                                                                                             | التعامل مع السحب على الحدث               |
| `handleDrop`       | `(e: DragEvent<HTMLElement>) => void`                                                                                             | التعامل مع انخفاض الحدث                    |
| `handleFileChange` | `(e: ChangeEvent<HTMLInputElement>) => void`                                                                                      | التعامل مع ملف الإدخال تغيير الحدث       |
| `openFileDialog`   | `() => void`                                                                                                                      | افتح مربع حوار اختيار الملف       |
| `getInputProps`    | `(props?: InputHTMLAttributes<HTMLInputElement>) => InputHTMLAttributes<HTMLInputElement> & { ref: React.Ref<HTMLInputElement> }` | الحصول على الدعائم لعنصر إدخال الملف |

### أنواع

```typescript
type FileMetadata = {
  name: string;
  size: number;
  type: string;
  url: string;
  id: string;
};

type FileWithPreview = {
  file: File | FileMetadata;
  id: string;
  preview?: string;
};
```

## الاستخدام المتقدم

### تتبع تقدم التحميل مع تكامل الخادم

فيما يلي مثال في العالم الحقيقي لتتبع تقدم تحميل الملفات مع تكامل الخادم:

```tsx
import { useState } from "react";
import { useFileUpload, type FileWithPreview } from "./use-file-upload";

// Type for tracking upload progress
type UploadProgress = {
  fileId: string;
  progress: number;
  completed: boolean;
  error?: string;
};

function FileUploader() {
  const maxSize = 5 * 1024 * 1024; // 5MB

  // State to track upload progress for each file
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);

  // Function to handle file upload to server
  const uploadFileToServer = async (file: File): Promise<{ url: string }> => {
    return new Promise(async (resolve, reject) => {
      try {
        // Create FormData
        const formData = new FormData();
        formData.append("file", file);

        // Create XMLHttpRequest to track progress
        const xhr = new XMLHttpRequest();

        // Track upload progress
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const progressPercent = Math.round(
              (event.loaded / event.total) * 100,
            );
            // Update progress state for this file
            setUploadProgress((prev) =>
              prev.map((item) =>
                item.fileId === file.name
                  ? { ...item, progress: progressPercent }
                  : item,
              ),
            );
          }
        });

        // Handle completion
        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            // Mark as completed
            setUploadProgress((prev) =>
              prev.map((item) =>
                item.fileId === file.name ? { ...item, completed: true } : item,
              ),
            );
            resolve(response);
          } else {
            // Handle error
            setUploadProgress((prev) =>
              prev.map((item) =>
                item.fileId === file.name
                  ? { ...item, error: "فشل التحميل" }
                  : item,
              ),
            );
            reject(new Error("فشل التحميل"));
          }
        });

        // Handle error
        xhr.addEventListener("error", () => {
          setUploadProgress((prev) =>
            prev.map((item) =>
              item.fileId === file.name
                ? { ...item, error: "خطأ في الشبكة" }
                : item,
            ),
          );
          reject(new Error("خطأ في الشبكة"));
        });

        // Open and send the request
        xhr.open("POST", "/api/upload", true);
        xhr.send(formData);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Handle newly added files
  const handleFilesAdded = (addedFiles: FileWithPreview[]) => {
    // Initialize progress tracking for each new file
    const newProgressItems = addedFiles.map((file) => ({
      fileId: file.id,
      progress: 0,
      completed: false,
    }));

    // Add new progress items to state
    setUploadProgress((prev) => [...prev, ...newProgressItems]);

    // Start upload for each file
    addedFiles.forEach((file) => {
      if (file.file instanceof File) {
        uploadFileToServer(file.file)
          .then((response) => {
            console.log("تحميل ناجح:", response.url);
          })
          .catch((error) => {
            console.error("فشل التحميل:", error);
          });
      }
    });
  };

  // Remove the progress tracking for the file
  const handleFileRemoved = (fileId: string) => {
    setUploadProgress((prev) => prev.filter((item) => item.fileId !== fileId));
  };

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    multiple: true,
    maxSize,
    onFilesAdded: handleFilesAdded,
  });

  return (
    <div className="flex flex-col gap-2">
      {/* Drop area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        data-files={files.length > 0 || undefined}
        className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="رفع ملف صورة"
        />
        {files.length > 0 ? (
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-sm font-medium">
                الملفات ({files.length})
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={openFileDialog}>
                  <UploadIcon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  إضافة ملفات
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Clear all progress tracking
                    setUploadProgress([]);
                    clearFiles();
                  }}
                >
                  <Trash2Icon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  إزالة الكل
                </Button>
              </div>
            </div>

            <div className="w-full space-y-2">
              {files.map((file) => {
                const fileProgress = uploadProgress.find(
                  (p) => p.fileId === file.id,
                );
                const isUploading = fileProgress && !fileProgress.completed;

                return (
                  <div
                    key={file.id}
                    data-uploading={isUploading || undefined}
                    className="bg-background flex flex-col gap-1 rounded-lg border p-2 pe-3 transition-opacity duration-300"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 overflow-hidden in-data-[uploading=true]:opacity-50">
                        <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
                          {getFileIcon(file)}
                        </div>
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <p className="truncate text-[13px] font-medium">
                            {file.file instanceof File
                              ? file.file.name
                              : file.file.name}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {formatBytes(
                              file.file instanceof File
                                ? file.file.size
                                : file.file.size,
                            )}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                        onClick={() => {
                          handleFileRemoved(file.id);
                          removeFile(file.id);
                        }}
                        aria-label="إزالة الملف"
                      >
                        <XIcon className="size-4" aria-hidden="true" />
                      </Button>
                    </div>

                    {/* Upload progress bar */}
                    {fileProgress &&
                      (() => {
                        const progress = fileProgress.progress || 0;
                        const completed = fileProgress.completed || false;

                        if (completed) return null;

                        return (
                          <div className="mt-1 flex items-center gap-2">
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                              <div
                                className="bg-primary h-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-muted-foreground w-10 text-xs tabular-nums">
                              {progress}%
                            </span>
                          </div>
                        );
                      })()}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <p className="mb-1.5 text-sm font-medium">أسقط ملفاتك هنا</p>
            <p className="text-muted-foreground text-xs">
              الحد الأقصى {maxFiles} الملفات ∙ ما يصل إلى {maxSizeMB}م ب
            </p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
              حدد الصور
            </Button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
```

## وظائف مساعد

### formatBytes

يقوم بتنسيق قيمة بايت في سلسلة قابلة للقراءة البشرية.

```typescript
function formatBytes(bytes: number, decimals = 2): string;
```

مثال:

```tsx
formatBytes(1024); // "1 KB"
formatBytes(1536, 1); // "1.5 KB"
```

## تمديد الخطاف

المكوّن `useFileUpload` تم تصميم الخطاف كنقطة انطلاق تتعامل مع الوظائف الأساسية لاختيار الملفات والتحقق من صحتها. يمكنك توسيعه لإنشاء ميزات أكثر تقدمًا:

### وقفة واستئناف التحميل

يمكنك تنفيذ وظيفة الإيقاف المؤقت / استئناف باستخدام طريقة إجهاض XMLHttpRequest وتتبع تقدم التحميل:

```tsx
const uploadWithPauseResume = (file: File) => {
  let xhr: XMLHttpRequest | null = new XMLHttpRequest();
  let isPaused = false;
  let uploadedBytes = 0;

  const pause = () => {
    if (xhr && !isPaused) {
      xhr.abort();
      isPaused = true;
    }
  };

  const resume = () => {
    if (isPaused) {
      // Create a new request
      xhr = new XMLHttpRequest();

      // Set up a Content-Range header to resume from where we left off
      const formData = new FormData();
      formData.append("file", file);

      xhr.open("POST", "/api/upload", true);
      xhr.setRequestHeader(
        "نطاق المحتوى",
        `bytes ${uploadedBytes}-${file.size - 1}/${file.size}`,
      );

      // Set up progress tracking again
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          uploadedBytes = event.loaded;
          // Update progress UI
        }
      });

      xhr.send(formData);
      isPaused = false;
    }
  };

  return { pause, resume };
};
```

### تحميلات مكتظة

بالنسبة للملفات الكبيرة ، قد ترغب في تنفيذ عمليات التحميل المقطعة:

```tsx
const uploadInChunks = (file: File, chunkSize = 1024 * 1024) => {
  let currentChunk = 0;
  const totalChunks = Math.ceil(file.size / chunkSize);

  const uploadNextChunk = async () => {
    if (currentChunk >= totalChunks) {
      // All chunks uploaded
      return;
    }

    const start = currentChunk * chunkSize;
    const end = Math.min(file.size, start + chunkSize);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append("file", chunk);
    formData.append("fileName", file.name);
    formData.append("chunkIndex", currentChunk.toString());
    formData.append("totalChunks", totalChunks.toString());

    try {
      await fetch("/api/upload-chunk", {
        method: "POST",
        body: formData,
      });

      currentChunk++;
      // Update progress UI
      const progress = Math.round((currentChunk / totalChunks) * 100);

      // Continue with next chunk
      uploadNextChunk();
    } catch (error) {
      // Handle error, implement retry logic
    }
  };

  // Start the upload process
  uploadNextChunk();
};
```

## المزيد من الأمثلة

لمزيد من الأمثلة والعروض الحية من `useFileUpload` هوك في العمل، زيارة [الصفحة الرئيسية](https://coss.com/origin/file-upload).

يتضمن موقع التوثيق العديد من التطبيقات وحالات الاستخدام ، بما في ذلك:

- تحميل الملفات الأساسية
- معرض الصور
- تحميل المستندات مع تتبع التقدم
- سحب وإسقاط واجهات
- أمثلة التحقق من الصحة المخصصة
- المزيد
