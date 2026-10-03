import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-1">
      <p>
        <Link className="font-bold text-lg" href="/">
          COSS UI/Arabic <span className="text-muted-foreground">المكونات</span>
        </Link>
      </p>
      <p className="text-muted-foreground text-sm">
        مكونات عربية مفتوحة المصدر، مبنية على المكتبة الأصلية من{" "}
        <a
          className="underline underline-offset-4"
          href="https://github.com/cosscom/coss"
        >
          كوس
        </a>
        .
      </p>
    </footer>
  );
}
