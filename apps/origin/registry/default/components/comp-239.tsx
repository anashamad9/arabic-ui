"use client";

import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Separator,
} from "react-aria-components";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>قائمة الخيارات مع مجموعات الخيارات</Label>
      <div className="overflow-hidden rounded-md border border-input">
        <ListBox
          aria-label="اختر بعض الأطعمة"
          className="max-h-72 min-h-20 space-y-2 overflow-auto bg-background p-1 text-sm shadow-xs transition-[color,box-shadow]"
          defaultSelectedKeys={["lettuce", "tuna"]}
          selectionMode="multiple"
        >
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
              الخضار
            </Header>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="lettuce"
            >
              خس
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="tomato"
            >
              طماطم
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="onion"
            >
              بصل
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="-mx-1 my-2 h-px bg-border" />
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
              البروتين البروتين البروتيني
            </Header>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="ham"
            >
              لحم الخنزير
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="tuna"
            >
              تونة
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="tofu"
            >
              التوفو
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="-mx-1 my-2 h-px bg-border" />
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
              التوابل
            </Header>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="mayo"
            >
              المايونيز
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="mustard"
            >
              الخردل
            </ListBoxItem>
            <ListBoxItem
              className="relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-focus-visible:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
              id="ranch"
            >
              مزرعة
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>
      <p
        aria-live="polite"
        className="mt-2 text-muted-foreground text-xs"
        role="region"
      >
        مبني باستخدام{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          مكونات الوصول
        </a>
      </p>
    </div>
  );
}
