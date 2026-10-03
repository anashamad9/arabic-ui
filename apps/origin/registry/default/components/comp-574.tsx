"use client";

import {
  expandAllFeature,
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import {
  FolderIcon,
  FolderOpenIcon,
  ListCollapseIcon,
  ListTreeIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
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
      hotkeysCoreFeature,
      expandAllFeature,
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
    <div className="flex h-full flex-col gap-2 *:nth-2:grow">
      <div className="flex items-center gap-2">
        <Button onClick={() => tree.expandAll()} size="sm" variant="outline">
          <ListTreeIcon
            aria-hidden="true"
            className="-ms-1 opacity-60"
            size={16}
          />
          توسيع الكل
        </Button>
        <Button onClick={tree.collapseAll} size="sm" variant="outline">
          <ListCollapseIcon
            aria-hidden="true"
            className="-ms-1 opacity-60"
            size={16}
          />
          انهيار الكل
        </Button>
      </div>

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
                  {item.isFolder() && (
                    <span className="-ms-1 text-muted-foreground">
                      {`(${item.getChildren().length})`}
                    </span>
                  )}
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
        شجرة مع توسيع / انهيار جميع الأزرار ∙{" "}
        <a
          className="underline hover:text-foreground"
          href="https://headless-tree.lukasbach.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          الواجهة البرمجية
        </a>
      </p>
    </div>
  );
}
