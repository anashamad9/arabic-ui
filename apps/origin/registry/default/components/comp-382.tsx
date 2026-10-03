"use client";

import { BellIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

const initialNotifications = [
  {
    action: "الاستعراض المطلوب",
    id: 1,
    target: "PR #42: تطبيق الميزة",
    timestamp: "منذ 15 دقيقة",
    unread: true,
    user: "كريس تومبسون",
  },
  {
    action: "shared",
    id: 2,
    target: "مكتبة المكونات الجديدة",
    timestamp: "منذ 45 دقيقة",
    unread: true,
    user: "إيما ديفيس",
  },
  {
    action: "تعيينك إلى",
    id: 3,
    target: "مهمة تكامل واجهة برمجة التطبيقات",
    timestamp: "منذ 4 ساعات",
    unread: false,
    user: "عمر خالد",
  },
  {
    action: "ردت على تعليقك في",
    id: 4,
    target: "تدفق المصادقة",
    timestamp: "منذ 12 ساعة",
    unread: false,
    user: "أليكس مورغان",
  },
  {
    action: "التعليق على",
    id: 5,
    target: "إعادة تصميم لوحة المعلومات",
    timestamp: "منذ يومين",
    unread: false,
    user: "سارة أحمد",
  },
  {
    action: "ذكرت لك في",
    id: 6,
    target: "COSS UI/Arabic فتح صورة الرسم البياني",
    timestamp: "منذ 2 أسابيع",
    unread: false,
    user: "ميكي ديريا",
  },
];

function Dot({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height="6"
      viewBox="0 0 6 6"
      width="6"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export default function Component() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label="فتح الإشعارات"
          className="relative"
          size="icon"
          variant="outline"
        >
          <BellIcon aria-hidden="true" size={16} />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1">
        <div className="flex items-baseline justify-between gap-4 px-3 py-2">
          <div className="font-semibold text-sm">الإشعارات</div>
          {unreadCount > 0 && (
            <button
              className="font-medium text-xs hover:underline"
              onClick={handleMarkAllAsRead}
              type="button"
            >
              ضع علامة على كل ما يقرأ
            </button>
          )}
        </div>
        <div
          aria-orientation="horizontal"
          className="-mx-1 my-1 h-px bg-border"
          role="separator"
          tabIndex={-1}
        />
        {notifications.map((notification) => (
          <div
            className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
            key={notification.id}
          >
            <div className="relative flex items-start pe-3">
              <div className="flex-1 space-y-1">
                <button
                  className="text-start text-foreground/80 after:absolute after:inset-0"
                  onClick={() => handleNotificationClick(notification.id)}
                  type="button"
                >
                  <span className="font-medium text-foreground hover:underline">
                    {notification.user}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="font-medium text-foreground hover:underline">
                    {notification.target}
                  </span>
                  .
                </button>
                <div className="text-muted-foreground text-xs">
                  {notification.timestamp}
                </div>
              </div>
              {notification.unread && (
                <div className="absolute end-0 self-center">
                  <span className="sr-only">غير مقروء</span>
                  <Dot />
                </div>
              )}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
