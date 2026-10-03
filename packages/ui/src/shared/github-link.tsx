import { Skeleton } from "@coss/ui/components/skeleton";
import { GitHubLinkClient } from "@coss/ui/shared/github-link-client";
import * as React from "react";

export function GitHubLink() {
  return (
    <GitHubLinkClient
      stars={
        <React.Suspense fallback={<Skeleton className="h-4 w-[25.5px]" />}>
          <StarsCount />
        </React.Suspense>
      }
    />
  );
}

export async function StarsCount() {
  try {
    const data = await fetch(
      "https://api.github.com/repos/anashamad9/arabic-ui",
      {
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      },
    );

    if (!data.ok) {
      throw new Error(`خطأ غيت هب واجهة برمجية: ${data.status}`);
    }

    const json = await data.json();
    const starsCount = json.stargazers_count;

    if (typeof starsCount !== "number" || starsCount < 0) {
      throw new Error("عدد النجوم غير الصالحة");
    }

    return (
      <span className="w-8 text-muted-foreground text-xs tabular-nums">
        {starsCount >= 1000
          ? `${(starsCount / 1000).toLocaleString("ar", { maximumFractionDigits: 1 })} ألف`
          : starsCount.toLocaleString("ar")}
      </span>
    );
  } catch {
    // Return nothing when GitHub API is unavailable or repo doesn't exist
    return null;
  }
}
