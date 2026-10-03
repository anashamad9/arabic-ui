"use client";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "@coss/ui/components/alert-dialog";
import { Badge } from "@coss/ui/components/badge";
import { Button } from "@coss/ui/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
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
import { EllipsisIcon, PencilIcon, Trash2Icon, VideoIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

export type ConferencingApp = {
  id: string;
  name: string;
  description: string;
  logo: string;
  alt: string;
  isDefault?: boolean;
};

export const initialConferencingApps: ConferencingApp[] = [
  {
    alt: "كال فيديو",
    description:
      "كال Video هي منصة مؤتمرات الفيديو المستندة إلى الويب الداخلية والمدعومة من Daily.co ، وهي بسيطة وخفيفة الوزن ، ولكنها تحتوي على معظم الميزات التي تحتاجها.",
    id: "cal-video",
    isDefault: true,
    logo: "https://app.cal.com/app-store/dailyvideo/icon.svg",
    name: "كال فيديو",
  },
  {
    alt: "اجتماعات غوغل",
    description:
      "غوغل Meet هي منصة مؤتمرات الفيديو المستندة إلى الويب من غوغل ، والمصممة للتنافس مع منصات المؤتمرات الرئيسية.",
    id: "google-meet",
    logo: "https://app.cal.com/app-store/googlevideo/logo.webp",
    name: "اجتماعات غوغل",
  },
];

export function ConferencingEmpty({
  apps = initialConferencingApps,
  onAppsChange,
}: {
  apps?: ConferencingApp[];
  onAppsChange?: (apps: ConferencingApp[]) => void;
}) {
  const [localApps, setLocalApps] = useState(apps);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [appToRemove, setAppToRemove] = useState<ConferencingApp | null>(null);

  const currentApps = onAppsChange ? apps : localApps;

  function setApps(next: ConferencingApp[]) {
    if (onAppsChange) {
      onAppsChange(next);
    } else {
      setLocalApps(next);
    }
  }

  function handleRemoveClick(app: ConferencingApp) {
    setAppToRemove(app);
    setRemoveDialogOpen(true);
  }

  function handleRemoveConfirm() {
    if (!appToRemove) return;
    const next = currentApps.filter((a) => a.id !== appToRemove.id);
    setApps(next);
    setRemoveDialogOpen(false);
    setAppToRemove(null);
  }

  function handleRemoveDialogOpenChange(open: boolean) {
    setRemoveDialogOpen(open);
    if (!open) setAppToRemove(null);
  }

  if (currentApps.length === 0) {
    return (
      <Empty className="rounded-xl border border-dashed py-8 md:py-12">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <VideoIcon />
          </EmptyMedia>
          <EmptyTitle>لا تطبيقات مؤتمرات</EmptyTitle>
          <EmptyDescription>
            حاول إضافة تطبيق مؤتمر لمكالمات الفيديو مع عملائك
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>ربط تطبيقات المؤتمر</Button>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <>
      {currentApps.map((app) => (
        <ListItem key={app.id}>
          <ListItemContent>
            <ListItemHeader>
              <div className="flex items-start gap-4">
                <Image
                  alt={app.alt}
                  className="size-10 shrink-0"
                  height={40}
                  src={app.logo}
                  width={40}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <ListItemTitle>{app.name}</ListItemTitle>
                    {app.isDefault && (
                      <Badge variant="success">الافتراضي</Badge>
                    )}
                  </div>
                  <ListItemDescription>{app.description}</ListItemDescription>
                </div>
              </div>
            </ListItemHeader>
          </ListItemContent>
          <ListItemActions>
            <Menu>
              <Tooltip>
                <MenuTrigger
                  render={
                    <TooltipTrigger
                      render={
                        <Button
                          aria-label="الخيارات"
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
                <MenuItem disabled={app.isDefault}>
                  <PencilIcon />
                  تعيين افتراضي
                </MenuItem>
                <MenuItem
                  onClick={() => handleRemoveClick(app)}
                  variant="destructive"
                >
                  <Trash2Icon />
                  إزالة التطبيق
                </MenuItem>
              </MenuPopup>
            </Menu>
          </ListItemActions>
        </ListItem>
      ))}

      <AlertDialog
        onOpenChange={handleRemoveDialogOpenChange}
        open={removeDialogOpen}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>إزالة التطبيق</AlertDialogTitle>
            <AlertDialogDescription>
              هل أنت متأكد من أنك تريد إزالة هذا التطبيق؟
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              إلغاء
            </AlertDialogClose>
            <AlertDialogClose
              onClick={handleRemoveConfirm}
              render={<Button variant="destructive">إزالة التطبيق</Button>}
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </>
  );
}
