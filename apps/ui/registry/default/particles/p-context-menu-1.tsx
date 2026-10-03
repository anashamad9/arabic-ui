import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu";

export default function Particle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
        انقر هنا بالزر الأيمن
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>رجوع</ContextMenuItem>
        <ContextMenuItem>إلى الأمام</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>إعادة تحميل</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
