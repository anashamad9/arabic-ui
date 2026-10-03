"use client";

import {
  checkboxesFeature,
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  apis: { name: "الواجهات البرمجية" },
  backend: { children: ["apis", "infrastructure"], name: "تطوير الخدمات" },
  company: {
    children: ["engineering", "marketing", "operations"],
    name: "الشركة",
  },
  components: { name: "المكونات" },
  content: { name: "المحتوى" },
  "design-system": {
    children: ["components", "tokens", "guidelines"],
    name: "نظام التصميم",
  },
  engineering: {
    children: ["frontend", "backend", "platform-team"],
    name: "الهندسة",
  },
  finance: { name: "المالية" },
  frontend: {
    children: ["design-system", "web-platform"],
    name: "تطوير الواجهات",
  },
  guidelines: { name: "الإرشادات" },
  hr: { name: "الموارد البشرية" },
  infrastructure: { name: "البنية التحتية" },
  marketing: { children: ["content", "seo"], name: "التسويق" },
  operations: { children: ["hr", "finance"], name: "العمليات" },
  "platform-team": { name: "فريق المنصة" },
  seo: { name: "تحسين محركات البحث" },
  tokens: { name: "رموز التصميم" },
  "web-platform": { name: "منصة الويب" },
};

const indent = 20;

export default function Component() {
  const tree = useTree<Item>({
    dataLoader: {
      getChildren: (itemId) => items[itemId].children ?? [],
      getItem: (itemId) => items[itemId],
    },
    features: [
      syncDataLoaderFeature,
      selectionFeature,
      checkboxesFeature,
      hotkeysCoreFeature,
    ],
    getItemName: (item) => item.getItemData().name,
    indent,
    initialState: {
      checkedItems: ["components", "tokens"],
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    rootItemId: "company",
  });

  return (
    <div className="flex h-full flex-col gap-1.5 *:first:grow">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          return (
            <div
              className="flex items-center gap-2 not-last:pb-0.5"
              key={item.getId()}
            >
              <TreeItem className="flex-1 not-last:pb-0" item={item}>
                <TreeItemLabel />
              </TreeItem>
              <Checkbox
                checked={
                  {
                    checked: true,
                    indeterminate: "indeterminate" as const,
                    unchecked: false,
                  }[item.getCheckedState()]
                }
                onCheckedChange={(checked) => {
                  const checkboxProps = item.getCheckboxProps();
                  checkboxProps.onChange?.({ target: { checked } });
                }}
              />
            </div>
          );
        })}
      </Tree>

      <div className="space-y-2">
        <p
          aria-live="polite"
          className="mt-2 text-muted-foreground text-xs"
          role="region"
        >
          شجرة مع مربعات الاختيار على اليمين ∙{" "}
          <a
            className="underline hover:text-foreground"
            href="https://headless-tree.lukasbach.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            الواجهة البرمجية
          </a>
        </p>
      </div>
    </div>
  );
}
