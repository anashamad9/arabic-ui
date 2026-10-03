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
import { Button } from "@coss/ui/components/button";
import {
  Card,
  CardFrame,
  CardFrameAction,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from "@coss/ui/components/card";
import { Field, FieldLabel } from "@coss/ui/components/field";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@coss/ui/components/menu";
import { Switch } from "@coss/ui/components/switch";
import { EllipsisIcon, PlusIcon, Trash2Icon } from "lucide-react";
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

const GOOGLE_CALENDAR_ICON =
  "https://app.cal.com/app-store/googlecalendar/icon.svg";

const CONFLICT_INSTRUCTION =
  "قم بتبديل التقويمات التي تريد التحقق من وجود تعارضات لمنع الحجوزات المزدوجة.";

const calendarAccounts = [
  {
    calendars: [
      { label: "example@cal.com", value: "example" },
      { label: "الفريق", value: "team" },
    ],
    email: "example@cal.com",
    showMenu: false,
  },
  {
    calendars: [{ label: "example2@gmail.com", value: "gmail" }],
    email: "example2@gmail.com",
    showMenu: true,
  },
];

type CalendarAccount = (typeof calendarAccounts)[number];

function CalendarAccountBlock({
  account,
  onRemoveClick,
}: {
  account: CalendarAccount;
  onRemoveClick: (account: CalendarAccount) => void;
}) {
  const { email, calendars, showMenu } = account;
  return (
    <ListItem>
      <ListItemContent>
        <ListItemHeader>
          <div className="flex items-start gap-4">
            <Image
              alt="تقويم غوغل"
              className="size-10 shrink-0"
              height={40}
              src={GOOGLE_CALENDAR_ICON}
              width={40}
            />
            <div>
              <ListItemTitle>تقويم غوغل</ListItemTitle>
              <ListItemDescription>{email}</ListItemDescription>
            </div>
          </div>
        </ListItemHeader>
        <p className="text-muted-foreground text-sm">{CONFLICT_INSTRUCTION}</p>
        <div className="flex flex-col gap-3">
          {calendars.map((calendar) => (
            <Field key={calendar.value}>
              <FieldLabel>
                <Switch />
                {calendar.label}
              </FieldLabel>
            </Field>
          ))}
        </div>
      </ListItemContent>
      {showMenu && (
        <ListItemActions>
          <Menu>
            <MenuTrigger
              render={
                <Button
                  aria-label="خيارات التقويم"
                  size="icon"
                  variant="outline"
                />
              }
            >
              <EllipsisIcon />
            </MenuTrigger>
            <MenuPopup align="end">
              <MenuItem
                onClick={() => onRemoveClick(account)}
                variant="destructive"
              >
                <Trash2Icon />
                إزالة التطبيق
              </MenuItem>
            </MenuPopup>
          </Menu>
        </ListItemActions>
      )}
    </ListItem>
  );
}

export function CheckForConflictsCard() {
  const [accounts, setAccounts] = useState(calendarAccounts);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [accountToRemove, setAccountToRemove] =
    useState<CalendarAccount | null>(null);

  function handleRemoveClick(account: CalendarAccount) {
    setAccountToRemove(account);
    setRemoveDialogOpen(true);
  }

  function handleRemoveConfirm() {
    if (!accountToRemove) return;
    setAccounts((prev) =>
      prev.filter((a) => a.email !== accountToRemove.email),
    );
    setRemoveDialogOpen(false);
    setAccountToRemove(null);
  }

  function handleRemoveDialogOpenChange(open: boolean) {
    setRemoveDialogOpen(open);
    if (!open) setAccountToRemove(null);
  }

  return (
    <>
      <CardFrame>
        <CardFrameHeader>
          <CardFrameTitle>تحقق من النزاعات</CardFrameTitle>
          <CardFrameDescription>
            حدد التقويمات التي تريد التحقق من وجود تعارضات لمنع الحجوزات
            المزدوجة.
          </CardFrameDescription>
          <CardFrameAction>
            <Button variant="outline">
              <PlusIcon />
              إضافة
            </Button>
          </CardFrameAction>
        </CardFrameHeader>

        <Card>
          <CardPanel className="p-0!">
            {accounts.map((account) => (
              <CalendarAccountBlock
                account={account}
                key={account.email}
                onRemoveClick={handleRemoveClick}
              />
            ))}
          </CardPanel>
        </Card>
      </CardFrame>

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
