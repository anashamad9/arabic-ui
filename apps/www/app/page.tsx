import { redirect } from "next/navigation";

export default function Page() {
  redirect(process.env.NEXT_PUBLIC_COSS_UI_URL || "http://localhost:4000/ui");
}
