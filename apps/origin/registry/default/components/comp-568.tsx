"use client";

import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
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
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
    getItemName: (item) => item.getItemData().name,
    indent,
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    rootItemId: "company",
  });

  return (
    <div className="flex h-full flex-col gap-2 *:first:grow">
      <div>
        <Tree
          className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
          indent={indent}
          tree={tree}
        >
          {tree.getItems().map((item) => {
            return (
              <TreeItem item={item} key={item.getId()}>
                <TreeItemLabel className="relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10 before:bg-background">
                  <span className="-order-1 flex flex-1 items-center gap-2">
                    {item.isFolder() ? (
                      item.isExpanded() ? (
                        <FolderOpenIcon className="pointer-events-none size-4 text-muted-foreground" />
                      ) : (
                        <FolderIcon className="pointer-events-none size-4 text-muted-foreground" />
                      )
                    ) : (
                      <FileIcon className="pointer-events-none size-4 text-muted-foreground" />
                    )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            );
          })}
        </Tree>
      </div>

      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        شجرة أساسية مع رمز cart على اليمين ∙{" "}
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
