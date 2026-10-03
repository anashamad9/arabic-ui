"use client";

import { LinkIcon, MailIcon, Share2Icon } from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/registry/default/ui/button";
import { Group, GroupSeparator } from "@/registry/default/ui/group";
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const tooltipHandle = TooltipCreateHandle<ComponentType>();

const ShareLinkContent = () => {
  return <span>انسخ الرابط المشترك</span>;
};

const ShareEmailContent = () => {
  return <span>مشاركة عبر البريد الإلكتروني</span>;
};

const ShareSocialContent = () => {
  return <span>مشاركة على وسائل التواصل الاجتماعي</span>;
};

export default function Particle() {
  return (
    <TooltipProvider>
      <Group aria-label="خيارات المشاركة" orientation="vertical">
        <TooltipTrigger
          handle={tooltipHandle}
          payload={ShareLinkContent}
          render={
            <Button aria-label="انسخ الرابط" size="icon" variant="outline" />
          }
        >
          <LinkIcon aria-hidden="true" />
        </TooltipTrigger>
        <GroupSeparator orientation="horizontal" />
        <TooltipTrigger
          handle={tooltipHandle}
          payload={ShareEmailContent}
          render={
            <Button
              aria-label="مشاركة عبر البريد الإلكتروني"
              size="icon"
              variant="outline"
            />
          }
        >
          <MailIcon aria-hidden="true" />
        </TooltipTrigger>
        <GroupSeparator orientation="horizontal" />
        <TooltipTrigger
          handle={tooltipHandle}
          payload={ShareSocialContent}
          render={
            <Button
              aria-label="مشاركة إلى الاجتماعية"
              size="icon"
              variant="outline"
            />
          }
        >
          <Share2Icon aria-hidden="true" />
        </TooltipTrigger>
      </Group>
      <Tooltip handle={tooltipHandle}>
        {({ payload: Payload }) => (
          <TooltipPopup className="max-w-40" side="right">
            {Payload !== undefined && <Payload />}
          </TooltipPopup>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
