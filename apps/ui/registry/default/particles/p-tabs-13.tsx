import { HouseIcon, PanelsTopLeftIcon, SettingsIcon } from "lucide-react";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Particle() {
  return (
    <TooltipProvider>
      <Tabs className="items-center" defaultValue="tab-1">
        <TabsList>
          <Tooltip>
            <TooltipTrigger
              render={<TabsTab aria-label="نظرة عامة" value="tab-1" />}
            >
              <HouseIcon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipPopup>نظرة عامة</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<TabsTab aria-label="المشاريع" value="tab-2" />}
            >
              <PanelsTopLeftIcon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipPopup>المشاريع</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<TabsTab aria-label="الإعدادات" value="tab-3" />}
            >
              <SettingsIcon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipPopup>الإعدادات</TooltipPopup>
          </Tooltip>
        </TabsList>
        <TabsPanel value="tab-1">
          <p className="p-4 text-center text-muted-foreground text-xs">
            نظرة عامة على المحتوى
          </p>
        </TabsPanel>
        <TabsPanel value="tab-2">
          <p className="p-4 text-center text-muted-foreground text-xs">
            محتوى المشاريع
          </p>
        </TabsPanel>
        <TabsPanel value="tab-3">
          <p className="p-4 text-center text-muted-foreground text-xs">
            إعدادات المحتوى
          </p>
        </TabsPanel>
      </Tabs>
    </TooltipProvider>
  );
}
