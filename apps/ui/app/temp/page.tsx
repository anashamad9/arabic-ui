import type { Metadata } from "next";
import { RecordingDemo } from "./recording-demo";

export const metadata: Metadata = {
  title: "عرض المكونات | COSS UI/Arabic",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RecordingDemo />;
}
