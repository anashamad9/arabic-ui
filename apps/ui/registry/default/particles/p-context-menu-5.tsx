import {
  ContextMenu,
  ContextMenuGroup,
  ContextMenuGroupLabel,
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
        <ContextMenuGroup>
          <ContextMenuGroupLabel>ملف</ContextMenuGroupLabel>
          <ContextMenuItem>إعادة تسمية</ContextMenuItem>
          <ContextMenuItem>إنشاء نسخة</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>مشاركة</ContextMenuGroupLabel>
          <ContextMenuItem>إرسال نسخة</ContextMenuItem>
          <ContextMenuItem>تصدير تصدير التصدير</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
