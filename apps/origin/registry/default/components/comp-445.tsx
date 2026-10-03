import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs
      className="w-full flex-row"
      defaultValue="tab-1"
      orientation="vertical"
    >
      <TabsList className="flex-col gap-1 bg-transparent py-0">
        <TabsTrigger
          className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-1"
        >
          نظرة عامة
        </TabsTrigger>
        <TabsTrigger
          className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-2"
        >
          المشاريع
        </TabsTrigger>
        <TabsTrigger
          className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none"
          value="tab-3"
        >
          الحزم
        </TabsTrigger>
      </TabsList>
      <div className="grow rounded-md border text-start">
        <TabsContent value="tab-1">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            محتوى التبويب الأول
          </p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            محتوى التبويب الثاني
          </p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            محتوى التبويب الثالث
          </p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
