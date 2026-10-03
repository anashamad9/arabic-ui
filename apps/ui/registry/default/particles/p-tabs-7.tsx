import { HouseIcon, PanelsTopLeftIcon, SettingsIcon } from "lucide-react";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";

export default function Particle() {
  return (
    <Tabs defaultValue="tab-1">
      <div className="border-b">
        <TabsList variant="underline">
          <TabsTab value="tab-1">
            <HouseIcon aria-hidden="true" />
            نظرة عامة
          </TabsTab>
          <TabsTab value="tab-2">
            <PanelsTopLeftIcon aria-hidden="true" />
            المشاريع
          </TabsTab>
          <TabsTab value="tab-3">
            <SettingsIcon aria-hidden="true" />
            الإعدادات
          </TabsTab>
        </TabsList>
      </div>
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
  );
}
