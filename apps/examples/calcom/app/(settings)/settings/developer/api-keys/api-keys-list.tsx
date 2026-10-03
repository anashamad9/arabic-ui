"use client";

import { Badge } from "@coss/ui/components/badge";
import { Button } from "@coss/ui/components/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@coss/ui/components/menu";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import { EllipsisIcon, PencilIcon, Trash2Icon } from "lucide-react";
import {
  ListItem,
  ListItemActions,
  ListItemBadges,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

export interface ApiKeyItem {
  id: string;
  note: string;
  key: string;
  expiresAt: string | null;
  createdAt: string;
  neverExpires: boolean;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ar", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isExpired(item: ApiKeyItem): boolean {
  if (item.neverExpires || !item.expiresAt) return false;
  return new Date(item.expiresAt) < new Date();
}

function getStatusLabel(item: ApiKeyItem): string {
  return isExpired(item) ? "منتهية الصلاحية" : "نشط";
}

function getStatusVariant(item: ApiKeyItem): "success" | "error" {
  return isExpired(item) ? "error" : "success";
}

function getExpirationDescription(item: ApiKeyItem): string {
  if (item.neverExpires) return "لا تنتهي أبدا";
  if (!item.expiresAt) return "لا توجد مجموعة انتهاء";
  const expiresDate = new Date(item.expiresAt);
  const now = new Date();
  if (expiresDate < now) return `منتهية الصلاحية ${formatDate(item.expiresAt)}`;
  return `انتهاء الصلاحية ${formatDate(item.expiresAt)}`;
}

export function ApiKeysList({
  apiKeys,
  onEditClick,
  onRemoveClick,
}: {
  apiKeys: ApiKeyItem[];
  onEditClick: (apiKey: ApiKeyItem) => void;
  onRemoveClick: (apiKey: ApiKeyItem) => void;
}) {
  return (
    <>
      {apiKeys.map((apiKey) => (
        <ListItem key={apiKey.id}>
          <ListItemContent>
            <ListItemHeader>
              <ListItemTitle>
                {apiKey.note || "مفتاح برمجي بلا اسم"}
              </ListItemTitle>
              <ListItemDescription>
                {getExpirationDescription(apiKey)}
              </ListItemDescription>
            </ListItemHeader>
          </ListItemContent>
          <ListItemBadges>
            <Badge
              className="pointer-events-none"
              variant={getStatusVariant(apiKey)}
            >
              {getStatusLabel(apiKey)}
            </Badge>
          </ListItemBadges>
          <ListItemActions>
            <Menu>
              <Tooltip>
                <MenuTrigger
                  render={
                    <TooltipTrigger
                      render={
                        <Button
                          aria-label={`الخيارات المتاحة ${apiKey.note || "مفتاح واجهة برمجة التطبيقات"}`}
                          size="icon"
                          variant="outline"
                        >
                          <EllipsisIcon />
                        </Button>
                      }
                    />
                  }
                />
                <TooltipPopup>الخيارات</TooltipPopup>
              </Tooltip>
              <MenuPopup align="end">
                <MenuItem onClick={() => onEditClick(apiKey)}>
                  <PencilIcon />
                  تعديل
                </MenuItem>
                <MenuItem
                  onClick={() => onRemoveClick(apiKey)}
                  variant="destructive"
                >
                  <Trash2Icon />
                  حذف
                </MenuItem>
              </MenuPopup>
            </Menu>
          </ListItemActions>
        </ListItem>
      ))}
    </>
  );
}
