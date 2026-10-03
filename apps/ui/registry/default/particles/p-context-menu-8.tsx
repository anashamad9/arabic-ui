import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuPopup,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu";

export default function Particle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
        انقر هنا بالزر الأيمن
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuCheckboxItem defaultChecked variant="switch">
          حفظ تلقائي
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem variant="switch">
          عرض المعاينة
        </ContextMenuCheckboxItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
