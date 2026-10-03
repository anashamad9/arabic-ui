import { Badge } from "@/registry/default/ui/badge";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";

export default function Particle() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTab value="tab-1">
          الكل
          <Badge
            className="not-in-data-active:text-muted-foreground"
            variant="outline"
          >
            128
          </Badge>
        </TabsTab>
        <TabsTab value="tab-2">
          قيد الانتظار
          <Badge
            className="not-in-data-active:text-muted-foreground"
            variant="outline"
          >
            8
          </Badge>
        </TabsTab>
        <TabsTab value="tab-3">
          مكتمل
          <Badge
            className="not-in-data-active:text-muted-foreground"
            variant="outline"
          >
            120
          </Badge>
        </TabsTab>
      </TabsList>
      <TabsPanel value="tab-1">
        <p className="p-4 text-center text-muted-foreground text-xs">
          جميع العناصر المحتوى
        </p>
      </TabsPanel>
      <TabsPanel value="tab-2">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى العناصر المعلقة
        </p>
      </TabsPanel>
      <TabsPanel value="tab-3">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى العناصر المكتملة
        </p>
      </TabsPanel>
    </Tabs>
  );
}
