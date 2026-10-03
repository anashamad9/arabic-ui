import { CircleAlertIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-md border border-red-500/50 px-4 py-3 text-red-600">
      <div className="flex gap-3">
        <CircleAlertIcon
          aria-hidden="true"
          className="mt-0.5 shrink-0 opacity-60"
          size={16}
        />
        <div className="grow space-y-1">
          <p className="font-medium text-sm">كلمة المرور لا تلبي المتطلبات:</p>
          <ul className="list-inside list-disc text-sm opacity-80">
            <li>الحد الأدنى 8 أحرف</li>
            <li>تضمين شخصية خاصة</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
