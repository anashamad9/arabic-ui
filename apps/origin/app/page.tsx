import Link from "next/link";
import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import { categories } from "@/config/components";

export default function Page() {
  return (
    <div data-home>
      <div className="max-w-3xl max-sm:text-center">
        <h1 className="mb-4 font-heading text-4xl/[1.1] text-foreground md:text-5xl/[1.1]">
          مكونات عربية جميلة لبناء واجهات التطبيقات.
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          مجموعة مفتوحة المصدر من المكونات الجاهزة للنسخ لبناء واجهات التطبيقات
          بسرعة.
        </p>
        <SearchButton />
      </div>

      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .sort((a, b) => {
              if (a.isNew && !b.isNew) return -1;
              if (!a.isNew && b.isNew) return 1;
              return 0;
            })
            .map((category) => (
              <CategoryCard
                componentsCount={category.components.length}
                isNew={category.isNew}
                key={category.slug}
                name={category.name}
                slug={category.slug}
              />
            ))}
        </div>
      </div>

      <SubscribeBottom />
    </div>
  );
}

type CategoryCardProps = {
  slug: string;
  name: string;
  componentsCount?: number;
  isNew?: boolean;
};

function CategoryCard({
  slug,
  name,
  componentsCount,
  isNew = false,
}: CategoryCardProps) {
  const href = `/${slug}`;
  const imageBasePath = `/origin/thumbs/${slug}`;
  const alt = `${name} مكونات`;
  const isComingSoon = componentsCount === undefined;

  return (
    <div className="space-y-3 text-center">
      {isComingSoon ? (
        <div className="relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80">
          <span className="absolute end-3 top-3 rounded-full bg-background px-2 py-0.5 text-xs">
            قريبًا
          </span>
          <ImageComponent alt={alt} imageBasePath={imageBasePath} />
        </div>
      ) : (
        <Link
          className="peer relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
          href={href}
          tabIndex={-1}
        >
          {isNew && (
            <span className="absolute end-3 top-3 rounded-full bg-background px-2 py-0.5 text-xs">
              جديد
            </span>
          )}
          <ImageComponent alt={alt} imageBasePath={imageBasePath} />
        </Link>
      )}
      <div className="[&_a]:peer-hover:underline">
        <h2>
          {!isComingSoon ? (
            <Link className="font-medium text-sm hover:underline" href={href}>
              {name}
            </Link>
          ) : (
            <span className="font-medium text-sm">{name}</span>
          )}
        </h2>
        <p className="text-[13px] text-muted-foreground">
          {!isComingSoon
            ? `${componentsCount} ${componentsCount === 1 ? "مكوّن" : "المكونات"}`
            : "-"}
        </p>
      </div>
    </div>
  );
}

type ImageComponentProps = {
  imageBasePath: string;
  alt: string;
};

function ImageComponent({ alt }: ImageComponentProps) {
  return (
    <div
      aria-label={alt}
      className="flex aspect-[268/198] w-full min-w-52 flex-col justify-center gap-3 bg-card p-6"
      role="img"
    >
      <div className="flex items-center gap-2">
        <span className="size-7 rounded-full bg-muted" />
        <span className="h-2 w-20 rounded bg-muted" />
      </div>
      <div className="rounded-lg border bg-background px-3 py-2 text-start text-muted-foreground text-xs">
        نموذج باللغة العربية
      </div>
      <div className="flex gap-2">
        <span className="rounded-md bg-primary px-4 py-1.5 text-primary-foreground text-xs">
          حفظ
        </span>
        <span className="rounded-md border px-4 py-1.5 text-xs">إلغاء</span>
      </div>
    </div>
  );
}
