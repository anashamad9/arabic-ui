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
import { Card, CardPanel } from "@coss/ui/components/card";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
} from "@coss/ui/components/dialog";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/ui/components/empty";
import { Field, FieldLabel } from "@coss/ui/components/field";
import { Input } from "@coss/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@coss/ui/components/input-group";
import { ScrollArea } from "@coss/ui/components/scroll-area";
import { Switch } from "@coss/ui/components/switch";
import { toastManager } from "@coss/ui/components/toast";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@coss/ui/components/tooltip";
import { useMediaQuery } from "@coss/ui/hooks/use-media-query";
import {
  BarChart3Icon,
  CalendarIcon,
  CameraIcon,
  CreditCardIcon,
  HashIcon,
  Link2Icon,
  MessageSquareIcon,
  SearchIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderDescription,
} from "@/components/app/app-header";
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemHeader,
  ListItemTitle,
} from "@/components/list-item";

interface AnalyticsApp {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  enabled: boolean;
  configured?: boolean;
  configurable?: boolean;
  slug: string;
}

const ANALYTICS_APPS: AnalyticsApp[] = [
  {
    configurable: false,
    description:
      "تحليلات الويب للخصوصية أولاً للتطوير (بديل غوغل التحليلات) - 3 كيلو بايت ، متوافق مع حماية البيانات",
    enabled: false,
    icon: BarChart3Icon,
    id: "databuddy",
    name: "داتابادي",
    slug: "databuddy",
  },
  {
    configurable: true,
    configured: true,
    description:
      "دَب هي منصة إسناد الارتباط الحديثة بالنسبة لك لإنشاء روابط قصيرة ، وتتبع تحليلات التحويل ، وتشغيل البرامج التابعة.",
    enabled: true,
    icon: Link2Icon,
    id: "dub",
    name: "دوب",
    slug: "dub",
  },
  {
    configurable: false,
    description:
      "يوفر فاذوم التحليلات تحليلات موقع ويب بسيطة تركز على الخصوصية. نحن بديل متوافق مع حماية البيانات ، غوغل التحليلات.",
    enabled: false,
    icon: BarChart3Icon,
    id: "fathom",
    name: "الفتح",
    slug: "fathom",
  },
  {
    configurable: true,
    description:
      "غوغل التحليلات هي خدمة تحليلات الويب التي تقدمها غوغل والتي تتعقب حركة مرور موقع الويب والإبلاغ عنها ، حاليًا كمنصة داخل العلامة التجارية لـ غوغل منصة التسويق.",
    enabled: false,
    icon: BarChart3Icon,
    id: "google-analytics",
    name: "غوغل التحليلات",
    slug: "google-analytics",
  },
  {
    configurable: false,
    description: "تطبيق غوغل مدير الوسوم",
    enabled: false,
    icon: BarChart3Icon,
    id: "google-tag-manager",
    name: "غوغل مدير الوسوم",
    slug: "google-tag-manager",
  },
  {
    configurable: false,
    description:
      "Insihts is an all-in-one platform for businesses looking to track user behavior, optimize workflows, and make data-driven decisions. Whether you are a marketer, product manager, or part of a customer success team, Insihts provides the tools you need to succeed.",
    enabled: false,
    icon: BarChart3Icon,
    id: "insihts",
    name: "التحليلات",
    slug: "insihts",
  },
  {
    configurable: false,
    description: "بديل غوغل التحليلات الذي يحمي بياناتك وخصوصية عملائك",
    enabled: false,
    icon: BarChart3Icon,
    id: "matomo",
    name: "ماتومو",
    slug: "matomo",
  },
  {
    configurable: true,
    description:
      "أضف بكسل ميتا إلى صفحة حجوزاتك لقياس الجماهير وتحسينها وبنائها لحملاتك الإعلانية.",
    enabled: false,
    icon: BarChart3Icon,
    id: "meta-pixel",
    name: "ميتا بكسل",
    slug: "meta-pixel",
  },
  {
    configurable: false,
    description: "غوغل التحليلات بسيطة وصديقة للخصوصية",
    enabled: false,
    icon: BarChart3Icon,
    id: "plausible",
    name: "معقول",
    slug: "plausible",
  },
];

const APP_CATEGORIES = [
  {
    href: "/settings/admin/apps/analytics",
    icon: BarChart3Icon,
    id: "analytics",
    label: "التحليلات",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: Link2Icon,
    id: "ai-automation",
    label: "الذكاء الاصطناعي والأتمتة",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: CalendarIcon,
    id: "calendar",
    label: "التقويم",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: CameraIcon,
    id: "conferencing",
    label: "المؤتمرات",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: BarChart3Icon,
    id: "crm",
    label: "إدارة العملاء",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: MessageSquareIcon,
    id: "messaging",
    label: "المراسلة",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: CreditCardIcon,
    id: "payment",
    label: "الدفع",
  },
  {
    href: "/settings/admin/apps/analytics",
    icon: HashIcon,
    id: "other",
    label: "أخرى",
  },
] as const;

function AppIcon({
  icon: Icon,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted"
    >
      <Icon className={className ?? "size-5 text-muted-foreground"} />
    </div>
  );
}

function AnalyticsAppRow({
  app,
  onToggle,
  onConfigure,
}: {
  app: AnalyticsApp;
  onToggle: (slug: string, checked: boolean) => void;
  onConfigure: (slug: string) => void;
}) {
  const Icon = app.icon;

  return (
    <ListItem>
      <ListItemContent>
        <div className="flex min-w-0 items-start gap-4">
          <AppIcon icon={Icon} />
          <ListItemHeader>
            <ListItemTitle>{app.name}</ListItemTitle>
            <ListItemDescription className="line-clamp-2">
              {app.description}
            </ListItemDescription>
            {app.configurable && (
              <Button
                aria-label={`تعديل ${app.name} keys`}
                className="mt-2 w-fit"
                onClick={() => onConfigure(app.slug)}
                size="xs"
                variant="outline"
              >
                تحرير المفاتيح
              </Button>
            )}
          </ListItemHeader>
        </div>
      </ListItemContent>
      <ListItemActions>
        <Tooltip>
          <TooltipTrigger
            render={
              <Switch
                checked={app.enabled}
                onCheckedChange={(checked) => onToggle(app.slug, checked)}
              />
            }
          />
          <TooltipPopup sideOffset={11}>
            {app.enabled ? `تعطيل ${app.name}` : `تفعيل ${app.name}`}
          </TooltipPopup>
        </Tooltip>
      </ListItemActions>
    </ListItem>
  );
}

export function AnalyticsAppsContent() {
  const isSmallScreen = useMediaQuery("max-sm");
  const pathname = usePathname();
  const router = useRouter();
  const [apps, setApps] = useState(ANALYTICS_APPS);
  const [searchQuery, setSearchQuery] = useState("");
  const [disableDialogAppSlug, setDisableDialogAppSlug] = useState<
    string | null
  >(null);
  const [editDialogAppSlug, setEditDialogAppSlug] = useState<string | null>(
    null,
  );
  const [editKeys, setEditKeys] = useState({
    client_id: "",
    client_secret: "",
  });

  const filteredApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return apps;

    return apps.filter(
      (app) =>
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query),
    );
  }, [apps, searchQuery]);

  function handleToggle(slug: string, checked: boolean) {
    if (!checked) {
      setDisableDialogAppSlug(slug);
      return;
    }

    setApps((prev) =>
      prev.map((app) =>
        app.slug === slug ? { ...app, enabled: checked } : app,
      ),
    );
    toastManager.add({
      title: "تمكين التطبيق",
      type: "success",
    });
  }

  function handleDisableConfirm() {
    if (!disableDialogAppSlug) return;

    setApps((prev) =>
      prev.map((app) =>
        app.slug === disableDialogAppSlug ? { ...app, enabled: false } : app,
      ),
    );
    toastManager.add({
      title: "تعطيل التطبيق",
      type: "success",
    });
    setDisableDialogAppSlug(null);
  }

  function handleDisableDialogOpenChange(open: boolean) {
    if (!open) setDisableDialogAppSlug(null);
  }

  function handleConfigure(slug: string) {
    setEditKeys({ client_id: "", client_secret: "" });
    setEditDialogAppSlug(slug);
  }

  function handleEditDialogOpenChange(open: boolean) {
    if (!open) setEditDialogAppSlug(null);
  }

  function handleEditKeysSave() {
    toastManager.add({
      title: "تم حفظ المفاتيح",
      type: "success",
    });
    setEditDialogAppSlug(null);
  }

  const renderCategoryButton = (category: (typeof APP_CATEGORIES)[number]) => {
    const Icon = category.icon;
    const isActive = pathname.endsWith("/analytics")
      ? category.id === "analytics"
      : pathname === category.href;

    return (
      <Button
        className="justify-start"
        data-pressed={isActive ? true : undefined}
        key={category.id}
        onClick={() => router.push(category.href)}
        variant="ghost"
      >
        <Icon aria-hidden="true" />
        {category.label}
      </Button>
    );
  };

  return (
    <>
      <AlertDialog
        onOpenChange={handleDisableDialogOpenChange}
        open={disableDialogAppSlug !== null}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>تعطيل التطبيق</AlertDialogTitle>
            <AlertDialogDescription>
              تعطيل هذا التطبيق يمكن أن يسبب مشاكل مع كيفية تفاعل المستخدمين مع
              كال
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              إلغاء
            </AlertDialogClose>
            <AlertDialogClose
              onClick={handleDisableConfirm}
              render={<Button>تأكيد</Button>}
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>

      <Dialog
        onOpenChange={handleEditDialogOpenChange}
        open={editDialogAppSlug !== null}
      >
        <DialogPopup showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>تحرير المفاتيح</DialogTitle>
          </DialogHeader>
          <DialogPanel className="flex flex-col gap-4">
            <Field>
              <FieldLabel>client_id</FieldLabel>
              <Input
                onChange={(e) =>
                  setEditKeys((prev) => ({
                    ...prev,
                    client_id: e.currentTarget.value,
                  }))
                }
                type="text"
                value={editKeys.client_id}
              />
            </Field>
            <Field>
              <FieldLabel>client_secret</FieldLabel>
              <Input
                onChange={(e) =>
                  setEditKeys((prev) => ({
                    ...prev,
                    client_secret: e.currentTarget.value,
                  }))
                }
                type="text"
                value={editKeys.client_secret}
              />
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>إغلاق</DialogClose>
            <Button onClick={handleEditKeysSave}>حفظ</Button>
          </DialogFooter>
        </DialogPopup>
      </Dialog>

      <AppHeader>
        <AppHeaderContent title="التطبيقات">
          <AppHeaderDescription>
            تمكين التطبيقات لمثيلك من كال
          </AppHeaderDescription>
        </AppHeaderContent>
      </AppHeader>
      <div className="flex flex-col gap-6 sm:flex-row">
        {isSmallScreen ? (
          <ScrollArea
            className="-mx-4 w-[calc(100%+--spacing(4)*2)]"
            overscrollContain
            scrollbarGutter
          >
            <div className="flex w-max gap-0.5 px-4">
              {APP_CATEGORIES.map((category) => (
                <div className="shrink-0" key={category.id}>
                  {renderCategoryButton(category)}
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <nav
            aria-label="فئات التطبيقات"
            className="sticky top-4 flex w-48 shrink-0 flex-col gap-0.5 self-start"
          >
            {APP_CATEGORIES.map(renderCategoryButton)}
          </nav>
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-4">
            <InputGroup className="w-full">
              <InputGroupInput
                aria-label="البحث عن تطبيقات التحليلات"
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                placeholder="تطبيقات البحث ..."
                type="search"
                value={searchQuery}
              />
              <InputGroupAddon>
                <SearchIcon aria-hidden="true" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {filteredApps.length > 0 ? (
            <Card>
              <CardPanel className="p-0">
                {filteredApps.map((app) => (
                  <AnalyticsAppRow
                    app={app}
                    key={app.id}
                    onConfigure={handleConfigure}
                    onToggle={handleToggle}
                  />
                ))}
              </CardPanel>
            </Card>
          ) : (
            <Empty className="rounded-xl border border-dashed">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchIcon aria-hidden="true" />
                </EmptyMedia>
                <EmptyTitle>لم يتم العثور على تطبيقات</EmptyTitle>
                <EmptyDescription>
                  جرب مصطلح بحث مختلف أو تصفح فئة أخرى
                </EmptyDescription>
              </EmptyHeader>
              <Button onClick={() => setSearchQuery("")} variant="outline">
                مسح البحث
              </Button>
            </Empty>
          )}
        </div>
      </div>
    </>
  );
}
