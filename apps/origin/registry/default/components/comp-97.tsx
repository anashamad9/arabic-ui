import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button
      aria-label="إضافة عنصر جديد"
      className="rounded-full"
      size="icon"
      variant="outline"
    >
      <PlusIcon aria-hidden="true" size={16} />
    </Button>
  );
}
