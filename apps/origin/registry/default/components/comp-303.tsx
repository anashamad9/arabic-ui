import { EclipseIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <p className="text-center text-sm">
        <EclipseIcon
          aria-hidden="true"
          className="me-3 -mt-0.5 inline-flex opacity-60"
          size={16}
        />
        احصل على أقصى استفادة من تطبيقك مع التحديثات والتحليلات في الوقت الفعلي{" "}
        <span className="text-muted-foreground">·</span>{" "}
        <a className="font-medium underline hover:no-underline" href="#">
          الترقية
        </a>
      </p>
    </div>
  );
}
