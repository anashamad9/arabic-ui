import { redirect } from "next/navigation";

export default function Page() {
  const uiUrl =
    process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui";
  redirect(`${uiUrl}/temp`);
}
