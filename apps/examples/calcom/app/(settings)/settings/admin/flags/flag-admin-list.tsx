"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@coss/ui/components/avatar";
import { Button } from "@coss/ui/components/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@coss/ui/components/collapsible";
import { Frame, FrameHeader, FramePanel } from "@coss/ui/components/frame";
import { Input } from "@coss/ui/components/input";
import { Label } from "@coss/ui/components/label";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
} from "@coss/ui/components/sheet";
import { Switch } from "@coss/ui/components/switch";
import { toastManager } from "@coss/ui/components/toast";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import { ChevronDownIcon, UsersIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

interface FeatureFlag {
  slug: string;
  description: string;
  enabled: boolean;
  type: string;
}

interface AssignableUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

const FEATURE_FLAGS: FeatureFlag[] = [
  {
    description: "تمكين التخزين المؤقت للتقويم لتحسين الأداء",
    enabled: true,
    slug: "calendar-cache",
    type: "العمليات",
  },
  {
    description: "خدمة بيانات التقويم المخزنة مؤقتًا للمستخدمين",
    enabled: true,
    slug: "calendar-cache-serve",
    type: "العمليات",
  },
  {
    description: "تمكين إشعارات البريد الإلكتروني",
    enabled: true,
    slug: "emails",
    type: "العمليات",
  },
  {
    description: "تمكين لوحة معلومات الرؤى",
    enabled: true,
    slug: "insights",
    type: "العمليات",
  },
  {
    description: "تمكين وظائف الفريق",
    enabled: true,
    slug: "teams",
    type: "العمليات",
  },
  {
    description: "تمكين تكامل خطاف الويب",
    enabled: true,
    slug: "webhooks",
    type: "العمليات",
  },
  {
    description: "تمكين أتمتة سير العمل",
    enabled: true,
    slug: "workflows",
    type: "العمليات",
  },
  {
    description: "تمكين ميزات المؤسسة",
    enabled: true,
    slug: "organizations",
    type: "العمليات",
  },
  {
    description: "تتطلب التحقق من البريد الإلكتروني أثناء التسجيل",
    enabled: true,
    slug: "email-verification",
    type: "العمليات",
  },
  {
    description: "تعطيل اشتراكات المستخدم الجديدة",
    enabled: false,
    slug: "disable-signup",
    type: "العمليات",
  },
  {
    description: "تمكين تكامل دليل غوغل مساحة العمل",
    enabled: false,
    slug: "google-workspace-directory",
    type: "تجربة",
  },
  {
    description: "تمكين سمات المستخدم للتوجيه",
    enabled: true,
    slug: "attributes",
    type: "تجربة",
  },
  {
    description: "استخدام تحديث طلب منظم قالب البريد الإلكتروني",
    enabled: false,
    slug: "organizer-request-email-v2",
    type: "تجربة",
  },
  {
    description: "تمكين خاصية اعتماد التفويض",
    enabled: false,
    slug: "delegation-credential",
    type: "تجربة",
  },
  {
    description: "تمكين تكامل المهام Salesforce إدارة العملاء",
    enabled: false,
    slug: "salesforce-crm-tasker",
    type: "تجربة",
  },
  {
    description: "استخدام SMTP لرسائل البريد الإلكتروني الخاصة بسير العمل",
    enabled: false,
    slug: "workflow-smtp-emails",
    type: "تجربة",
  },
  {
    description: "إظهار تراكب تسجيل الدخول على كال Video",
    enabled: false,
    slug: "cal-video-log-in-overlay",
    type: "تجربة",
  },
  {
    description: "تمكين التحكم في الوصول المستند إلى الإذن",
    enabled: false,
    slug: "pbac",
    type: "تجربة",
  },
  {
    description: "تمكين ميزة جدول التقييد",
    enabled: false,
    slug: "restriction-schedule",
    type: "تجربة",
  },
  {
    description: "تمكين تجربة الحجوزات الجديدة (v3)",
    enabled: false,
    slug: "bookings-v3",
    type: "تجربة",
  },
  {
    description: "تمكين تسجيل تدقيق الحجز",
    enabled: false,
    slug: "booking-audit",
    type: "تجربة",
  },
  {
    description: "تمكين نصائح الشريط الجانبي للإعداد",
    enabled: true,
    slug: "sidebar-tips",
    type: "مفتاح الإيقاف",
  },
  {
    description: "تمكين دردشة الدعم المتدرج",
    enabled: false,
    slug: "tiered-support-chat",
    type: "مفتاح الإيقاف",
  },
  {
    description: "مراجعة الاشتراك ضد قائمة المراقبة",
    enabled: false,
    slug: "signup-watchlist-review",
    type: "مفتاح الإيقاف",
  },
];

const USERS: AssignableUser[] = [
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1994776674391457792/7utKOMi6_400x400.jpg",
    email: "pasquale@cal.com",
    id: "usr_pasquale",
    name: "محمد أحمد",
  },
  {
    email: "margaret@cal.com",
    id: "usr_margaret",
    name: "مارجريت ويلز",
  },
  {
    email: "brian@cal.com",
    id: "usr_brian",
    name: "بريان سميث",
  },
  {
    email: "anna@cal.com",
    id: "usr_anna",
    name: "آنا تايلور",
  },
  {
    email: "sofia@cal.com",
    id: "usr_sofia",
    name: "صوفيا رودريغيز",
  },
  {
    email: "david@cal.com",
    id: "usr_david",
    name: "ديفيد تشن",
  },
  {
    email: "elena@cal.com",
    id: "usr_elena",
    name: "إيلينا روسي",
  },
  {
    email: "james@cal.com",
    id: "usr_james",
    name: "جيمس لي",
  },
];

function groupFlagsByType(flags: FeatureFlag[]) {
  const grouped: Record<string, FeatureFlag[]> = {};

  for (const flag of flags) {
    const type = flag.type;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(flag);
  }

  return grouped;
}

export function FlagAdminList() {
  const [flags, setFlags] = useState(FEATURE_FLAGS);
  const [activeFlagSlug, setActiveFlagSlug] = useState<string | null>(null);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [isAssignSheetOpen, setIsAssignSheetOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredUsers = useMemo(() => {
    const normalizedQuery = userQuery.trim().toLowerCase();

    if (!normalizedQuery) return USERS;

    return USERS.filter((user) =>
      [user.name, user.email].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [userQuery]);

  const visibleUsers = filteredUsers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredUsers.length;

  const groupedFlags = groupFlagsByType(flags);
  const sortedTypes = Object.keys(groupedFlags).sort();

  function handleToggle(slug: string, checked: boolean) {
    setFlags((prev) =>
      prev.map((flag) =>
        flag.slug === slug ? { ...flag, enabled: checked } : flag,
      ),
    );
    toastManager.add({
      title: "تم تحديث الأعلام بنجاح",
      type: "success",
    });
  }

  function handleAssignUsersClick(slug: string) {
    setActiveFlagSlug(slug);
    setVisibleCount(5);
    setIsAssignSheetOpen(true);
  }

  function handleUserAssignedChange(userId: string, checked: boolean) {
    setSelectedUserIds((prev) => {
      if (checked && !prev.includes(userId)) return [...prev, userId];
      if (!checked) return prev.filter((id) => id !== userId);
      return prev;
    });
  }

  function handleSaveAssignments() {
    toastManager.add({
      title: "تم تعيين المستخدمين بنجاح",
      type: "success",
    });
  }

  return (
    <Sheet onOpenChange={setIsAssignSheetOpen} open={isAssignSheetOpen}>
      <div className="flex flex-col gap-4">
        {sortedTypes.map((type) => (
          <FlagGroup
            flags={groupedFlags[type] ?? []}
            key={type}
            onAssignUsers={handleAssignUsersClick}
            onToggle={handleToggle}
            type={type}
          />
        ))}
      </div>

      <SheetPopup variant="inset">
        <SheetHeader>
          <SheetTitle>تعيين إلى المستخدمين</SheetTitle>
          <SheetDescription>
            {activeFlagSlug
              ? `تعيين ${activeFlagSlug} إلى مستخدم واحد أو أكثر.`
              : "قم بتعيين هذه العلامة إلى مستخدم واحد أو أكثر."}
          </SheetDescription>
        </SheetHeader>

        <SheetPanel className="flex flex-col gap-3">
          <Input
            onChange={(e) => {
              setUserQuery(e.currentTarget.value);
              setVisibleCount(5);
            }}
            placeholder="البحث عن المستخدمين ..."
            value={userQuery}
          />
          <div className="flex flex-col gap-2">
            {visibleUsers.map((user) => {
              const switchId = `assign-flag-user-${user.id}`;

              return (
                <Label
                  className="flex items-center justify-between gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
                  htmlFor={switchId}
                  key={user.id}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar className="size-8">
                      {user.avatarUrl && (
                        <AvatarImage alt={user.name} src={user.avatarUrl} />
                      )}
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <p className="truncate font-medium text-sm">
                        {user.name}
                      </p>
                      <p className="truncate text-muted-foreground text-xs">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <Switch
                    checked={selectedUserIds.includes(user.id)}
                    className="[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3)]"
                    id={switchId}
                    onCheckedChange={(checked) =>
                      handleUserAssignedChange(user.id, checked)
                    }
                  />
                </Label>
              );
            })}
          </div>
          {hasMore && (
            <Button
              className="w-full"
              onClick={() => setVisibleCount((prev) => prev + 5)}
              variant="outline"
            >
              تحميل المزيد
            </Button>
          )}
        </SheetPanel>

        <SheetFooter>
          <SheetClose render={<Button variant="ghost" />}>إلغاء</SheetClose>
          <SheetClose onClick={handleSaveAssignments} render={<Button />}>
            حفظ
          </SheetClose>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}

interface FlagGroupProps {
  type: string;
  flags: FeatureFlag[];
  onToggle: (slug: string, checked: boolean) => void;
  onAssignUsers: (slug: string) => void;
}

function FlagGroup({ type, flags, onAssignUsers, onToggle }: FlagGroupProps) {
  return (
    <Frame>
      <Collapsible defaultOpen>
        <FrameHeader className="flex flex-row items-center justify-between px-2 py-2">
          <CollapsibleTrigger
            className="data-panel-open:[&_svg]:rotate-180"
            render={<Button variant="ghost" />}
          >
            <ChevronDownIcon />
            {type}
          </CollapsibleTrigger>
        </FrameHeader>
        <CollapsiblePanel>
          <FramePanel className="p-0">
            {flags.map((flag) => (
              <ListItem key={flag.slug}>
                <ListItemContent>
                  <ListItemHeader>
                    <ListItemTitle>{flag.slug}</ListItemTitle>
                    <ListItemDescription>
                      {flag.description}
                    </ListItemDescription>
                  </ListItemHeader>
                </ListItemContent>
                <ListItemActions>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Switch
                          checked={flag.enabled}
                          onCheckedChange={(checked) =>
                            handleToggle(flag.slug, checked)
                          }
                        />
                      }
                    />
                    <TooltipPopup sideOffset={11}>
                      {flag.enabled ? "تعطيل العلم" : "تمكين العلم"}
                    </TooltipPopup>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          aria-label="تعيين إلى المستخدمين"
                          onClick={() => onAssignUsers(flag.slug)}
                          size="icon"
                          variant="outline"
                        >
                          <UsersIcon />
                        </Button>
                      }
                    />
                    <TooltipPopup sideOffset={11}>
                      تعيين إلى المستخدمين
                    </TooltipPopup>
                  </Tooltip>
                </ListItemActions>
              </ListItem>
            ))}
          </FramePanel>
        </CollapsiblePanel>
      </Collapsible>
    </Frame>
  );

  function handleToggle(slug: string, checked: boolean) {
    onToggle(slug, checked);
  }
}
