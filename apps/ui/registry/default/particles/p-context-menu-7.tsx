import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu";

export default function Particle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
        انقر هنا بالزر الأيمن
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuRadioGroup defaultValue="system">
          <ContextMenuRadioItem value="light">فاتح</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">داكن</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">النظام</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
