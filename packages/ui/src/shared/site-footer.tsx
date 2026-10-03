import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-8 py-6 text-muted-foreground before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border/64">
      <div
        aria-hidden="true"
        className="container pointer-events-none absolute inset-0 z-50 before:absolute before:top-[-3.5px] before:-left-[11.5px] before:z-1 before:-ms-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs after:absolute after:top-[-3.5px] after:-right-[11.5px] after:z-1 after:-me-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs dark:after:bg-clip-border dark:before:bg-clip-border"
      />
      <div className="container flex w-full flex-col items-center justify-center gap-2 px-4 text-center text-sm sm:px-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            className="font-bold font-heading text-foreground [font-variation-settings:'GEOM'_50,'opsz'_32]"
            href="/"
          >
            COSS UI/Arabic
          </Link>{" "}
          — تعريب وتكييف لمكتبة{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/cosscom/coss"
          >
            coss UI
          </a>{" "}
          بواسطة{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/anashamad9"
          >
            أنس حمد
          </a>
          .
        </p>
        <p className="text-xs">
          حقوق المكونات الأصلية محفوظة لمشروع coss UI ومساهميه. الترخيص
          الافتراضي AGPL-3.0، مع استثناءات MIT؛{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/anashamad9/arabic-ui/blob/main/LICENSING.md"
          >
            تفاصيل الترخيص
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
