"use client";

import {
  hotkeysCoreFeature,
  renamingFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "@/registry/default/ui/input";
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";

interface Item {
  name: string;
  children?: string[];
}

// Initial data
const initialItems: Record<string, Item> = {
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
  const [items, setItems] = useState(initialItems);

  const tree = useTree<Item>({
    dataLoader: {
      getChildren: (itemId) => items[itemId].children ?? [],
      getItem: (itemId) => items[itemId],
    },
    features: [
      syncDataLoaderFeature,
      hotkeysCoreFeature,
      renamingFeature,
      selectionFeature,
    ],
    getItemName: (item) => item.getItemData().name,
    indent,
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    onRename: (item, newName) => {
      // Update the item name in our state
      const itemId = item.getId();
      setItems((prevItems) => ({
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          name: newName,
        },
      }));
    },
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
                  {item.isFolder() ? (
                    item.isExpanded() ? (
                      <FolderOpenIcon className="pointer-events-none size-4 text-muted-foreground" />
                    ) : (
                      <FolderIcon className="pointer-events-none size-4 text-muted-foreground" />
                    )
                  ) : (
                    <FileIcon className="pointer-events-none size-4 text-muted-foreground" />
                  )}
                  {item.isRenaming() ? (
                    <Input
                      {...item.getRenameInputProps()}
                      autoFocus
                      className="-my-0.5 h-6 px-1"
                    />
                  ) : (
                    item.getItemName()
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
        شجرة مع إعادة تسمية (اضغط F2 لإعادة تسمية) ∙{" "}
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
