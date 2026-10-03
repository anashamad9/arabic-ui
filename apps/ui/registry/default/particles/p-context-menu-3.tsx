import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu";

export default function Particle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
        انقر هنا بالزر الأيمن
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>قص</ContextMenuItem>
        <ContextMenuItem>نسخ</ContextMenuItem>
        <ContextMenuItem>لصق</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>مشاركة</ContextMenuSubTrigger>
          <ContextMenuSubPopup>
            <ContextMenuItem>رابط البريد الإلكتروني</ContextMenuItem>
            <ContextMenuItem>الرسائل</ContextMenuItem>
            <ContextMenuItem>ملاحظات</ContextMenuItem>
          </ContextMenuSubPopup>
        </ContextMenuSub>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
