import { Badge } from "@/registry/default/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="mx-auto flex w-full max-w-xs bg-transparent">
        <TabsTrigger
          className="group flex-1 flex-col p-3 text-xs data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-1"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50">
            3
          </Badge>
          نظرة عامة
        </TabsTrigger>
        <TabsTrigger
          className="group flex-1 flex-col p-3 text-xs data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-2"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50">
            0
          </Badge>
          المشاريع
        </TabsTrigger>
        <TabsTrigger
          className="group flex-1 flex-col p-3 text-xs data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-3"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50">
            7
          </Badge>
          الحزم
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الأول
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الثاني
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 text-center text-muted-foreground text-xs">
          محتوى التبويب الثالث
        </p>
      </TabsContent>
    </Tabs>
  );
}
