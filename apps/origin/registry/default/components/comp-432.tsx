import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
        <TabsTrigger
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          value="tab-1"
        >
          التبويب الأول
        </TabsTrigger>
        <TabsTrigger
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          value="tab-2"
        >
          التبويب الثاني
        </TabsTrigger>
        <TabsTrigger
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
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
