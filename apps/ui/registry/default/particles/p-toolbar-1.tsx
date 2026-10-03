"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DollarSignIcon,
  PercentIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/registry/default/ui/toolbar";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const items = [
  { label: "Helvetica", value: "helvetica" },
  { label: "Arial", value: "arial" },
  { label: "تايمز نيو رومان", value: "times-new-roman" },
];

export default function Particle() {
  return (
    <TooltipProvider>
      <Toolbar>
        <ToggleGroup className="border-none p-0" defaultValue={["left"]}>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="محاذاة اليسار"
                  render={<ToggleGroupItem value="left" />}
                >
                  <AlignLeftIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>محاذاة اليسار</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="محاذاة إلى الوسط"
                  render={
                    <ToggleGroupItem aria-label="مركز تبديل" value="center" />
                  }
                >
                  <AlignCenterIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>محاذاة إلى الوسط</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="محاذاة إلى اليمين"
                  render={
                    <ToggleGroupItem aria-label="تبديل اليمين" value="right" />
                  }
                >
                  <AlignRightIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>محاذاة إلى اليمين</TooltipPopup>
          </Tooltip>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="الشكل كعملة"
                  render={<Button size="icon" variant="ghost" />}
                >
                  <DollarSignIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>الشكل كعملة</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="الشكل كنسبة مئوية"
                  render={<Button size="icon" variant="ghost" />}
                >
                  <PercentIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>الشكل كنسبة مئوية</TooltipPopup>
          </Tooltip>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Select defaultValue="helvetica" items={items}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    render={
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    }
                  />
                }
              />
              <TooltipPopup sideOffset={8}>حدد خط مختلف</TooltipPopup>
            </Tooltip>
            <SelectPopup>
              {items.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton render={<Button />}>حفظ</ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    </TooltipProvider>
  );
}
