import {
  segmentedControlItemVariants,
  segmentedControlRootClassName,
} from "@/registry/default/lib/segmented-control";

const itemClassName = segmentedControlItemVariants({ state: "current" });

export default function Particle() {
  return (
    <nav aria-label="أقسام المشروع">
      <div className={segmentedControlRootClassName}>
        <a aria-current="page" className={itemClassName} href="#overview">
          نظرة عامة
        </a>
        <a className={itemClassName} href="#activity">
          نشاط
        </a>
        <a className={itemClassName} href="#settings">
          الإعدادات
        </a>
      </div>
    </nav>
  );
}
