import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs className="items-center" defaultValue="tab-1">
      <TabsList className="bg-transparent">
        <TabsTrigger
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-1"
        >
          التبويب الأول
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-2"
        >
          التبويب الثاني
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-3"
        >
          التبويب الثالث
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
