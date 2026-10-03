"use client";

import {
  type FeatureImplementation,
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
import type React from "react";
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

const doubleClickExpandFeature: FeatureImplementation = {
  itemInstance: {
    getProps: ({ tree, item, prev }) => ({
      ...prev?.(),
      onClick: (e: React.MouseEvent) => {
        if (e.shiftKey) {
          item.selectUpTo(e.ctrlKey || e.metaKey);
        } else if (e.ctrlKey || e.metaKey) {
          item.toggleSelect();
        } else {
          tree.setSelectedItems([item.getItemMeta().itemId]);
        }

        item.setFocused();
      },
      onDoubleClick: (_e: React.MouseEvent) => {
        item.primaryAction();

        if (!item.isFolder()) {
          return;
        }

        if (item.isExpanded()) {
          item.collapse();
        } else {
          item.expand();
        }
      },
    }),
  },
};

export default function Component() {
  const tree = useTree<Item>({
    dataLoader: {
      getChildren: (itemId) => items[itemId].children ?? [],
      getItem: (itemId) => items[itemId],
    },
    features: [
      syncDataLoaderFeature,
      selectionFeature,
      hotkeysCoreFeature,
      doubleClickExpandFeature,
    ],
    getItemName: (item) => item.getItemData().name,
    indent,
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
      selectedItems: ["components"],
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    rootItemId: "company",
  });

  return (
    <div className="flex h-full flex-col gap-2 *:first:grow">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          return (
            <TreeItem item={item} key={item.getId()}>
              <TreeItemLabel>
                <span className="flex items-center gap-2">
                  {item.isFolder() &&
                    (item.isExpanded() ? (
                      <FolderOpenIcon className="pointer-events-none size-4 text-muted-foreground" />
                    ) : (
                      <FolderIcon className="pointer-events-none size-4 text-muted-foreground" />
                    ))}
                  {item.getItemName()}
                </span>
              </TreeItemLabel>
            </TreeItem>
          );
        })}
      </Tree>

      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        شجرة مع البنود القابلة للتوسيع على نقرة مزدوجة ∙{" "}
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
  );
}
