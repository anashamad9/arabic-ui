import Link from "next/link";
import {
  ContextMenu,
  ContextMenuLinkItem,
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
        <ContextMenuLinkItem render={<Link href="/docs" />}>
          التوثيق
        </ContextMenuLinkItem>
        <ContextMenuLinkItem render={<Link href="/particles" />}>
          الأمثلة
        </ContextMenuLinkItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
