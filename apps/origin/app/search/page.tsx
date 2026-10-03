import type { Metadata } from "next";
import { Suspense } from "react";
import ComponentsContainer from "./components-container";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  description: "البحث عن المكونات في مكتبة واجهة المستخدم.",
  title: "ابحث عن مكون واجهة مستخدم",
};

export default function Page() {
  return (
    <>
      <PageHeader className="mb-10" title="عنصر البحث">
        استخدم هذه الصفحة للعثور بسرعة على مكون (على سبيل المثال ، multiselect ،
        شريط التمرير الرأسي ، وما إلى ذلك)
      </PageHeader>
      <Suspense>
        <ComponentsContainer />
      </Suspense>
    </>
  );
}
