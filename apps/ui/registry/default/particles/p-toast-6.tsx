"use client";

import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

const TEXTS = [
  "رسالة قصيرة",
  "رسالة أطول قليلاً تمتد على سطرين.",
  "هذا هو وصف أطول يأخذ عمدا مساحة رأسية أكبر لإظهار التراص مع ارتفاعات متفاوتة.",
  "وصف أطول يجب أن يمتد لعدة خطوط حتى نتمكن من التحقق من الارتفاع المنهار المثبت والرسوم المتحركة التمددية السلسة عند التحوم أو التركيز على منفذ العرض.",
];

export default function Particle() {
  const [count, setCount] = useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    const description = TEXTS[Math.floor(Math.random() * TEXTS.length)];
    toastManager.add({
      description,
      title: `الإشعار العابر ${count + 1} created`,
    });
  }

  return (
    <Button onClick={createToast} variant="outline">
      مع ارتفاعات متفاوتة
    </Button>
  );
}
