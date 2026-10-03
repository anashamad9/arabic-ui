import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs className="items-center" defaultValue="tab-1">
      <TabsList className="h-auto -space-x-px bg-background p-0 shadow-xs rtl:space-x-reverse">
        <TabsTrigger
          className="relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
          value="tab-1"
        >
          التبويب الأول
        </TabsTrigger>
        <TabsTrigger
          className="relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
          value="tab-2"
        >
          التبويب الثاني
        </TabsTrigger>
        <TabsTrigger
          className="relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
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
