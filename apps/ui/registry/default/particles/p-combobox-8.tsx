"use client";

import { Fragment } from "react";
import {
  Combobox,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSeparator,
} from "@/registry/default/ui/combobox";

// Grouped items demo
type Tag = {
  id: string;
  label: string;
  group: "الحالة" | "الأولوية" | "الفريق";
};
type TagGroup = { value: string; items: Tag[] };

const tagsData: Tag[] = [
  // Status
  { group: "الحالة", id: "s-open", label: "فتح" },
  { group: "الحالة", id: "s-in-progress", label: "قيد التنفيذ" },
  { group: "الحالة", id: "s-blocked", label: "المحظورة" },
  { group: "الحالة", id: "s-resolved", label: "تم حلها" },
  { group: "الحالة", id: "s-closed", label: "مغلق" },
  // Priority
  { group: "الأولوية", id: "p-low", label: "منخفضة" },
  { group: "الأولوية", id: "p-medium", label: "متوسطة" },
  { group: "الأولوية", id: "p-high", label: "عالية" },
  { group: "الأولوية", id: "p-urgent", label: "عاجل" },
  // Team
  { group: "الفريق", id: "t-design", label: "تصميم التصميم" },
  { group: "الفريق", id: "t-frontend", label: "تطوير الواجهات" },
  { group: "الفريق", id: "t-backend", label: "تطوير الخدمات" },
  { group: "الفريق", id: "t-devops", label: "التطوير والتشغيل" },
  { group: "الفريق", id: "t-qa", label: "اختبار الجودة" },
  { group: "الفريق", id: "t-mobile", label: "موبايل" },
  { group: "الفريق", id: "t-data", label: "بيانات البيانات" },
  { group: "الفريق", id: "t-security", label: "الأمن" },
  { group: "الفريق", id: "t-platform", label: "منصة منصة المنصة" },
  { group: "الفريق", id: "t-infra", label: "البنية التحتية" },
  { group: "الفريق", id: "t-product", label: "المنتج" },
  { group: "الفريق", id: "t-marketing", label: "التسويق" },
  { group: "الفريق", id: "t-sales", label: "مبيعات مبيعات المبيعات" },
  { group: "الفريق", id: "t-support", label: "الدعم" },
  { group: "الفريق", id: "t-research", label: "البحث العلمي" },
  { group: "الفريق", id: "t-content", label: "المحتوى" },
  { group: "الفريق", id: "t-analytics", label: "التحليلات" },
  { group: "الفريق", id: "t-operations", label: "العمليات" },
  { group: "الفريق", id: "t-finance", label: "المالية" },
  { group: "الفريق", id: "t-hr", label: "الموارد البشرية" },
  { group: "الفريق", id: "t-legal", label: "القانونية" },
  { group: "الفريق", id: "t-growth", label: "النمو" },
  { group: "الفريق", id: "t-partner", label: "شريك" },
  { group: "الفريق", id: "t-community", label: "المجتمع المجتمعي" },
  { group: "الفريق", id: "t-docs", label: "التوثيق" },
  { group: "الفريق", id: "t-l10n", label: "التوطين" },
  { group: "الفريق", id: "t-a11y", label: "إمكانية الوصول" },
  { group: "الفريق", id: "t-sre", label: "البنية التحتية" },
  { group: "الفريق", id: "t-release", label: "الإفراج عن الإصدار" },
  { group: "الفريق", id: "t-architecture", label: "العمارة المعمارية" },
  { group: "الفريق", id: "t-ux", label: "تجربة المستخدم" },
  { group: "الفريق", id: "t-ui", label: "واجهة المستخدم" },
  { group: "الفريق", id: "t-management", label: "الإدارة الإدارية" },
];

function groupTags(tags: Tag[]): TagGroup[] {
  const groups: Record<string, Tag[]> = {};
  for (const tag of tags) {
    if (!groups[tag.group]) {
      groups[tag.group] = [];
    }
    groups[tag.group]?.push(tag);
  }

  const order: Array<TagGroup["value"]> = ["الحالة", "الأولوية", "الفريق"];
  return order.map((value) => ({ items: groups[value] ?? [], value }));
}

const groupedTags: TagGroup[] = groupTags(tagsData);

export default function Particle() {
  return (
    <Combobox items={groupedTags}>
      <div className="flex flex-col items-start gap-2">
        <ComboboxInput
          aria-label="علامات البحث"
          placeholder="على سبيل المثال ميزة"
        />
      </div>
      <ComboboxPopup>
        <ComboboxEmpty>لم يتم العثور على علامات</ComboboxEmpty>
        <ComboboxList>
          {(group: TagGroup) => (
            <Fragment key={group.value}>
              <ComboboxGroup items={group.items}>
                <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                <ComboboxCollection>
                  {(tag: Tag) => (
                    <ComboboxItem key={tag.id} value={tag}>
                      {tag.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
              {group.value !== "الفريق" && <ComboboxSeparator />}
            </Fragment>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
