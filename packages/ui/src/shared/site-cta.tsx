"use client";

import { buttonVariants } from "@coss/ui/components/button";

export function SiteCta() {
  const uiUrl =
    process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui";
  return (
    <section>
      <div className="container flex w-full flex-wrap items-center justify-center gap-2 px-4 sm:px-6">
        <a className={buttonVariants()} href={`${uiUrl}/particles`}>
          استكشف الأمثلة
        </a>
        <a
          className={buttonVariants({ variant: "outline" })}
          href={`${uiUrl}/docs`}
        >
          اقرأ التوثيق
        </a>
      </div>
    </section>
  );
}
