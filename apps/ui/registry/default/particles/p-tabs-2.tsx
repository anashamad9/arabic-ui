import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";

export default function Particle() {
  return (
    <Tabs defaultValue="tab-1">
      <div className="border-b">
        <TabsList variant="underline">
          <TabsTab value="tab-1">التبويب الأول</TabsTab>
          <TabsTab value="tab-2">التبويب الثاني</TabsTab>
          <TabsTab value="tab-3">التبويب الثالث</TabsTab>
        </TabsList>
      </div>
      <TabsPanel value="tab-1">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الأول
        </p>
      </TabsPanel>
      <TabsPanel value="tab-2">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الثاني
        </p>
      </TabsPanel>
      <TabsPanel value="tab-3">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الثالث
        </p>
      </TabsPanel>
    </Tabs>
  );
}
